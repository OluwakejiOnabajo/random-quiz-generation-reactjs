import './QuizPage.css';
import Questions from '../questions/Questions';
import Card from '../card/Card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

const QuizPage = (props) => {
  const {
    score,
    setScore,
    questions,
    setQuizPage,
    setInfoPage,
    setResultPage,
    correct
  } = props;

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [selected, setSelected] = useState("");
  const [timeText, setTimeText] = useState("Time Left");
  const [timeCount, setTimeCount] = useState(15);
  const [timeLine, setTimeLine] = useState(0);
  let counter; let counterLine;

useEffect(() => {
  // Shuffle options
  setOptions(
    questions ? handleShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers,
    ]) : ''
  );
}, [questions, currQues]);

// handle shuffle
const handleShuffle = (options) => {
  return options.sort(() => Math.random()-0.5);
}
  
// handle Select
  const handleSelect = (option) =>{
    if(selected === option && selected === correct){
      return "correct";
    }else if(selected === option && selected !== correct){
      return "incorrect";
    }else if(option === correct){
      return "correct";
    }
  }

  // Calculate scores
const handleCheck = (option) =>{
  // console.log("hee", option);
  setSelected(option);
  if(option === correct) setScore(score + 1);
  }
  
  // Toggle questions
  const handleNext = () => {
    if(currQues > 8){
      setQuizPage(false);
      setResultPage(true);
    }else if(selected){
      setCurrQues(currQues + 1);
      setSelected();
    }else{        
    toast.error("Please select an option", {
      theme: "colored",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    }
  }

  // Handle quit
  const handleQuit = () => {     
  setScore(0);
  setQuizPage(false);
  setInfoPage(true);
  }

  

  
  // Quiz Timer function
 const startTimer = (time) => {
  const timer = () => {
      setTimeCount(time); //changing the value of timeCount with time value
      time--; //decrement the time value
      if(time < 9){ //if timer is less than 9
          setTimeCount("0" + time); //add a 0 before time value
      }
      if(time < 1){ //if timer is less than 0
          clearInterval(counter); //clear counter
          setTimeText("Time Off"); //change the time text to time off
          const options = document.getElementsByClassName("option");
         //  console.log(options.length);
          options.map((option, i) => options[i].classList.add("disabled") ) //once user select an option then disabled all options
      }
  }
  counter = setInterval(timer, 1000);
 }

 const startTimerLine = (time) =>{
  const timer = ()=> {
       time += 1; //upgrading time value with 1
       setTimeLine(time + "px"); //increasing width of time_line with px by time value
       if(time > 549){ //if time value is greater than 549
           clearInterval(counterLine); //clear counterLine
       }
   }
   counterLine = setInterval(timer, 29);
}

if (questions) {
  // Start timer
  startTimer(15); 
  startTimerLine(0);
}
  
  return (
    <>
    <Card>
  <div className='question-header'>
    <div className="title">O'keji Quiz Application</div>
    {/* Question timer */}
    <div className="timer">
      <div className="time_left_txt">{timeText}</div>
      <div className="timer_sec">{timeCount}</div>
    </div>
    <div className="time_line" style={{width: timeLine}} /></div>

{/* Import Question if exist */}

  { questions ? 
  (<Questions 
  currQues={currQues}
  questions={questions}
  options={options}
  correct={questions[currQues]?.correct_answer}
  handleNext={handleNext}
  handleQuit={handleQuit}
  handleCheck={handleCheck}
  handleSelect={handleSelect}
  startTimer={startTimer}
  />) :
  // show loading icon if no questions
   <FaSpinner className='spinner' />
}

<div className='question-footer'>
    <div className="total_que">
    <span><p>{currQues + 1}</p> of <p>{questions.length}</p> Questions</span>
    </div>
    <button onClick={handleQuit} >Quit</button>
    {/* Disable button if no question */}
    <button onClick={handleNext} disabled={questions ? '' : true } >Next</button>
  </div>
    </Card>

    {/* Error conatiner */}
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