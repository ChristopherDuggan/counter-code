import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const plusTen = () => setCount(count + 10)

    const changeCount = (num) => {
        if (count + num < 31 && count + num > -1) {
            setCount(count + num)
        }
    }

    return (
        <div>
            <span>Current Count: ${count}</span>
            <button disabled={count === 30 } onClick={() => changeCount(1)}> + </button>
            <button onClick={() => changeCount(-1)}> - </button>
            <button disabled={ count + 10 > 30 } onClick={() => changeCount(10)}> +10 </button>
        </div>
    )
}

export default Counter









