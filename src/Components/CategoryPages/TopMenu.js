// import { useState, useEffect } from "react";
// import { categoryData } from "./Data";
// import { topNav } from "./Data";
// import "./Common.css";
// import TopicList from "./TopicList";

// function TopMenu() {
//   const [item, setItem] = useState({ name: "all" });
//   const [topics, setTopics] = useState([]);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     if (item.name === "all") {
//       setTopics(categoryData);
//     } else {
//       const newTopics = categoryData.filter((topic) => {
//         return topic.category === item.name;
//       });
//       setTopics(newTopics);
//     }
//   }, [item]);

//   const handleClick = (e, index) => {
//     setItem({ name: e.target.textContent });
//     setActive(index);
//   };

//   return (
//     <div className="container">

//         <div className="d-flex align-items-center gap-3">
//           {topNav.map((item, index) => {
//             return (
//               <span
//                 onClick={(e) => {
//                   handleClick(e, index);
//                 }}
//                 className={`ms-5 fs-5 fw-500 ${active === index ? "active-work" : ""} work-item `}
//                 key={index}
//               >
//                 {item.name}
//               </span>
//             );
//           })}
//           <div className="left-side">
//             <button type="button" className="btn-add">
//               Add Topic <i className="fas fa-angle-right"></i>
//             </button>
//           </div>
//         </div>
//         <div className="ps-4 h-35 w-92 mt-4 pt-2 head">Recommended Topics</div>
//         <div className="">
//           {topics.map((item) => {
//             return <TopicList item={item} key={item.id} />;
//           })}
//         </div>

//     </div>
//   );
// }

// export default TopMenu;

import { useState, useEffect } from "react";
import { categoryData } from "./Data";
import { topNav } from "./Data";
import "./Common.css";
import TopicList from "./TopicList";
import Modal from "react-modal";

function TopMenu() {
  const [item, setItem] = useState({ name: "all" });
  const [topics, setTopics] = useState([]);
  const [active, setActive] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topicValue, setTopicValue] = useState("");
  const [keywordsValue, setKeywordsValue] = useState("");

  useEffect(() => {
    if (item.name === "all") {
      setTopics(categoryData);
    } else {
      const newTopics = categoryData.filter((topic) => {
        return topic.category === item.name;
      });
      setTopics(newTopics);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTopicChange = (e) => {
    setTopicValue(e.target.value);
  };

  const handleKeywordsChange = (e) => {
    setKeywordsValue(e.target.value);
  };

  const saveTopic = ({ item }) => {
    // const newTopic = {
    //   id: Date.now(), // Generate a unique ID
    //   category: item.category, // Set the category to "custom" for the custom category
    //   topic: topicValue,
    //   keywords: keywordsValue,
    // };

    // // Add the new topic to the topics state
    // setTopics((prevTopics) => [...prevTopics, newTopic]);

    // // Close the modal and reset the input values
    closeModal();
    setTopicValue("");
    setKeywordsValue("");
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-3">
        {topNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`ms-5 fs-5 fw-500 ${
                active === index ? "active-work" : ""
              } work-item `}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
        <div className="left-side">
          <button type="button" className="btn-add" onClick={openModal}>
            Add Topic <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="ps-4 h-35 w-92 mt-4 pt-2 head">Recommended Topics</div>
      <div className="">
        {topics.map((item) => {
          return <TopicList item={item} key={item.id} />;
        })}
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div className="container">
          <h2 className="text-center mt-5 mb-4 fw-500 fs-4">Add Topic</h2>
          <div className="d-flex flex-column">
          <div className="d-grid">
            <label htmlFor="topicname" className="fw-500 fs-20 py-6 px-6 topic-name">Topic:</label>
            <input
             type="text"
            id="topicName"
            name="topicName"
            className="mx-6 my-6"
            />
          </div>
          <div className="d-grid">
            <label className="fw-500 fs-20 py-6 px-6 topic-name">Keywords:</label>
            <input
              type="text"
              value={keywordsValue}
              onChange={handleKeywordsChange}
              className="mx-6 my-6"
            />
          </div>
    </div>
          <button type="button" onClick={saveTopic} className="text-center-btn">
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default TopMenu;
