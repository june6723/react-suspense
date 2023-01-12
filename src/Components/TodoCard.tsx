import { useState } from 'react';

const TodoCard = ({ todo }: { todo: Todo }) => {
  const { title, completed } = todo;
  const [checked, setChecked] = useState(completed);
  return (
    <label className="todo">
      <input type="checkbox" checked={checked} onChange={() => setChecked(prev => !prev)} />
      <p>{title}</p>
    </label>
  );
};
export default TodoCard;
