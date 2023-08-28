import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';
import Item from './components/Item';
import { useState } from "react";

function App() {

  const [tasks,setTasks]=useState([
    {id:1,title:"แก้บั้คโปรแกรม"},
    {id:2,title:"คู่มือการใช้งานโปรแกรม"}
  ])

  const [title,setTitle] = useState("");

  const [editId,setEditId] = useState(null);

  function editTask(id){
    setEditId(id)
  }

  function deleteTask (id){
    const result = tasks.filter(item=>item.id !==id)
    setTasks(result)
  }

  function addTask (e){
    e.preventDefault();
    if(!title){
      alert("กรุณาป้อนข้อมูลด้วยค่ะ")
    }else{
      const newTask={
        id:Math.floor(Math.random()*1000),
        title:title
      }
      setTasks([...tasks,newTask])
      setTitle("")
    }
  }



  
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <AddForm title={title} setTitle={setTitle} addTask={addTask}/>
        <section>
          {
            tasks.map((data)=>
            <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
            )
          }
        </section>
      </div>      
    </div>
  );
}

export default App;
