import './Questions.css';

const Question = (props) => {
  const {
    currQues,
    questions,
    options,
    score,
    handleCheck,
    selected,
    handleSelect
  } = props;

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
  </>
  )
}

export default Question