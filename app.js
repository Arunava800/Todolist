const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search =document.querySelector(".search input");

const generateTemplate = todo =>
{
    const html =`
    <li class="list-group-item d-flex justify-content-between align-text-center">
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;
};
addForm.addEventListener('submit',event =>
{
    event.preventDefault();
    const todo =addForm.add.value.trim(' ');
    if(todo.length)
    {
        generateTemplate(todo);
    }
    addForm.reset();
   
});

// Delete To do's

list.addEventListener('click',event =>{
    if(event.target.classList.contains("delete"))
    {
        event.target.parentElement.remove();
    }
});

const filterTodos  = term =>{

    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'))
};
// Keyup event
search.addEventListener('keyup',() =>
{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});