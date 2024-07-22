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


interface Taskinfo {
    title: string, 
    completed: boolean
}

function displayTask(task: Taskinfo): void {

}

//Example usage
const task1Info: Taskinfo = {
    title: "Complete assignment", completed: false
}