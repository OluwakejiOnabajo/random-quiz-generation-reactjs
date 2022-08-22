import './ResultPage.css';
import Card from '../card/Card';
import { useEffect, useState } from 'react';
import { FaCrown } from 'react-icons/fa';

const ResultPage = ({
  username,
  questions,
   score, 
   setScore,
   highestScore,
    setHighestScore,
    setInfoPage,
    setQuizPage,
   setResultPage
}) => {

  const [scoreText, setScoreText] = useState();

  useEffect(() => {
  if (score > 5){ 
    setScoreText(`and congrats! 🎉, You got ${score} out of ${questions.length}`);
} else if(score > 3){ 
  setScoreText(`and nice 😎, You got ${score} out of ${questions.length}`);
 } else{ 
  setScoreText(`and sorry 😐, You got ${score} out of ${questions.length}`);
  }
  },[score, questions.length])

  const handleReplay = () =>{
    if(score > highestScore){
      setHighestScore(score);
    }
    setScore(0);
    setResultPage(false);
    setQuizPage(true);
  }

  const handleQuit = () =>{
    if(score > highestScore){
      setHighestScore(score);
    }
    setScore(0);
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