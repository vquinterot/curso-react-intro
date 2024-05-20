import { TodoCounter } from '../TodoCounter';
import { TodoSearch  } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodos } from '../EmptyTodos';
import {TodoContext} from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI(){                              
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  
    return (
        // <div className="App">
        <>
            <TodoCounter/>
            <TodoSearch/>

            <TodoList>  
                {loading && 
                    (
                        <>
                            <TodoLoading/>    
                            <TodoLoading/>    
                            <TodoLoading/>    
                        </>
                    )                
                }     
                {error && <TodoError/>}     
                {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}     

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                />
                ))}   
            </TodoList>
            <CreateTodoButton
                setOpenModal = {setOpenModal}
            />
            {openModal &&
                <Modal>
                    <TodoForm/>
                </Modal>
            }
        </>
        //</div>
      );
}

export {AppUI}