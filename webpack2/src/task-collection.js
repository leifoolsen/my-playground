class TaskCollection {

  constructor(tasks = []) {
    this.tasks_ = tasks;
  }

  dump() {
    console.log(this.tasks_);
  }
}

export default TaskCollection;
