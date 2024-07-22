class Task {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
    }
}

export default Task;

//Example Usage

const task1 = new Task("Complete Assignment", false);
console.log(task1)