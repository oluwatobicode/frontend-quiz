import Quiz from "../components/Quiz/Quiz";

/* eslint-disable react/prop-types */
const Javascript = ({ jsQuiz, index, answer, dispatch }) => {
  console.log(jsQuiz);
  const { questions, icon, title } = jsQuiz;
  const numQuestions = questions.length;
  return (
    <div>
      <Quiz
        question={questions[index]}
        answer={answer}
        index={index}
        dispatch={dispatch}
        icon={icon}
        title={title}
        numQuestions={numQuestions}
      />
    </div>
  );
};

export default Javascript;
