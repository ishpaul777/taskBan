import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';


function App() {
  const isDarkMode = useSelector(state => state.theme);

  useEffect(() => {
    console.log(isDarkMode);
    const html = document.querySelector('html');
    isDarkMode ? html.classList.add('dark') : html.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
