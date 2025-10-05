import "./App.css";
import List from "./List.jsx";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState, useRef } from "react";

function App() {

  const myRef = useRef();
  
  const [ initialVal, setValue ] = useState([]);
  const [ initialEditVal, setEditVal ] = useState(null);
  const [ initialCompleteVal, setCompleteVal ] = useState(null);
  const [ initialDeleteVal, setDeleteVal ] = useState(null);

  function add_fun() {
    setValue([...initialVal, myRef.current.value]);
    myRef.current.value = "";
  }

  // function edit_fun(val) {
  //   setEditVal(initialVal[val]);
  //   console.log(initialVal[val]);
  // }

  // function complete_fun(val) {
  //   setCompleteVal(val);
  // }

  function delete_fun(val) {
    const delete_element = initialVal.filter((item) => item != initialVal[val]);
    setValue(delete_element);
  }

  function changeValue_fun(value) {
    initialVal[initialEditVal] = value;
  }

  return (
    <>
      <div className="parent-div">
        <div className="child-div">
          <div className="child-1">
            To Do List
          </div>

          <div className="child-2">
            <input ref={myRef} className="child-2-input" type="text" placeholder="Enter your Todo" />
            <div onClick={add_fun} className="child-2-add-button">
              <IoAddCircleOutline/>
            </div>
          </div>

          <div className="child-3">
            {
              initialVal != "" ? <List initialVal={initialVal} delete_fun={delete_fun} initialCompleteVal={initialCompleteVal} />: null
            }            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;