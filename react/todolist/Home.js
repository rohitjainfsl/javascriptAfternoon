import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "./todo.css";

function Home() {
  const [input, setInputValue] = useState("");
  const [listitem, Setlistitem] = useState([]);
  const [editing, setEditing] = useState(false);
  const [markDone, setDone] = useState([]);

  function handler(e) {
    setInputValue(e.target.value);
    // console.log(input)
  }
  function handlesubmit(e) {
    e.preventDefault();
    if (input.length > 0 && editing === false) {
      Setlistitem([...listitem, input]);
      setInputValue("");
    } else {
      listitem[editing] = input;
      Setlistitem(listitem);
      setInputValue("");
      setEditing(false);
    }
  }

  function handleDelete(e, item, index) {
    e.preventDefault();
    Setlistitem(
      listitem.filter((element, ind) => {
        return ind !== index;
      })
    );
  }

  function handleEdit(e, item, index) {
    e.preventDefault();
    setInputValue(item);
    setEditing(index);
  }
  function handleDone(e, item, index) {
    e.preventDefault();
    setDone([...markDone, index]);
  }

  // console.log(listitem);

  //In react, events are implicitly passed to event handlers.

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={input}
          onChange={handler}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {listitem.map((element, index) => {
          return (
            <li
              key={index}
              className={markDone.includes(index) ? "completed" : ""}
            >
              {element}{" "}
              <a href="" onClick={(e) => handleDelete(e, element, index)}>
                <DeleteIcon />
              </a>
              <a href="" onClick={(e) => handleEdit(e, element, index)}>
                <EditIcon />
              </a>
              <a href="" onClick={(e) => handleDone(e, element, index)}>
                <CheckBoxIcon />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
