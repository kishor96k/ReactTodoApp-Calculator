import { useState } from 'react';
import './App.css';
// import '../src/ToDoOne/ToDoOne.css';
import ToDoInput from './ToDoOne/OneToDoInput';
import ToList from './ToDoOne/OneToList';
import CalcOne from './Calculator/CalcOne'
function App() {

  const [todolist, setToDoList] = useState([]);

  const addList = (inptxt) => {
    if(inptxt!==''){
      setToDoList([...todolist, inptxt])
    }
  }

  const deleteListItems = (key) => {
    let newList = [...todolist];
    newList.splice(key, 1);
    setToDoList([...newList]);
  }

  return (
    <div className="App">
      {/* todo one project starts */}
      {/* <div className='main-container'>
        <div className='center-container'>
          <ToDoInput addList={addList}></ToDoInput>
          <h2 className='app-heading'>ToDoList APP </h2>
          <hr></hr>
          {todolist.map((listItems, i) => {
            return (
              <ToList index={i} key={i} deleteItem={deleteListItems} items={listItems}></ToList>
            )
          })}
        </div>
      </div> */}
      {/* todo one project ends */}
      <CalcOne></CalcOne>
    </div>
  );

}

export default App;
