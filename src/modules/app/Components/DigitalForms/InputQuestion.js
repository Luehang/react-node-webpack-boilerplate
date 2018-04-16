import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopMenu from './Forms/Partials/TopMenu';
import BottomMenu from './Forms/Partials/BottomMenu';
import Header from './Forms/Header';
import Title from './Forms/Title';
import ShortAnswer from './Forms/ShortAnswer';
import Paragraph from './Forms/Paragraph';
import MultipleChoice from './Forms/MultipleChoice/Index';
import Checkboxes from './Forms/Checkboxes/Index';
import Dropdown from './Forms/Dropdown/Index';
import FileUpload from './Forms/FileUpload';
import LinearScale from './Forms/LinearScale/Index';
import MultipleChoiceGrid from './Forms/MultipleChoiceGrid/Index';
import DateForm from './Forms/DateForm';
import Time from './Forms/Time';

import ResponseValidation from './Forms/ResponseValidation';

import Switch from './Settings/Switch';

export default class InputQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleValidationTypeSelect = this.handleValidationTypeSelect.bind(this);
        this.handleValidationOperationSelect = this.handleValidationOperationSelect.bind(this);
        this.handleValidationValueInput = this.handleValidationValueInput.bind(this);
        this.handleValidationTextInput = this.handleValidationTextInput.bind(this);
        this.validateNumberInput = this.validateNumberInput.bind(this);
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
    handleValidationTypeSelect(e) {
        console.log(e.target.value);
        const { validations } = this.state;
        validations.type = e.target.value;
        this.setState({
            validations: validations
        });
    }
    handleValidationOperationSelect(e) {
        console.log(e.target.value, e.target.name);
        const { value } = e.target;
        const name = e.target.name.toLowerCase();
        const { validations } = this.state;
        validations[name].operation = value;
        this.setState({
            validations: validations
        });
    }
    handleValidationValueInput(e) {
        console.log(e.target.value, e.target.name);
        const { value } = e.target;
        const name = e.target.name.toLowerCase();
        const { validations } = this.state;
        validations[name].value = value;
        this.setState({
            validations: validations
        });
    }
    handleValidationTextInput(e) {
        console.log(e.target.value, e.target.name);
        const { value } = e.target;
        const name = e.target.name.toLowerCase();
        const { validations } = this.state;
        validations[name].error_text = value;
        this.setState({
            validations: validations
        });
    }
    render() {
        const { 
            data,
            onFormTypeClick,
            toggleShowSetting,
            toggleRequired,
            deleteSection,
            mainIndex,
            duplicateSection
        } = this.props;
        return (
            <div className="form-card" style={{padding: 10}}>
                <TopMenu 
                    onFormTypeClick={onFormTypeClick}
                    currentFormType={data.type}
                    formTypeStyles={{padding: 0}}
                />
                {this.renderQuestionType()}
                {/* {
                    this.state.validations.isValidation ?
                        <ResponseValidation 
                            handleValidationTypeSelect={this.handleValidationTypeSelect}
                            handleValidationOperationSelect={this.handleValidationOperationSelect}
                            handleValidationValueInput={this.handleValidationValueInput}
                            handleValidationTextInput={this.handleValidationTextInput}
                            toggleValidation={this.toggleValidation}
                            validations={this.state.validations}
                        /> : ""
                } */}
                <BottomMenu 
                    toggleShowSetting={toggleShowSetting}
                    descriptionCheck={data.isDescription}
                    //validationCheck={data.validations.isValidation}
                    required={data.required}
                    toggleRequired={toggleRequired}
                    deleteSection={deleteSection}
                    duplicateSection={duplicateSection}
                    mainIndex={mainIndex}
                />
            </div>
        );
    }
    renderQuestionType() {
        const { type, validations } = this.props.data;
        const {
            data,
            handleTitleInput,
            handleDescriptionInput,
            handleQuestionInput,
            handleOptionInput,
            addMoreOption, 
            removeOption,
            toggleFileType, 
            toggleFileCheck, 
            handleFileSettingsInput,
            handleLinearScaleLabelChange,
            onLinearScaleValueClick,
            handleGridInput,
            addMoreGridRows,
            addMoreGridColumns,
            removeGrid
        } = this.props;
        if (type.toLowerCase() == 'header') {
            return (
                <Header
                    handleTitleInput={handleTitleInput} 
                    title={data.title} 
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}
                />
            );
        }
        if (type.toLowerCase() == 'title') {
            return (
                <Title
                    handleTitleInput={handleTitleInput} 
                    title={data.title} 
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}
                />
            );
        }
        if (type.toLowerCase() == 'short answer') {
            return (
                <ShortAnswer
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question} 
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}
                />
            );
        }
        if (type.toLowerCase() == 'paragraph') {
            return (
                <Paragraph
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question} 
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}
                />
            );
        }
        if (type.toLowerCase() == 'multiple choice') {
            return (
                <MultipleChoice 
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question}
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}

                    options={data.options} 
                    handleOptionInput={handleOptionInput}
                    addMoreOption={addMoreOption} 
                    removeOption={removeOption}
                />
            );
        }
        if (type.toLowerCase() == 'checkboxes') {
            return (
                <Checkboxes 
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question}
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}

                    options={data.options} 
                    handleOptionInput={handleOptionInput}
                    addMoreOption={addMoreOption} 
                    removeOption={removeOption}
                />
            );
        }
        if (type.toLowerCase() == 'dropdown') {
            return (
                <Dropdown 
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question}
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}

                    options={data.options} 
                    handleOptionInput={handleOptionInput}
                    addMoreOption={addMoreOption} 
                    removeOption={removeOption}
                />
            );
        }
        if (type.toLowerCase() == 'file upload') {
            return (
                <FileUpload
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question} 
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}

                    toggleFileType={toggleFileType}
                    toggleFileCheck={toggleFileCheck}
                    handleFileSettingsInput={handleFileSettingsInput}
                    upload_settings={data.upload_settings}
                />
            );
        }
        if (type.toLowerCase() == 'linear scale') {
            return (
                <LinearScale
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question} 
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}

                    handleLinearScaleLabelChange={handleLinearScaleLabelChange}
                    onLinearScaleValueClick={onLinearScaleValueClick}
                    scale_settings={data.scale_settings}
                />
            );
        }
        if (type.toLowerCase() == 'multiple choice grid') {
            return (
                <MultipleChoiceGrid
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question} 
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}

                    /* Grid Functions and Data */
                    handleGridInput={handleGridInput}
                    addMoreGridRows={addMoreGridRows}
                    addMoreGridColumns={addMoreGridColumns}
                    removeGrid={removeGrid}
                    grid_settings={data.grid_settings}
                />
            );
        }
        if (type.toLowerCase() == 'date') {
            return (
                <DateForm
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question} 
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}
                />
            );
        }
        if (type.toLowerCase() == 'time') {
            return (
                <Time
                    handleQuestionInput={handleQuestionInput} 
                    question={data.question} 
                    isDescription={data.isDescription}
                    handleDescriptionInput={handleDescriptionInput}
                    description={data.description}
                />
            );
        }
    }
}

InputQuestion.propTypes = {
    toggleAlert: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    toggleShowSetting: PropTypes.func.isRequired,
    toggleRequired: PropTypes.func.isRequired,
    handleTitleInput: PropTypes.func,
    handleDescriptionInput: PropTypes.func,
    handleQuestionInput: PropTypes.func,
    onFormTypeClick: PropTypes.func,
    handleOptionInput: PropTypes.func,
    addMoreOption: PropTypes.func,
    removeOption: PropTypes.func,
    toggleFileType: PropTypes.func, 
    toggleFileCheck: PropTypes.func,
    handleFileSettingsInput: PropTypes.func,
    deleteSection: PropTypes.func.isRequired,
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    duplicateSection: PropTypes.func.isRequired,
    handleLinearScaleLabelChange: PropTypes.func,
    onLinearScaleValueClick: PropTypes.func,
    handleGridInput: PropTypes.func,
    addMoreGridRows: PropTypes.func,
    addMoreGridColumns: PropTypes.func,
    removeGrid: PropTypes.func
}