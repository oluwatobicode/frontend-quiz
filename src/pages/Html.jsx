import Quiz from "../components/Quiz/Quiz";

/* eslint-disable react/prop-types */
function Html({ htmlQuiz, index, answer, dispatch }) {
  console.log(htmlQuiz);
  const { questions, icon, title } = htmlQuiz;
  const numQuestions = questions.length;
  return (
    <div>
      <Quiz
        question={questions[index]}
        answer={answer}
        icon={icon}
        title={title}
        index={index}
        dispatch={dispatch}
        numQuestions={numQuestions}
      />
    </div>
  );
}

export default Html;
