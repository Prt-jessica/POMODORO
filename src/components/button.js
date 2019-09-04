import React from "react";

function Button(prop) {
    return (
        <button type={"button"} onClick={prop.handleFunct}>
            {prop.value}
        </button>
    );
}

export default Button;
