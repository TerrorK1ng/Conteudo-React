import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';
import './App.css';

function App() {
  const [task, setTasks ] = useState ([
    {
        id: 1,
        texto: 'Ir ao Cinema',
        dia: '20 de Abril',
        horario: ' 12:30',
        lembrete: true,
    },
    {
        id: 2,
        texto: 'Consulta Médica',
        dia: '5 de Fevereiro',
        horario: ' 14:30',
        lembrete: true,
    },

    {
        id: 3,
        texto: 'Palestra da IBM',
        dia: '13 de Março',
        horario: ' 15:30',
        lembrete: false,
    }
  ]);

  const DeletaTarefa = (id) => {
    setTasks(task.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="tarefas" />
    {Tasks.length > 0 ? (
    <Tasks tasks={task} onDelete={DeletaTarefa} />
    ) : (
'Você não tem tarefas, pode tirar férias!'
)}
</div>
);
}

export default App;
