import React, {Component} from 'react';
import HomeBanner from "../components/home/HomeBanner";

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomeBanner title={{name:"Munsur", Age: "27"}}/>
            </div>
        );
    }
}

export default HomePage;