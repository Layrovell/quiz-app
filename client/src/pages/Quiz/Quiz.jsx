import React, { useState } from "react";
import { Helmet } from "react-helmet";
import questionsFromServer from "../../questions.json";
import { Link } from "react-router-dom";
import { Score } from "../../components/Score/Score";

export const Quiz = () => {
  const [questions, setQuestions] = useState(questionsFromServer);
  const [current, setCurrent] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const len = questions.length;

  const handleNext = () => {
    const next = current + 1;
    if (next < questions.length) setCurrent(next);
    else setShowScore(true);
  };

  const handlePrev = () => {
    const prev = current - 1;
    if (prev >= 0) setCurrent(prev);
    else console.log("no no no!");
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect === true) setScore(score + 1);
    handleNext();
  };

  return (
    <section className="container">
      <Helmet>
        <title>Quiz</title>
      </Helmet>
      {showScore ? (
        <Score score={score} questions={questions} />
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {current + 1} from {len}
            </div>
            <div className="question-text">
              {questions[current].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[current].answerOptions.map((answers) => (
              <button
                key={answers.answerText}
                onClick={() => handleAnswerClick(answers.isCorrect)}
                className="btn btn-answer"
              >
                {answers.answerText}
              </button>
            ))}
          </div>
          <div className="buttons-container">
            <button onClick={() => handlePrev()} className="btn btn-prev">
              prev
            </button>
            <button onClick={() => handleNext()} className="btn btn-next">
              next
            </button>
            <Link to="/quiz/" className="btn btn-exit">
              exit
            </Link>
          </div>
        </>
      )}
    </section>
  );
};
