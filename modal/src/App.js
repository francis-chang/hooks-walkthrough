import React, { useState } from "react";
import ReactModal from "react-modal";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
`;

const Big = styled.div`
    height: 200vh;
`;

const Container = styled.div`
    height: 40vh;
    max-height: 40vh;
`;

function App() {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <ReactModal isOpen={open}>
                <Container>
                    <Big />
                </Container>
            </ReactModal>
        </div>
    );
}

export default App;
