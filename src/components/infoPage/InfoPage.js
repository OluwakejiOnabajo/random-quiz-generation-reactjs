import './InfoPage.css';
import Card from '../card/Card';
import {useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InfoPage = ({
  setInfoPage,
    setQuestionPage,
    highestScore,
    username,
    setUsername,
    category, 
    setCategory, 
}) => {

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const startQuiz = () => {
    if(username.length > 0){
      setInfoPage(false);
      setQuestionPage(true);
    } else {
      toast.error("Oop's! Username is required", {
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

  const handleSubmit = (e) => {
    console.log("ss3d");
    // e.preventDefault();
    if(username.length > 0){
      setSubmitted(true);
      setError(false);
      console.log("ss3d");
    } else {
      console.log("ss");
      // setError(true);
      toast("Wow so easy!");
    }
  }


  return (
    <>
   <Card>
  <div className="card-title"><span>Welcome to O'keji Quiz Application</span></div>
  <div className="card-body">
    <form className="info-form">
      <div className="form-group">
        <label>Enter your username</label>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Select quiz category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} >
          <option>General</option>
          <option>Science</option>
        </select>
      </div>
    </form>
  </div>
  <div className="buttons">
    <button type="submit" onClick={ startQuiz } >Let's Play</button>
  </div>
</Card>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
  </>
  )
}

export default InfoPage;