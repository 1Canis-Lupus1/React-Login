import './App.css';
import Facebook from './components/facebook'
import Google from './components/google';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Auth Login</h1>
      </header>
      <div style={{border:"4px solid black",margin:"40px 80px",padding:"30px"}}>
      <Facebook />
      </div>
      <div style={{border:"4px solid black",margin:"40px 80px",padding:"30px"}}>
      <Google />
      </div>
    </div>
  );
}

export default App;
