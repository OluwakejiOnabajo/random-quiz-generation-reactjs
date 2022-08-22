import './QuizPage.css';
import Questions from '../questions/Questions';
import Card from '../card/Card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

// import { useState } from 'react';

const QuizPage = ({
  category,
  score,
  setScore,
  highestScore,
  difficulty,
  questions,
  setQuestions,
  setQuizPage,
  setResultPage
}) => {

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

useEffect(() => {
  // console.log(questions);

  setOptions(
    questions ? handleShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers,
    ]) : ''
  );
}, [questions, currQues]);


console.log("options", options);

const handleShuffle = (options) => {
  return options.sort(() => Math.random()-0.5);
};

// console.log(category, difficulty);
  
  return (
    <>
    <Card>
  <div className='question-header'>
    <div className="title">O'keji Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec">30</div>
    </div>
    <div className="time_line" />
  </div>

  { questions ? (<Questions 
  currQues={currQues}
  setCurrQues={setCurrQues}
  questions={questions}
  options={options}
  correct={questions[currQues]?.correct_answer}
  score={score}
  setScore={setScore}
  setQuestions={setQuestions}
  setQuizPage={setQuizPage}
  setResultPage={setResultPage}
  />) :
   <FaSpinner className='spinner' />
}
    </Card>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
</>
  )
}

export default QuizPage