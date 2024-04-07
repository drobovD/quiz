import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Quiz from './Quiz';

function App() {
  return (
    <BrowserRouter>
      <div className='info'>
        <nav>
          <ul>
            <li>
              <Link className='main' to="/">Main</Link>
            </li>
            <li>
              <Link className='quiz' to="/quiz">Quiz</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
