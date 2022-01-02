import './styles.css';
import AppState from './context/AppState';

// Components
import Navbar from './components/Navbar';

// Routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './components/Home';
import About from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

import PageNotFound from './components/PageNotFound';

function App() {
    return (
        <AppState>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/skills' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/projects' element={<Projects />} />
                    <Route element={<PageNotFound />} />
                </Routes>
            </Router>
        </AppState>
    );
}

export default App;
