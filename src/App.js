import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/calendar" element={<h1>CalendarPage</h1>}/>
        <Route path="/journal/:journalId" element={<h1>JournalPage</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
