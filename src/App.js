import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import { ScrollProgress } from './components/ScrollProgress';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <Portfolio />
      <ThemeToggle />
    </div>
  </ThemeProvider>
  );
}

export default App;