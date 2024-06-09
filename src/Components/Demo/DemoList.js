import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

function DemoList ( { title, items, boolean } )
{
  const sortedList = useMemo (
    () => {
      // Using boolean (buttonTitleChanger) for sorting the items in Ascending or Descending Order.
      if ( boolean )
      {
        return items.sort ( ( a, b ) => ( a - b ) );
      }

      else
      {
        return items.sort ( ( a, b ) => ( b - a ) );
      }
      
    }, [ items, boolean ]
  ); 

  return (
    <div className = { classes.list }>
      <h2> { title } </h2>
      <ul>
        { sortedList.map ( 
            ( item ) => ( <li key = { item }> { item } </li> )
          )
        }
      </ul>
    </div>
  );
};

export default React.memo ( DemoList );