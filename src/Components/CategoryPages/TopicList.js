import React from "react";
import { Link } from "react-router-dom";

function TopicList({ item }) {
    
  return (
    <div className="">
      
        <div className="d-flex align-items-center justify-content-between list">
          <div key={item.id}>
            <h3 className="fs-5 ps-4 py-3">{item.topic}</h3>
            <div className="ps-4 pb-3">
              {item.keywords.map((keyword, index) => (
                <button
                  key={index}
                  className={`me-2 keyword-button ${keyword.color}`}
                >
                  {keyword.label}
                </button>
              ))}
            </div>
          </div>

          <Link to="/editor">
            <div className="button">
              <button className="btn-add me-3">
                {item.editor} <i class="fas fa-angle-right"></i>
              </button>
            </div>
          </Link>
          {/* <div className="">
          <i id="delete-icon" className="fas fa-solid fa-trash me-3"></i>
          </div> */}
        </div>
      
    </div>
  );
}

export default TopicList;
