import React from 'react';

const TestCanvas = () => {

    const canvas = document.getElementById("starcanvans");
    const context = canvas.getContext();
    

    return (
        <>
            <div id="starcanvans"></div>
        </>
    )
}

export default TestCanvas;