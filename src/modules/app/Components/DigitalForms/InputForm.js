import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputQuestion from './InputQuestion';
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

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.renderHTML = this.renderHTML.bind(this);
    }
    render() {
        const {
            questions
        } = this.props;
        return (
            <div>
                <div className="main-form-card">
                    {this.renderHTML()}
                </div>
            </div>
        );
    }
    renderHTML() {
        const {
            questions,
            editIndex,
            toggleEditing,
            toggleAlert,
            onFormTypeClick,
            toggleShowSetting,
            toggleRequired,
            handleTitleInput,
            handleDescriptionInput,
            handleQuestionInput,
            handleOptionInput,
            addMoreOption,
            removeOption,
            toggleFileType, 
            toggleFileCheck, 
            handleFileSettingsInput,
            deleteSection,
            duplicateSection,
            handleLinearScaleLabelChange,
            onLinearScaleValueClick,
            handleGridInput,
            addMoreGridRows,
            addMoreGridColumns,
            removeGrid
        } = this.props;
        if (questions.length > 0) {
            const rows = questions.map(function(data, i) {
                const type = data.type.toLowerCase();
                let div = null;
                switch (type) {
                    case 'header':
                        div=  editIndex == i ? 
                            <InputQuestion
                                key={i}
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleTitleInput={handleTitleInput}
                                handleDescriptionInput={handleDescriptionInput}
                            /> :
                            <Header 
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                title={data.title}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                            />;
                        break;
                    case 'title':
                        div= editIndex == i ?
                            <InputQuestion
                                key={i}
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleTitleInput={handleTitleInput}
                                handleDescriptionInput={handleDescriptionInput}
                            /> :
                            <Title
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                title={data.title}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                            />;
                        break;
                    case 'short answer':
                        div= editIndex == i ?
                            <InputQuestion
                                key={i} 
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}
                            /> :
                            <ShortAnswer
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}
                            />;
                        break;
                    case 'paragraph':
                        div= editIndex == i ?
                            <InputQuestion
                                key={i} 
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}
                            /> :
                            <Paragraph
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}
                            />;
                        break;
                    case 'multiple choice':
                        div= editIndex == i ?
                            <InputQuestion
                                key={i}
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}

                                handleOptionInput={handleOptionInput}
                                addMoreOption={addMoreOption}
                                removeOption={removeOption}
                            /> :
                            <MultipleChoice
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                options={data.options}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}
                            />;
                        break;
                    case 'checkboxes':
                        div= editIndex == i ?
                            <InputQuestion
                                key={i}
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}

                                handleOptionInput={handleOptionInput}
                                addMoreOption={addMoreOption}
                                removeOption={removeOption}
                            /> :
                            <Checkboxes
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                options={data.options}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}
                            />;
                        break;
                    case 'dropdown':
                        div= editIndex == i ?
                            <InputQuestion
                                key={i}
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}

                                handleOptionInput={handleOptionInput}
                                addMoreOption={addMoreOption}
                                removeOption={removeOption}
                            /> :
                            <Dropdown
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                options={data.options}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}
                            />;
                        break;
                    case 'file upload':
                        div= editIndex == i ?
                            <InputQuestion
                                key={i}
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}

                                toggleFileType={toggleFileType}
                                toggleFileCheck={toggleFileCheck}
                                handleFileSettingsInput={handleFileSettingsInput}
                            /> :
                            <FileUpload
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}
                            />;
                        break;
                    case 'linear scale': 
                        div= editIndex == i ?
                            <InputQuestion
                                key={i} 
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}

                                handleLinearScaleLabelChange={handleLinearScaleLabelChange}
                                onLinearScaleValueClick={onLinearScaleValueClick}
                            /> :
                            <LinearScale
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}

                                scale_settings={data.scale_settings}
                            />;
                        break;
                    case 'multiple choice grid':
                        div= editIndex == i ?
                            <InputQuestion
                                key={i} 
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}

                                /* Grid Functions */
                                handleGridInput={handleGridInput}
                                addMoreGridRows={addMoreGridRows}
                                addMoreGridColumns={addMoreGridColumns}
                                removeGrid={removeGrid}
                            /> :
                            <MultipleChoiceGrid
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}

                                grid_settings={data.grid_settings}
                            />;
                        break;
                    case 'date': 
                        div= editIndex == i ?
                            <InputQuestion
                                key={i} 
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}
                            /> :
                            <DateForm
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}
                            />;
                        break;
                    case 'time': 
                        div= editIndex == i ?
                            <InputQuestion
                                key={i} 
                                mainIndex={i}
                                toggleAlert={toggleAlert}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleQuestionInput={handleQuestionInput}
                                handleDescriptionInput={handleDescriptionInput}
                            /> :
                            <Time
                                key={i}
                                mainIndex={i}
                                toggleEditing={toggleEditing}
                                question={data.question}
                                isDescription={data.isDescription}
                                description={data.description}
                                isAdded={true}
                                required={data.required}
                            />;
                        break;
                    default:
                        div=<InputQuestion
                                toggleAlert={toggleAlert}
                                mainIndex={editIndex}
                                data={data}

                                onFormTypeClick={onFormTypeClick}
                                toggleShowSetting={toggleShowSetting}
                                toggleRequired={toggleRequired}
                                deleteSection={deleteSection}
                                duplicateSection={duplicateSection}

                                handleTitleInput={handleTitleInput}
                                handleDescriptionInput={handleDescriptionInput}
                            />
                        break;
                }
                return div;
            });
            return rows;
        } else {
            return (
                <InputQuestion
                    toggleAlert={toggleAlert}
                    mainIndex={editIndex}
                    data={data}

                    onFormTypeClick={onFormTypeClick}
                    toggleShowSetting={toggleShowSetting}
                    toggleRequired={toggleRequired}
                    deleteSection={deleteSection}
                    duplicateSection={duplicateSection}

                    handleTitleInput={handleTitleInput}
                    handleDescriptionInput={handleDescriptionInput}
                />
            );
        }
    }
}

InputForm.propTypes = {
    questions: PropTypes.array.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    editIndex: PropTypes.number.isRequired,
    toggleAlert: PropTypes.func.isRequired,
    toggleShowSetting: PropTypes.func,
    toggleRequired: PropTypes.func,
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
    deleteSection: PropTypes.func,
    duplicateSection: PropTypes.func,
    handleLinearScaleLabelChange: PropTypes.func,
    onLinearScaleValueClick: PropTypes.func,
    handleGridInput: PropTypes.func,
    addMoreGridRows: PropTypes.func,
    addMoreGridColumns: PropTypes.func,
    removeGrid: PropTypes.func
}