import React from "react";

function Timer(prop) {
    return (
        <div>
            {prop.minute}
            {":"}
            {prop.seconde}
        </div>
    );
}

export default Timer;
