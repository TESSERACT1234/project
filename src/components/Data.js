import React from 'react'

export default function Data(props) {
    const {data} = props;
    //const [thisData, changethisData] = useState(props);
    const deleteData = (e) => {
        console.log("Deleted data id is: " + e);
    }
  return (
    <>
        <tr>
           <td> {data.station}</td>
           <td> {data.gct}</td>
           <td> {data.ht}</td>
           <td><i className="fa-solid fa-pen-to-square"></i></td>
           <td><i className="fa-solid fa-trash-can" onClick={deleteData(data._id)}></i></td>
        </tr>
    </>
  )
}
