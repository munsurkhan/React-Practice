import React from "react";
import axios from "axios";


const App = () =>{
    //post Request
    function GetList() {
        let URL = "......."
        axios.get(URL).then((res)=>{
            if (res.status===200){
                let data = res.data;
            }else{
                //Something Went Wrong
            }

        }).catch((err)=>{
            console.log(err);
        })
    }




    return(
        <div>

        </div>
    );
};
export default App;