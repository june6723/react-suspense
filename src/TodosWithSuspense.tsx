import TodoCard from './Components/TodoCard';
import usePromise from './usePromise';

const getTodos = (userId: number) => {
  console.log('Async - fetch Todos');
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`).then(
    response => response.json() as Promise<Todo[]>,
  );
};

const TodosWithSuspense = ({ userId }: { userId: number }) => {
  const [todos] = usePromise<number, Todo[]>(getTodos, userId);

  console.log('Render - Rendering Todos');
  return (
    <div className="todos">
      {todos?.slice(0, 5).map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosWithSuspense;
