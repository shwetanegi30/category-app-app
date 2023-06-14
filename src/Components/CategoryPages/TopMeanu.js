//normal-one

// import React from "react";
// import './Common.css';


// function TopBar() {
//   return (
//     <div className="container">
//       <div className="top-bar d-flex align-items-center mt-4 ">
//         <div className="right-side d-flex align-items-center gap-5">
//           <h3 className="fs-5 fw-500 name"> All </h3>
//           <h3 className="fs-5 fw-500 name"> Custom </h3>
//           <h3 className="fs-5 fw-500 name"> ICP </h3>
//           <h3 className="fs-5 fw-500 name"> Mission </h3>
//           <h3 className="fs-5 fw-500 name"> Product </h3>
//         </div>

//         <div className="left-side">
//           <button type="button" className="btn-add"> Add Topic <i className="fa-sharp fa-light fa-angle-right"></i></button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopBar;




//inputfield on next page

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Common.css';


function TopBar() {

  // const [customTopics, setCustomTopics] = useState([]);

  // const handleSaveTopic = (newTopics) => {
  //   setCustomTopics((prevTopics) => [...prevTopics, newTopics])
  // }

  return (

    <div className="container">
      <div className="top-bar d-flex align-items-center mt-4 ">
        <div className="right-side d-flex align-items-center gap-5">
          <h3 className="fs-5 fw-500 name"> All </h3>
          <h3 className="fs-5 fw-500 name"> Custom </h3>
          <h3 className="fs-5 fw-500 name"> ICP </h3>
          <h3 className="fs-5 fw-500 name"> Mission </h3>
          <h3 className="fs-5 fw-500 name"> Product </h3>
        </div>

        <div className="left-side">
        <Link to="/addTopic" className="link">
        <button type="button" className="btn-add"> Add Topic <i className="fa-sharp fa-light fa-angle-right"></i></button>
        </Link>
        
        </div>
      </div>
    </div>

    
  );
}

export default TopBar;




































// input-field on same page


// import React,{useState} from "react";
// import './Common.css';


// function TopBar() {

//   const [showForm, setShowForm] = useState(false);
//   const [topicName, setTopicName] = useState("");
//   const [keywords, setKeywords] = useState("");
  
//   const handleAddTopicClick = () => {
//     setShowForm(true)
//   }

//   const handleTopicChange = (e) => {
//     setTopicName(e.target.value)
//   }

//   const handleKeywordsChange = (e) => {
//     setKeywords(e.target.value)
//   }

//   const handleSaveTopic = (e) => {
//     e.preventDefault();
// // api call
//     console.log("topic save", topicName)
//     console.log("keyword save", keywords )


//     setTopicName('')
//     setKeywords("")
//     setShowForm(false)
//   };



//   return (
//     <div className="container">
//       <div className="top-bar d-flex align-items-center mt-4 ">
//         <div className="right-side d-flex align-items-center gap-5">
//           <h3 className="fs-5 fw-500 name"> All </h3>
//           <h3 className="fs-5 fw-500 name"> Custom </h3>
//           <h3 className="fs-5 fw-500 name"> ICP </h3>
//           <h3 className="fs-5 fw-500 name"> Mission </h3>
//           <h3 className="fs-5 fw-500 name"> Product </h3>
//         </div>

//         <div className="left-side">
//         {showForm ? (
//            <form onsubmit={handleSaveTopic}> 
//            <div>
//             <label htmlfor="topicname">topic name:</label>
//              <input 
//              type="text" 
//              id="topicName" 
//              value={topicName}
//               onChange={handleTopicChange} /> 
//               </div> 
//               <div> 
//               <label htmlfor="keywords">keywords:</label>
//                <input
//                 type="text" 
//                 id="keywords"
//                  value={keywords} 
//                  onChange={handleKeywordsChange} /> 
//                  </div> 
//                  <button type="submit">save</button> 
//                  </form> 
//                  ) : (
//                    <button type="button" className="btn-add" onClick={handleAddTopicClick}> Add Topic
//                     <i className="fa-sharp fa-light fa-angle-right"></i> 
//                     </button>
//                  )}

//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopBar;