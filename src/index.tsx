import React from 'react';
import ReactDOM from 'react-dom';
const Index = () => { 
    return (
        <div>
            Hello world hello
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Index />, rootElement);
export default Index;
