import React from 'react';
import Data from "./Data";
import NewItem from './NewItem'

export default function Table() {

  const apidata = [
    {
      "_id": "62824b72b24d80794d40dd52",
      "user": "628218be44d2695893062fa7",
      "size": "200 x 200 x 200",
      "gct": "200001",
      "ht": "2020",
      "station": "c3",
      "__v": 0
    },
    {
      "_id": "62824b74b24d80794d40dd54",
      "user": "628218be44d2695893062fa7",
      "size": "200 x 200 x 200",
      "gct": "200001",
      "ht": "2020",
      "station": "d3",
      "__v": 0
    },
    {
      "_id": "62824b74b24d80794d40dd56",
      "user": "628218be44d2695893062fa7",
      "size": "200 x 200 x 200",
      "gct": "200001",
      "ht": "2020",
      "station": "d2",
      "__v": 0
    },
    {
      "_id": "6283a87bc3ad7c182cc2726c",
      "user": "628218be44d2695893062fa7",
      "size": "200 x 200 x 200",
      "gct": "200001",
      "ht": "2020",
      "station": "a2",
      "__v": 0
    },
    {
      "_id": "6283a87bc3ad7c182cc2726e",
      "user": "628218be44d2695893062fa7",
      "size": "200 x 200 x 200",
      "gct": "200001",
      "ht": "2020",
      "station": "b1",
      "__v": 0
    },
    {
      "_id": "6283a87dc3ad7c182cc27270",
      "user": "628218be44d2695893062fa7",
      "size": "200 x 200 x 200",
      "gct": "200001",
      "ht": "2020",
      "station": "a1",
      "__v": 0
    }
  ]
  
  return (
    <>
    <NewItem/>
      <div className="container2">
        <table className='table'>
        <thead>
          <tr>
            <th scope="col">Station</th>
            <th scope="col">gct</th>
            <th scope="col">ht</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
              {apidata.map((data) => {
                return <Data data={data} />
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}
