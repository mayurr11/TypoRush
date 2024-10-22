import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, TypingTest, Results, NotFound } from './pages';
import { Header, Footer } from './components';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`flex flex-col h-screen transition-colors duration-300 ease-in-out ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/typing-test" element={<TypingTest />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
