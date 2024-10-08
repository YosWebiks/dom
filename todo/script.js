{/* <div class='td-wrap flex-center'>
        <label class='flex-center'>
            <input type='checkbox'>
            <p class='td'>blah</p>
        </label>
        <p class='del'>x</p>
</div> */}

// elements
const inp = document.querySelector('.controls input')
const btn = document.querySelector('.controls button')
const list = document.querySelector('.list')
const editInp = document.querySelector('.edit-inp')
const modal = document.querySelector('.modal-wraper')
const closeModal = document.querySelector('.close-modal')
const saveEditBtn = document.querySelector('.save-modal')

//
const saveToLocalStorage = title => {
    const arr = JSON.parse(localStorage.todos || "[]") 
    arr.push({ title, checked: false })
    localStorage.todos = JSON.stringify(arr)
    inp.value = ""
}

//
const updateLocalStorage = (title, checked) => {
    const arr = JSON.parse(localStorage.todos)
    arr.find(td => td.title === title).checked = checked
    localStorage.todos = JSON.stringify(arr)
}

//
const delFromLocalStorage = (title) => {
    const arr = JSON.parse(localStorage.todos)
    localStorage.todos = JSON.stringify(arr.filter(td => td.title !== title))
}

// load from localStorage
const loadFromLocalStorage = ()=> {
    const arr = JSON.parse(localStorage.todos) || []
    for (const td of arr) {
        createToDoSectionFromMemory(td)
    }
}

// completed even
const markCompleted = e => {
    e.target.checked ?
        e.target.nextSibling.classList.add("completed") :
        e.target.nextSibling.classList.remove("completed")
    updateLocalStorage(e.target.nextSibling.textContent, e.target.checked)
}

// completed even
const delToDo = e => {
    e.target.parentElement.remove()
    delFromLocalStorage(e.target.previousSibling.querySelector("p").textContent)
}

const createToDoSectionFromEvent = () => {
    createToDoSection(inp.value)
    saveToLocalStorage(inp.value)
}

const createToDoSectionFromMemory = (td) => createToDoSection(td.title, td.checked)

const addParentHover = e => e.target.parentElement.parentElement.classList.add("hovered")
const addParentHoverEdt = e => e.target.parentElement.parentElement.classList.add("edt-hovered")
const rmParentHover = e => e.target.parentElement.parentElement.classList.remove("hovered")
const rmParentHoverEdt = e => e.target.parentElement.parentElement.classList.remove("edt-hovered")

// open modal
const openEditModal = e => {
    modal.classList.add('flex-center')
    modal.classList.remove('hidden')
}

// open modal
const closeEditModal = e => {
    modal.classList.remove('flex-center')
    modal.classList.add('hidden')
}

// create section func
const createToDoSection = (title, checked = false) => {
    // create the elements
    const tdWrap = document.createElement('div')
    tdWrap.classList.add('td-wrap')
    tdWrap.classList.add('flex-center')
    const lbl = document.createElement('label')
    lbl.classList.add('flex-center')
    const cb = document.createElement('input')
    cb.type = 'checkbox'
    cb.addEventListener('change', markCompleted)
    cb.checked = checked
    const td = document.createElement('p')
    td.classList.add('td')
    checked && td.classList.add('completed')
    td.textContent = title
    const actnWrap = document.createElement('div')
    actnWrap.classList.add('flex-center')
    const del = document.createElement('p')
    del.classList.add('del')
    del.classList.add('flex-center')
    !checked && del.classList.add('del-completed')
    del.textContent = '🗑️'
    del.addEventListener('click', delToDo)
    del.addEventListener('mouseenter', addParentHover)
    del.addEventListener('mouseleave', rmParentHover)
    const edit = document.createElement('p')
    edit.textContent = '✏️'
    edit.classList.add('edt')
    edit.classList.add('flex-center')
    edit.addEventListener('click', openEditModal)
    edit.addEventListener('mouseenter', addParentHoverEdt)
    edit.addEventListener('mouseleave', rmParentHoverEdt)
    
    // structure
    lbl.appendChild(cb)
    lbl.appendChild(td)
    tdWrap.appendChild(lbl)
    actnWrap.appendChild(del)
    actnWrap.appendChild(edit)
    tdWrap.appendChild(actnWrap)
    list.appendChild(tdWrap)
}

//  event handler
btn.addEventListener('click', createToDoSectionFromEvent)
saveEditBtn.addEventListener('click', e => {closeEditModal()})
closeModal.addEventListener('click', closeEditModal)

loadFromLocalStorage()