import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/button";
import Timer from "./components/timer";

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
        this.setState(() => ({
            allseconds: this.state.allseconds + 60,
        }));
        console.log(this.state.minute);
    }

    moinsFunction() {
        // this.secondsDefault--;
        this.setState(() => ({
            allseconds: this.state.allseconds - 60,
        }));
        if (this.state.allseconds === 0) {
            this.setState(() => ({
                allseconds: 0,
            }));
        }
        console.log(this.state.minute);
    }

    decompteFunction() {
        this.setState(prevState => ({
            allseconds: --prevState.allseconds,
            mins: this.state.seconde % 60,
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
            console.log("MODE PLAY");
        } else {
            this.setState(() => ({
                mode: "PLAY",
                running: false,
            }));
            this.stopFunction();
            console.log("MODE STOP"); // this.stopFunction();
        }
        if (this.state.allseconds === 0) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    resetFunction() {
        this.setState({allseconds: this.secondsDefault});
        console.log(this.state.minute);
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
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
