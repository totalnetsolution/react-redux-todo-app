import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../features/todos/todosSlice';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, newText: editText }));
      setIsEditing(false);
    }
  };

  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-200">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="input input-bordered w-full mr-2"
          />
          <button className="btn btn-success mr-2" onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <div>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
          </div> <br />
          <div>
            <button
              className="btn btn-outline btn-info btn-xs mr-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-outline btn-error btn-xs"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
