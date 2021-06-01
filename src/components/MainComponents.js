import React, { Component } from 'react'
import GoogleFontLoader from "react-google-font-loader";
import HomeComponent from '../pages/HomeComponent'
import Navbar from './Navbar'
import Overlay from './Overlay'
import Sidebar from './Sidebar'
import 'adminbsb-materialdesign/css/themes/all-themes.css'

class MainComponents extends Component {

    state = {
        bodyClass: 'theme-red ls-closed',
        displayOverlay: "none",
        width: window.screen.width,
    };
    onBarClick = () => {
        if (this.state.bodyClass == "theme-red ls-closed overlay-open") {
            this.setState({ bodyClass: "theme-red ls-closed" });
            this.setState({ displayOverlay: "none" });
        } else if (this.state.bodyClass == "theme-red ls-closed") {
            this.setState({ bodyClass: "theme-red ls-closed overlay-open" });
            this.setState({ displayOverlay: "block" });
        }
    }

    onscreensize = () => {
        this.setState({
            width: window.screen.width
        })
        console.log(window.screen.width);
    }

    componentWillMount() {
        window.addEventListener('resize', this.onscreensize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onscreensize);
    }

    componentDidMount() {
        var inputall = document.querySelectorAll('input');
        inputall.forEach((input) => {
            input.addEventListener('focus', function() {
                this.parentNode.className = 'form-inline focused';
            });
        });

        inputall.forEach((input) => {
            input.addEventListener('blur', function() {
                this.parentNode.className = 'form-inline';
            });
        });
    }

    render() {

        if (this.state.width > 1150) {
            document.getElementById('root').className = 'theme-red';
        } else {
            document.getElementById('root').className = this.state.bodyClass;
        }
        return (
            <React.Fragment>
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Roboto',
                            weights: [400, 700],
                        }
                    ]}
                    subsets={["latin", "cyrillic-ext"]}
                />
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Material+Icons'
                        }
                    ]}
                />
                <Overlay display={this.state.displayOverlay} />
                <Navbar onBarClick={this.onBarClick} />
                <Sidebar activepage={this.props.activepage} />
                <>{this.props.page}</> {/* show whichever component is passed in the index.js router */}
            </React.Fragment>
        )
    }
}

export default MainComponents
