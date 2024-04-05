// import React from 'react'

// export default function NavBar() {
//     return (
//         <nav>
//             <ul id='navbar-items' className=''>
//                 <li>Home</li>
//                 <li>Score Board</li>
//                 <li>Graph</li>
//                 <li>Challenges</li>
//             </ul>

//         </nav>

//     )
// }

import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul id="navbar-items" className="">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li><Link to="/scoreboard">Score Board</Link></li> */}
          {/* <li><Link to="/graph">Graph</Link></li> */}

          <li>
            <Link to="/progress">Progress</Link>
          </li>
          {/* <li><Link to="/challenges">Challenge 1</Link></li> */}
        </ul>
      </nav>
      {/* <Outlet /> */}
    </>
  );
}
