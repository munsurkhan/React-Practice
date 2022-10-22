import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const HomeBanner = () => {
    //useEffect
    let [todo,SetTodo] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>{
                SetTodo(res.data)
            })
            .catch((err)=>{})
    })

    return (
        <div>
            {JSON.stringify(todo)}
        </div>
    );
};

export default HomeBanner;