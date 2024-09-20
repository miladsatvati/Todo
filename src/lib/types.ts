export interface PropTodo {
  id: number;
  text: string;
  isComplete: boolean;
}
export type HeaderCounterProps = {
  TotalNumberOfTodos: number;
  NumberOfCompletedTodos: number;
};
export enum buttonProptype {
  login = "login",
  register = "register"
}

export interface ButtonProps {
  onClick: () => Promise<void>
  children: React.ReactNode;
  buttonType: 'primary' | 'secondary';
}
export interface TodoListProps {
  todo: PropTodo[];
  settodo: React.Dispatch<React.SetStateAction<PropTodo[]>>;
}