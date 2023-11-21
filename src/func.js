const TableFunc=(props)=>{
  const {userData}=props
  const storeData=userData.map((e,i)=>{
      return(
          <tr key={i}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.profession}</td>
          </tr>
      )
  })
  return(
      <div className="table">
          <table>
          <thead>
              <th>Name</th>
              <th>Age</th>
              <th>profession</th>
          </thead>
          <tbody>
              {storeData}
          </tbody>
      </table>
      </div>
      
  )
}


export default TableFunc;


