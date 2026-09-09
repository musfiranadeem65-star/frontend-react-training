function TaskFilter( {currentFilter, onFilterChange}){
    return(
        <div className="card">
            <h3 className="section-title">Filter Tasks</h3>
            <div className="task-filter">
                <button 
                    className={`filter-btn ${currentFilter === 'All' ? 'active' : ''}`}
                    onClick={() => onFilterChange('All')}
                >
                    All Tasks
                </button>
                <button 
                    className={`filter-btn ${currentFilter === 'Completed' ? 'active' : ''}`}
                    onClick={() => onFilterChange('Completed')}
                >
                    Completed
                </button>
                <button 
                    className={`filter-btn ${currentFilter === 'Pending' ? 'active' : ''}`}
                    onClick={() => onFilterChange('Pending')}
                >
                    Pending
                </button>
        </div>
        </div>
    );
}
export default TaskFilter;