import './Question.css';
import Card from '../card/Card';

const Question = () => {
  return (
    <Card>
  <div className='question-header'>
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec">15</div>
    </div>
    <div className="time_line" />
  </div>
  <div className='question'>
    <div className="que_text">
      {/* Here I've inserted question from JavaScript */}
    </div>
    <div className="option_list">
      {/* Here I've inserted options from JavaScript */}
    </div>
  </div>
  {/* footer of Quiz Box */}
  <div className='question-footer'>
    <div className="total_que">
      {/* Here I've inserted Question Count Number from JavaScript */}
    </div>
    <button className="next_btn">Next Que</button>
  </div>

    </Card>
  )
}

export default Question