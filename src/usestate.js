import React from "react";

function Use({cout}){

    const ans=cout.map((e)=>{
        return(
            <div>
            <li>{e.name}</li>
            <li>{e.skills[0].name}</li>
         </div>
        )
    })
    return(
        <div className="value">
            <ol>
                {ans}
            </ol>
        </div>
    )
}

export default Use;