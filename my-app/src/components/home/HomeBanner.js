import React from 'react';

const HomeBanner = (props) => {
    return (
        <div>
            <h1>{props.title.name}</h1>
            <h1>{props.title.Age}</h1>
        </div>
    );
};

export default HomeBanner;