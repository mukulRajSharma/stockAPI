import './App.css';
import React, {useEffect} from 'react';

function App() {
  useEffect(() => {
    fetch('/api').then(response => response.json().then(data => {
      console.log("HELOOOOOOOO");
    }))
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
