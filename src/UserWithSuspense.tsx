import { Suspense } from 'react';
import User from './Components/User';
import TodosWithSuspense from './TodosWithSuspense';
import usePromise from './usePromise';

const getUser = (userId: number) => {
  console.log('Async - fetch user');
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    response => response.json() as Promise<User>,
  );
};
const UserWithSuspense = ({ userId }: { userId: number }) => {
  const [user] = usePromise<number, User>(getUser, userId);
  console.log('Render - Rendering User');
  return (
    <div>
      <h2>
        <span className="suspense">Suspense</span>
      </h2>
      <User user={user} />
      <Suspense fallback={<h2 className="todo-loading suspense">Todos Loading...</h2>}>
        <TodosWithSuspense userId={userId} />
      </Suspense>
    </div>
  );
};

export default UserWithSuspense;
