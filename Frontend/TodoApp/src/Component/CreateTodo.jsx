import axios from "axios"
import { useState } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    function handleTitle(event){
        setTitle(event.target.value);
    }
    function handleDescription(event){
        setDescription(event.target.value);
    }
    return <div>
        <input type="text" placeholder="Title" onChange={handleTitle}/> <br /><br />
        <input type="text" placeholder="Description" onChange={handleDescription} /><br /><br />
        <button
        onClick={()=>
            axios.post("http://localhost:3000/todo",{
                title: title,
                description: description
            }).then(alert('Todo Added Successfully'))
        }
        >Add Todo</button><br />
    </div>
}