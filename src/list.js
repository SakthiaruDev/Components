const List=(props)=>{
    const {sportsName}=props
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

export default List;