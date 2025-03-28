import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(() => {
    const tasksStorage = localStorage.getItem('@task');
    return tasksStorage ? JSON.parse(tasksStorage) : [
      'Estudar para prova final',
      'Terminar TCC',
      'Agradecer professores'
    ];
  });

  useEffect(() => {
    localStorage.setItem('@task', JSON.stringify(tasks));
  }, [tasks]);

  function handleSubmit(e) {
    e.preventDefault();
    setTasks(prevTasks => [...prevTasks, input]);
    setInput('');
  }

  return (
    <div>
      <h1>User register!</h1>
      <form onSubmit={handleSubmit}>
        <label>Task name: </label><br/>
        <input 
          placeholder="Name of your task"
          value={input}
          onChange={ (e) => setInput(e.target.value) }
        /><br/>

        <button type="submit">Submit</button> 
      </form>

      <br/><br/>

      <div>
        <ul>
          {tasks.map( task => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
