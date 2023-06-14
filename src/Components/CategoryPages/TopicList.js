import React from "react";
import categoryData from "./Data";

import { Link } from "react-router-dom";

function TopicList() {
  const keywordColors = {
    "online presence": "btn btn-outline-warning",
    "small businesses": "btn btn-outline-success",
    "digital marketing": "btn btn-outline-danger",
    branding: "btn btn-outline-warning",
    "affordable branding": "btn btn-outline-warning",
    startups: "btn btn-outline-success",
    entrepreneurs: "btn btn-outline-danger",
    "logo design": "btn btn-outline-warning",
    "website design": "btn btn-outline-success",
    "fast turnaround": "btn btn-outline-warning",
    "social media management": "btn btn-outline-success",
    "comprehensive branding": "btn btn-outline-warning",
  };

  return (
    <div className="container">
      <div className="box">
        <div className="ps-4 h-35 w-92 mt-4 pt-2 head">Recommended Topics</div>
      </div>
      <div className="list">
        {categoryData.map((list, index) => (
          <div className="topic ps-4 pt-4 mb-2 d-flex align-items-center justify-content-between">
            <div key={list.id}>
              <h3 className="fs-5">{list.topic}</h3>
              <div className="pt-2 pb-4">
                {list.keywords.map((keyword, index) => (
                  <button
                    key={index}
                    className="me-2 keyword-button"
                    style={{
                      backgroundColor: keywordColors[keyword.toLowerCase()],
                    }}
                  >
                    {keyword}
                  </button>
                ))}
                {/* <button type="button" class="btn btn-outline-primary">{list.keywords[0]}</button>
<button type="button" class="btn btn-outline-secondary">{list.keywords[1]}</button>
<button type="button" class="btn btn-outline-success">{list.keywords[2]}</button>
<button type="button" class="btn btn-outline-danger">{list.keywords[3]}</button>
<button type="button" class="btn btn-outline-danger">{list.keywords[4]}</button> */}
              </div>
            </div>

            <Link to="/editor">
              <div className="button">
                <button className="btn-add me-3"> {list.editor} </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicList;
