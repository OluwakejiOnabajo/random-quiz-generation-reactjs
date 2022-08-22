import React from "react";
import InfoPage from "./components/infoPage/InfoPage";
import RulesPage from "./components/rulesPage/RulesPage";
import QuizPage from "./components/quizPage/QuizPage";
import ResultPage from "./components/resultPage/ResultPage";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [infoPage, setInfoPage] = useState(true);
  const [rulesPage, setRulesPage] = useState(false);
  const [quizPage, setQuizPage] = useState(false);
  const [resultPage, setResultPage] = useState(false);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [username, setUsername] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState('');

  const fetchQuestions = async (category, difficulty) => {
    const url = `https://opentdb.com/api.php?amount=10${category !== '' ? `&category=${category}` : ``}${ difficulty !== `` ? `difficulty=${difficulty}` : ''}&type=multiple`;
    await axios.get(url)
    .then( (response) => {
      // console.log(response.data.results);      
    setQuestions(response.data.results); 
    }).catch((error) => {
      console.log("error", error);
      console.log(url);
    }).finally(() => {
      console.log("Questions loaded");
    })
  }


  return (
    <>
    { infoPage ? (<InfoPage
    setInfoPage={setInfoPage}
    setRulesPage={setRulesPage}
    highestScore={highestScore}
    username={username}
    setUsername={setUsername}
    category={category} 
    setCategory={setCategory} 
    difficulty={difficulty}
    setDifficulty={setDifficulty} 
    fetchQuestions={fetchQuestions}
    />) : '' }

    { rulesPage ? (<RulesPage
    username={username}
    highestScore={highestScore}
    setInfoPage={setInfoPage}
    setRulesPage={setRulesPage}
    setQuizPage={setQuizPage}
     />) : '' }

    { quizPage ? (<QuizPage
    score={score}
    setScore={setScore}
    category={category} 
    difficulty={difficulty} 
    questions={questions}
    setQuestions={setQuestions}
    setQuizPage={setQuizPage}
    setResultPage={setResultPage} 
    />) : '' }

{ resultPage ? (<ResultPage
  username={username}
    score={score}
    questions={questions}
    setScore={setScore}
    highestScore={highestScore}
    setHighestScore={setHighestScore}
    setInfoPage={setInfoPage}
    setQuizPage={setQuizPage}
    setResultPage={setResultPage} 
    />) : '' }
    </>
  )
}

export default Home