import './ResultPage.css';
import Card from '../card/Card';
import { FaCrown } from 'react-icons/fa';

const ResultPage = () => {
  return (
    <Card>
      <div className='result'>
  <div className="icon">
    <FaCrown />
  </div>
  <div className="complete-text">You've completed the Quiz!</div>
  <div className="score-text">
    {/* Here I've inserted Score Result from JavaScript */}
  </div>
  <div className="buttons">
    <button className="restart">Replay Quiz</button>
    <button className="quit">Quit Quiz</button>
  </div>
</div>

    </Card>
  )
}

export default ResultPage