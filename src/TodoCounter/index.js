import { useContext } from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContex';

function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  }=useContext(TodoContext);
  return (
    totalTodos==completedTodos?
    <h1 className='TodoCounter'> Congrats you have completed <span> {completedTodos} </span> of <span> {totalTodos} </span>  tasks! </h1>
    :
      <h1 className='TodoCounter'> You completed <span> {completedTodos} </span>  Tasks of <span> {totalTodos} </span> </h1>
    );
  }
  export {TodoCounter};
  