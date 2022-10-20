import React, {useRef, useState} from 'react';

const HomeBanner = (props) => {
    //useState
    //useRef
    let UserName = useRef()
    let Password = useRef()

    const submitForm=()=>{
        let a = UserName.current.value;
        let b = Password.current.value;
        alert(a)
        alert(b)
    }

    return (
        <div>
            <input ref={UserName} placeholder={"User Name"} type="text"/>
            <input ref={Password} placeholder={"User Password"} type="text"/>
            <button onClick={submitForm}>Submit</button>
        </div>
    );
};

export default HomeBanner;