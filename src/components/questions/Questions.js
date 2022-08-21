import './Questions.css';
import Card from '../card/Card';
import { useState } from 'react';
import { FaCheck, FaTimes, FaTruckLoading } from 'react-icons/fa';

// import { useState } from 'react';

const Question = ({
  category,
  score,
  setScore,
  difficulty,
  questions,
}) => {

  return (
    <>
  <div className='question'>
    <p className='category'>Category</p>

    <div className="que_text">

    <span>What is dwd  eded ede ddqe</span>
    </div>
    <div className="option_list">
    <div className="option"><span>Yes, he is</span><div className="icon tick"><FaCheck /></div></div>
    <div className="option"><span>lllll</span><div className="icon tick"><FaTimes /></div></div>
    </div>
  </div>
  </>
  )
}

export default Question