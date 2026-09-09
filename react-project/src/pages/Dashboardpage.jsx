import {useSelector} from "react-redux";
function DashboardPage() {
  const {tasks} = useSelector((state) => state.taskState);
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="dashboard">
      <h2 className="section-title">Dashboard</h2>

      <div className="dashboard-cards">
        <div className="card dashboard-card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="card dashboard-card">
          <h3>Completed Tasks</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="card dashboard-card">
          <h3>Pending Tasks</h3>
          <p>{pendingTasks}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;