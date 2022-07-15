import React, { useEffect, useRef } from 'react';

export default function Test2(){
    const inputRef = useRef('dddd');
    const { CKEditor, ClassicEditor } = inputRef.current
    useEffect(() => {
        
    }, [])
    // useEffect(() => {
    //     // console.log(inputRef);
    //     inputRef.current.focus();
    // }, []);

    // const login = () => {
    //     alert(`환영합니다 ${inputRef.current.value}!`);
    //     inputRef.current.focus();
    // }

    return (
        <div>
            {console.log(CKEditor, ClassicEditor)}
            {/* <input ref={inputRef} type="text" placeholder='username' />
            <button onClick={login}>로그인</button> */}
        </div>
    )
}