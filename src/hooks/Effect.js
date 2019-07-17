import React, { useEffect } from "react";

export const Hello = () => {
    useEffect(() => {
        // cleanup function
        return () => {
            console.log("unmount");
        };
    }, []);

    return <div>Hello</div>;
};
