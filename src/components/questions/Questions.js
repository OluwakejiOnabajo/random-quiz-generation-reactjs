import './Questions.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Question = ({
  currQues,
  setCurrQue,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
  setQuizPage,
  setResultPage
}) => {

  const [selected, setSelected] = useState("");
  
  const handleSelect = (i) =>{
    
    if(selected === i && selected === correct){
      return "";
    }else if(selected === i && selected !== correct){
      return "incorrect";
    }else if(i === correct){
      return "correct";
    }
  }

  const handleCheck = (i) =>{
    setSelected(i);
    if(i === correct) setScore(score + 1);
    }
    const handleNext = () => {
      if(currQues > 8){
        setQuizPage(false);
        setResultPage(true);
      }else if(selected){
        setCurrQue(currQues + 1);
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
      // if(currQues > 8)
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
      {options ? options.map((option, i) => <div key={i} className="option">{option}</div>) : null }
        
      {/* {options.map((i) => 
       <div 
       className={`option ${selected ? `handleSelect(i)` : `` }`} 
       key={i} 
       onClick={handleCheck(i)} 
       disabled={selected} >
        <span>{i}</span>{handleSelect(i)}</div>
      )} */}
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