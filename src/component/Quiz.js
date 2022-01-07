import React, { Component } from 'react'

class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chapterSubmitPage: null,
            score: 0,
            max_questions: 0,
            currentQuizIndex: 0,
            quizPageOpen: false,
            quizQuestions: [
                {
                    "id": "d40093f1-2bdf-43ed-9987-ac1504e5176c",
                    "question": "Capital of Jharkhand?",
                    "options": [
                        {
                            "text": "a. Kolkata",
                            "status": false
                        },
                        {
                            "text": "b. Ranchi",
                            "status": true
                        },
                        {
                            "text": "c. New Delhi",
                            "status": false
                        },
                        {
                            "text": "d. Bhubaneswar",
                            "status": false
                        }
                    ]
                },
                {
                    "id": "30c712b8-51ba-4403-a65f-630895434f5a",
                    "question": "Capital of Odisha?",
                    "options": [
                        {
                            "text": "a. Bhubaneswar",
                            "status": true
                        },
                        {
                            "text": "b. Ranchi",
                            "status": false
                        },
                        {
                            "text": "c. Kolkata",
                            "status": false
                        },
                        {
                            "text": "d. New Delhi",
                            "status": false
                        }
                    ]
                },
                {
                    "id": "5729f23a-3136-4a0f-a9bf-67e121a2ff4b",
                    "question": "Capital of West Bengal?",
                    "options": [
                        {
                            "text": "a. Kolkata",
                            "status": true
                        },
                        {
                            "text": "b. Ranchi",
                            "status": false
                        },
                        {
                            "text": "c. New Delhi",
                            "status": false
                        },
                        {
                            "text": "d. Bhubaneswar",
                            "status": false
                        }
                    ]
                },
                {
                    "id": "d0d0c27f-ea3e-410c-b3d3-32367848fd1e",
                    "question": "Capital of Maharashtra?",
                    "options": [
                        {
                            "text": "a. Bhubaneswar",
                            "status": false
                        },
                        {
                            "text": "b. Ranchi",
                            "status": false
                        },
                        {
                            "text": "c. Mumbai",
                            "status": true
                        },
                        {
                            "text": "d. Kolkata",
                            "status": false
                        }
                    ]
                },
                {
                    "id": "8e36ec2a-bf88-4e58-8eeb-60e967b3f5a2",
                    "question": "Capital of Punjab?",
                    "options": [
                        {
                            "text": "a. Bhubaneswar",
                            "status": false
                        },
                        {
                            "text": "b. Ranchi",
                            "status": false
                        },
                        {
                            "text": "c. Mumbai",
                            "status": false
                        },
                        {
                            "text": "d. Chandigarh",
                            "status": true
                        }
                    ]
                },
                {
                    "id": "63f3fe5f-e1e7-4af5-9754-800fb0ac95b0",
                    "question": "Capital of Karnataka?",
                    "options": [
                        {
                            "text": "a. Bhubaneswar",
                            "status": false
                        },
                        {
                            "text": "b. Ranchi",
                            "status": false
                        },
                        {
                            "text": "c. Bengaluru",
                            "status": true
                        },
                        {
                            "text": "d. Mumbai",
                            "status": false
                        }
                    ]
                }
            ]
        }
    }
    componentWillUnmount = () => {
        console.log("will unmount")
    }

    onNextQuestions = () => {
        if (this.state.currentQuizIndex < this.state.quizQuestions.length - 1) {

            this.setState({
                currentQuizIndex: this.state.currentQuizIndex + 1,
                checkedAns: true
            })
        }
        console.log(this.state.score)
    }
    onBackQuestions = () => {
        if (this.state.currentQuizIndex > 0) {

            this.setState({
                currentQuizIndex: this.state.currentQuizIndex - 1

            })
        }
    }


    onSubmitQuestions = () => {
        console.log("ans =", this.state.quizQuestions)
        let score = 0;
        this.state.quizQuestions.forEach(question => {
            const correctIndexes = [];
            question.options.forEach((op, i) => {
                if (op.status) {
                    correctIndexes.push(i);
                }
            });
            if (correctIndexes.length === question.answers.length && question.answers.every(it => correctIndexes.includes(it))) {
                score++;
            }
            console.log(correctIndexes)

        })

        this.setState({
            submitPage: true,
            score: score,
        })
    }

    render() {
        return (
            <div>
                <div>
                    <p>Are you sure you want to play this chapter quiz ? </p>
                    <button className={`btn-highlight-success`} onClick={() => {
                        this.setState({ quizQuestions: this.state.quizQuestions.map(x => ({ ...x, answers: [] })), quizPageOpen: true, currentQuizIndex: 0 })
                        console.log("questions = ", this.state.quizQuestions)
                    }}>Play</button>
                </div>
                {
                    this.state.submitPage ?

                        <div className="quiz-container">
                            <h4><i className="bi bi-check-circle-fill"></i> Your score is {this.state.score} </h4>
                            <h4>Answers
                                {
                                    this.state.quizQuestions.map((q, i) => {
                                        return (
                                            <div>
                                                <div>Q{i + 1}</div>
                                                <div>Your Answers: {q.answers.map(op => q.options[op].text).join(',')}</div>
                                                <div>Correct Answers: {q.options.filter(op => op.status).map(op => op.text).join(',')}</div>
                                            </div>
                                        )
                                    })
                                }
                            </h4>
                        </div>
                        :

                        this.state.quizPageOpen &&
                        <div className="question-block">
                            <p><span className="q-number">Q{this.state.currentQuizIndex + 1}. </span> {this.state.quizQuestions[this.state.currentQuizIndex].question}</p>
                            {
                                this.state.quizQuestions[this.state.currentQuizIndex].options.map((optionsElement, optionsIndex) => {
                                    return (
                                        <div className="form-check" key={optionsIndex}>
                                            <input className="form-check-input" type="checkbox" checked={this.state.quizQuestions[this.state.currentQuizIndex].answers.includes(optionsIndex)}
                                                onChange={(e) => {
                                                    if (this.state.quizQuestions[this.state.currentQuizIndex].answers.includes(optionsIndex)) {
                                                        const findIndex = this.state.quizQuestions[this.state.currentQuizIndex].answers.indexOf(optionsIndex);
                                                        console.log('findIndex=', this.state.quizQuestions)
                                                        this.state.quizQuestions[this.state.currentQuizIndex].answers.splice(findIndex, 1);
                                                    } else {
                                                        this.state.quizQuestions[this.state.currentQuizIndex].answers.push(optionsIndex);
                                                        console.log('findIndex=', this.state.quizQuestions)
                                                    }
                                                    this.forceUpdate();
                                                }}></input>

                                            <label className="form-check-label" for="flexRadioDefault1">{optionsElement.text}</label>
                                        </div>
                                    )
                                })
                            }
                            {/* {
                                this.state.currentQuizIndex > 0 &&
                                <button type="button" className="btn btn-highlight-secondary back-button"
                                    onClick={this.onBackQuestions}   ><i className="bi bi-arrow-left"></i> Back</button>

                            }
                            {
                                this.state.currentQuizIndex < this.state.quizQuestions.length - 1 &&
                                <button type="button" className="btn btn-highlight-success next-button"
                                    onClick={this.onNextQuestions}   >Next Question <i className="bi bi-chevron-right"></i></button>

                            } */}

                            {/* {
                                this.state.currentQuizIndex === this.state.quizQuestions.length - 1 &&
                                <button type="button" className="btn btn-highlight-success next-button"
                                    onClick={this.onSubmitQuestions} > Submit </button>

                            } */}
                            <input
                                // id="typeinp"
                                type="range"
                                min={0} max={this.state.quizQuestions.length -1}
                                value={this.state.currentQuizIndex}
                                onChange={(e) => {
                                    console.log("render = ", e.target.value)
                                    if (Number(e.target.value) > this.state.max_questions) {
                                        this.setState({
                                            max_questions: Number(e.target.value),
                                            // currentQuizIndex: this.state.max_questions
                                        })
                                    }
                                    if (Number(e.target.value) < this.state.max_questions && this.state.quizQuestions[this.state.currentQuizIndex].answers.length != 0) {
                                        console.log("input =", this.state.quizQuestions[Number(e.target.value)].answers)
                                        this.setState({
                                            currentQuizIndex: Number(e.target.value),

                                        })
                                    }
                                    // if ( this.state.quizQuestions[this.state.currentQuizIndex].answers.length != 0){
                                    //     this.setState({
                                    //         currentQuizIndex: Number(e.target.value),

                                    //     })
                                    // }
                                    console.log("max=", Number(e.target.value) < this.state.max_questions && this.state.quizQuestions[this.state.currentQuizIndex].answers.length != 0)

                                }}
                                step={1}
                            />
                            <h1>Percentage of quiz complete : {Math.floor((this.state.currentQuizIndex / (this.state.quizQuestions.length - 1)) * 100)}% </h1>
                        </div>


                }
            </div>

        )
    }
}

export default Quiz
