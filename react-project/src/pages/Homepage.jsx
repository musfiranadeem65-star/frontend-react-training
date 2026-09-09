import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  updateTask,
  toggleTaskComplete,
  deleteTask,
  setFilter,
} from "../redux/taskSlice";

import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import TaskList from "../components/TaskList";

function HomePage() {
  const dispatch = useDispatch();

  // Redux Store se tasks aur filter lena
  const { tasks = [], filter = "All" } = useSelector(
    (state) => state.taskState || state.tasks || {}
  );

  const [editingTask, setEditingTask] = useState(null);

  function handleSaveTask(title, date) {
    if (editingTask) {
      dispatch(updateTask({ id: editingTask.id, title, date }));
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        date,
        completed: false,
      };
      dispatch(addTask(newTask));
    }
  }

  
  const filteredTasks = (tasks || []).filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <>
      <TaskForm onSaveTask={handleSaveTask} editingTask={editingTask} />

      <TaskFilter
        currentFilter={filter}
        onFilterChange={(newFilter) => dispatch(setFilter(newFilter))}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleComplete={(id) => dispatch(toggleTaskComplete(id))}
        onDeleteTask={(id) => dispatch(deleteTask(id))}
        onEditTask={setEditingTask}
      />
    </>
  );
}

export default HomePage;