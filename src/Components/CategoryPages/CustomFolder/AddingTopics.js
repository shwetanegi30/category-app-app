// import React from "react";

// function AddingTopics() {
//   return (
//     <div className="container">
//     <h2> Add Topic </h2>
//       <form>
//         <div>
//           <label htmlfor="topicname">Topic Name:</label>
//           <input
//             type="text"
//             id="topicName"
//             name="topicName"
//           />
//         </div>
//         <div>
//           <label htmlfor="keywords"> Keywords: </label>
//           <input
//             type="text"
//             id="keywords"
//             name="keywords"
//           />
//         </div>
//         <button type="submit">save</button>
//       </form>
//     </div>
//   );
// }

// export default AddingTopics;




import React from "react";
import '../Common.css'

function AddingTopics() {

  const handleSubmit = (e) => {
      e.preventDefault();

      const topicName = e.target.topicName.value
      const keywords = e.target.keywords.value;

     
  };


  return (
    <div className="container">
    <h2 className="text-center mt-5 mb-4 fw-500 fs-4"> Add Topic </h2>
      <form onSubmit={handleSubmit} className="form-control d-flex flex-column">
        <div className="d-grid">
          <label htmlFor="topicname" className="fw-500 fs-20 py-6 px-6">Topic Name:</label>
          <input
            type="text"
            id="topicName"
            name="topicName"
            className="mx-6 my-6"
          />
        </div>
        <div className="d-grid">
          <label htmlFor="keywords" className="fw-500 fs-20 py-6 px-6"> Keywords: </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            className="mx-6 my-6"
          />
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default AddingTopics;
