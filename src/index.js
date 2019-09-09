global.jQuery = require("jquery");
require("bootstrap");
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/button";
import Timer from "./components/timer";
import TimerModal from "./components/modal";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.secondsDefault = 25 * 60;
        this.interval = null;
        this.state = {
            running: false,
            mode: "PLAY",
            allseconds: this.secondsDefault,
            minute: this.allseconds / 60,
            seconde: this.allseconds % 60,
            mins: 0,
        };
        this.plus = this.plusFunction.bind(this); //rendre la fonction plusFunction accecible
        this.moins = this.moinsFunction.bind(this);
        this.start = this.startFunction.bind(this);
        this.reset = this.resetFunction.bind(this);
        this.stop = this.stopFunction.bind(this);
    }

    plusFunction() {
        // this.secondsDefault++;
        this.setState(prevState => ({
            allseconds: prevState.allseconds + 60,
        }));
    }

    moinsFunction() {
        // this.secondsDefault--;
        this.setState(prevState => ({
            allseconds: prevState.allseconds - 60,
        }));
        if (this.state.allseconds === 0) {
            this.setState(() => ({
                allseconds: 0,
            }));
        }
    }

    decompteFunction() {
        this.setState(prevState => ({
            allseconds: --prevState.allseconds,
            mins: prevState.seconde % 60,
        }));
        if (this.state.allseconds === 0) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    stopFunction() {
        clearInterval(this.interval);
    }
    startFunction() {
        if (this.state.running === false) {
            this.setState(() => ({
                mode: "STOP",
                running: true,
            }));
            this.interval = setInterval(() => {
                this.decompteFunction();
            }, 1000);
        } else {
            this.setState(() => ({
                mode: "PLAY",
                running: false,
            }));
            this.stopFunction(); // this.stopFunction();
        }
        if (this.state.allseconds === 0) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    resetFunction() {
        this.setState({allseconds: this.secondsDefault});
    }
    render() {
        return (
            <div>
                <Timer
                    minute={Math.trunc(this.state.allseconds / 60)}
                    seconde={this.state.allseconds % 60}
                />
                <Button value={"+"} handleFunct={this.plus} />
                <Button value={"-"} handleFunct={this.moins} />
                <Button value={this.state.mode} handleFunct={this.start} />
                <Button value={"Reset"} handleFunct={this.reset} />
                {/* <Button value={"STOP"} handleFunct={this.stop} /> */}
                <TimerModal />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
