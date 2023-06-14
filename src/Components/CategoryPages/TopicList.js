import React from "react";
import { Link } from "react-router-dom";

function TopicList({ item }) {
    return (
        <div className="">

            <div className="box">

            </div>
            <div className="list">
                <div className="d-flex align-items-center justify-content-between">
                    <div key={item.id}>
                        <h3 className="fs-5 ps-4 py-3">{item.topic}</h3>
                        <div className="ps-4 pb-3 m-3">
                            {item?.keywords?.map((keyword, index) => {
                                let colorKey = ['success', 'danger', 'warning'][index % 3]
                                return (
                                    <span
                                        key={index}
                                        className={`me-2 keyword-button badge rounded-pill text-bg-${colorKey}`}
                                    >
                                        {keyword.label}
                                    </span>
                                )
                            }
                            )}
                        </div>
                    </div>

                    <Link to={'/editor'}
                        state={{ articleData: item }}
                    >
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
