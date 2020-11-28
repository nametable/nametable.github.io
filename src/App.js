import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import LockContainer from "./Components/LockContainer";

function App() {

  const [time, setTime] = useState(0);
  const [password, setPassword] = useState("password123");

  useEffect(() => {
    setTimeout(() => {
      setTime(Date.now().toString())
    }, 100)
  });

  setTimeout(() => {
    
  })

  const handlePassChange = (evt) => {
    setPassword(evt.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
        <p>Cur Pass <input onChange={handlePassChange} value={password}></input></p>
        <LockContainer password={password} height={500} width={500} color="black">
          <div style={{display:"grid", gridTemplateColumns: "auto auto"}}>
            <LockContainer password={password} height={250} width={250} color="red"></LockContainer>
            <LockContainer password={password} height={250} width={250} color="green"></LockContainer>
            <LockContainer password={password} height={250} width={250} color="blue"></LockContainer>
            <LockContainer password={password} height={250} width={250} color="#123456">
              <iframe src="https://www.youtube.com/embed/hDkuUZ3F1GU" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </LockContainer>
          </div>
        </LockContainer>
        <p>nametable's website - Very much a work in progress</p>
        <p>Your computer says the time is {time}</p>
      </header>
    </div>
  );
}

export default App;
