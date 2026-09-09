import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, title: "Learn React", date: "2026-08-30", completed: true },
    { id: 2, title: "practice props", date: "2026-06-16", completed: false },
    { id: 3, title: "build project", date: "2026-06-17", completed: false },
 ],
 filter: "All",
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, title, date } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.date = date;
      }
    },
    toggleTaskComplete: (state, action) => {
      const existingTask = state.tasks.find((task) => task.id === action.payload);
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, updateTask, toggleTaskComplete, deleteTask, setFilter } =
  taskSlice.actions;

export default taskSlice.reducer;