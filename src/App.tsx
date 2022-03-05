import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Homepage } from './Homepage';
import { ValueEntry } from './ValueEntry';

function App() {
  return (
    <div className="App">
    	<Router>
				<Routes>
					<Route path="/" element={<Homepage></Homepage>}></Route>
					<Route path="/valueentry" element={<ValueEntry></ValueEntry>}></Route>
				</Routes>
			</Router>
    </div>
  );
}

export default App;
