import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
import Switch from './../Settings/Switch';
import TextInput from './../Settings/TextInput';

export default function FileUpload(props) {
    const {
        handleQuestionInput,
        question,
        isDescription,
        handleDescriptionInput,
        description,
        isSpecificFile,
        toggleFileType,
        toggleFileCheck,
        handleFileSettingsInput,
        upload_settings,
        isAdded,
        required,
        mainIndex
    } = props;
    const _id = Math.random().toString(36).substring(2);
    if (isAdded) {
        const red = required ? "red-text text-darken-2" : "grey-text text-darken-3";
        return (
            <div>
                <div className="row top-form" style={{margin: '25px 0 0 0'}}>
                    {
                        question ?
                            <div className="input-field col s12">
                                <input style={{fontSize: 25}} disabled
                                    className="grey-text text-darken-3"
                                    id={`file-upload-${_id}`} 
                                    type="text" 
                                    value={question}
                                />
                                <label htmlFor={`file-upload-${_id}`} 
                                    style={{fontSize: 25}} 
                                    className={`${red} active`}>Question</label> 
                            </div>
                        :
                            <div  className="input-field col s12">
                                <input style={{fontSize: 25}} disabled
                                    className={red}
                                    type="text" 
                                    value="File Upload"
                                />
                            </div>
                    }
                </div>
                {
                    isDescription ? 
                        <Description
                            description={description}
                            isAdded={isAdded}
                        /> :
                        ""
                }
                <div className="row">
                    <div className="input-field col s6 bottom-form">
                        <input disabled  type="text" className="grey-text text-darken-2"/>
                        <label>Add File</label>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input style={{fontSize: 25}} 
                            className="validate grey-text text-darken-3"
                            id={`file-upload-${_id}`} 
                            type="text" 
                            onChange={handleQuestionInput}
                            value={question}
                        />
                        <label style={{fontSize: 25}} htmlFor={`file-upload-${_id}`}>Question</label>
                    </div>
                </div>
                {
                    isDescription ? 
                        <Description
                            handleDescriptionInput={handleDescriptionInput}
                            description={description}
                        /> : ""
                }
                <div className="row">
                    <div className="input-field col s12 bottom-form">
                        <div className="row">
                            <p style={{marginTop: 10,marginBottom: 10}} className="col s8 left">Allow only specific file types</p>
                            <div style={{marginTop: 10,marginBottom: 10}} className="switch col right">
                                <label>
                                    <input type="checkbox"
                                        checked={upload_settings.isSpecificFileType}
                                        onClick={toggleFileType}
                                    />
                                    <span className="lever"></span>
                                </label>
                            </div>
                        </div>
                        {/* {
                            upload_settings.isSpecificFileType ?
                                <div className="row">
                                    <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                        <label>
                                            <input type="checkbox"
                                                className="filled-in" 
                                                name="document"
                                                checked={upload_settings.file_type.document}
                                                onChange={toggleFileCheck}
                                            />
                                            <span>Document</span>
                                        </label>
                                    </p>
                                    <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                        <label>
                                            <input type="checkbox"
                                                className="filled-in" 
                                                name="presentation" 
                                                checked={upload_settings.file_type.document}
                                                onChange={toggleFileCheck}
                                            />
                                            <span>Presentation</span>
                                        </label>
                                    </p>
                                    <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                        <label>
                                            <input type="checkbox" 
                                                className="filled-in"
                                                name="spreadsheet"
                                                checked={upload_settings.file_type.document}
                                                onClick={toggleFileCheck}
                                            />
                                            <span>Spreadsheet</span>
                                        </label>
                                    </p>
                                    <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                        <label>
                                            <input type="checkbox" 
                                                className="filled-in" 
                                                name="drawing"
                                                checked={upload_settings.file_type.document}
                                                onClick={toggleFileCheck}
                                            />
                                            <span>Drawing</span>
                                        </label>
                                    </p>
                                    <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                        <label>
                                            <input type="checkbox" 
                                                className="filled-in" 
                                                name="pdf"
                                                checked={upload_settings.file_type.document}
                                                onClick={toggleFileCheck}
                                            />
                                            <span>PDF</span>
                                        </label>
                                    </p>
                                    <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                        <label>
                                            <input type="checkbox" 
                                                className="filled-in" 
                                                name="image"
                                                checked={upload_settings.file_type.document}
                                                onClick={toggleFileCheck}
                                            />
                                            <span>Image</span>
                                        </label>
                                    </p>
                                    <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                        <label>
                                            <input type="checkbox" 
                                                className="filled-in" 
                                                name="video"
                                                checked={upload_settings.file_type.document}
                                                onClick={toggleFileCheck}
                                            />
                                            <span>Video</span>
                                        </label>
                                    </p>
                                    <p className="col s6" style={{marginTop: 2.5,marginBottom: 2.5}}>
                                        <label>
                                            <input type="checkbox" 
                                                className="filled-in" 
                                                name="audio"
                                                checked={upload_settings.file_type.document}
                                                onClick={toggleFileCheck}
                                            />
                                            <span>Audio</span>
                                        </label>
                                    </p>
                                </div> : ""
                        } */}
                        {
                            upload_settings.isSpecificFileType ? 
                                <div style={{display: 'flex',marginTop: -20}}>
                                    <div style={{flex: 1}}>
                                        <label className="form-checkbox-label">
                                            <input name="document" 
                                                checked={upload_settings.file_type.document}
                                                onClick={toggleFileCheck}
                                                className="form-checkbox-field" type="checkbox"
                                            />
                                            <i className="form-checkbox-button"></i>
                                            <span>Document</span>
                                        </label>
                                        <label className="form-checkbox-label">
                                            <input name="spreadsheet" 
                                                checked={upload_settings.file_type.spreadsheet} 
                                                className="form-checkbox-field" type="checkbox" 
                                                onClick={toggleFileCheck}
                                            />
                                            <i className="form-checkbox-button"></i>
                                            <span>Spreadsheet</span>
                                        </label>
                                        <label className="form-checkbox-label">
                                            <input name="pdf" 
                                                checked={upload_settings.file_type.pdf} 
                                                className="form-checkbox-field" type="checkbox" 
                                                onClick={toggleFileCheck}
                                            />
                                            <i className="form-checkbox-button"></i>
                                            <span>PDF</span>
                                        </label>
                                        <label className="form-checkbox-label">
                                            <input name="video" 
                                                checked={upload_settings.file_type.video} 
                                                className="form-checkbox-field" type="checkbox" 
                                                onClick={toggleFileCheck}
                                            />
                                            <i className="form-checkbox-button"></i>
                                            <span>Video</span>
                                        </label>
                                    </div>
                                    <div style={{flex: 1}}>
                                        <label className="form-checkbox-label">
                                            <input name="presentation" 
                                                checked={upload_settings.file_type.presentation} 
                                                className="form-checkbox-field" type="checkbox"
                                                onClick={toggleFileCheck} 
                                            />
                                            <i className="form-checkbox-button"></i>
                                            <span>Presentation</span>
                                        </label>
                                        <label className="form-checkbox-label">
                                            <input name="drawing" 
                                                checked={upload_settings.file_type.drawing} 
                                                className="form-checkbox-field" type="checkbox" 
                                                onClick={toggleFileCheck}
                                            />
                                            <i className="form-checkbox-button"></i>
                                            <span>Drawing</span>
                                        </label>
                                        <label className="form-checkbox-label">
                                            <input name="image" 
                                                checked={upload_settings.file_type.image} 
                                                className="form-checkbox-field" type="checkbox" 
                                                onClick={toggleFileCheck}
                                            />
                                            <i className="form-checkbox-button"></i>
                                            <span>Image</span>
                                        </label>
                                        <label className="form-checkbox-label">
                                            <input name="audio" 
                                                checked={upload_settings.file_type.audio} 
                                                className="form-checkbox-field" type="checkbox" 
                                                onClick={toggleFileCheck}
                                            />
                                            <i className="form-checkbox-button"></i>
                                            <span>Audio</span>
                                        </label>
                                    </div>
                                </div> : ""
                        }
                        <div className="row">
                            <p style={{marginTop: 10,marginBottom: 10}} className="col s8 left">Allow only specific file types <span className="grey-text text-darken-1" style={{fontSize: 12}}>({upload_settings.limit_file} MAX)</span></p>
                            <input style={{marginTop: 10,fontSize: 15,height: 20}} 
                                className="col s4 right validate grey-text text-darken-3"
                                type="text" 
                                name="max-file"
                                onChange={handleFileSettingsInput}
                                value={upload_settings.file_max}
                            />
                        </div>
                        <div className="row">
                            <p style={{marginTop: 10,marginBottom: 10}} className="col s8 left">Maximum file size <span className="grey-text text-darken-1" style={{fontSize: 12}}>({upload_settings.limit_size} KB MAX)</span></p>
                            <input style={{marginTop: 10,fontSize: 15,height: 20}}
                                className="col s4 right validate grey-text text-darken-3" 
                                type="text"
                                name="max-size"
                                onChange={handleFileSettingsInput}
                                value={upload_settings.size_max} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

FileUpload.propTypes = {
    handleQuestionInput: PropTypes.func,
    question: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isDescription: PropTypes.bool,
    handleDescriptionInput: PropTypes.func,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    toggleFileType: PropTypes.func,
    toggleFileCheck: PropTypes.func,
    handleFileSettingsInput: PropTypes.func,
    upload_settings: PropTypes.object,
    isAdded: PropTypes.bool,
    mainIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}