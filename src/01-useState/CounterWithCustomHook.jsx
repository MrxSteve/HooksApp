import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, incremet, decrement, reset } = useCounter();
    const value = 2;



    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button className='btn btn-primary' onClick={ () => incremet(value)}>+1</button>
            <button className='btn btn-danger' onClick={reset}>Reset</button>
            <button className='btn btn-primary' onClick={() => decrement(3)}>-1</button>


        </>
    )

}
