import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  }, []);



  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "rgba(111, 141, 226, 0.541)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(194, 80, 80, 0.541)",
            fill: true,
          },
        ],
      }}
      options={{
        legend: {
          labels: {fontColor: 'white'},
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
        }
      }}
    />
  ) : null;

  
  console.log(confirmed, recovered, deaths);
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recoverd","Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(57, 103, 230, 0.541)",
              "rgba(103, 250, 98, 0.541)",
              "rgba(236, 72, 72, 0.541)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
            
          },
        ],
      }}
      options={{
        legend: { display: false},
        title: { display: true, text: `Current state in ${country}`,  },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
