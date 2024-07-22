interface Taskinfo {
    title: string;
    completed: boolean;
}

function displayTask(task: Taskinfo): void {
    console.log("displayTask called with:", task)
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
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
    }

    markCompleted(): void {
        this.completed = true;
    }

    showDetails(): string {
        return `Task: ${this.title}, Completed: ${this.completed}`;
    }
}

// Example Usage
const task1 = new Task("Complete Assignment", false);
console.log(task1.showDetails()); // Print details to the console
task1.markCompleted();
console.log(task1.showDetails()); // Print updated details to the console

// Call displayTask to show the task in the HTML
const task1Info: Taskinfo = {
    title: "Complete Assignment",
    completed: true
};
displayTask(task1Info); // Display the task in the HTML

const task2Info: Taskinfo = {
    title: "Training",
    completed: false
};
displayTask(task2Info); // Display the task in the HTML
