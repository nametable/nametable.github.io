import React, {useState, useEffect} from 'react';
import sha512 from 'crypto-js/sha512';
import './LockContainer.css';

function LockContainer(props) {

    const containerStyle = {
        width: props.width,
        height: props.height
    };
    let overlayStyleTop = () => {
        return (
            {
                // width: isLocked() ? props.width : 0,
                // height: isLocked() ? props.height / 2 : 0,
                backgroundColor: props.color,
                width: props.width,
                height: props.height / 2,
                top: isLocked() ? 0 : 0- props.height / 2,
            }
        )
    }
    let overlayStyleBottom = () => {
        return (
            {
                // width: isLocked() ? props.width : 0,
                // height: isLocked() ? props.height / 2 : 0,
                backgroundColor: props.color,
                width: props.width,
                height: props.height / 2,
                top: isLocked() ? props.height / 2 : props.height,
            }
        )
    }

    const [inputText, setInputText] = useState("");
    let isLocked = () => {
        return (inputText != props.password);
    }

    function handleInputChange(evt){
        // console.log(evt.target.value);
        setInputText(evt.target.value);
    }

    return (
        <div id="lock-container-main" style={containerStyle}>
            <div id="lock-container-content">
                {props.children}
            </div>
            <div id="lock-div-1" style={overlayStyleTop()} className="lock-overlay">
                <input onChange={handleInputChange} id="lock-password-input" type="text"></input>
                <p style={{width: "100%", wordBreak: "break-all", fontSize: "10pt"}}>Current text is "{inputText}". Locked: {isLocked().toString()}. sha512: {sha512(inputText).toString()}</p>
            </div>
            <div id="lock-div-2" style={overlayStyleBottom()} className="lock-overlay"></div>
        </div>
    );
}

export default LockContainer;