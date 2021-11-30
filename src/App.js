import Header from "./components/Header";
import NotesList from "./components/NotesList";
import {useState ,useEffect} from 'react';
import {nanoid} from 'nanoid';
import Search from "./components/Search";

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my First Note..",
      date: '25/05/2001'
    },
    {
      id: nanoid(),
      text: "This is my Second Note..",
      date: '30/05/2001'
    },
    {
      id: nanoid(),
      text: "This is my Third Note..",
      date: '12/05/2001'
    },
    {
      id: nanoid(),
      text: "This is my Fourth Note..",
      date: '12/05/1998'
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, [])
  
  useEffect(() => {
    
    localStorage.setItem(
      'react-notes-app-data', JSON.stringify(notes)
    )
  }, [notes]);

  const addNote = (text)=>{
    const date = new Date();
    const newNote = {
      
      id : nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id)=>{
    const newNotes = notes.filter( (note)=> note.id != id );
    setNotes(newNotes);
  }
  
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="App">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note)=>
        note.text.toLocaleLowerCase().includes(searchText)
        )} 
        handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
    
  );
}

export default App;
