import React, {useState} from "react";

function CreateArea(props) {
  let [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    setInputNote(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
  }

  function handleClick(event){
    props.addFunc(inputNote);
    setInputNote({title:"", content:""});
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={inputNote.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputNote.content} />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
