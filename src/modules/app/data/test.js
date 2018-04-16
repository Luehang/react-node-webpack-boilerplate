const test = {
    "id": 54438195180016840000,
    "questions": [
        // --------------------------------------------------------------
        // Multiple choice ----------------------------------------------
        // --------------------------------------------------------------
        // * YES/NO Question ********************************************
        {
            "responses": [
                {
                    "text": "Yes",
                    "response_id": 9202028339658140000,
                    "value": 1
                },
                {
                    "text": "No",
                    "response_id": 36520674649801687000,
                    "value": 0
                }
            ],
            "hint": "yes no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ",
            "text": "Question 1 - Is this question type yes no",
            "type": 1,
            "order": 1,
            "question_id": 77568738439595930000
        },
        // * TRUE/FALSE Question ****************************************
        {
            "responses": [
                {
                    "text": "True",
                    "response_id": 46248464021816440000,
                    "value": 1
                },
                {
                    "text": "False",
                    "response_id": 5433813344676088000,
                    "value": 0
                }
            ],
            "hint": "true false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ",
            "text": "Question 2 - is this a true false question?",
            "type": 2,
            "order": 2,
            "question_id": 74815065846619110000
        },
        // * Multiple choice Question ************************************
        {
            "responses": [
                {
                    "text": "Option 1",
                    "response_id": 57916798272563356000,
                    "value": 1
                },
                {
                    "text": "Option 2",
                    "response_id": 50502318316542200000,
                    "value": 2
                },
                {
                    "text": "Option 3",
                    "response_id": 16393542604537807000,
                    "value": 3
                }
            ],
            "hint": "you can only pick one answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ",
            "text": "Question 3 - pick only one answer",
            "type": 3,
            "order": 3,
            "question_id": 41332164362114770000
        },
        // --------------------------------------------------------------
        // Checkboxes ---------------------------------------------------
        // --------------------------------------------------------------
        // * Checkboxes *************************************************
        {
            "responses": [
                {
                    "text": "Multiple option 1",
                    "response_id": 76024034952717680000,
                    "value": 1
                },
                {
                    "text": "Multiple option 2",
                    "response_id": 78037838402066550000,
                    "value": 2
                },
                {
                    "text": "Multiple option 3",
                    "response_id": 83266697996367740000,
                    "value": 3
                }
            ],
            "hint": "pick more than one                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
            "text": "Question 4 - you can pick multiple options",
            "type": 4,
            "order": 4,
            "question_id": 40098514762599740000
        },
        // --------------------------------------------------------------
        // Linear scale -------------------------------------------------
        // --------------------------------------------------------------
        // * Star rating Question ***************************************
        {
            "starter_label": "Bottom Value 1",
            "hint": "pick a star                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ",
            "text": "Question 5 - star scale from 1 to 5",
            "step_size": 1.0,
            "num_stars": 5,
            "finish_label": "Top Value 5",
            "type": 5,
            "order": 5,
            "question_id": 96193955380394720000
        },
        // --------------------------------------------------------------
        // Short answer -------------------------------------------------
        // --------------------------------------------------------------
        // * Short answer Question **************************************
        {
            "text": "Question 7 - short answer",
            "hint": "briefly answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ",
            "type": 7,
            "order": 7,
            "question_id": 67700013958651700000
        },
        // --------------------------------------------------------------
        // Multiple choice grid -----------------------------------------
        // --------------------------------------------------------------
        // * Multiple choice grid ***************************************
        {
            "responses": [
                {
                    "text": "Question 9 - Answer the following questions",
                    "subresponses": [
                        {
                            "text": "Multiple option 1 - Sub choice 1",
                            "value": 1,
                            "subresponse_id": 57452450528510400000
                        },
                        {
                            "text": "Multiple option 1 - Sub choice 2",
                            "value": 2,
                            "subresponse_id": 9252362549029353000
                        },
                        {
                            "text": "Multiple option 2 - Sub choice 1",
                            "value": 1,
                            "subresponse_id": 36607448736338480000
                        },
                        {
                            "text": "Multiple option 2 - Sub choice 2",
                            "value": 2,
                            "subresponse_id": 30299409106123990000
                        }
                    ],
                    "response_id": 4539419074902631400,
                    "value": 1
                },
                {
                    "text": "Question 9-2 - Answer the following questions",
                    "subresponses": [
                        {
                            "text": "Multiple option 1 - Sub choice 1",
                            "value": 1,
                            "subresponse_id": 57452450528510400000
                        },
                        {
                            "text": "Multiple option 1 - Sub choice 2",
                            "value": 2,
                            "subresponse_id": 9252362549029353000
                        },
                        {
                            "text": "Multiple option 2 - Sub choice 1",
                            "value": 1,
                            "subresponse_id": 36607448736338480000
                        },
                        {
                            "text": "Multiple option 2 - Sub choice 2",
                            "value": 2,
                            "subresponse_id": 30299409106123990000
                        }
                    ],
                    "response_id": 6739419074904531400,
                    "value": 1
                }
            ],
            "hint": "formatted grid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ",
            "text": "Question 9 - grid multiple choice formatted",
            "type": 9,
            "order": 9,
            "question_id": 21008226007339184000
        },
        // --------------------------------------------------------------
        // Paragraph ----------------------------------------------------
        // --------------------------------------------------------------
        // * Paragraph Question *****************************************
        {
            "text": "Question 10 - paragraph",
            "hint": "write a long answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ",
            "type": 10,
            "order": 10,
            "question_id": 76051393293264490000
        },
        // --------------------------------------------------------------
        // Dropdown -----------------------------------------------------
        // --------------------------------------------------------------
        // * Dropdown Question ******************************************
        {
            "responses": [
                {
                    "text": "Question 11 - drop down box of values 1",
                    "response_id": 62352236812014300000,
                    "value": 1
                },
                {
                    "text": "Question 11 - drop down value 2",
                    "response_id": 37917854821437900000,
                    "value": 2
                }
            ],
            "hint": "drop down box                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ",
            "text": "Question 11 - drop down",
            "type": 11,
            "order": 11,
            "question_id": 4706684964897769000
        },
        // --------------------------------------------------------------
        // Date ---------------------------------------------------------
        // --------------------------------------------------------------
        // * Date Question **********************************************
        {
            "text": "Question 12 - date",
            "hint": "it is a date                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ",
            "type": 12,
            "order": 12,
            "question_id": 3852135343803116000
        },
        // --------------------------------------------------------------
        // Time ---------------------------------------------------------
        // --------------------------------------------------------------
        // * Time Question **********************************************
        {
            "text": "Question 13 - time",
            "hint": "time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ",
            "type": 13,
            "order": 13,
            "question_id": 84560376531044350000
        }
    ],
    "title": "Regenie Testing"
}

module.exports = test;