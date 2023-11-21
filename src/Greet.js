import { Component } from "react"

class Greet extends Component{
    constructor(){
        super()
        this.state={
            message:"Rohit",
            count:0,
            make:"love",
            bike:"royal",
            color:"black"
        }
    }
    changeName(){
                this.setState({
                    message:"Hitman"
                })
            }
    incr(){
        this.setState({
            count:this.state.count+1
        })
    }
    decr(){
            this.setState({
                count:this.state.count>0 ? this.state.count-1:0
            })
        }

   render(){
    const answer=()=>{
        this.setState({
            color:"white"
        })
    }
    return(
        <div>
            <h2>Change Name</h2>
            <h3>{this.state.message}</h3>
            <button onClick={()=>this.changeName()}>changeName</button>

            <h2>Increment and decrement</h2>
            <h3>{this.state.count}</h3>
            <button onClick={()=>this.incr()}>Increment</button>
            <button onClick={()=>this.decr()}>decrement</button>
            
            <h3>{this.state.color}</h3>
            <button onClick={answer}>change</button>
        </div>
        
        
    )
   }    
}

export  default Greet ;