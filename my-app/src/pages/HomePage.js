import React, {Component} from 'react';
import HomeBanner from "../components/home/HomeBanner";

class HomePage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <HomeBanner title="This is title" subtitle="This is subtitle"/>
            </div>
        );


    }
}

export default HomePage;