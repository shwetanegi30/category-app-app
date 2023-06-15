import { useState, useEffect } from "react";
import { CATEGORIES, categoryData } from "./Data";
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
    setTopics(categoryData);
  }, []);

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

  const saveTopic = () => {
    let keywords = keywordsValue.split(",").map((each) => ({ label: each }));
    const newTopic = {
      id: Date.now(), // Generate a unique ID
      category: CATEGORIES.CUSTOM.name, // Set the category to "custom" for the custom category
      topic: topicValue,
      keywords: keywords,
    };

    categoryData.push(newTopic);

    // Close the modal and reset the input values

    closeModal();
    setTopicValue("");
    setKeywordsValue("");
  };

  
  const deleteTopic = (id) => {
    // Filter out the topic with the specified id
    const updatedTopics = topics.filter((topic) => topic.id !== id);
    setTopics(updatedTopics);
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-3 mt-3">
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
        <div className="right-side">
          <button type="button" className="btn-add" onClick={openModal}>
            Add Topic <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="ps-4 h-35 w-92 mt-4 pt-2 head">Recommended Topics</div>
      <div className="">
        {topics.map((item) => {
          return <TopicList item={item} key={item.id} onDelete={deleteTopic} />;   
        })}
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div className="container">
          <h2 className="text-center mt-5 mb-4 fw-500 fs-4">Add Topic</h2>
          <div className="d-flex flex-column">
            <div className="d-grid">
              <label
                htmlFor="topicname"
                className="fw-500 fs-20 py-6 px-6 topic-name"
              >
                Topic:
              </label>
              <input
                type="text"
                value={topicValue}
                onChange={(e) => {
                  setTopicValue(e.target.value);
                }}
                className="input"
              />
            </div>
            <div className="d-grid">
              <label className="fw-500 fs-20 py-6 px-6 topic-name">
                Keywords:
              </label>
              <input
                type="text"
                value={keywordsValue}
                onChange={handleKeywordsChange}
                className="input"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2">
          <button
            type="button"
            onClick={saveTopic}
            className="btn-add text-center px-2 py-1"
          >
            Save
          </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TopMenu;
