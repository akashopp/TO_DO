import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'


function App() {
  
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const changeTodo = (e) => {
    settodo(e.target.value)
  }
   
  const handleAdd = (e) => {
    console.log(todo)
    settodos([...todos, {todo, isCompleted : 'False'}]);
    settodo("")
    console.log(todos)
  }

  // useEffect(() => {
  //   alert("Todos has been updated")
  //   console.log(todos)
  // }, [todos])
  

  return (
    <>
      <NavBar />

      <div className="container bg-purple-100 w-screen h-screen mx-auto my-5 p-5 rounded-lg">

        <div className="text-xl font-bold my-3 mx-5">Add a Todo Task</div>

        <div className="flex justify-evenly">

          <input type="text" onChange={changeTodo} className='rounded-lg' value={todo}/>

          <button onClick={handleAdd} className='bg-purple-500 text-white p-2 w-20 rounded-xl font-bold hover:bg-purple-700'>Add</button>

        </div>

        {todos.map(items=>{
          return (
            <div key={items.todo} className="below flex gap-3 m-5 p-5">

              <div className="content bg-white rounded-lg border-2 border-black p-3" className={items.isCompleted ? "line-through" :""}> {items.todo}</div>

              <button className='bg-purple-500 text-white p-3 m-5 w-28 rounded-xl font-bold hover:bg-purple-700'>Edit</button>

              <button className='bg-purple-500 text-white p-3 m-5 w-28 rounded-xl font-bold hover:bg-purple-700'>Delete</button>
            </div>
          )
        })}

      </div>


    </>
  )
}

export default App
