import {useState,useEffect} from 'react';
function TaskForm({ onSaveTask, editingTask }){
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDate(editingTask.date);
        }
    }, [editingTask]);

    function handleSubmit(event){
        event.preventDefault();
        if(title.trim()===""){
            return;
        }
        onSaveTask(title, date);
        setTitle('');
        setDate('');
    }

    return (
       <div className="card">
        <h2 className="card-heading">{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Enter task" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button type="submit" className=" btn-primary">{editingTask ? 'Update Task' : 'Add Task'}</button>
        </form>
        </div>
    );
}
export default TaskForm;