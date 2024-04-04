// import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";

// function LineGraph() {
//   const [product, setProduct] = useState([{}]);
//   const [record, setRecord] = useState();
//   useEffect(() => {
//     fetch("http://localhost:3000/getuserRegister")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setRecord(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   useEffect(() => {
//     if (record) {
//       const dataArray = [];
//       for (let i = 0; i < record.length; i++) {
//         const { scorearr, teamname } = record[i];
//         dataArray.push({
//           name: teamname,
//           data: scorearr,
//         });
//       }
//       setProduct(dataArray);
//     }
//   }, [record]);
//   const [option, setOption] = useState({
//     title: { text: "🔴Live Tracking" },
//     xaxis: {
//       title: { text: "Time" },
//       categories: [
// "02:00pm",
// "02:01pm",
// "02:02pm",
// "02:03pm",
// "02:04pm",
// "02:05pm",
// "02:06pm",
// "02:07pm",
// "02:08pm",
// "02:09pm",
// "02:10pm",
// "02:11pm",
// "02:12pm",
// "02:13pm",
// "02:14pm",
// "02:15pm",
// "02:16pm",
// "02:17pm",
// "02:18pm",
// "02:19pm",
// "02:20pm",
// "02:21pm",
// "02:22pm",
// "02:23pm",
// "02:24pm",
// "02:25pm",
// "02:26pm",
// "02:27pm",
// "02:28pm",
// "02:29pm",
// "02:30pm",
// "02:31pm",
// "02:32pm",
// "02:33pm",
// "02:34pm",
// "02:35pm",
// "02:36pm",
// "02:37pm",
// "02:38pm",
// "02:39pm",
// "02:40pm",
// "02:41pm",
// "02:42pm",
// "02:43pm",
// "02:44pm",
// "02:45pm",
// "02:46pm",
// "02:47pm",
// "02:48pm",
// "02:49pm",
// "02:50pm",
// "02:51pm",
// "02:52pm",
// "02:53pm",
// "02:54pm",
// "02:56pm",
// "02:57pm",
// "02:58pm",
// "02:59pm",
// "03:00pm",
// "03:01pm",
// "03:02pm",
// "03:03pm",
// "03:04pm",
// "03:05pm",
// "03:06pm",
// "03:07pm",
// "03:08pm",
// "03:09pm",
// "03:10pm",
// "03:11pm",
// "03:12pm",
// "03:13pm",
// "03:14pm",
// "03:15pm",
// "03:16pm",
// "03:17pm",
// "03:18pm",
// "03:19pm",
// "03:20pm",
// "03:21pm",
// "03:22pm",
// "03:23pm",
// "03:24pm",
// "03:25pm",
// "03:26pm",
// "03:27pm",
// "03:28pm",
// "03:29pm",
// "03:30pm",
// "03:31pm",
// "03:32pm",
// "03:33pm",
// "03:34pm",
// "03:35pm",
// "03:36pm",
// "03:37pm",
// "03:38pm",
// "03:39pm",
// "03:40pm",
// "03:41pm",
// "03:42pm",
// "03:43pm",
// "03:44pm",
// "03:45pm",
// "03:46pm",
// "03:47pm",
// "03:48pm",
// "03:49pm",
// "03:50pm",
// "03:51pm",
// "03:52pm",
// "03:53pm",
// "03:54pm",
// "03:56pm",
// "03:57pm",
// "03:58pm",
// "03:59pm",
//       ],
//     },
//     yaxis: {
//       title: { text: "Score" },
//     },
//   });

//   return (
//     <React.Fragment>
//       <div className="container-fluid mt-3 mb-3">
//         <h2>Catch The Flag</h2>
//         <Chart
//           type="line"
//           width={1400}
//           height={500}
//           series={product}
//           options={option}
//         ></Chart>
//       </div>
//     </React.Fragment>
//   );
// }

