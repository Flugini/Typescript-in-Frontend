"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }
}
exports.default = Task;
//Example Usage
const task1 = new Task("Complete Assignment", false);
console.log(task1);
