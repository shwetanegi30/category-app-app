import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { categoryData } from "../Data";

const Editor = (props) => {
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState();

  const {state: {articleData}} = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (quill) {
      
        if (articleData && articleData.data) {
            const value = articleData.data
            const delta = quill.clipboard.convert(value)

            quill.setContents(delta, 'silent')
        }
        quill.on("text-change", () => {
            setValue(quillRef.current.firstChild.innerHTML);
        });
    }
  }, [quill]);

  const handleSave = () => {
    let idx = categoryData.findIndex(category => category.id == articleData.id)
    categoryData[idx].data = value;
    navigate('/')
  }
  return (
    <div>
      <div className="container">
        <div style={{ height: 400 }}>
          <div ref={quillRef} />
        </div>
      </div>
      <div>
        <button type="submit" className="text-center" onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  );
}

export default Editor;
