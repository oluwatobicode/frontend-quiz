/* eslint-disable react/prop-types */
import Quiz from "../components/Quiz/Quiz";

function CSS({ cssQuiz, index, answer, dispatch }) {
  console.log(cssQuiz);
  const { questions, icon, title } = cssQuiz;
  const numQuestions = questions.length;
  return (
    <div>
      <Quiz
        question={questions[index]}
        answer={answer}
        index={index}
        icon={icon}
        title={title}
        dispatch={dispatch}
        numQuestions={numQuestions}
      />
    </div>
  );
}

export default CSS;
