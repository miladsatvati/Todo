import { useContext } from "react";
import { TodosContext } from "../../contexts/TodoContextsProvider";

function Counter() {
  const context = useContext(TodosContext);
  if(!context) return null

  const { TotalNumberOfTodos, NumberOfCompletedTodos } = context

  return (
    <p className="m-2 text-sm ">
      <b>{NumberOfCompletedTodos}</b> /{' '}
      {TotalNumberOfTodos}
    </p>
  );
}

export default Counter;
