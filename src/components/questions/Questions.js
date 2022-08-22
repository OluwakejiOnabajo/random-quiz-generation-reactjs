import './Questions.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuizPage,
  setInfoPage,
  setResultPage
}) => {

  const [selected, setSelected] = useState("");
  
  const handleSelect = (option) =>{
    
    if(selected === option && selected === correct){
      return "correct";
    }else if(selected === option && selected !== correct){
      return "incorrect";
    }else if(option === correct){
      return "correct";
    }
  }

  const handleCheck = (option) =>{
    // console.log("hee", option);
    setSelected(option);
    if(option === correct) setScore(score + 1);
    }
    

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

    const handleQuit = () => {     
    setScore(0);
    setQuizPage(false);
    setInfoPage(true);
    }

  return (
    <>
  <div className='question'>
    <div className='cat-score'>
      <span>{questions[currQues].category}</span>
    <span>Score: {score}</span></div>

    <div className="que_text">

    <span>{questions[currQues].question}</span>
    {/* <span>Question</span> */}
    </div>
    <div className="option_list">
      {options ? options.map((option, i) => 
      <div 
      key={i} 
      onClick={() => handleCheck(option)} 
      className={`option ${selected ? handleSelect(option) : `` } ${selected ? `disabled` : `` }`}
      disabled={selected}>
        <span>{option}</span>
        </div>) : null }
 
    </div>
  </div>
  
  <div className='question-footer'>
    <div className="total_que">
    <span><p>{currQues + 1}</p> of <p>{questions.length}</p> Questions</span>
    </div>
    <button onClick={handleQuit} >Quit</button>
    <button onClick={handleNext} >Next</button>
  </div>
  </>
  )
}

export default Question