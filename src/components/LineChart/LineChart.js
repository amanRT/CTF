// import { useState } from 'react';
import {
    Chart as ChartJS,
    LineElement,
    // CategoryScale, // convert to timescale!
    LinearScale, // for y axis
    PointElement,
    TimeScale,
    Tooltip,
    Legend
} from 'chart.js'

import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2'

ChartJS.register(
    LineElement,
    // CategoryScale, // convert to timescale!
    LinearScale, // for y axis
    PointElement,
    TimeScale,
    Tooltip,
    Legend
);

function LineGraph() {
    // const [teamData, setTeamData] = useState()
    const data = {
        // YYYY-MM-DD
        labels: ['2021-11-06 23:39:30', '2021-11-06 23:49:30', '2021-11-06 23:59:30', '2021-11-07 00:09:30'], // time  X
        // labels: ['2:10', '2:20', '2:25', '2:28'],
        datasets: [
            {
                label: ['Team 369'], // team names
                data: [3, 6, 9, 3.69], // scores  Y
                backgroundColor: 'red',
                borderColor: 'red',
                tension: 0.4,
            },
            {
                label: ['Team 259'], // team names
                backgroundColor: 'aqua',
                borderColor: 'aqua',
                tension: 0.4,
                data: [
                    {
                        x: '2021-11-06 23:33:30',
                        y: 2,
                    },
                    {
                        x: '2021-11-06 23:49:30',
                        y: 3.5,
                    },
                    {
                        x: '2021-11-06 23:59:30',
                        y: 4,
                    },
                    {
                        x: '2021-11-07 00:09:30',
                        y: 5
                    }
                ],
                // data: teamData,
            },
            {
                label: ['Team 149'], // team names
                data: [1, 1, 1, 1.69], // scores  Y
                backgroundColor: 'blue',
                borderColor: 'blue',
                tension: 0.4,
            },
            {
                label: ['Team 039'], // team names
                data: [2, 2, 9, 2.69], // scores  Y
                backgroundColor: 'yellow',
                borderColor: 'yellow',
                tension: 0.4,
            },
        ]
    };

    // const options = {
    //     plugins: {
    //         title: {
    //             display: true,
    //             text: 'Create Time Scale in Line Chart with React Chart Js'
    //         }
    //     },
    //     scales: {
    //         x: {
    //             type: 'time',
    //             time: {
    //                 unit: 'minute',
    //             }
    //         },
    //         y: {
    //             beginAtZero: true,
    //         }
    //     },

    // };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Create Time Scale in Line Chart with React Chart Js'
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'minute',
                },
                ticks: {
                    color: 'white' // Setting the color of x-axis ticks to white
                },
                grid: {
                    color: 'grey' // Setting the color of x-axis grid lines to grey
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white' // Setting the color of y-axis ticks to white
                },
                grid: {
                    color: 'grey' // Setting the color of y-axis grid lines to grey
                }
            }
        },
        backgroundColor: 'black', // Background color set to black
        maintainAspectRatio: false, // Disables maintaining aspect ratio
        responsive: true // Enables responsiveness
    };



    // return (
    //     <div className='Chart-container'>
    //         {/* <h1>Create Time Scale in Line Chart with React Chart Js</h1> */}
    //         <div className='Chart'>
    //             <Line
    //                 data={data}
    //                 options={options}
    //                 width={100}
    //                 height={600}
    //             ></Line>
    //         </div>
    //     </div >
    // );

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='Chart' style={{ width: '80%', height: '80%' }}>
                <Line
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
}

export default LineGraph;
