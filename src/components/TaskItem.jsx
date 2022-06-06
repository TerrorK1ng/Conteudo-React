import {FaTimes} from 'react-icons/fa'

let TaskItem = ({ task, onDelete }) => {
    return (
        <div className="task">
            <h3>
                {task.texto}
                <FaTimes 
                style={{color: 'red', cursor: 'pointer'}}
                onClick = {() => onDelete(task.id)} 
                />
                
            </h3>
            
            <p>
                {task.dia}
                {task.horario}
            </p>
        </div>
    );
};

export default TaskItem;