export {};
declare global {
  type User = {
    id: number;
    username: string;
    email: string;
  };
  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
}
