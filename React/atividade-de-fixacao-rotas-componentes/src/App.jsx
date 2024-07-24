import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const User = React.lazy(() => import('./components/User'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<div>Carregando...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App;