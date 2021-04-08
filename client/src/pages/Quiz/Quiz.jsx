/* eslint-disable */
import React, {useState} from 'react';
import questionsFromServer from '../../questions.json';
import {Link} from "react-router-dom";
import {Score} from "../../components/Score/Score";

export const Quiz = () => {
    const [questions, setQuestions] = useState(questionsFromServer);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    console.log(questions);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    const handleButtonNext = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true);
        }
    }

    const handleButtonPrev = () => {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion >= 0) {
            setCurrentQuestion(prevQuestion)
        } else {
            console.log('no no no!');
        }
    }

    return (
        <section className="App">
            {showScore
                ? <Score score={score} questions={questions}/>
                : <>
                    <div className="question-section">
                        <div className="question-count">Question {currentQuestion + 1} from {questions.length}</div>
                        <div className="question-text">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((answers) => (
                            <button
                                key={answers.answerText}
                                onClick={() => handleAnswerButtonClick(answers.isCorrect)}
                                className="btn btn-answer"
                            >
                                {answers.answerText}
                            </button>
                        ))}
                    </div>
                    <div className="question-buttons">
                        <button onClick={() => handleButtonPrev()} className="btn btn-prev">back</button>
                        <button onClick={() => handleButtonNext()} className="btn btn-prev">next</button>
                        <Link to='/quiz/' className='btn btn-exit'>exit</Link>
                    </div>
                </>
            }
        </section>
    );
}
