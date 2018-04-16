import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MultipleChoice from './Fill/MultipleChoice/Index';
import Checkboxes from './Fill/Checkboxes/Index';
import LinearScale from './Fill/LinearScale/Index';
import ShortAnswer from './Fill/ShortAnswer';
import MultipleChoiceGrid from './Fill/MultipleChoiceGrid/Index';
import Paragraph from './Fill/Paragraph';
import Dropdown from './Fill/Dropdown/Index';
import DateForm from './Fill/DateForm';
import Time from './Fill/Time';

export default class OutputForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            questions,
            handleSubmitForm,
            isCreator
        } = this.props;
        return (
            <div className="main-form-card clearfix">
                {this.renderHTML()}
                {
                    isCreator ? 
                        <a className="waves-effect waves-light btn right" disabled
                            onClick={handleSubmitForm}
                            style={{borderRadius: 2.5}}>SUBMIT
                        </a> :
                        <a className="waves-effect waves-light btn right" 
                            onClick={handleSubmitForm}
                            style={{borderRadius: 2.5}}>SUBMIT
                        </a>
                }
            </div>
        );
    }
    renderHTML() {
        const {
            questions,
            handleInputChange,
            handleDateChange
        } = this.props;
        if (questions.length > 0) {
            const rows = [];
            for (let i = 0; i < questions.length; i++) {
                const data = questions[i];
                const type = data.type.toLowerCase();
                switch (type) {
                    case 'multiple choice':
                        rows.push(
                            <MultipleChoice
                                key={i}
                                mainIndex={i}
                                question={data.question}
                                description={data.description}

                                required={data.required}
                                showRequired={data.showRequired}

                                options={data.options}
                                handleInputChange={handleInputChange}
                            />
                        );
                        break;
                    case 'checkboxes':
                        rows.push(
                            <Checkboxes
                                key={i}
                                mainIndex={i}
                                question={data.question}
                                description={data.description}

                                required={data.required}
                                showRequired={data.showRequired}

                                options={data.options}
                                handleInputChange={handleInputChange}
                            />
                        );
                        break;
                    case 'linear scale':
                        rows.push(
                            <LinearScale
                                key={i}
                                mainIndex={i}
                                question={data.question}
                                description={data.description}

                                required={data.required}
                                showRequired={data.showRequired}

                                options={data.options}
                                handleInputChange={handleInputChange}
                                scale_settings={data.scale_settings}
                            />
                        );
                        break;
                    case 'short answer':
                        rows.push(
                            <ShortAnswer
                                key={i}
                                mainIndex={i}
                                question={data.question}
                                description={data.description}

                                required={data.required}
                                showRequired={data.showRequired}

                                handleInputChange={handleInputChange}
                            />
                        );
                        break;
                    case 'multiple choice grid':
                        rows.push(
                            <MultipleChoiceGrid
                                key={i}
                                mainIndex={i}
                                question={data.question}
                                description={data.description}

                                required={data.required}
                                showRequired={data.showRequired}

                                handleInputChange={handleInputChange}
                                grid_settings={data.grid_settings}
                            />
                        );
                        break;
                    case 'paragraph':
                        rows.push(
                            <Paragraph
                                key={i}
                                mainIndex={i}
                                question={data.question}
                                description={data.description}

                                required={data.required}
                                showRequired={data.showRequired}

                                handleInputChange={handleInputChange}
                            />
                        );
                        break;
                    case 'dropdown':
                        rows.push(
                            <Dropdown
                                key={i}
                                mainIndex={i}
                                question={data.question}
                                description={data.description}

                                required={data.required}
                                showRequired={data.showRequired}

                                options={data.options}
                                handleInputChange={handleInputChange}
                            />
                        );
                        break;
                    case 'date':
                        rows.push(
                            <DateForm
                                key={i}
                                mainIndex={i}
                                question={data.question}
                                description={data.description}

                                required={data.required}
                                showRequired={data.showRequired}

                                handleDateChange={handleDateChange}
                            />
                        );
                        break;
                    case 'time':
                        rows.push(
                            <Time
                                key={i}
                                mainIndex={i}
                                question={data.question}
                                description={data.description}

                                required={data.required}
                                showRequired={data.showRequired}

                                handleInputChange={handleInputChange}
                            />
                        );
                        break;
                }
            }
            return rows;
        }
    }
}

OutputForm.propTypes = {
    questions: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleDateChange: PropTypes.func.isRequired,
    handleSubmitForm: PropTypes.func.isRequired
}