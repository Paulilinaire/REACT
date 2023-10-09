let taskCount = 0

export class Task {
    
    constructor(text, deadline, isCompleteed) {
        this.id = taskCount++;
        this.text = text;
        this.deadline = deadline
        this.isCompleteed= isCompleteed
    }
    
}

export default Task