document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('todo-list');

    addBtn.addEventListener('click', function() {
        const task = input.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.onclick = function() {
                list.removeChild(li);
            };
            li.appendChild(removeBtn);
            list.appendChild(li);
            input.value = '';
        }
    });
});