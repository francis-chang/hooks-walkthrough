import React, { useState } from "react";
const State = () => {
    const [count, setCount] = useState(0);
    const [values, setValues] = useState({ email: "", password: "" });
    return (
        <>
            <div>{count}</div>
            <br />
            <button onClick={() => setCount(currentState => currentState + 1)}>
                +
            </button>
            <br />
            <input name="email" value={values.email} onChange={setValues} />
            <input
                name="password"
                type="password"
                value={values.password}
                onChange={setValues}
            />
        </>
    );
};

export default State;
