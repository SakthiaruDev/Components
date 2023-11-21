import { Component } from "react";

class Table extends Component{
    render(){
        let {team}=this.props;
       let ans= team.map((s,n)=>{
                return(
                    <tr key={n}>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.role}</td>
                </tr>
                )
               
        })
        return(
            <table>
                <thead>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Role</td>
                </thead>
                <tbody>
                        {ans}
                </tbody>
            </table>
        )
    }
}

export default Table;
