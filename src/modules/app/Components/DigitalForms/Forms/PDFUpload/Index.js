import React, { Component } from 'react';

import PDFViewer from './PDFViewer';

export default class PDFUpload extends Component {
    render() {
        return (
            <div>
                <a id="upload-button" className="waves-effect waves-light btn-large"><i className="material-icons left">picture_as_pdf</i>Select PDF</a>
                <input type="file" id="file-to-upload" name="pdfUpload" accept="application/pdf" />

                <PDFViewer />
            </div>
        );
    }
}