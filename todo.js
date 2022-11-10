const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среду',
    'Четверг',
    'Пятницу',
    'Субботу'
  ];

addEventListener('submit', (event)=>{
    event.preventDefault()
    const { target } = event
    const inputedTxt = target[0].value
    const allUl = document.querySelector('#myUL')
    if(inputedTxt){
        const listCreate = document.createElement('li')
        const listDate = new Date()
        listCreate.className = 'list-element'
        // listCreate.innerHTML = `${inputedTxt}, Создано в ${listDate.getFullYear()} год / ${listDate.getMonth()} мес /  ${listDate.getDay()} день <span class="close">Close</span>`
        listCreate.innerHTML = `${inputedTxt}, | Создано в ${days[listDate.getDay()]} ${listDate.getHours()}:${listDate.getUTCMinutes()} <span class="close">Close</span>`
        allUl.prepend(listCreate)
    } else{
        alert('Поле пустое')
    }
})

addEventListener('click', (event)=>{
    const { target } = event
    const closeSpan = document.querySelectorAll('.close')
    const createdTask = document.querySelector('li')
    for(let node of closeSpan){
        if(target === node){
            createdTask.remove()
        }
    }
})