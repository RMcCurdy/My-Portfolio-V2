import './styles.css';
import AppState from './context/AppState';

// Components
import Navbar from './components/Navbar';

// Routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages used before signing in
import Home from './components/Home';

import PageNotFound from './components/PageNotFound';

function App() {
    return (
        <AppState>
            <Router>
                {/* <Navbar /> */}
                <Home />
                {/* <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route component={PageNotFound} />
                </Routes> */}
            </Router>
        </AppState>
    );
}

export default App;
