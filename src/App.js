import React from 'react'
import Navbar from "./components/Navbar"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Body from './components/Body';
import CreateExp from './components/CreateExp';
// import BrowserRouter from "react-bootstrap-router"
import Copyright from "./pages/Login.js"
export default function App() {
  return (
    <div>
       <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <Navbar />
      </Container>
      <Container fixed>
      <Body />
      </Container>
        <Copyright/>
    </React.Fragment>
      
    </div>
  )
}
