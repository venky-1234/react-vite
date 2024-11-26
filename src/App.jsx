// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// import React from 'react';
// import { Button, Typography } from '@mui/joy';

// const App = () => (
//   <div>
//     <Typography level="h1" gutterBottom>
//       Welcome to Joy UI
//     </Typography>
//     <Button variant="solid" color="primary">
//       Joy Button
//     </Button>
//   </div>
// );

// export default App;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Home from './pages/home';
import About from './pages/About';
import Career from './pages/Career';

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/career">
            Career
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
