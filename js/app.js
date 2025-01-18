const fetchData = async () => {
    try {
        const response = await fetch('./empleados.json');
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        // console.error(error);
        return [];
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const datos = await fetchData();
    const tableBody = document.getElementById('table-body');

    const renderizarDatos = (datos = {}) => {
        datos.employees.forEach(employee => {
            const tr = document.createElement('tr');
            const tdId = document.createElement('td');
            const tdName = document.createElement('td');
            const tdEmail = document.createElement('td');
            const tdStatus = document.createElement('td');
            const tdDate = document.createElement('td');
            const tdButtons = document.createElement('td');

            tdId.textContent = employee.id;
            tdName.textContent = employee.name;
            tdEmail.textContent = employee.email;
            tdStatus.textContent = employee.status;
            tdDate.textContent = employee.date;

            tdId.classList = 'px-4 py-2'
            tdName.classList = 'px-4 py-2 text-nowrap'
            tdEmail.classList = 'px-4 py-2'
            tdStatus.classList = 'px-4 py-2'
            tdDate.classList = 'px-4 py-2  text-nowrap'
            tdButtons.classList = 'px-4 py-2 text-center'
            tdButtons.innerHTML = `
            
                <button class="btn btn-circle btn-text btn-sm" aria-label="Edit" id="button-editar">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16.92V21h4.08l11.36-11.36-4.08-4.08L4 16.92z" />
                    </svg>
                </button>

                <button class="btn btn-circle btn-text btn-sm" aria-label="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-8V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m4 0h-4m6 0h4" />
                    </svg>
                </button>
            `


            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdEmail);
            tr.appendChild(tdEmail);
            tr.appendChild(tdStatus);
            tr.appendChild(tdDate);
            tr.appendChild(tdButtons);
            
            const buttonEditar = tr.querySelector('#button-editar');

            buttonEditar.addEventListener("click", () => {
                window.location.href = `pages/editar.html?id=${employee.id}`;
                const main = document.getElementById('main-editar')
                const editarFormulario = document.createElement('form');

                const inputName = document.createElement('input');
                inputName.placeholder = 'Name';
                inputName.type = 'text';

                const inputEmail = document.createElement('input');
                inputEmail.placeholder = 'Email';
                inputEmail.type = 'email';

                const inputStatus = document.createElement('input');
                inputStatus.placeholder = 'Status';
                inputStatus.type = 'text'

                const inputDate = document.createElement('input');
                inputDate.type = 'date';

                const buttonGuardar = document.createElement('button');
                buttonGuardar.textContent = 'Guardar';
                buttonGuardar.type = 'submit';

                editarFormulario.appendChild(inputStatus);
                editarFormulario.appendChild(inputName);
                editarFormulario.appendChild(inputEmail);
                main.appendChild(editarFormulario);

            });
            tableBody.appendChild(tr);
        });
    }

    renderizarDatos(datos)
});
