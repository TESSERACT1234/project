import React, { useEffect, useState } from "react";
import {initializeApp} from "firebase/app";
import {getDatabase,ref, onValue} from "firebase/database";
import "../src/journaldata.css";
import Horizontalchart from "./components/HorizontalChart";
import Horizontalchart2 from "./components/HorizontalChart2";

const firebaseConfig = {
    // your firebase config
    apiKey: "AIzaSyDMQjhOjrE6AdkQORXoEHobQpmK4LCAtYQ",
    authDomain: "bullsbears2502.firebaseapp.com",
    databaseURL: "https://bullsbears2502-default-rtdb.firebaseio.com",
    projectId: "bullsbears2502",
    storageBucket: "bullsbears2502.appspot.com",
    messagingSenderId: "995885875905",
    appId: "1:995885875905:web:34221a6af32002aabd0a40"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

const Journaldata = (props) => {
    const [data, setData] = useState([]);
    const userEmail = props.useremail

    useEffect(() => {
        const fetchData = async () => {
            console.log("here")
            const ref2 = ref(database,'journal');

            onValue(ref2, (snapshot) => {
                const items = snapshot.val();
                const list = [];
                for (let id in items) {
                    // console.log("item: ", items[id].email);
                    if(items[id].email == userEmail){
                        list.push({ id, ...items[id] });
                    }
                }
                setData(list);
            });
            // let list = [];
            // docs.forEach((doc) => {
            //     list.push(doc.data())
            //     console.log("docid: ", doc.data)
            // })
            // setData(list);
        };
        fetchData();
    }, []);

    return (

        <>
            <h1 style={{ color: 'orangered' , marginTop:'0.5em'}}>
                <center>

                    --------- Summarised Data ---------
                </center>
            </h1>



            <div className="table" style={{ padding: '1em' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>day</th>
                            <th>Time</th>
                            <th>India vix</th>
                            <th>Global Sentiment</th>
                            <th>Profit</th>
                            <th>StrikePrice</th>
                            <th>Dollar Index</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.date}</td>
                                <td>{item.day}</td>
                                <td>{item.time}</td>
                                <td>{item.vix}</td>
                                <td>{item.globalsentiment}</td>
                                <td>{item.profit}</td>
                                <td>{item.strikeprice}</td>
                                <td>{item.dollarindex}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="Chart-data">
                <center><Horizontalchart data={data} /></center>
            </div>

            <div className="Chart-data">
                <center><Horizontalchart2 data={data} /></center>
            </div>
        </>
    );
};

export default Journaldata;
