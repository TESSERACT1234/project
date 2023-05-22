// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto"
import { Bar } from "react-chartjs-2";
import React, { useEffect } from "react";

const Horizontalchart =(props) =>
{
    const data = props.data;
    const handleSubmit = () => {
        const id = document.getElementById('acquisitions').getContext("2d");
        let myChart = new Chart(id,
            {
              type: 'bar',
              data: {
                labels: data.map(row => row.day),
                datasets: [
                  {
                    label: 'strike price',
                    data: data.map(row => row.strikeprice)
                  },
                  {
                    label: 'profit',
                    data: data.map(row => row.profit)
                  }
                ]
              }
            }
          );
        // })
    }

    return(
        <>
        <div onClick={handleSubmit}>Show Graph</div>
        <div style={{width: "800px"}}><canvas id="acquisitions"></canvas></div>
        </>
    )
}
export default Horizontalchart;