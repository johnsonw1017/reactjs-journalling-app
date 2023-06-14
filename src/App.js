import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>}/>
        <Route path="/calendar" element={<h1>CalendarPage</h1>}/>
        <Route path="/journal/:journalId" element={<h1>JournalPage</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
