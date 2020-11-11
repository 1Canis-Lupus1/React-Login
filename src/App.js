import './App.css';
import Facebook from './components/facebook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Facebook Auth Login</h1>
      </header>
      <p className="App-intro">
        Authenticate with Facebook to get started
      </p>
      <Facebook/>
    </div>
  );
}

export default App;
