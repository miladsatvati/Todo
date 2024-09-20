import React, { useState, createContext, useEffect } from "react";
import { PropTodo } from "../lib/types";

type TodoContextsProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  settodo: React.Dispatch<React.SetStateAction<PropTodo[]>>;
  todo: PropTodo[];
  TotalNumberOfTodos: number;
  NumberOfCompletedTodos: number;
  lineHandle: (id: number) => void;
  handledelet: (id: number) => void;
};

const InitialTOdos = () => {
  const storage = localStorage.getItem("todos");
  if (storage) {
    return JSON.parse(storage);
  } else {
    return [];
  }
}

export const TodosContext = createContext<TTodosContext | null>(null);

function TodoContextsProvider({ children }: TodoContextsProviderProps) {
  const [todo, settodo] = useState<PropTodo[]>(InitialTOdos);
  const TotalNumberOfTodos = todo.length;
  const NumberOfCompletedTodos = todo.filter((item) => item.isComplete).length;

  const lineHandle = (id: number) => {
    settodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      })
    );
  };

  const handledelet = (id: number) => {
    settodo((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodosContext.Provider
      value={{
        settodo,
        todo: todo,
        TotalNumberOfTodos,
        NumberOfCompletedTodos,
        lineHandle,
        handledelet,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodoContextsProvider;