// export default LineGraph;
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function LineGraph() {
  const [product, setProduct] = useState([{}]);
  const [record, setRecord] = useState();
  const [timeInterval, setTimeInterval] = useState(null); // State to store the interval ID

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://ctfserver.vercel.app/getuserRegister`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRecord(data);
        })
        .catch((err) => console.log(err));
    };

    // Fetch data initially when component mounts
    fetchData();

    // Fetch data every 1 minute
    const intervalId = setInterval(fetchData, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (record) {
      const dataArray = [];
      for (let i = 0; i < record.length; i++) {
        const { scorearr, teamname } = record[i];
        dataArray.push({
          name: teamname,
          data: scorearr,
        });
      }
      setProduct(dataArray);
    }
  }, [record]);

  const updateScores = () => {
    // Update the scores for each team
    const updatedProduct = product.map((team) => ({
      ...team,
      data: team.data.map((score) => score + getRandomScore()), // Add random score for demo purposes
    }));
    setProduct(updatedProduct);
  };

  const getRandomScore = () => {
    // Generate a random score between 1 and 10
    return Math.floor(Math.random() * 10) + 1;
  };

  const option = {
    title: { text: "🔴Live Tracking" },
    xaxis: {
      title: { text: "Time" },
      categories: [
        "09:01pm",
        "09:02pm",
        "09:03pm",
        "09:04pm",
        "09:05pm",
        "09:06pm",
        "09:07pm",
        "09:08pm",
        "09:09pm",
        "09:10pm",
        "09:11pm",
        "09:12pm",
        "09:13pm",
        "09:14pm",
        "09:15pm",
        "09:16pm",
        "09:17pm",
        "09:18pm",
        "09:19pm",
        "09:20pm",
        "09:21pm",
        "09:22pm",
        "09:23pm",
        "09:24pm",
        "09:25pm",
        "09:26pm",
        "09:27pm",
        "09:28pm",
        "09:29pm",
        "09:30pm",
        "09:31pm",
        "09:32pm",
        "09:33pm",
        "09:34pm",
        "09:35pm",
        "09:36pm",
        "09:37pm",
        "09:38pm",
        "09:39pm",
        "09:40pm",
        "09:41pm",
        "09:42pm",
        "09:43pm",
        "09:44pm",
        "09:45pm",
        "09:46pm",
        "09:47pm",
        "09:48pm",
        "09:49pm",
        "09:50pm",
        "09:51pm",
        "09:52pm",
        "09:53pm",
        "09:54pm",
        "09:55pm",
        "09:56pm",
        "09:57pm",
        "09:58pm",
        "09:59pm",
        "10:00pm",
        "10:01pm",
        "10:02pm",
        "10:03pm",
        "10:04pm",
        "10:05pm",
        "10:06pm",
        "10:07pm",
        "10:08pm",
        "10:09pm",
        "10:10pm",
        "10:11pm",
        "10:12pm",
        "10:13pm",
        "10:14pm",
        "10:15pm",
        "10:16pm",
        "10:17pm",
        "10:18pm",
        "10:19pm",
        "10:20pm",
        "10:21pm",
        "10:22pm",
        "10:23pm",
        "10:24pm",
        "10:25pm",
        "10:26pm",
        "10:27pm",
        "10:28pm",
        "10:29pm",
        "10:30pm",
        "10:31pm",
        "10:32pm",
        "10:33pm",
        "10:34pm",
        "10:35pm",
        "10:36pm",
        "10:37pm",
        "10:38pm",
        "10:39pm",
        "10:40pm",
        "10:41pm",
        "10:42pm",
        "10:43pm",
        "10:44pm",
        "10:45pm",
        "10:46pm",
        "10:47pm",
        "10:48pm",
        "10:49pm",
        "10:50pm",
        "10:51pm",
        "10:52pm",
        "10:53pm",
        "10:54pm",
        "10:55pm",
        "10:56pm",
        "10:57pm",
        "10:58pm",
        "10:59pm",
        "11:00pm",
      ],
    },
    yaxis: {
      title: { text: "Score" },
    },
  };

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <h2>Catch The Flag</h2>
        <Chart
          type="line"
          width={1400}
          height={500}
          series={product}
          options={option}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default LineGraph;
