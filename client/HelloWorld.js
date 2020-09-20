import React from 'react'
import { hot } from 'react-hot-loader'

const HelloWorld = () => {
    return (
        <div>
            <h1>nametable's website.<br/>The time is now {Date.now().toString()} according to your browser.</h1>
        </div>
    )
}

export default HelloWorld;