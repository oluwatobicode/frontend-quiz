/* eslint-disable no-case-declarations */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Html from "./pages/Html";
import CSS from "./pages/CSS";
import Accessibility from "./pages/Accessibility";
import PageNotFound from "./pages/PageNotFound";
import Javascript from "./pages/JavaScript";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "dataSeen":
      return { ...state, status: "ready", questions: action.payLoad };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "hasAnswered":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + 1
            : state.points,
      };
  }
}

const initialState = {
  questions: [],
  answer: null,
  points: 0,
  index: 0,
};

export default function App() {
  const [{ questions, answer, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //data broken down
  const htmlQuiz = questions[0];
  const cssQuiz = questions[1];
  const jsQuiz = questions[2];
  const accessibilityQuiz = questions[3];

  useEffect(function () {
    fetch("http://localhost:8000/quizzes")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataSeen", payLoad: data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/Html"
          element={
            <Html
              htmlQuiz={htmlQuiz}
              index={index}
              answer={answer}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path="/css"
          element={
            <CSS
              cssQuiz={cssQuiz}
              index={index}
              answer={answer}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path="/javascript"
          element={
            <Javascript
              jsQuiz={jsQuiz}
              index={index}
              answer={answer}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path="/accessibility"
          element={
            <Accessibility
              accessibilityQuiz={accessibilityQuiz}
              index={index}
              answer={answer}
              dispatch={dispatch}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
