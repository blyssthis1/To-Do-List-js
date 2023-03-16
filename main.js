

const todos=[
    {
        id:1,
        title: 'Laundry',
        description: 'Wash clothes'

    },
    {
        id:2,
        title: 'HW',
        description: 'Code'

    },
    {
        id:3,
        title: 'Gym',
        description: 'Upper body'

    },
    {
        id:4,
        title: 'Phonecalls',
        description: 'Call Moms'

    },
    {
        id:5,
        title: 'Bills',
        description: 'Pay Electricity'
    

    }

]

const tdContainer = document.getElementById('td')

for (const todo of todos ) {
    tdContainer.innerHTML += `
    <div class="card" id="${todo.id}">
        <h2 class ='title'>${todo.title}</h2>
        <p class = "description">${todo.description}</p>
    </div>
    `
}

for (const todo of todos) {
    const todoE1 = document.getElementById(todo.id)
    todoE1.addEventListener('click', () => {
        todoE1.remove(todo.title) })
}