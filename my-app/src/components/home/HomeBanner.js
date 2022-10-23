import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const HomeBanner = () => {

    const [color,setColor] = useState("green")

    if (color==="blue"){
        return (
            <div>
                <h1 style={{color:'blue'}}>This is blue Color</h1>
            </div>
        );
    }
    else if (color==="red"){
        return (
            <div>
                <h1 style={{color:'red'}}>This is Red Color</h1>
            </div>
        );
    }
    else if(color==="green"){
        return (
            <div>
                <h1 style={{color:'green'}}>This is Green Color</h1>
            </div>
        );
    }


};

export default HomeBanner;