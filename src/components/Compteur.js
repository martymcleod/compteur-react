

import {useState} from "react"

 const Compteur = () => {

    const [count, setCount] = useState(0)

    const restart = () => {
        setCount(0)
    }

    const handleClick = () => {
        setCount(count + 1)
    }

    return <div>
        <button onClick={handleClick}>Click here</button>
        <button onClick={restart}>Restart</button>
        <h1> Le compteur: {count} </h1>
    </div>
}

export default Compteur