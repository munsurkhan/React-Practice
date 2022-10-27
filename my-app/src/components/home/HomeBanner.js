import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const HomeBanner = () => {
//conditional Rendering
    const [todo,SetTodo] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>{
                SetTodo(res.data)
            })
            .catch((err)=>{

            })
    },[])
    //Functions
    const DeleteEvent=(id)=>{
            let DeleteID = "Delete ID = "+id
        alert(DeleteID);
            //API Call Delete
    }
    const EditEvent=(id)=>{
        let EditID = "Edit ID = "+id
        alert(EditID);
        //API Call Edit
    }
    const DetailsEvent=(id)=>{
        let DetailID = "Details ID = "+id
        alert(DetailID);
        //API Call Details
    }


    const MyList = todo.map((list,i)=>{
        return (
            <tr>
                <td>{list['userId']}</td>
                <td>{list['id']}</td>
                <td>{list['title']}</td>
                <td>
                    <button onClick={DeleteEvent.bind(this,list['id'])} className="btn btn-danger btn-sm">Delete</button>
                    <button onClick={EditEvent.bind(this,list['id'])} className="btn btn-info btn-sm">Edit</button>
                    <button onClick={DetailsEvent.bind(this,list['id'])} className="btn btn-primary btn-sm">Details</button>
                </td>
                <td></td>
            </tr>
        )
    })

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {MyList}
                </tbody>
            </table>
        </div>
    );



};

export default HomeBanner;