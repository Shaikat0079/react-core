import { useState } from "react"

export default function BatsMan(){
    const[score,setScore] = useState(0);

    const [sixes,setSixes] = useState(0);

    const handleSingle=()=>{
        const updatedRuns = score+1;
        setScore (updatedRuns);
    }
    const handleFour=()=>{
        const updatedRuns = score+4;
        setScore(updatedRuns);
    }
    const handleSix = ()=>{
        const updatedRuns = score+6;
        const updateSixes = sixes+1;
        setScore(updatedRuns);
        setSixes(updateSixes);
    }
    return(
        <div>
            {
                <h3>Hitted Six: {sixes} times!</h3>
            }
            <h3>Player: Shakib Al Hasan</h3>
            {
                score >= 50 && <p>
                    You Scored : {score}
                </p>
            }
            <h1>Score: {score}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour} style={{margin:"10px"}}>Fours</button>
            <button onClick={handleSix}>Sixes</button>
        </div>
    )
}