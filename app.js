const addForm = document.querySelector('.add');
const searchForm = document.querySelector('.search input');
const list = document.querySelector('.list');

const todoTemplate = todo => {
	const listItem = `
    <li class="list-group-item d-flex justify-content-between align-items center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
	list.innerHTML += listItem;
};

const filterTodos = term => {
	Array.from(list.children)
		.filter(item => {
			return !item.textContent.toLowerCase().includes(term);
		})
		.forEach(todo => {
			todo.classList.remove('d-flex');
			todo.classList.add('d-none');
		});

	Array.from(list.children)
		.filter(item => {
			return item.textContent.toLowerCase().includes(term);
		})
		.forEach(todo => {
			todo.classList.remove('d-none');
			todo.classList.add('d-flex');
		});
};

// Delete Todos
list.addEventListener('click', event => {
	if (event.target.classList.contains('delete')) {
		event.target.parentElement.remove();
	}
});

// Add Todo
addForm.addEventListener('submit', event => {
	event.preventDefault();
	const newTodo = addForm.addTodo.value.trim();
	if (newTodo.length) {
		todoTemplate(newTodo);
		addForm.reset();
	}
});

// Search Todo
searchForm.addEventListener('keyup', event => {
	const searchItem = searchForm.value.trim().toLowerCase();
	filterTodos(searchItem);
});
