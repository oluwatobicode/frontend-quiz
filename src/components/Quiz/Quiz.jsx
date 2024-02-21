/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import Progress from "../Progress/Progress";
import "./Quiz.css";
function Quiz({
  question,
  index,
  dispatch,
  numQuestions,
  icon,
  title,
  answer,
}) {
  const Correctanswer = question.answer;
  const hasAnswered = answer != null;
  return (
    <div className="container">
      <Navbar icon={icon} title={title} />
      <div className="question">
        <div className="text">
          <h4>
            Question {index + 1} out of {numQuestions}
          </h4>
          <h1>{question.question}</h1>
          <div>
            <Progress
              index={index}
              answer={answer}
              numQuestions={numQuestions}
            />
          </div>
        </div>
        <div className="options">
          <div className="option">
            {question.options.map((opt, index) => (
              <div key={opt}>
                <button
                  disabled={hasAnswered}
                  className={`btnOpt ${opt === answer ? answer : ""} ${
                    hasAnswered
                      ? opt === Correctanswer
                        ? "correct"
                        : "wrong"
                      : ""
                  }`}
                  onClick={() => {
                    console.log(Correctanswer);
                    dispatch({ type: "hasAnswered", payLoad: index });
                  }}
                >
                  {opt}
                </button>
              </div>
            ))}
          </div>
          <Button
            answer={answer}
            index={index}
            dispatch={dispatch}
            numQuestions={numQuestions}
          />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
