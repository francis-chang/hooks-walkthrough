import React, { useLayoutEffect, useRef, useState } from "react";
import { Hello } from "./Hello";

export const Ref = () => {
    const inputRef = useRef();
    const [showHello, setShowHello] = useState(true);
    const [text, setText] = useState("");

    useLayoutEffect(() => {
        console.log(inputRef.current.getBoundingClientRect());
    });

    return (
        <div>
            {showHello && <Hello />}
            <input value={text} onChange={e => setText(e.target.value)} />
            <input ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}> click </button>
        </div>
    );
};
