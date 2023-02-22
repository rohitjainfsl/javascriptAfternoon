import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Home() {
  const [input, setInputValue] = useState("");
  const [listitem, Setlistitem] = useState([]);
  function handler(e) {
    setInputValue(e.target.value);
    // console.log(input)
  }
  function handlesubmit(e) {
    e.preventDefault();
    // console.log(input);
    Setlistitem([...listitem, input]);
    setInputValue("");
  }

  function handleDelete(item) {
    Setlistitem(
      listitem.filter((li) => {
        return li !== item;
      })
    );
  }

  console.log(listitem);

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
        {listitem.map((element, rajaram) => {
          return (
            <li key={rajaram}>
              {element} <DeleteIcon onClick={() => handleDelete(element)} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
