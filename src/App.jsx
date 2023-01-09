import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { useQuery } from '@tanstack/react-query';

function App() {
  const { data: todos = [], refetch } = useQuery({
    queryKey: 'todos',
    queryFn: () =>
      fetch('https://mern-todo-server.vercel.app/todos').then(res =>
        res.json()
      ),
  });

  return (
    <div className="py-10">
      <h1 className="font-bold text-center text-3xl">
        Note your important todos
      </h1>
      <AddTodo refetch={refetch} />
      <Todos todos={todos} refetch={refetch} />
    </div>
  );
}

export default App;
