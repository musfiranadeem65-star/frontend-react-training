function TaskList({tasks, onToggleComplete,onDeleteTask,onEditTask}){
    return(
        <div className="card">
        <div className="task-list">
            <h2 className="section-title">Task List</h2>
            <ul className="task-list">
            {tasks.map((task) => (
                    <li key={task.id} className="task-item">
                        <div className="task-left">
                            <span 
                                className={`check-icon ${task.completed ? 'checked' : ''}`}
                                onClick={() => onToggleComplete(task.id)}
                            >
                                {task.completed ? '✓' : ''}
                            </span>
                            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                                {task.title}
                            </span>
                        </div>
                        
                        <div className="task-right">
                            <span className="task-date">{task.date}</span>
                            <button className="btn-action complete" onClick={() => onToggleComplete(task.id)}>
                                ✓ Complete
                            </button>
                            <button className="btn-action edit" onClick={() => onEditTask(task)}>
                                ✎ Edit
                            </button>
                            <button className="btn-action delete" onClick={() => onDeleteTask(task.id)}>
                                🗑 Delete
                            </button>
                        </div>
                    </li>
                ))}
               </ul>
               <div className="encouragement-box">
                <span className="box-icon">📋</span>
                <div>
                    <strong>You're doing great!</strong>
                    <p>Keep adding and completing tasks.</p>
                </div>
                </div>
        </div>
        </div>
    );
}
export default TaskList;