import { useRef } from "react";
import UseTodosContext from "../../lib/hooks";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function AddTodoForm() {

  const {isAuthenticated} = useKindeAuth()

  const { settodo, todo } = UseTodosContext();

  const GetData = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const GetTodo = GetData.current!.value;
    if(todo.length >= 3 && !isAuthenticated){
      return alert('you must use premium servis for more than 3 todos')
    }
    else {
      settodo((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: GetTodo,
          isComplete: false,
        },
      ]);
    }
    GetData.current!.value = " ";
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium text-[#231d15]">Add todo</h2>
      <input
        ref={GetData}
        type="text"
        className="h-11 border border-black/[12%] rounded-md my-4 text-sm w-full p-4"
      />
      <button
        type="submit"
        className="h-11 bg-[#473a2b] hover:bg-[#322618] w-full rounded-md text-[#f7ece1] cursor-pointer"
      >
        Add to list
      </button>
    </form>
  );
}

export default AddTodoForm;
