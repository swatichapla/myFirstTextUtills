//import logo from './logo.svg';
import './App.css';
import About from './componant/About';
import NavBar from './componant/Navbar';
import TextForm from './componant/TextForm';
import React, { useState } from 'react';
import Alert from './componant/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


//let name = 'Swati';

function App() {

const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(0 40 66)';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils-Dark Mode';
      
                // setInterval(() => {
                  // document.title = 'TextUtils is amazing Mode';
               // }, 2000);

               // setInterval(() => {
                //  document.title = 'Install TextUtills Now';
               // }, 1500);          
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled" ,"success");
        document.title = 'TextUtils-light Mode';
      }
    }

    const toggleRedMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#800000';
        showAlert("Dark mode has been enabled","success");
      }
      else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("light mode has been enabled" ,"success");
        }
      }

      const toggleGreenMode = () => {
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = 'rgb(1 78 1)';
          showAlert("Dark mode has been enabled","success");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("light mode has been enabled" ,"success");
          }
        }

        const toggleYellowMode = () => {
          if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#F4BC1C';
            showAlert("Dark mode has been enabled","success");
          }
          else{
              setMode('light');
              document.body.style.backgroundColor = 'white';
              showAlert("light mode has been enabled" ,"success");
            }
          }
  


    const [mode, setMode] = useState('light'); // Whether Dark Mode is Enable or Not
    const [alert, setAlert] = useState(null);

    const showAlert = (message , type) => {
            setAlert({
              msg: message,
              type:type
            })
            setTimeout(() =>{
                  setAlert(null);
            } , 1500)
    }

  return (
    <>
    <Router>
      <NavBar title = "TextUtills" mode={mode} toggleMode = {toggleMode} toggleRedMode = {toggleRedMode}  toggleGreenMode ={toggleGreenMode} toggleYellowMode ={toggleYellowMode}/>
      <Alert alert={alert}/>
        <div className="container" my-3>
      <Switch>
          {/*   /users ---> Componant 1
                /users/home ---> Componant 2*/}

          <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/">
          <TextForm  showAlert={showAlert} heading = "Enter the Content Text Here" mode={mode}/>
          </Route>
      </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;
