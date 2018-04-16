/********************************************** 
 * JSON Data Formats **************************
 * ********************************************

const SendQuestionsFormatInJSON = [
    {
        Header, Title, ShortAnswer, Paragraph, MultipleChoice, 
        Checkboxes, Dropdown or FileUpload
    },
    {
        Header, Title, ShortAnswer, Paragraph, MultipleChoice, 
        Checkboxes, Dropdown or FileUpload
    } 
]

const Header, Title = {
    type: String,
    title: String,
    description: String
}
** change ** question: {
        text: String,
        value: String
    }

const ShortAnswer, Paragraph = {
    type: String,
    question: String,
    description: String,
    validations: {
        isValidation: Boolean,
        type: String,
        number: {
            operation: String,
            value: String,
            error_text: String
        },
        text: {
            operation: String,
            value: String,
            error_text: String
        },
        length: {
            operation: String,
            value: String,
            error_text: String
        },
        regular_expression: {
            operation: String,
            value: String,
            error_text: String
        }
    },
    required: Boolean
}
** change ** question: {
        text: String,
        value: String
    }

const MultipleChoice, Checkboxes, Dropdown = {
    type: String,
    question: String,
    description: String,
    options: [
        String,
        String
    ],
    required: Boolean
}
** change ** options: [
        {
            id: String or Number,
            text: String,
            value: String
        }
    ]
** change ** question: {
        text: String,
        value: String
    }

const LinearScale = {
    type: String,
    question: String,
    description: String,
    scale_settings: {
        label_start: String or Number,
        label_end: String or Number,
        value_start: Number, *default 1
        value_end: Number, *default 5
        responses: [
            {
                id: String or Number,
                text: String,
                value: Boolean
            }
        ]
    },
    required: Boolean
}
** change ** question: {
        text: String,
        value: String
    }

const MultipleChoiceGrid = {
    type: String,
    question: String,
    description: String,
    grid_settings: {
        rows: Array,
        columns: Array,
        responses: [
            {
                id: String or Number
                text: String,
                value: Boolean,
                subresponses: [
                    {
                        id: String or Number,
                        text: String,
                        value: Boolean
                    }
                ]
            }
        ]
    },
    required: Boolean
}
** change ** question: {
        text: String,
        value: String
    }

const FileUpload = {
    type: String,
    question: String,
    description: String,
    upload_settings: {
        file_type: String,
        file_max: Number,
        size_max: Number,
    },
    required: Boolean
}
** change ** question: {
        text: String,
        value: String
    }

const Date = {
    type: String,
    question: String,
    description: String
}
** change ** question: {
        text: String,
        value: String
    }


const Time = {
    type: String,
    question: String,
    description: String
}
** change ** question: {
        text: String,
        value: {
            hours: Number,
            minutes: Number,
            type: String
        }
    }

*/

export const InputQuestions = [
    {
        type: "short answer",
        question: "Is this a short answer question?",
        required: "true"
    },
    {
        type: "short answer",
        question: "WHERE DO YOU NOT MIND WAITING?",
        required: "false"
    },
    {
        type: "paragraph",
        question: "IF YOU HAD THE WORLD’S ATTENTION FOR 30 SECONDS, WHAT WOULD YOU SAY?",
        required: "false"
    },
    {
        type: "multiple choice",
        question: "What type of music do you like?",
        options: [
            "R&B",
            "Pop",
            "Dubstep",
            "Rock",
            "Rap"
        ],
        required: "false"
    }
];