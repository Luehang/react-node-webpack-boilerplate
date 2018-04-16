import React, { Component } from 'react';

import LoadSpinner from './LoadSpinner';
import Header from './Partials/Header';
import InputForm from './DigitalForms/InputForm';
import InputFormMockUps from './DigitalForms/InputFormMockUps';
import ActionButton from './DigitalForms/Forms/Settings/ActionButton';
import Alert from './Alert';

import defaultQuestionInput from './../data/defaultQuestionInput';
import serverData from './../data/test';

import materialJS from './../js/bin/materialize.min.js';

export default class FormUserInterface extends Component {
    constructor() {
        super();
        this.onFormTypeClick = this.onFormTypeClick.bind(this);
        this.toggleShowSetting = this.toggleShowSetting.bind(this);
        this.toggleRequired = this.toggleRequired.bind(this);
        this.handleFormTitleInput = this.handleFormTitleInput.bind(this);
        this.handleTitleInput = this.handleTitleInput.bind(this);
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleQuestionInput = this.handleQuestionInput.bind(this);
        this.handleOptionInput = this.handleOptionInput.bind(this);
        this.addMoreOption = this.addMoreOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.toggleFileType = this.toggleFileType.bind(this);
        this.toggleFileCheck = this.toggleFileCheck.bind(this);
        this.handleFileSettingsInput = this.handleFileSettingsInput.bind(this);
        this.handleLinearScaleLabelChange = this.handleLinearScaleLabelChange.bind(this);
        this.onLinearScaleValueClick = this.onLinearScaleValueClick.bind(this);
        this.handleGridInput = this.handleGridInput.bind(this);
        this.addMoreGridRows = this.addMoreGridRows.bind(this);
        this.addMoreGridColumns = this.addMoreGridColumns.bind(this);
        this.removeGrid = this.removeGrid.bind(this);

        this.addQuestion = this.addQuestion.bind(this);
        this.addTitle = this.addTitle.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.duplicateSection = this.duplicateSection.bind(this);
        this.deleteSection = this.deleteSection.bind(this);

        this.handleDeleteFormSubmit = this.handleDeleteFormSubmit.bind(this);
        this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
        this.convertAndAddData = this.convertAndAddData.bind(this);

        this.toggleAlert = this.toggleAlert.bind(this);
        this.onCloseAlert = this.onCloseAlert.bind(this);

        this.validateFormSection = this.validateFormSection.bind(this);
        this.validateNumberInput = this.validateNumberInput.bind(this);
        this.state = {
            id: "",
            form_title: "Untitled form",
            questions: "",
            editIndex: 0,
            alert: {
                isOpen: false,
                type: 'error',
                messages: []
            },
            isLoading: true,
            saved: false
        }
    }
    componentWillMount() {
        const formID = document.getElementById('form-id').getAttribute('value');
        if ( formID !== "/" ) {
            return fetch(`/admin/administration/add-form?id=${formID}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                return response.json();
            }).then((responseJson) => {
                if (responseJson.error) {
                    this.setState({
                        isLoading: false
                    });
                } else {
                    this.setState({
                        id: responseJson.id,
                        form_title: responseJson.title,
                        questions: this.convertAndAddData(responseJson),
                        isLoading: false,
                        saved: true
                    });
                }
            });
        } else {
            this.setState({
                questions: [defaultQuestionInput.getData("Multiple choice")],
                isLoading: false
            });
        }
        // this.setState({
        //     form_title: serverData.title,
        //     questions: this.convertAndAddData(serverData)
        // });
    }
    onFormTypeClick(e) {
        e.preventDefault();
        const { questions, editIndex } = this.state;
        const { text } = e.target;
        questions[editIndex].type = text;
        this.setState({
            questions
        });
        console.log(this.state.questions[editIndex].type);
    }
    toggleShowSetting(e) {
        e.preventDefault();
        const { name } = e.target;
        const { questions, editIndex } = this.state;
        if (/description/i.test(name)) {
            questions[editIndex].isDescription = !questions[editIndex].isDescription;
        }
        // if (/validation/i.test(name)) {
        //     questions[editIndex].validations.isValidation = !questions[editIndex].validations.isValidation;
        // }
        this.setState({
            questions
        });
        console.log('description', this.state.questions[editIndex].isDescription);
        // console.log('validations', this.state.questions[editIndex].validations.isValidation);
    }
    toggleRequired() {
        const { questions, editIndex } = this.state;
        questions[editIndex].required = !questions[editIndex].required;
        this.setState({
            questions
        });
        console.log(this.state.questions[editIndex].required);
    }
    handleFormTitleInput(e) {
        const { value } = e.target;
        this.setState({
            form_title: value
        });
        console.log(this.state.form_title);
    }
    handleTitleInput(e) {
        const { questions, editIndex } = this.state;
        questions[editIndex].title = e.target.value;
        this.setState({
            questions
        });
        console.log(this.state.questions[editIndex].title);
    }
    handleDescriptionInput(e) {
        const { questions, editIndex } = this.state;
        questions[editIndex].description = e.target.value;
        this.setState({
            questions
        });
        console.log(this.state.questions[editIndex].description);
    }
    handleQuestionInput(e) {
        const { questions, editIndex } = this.state;
        questions[editIndex].question = e.target.value;
        this.setState({
            questions
        });
        console.log(this.state.questions[editIndex].question);
    }
    handleOptionInput(e) {
        const index = typeof e.target.name == "number" ? 
            e.target.name : Number.parseInt(e.target.name.match(/[0-9 , \.]+/g)[0]);
        const { questions, editIndex } = this.state;
        questions[editIndex].options.splice(index, 1, e.target.value);
        this.setState({
            questions
        });
        console.log(this.state.questions[editIndex].options);
    }
    addMoreOption() {
        const { questions, editIndex } = this.state;
        questions[editIndex].options.push("");
        this.setState({
            questions
        });
    }
    removeOption(e) {
        const index = typeof e.target.alt == "number" ? 
            e.target.alt : Number.parseInt(e.target.alt.match(/[0-9 , \.]+/g)[0]);
        const { questions, editIndex } = this.state;
        questions[editIndex].options.splice(index, 1);
        this.setState({
            questions
        });
    }
    toggleFileType() {
        const { questions, editIndex } = this.state;
        questions[editIndex].upload_settings.isSpecificFileType = !questions[editIndex].upload_settings.isSpecificFileType;
        this.setState({
            questions
        });
    }
    toggleFileCheck(e) {
        const { questions, editIndex } = this.state;
        const {  
            document, spreadsheet, pdf, video,
            presentation, drawing, image, audio
        } = questions[editIndex].upload_settings.file_type;
        const type = e.target.name;
        if (type.toLowerCase() == 'document') {
            questions[editIndex].upload_settings.file_type.document = !document;
        } else if (type.toLowerCase() == 'spreadsheet') {
            questions[editIndex].upload_settings.file_type.spreadsheet = !spreadsheet;
        } else if (type.toLowerCase() == 'pdf') {
            questions[editIndex].upload_settings.file_type.pdf = !pdf;
        } else if (type.toLowerCase() == 'video') {
            questions[editIndex].upload_settings.file_type.video = !video;
        } else if (type.toLowerCase() == 'presentation') {
            questions[editIndex].upload_settings.file_type.presentation = !presentation;
        } else if (type.toLowerCase() == 'drawing') {
            questions[editIndex].upload_settings.file_type.drawing = !drawing;
        } else if (type.toLowerCase() == 'image') {
            questions[editIndex].upload_settings.file_type.image = !image;
        } else if (type.toLowerCase() == 'audio') {
            questions[editIndex].upload_settings.file_type.audio = !audio;
        } 
        this.setState({
            questions
        });
    }
    handleFileSettingsInput(e) {
        // console.log(e.target.name, e.target.value);
        const { questions, editIndex } = this.state;
        if (e.target.name == "max-file") {
            questions[editIndex].upload_settings.file_max = e.target.value;
        } else if (e.target.name == "max-size") {
            questions[editIndex].upload_settings.size_max = e.target.value; // kilobytes
        }
        this.setState({
            questions
        });
    }
    handleLinearScaleLabelChange(e) {
        const { name, value } = e.target;
        const { questions, editIndex } = this.state;
        if ( /label-start/i.test(name) ) {
            questions[editIndex].scale_settings.label_start = value;
        } else if ( /label-end/i.test(name) ) {
            questions[editIndex].scale_settings.label_end = value;
        }
        this.setState({
            questions
        });
        console.log(e.target.name, e.target.value);
    }
    onLinearScaleValueClick(e) {
        const { name } = e.target.dataset;
        const value = Number.parseInt(e.target.dataset.value);
        const { questions, editIndex } = this.state;
        if ( /value-start/i.test(name) ) {
            questions[editIndex].scale_settings.value_start = value;
        } else if ( /value-end/i.test(name) ) {
            questions[editIndex].scale_settings.value_end = value;
        }
        this.setState({
            questions
        });
        console.log(e.target.dataset.name, e.target.dataset.value);
    }
    handleGridInput(e) {
        // console.log(e.target.dataset.name, e.target.dataset.index);
        const { name } = e.target.dataset;
        const index = Number.parseInt(e.target.dataset.index);
        const { value } = e.target;
        const { questions, editIndex } = this.state;
        if ( /row|rows/i.test(name) ) {
            questions[editIndex].grid_settings.rows.splice(index, 1, value);
        } else if ( /column|columns/i.test(name) ) {
            questions[editIndex].grid_settings.columns.splice(index, 1, value);
        }
        this.setState({
            questions
        });
        console.log("rows", this.state.questions[editIndex].grid_settings.rows[index]);
        console.log("columns", this.state.questions[editIndex].grid_settings.columns[index]);
    }
    addMoreGridRows() {
        const { questions, editIndex } = this.state;
        questions[editIndex].grid_settings.rows.push("");
        this.setState({
            questions
        });
    }
    addMoreGridColumns() {
        const { questions, editIndex } = this.state;
        if (questions[editIndex].grid_settings.columns.length >= 4) {
            return M.toast({html: 'Only 4 columns are allowed.'});
        }
        questions[editIndex].grid_settings.columns.push("");
        this.setState({
            questions
        });
    }
    removeGrid(e) {
        console.log(e.target.dataset.name, e.target.dataset.index);
        const { name } = e.target.dataset;
        const index = Number.parseInt(e.target.dataset.index);
        const { questions, editIndex } = this.state;
        if ( /row|rows/i.test(name) ) {
            questions[editIndex].grid_settings.rows.splice(index, 1);
        } else if ( /column|columns/i.test(name) ) {
            questions[editIndex].grid_settings.columns.splice(index, 1);
        }
        this.setState({
            questions
        });
    }
    render() {
        const {
            form_title,
            questions,
            editIndex,
            alert,
            saved,
            id,
            isLoading
        } = this.state;
        return (
            <div>
                <Header 
                    handleFormTitleInput={this.handleFormTitleInput}
                    form_title={form_title}
                    handleDeleteFormSubmit={this.handleDeleteFormSubmit}
                    handleSaveSubmit={this.handleSaveSubmit}
                    saved={saved}
                    formID={id}
                />
                <nav id="extended-nav" className="orange" style={{boxShadow: 'none',marginTop: 100,position: 'sticky',top: 64}}>
                    <div className="nav-container">
                        <div className="container" style={{paddingTop: 10}}>
                            <div id="tab-form-card" className="main-form-card">

                            </div>
                        </div>
                    </div>
                </nav>
                <form className="primary-container" style={{paddingTop: 0}}
                    action="#" method="POST">
                    {
                        isLoading ?
                            <div id="input-form" className="container center-align">
                                <LoadSpinner styles={{marginTop: 75}} />
                            </div> :
                            <div id="input-form" className="container">
                                {/* <InputFormMockUps /> */}
                                <InputForm 
                                    questions={questions}
                                    editIndex={editIndex} 
                                    toggleAlert={this.toggleAlert}
                                    toggleShowSetting={this.toggleShowSetting}
                                    toggleRequired={this.toggleRequired}
                                    /* Interactions and Data Functions */
                                    toggleEditing={this.toggleEditing}
                                    onFormTypeClick={this.onFormTypeClick}
                                    deleteSection={this.deleteSection}
                                    duplicateSection={this.duplicateSection}
                                    /* Title Functions */
                                    handleTitleInput={this.handleTitleInput}
                                    /* Description Functions */
                                    handleDescriptionInput={this.handleDescriptionInput}
                                    /* Question Functions */
                                    handleQuestionInput={this.handleQuestionInput}
                                    /* Option Functions */
                                    handleOptionInput={this.handleOptionInput}
                                    addMoreOption={this.addMoreOption}
                                    removeOption={this.removeOption}
                                    /* File upload Functions */
                                    toggleFileType={this.toggleFileType}
                                    toggleFileCheck={this.toggleFileCheck}
                                    handleFileSettingsInput={this.handleFileSettingsInput}
                                    /* Linear scale Functions */
                                    handleLinearScaleLabelChange={this.handleLinearScaleLabelChange}
                                    onLinearScaleValueClick={this.onLinearScaleValueClick}
                                    /* Grid Functions */
                                    handleGridInput={this.handleGridInput}
                                    addMoreGridRows={this.addMoreGridRows}
                                    addMoreGridColumns={this.addMoreGridColumns}
                                    removeGrid={this.removeGrid}
                                />
                                <ActionButton 
                                    addQuestion={this.addQuestion}
                                    addTitle={this.addTitle}
                                    handleSaveSubmit={this.handleSaveSubmit}
                                    saved={saved}
                                    id={id}
                                />
                            </div>
                    }
                    {/* <div id="pdf-form" className="col-two">
                        <PDFUpload />
                    </div> */}
                    {/* <a className="waves-effect waves-light btn-large right"><i className="material-icons right">cloud_upload</i>SAVE</a> */}
                    {
                        alert.isOpen ?
                            <Alert type={alert.type} messages={alert.messages} 
                                onClick={this.onCloseAlert} /> : ""
                    }
                </form>
            </div>
        );
    }
    handleDeleteFormSubmit() {
        const { questions, id } = this.state;
        if ( id ) {
            return fetch('/admin/administration/add-form', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id
                })
            }).then((response) => {
                return response.json();
            }).then((responseJson) => {
                console.log(responseJson);
                if (responseJson.error) {
                    M.toast({html: 'Deleting was unsuccessful. Please try again.'});
                } else {
                    M.toast({html: 'Deleted successfully.'});
                    this.setState({
                        id: "",
                        form_title: "Untitled title",
                        questions: [defaultQuestionInput.getData("Multiple Choice")],
                        editIndex: 0,
                        saved: false
                    });
                }
            });
        } else {
            M.toast({html: 'Form was not saved.'});
        }
    }
    handleSaveSubmit() {
        const { form_title, questions } = this.state;
        const formattedQuestions = [];
        // return console.log(questions)
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const data = {};
            // Create random question id
            const questionID = getRandomInt();
            if ( "multiple choice" == question.type.toLowerCase() ) {
                const yes = /^yes\b|^ye\b|^y\b|^yeah\b|^yup\b/i;
                const no = /^no\b|^n\b|^nope\b|^na\b|^nah\b|^naw\b/i;
                const truthy = /^true\b|^truth\b|^truthy\b|^t\b/i;
                const falsy = /^false\b|^falsy\b|^f\b/i;
                // * YES/NO Question ********************************************
                if ( yes.test(question.options[0]) && no.test(question.options[1]) ||
                     yes.test(question.options[1]) && no.test(question.options[0]) ) {
                        data.responses = [
                            {
                                text: "Yes",
                                response_id: getRandomInt(),
                                value: 1
                            },
                            {
                                text: "No",
                                response_id: getRandomInt(),
                                value: 0
                            }
                        ];
                        data.hint = question.description;
                        data.text = question.question;
                        data.type = 1;
                        data.order = i + 1;
                        data.question_id = getRandomInt();
                }
                // * TRUE/FALSE Question ****************************************
                else if ( truthy.test(question.options[0]) && falsy.test(question.options[1]) ||
                     truthy.test(question.options[1]) && falsy.test(question.options[0]) ) {
                        data.responses = [
                            {
                                text: "True",
                                response_id: getRandomInt(),
                                value: 1
                            },
                            {
                                text: "False",
                                response_id: getRandomInt(),
                                value: 0
                            }
                        ];
                        data.hint = question.description;
                        data.text = question.question;
                        data.type = 2;
                        data.order = i + 1;
                        data.question_id = getRandomInt();
                }
                // * Multiple choice Question ***********************************
                else {
                    data.responses = question.options.map(function(option, index) {
                        return {
                            text: option,
                            response_id: getRandomInt(),
                            value: index + 1
                        };
                    });
                    data.hint = question.description;
                    data.text = question.question;
                    data.type = 3;
                    data.order = i + 1;
                    data.question_id = getRandomInt();
                }
            }
            // * Checkboxes *************************************************
            else if ( /checkboxes/i.test(question.type) ) {
                data.responses = question.options.map(function(option, index) {
                    return {
                        text: option,
                        response_id: getRandomInt(),
                        value: index + 1
                    };
                });
                data.hint = question.description;
                data.text = question.question;
                data.type = 4;
                data.order = i + 1;
                data.question_id = getRandomInt();
            }
            // * Star rating Question ***************************************
            else if ( /linear scale/i.test(question.type) ) {
                data.starter_label = question.scale_settings.label_start;
                data.hint = question.description;
                data.text = question.question;
                data.step_size = question.scale_settings.value_start;
                data.num_stars = question.scale_settings.value_end;
                data.finish_label = question.scale_settings.label_end;
                data.type = 5;
                data.order = i + 1;
                data.question_id = getRandomInt();
            }
            // * Short answer Question **************************************
            else if ( /short answer/i.test(question.type) ) {
                data.text = question.question;
                data.hint = question.description;
                data.type = 7;
                data.order = i + 1;
                data.question_id = getRandomInt();
            }
            // * Multiple choice grid ***************************************
            else if ( /multiple choice grid/i.test(question.type) ) {
                data.responses = [];
                for (let j = 0; j < question.grid_settings.rows.length; j++) {
                    const input = {
                        text: question.grid_settings.rows[j],
                        subresponses: [],
                        response_id: getRandomInt(),
                        value: j + 1
                    };
                    for (let k = 0; k < question.grid_settings.columns.length; k++) {
                        input.subresponses.push({
                            text: question.grid_settings.columns[k],
                            value: k + 1,
                            subresponse_id: getRandomInt()
                        });
                    }
                    data.responses.push(input);
                }
                data.hint = question.description;
                data.text = question.question;
                data.type = 9;
                data.order = i + 1;
                data.question_id = getRandomInt();
            }
            // * Paragraph Question *****************************************
            else if ( /^paragraph\b/i.test(question.type) ) {
                data.text = question.question;
                data.hint = question.description;
                data.type = 10;
                data.order = i + 1;
                data.question_id = getRandomInt();
            }
            // * Dropdown Question ******************************************
            else if ( "dropdown" == question.type.toLowerCase() ) {
                data.responses = question.options.map(function(option, index) {
                    return {
                        text: option,
                        response_id: getRandomInt(),
                        value: index + 1
                    };
                });
                data.hint = question.description;
                data.text = question.question;
                data.type = 11;
                data.order = i + 1;
                data.question_id = getRandomInt();
            }
            // * Date Question **********************************************
            else if ( "date" == question.type.toLowerCase() ) {
                data.text = question.question;
                data.hint = question.description;
                data.type = 12;
                data.order = i + 1;
                data.question_id = getRandomInt();
            }
            // * Time Question **********************************************
            else if ( "time" == question.type.toLowerCase() ) {
                data.text = question.question;
                data.hint = question.description;
                data.type = 13;
                data.order = i + 1;
                data.question_id = getRandomInt();
            }
            formattedQuestions.push(data);
        } // End of iterations of questions
        try {
            if ( this.state.saved ) {
                return fetch('/admin/administration/add-form', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: this.state.id,
                        title: this.state.form_title,
                        questions: formattedQuestions
                    })
                }).then((response) => {
                    return response.json();
                }).then((responseJson) => {
                    console.log(responseJson);
                    if (responseJson.error) {
                        M.toast({html: 'Updating was unsuccessful. Please try again.'});
                    } else {
                        M.toast({html: 'Update successfully.'});
                    }
                });
            } else {
                return fetch('/admin/administration/add-form', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: this.state.form_title,
                        questions: formattedQuestions
                    })
                }).then((response) => {
                    return response.json();
                }).then((responseJson) => {
                    console.log(responseJson);
                    if (responseJson.error) {
                        M.toast({html: 'Saving was unsuccessful. Please try again.'});
                    } else {
                        this.setState({
                        id: responseJson.id,
                        saved: true
                        });
                        M.toast({html: 'Saved successfully.'});
                    }
                });
            }
        } catch (err) {
            console.log(err);
        }
        // console.log(formattedData);
    }
    convertAndAddData(object) {
        const appQuestions = [];

        // * Iterate and sort server data in order
        const serverQuestions = object.questions.sort(function(a,b) {
            return a.order - b.order;
        });

        // * Iterate through server data and format to app data
        for (let i = 0; i < serverQuestions.length; i++) {
            const serverQuestion = serverQuestions[i];
            const appQuestion = defaultQuestionInput.getData();

            // * YES/NO Question ********************************************
            // * TRUE/FALSE Question ****************************************
            // * Multiple choice Question ***********************************
            if ( 1 == serverQuestion.type || 2 == serverQuestion.type || 3 == serverQuestion.type ) {
                appQuestion.options = serverQuestion.responses.map(function(question) {
                    return question.text;
                });
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = serverQuestion.text;
                appQuestion.type = "Multiple Choice";
            }
            // * Checkboxes *************************************************
            else if ( 4 == serverQuestion.type ) {
                appQuestion.options = serverQuestion.responses.map(function(question) {
                    return question.text;
                });
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = serverQuestion.text;
                appQuestion.type = "Checkboxes";
            }
            // * Star rating Question ***************************************
            else if ( 5 == serverQuestion.type ) {
                appQuestion.scale_settings.label_start = serverQuestion.starter_label;
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = serverQuestion.text;
                appQuestion.scale_settings.value_start = serverQuestion.step_size;
                appQuestion.scale_settings.value_end = serverQuestion.num_stars;
                appQuestion.scale_settings.label_end = serverQuestion.finish_label;
                appQuestion.type = "Linear Scale";
            }
            // * Short answer Question **************************************
            else if ( 7 == serverQuestion.type ) {
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = serverQuestion.text;
                appQuestion.type = "Short answer";
            }
            // * Multiple choice grid ***************************************
            else if ( 9 == serverQuestion.type ) {
                appQuestion.grid_settings.rows = [];
                appQuestion.grid_settings.columns = [];
                for (let j = 0; j < serverQuestion.responses.length; j++) {
                    appQuestion.grid_settings.rows.push(serverQuestion.responses[j].text);
                }
                for (let j = 0; j < serverQuestion.responses[0].subresponses.length; j++) {
                    appQuestion.grid_settings.columns.push(serverQuestion.responses[0].subresponses[j].text);
                }
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = serverQuestion.text;
                appQuestion.type = "Multiple choice grid";
            }
            // * Paragraph Question *****************************************
            else if ( 10 == serverQuestion.type ) {
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = serverQuestion.text;
                appQuestion.type = "Paragraph";
            }
            // * Dropdown Question ******************************************
            else if ( 11 == serverQuestion.type ) {
                appQuestion.options = serverQuestion.responses.map(function(question) {
                    return question.text;
                });
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = serverQuestion.text;
                appQuestion.type = "Dropdown";
            }
            // * Date Question **********************************************
            else if ( 12 == serverQuestion.type ) {
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = serverQuestion.text;
                appQuestion.type = "Date";
            }
            // * Time Question **********************************************
            else if ( 13 == serverQuestion.type ) {
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = serverQuestion.text;
                appQuestion.type = "Time";
            }
            appQuestion.isDescription = /\S/.test(serverQuestion.hint);
            appQuestion.required = true;
            appQuestions.push(appQuestion);
        }
        return appQuestions;
    }
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    addQuestion() {
        const { questions, editIndex } = this.state;
        const type = /header/i.test(questions[editIndex].type) || /title/i.test(questions[editIndex].type) ?
            "Multiple choice" : questions[editIndex].type;
        const data = defaultQuestionInput.getData(type);
        // if (this.validateFormSection()) {
            questions.splice(editIndex + 1, 0, data);
            this.setState({
                questions,
                editIndex: editIndex + 1
            });
        // }
    }
    addTitle() {
        const { questions, editIndex } = this.state;
        const data = defaultQuestionInput.getData("Title");
        questions.splice(editIndex + 1, 0, data);
        this.setState({
            questions,
            editIndex: editIndex + 1
        });  
    }
    toggleEditing(e) {
        // console.log(e.target.dataset.index);
        const { questions } = this.state;
        const index = e.target.dataset.index;
        if (index) {
            this.setState({
                editIndex: Number.parseInt(index)
            });
        }
    }
    duplicateSection(e) {
        const { index } = e.target.dataset;
        const { questions, editIndex } = this.state;
        if (index) {
            const { questions } = this.state;
            questions.splice(index + 1, 0, questions[index]);
            this.setState({
                questions,
                editIndex: editIndex + 1
            });
        }
    }
    deleteSection(e) {
        const { index } = e.target.dataset;
        const { questions, editIndex } = this.state;
        // return console.log(index);
        if (index && questions.length > 1) {
            const { questions } = this.state;
            questions.splice(index, 1);
            this.setState({
                questions,
                editIndex: editIndex - 1
            });
        } else {
            return M.toast({html: 'Can not delete the only form section.'});
        }
    }
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    toggleAlert(type, messages) {
        const { alert } = this.state;
        let messagesArray = [];
        if (!Array.isArray(messages)) {
            messagesArray.push(messages);
        } else {
            messagesArray = messages;
        }
        alert.isOpen = true;
        alert.type = type;
        alert.messages = messagesArray;
        this.setState({
            alert: alert
        });
    }
    onCloseAlert() {
        const { alert } = this.state;
        alert.isOpen = !alert.isOpen;
        this.setState({
            alert: alert
        });
    }
    validateFormSection() {
        const { editIndex, questions } = this.state;
        const {
            type,
            title,
            question,
            description,
            options,
            upload_settings,
            validations,
            required,
            isDescription
        } = this.state.questions[editIndex];
        const {
            document, spreadsheet, pdf, video,
            presentation, drawing, image, audio
        } = this.state.questions[editIndex].upload_settings.file_type;
        const errors = [];
        const data = {
            type: type
        }
        // validate and add title ---------------------------------
        if ( /header/i.test(type) || /title/i.test(type) ) {
            if (title == "") {
                errors.push("Missing a title input.");
            } else if (/\s/g.test(title)) {
                if (title.match(/\s/g).length == title.length) 
                    errors.push("Title input cannot be white spaces.");
            }
            data.title = title;
        } 
        // validate and add question ------------------------------
        else if ( /short answer/i.test(type) || /paragraph/i.test(type) || 
            /multiple choice/i.test(type) || /checkboxes/i.test(type) ||
            /dropdown/i.test(type) ) {
                if (question == "") {
                    errors.push("Missing a question input.");
                } else if (/\s/g.test(question)) {
                    if (question.match(/\s/g).length == question.length) 
                        errors.push("Question input cannot be white spaces.");
                }
                if (/\S/g.test(question)) {
                    if (question.match(/\S/g).length <= 5)
                        errors.push("Question input has to be longer than 5 character.");
                }
                data.question = question;
        } 
        if ( /file upload/i.test(type) ) {
            data.question = question;
        }
        // validate and add description ---------------------------
        if (description) {
            if (/\s/g.test(description)) {
                if (description.match(/\s/g).length == description.length) 
                    errors.push("Description input cannot be white spaces.");
            }
            data.description = description;
        } 
        data.isDescription = isDescription;
        // validate and add options -------------------------------
        if ( /multiple choice/i.test(type) || /checkboxes/i.test(type) || /dropdown/i.test(type) ) {
            let i = 0;
            while (i < options.length) {
                if (options[i] == "") {
                    options.splice(i, 1);
                    --i;
                } else if (/\s/g.test(options[i])) {
                    if (options[i].match(/\s/g).length == options[i].length)
                        errors.push(`Option ${i + 1} input cannot be white spaces.`);
                }
                ++i;
            }
            if (options.length == 0) {
                errors.push(`One option input is required.`);
                data.options = [""];
            } else {
                data.options = options;
            }
        }
        // validate and add is required ---------------------------
        if ( /short answer/i.test(type) || /paragraph/i.test(type) || 
            /multiple choice/i.test(type) || /checkboxes/i.test(type) ||
            /dropdown/i.test(type) || /file upload/i.test(type) ) {
                data.required = required;
        }
        // validate and add upload settings -----------------------
        if (type.toLowerCase() == 'file upload') {
            if (upload_settings.isSpecificFileType && !document && !spreadsheet &&
                !pdf && !video && !presentation && !drawing && !image && !audio) {
                    errors.push("While specific file types is on, there has to be a selection.");
            }
            if (!this.validateNumberInput(upload_settings.limit_file || 10, upload_settings.file_max)) {
                errors.push(`Upload file max has to be below or equal to ${this.state.upload_settings.limit_file || 10}.`);
            }
            if (!this.validateNumberInput(upload_settings.limit_size || 25000, upload_settings.size_max)) {
                errors.push(`Upload file size has to be below or equal to ${this.state.upload_settings.limit_size || 25000} KB.`);
            }
            upload_settings.file_max = Number.parseInt(upload_settings.file_max);
            upload_settings.size_max = Number.parseInt(upload_settings.size_max);
            data.upload_settings = upload_settings;
        }
        // throw error if any -------------------------------------
        if (errors.length > 0) {
            return this.toggleAlert('error', errors);
        } else {
            return data;
        }
    }
    validateNumberInput(max, val) {
        max = Number.parseInt(max);
        if ( /\d/g.test(Number.parseInt(val)) ) {
            const number = Number.parseInt(val.toString().match(/[0-9 , \.]+/g)[0]);
            if (number > max) return false;
        } else {
            return false;
        }
        return true;
    }
}

function getRandomString(num) {
    let string = "";
    for (var i = 0; i < num; i++) {
        string += Math.random().toString(36).substring(2);
    }
    return string;
}

function getRandomInt() {
    const min = Math.ceil(1000000000000000000);
    const max = Math.floor(99999999999999999999);
    return Math.floor(Math.random() * (max - min)) + min;
}