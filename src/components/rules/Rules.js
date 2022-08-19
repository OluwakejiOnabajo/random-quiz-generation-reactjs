import './Rules.css';
import Card from '../card/Card';

const Rules = ({
  username,
  category,
  highestScore,
  setInfoPage,
  setRulesPage,
  setQuestionPage
}) => {
  
  const exitQuiz = () => {
    setRulesPage(false);
    setInfoPage(true);
  }

  const startQuiz = () => {
      setRulesPage(false);
      setQuestionPage(true);
    }

  return (
    <Card>
  <div className="card-title"><span>Hello {username}!<br />Some Rules of this Quiz</span></div>
  <div className="card-body">
    <div className="rule">1. You will have only <span>30 seconds</span> for all question.</div>
    <div className="rule">2. You have the opportunity to change answers.</div>
    <div className="rule">3. Quiz ends once time goes off.</div>
    <div className="rule">4. You can't exit from the Quiz while you're playing.</div>
    <div className="rule">5. You'll get points on the basis of your correct answers.</div>
  </div>
  <div className="buttons">
    <button onClick={exitQuiz}>Exit Quiz</button>
    <button onClick={startQuiz}>Continue</button>
  </div>
</Card>

  )
}

export default Rules