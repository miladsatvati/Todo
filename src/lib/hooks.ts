import { useContext } from "react";
import { TodosContext } from "../contexts/TodoContextsProvider";

export default function UseTodosContext() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("can not found");
  } else return context;
}
