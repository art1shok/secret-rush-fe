import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  
  useEffect(() => {
    console.log(tg);
    tg.ready();
  }, []);

  const onClose = () => {
    console.log("test");

    tg.close();
  };

  return (
    <div>
      Work
      <button onClick={onClose}>Test my app online</button>
    </div>
  );
}

export default App;