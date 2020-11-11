import './App.css';
import Facebook from './components/facebook'
import Google from './components/google';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Facebook Auth Login</h1>
      </header>
      <Facebook />
      <Google />
    </div>
  );
}

export default App;
