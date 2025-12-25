import { createContext, useContext } from "react";

// step 1: create context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false,
        }
    ],
    addToto: (todo) => {},
    updateTodo: (id, too) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
    
})

// step 3: use useContext hook
export const useTodo = () => {
    return useContext(TodoContext)
}

// step 2: wrap TodoContext.Provider
export const TodoProvider = TodoContext.Provider
