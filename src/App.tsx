import React, { useEffect, useState } from 'react';
import './App.css';
import Spinner from './elements/Spinner';
import MainPage from './components/MainPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, [])
  return (<>
    {isLoading ? <Spinner/>:<MainPage/>}
    </>
  );
}

export default App;
