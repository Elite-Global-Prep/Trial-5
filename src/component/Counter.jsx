import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [otherState, setOtherState] = useState(false)

    // it will take two things one is arrow function and second is dependency
    // console.log("I am before useeffect")
    useEffect(() => {
        console.log("Component Mounted inside useeffect")
    }, []) // empty dependency, this will run only one time when component mount
    useEffect(() => {
        console.log("useEffect: count is now", count)
    }, [count, otherState]) // count is act as a dependcy, this thing whenevr count will   change
    // console.log("I am after useeffect")

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)} >Increment</button>
            <br />
            <button onClick={() => setOtherState(!otherState)} >Other State </button>
        </div>
    )
}

export default Counter