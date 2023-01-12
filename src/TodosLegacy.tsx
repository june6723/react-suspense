import { useEffect, useState } from 'react';
import TodoCard from './Components/TodoCard';

const getTodos = (userId: number) => {
  console.log('Async - fetch Todos');
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`).then(
    response => response.json() as Promise<Todo[]>,
  );
};

const TodosLegacy = ({ userId }: { userId: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    setIsLoading(true);
    getTodos(userId).then(res => {
      setTodos(res);
      setIsLoading(false);
    });
  }, [userId]);

  console.log('Render - Rendering Todos');

  if (isLoading) return <h2 className="todo-loading legacy">Todo Loading...</h2>;
  return (
    <div className="todos">
      {todos?.slice(0, 5).map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosLegacy;
