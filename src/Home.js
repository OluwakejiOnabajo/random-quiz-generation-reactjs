import React from "react";
import InfoPage from "./components/infoPage/InfoPage";
import Rules from "./components/rules/Rules";
import Question from "./components/question/Question";
import Result from "./components/result/Result";
import { useState } from "react";

const Home = () => {
  const [infoPage, setInfoPage] = useState(true);
  const [rulesPage, setRulesPage] = useState(false);
  const [questionPage, setQuestionPage] = useState(false);
  const [resultPage, setResultPage] = useState(false);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [username, setUsername] = useState('');
  const [category, setCategory] = useState('');
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
    />) : '' }

    { rulesPage ? (<Rules
    username={username}
    category={category} 
    highestScore={highestScore}
    setInfoPage={setInfoPage}
    setRulesPage={setRulesPage}
    setQuestionPage={setQuestionPage}
     />) : '' }

    { questionPage ? (<Question
    score={score}
    setScore={setScore}
    highestScore={highestScore}
    username={username}
    category={category} 
    setQuestionPage={setQuestionPage}
    setResultPage={setResultPage} 
    />) : '' }

{ resultPage ? (<Result
    score={score}
    setScore={setScore}
    highestScore={setHighestScore}
    setInfoPage={setInfoPage}
    setResultPage={setResultPage} 
    />) : '' }
    </>
  )
}

export default Home