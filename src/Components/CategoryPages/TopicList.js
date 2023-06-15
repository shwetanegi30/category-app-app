import React from "react";
import { Link } from "react-router-dom";

function TopicList({ item, onDelete }) {

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className="">
      <div className="box"></div>
      <div className="list">
        <div className="d-flex align-items-center justify-content-between">
          <div key={item.id}>
            <h3 className="fs-5 ps-4 py-3">{item.topic}</h3>
            <div className="ps-4 pb-3 m-3">
              {item?.keywords?.map((keyword, index) => {
                let colorKey = ["warning", "success", "danger"][index % 3];
                return (
                  <span
                    key={index}
                    className={`me-2 keyword keyword-button badge text-bg-${colorKey}`}
                  >
                    {keyword.label}
                  </span>
                );
              })}
            </div>
          </div>

          <i className="fas fa-solid fa-trash trash-icon fs-5 me-4 ms-auto text-danger" onClick={handleDelete}></i>

          <Link to={"/editor"} state={{ articleData: item }}>
            <div className="button">
              <button className="btn-add me-3">
                Write <i class="fas fa-angle-right"></i>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopicList;
