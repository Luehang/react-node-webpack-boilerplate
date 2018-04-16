import React, { Component } from 'react';

export default class PDFViewer extends Component {
    render() {
        return (
            <div id="pdf-main-container">
                <div id="pdf-loader" className="loader-spin"></div>
                <div id="pdf-contents">
                    <div id="pdf-meta">
                        <div id="pdf-buttons">
                            <a id="pdf-prev" className="waves-effect waves-teal btn-flat"><i className="material-icons left">keyboard_arrow_left</i>Previous</a>
                            <div id="page-count-container">Page <div id="pdf-current-page"></div> of <div id="pdf-total-pages"></div></div>
                            <a id="pdf-next" className="waves-effect waves-teal btn-flat"><i className="material-icons right">keyboard_arrow_right</i>Next</a>
                        </div>
                    </div>
                    <canvas id="pdf-canvas" width="400" styles="width: 100%;"></canvas>
                    <div id="page-loader" className="loader-spin"></div>
                </div>
            </div>
        );
    }
}