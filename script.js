let todo = [];

function processRequest() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    const consoleDiv = document.getElementById('console');
    let consoleMessage = '';

    if (userInput === "quit") {
        consoleMessage = '<p>Quitting app...</p>';
        document.getElementById('userInput').disabled = true;
        document.querySelector('button').disabled = true;
    } else if (userInput === "list") {
        if (todo.length === 0) {
            consoleMessage = '<p>No tasks to display.</p>';
        } else {
            consoleMessage = '<p>--- Todo List ---</p>';
            todo.forEach((task, index) => {
                consoleMessage += `<p>${index + 1}: ${task}</p>`;
            });
            consoleMessage += '<p>-----------------</p>';
        }
    } else if (userInput === "add") {
        const task = prompt("Please enter the task you want to add:");
        if (task) {
            todo.push(task);
            consoleMessage = `<p>Task "${task}" added.</p>`;
        }
    } else if (userInput === "delete") {
        const idx = prompt("Please enter the task number to delete:");
        const index = parseInt(idx) - 1;
        if (index >= 0 && index < todo.length) {
            const deletedTask = todo.splice(index, 1);
            consoleMessage = `<p>Task "${deletedTask}" deleted.</p>`;
        } else {
            consoleMessage = '<p>Invalid task number.</p>';
        }
    } else {
        consoleMessage = '<p>Invalid request. Please enter "list", "add", "delete", or "quit".</p>';
    }

    consoleDiv.innerHTML += consoleMessage;
    document.getElementById('userInput').value = '';
    consoleDiv.scrollTop = consoleDiv.scrollHeight; // Scroll to the bottom
}
