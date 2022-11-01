import React from "react";
import axios from "axios";
import cogoToast from "cogo-toast";


const App = () =>{
    const ErrorToast = () => {
      cogoToast.error("This is Error Message");
    }

    const SuccessToast = () => {
        cogoToast.success("This is Success Message");
    }




    return(
        <div>
            <button onClick={ErrorToast}>Error</button>
            <button onClick={SuccessToast}>Success</button>
        </div>
    );
};
export default App;