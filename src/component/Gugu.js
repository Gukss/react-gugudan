import React, { useState } from "react";

const Gugu = () => {
    const [number, setNumber] = useState({
        num1: Math.ceil(Math.random() * 9),
        num2: Math.ceil(Math.random() * 9),
    });
    const [answer, setAnswer] = useState();
    const [result, setResult] = useState("땡");

    const onChangeAnswer = (e) => {
        setAnswer(e.target.value);
    };

    const onSubmitAnswer = (e) => {
        e.preventDefault();
        if (number.num1 * number.num2 === parseInt(answer)) {
            setResult("정답");
            setAnswer("");
            setNumber({
                num1: Math.ceil(Math.random() * 9),
                num2: Math.ceil(Math.random() * 9),
            });
        } else {
            setResult("땡");
            setAnswer("");
        }
        input.focus();
    };

    let input = React.createRef();

    return (
        <div>
            <div>
                {number.num1} 곱하기 {number.num2}는?
            </div>
            <form onSubmit={onSubmitAnswer}>
                <input
                    type="number"
                    value={answer}
                    onChange={onChangeAnswer}
                    ref={(ref) => {
                        input = ref;
                    }}
                />
                <button type="submit">제출</button>
            </form>
            <div>{result}</div>
        </div>
    );
};

export default Gugu;
