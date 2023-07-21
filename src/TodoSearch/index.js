import React, { useContext } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContex';

function TodoSearch(){
  const {
    searchValue,
    setSearchValue,
  }=useContext(TodoContext);
  
  return (
      <input
      className="TodoSearch"
      placeholder="Study React"
      value={searchValue}
      onChange={(e)=>{
        setSearchValue(e.target.value)
      }
      }
      />
    );
  }
  
  export {TodoSearch};
  