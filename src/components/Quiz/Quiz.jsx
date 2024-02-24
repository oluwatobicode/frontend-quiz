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
  const optionLetters = ["A", "B", "C", "D"];
  return (
    <div className="container">
      <div className="question">
        <Navbar icon={icon} title={title} />
        <div className="bodyQuestion">
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
                        : "normal"
                    }`}
                    onClick={() => {
                      console.log(Correctanswer);
                      dispatch({
                        type: "hasAnswered",
                        payLoad: opt,
                        correct: Correctanswer,
                        icon: icon,
                        name: title,
                      });
                    }}
                  >
                    <div className="optionLetters">{optionLetters[index]}</div>
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
    </div>
  );
}

export default Quiz;

// To-do
/*

1.mobile and tablet responsive
2.dark mode 
3. if button clicked is the right answer show green 
  - if button clicked is the wrong answer show red on that and show answer with green 

*/
