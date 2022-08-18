import './InfoPage.css';
import Card from '../card/Card';

const InfoPage = () => {
  return (
   <Card>
  <div className="card-title"><span>Welcome to O'keji Quiz Application</span></div>
  <div className="card-body">
    <form className="info-form">
      <div className="form-group">
        <label>Enter your username</label>
        <input type="text" placeholder="Username" />
      </div>
      <div className="form-group">
        <label>Select quiz category</label>
        <select>
          <option value="general">General</option>
          <option value="science">Science</option>
        </select>
      </div>
    </form>
  </div>
  <div className="buttons">
    <button type="button" >Let's Play</button>
  </div>
</Card>
  )
}

export default InfoPage