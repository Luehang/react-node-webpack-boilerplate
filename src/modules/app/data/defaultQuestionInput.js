const defaultQuestionInput = {}

defaultQuestionInput.getData = (type) => {
    return ({
        type: type ? type : "Multiple Choice",
        title: "",
        question: "",
        isDescription: false,
        description: "",
        options: [""],
        // upload_settings: {
        //     limit_file: 10, // 10 uploads
        //     limit_size: 25000, // 25MB
        //     file_max: 1,
        //     size_max: 500, // Kilobytes
        //     isSpecificFileType: false,
        //     file_type: {
        //         document: false, spreadsheet: false, pdf: false, video: false,
        //         presentation: false, drawing: false, image: false, audio: false
        //     }
        // },
        // validations: {
        //     isValidation: false,
        //     type: 'Number',
        //     number: {
        //         operation: 'Greater than',
        //         value: "",
        //         error_text: ""
        //     },
        //     text: {
        //         operation: 'Contains',
        //         value: "",
        //         error_text: ""
        //     },
        //     length: {
        //         operation: 'Max character count',
        //         value: "",
        //         error_text: ""
        //     },
        //     regular_expression: {
        //         operation: 'Contains',
        //         value: "",
        //         error_text: ""
        //     }
        // },
        scale_settings: {
            label_start: "",
            label_end: "",
            value_start: 1,
            value_end: 5,
            responses: []
        },
        grid_settings: {
            rows: [""],
            columns: [""],
            responses: []
        },
        showRequired: false,
        required: false
    });
};

module.exports = defaultQuestionInput;
