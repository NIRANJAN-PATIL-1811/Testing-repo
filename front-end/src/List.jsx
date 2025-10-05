import "./List.css";
// import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
// import { IoCheckmarkDone } from "react-icons/io5";

function List({ initialVal, edit_fun, complete_fun, delete_fun, initialCompleteVal }) {


  return (
    <>
      {
        initialVal.map((item, index) => 
          <div key={index} className="list-parent-div">
            <div className="list-child-1">
              {item}
            </div>
            
            <div onClick={() => delete_fun(index)} className="list-child-4">
              <MdDeleteOutline/>
            </div>
          </div>
        )
      }
    </>
  );
}

export default List;