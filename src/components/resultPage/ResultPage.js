import './ResultPage.css';
import Card from '../card/Card';
import { useEffect, useState } from 'react';
import { FaCrown } from 'react-icons/fa';

const ResultPage = ({
  username,
  questions,
   score, 
   highestScore,
    setHHighestScore,
    setInfoPage,
    setQuizPage,
   setResultPage
}) => {

  const [scoreText, setScoreText] = useState();

  useEffect(() => {
  if (score > 5){ 
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    setScoreText(`and congrats! 🎉, You got ${score} out of ${questions.length}`);
} else if(score > 3){ 
  // if user scored more than 1
  setScoreText(`and nice 😎, You got ${score} out of ${questions.length}`);
 } else{ 
  // if user scored less than 1
  setScoreText(`and sorry 😐, You got ${score} out of ${questions.length}`);
  }
  },[score, questions.length])

  const handleReplay = () =>{
    if(score > highestScore){
      setHHighestScore(score);
    }
    setResultPage(false);
    setQuizPage(true);
  }

  const handleQuit = () =>{
    setResultPage(false);
    setInfoPage(true);
  }

  return (
    <Card>
      <div className='result'>
  <div className="icon">
    <FaCrown />
  </div>
  <div className="complete-text"><span className='username'>{username}</span>, you've completed the Quiz!</div>
  <div className="score-text"><span>{scoreText}</span></div>
  <div className="buttons">
    <button className="restart" onClick={handleReplay}>Replay Quiz</button>
    <button className="quit" onClick={ handleQuit }>Quit Quiz</button>
  </div>
</div>

    </Card>
  )
}

export default ResultPage