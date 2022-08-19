import './InfoPage.css';
import Card from '../card/Card';
// import { useEffect } from 'react';
// import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Categories from '../../data/Categories';

const InfoPage = ({
  setInfoPage,
    setRulesPage,
    highestScore,
    username,
    setUsername,
    setCategory, 
}) => {

  const startQuiz = () => {
    if(username.length > 0){
      setInfoPage(false);
      setRulesPage(true);
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

//   useEffect(() => {

//     // const getCat = async () => {
//     //     try {
//     //         const response = await fetch("https://the-trivia-api.com/api/categories");
//     //         const cat = await response.json();
//     //         console.log(cat);
//     //         setCategory(await cat);
//     //     } catch (error) {
//     //         console.log("error", error);
//     //     }
//     // }
//     // getCat();
//     axios.get('https://the-trivia-api.com/api/categories')
//     .then( (response) => {
//       console.log(response.data);
//       console.log(Array.isArray(Categories))
//       // setCategory(response.data);
//     }).catch((error) => {
//       console.log(error);
//     });
// }, []);


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
        <select onChange={(e) => setCategory(e.target.value)} >
          <option > - Random Questions - </option>
        {
          Categories.map((cat, index) => {
            return (
              <option key={index} value={cat.value}>{cat.category}</option>
            )
          })
        } 
        </select>
      </div>
    </form>
  </div>
  <div className="buttons">
    <div className="highest-score">Highest Score: <span className='score'>{highestScore}</span></div>
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