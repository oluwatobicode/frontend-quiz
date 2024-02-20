/* eslint-disable react/prop-types */
import Quiz from "../components/Quiz/Quiz";
function Accessibility({ accessibilityQuiz, index, answer, dispatch }) {
  console.log(accessibilityQuiz);
  const { questions, icon, title } = accessibilityQuiz;
  const numQuestions = questions.length;
  return (
    <div>
      <Quiz
        question={questions[index]}
        answer={answer}
        index={index}
        dispatch={dispatch}
        numQuestions={numQuestions}
        icon={icon}
        title={title}
      />
    </div>
  );
}

export default Accessibility;
