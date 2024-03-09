import { useState } from "react"

export default function Team (){

    const [count, setCount] = useState(0)
    console.log(count);

    const handleTeam = () =>{
        const newCount = count + 1;
        setCount(newCount);  
    }

    const playerBox = {
        marginBottom: '20px',
        padding: '20px',
        border: '2px solid tomato',
        borderRadius: '10px'
    }
    const teamReduce = () =>{
        setCount(count -1)
    }

    return (
        <div style={playerBox}>
            <h3>Player: {count} </h3>
            <button onClick={handleTeam}>Add</button>
            <button onClick={teamReduce}>Remove</button>
        </div>
    )
}