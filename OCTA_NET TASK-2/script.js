const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task-input');

let tasks = [];

// render tasks
function renderTasks() {
	taskList.innerHTML = '';
	tasks.forEach((task, index) => {
		const taskHTML = `
			<li>
				<input type="checkbox" id="task-${index}" ${task.completed? 'checked' : ''}>
				<label for="task-${index}">${task.text}</label>
				<button class="delete-btn">X</button>
			</li>
		`;
		taskList.innerHTML += taskHTML;
	});
}

// add task
addTaskBtn.addEventListener('click', () => {
	const newTaskText = newTaskInput.value.trim();
	if (newTaskText!== '') {
		tasks.push({ text: newTaskText, completed: false });
		newTaskInput.value = '';
		renderTasks();
	}
});

// delete task
taskList.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete-btn')) {
		const taskIndex = e.target.parentNode.id.split('-')[1];
		tasks.splice(taskIndex, 1);
		renderTasks();
	}
});

// toggle task completion
taskList.addEventListener('click', (e) => {
	if (e.target.type === 'checkbox') {
		const taskIndex = e.target.id.split('-')[1];
		tasks[taskIndex].completed = e.target.checked;
		renderTasks();
	}
});

// initialize tasks
renderTasks();