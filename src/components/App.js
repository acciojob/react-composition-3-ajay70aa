
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div className="App">
        <h2 className='tooltip'>
          <Tooltip  text="This is a tooltip for the first element">
            This is a tooltip
          </Tooltip>
        </h2>
          <p className='tooltip'>
            <Tooltip text="This is a tooltip for the second element">
              This is another tooltip
            </Tooltip>
          </p>
    </div>

  )
}

export default App
