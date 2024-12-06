const tarefaInput = document.getElementById('tarefa');
const adicionarBtn = document.getElementById('adicionar');
const lista = document.getElementById('lista');

// Adicionar tarefa
adicionarBtn.addEventListener('click', () => {
    if (tarefaInput.value.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = tarefaInput.value;

    const removerBtn = document.createElement('button');
    removerBtn.textContent = 'Remover';
    removerBtn.style.marginLeft = '10px';
    removerBtn.addEventListener('click', () => li.remove());

    li.addEventListener('click', () => li.classList.toggle('completed'));

    li.appendChild(removerBtn);
    lista.appendChild(li);

    tarefaInput.value = '';
});

