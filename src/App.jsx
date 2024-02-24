/* eslint-disable no-case-declarations */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";

import Loader from "./components/loader/Loader";
import Home from "./pages/Home";
import Html from "./pages/Html";
import CSS from "./pages/CSS";
import Accessibility from "./pages/Accessibility";
import PageNotFound from "./pages/PageNotFound";
import Javascript from "./pages/JavaScript";
import FinishedScreen from "./components/FinishedScreen/FinishedScreen";

function reducer(state, action) {
  switch (action.type) {
    case "dataSeen":
      return { ...state, status: "ready", questions: action.payLoad };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "hasAnswered":
      return {
        ...state,
        answer: action.payLoad,

        points:
          action.payLoad === action.correct
            ? state.points + 1
            : state.points + 0,
        icon: action.icon,
        name: action.name,
      };
    case "finished":
      return {
        ...state,
        status: "finished",
      };

    case "playAgain":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };

    default:
      throw new Error("action not known!");
  }
}

const initialState = {
  questions: [],
  answer: null,
  points: 0,
  index: 0,
  status: "loading",
  icon: null,
  name: null,
};

export default function App() {
  const [{ questions, answer, index, status, points, icon, name }, dispatch] =
    useReducer(reducer, initialState);

  //data broken down
  const htmlQuiz = questions?.quizzes?.[0];
  const cssQuiz = questions?.quizzes?.[1];
  const jsQuiz = questions?.quizzes?.[2];
  const accessibilityQuiz = questions?.quizzes?.[3];

  useEffect(function () {
    fetch("https://oluwatobicode.github.io/api/index.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "dataSeen", payLoad: data, status: "ready" })
      )
      .catch((err) => console.log(err));
  }, []);

  console.log(questions);

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "ready" && (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home status={status} />} />
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
      )}
      {status === "finished" && (
        <FinishedScreen
          points={points}
          dispatch={dispatch}
          icon={icon}
          name={name}
        />
      )}
    </>
  );
}
