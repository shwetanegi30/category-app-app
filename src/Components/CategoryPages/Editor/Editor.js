import React, { useState } from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 

function Editor() {
  
    const { quill, quillRef } = useQuill();
    const [value,setValue]=useState();

    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            console.log(quillRef.current.firstChild.innerHTML);
            setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);

      console.log(value,"this is quill editor")
    return(
        <div className='container'>
            <div style={{ height: 400 }}>
                <div ref={quillRef} />
            </div>
        </div>
    );
}


export default Editor





