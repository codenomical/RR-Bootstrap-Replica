// refactored the boilerplate and placed the components.
import './App.css';
import TopBar from './Components/TopBar';
import BackgroundSection from './Components/BackgroundSection';
import StoreListing from './Components/StoreListing';

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundSection />
      <StoreListing />
    </div>
  );
}

export default App;
