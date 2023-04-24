import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function plus() {
        setCount(count + 1);
      }
      function minus() {
        setCount(count - 1);
      }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={plus}>ПЛЮС</button>
        <button onClick={minus}>МИНУС</button>
    </div>
  )
}

