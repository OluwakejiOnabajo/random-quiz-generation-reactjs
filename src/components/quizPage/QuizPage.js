import './QuizPage.css';
import Questions from '../questions/Questions';
import Card from '../card/Card';
import { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaTruckLoading, FaSpinner } from 'react-icons/fa';

// import { useState } from 'react';

const QuizPage = ({
  category,
  score,
  setScore,
  highestScore,
  difficulty,
  questions
}) => {

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  

useEffect(() => {
  console.log(questions);

  setOptions(
    questions ? handleShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers,
    ]) : ''
  );
}, [questions, currQues]);

// console.log(options);

const handleShuffle = (options) => {
  return options.sort(() => Math.random()-0.5);
};

  const prevQuestion = () =>{

  }

  const nextQuestion = () =>{
    
  }

console.log(category, difficulty);
console.log(questions);

  // const [questionIndex, setQuestionIndex] = useState(0);

  return (
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
  />) :
   <FaSpinner className='spinner' />
}
  {/* footer of Quiz Box */}
  <div className='question-footer'>
    <div className="total_que">
    <span><p>3</p> of <p>20</p> Questions</span>
    </div>
    <button onClick={prevQuestion} >Previous</button>
    <button onClick={nextQuestion} >Next</button>
  </div>

    </Card>
  )
}

export default QuizPage