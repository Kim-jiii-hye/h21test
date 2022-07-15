import React, {useState, useRef, useEffect} from "react";

const Test = () => {
    const [count, setCount] = useState(1);
    const [st, setst] = useState(false);
    // const [renderCount, setRenderCount] = useState(1);

    // useEffect(() => {// 처음 마운트 되면 실행
    //     console.log('render');
    //     setRenderCount(renderCount + 1); //여기서도 값 계속 변경되어 렌더링 계속
    // });

    const renderedCount = useRef(1);
    useEffect(() => {
        renderedCount.current = renderedCount.current + 1;
    })

    const ch = () => {
        setst(true);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>올려</button>
            <button onClick={ch}>리렌더링</button>
        </div>
    );
};
export default Test;