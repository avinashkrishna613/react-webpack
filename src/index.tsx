import React from 'react';
import ReactDOM from 'react-dom';
function Index(){
    return (
        <div>
            Hello world
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Index />, rootElement);
