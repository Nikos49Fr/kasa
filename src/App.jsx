import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Property from './pages/Property';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Property />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </main>
    );
}
