import { useEffect, useState } from 'react';
import User from './Components/User';
import TodosLegacy from './TodosLegacy';

type User = {
  id: number;
  username: string;
  email: string;
};

const getUser = (userId: number) => {
  console.log('Async - fetch user');
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    response => response.json() as Promise<User>,
  );
};
const UserLegacy = ({ userId }: { userId: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setIsLoading(true);
    getUser(userId).then(res => {
      setUser(res);
      setIsLoading(false);
    });
  }, [userId]);

  console.log('Render - Rendering User');

  if (isLoading) return <h2 className="user-loading legacy">User Loading...</h2>;
  return (
    <div>
      <h2>
        <span className="legacy">Legacy</span>
      </h2>
      <User user={user} />
      <TodosLegacy userId={userId} />
    </div>
  );
};

export default UserLegacy;
