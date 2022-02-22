import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  let [notesList, setNotesList] = useState([]);

  function addNote(noteObj){
    setNotesList(prevList => {
       return [...prevList, noteObj];
    });
  }

  function deleteNote(noteID){
    setNotesList(prevList => {
      return prevList.filter((note, index) => {
        return index !== noteID;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addFunc={addNote}  />
      {notesList.map((note, index) => {
        return <Note
        key = {index}
        id = {index}
        title = {note.title}
        content= {note.content}
        deleteFunc = {deleteNote}
        />;
      })}
      <Footer />
    </div>
  );
}

export default App;
