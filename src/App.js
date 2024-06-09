import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './Components/Demo/DemoList';
import Button from './Components/UI/Button';

function App ()
{
  const [ listTitle, setListTitle ] = useState ( "My List" );
  // State to change Button's Title
  const [ buttonTitleChanger, setButtonTitleChanger ] = useState ( true );

  const changeTitleHandler = useCallback (
    () => {
      setListTitle ( "New Title" );
    }, []
  );

  function clickHandler ()
  {
    setButtonTitleChanger ( ( prev ) => ( !prev ) );
  }

  const listItems = useMemo ( () => [ 5, 3, 1, 10, 9 ], [] );

  return (
    <div className = "app">
      <DemoList title = { listTitle } items = { listItems } boolean = { buttonTitleChanger } />
      <Button onClick = { changeTitleHandler }> Change List Title </Button> 
      <Button onClick = { clickHandler }> { buttonTitleChanger ? "Change To Descending Order" : "Change To Ascending Order" } </Button>
    </div>
  );
}

export default App;