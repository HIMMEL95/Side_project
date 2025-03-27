import React, { useState } from "react";

const MainContent = () => {
    const [count, setCount] = useState(0);

    const addCountHandler = () => {
        setCount(count + 1);
    }

    const minusCountHandler = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={addCountHandler}>
                + Click
            </button>
            <button onClick={minusCountHandler}>
                - Click
            </button>
        </div>
    );
}

export default MainContent;