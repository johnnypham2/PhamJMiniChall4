import axios from "axios"
import { useEffect, useState } from "react"

interface Post {
    id:number
    title:string
    completed: boolean
}

const List = () => {

    const [todos, setTodos] = useState<Post[]>([]);
    const [error, setError] = useState("");

const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => setTodos(res.data))
    .catch(error => setError(error));
}

useEffect(() => {
 fetchData();
}, [])


  return (
    <>
    <h1>PostList with Axios</h1>
      {todos.map(todo => 
        <li>{todo.title}</li>
      )}
    </>
  )
}

export default List
