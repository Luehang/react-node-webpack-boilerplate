import React, { Component } from 'react';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this._id = Math.random().toString(36).substring(2);
    }
    componentDidMount() {
        try {
            $(`.dropdown-trigger-${this._id}`).dropdown();
        } catch(err) {
            console.log(err);
        }
    }
    // componentWillUnmount() {
    //     var select = document.querySelector(`#select-${this._id}`);
    //     select.remove();
    // }
    render() {
        return (
            <div className="main-form-card">
                {/* NOTE: randomize id and for attributes */}
                {/* -------------------------------------------------------------------------------------------
                Edit container --------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                <div className="form-card">
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Form Header" type="text" className="validate grey-text text-darken-4 header-text"/>
                        </div>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Header ----------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Form Header" type="text" className="validate grey-text text-darken-4 header-text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input disabled value="Form Header" type="text" className="grey-text text-darken-4 header-text"/>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Title -----------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Untitled Title" type="text" className="validate grey-text text-darken-3 title-text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input disabled value="Untitled Title" type="text" className="grey-text text-darken-3 title-text"/>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Description -----------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: -5}}>
                        <textarea id="description" className="materialize-textarea validate grey-text text-darken-2"></textarea>
                        <label htmlFor="description">Description (optional)</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: -5}}>
                        <textarea disabled className="materialize-textarea validate grey-text text-darken-2"></textarea>
                        <label>Description (optional)</label>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Short answer ----------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                {/* Short answer */}
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="short-answer" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="short-answer">Question</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled  type="text" className="grey-text text-darken-2"/>
                        <label>Short answer text</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="short-answer" disabled type="text" className="grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="short-answer">Question</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled  type="text" className="grey-text text-darken-2"/>
                        <label>Short answer text</label>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Paragraph -------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="paragraph" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="paragraph">Question</label>
                    </div>
                    <div className="input-field col s10">
                        <input disabled  type="text" className="grey-text text-darken-2"/>
                        <label>Long answer text</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="paragraph" disabled type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="paragraph">Question</label>
                    </div>
                    <div className="input-field col s10">
                        <input disabled  type="text" className="grey-text text-darken-2"/>
                        <label>Long answer text</label>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Multiple choice -------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="multiple-choice" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="multiple-choice">Question</label>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <input className="with-gap" name="group1" type="radio" checked={false} />
                                <span className="col s10"><input style={{fontSize: 15,height: 25}} placeholder="Option 1" type="text" className="validate grey-text text-darken-3"/></span>
                                <img src="/img/remove.svg" className="right remove-button" style={{height: 16,width: 16,margin: 4}} />
                            </label>
                        </p>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <input className="with-gap" name="group1" type="radio" checked={false} />
                                <span className="col s10"><input style={{fontSize: 15,height: 25}} placeholder="Option 1" type="text" className="validate grey-text text-darken-3"/></span>
                                <img src="/img/remove.svg" className="right remove-button" style={{height: 16,width: 16,margin: 4}} />
                            </label>
                        </p>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <input className="with-gap" name="group1" type="radio" checked={true} />
                                <span className="col s5"><input style={{fontSize: 15,height: 25}} disabled placeholder="Add option" type="text" className="validate grey-text text-darken-3"/></span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="multiple-choice" disabled type="text" className="grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="multiple-choice">Question</label>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <input className="with-gap" name="group1" type="radio" checked={false} />
                                <span className="col s10"><input style={{fontSize: 15,height: 25}} disabled placeholder="Option 1" type="text" className="grey-text text-darken-3"/></span>
                            </label>
                        </p>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Checkboxes ------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="checkboxes" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="checkboxes">Question</label>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <input type="checkbox" className="filled-in" checked={false} />
                                <span className="col s10"><input style={{fontSize: 15,height: 25}} placeholder="Option 1" type="text" className="validate grey-text text-darken-3"/></span>
                                <img src="/img/remove.svg" className="right remove-button" style={{height: 16,width: 16,margin: 4}} />
                            </label>
                        </p>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <input type="checkbox" className="filled-in" checked={false} />
                                <span className="col s10"><input style={{fontSize: 15,height: 25}} placeholder="Option 1" type="text" className="validate grey-text text-darken-3"/></span>
                                <img src="/img/remove.svg" className="right remove-button" style={{height: 16,width: 16,margin: 4}} />
                            </label>
                        </p>                          
                        <p style={{margin: 0}}>
                            <label className="row">
                                <input type="checkbox" className="filled-in" checked={true} />
                                <span className="col s5"><input style={{fontSize: 15,height: 25}} disabled placeholder="Add option" type="text" className="grey-text text-darken-3"/></span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="checkboxes" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="checkboxes">Question</label>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <input type="checkbox" className="filled-in" checked={false} />
                                <span className="col s10"><input style={{fontSize: 15,height: 25}} disabled placeholder="Option 1" type="text" className="validate grey-text text-darken-3"/></span>
                            </label>
                        </p>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Dropdown --------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="dropdown" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="dropdown">Question</label>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <span className="left" style={{fontSize: 20,margin: 0,paddingRight: 5}}>1.</span>
                                <span className="col s10"><input style={{fontSize: 15,height: 25}} placeholder="Option 1" type="text" className="validate grey-text text-darken-3"/></span>
                                <img src="/img/remove.svg" className="right remove-button" style={{height: 16,width: 16,margin: 4}} />
                            </label>
                        </p>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <span className="left" style={{fontSize: 20,margin: 0,paddingRight: 5}}>2.</span>
                                <span className="col s10"><input style={{fontSize: 15,height: 25}} placeholder="Option 1" type="text" className="validate grey-text text-darken-3"/></span>
                                <img src="/img/remove.svg" className="right remove-button" style={{height: 16,width: 16,margin: 4}} />
                            </label>
                        </p>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <i className="material-icons left" style={{margin: 0}}>add_box</i>
                                <span className="col s5"><input style={{fontSize: 15,height: 25}} disabled placeholder="Add option" type="text" className="grey-text text-darken-3"/></span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="dropdown" disabled type="text" className="grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="dropdown">Question</label>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <span className="left" style={{fontSize: 20,margin: 0,paddingRight: 5}}>1.</span>
                                <span className="col s10"><input style={{fontSize: 15,height: 25}} disabled placeholder="Option 1" type="text" className="grey-text text-darken-3"/></span>
                            </label>
                        </p>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                File Upload -----------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="file-upload" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="file-upload">Question</label>
                        <div className="row">
                            <p style={{marginTop: 10,marginBottom: 10}} className="col s8 left">Allow only specific file types</p>
                            <div style={{marginTop: 10,marginBottom: 10}} className="switch col right">
                                <label>
                                    <input type="checkbox"/>
                                    <span className="lever"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                <label>
                                    <input type="checkbox" className="filled-in" checked={false} />
                                    <span>Document</span>
                                </label>
                            </p>
                            <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                <label>
                                    <input type="checkbox" className="filled-in" checked={false} />
                                    <span>Presentation</span>
                                </label>
                            </p>
                            <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                <label>
                                    <input type="checkbox" className="filled-in" checked={false} />
                                    <span>Spreadsheet</span>
                                </label>
                            </p>
                            <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                <label>
                                    <input type="checkbox" className="filled-in" checked={false} />
                                    <span>Drawing</span>
                                </label>
                            </p>
                            <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                <label>
                                    <input type="checkbox" className="filled-in" checked={false} />
                                    <span>PDF</span>
                                </label>
                            </p>
                            <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                <label>
                                    <input type="checkbox" className="filled-in" checked={false} />
                                    <span>Image</span>
                                </label>
                            </p>
                            <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                <label>
                                    <input type="checkbox" className="filled-in" checked={false} />
                                    <span>Video</span>
                                </label>
                            </p>
                            <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                <label>
                                    <input type="checkbox" className="filled-in" checked={false} />
                                    <span>Audio</span>
                                </label>
                            </p>
                        </div>
                        <div className="row">
                            <p style={{marginTop: 10,marginBottom: 10}} className="col s8 left">Allow only specific file types</p>
                            <input style={{marginTop: 10,fontSize: 15,height: 20}} value="1" type="text" className="col s4 right validate grey-text text-darken-3"/>
                        </div>
                        <div className="row">
                            <p style={{marginTop: 10,marginBottom: 10}} className="col s8 left">Maximum file size</p>
                            <input style={{marginTop: 10,fontSize: 15,height: 20}} value="500 KB" type="text" className="col s4 right validate grey-text text-darken-3"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12" style={{marginBottom: -20}}>
                        <input className="question-text" id="file-upload" disabled type="text" className="grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="file-upload">Question</label>
                    </div>
                    <div className="input-field col s6">
                        <input disabled  type="text" className="grey-text text-darken-2"/>
                        <label>File Upload</label>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Linear scale ----------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                {/* Edit mode */}
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: 20}}>
                        <input className="question-text" id={`linear-scale-${this._id}`} type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor={`linear-scale-${this._id}`}>Question</label>
                        <a className={`dropdown-trigger-${this._id} btn-flat`} 
                            href='#' 
                            data-target={`dropdown-${this._id}`}>1<i className="small material-icons right">arrow_drop_down</i>
                        </a>
                        <ul id={`dropdown-${this._id}`} className='dropdown-content'>
                            <li><a href="#!">0</a></li>
                            <li><a href="#!">1</a></li>
                        </ul>

                        <a className={`dropdown-trigger-${this._id} btn-flat`} 
                            href='#' 
                            data-target={`dropdown-${this._id}-2`}>5<i className="small material-icons right">arrow_drop_down</i>
                        </a>
                        <ul id={`dropdown-${this._id}-2`} className='dropdown-content'>
                            <li><a href="#!">2</a></li>
                            <li><a href="#!">3</a></li>
                            <li><a href="#!">4</a></li>
                            <li><a href="#!">5</a></li>
                            <li><a href="#!">6</a></li>
                            <li><a href="#!">7</a></li>
                            <li><a href="#!">8</a></li>
                            <li><a href="#!">9</a></li>
                            <li><a href="#!">10</a></li>
                        </ul>
                        
                        <p style={{margin: 0}}>
                            <label className="row">
                                <span className="left grey-text text-darken-3" style={{fontSize: 14,margin: 0,paddingRight: 5}}>1</span>
                                <span className="col m4 s5"><input style={{fontSize: 14,height: 18}} placeholder="Label (optional)" type="text" className="validate grey-text text-darken-3"/></span>
                            </label>
                        </p>
                        <p style={{margin: 0}}>
                            <label className="row">
                                <span className="left grey-text text-darken-3" style={{fontSize: 15,margin: 0,paddingRight: 5}}>2</span>
                                <span className="col m4 s5"><input style={{fontSize: 14,height: 18}} placeholder="Label (optional)" type="text" className="validate grey-text text-darken-3"/></span>
                            </label>
                        </p>
                    </div>
                </div>
                {/* Away mode */} 
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: 20}}>
                        <input disabled className="question-text" id={`linear-scale-${this._id}`} type="text" className="grey-text text-darken-3"/>
                        <label className="question-text" htmlFor={`linear-scale-${this._id}`}>Question</label>
                        <div className="row">
                            <div className="col s12 row">
                                <div className="col m2 s1">
                                    <p className="center-align">Test</p>
                                </div>
                                <div className="col m8 s10">
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>0</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>1</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>2</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>3</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>4</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>5</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>6</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>7</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>8</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                    <p className="col" style={{width: '10%'}}>
                                        <span style={{marginLeft: 10}}>9</span>
                                        <label>
                                            <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                        </label>
                                    </p>
                                </div>
                                <div className="col m2 s1">
                                    <div className="center-align">Test</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Multiple choice grid --------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                {/* Edit mode */}
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: 20}}>
                        <input className="question-text" id="multiple-choice-grid" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="multiple-choice-grid">Question</label>
                        <div className="row">
                            <div className="col m6 s12">
                                <p className="grey-text text-darken-4" style={{fontSize: 15, fontWeight: 525}}>Rows</p>
                                <p style={{margin: 0}}>
                                    <label className="row">
                                        <span className="left grey-text text-darken-3" style={{fontSize: 14,margin: 0,paddingRight: 5}}>1.</span>
                                        <span className="col s8"><input style={{fontSize: 14,height: 18}} placeholder="Row 1" type="text" className="validate grey-text text-darken-3"/></span>
                                        <img src="/img/remove.svg" className="right remove-button" style={{height: 12,width: 12,margin: 6}} />
                                    </label>
                                </p>
                                <p style={{margin: 0}}>
                                    <label className="row">
                                        <span className="left grey-text text-darken-3" style={{fontSize: 14,margin: 0,paddingRight: 5}}>2.</span>
                                        <span className="col s8"><input style={{fontSize: 14,height: 18}} placeholder="Row 2" type="text" className="validate grey-text text-darken-3"/></span>
                                        <img src="/img/remove.svg" className="right remove-button" style={{height: 12,width: 12,margin: 6}} />
                                    </label>
                                </p>
                                <p style={{margin: 0}}>
                                    <label className="row">
                                        <span className="left grey-text text-darken-3" style={{fontSize: 14,margin: 0,paddingRight: 5}}>3.</span>
                                        <span className="col s5"><input style={{fontSize: 14,height: 18}} disabled placeholder="Add row" type="text" className="grey-text text-darken-3"/></span>
                                    </label>
                                </p>
                                <hr className="hide-on-med-and-up"/>
                            </div>
                            <div className="col m6 s12">
                                <p className="grey-text text-darken-4" style={{fontSize: 15, fontWeight: 525}}>Columns</p>
                                <p style={{margin: 0}}>
                                    <label className="row">
                                        <input className="with-gap" name="group1" type="radio" checked={false} />
                                        <span className="col s9"><input style={{fontSize: 14,height: 18}} placeholder="Column 1" type="text" className="validate grey-text text-darken-3"/></span>
                                        <img src="/img/remove.svg" className="right remove-button" style={{height: 12,width: 12,margin:6}} />
                                    </label>
                                </p>
                                <p style={{margin: 0}}>
                                    <label className="row">
                                        <input className="with-gap" name="group1" type="radio" checked={false} />
                                        <span className="col s9"><input style={{fontSize: 14,height: 18}} placeholder="Column 2" type="text" className="validate grey-text text-darken-3"/></span>
                                        <img src="/img/remove.svg" className="right remove-button" style={{height: 12,width: 12,margin: 6}} />
                                    </label>
                                </p>
                                <p style={{margin: 0}}>
                                    <label className="row">
                                        <input className="with-gap" name="group1" type="radio" checked={true} />
                                        <span className="col s6"><input style={{fontSize: 14,height: 18}} disabled placeholder="Add column" type="text" className="validate grey-text text-darken-3"/></span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Away mode */}
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: 20}}>
                        <input className="question-text" id="multiple-choice-grid" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="multiple-choice-grid">Question</label>
                        <div className="row">
                            <span className="col grey-text text-darken-3 center-align" style={{fontSize: 14,margin: 0,minWidth: 55,width: '20%'}}></span>
                            <span className="col grey-text text-darken-3 center-align" style={{fontSize: 14,margin: 0,width: '20%'}}>Column 1</span>
                            <span className="col grey-text text-darken-3 center-align" style={{fontSize: 14,margin: 0,width: '20%'}}>Column 2</span>
                            <span className="col grey-text text-darken-3 center-align" style={{fontSize: 14,margin: 0,width: '20%'}}>Column 3</span>
                            <span className="col grey-text text-darken-3 center-align" style={{fontSize: 14,margin: 0,width: '20%'}}>Column 4</span>
                        </div>
                        <div className="row">
                            <span className="col grey-text text-darken-3" style={{fontSize: 14,margin: 0,width: '20%'}}>Row 1</span>
                            <p className="col center-align" style={{width: '20%'}}>
                                <label>
                                    <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                </label>
                            </p>
                            <p className="col center-align" style={{width: '20%'}}>
                                <label>
                                    <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                </label>
                            </p>
                            <p className="col center-align" style={{width: '20%'}}>
                                <label>
                                    <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                </label>
                            </p>
                            <p className="col center-align" style={{width: '20%'}}>
                                <label>
                                    <input disabled className="with-gap" type="radio" name=""  /><span></span>
                                </label>
                            </p>
                        </div>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Date ------------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                {/* Edit mode */}
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: 20}}>
                        <input className="question-text" id="date" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="date">Question</label>
                        <div className="row">
                            <div className="input-field col m5 s6" style={{marginTop: -5}}>
                                <i className="small material-icons prefix grey-text text-dark-3">date_range</i>
                                <input disabled id="icon_prefix" placeholder="Month,day,year" style={{fontSize: 14}} type="text" />
                                <label htmlFor="icon_prefix"></label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Away mode */}
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: 20}}>
                        <input disabled className="question-text" id="date" type="text" className="grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="date">Question</label>
                        <div className="row">
                            <div className="input-field col m5 s6" style={{marginTop: -5}}>
                                <i className="small material-icons prefix grey-text text-dark-3">date_range</i>
                                <input disabled id="icon_prefix" placeholder="Month,day,year" style={{fontSize: 14}} type="text" />
                                <label htmlFor="icon_prefix"></label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------
                Time ------------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------*/}
                {/* Edit mode */}
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: 20}}>
                        <input className="question-text" id="time" type="text" className="validate grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="time">Question</label>
                        <div className="row">
                            <div className="input-field col m5 s6" style={{marginTop: -5}}>
                                <i className="small material-icons prefix grey-text text-dark-3">access_time</i>
                                <input disabled id="icon_prefix" placeholder="Time" style={{fontSize: 14}} type="text" />
                                <label htmlFor="icon_prefix"></label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Away mode */}
                <div className="row">
                    <div className="input-field col s12" style={{marginTop: 20}}>
                        <input disabled className="question-text" id="time" type="text" className="grey-text text-darken-3"/>
                        <label className="question-text" htmlFor="time">Question</label>
                        <div className="row">
                            <div className="input-field col m5 s6" style={{marginTop: -5}}>
                                <i className="small material-icons prefix grey-text text-dark-3">access_time</i>
                                <input disabled id="icon_prefix" placeholder="Time" style={{fontSize: 14}} type="text" />
                                <label htmlFor="icon_prefix"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}