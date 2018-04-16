import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadSpinner from './LoadSpinner';
import Header from './Partials/Header';
import OutputForm from './DigitalForms/OutputForm';

import defaultQuestionInput from './../data/defaultQuestionInput';
import serverData from './../data/test';

import materialJS from './../js/bin/materialize.min.js';

export default class FillForm extends Component {
    constructor(props) {
        super(props);
        this.convertAndAddData = this.convertAndAddData.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.state = {
            id: "",
            form_title: "Untitled form",
            questions: [],
            isCreator: false,
            isLoading: true,
            isSent: false
        }
    }
    componentDidMount() {
        if ( this.props.creator ) {
            return fetch(`/form-data-format?id=${document.getElementById('form-id').getAttribute('value')}`, {
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
                        isCreator: true,
                        id: responseJson.id,
                        form_title: responseJson.title,
                        questions: this.convertAndAddData(responseJson),
                        isLoading: false
                    });
                }
            });
        } else {
            this.setState({
                //id: serverData.id,
                form_title: serverData.title,
                questions: this.convertAndAddData(serverData),
                isLoading: false
            });
        }
    }
    handleInputChange(e) {
        // TODO: add question value inputs and change question data in edit mode
        const { index, mainindex } = e.target.dataset;
        const { questions } = this.state;
        const type = questions[mainindex].type.toLowerCase();
        if ( "multiple choice" == type ) {
            questions[mainindex].options[index].value = true;
            for (let i = 0; i < questions[mainindex].options.length; i++) {
                if (i != index) {
                    questions[mainindex].options[i].value = false;
                }
            }
            questions[mainindex].question.value = questions[mainindex].options;
            questions[mainindex].showRequired = false;
        }
        if ( "checkboxes" == type ) {
            questions[mainindex].options[index].value = !questions[mainindex].options[index].value;
            questions[mainindex].question.value = questions[mainindex].options;
            let totalFalsy = 0;
            for (let i = 0; i < questions[mainindex].options.length; i++) {
                if (questions[mainindex].options[i].value == false) {
                    totalFalsy++;
                }
            }
            if (totalFalsy == questions[mainindex].options.length) { 
                questions[mainindex].showRequired = true;
            } else {
                questions[mainindex].showRequired = false;
            }
        }
        if ( "linear scale" == type ) {
            questions[mainindex].scale_settings.responses[index].value = true;
            for (let i = 0; i < questions[mainindex].scale_settings.responses.length; i++) {
                if (i != index) {
                    questions[mainindex].scale_settings.responses[i].value = false;
                }
            }
            questions[mainindex].question.value = questions[mainindex].scale_settings.responses;
            questions[mainindex].showRequired = false;
        }
        if ( "short answer" == type || "paragraph" == type ) {
            const { value } = e.target;
            questions[mainindex].question.value = e.target.value;
            if ( value == "" || /\s/g.test(value) ) {
                questions[mainindex].showRequired = true;
            } else {
                questions[mainindex].showRequired = false;
            }
        }
        if ( "multiple choice grid" == type ) {
            const { responseindex, subresponseindex } = e.target.dataset;
            questions[mainindex].grid_settings.responses[responseindex].subresponses[subresponseindex].value = true;
            questions[mainindex].grid_settings.responses[responseindex].value = questions[mainindex].grid_settings.responses[responseindex].subresponses[subresponseindex].text;
            let total = questions[mainindex].grid_settings.responses.length;
            for (let i = 0; i < questions[mainindex].grid_settings.responses.length; i++) {
                for (let j = 0; j < questions[mainindex].grid_settings.responses[i].subresponses.length; j++) {
                    if (i == responseindex && j != subresponseindex) {
                        questions[mainindex].grid_settings.responses[i].subresponses[j].value = false;
                    }
                    if (questions[mainindex].grid_settings.responses[i].subresponses[j].value == true ) {
                        total--;
                    }
                }
            }
            if (total > 0) {
                questions[mainindex].showRequired = true;
            } else {
                questions[mainindex].showRequired = false;
            }
            questions[mainindex].question.value = questions[mainindex].grid_settings.responses;
            // console.log(responseindex, subresponseindex);
        }
        if ( "dropdown" == type ) {
            const { value } = e.target;
            for (let i = 0; i < questions[mainindex].options.length; i++) {
                if ( value.toLowerCase() == questions[mainindex].options[i].text.toLowerCase() ) {
                    questions[mainindex].options[i].value = true;
                } else {
                    questions[mainindex].options[i].value = false
                }
            }
            questions[mainindex].question.value = questions[mainindex].options;
            questions[mainindex].showRequired = false;
        }
        if ( "time" == type ) {
            const { name } = e.target.dataset;
            const { value } = e.target;
            if ( questions[mainindex].question.value.hours == "" || /^\s/g.test(questions[mainindex].question.value.hours) ||
                questions[mainindex].question.value.minutes == "" || /^\s/g.test(questions[mainindex].question.value.minutes) ) {
                questions[mainindex].showRequired = true;
            } else {
                questions[mainindex].showRequired = false;
            }
            switch (name) {
                case 'hours':
                    questions[mainindex].question.value.hours = value;
                    break;
                case 'minutes':
                    questions[mainindex].question.value.minutes = value;
                    break;
                case 'type':
                    questions[mainindex].question.value.type = e.target.text;
                    break;
            }
        }
        this.setState({
            questions     
        });
        // return console.log(questions[mainindex].question.value.text)
        // return console.log(questions);
        // console.log(e.target.dataset.mainindex, e.target.dataset.index, this.state.questions[mainindex].question);
    }
    handleDateChange(mainIndex, value) {
        const { questions } = this.state;
        if ( value == "" || /\s/g.test(value) ) {
            questions[mainIndex].showRequired = true;
        } else {
            questions[mainIndex].showRequired = false;
        }
        questions[mainIndex].question.value = value;
        this.setState({
            questions
        });
        // return console.log(questions);
        // console.log(this.state.questions[mainIndex].question.value);
    }
    handleSubmitForm() {
        const { questions } = this.state;
        const serverQuestions = [];
        let notSending = false;

        function isOptionsFilled(i, options) {
            let filled = false;
            for (let j = 0; j < options.length; j++) {
                if ( options[j].value == true ) {
                    filled = true;
                }
            }
            if (!filled) {
                questions[i].showRequired = true;
                notSending = false;
            } else {
                questions[i].showRequired = false;
            }
        }

        // * Iterate through question data and format to server JSON
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const serverQuestion = {};

            const type = question.type.toLowerCase();

            const yes = /^yes\b|^ye\b|^y\b|^yeah\b|^yup\b/i;
            const no = /^no\b|^n\b|^nope\b|^na\b|^nah\b|^naw\b/i;
            const truthy = /^true\b|^truth\b|^truthy\b|^t\b/i;
            const falsy = /^false\b|^falsy\b|^f\b/i;
            if ( question.options.length >= 2 ) {
                isOptionsFilled(i, question.options);
                // * YES/NO Question ********************************************
                if ( yes.test(question.options[0].text) && no.test(question.options[1].text) ||
                    yes.test(question.options[1].text) && no.test(question.options[0].text) ) {
                        serverQuestion.responses = question.options;
                        serverQuestion.hint = question.description;
                        serverQuestion.text = question.question.text;
                        serverQuestion.type = 1;
                        serverQuestion.order = i + 1;
                        serverQuestion.question_id = question.question.id;
                        serverQuestions.push(serverQuestion);
                }
                // * TRUE/FALSE Question ****************************************
                else if ( truthy.test(question.options[0].text) && falsy.test(question.options[1].text) ||
                    truthy.test(question.options[1].text) && falsy.test(question.options[0].text) ) {
                        serverQuestion.responses = question.options;
                        serverQuestion.hint = question.description;
                        serverQuestion.text = question.question.text;
                        serverQuestion.type = 2;
                        serverQuestion.order = i + 1;
                        serverQuestion.question_id = question.question.id;
                        serverQuestions.push(serverQuestion);
                }
                // * Multiple choice Question ***********************************
                else if ( type == "multiple choice" ) {
                    serverQuestion.responses = question.options;
                    serverQuestion.hint = question.description;
                    serverQuestion.text = question.question.text;
                    serverQuestion.type = 3;
                    serverQuestion.order = i + 1;
                    serverQuestion.question_id = question.question.id;
                    serverQuestions.push(serverQuestion);
                }
            }
            // * Checkboxes *************************************************
            if ( type == "checkboxes" ) {
                isOptionsFilled(i, question.options);
                serverQuestion.responses = question.options;
                serverQuestion.hint = question.description;
                serverQuestion.text = question.question.text;
                serverQuestion.type = 4;
                serverQuestion.order = i + 1;
                serverQuestion.question_id = question.question.id;
                serverQuestions.push(serverQuestion);
            }
            // * Star rating Question ***************************************
            if ( type == "linear scale" ) {
                let isFilled = false;
                for (let i = 0; i < question.scale_settings.responses.length; i++) {
                    if ( question.scale_settings.responses[i].value == true ) {
                        isFilled = true;
                    }
                }
                if ( !isFilled ) {
                    notSending = true;
                    questions[i].showRequired = true;
                } else {
                    questions[i].showRequired = false;
                }
                serverQuestion.responses = question.scale_settings.responses;
                serverQuestion.starter_label = question.scale_settings.label_start;
                serverQuestion.hint = question.description;
                serverQuestion.text = question.question.text;
                serverQuestion.step_size = question.scale_settings.value_start;
                serverQuestion.num_stars = question.scale_settings.value_end;
                serverQuestion.finish_label = question.scale_settings.label_end;
                serverQuestion.type = 5;
                serverQuestion.order = i + 1;
                serverQuestion.question_id = question.question.id;
                serverQuestions.push(serverQuestion);
            }
            // * Short answer Question **************************************
            if ( type == "short answer" ) {
                if ( question.question.value == "" || /^\s/g.test(question.question.value) ) {
                    notSending = true;
                    questions[i].showRequired = true;
                } else {
                    questions[i].showRequired = false;
                    serverQuestion.responses = [{
                        response_id: getRandomInt(),
                        text: question.question.text,
                        value: question.question.value
                    }];
                    serverQuestion.text = question.question.text;
                    serverQuestion.hint = question.description;
                    serverQuestion.type = 7;
                    serverQuestion.order = i + 1;
                    serverQuestion.question_id = question.question.id;
                    serverQuestions.push(serverQuestion);
                }
            }
            // * Multiple choice grid ***************************************
            if ( type == "multiple choice grid" ) {
                let total = questions[i].grid_settings.responses.length;
                for (let j = 0; j < questions[i].grid_settings.responses.length; j++) {
                    for (let k = 0; k < questions[i].grid_settings.responses[j].subresponses.length; k++) {
                        if (questions[i].grid_settings.responses[j].subresponses[k].value == true ) {
                            total--;
                        }
                    }
                }
                if (total > 0) {
                    notSending = true;
                    questions[i].showRequired = true;
                } else {
                    questions[i].showRequired = false;
                    serverQuestion.responses = question.grid_settings.responses;
                    serverQuestion.hint = question.description;
                    serverQuestion.text = question.question.text;
                    serverQuestion.type = 9;
                    serverQuestion.order = i + 1;
                    serverQuestion.question_id = question.question.id;
                    serverQuestions.push(serverQuestion);
                }
            }
            // * Paragraph Question *****************************************
            if ( type == "paragraph" ) {
                if ( question.question.value == "" || /^\s/g.test(question.question.value) ) {
                    notSending = true;
                    questions[i].showRequired = true;
                } else {
                    questions[i].showRequired = false;
                    serverQuestion.responses = [{
                        response_id: getRandomInt(),
                        text: question.question.text,
                        value: question.question.value
                    }];
                    serverQuestion.text = question.question.text;
                    serverQuestion.hint = question.description;
                    serverQuestion.type = 10;
                    serverQuestion.order = i + 1;
                    serverQuestion.question_id = question.question.id;
                    serverQuestions.push(serverQuestion);
                }
            }
            // * Dropdown Question ******************************************
            if ( type == "dropdown" ) {
                isOptionsFilled(i, question.options);
                serverQuestion.responses = question.options;
                serverQuestion.hint = question.description;
                serverQuestion.text = question.question.text;
                serverQuestion.type = 11;
                serverQuestion.order = i + 1;
                serverQuestion.question_id = question.question.id;
                serverQuestions.push(serverQuestion);
            }
            // * Date Question **********************************************
            if ( type == "date" ) {
                if ( question.question.value == "" || /^\s/g.test(question.question.value) ) {
                    notSending = true;
                    questions[i].showRequired = true;
                } else {
                    questions[i].showRequired = false;
                    serverQuestion.responses = [{
                        response_id: getRandomInt(),
                        text: question.question.text,
                        value: question.question.value
                    }];
                    serverQuestion.hint = question.description;
                    serverQuestion.text = question.question.text;
                    serverQuestion.type = 12;
                    serverQuestion.order = i + 1;
                    serverQuestion.question_id = question.question.id;
                    serverQuestions.push(serverQuestion);
                }
            }
            // * Time Question **********************************************
            if ( type == "time" ) {
                if ( question.question.value.hours == "" || /^\s/g.test(question.question.value.hours) ||
                    question.question.value.minutes == "" || /^\s/g.test(question.question.value.minutes) ) {
                        notSending = true;
                        questions[i].showRequired = true;
                } else {
                    questions[i].showRequired = false;
                    serverQuestion.responses = [{
                        response_id: getRandomInt(),
                        text: question.question.text,
                        value: `${question.question.value.hours}:${question.question.value.minutes} ${question.question.value.type}`
                    }];
                    serverQuestion.hint = question.description;
                    serverQuestion.text = question.question.text;
                    serverQuestion.type = 13;
                    serverQuestion.order = i + 1;
                    serverQuestion.question_id = question.question.id;
                    serverQuestions.push(serverQuestion);
                }
                // return console.log(serverQuestion);
            }
        }
        // return console.log(serverQuestions);
        if (!notSending) {
            // console.log('fetch')
            try {
                return fetch('/fill-form', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: this.state.form_id,
                        title: this.state.form_title,
                        questions: serverQuestions
                    })
                }).then((response) => {
                    return response.json();
                }).then((responseJson) => {
                    console.log(responseJson);
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                    this.setState({
                        isSent: true
                    });
                });
            } catch (err) {
                console.log(err);
            }
        } else {
            this.setState({
                questions
            });
        }
    }
    render() {
        const {
            questions,
            form_title,
            isLoading,
            isSent,
            isCreator,
            id
        } = this.state;
        return (
            <div>
                <Header 
                    isFilling={true}
                    form_title={form_title}
                    isCreator={isCreator}
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
                <form className="primary-container center-align" style={{paddingTop: 0}}
                    action="#" method="POST">
                    <div id="input-form" className="container">
                        {
                            isLoading ?
                                <LoadSpinner styles={{marginTop: 75}} /> :
                                isSent ?
                                    <div className="main-form-card clearfix" style={{overflow: 'auto'}}>
                                        <div className="row">
                                            <h2>{form_title}</h2>
                                            <p>Your response has been sent.</p>
                                        </div>
                                    </div> :
                                    <OutputForm 
                                        questions={questions}
                                        handleInputChange={this.handleInputChange}
                                        handleDateChange={this.handleDateChange}
                                        handleSubmitForm={this.handleSubmitForm}
                                        isCreator={isCreator}
                                    /> 
                        }
                        {/* <a className="waves-effect waves-light btn-large" style={{position: 'fixed',bottom: 0}} onClick={this.handleSubmitForm}>test</a> */}
                    </div>
                </form>
            </div>
        );
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
                    return {
                        id: question.response_id,
                        text: question.text,
                        value: false
                    };
                });
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = {
                    id: serverQuestion.question_id,
                    text: serverQuestion.text,
                    value: ""
                };
                appQuestion.type = "Multiple Choice";
            }
            // * Checkboxes *************************************************
            else if ( 4 == serverQuestion.type ) {
                appQuestion.options = serverQuestion.responses.map(function(question) {
                    return {
                        id: question.response_id,
                        text: question.text,
                        value: false
                    };
                });
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = {
                    id: serverQuestion.question_id,
                    text: serverQuestion.text,
                    value: ""
                };
                appQuestion.type = "Checkboxes";
            }
            // * Star rating Question ***************************************
            else if ( 5 == serverQuestion.type ) {
                appQuestion.scale_settings.label_start = serverQuestion.starter_label;
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = {
                    id: serverQuestion.question_id,
                    text: serverQuestion.text,
                    value: ""
                };
                appQuestion.scale_settings.value_start = serverQuestion.step_size;
                appQuestion.scale_settings.value_end = serverQuestion.num_stars;
                appQuestion.scale_settings.label_end = serverQuestion.finish_label;
                for (let j = appQuestion.scale_settings.value_start; j <= appQuestion.scale_settings.value_end; j++) {
                    appQuestion.scale_settings.responses.push({
                        text: j,
                        value: false
                    });
                }
                appQuestion.type = "Linear Scale";
            }
            // * Short answer Question **************************************
            else if ( 7 == serverQuestion.type ) {
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = {
                    id: serverQuestion.question_id,
                    text: serverQuestion.text,
                    value: ""
                };
                appQuestion.type = "Short answer";
            }
            // * Multiple choice grid ***************************************
            else if ( 9 == serverQuestion.type ) {
                appQuestion.grid_settings.rows = [];
                appQuestion.grid_settings.columns = [];
                for (let j = 0; j < serverQuestion.responses.length; j++) {
                    appQuestion.grid_settings.rows.push(serverQuestion.responses[j].text);
                    appQuestion.grid_settings.responses.push({
                        text: serverQuestion.responses[j].text,
                        id: serverQuestion.responses[j].response_id,
                        subresponses: []
                    });
                    for (let k = 0; k < serverQuestion.responses[j].subresponses.length; k++) {
                        if ( j == 0 ) {
                            appQuestion.grid_settings.columns.push(serverQuestion.responses[j].subresponses[k].text);
                        }
                        appQuestion.grid_settings.responses[j].subresponses.push({
                            text: serverQuestion.responses[j].subresponses[k].text,
                            id: serverQuestion.responses[j].subresponses[k].subresponse_id,
                            value: false
                        });
                    }
                }
                // for (let j = 0; j < serverQuestion.responses[0].subresponses.length; j++) {
                //     appQuestion.grid_settings.columns.push(serverQuestion.responses[0].subresponses[j].text);
                // }
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = {
                    id: serverQuestion.question_id,
                    text: serverQuestion.text,
                    value: ""
                };
                appQuestion.type = "Multiple choice grid";
            }
            // * Paragraph Question *****************************************
            else if ( 10 == serverQuestion.type ) {
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = {
                    id: serverQuestion.question_id,
                    text: serverQuestion.text,
                    value: ""
                };
                appQuestion.type = "Paragraph";
            }
            // * Dropdown Question ******************************************
            else if ( 11 == serverQuestion.type ) {
                appQuestion.options = serverQuestion.responses.map(function(question) {
                    return {
                        id: question.response_id,
                        text: question.text,
                        value: false
                    };
                });
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = {
                    id: serverQuestion.question_id,
                    text: serverQuestion.text,
                    value: ""
                };
                appQuestion.type = "Dropdown";
            }
            // * Date Question **********************************************
            else if ( 12 == serverQuestion.type ) {
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = {
                    id: serverQuestion.question_id,
                    text: serverQuestion.text,
                    value: ""
                };
                appQuestion.type = "Date";
            }
            // * Time Question **********************************************
            else if ( 13 == serverQuestion.type ) {
                appQuestion.description = serverQuestion.hint;
                appQuestion.question = {
                    id: serverQuestion.question_id,
                    text: serverQuestion.text,
                    value: {
                        hours: "",
                        minutes: "",
                        type: "AM"
                    }
                };
                appQuestion.type = "Time";
            }
            appQuestion.isDescription = /\S/.test(serverQuestion.hint);
            appQuestion.required = true;
            appQuestions.push(appQuestion);
        }
        return appQuestions;
        // return console.log(appQuestions);
    }
}

FillForm.propTypes = {
    isCreator: PropTypes.bool
}

function getRandomInt() {
    const min = Math.ceil(1000000000000000000);
    const max = Math.floor(99999999999999999999);
    return Math.floor(Math.random() * (max - min)) + min;
}