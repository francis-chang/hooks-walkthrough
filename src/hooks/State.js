import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Hello } from "./Effect";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";
const State = () => {
    const [count, setCount] = useState(() =>
        JSON.parse(localStorage.getItem("count"))
    );
    const [values, setValues] = useForm({
        email: "",
        password: "",
        firstName: ""
    });
    const [showHello, setShowHello] = useState(false);

    const { data, loading } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${count}`
    );

    const divRef = useRef();
    const [rect, setRect] = useState({});

    useEffect(() => {
        const onMouseMove = e => {
            console.log(e);
        };
        // window.addEventListener("mousemove", onMouseMove);
        // cleanup function
        return () => {
            // window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    useLayoutEffect(() => {
        setRect(divRef.current.getBoundingClientRect());
    }, [data]);

    //multiple useEffects
    useEffect(() => {
        console.log("hi");
    }, []);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    return (
        <>
            <div style={{ display: "flex" }}>
                <div ref={divRef}>{loading ? "loading..." : data.title}</div>
            </div>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            {showHello && <Hello />}
            <br />
            <button onClick={() => setShowHello(current => !current)}>
                Toggle Hello{" "}
            </button>
            <div>{count}</div>
            <br />
            <button onClick={() => setCount(currentState => currentState + 1)}>
                +
            </button>
            <br />
            <input name="email" value={values.email} onChange={setValues} />
            <input
                name="firstName"
                value={values.firstName}
                onChange={setValues}
            />
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
