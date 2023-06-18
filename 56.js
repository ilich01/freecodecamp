const List = (props) => {
  return (
    <div>
      <p>{props.tasks.join(", ")}</p>
    </div>
  );
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todayTasks = ["Task 1", "Task 2"]; // Sample tasks for today
    const tomorrowTasks = ["Task 1", "Task 2", "Task 3"]; // Sample tasks for tomorrow
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={todayTasks} />
        <h2>Tomorrow</h2>
        <List tasks={tomorrowTasks} />
      </div>
    );
  }
}
