import { Component } from "react";

class Classlist extends Component{
    render(){
        const {sportsName}=this.props
    const result=sportsName.map((v,i)=>{
        return(

                <li key={i}>{v.pname}</li>
        )
    })
        return(
            <div className="game">
            <h2>Sports</h2>
        <ul>
            {result}
        </ul>
        </div>
        )
    }
}

export default Classlist;