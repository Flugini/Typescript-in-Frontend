"use strict";
function displayTask(task) {
    const taskListElement = document.getElementById("task-list");
    if (taskListElement) {
        const taskItem = document.createElement("li");
        taskItem.textContent = task.title;
        taskItem.className = "task";
        if (task.completed) {
            taskItem.classList.add("completed");
        }
        taskListElement.appendChild(taskItem);
    }
}
class Task {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }
    //Method to mark the task as completed
    markCompleted() {
        this.completed = true;
    }
    //Methos to display task details
    showDetails() {
        return `Task: ${this.title}, Completed: ${this.completed}`;
    }
}
//Example Usage
const task1 = new Task("Complete Assignment", false);
console.log(task1);
//Example usage
const task1Info = {
    title: "Complete assignment", completed: false
};
task1.showDetails();
task1.markCompleted();
task1.showDetails();
