import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ActionButton extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._action_btn_id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            $(`#action-btn-${this._action_btn_id}`).floatingActionButton();
            $('.btn-floating.tooltipped').tooltip();
            // $('.tap-target').tapTarget();
        } catch (err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        var _actionBtn = document.querySelector(`#action-btn-${this._action_btn_id}`);
        var _toolTip = document.querySelector('.btn-floating.tooltipped');
        _actionBtn.remove();
        _toolTip.remove();
    }
    render() {
        const {
            addQuestion,
            addTitle,
            handleSaveSubmit,
            saved,
            id
        } = this.props;
        return (
            <div id={`action-btn-${this._action_btn_id}`} className="fixed-action-btn">
                <a id="menu" className="btn-floating btn-large green">
                    <i className="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li>
                        <a className="btn-floating tooltipped green hide-on-med-and-up" 
                            onClick={handleSaveSubmit}
                            data-position="left" 
                            data-tooltip="Save"><i className="material-icons">cloud_upload</i>
                        </a>
                    </li>
                    <li>
                        {
                            saved ? 
                                <a className="btn-floating tooltipped purple" 
                                    href={`/preview-form?id=${id}`}
                                    data-position="left" 
                                    data-tooltip="Preview"><i className="material-icons">visibility</i>
                                </a> :
                                <a className="btn-floating tooltipped purple" 
                                    onClick={() => M.toast({html: 'Form must be saved first.'})}
                                    data-position="left" 
                                    data-tooltip="Preview"><i className="material-icons">visibility</i>
                                </a>
                        }
                    </li>
                    {/* <li><a className="btn-floating tooltipped yellow darken-1" 
                        data-position="left" 
                        data-tooltip="Add section"><i className="material-icons">view_agenda</i>
                    </a></li> */}
                    <li>
                        <a className="btn-floating tooltipped red" 
                            onClick={addTitle}
                            data-position="left" 
                            data-tooltip="Add title and/or description"><i className="material-icons">text_fields</i>
                        </a>
                    </li>
                    <li>
                        <a className="btn-floating tooltipped blue" 
                            onClick={addQuestion}
                            data-position="left" 
                            data-tooltip="Add question"><i className="material-icons">add</i>
                        </a>
                    </li>
                </ul>

                {/* <div className="tap-target" data-target="menu">
                    <div className="tap-target-content">
                        <h5>Title</h5>
                        <p>A bunch of text</p>
                    </div>
                </div> */}
            </div>
        );
    }
}

ActionButton.propTypes = {
    addQuestion: PropTypes.func.isRequired,
    addTitle: PropTypes.func.isRequired,
    handleSaveSubmit: PropTypes.func,
    saved: PropTypes.bool.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}