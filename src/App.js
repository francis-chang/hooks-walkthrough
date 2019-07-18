import React from "react";
import { Ref } from "./hooks/Ref";
import State from "./hooks/State";
function App() {
    return (
        <div style={{ padding: "1rem" }}>
            <Ref />
            <State />
        </div>
    );
}

export default App;
