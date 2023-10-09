let taskCount = 0

export class Task {
    
    constructor(text) {
        this.id = taskCount++;
        this.text = text;
    }
    
}

export default Task