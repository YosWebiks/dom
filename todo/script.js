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

// completed even
const markCompleted = e => {
    e.target.checked ?
        e.target.nextSibling.classList.add("completed") : 
            e.target.nextSibling.classList.remove("completed")
}

// completed even
const delToDo = e => {
    e.target.parentElement.remove()
}

// create section func
const createToDoSection = e => {
    // create the elements
    const tdWrap = document.createElement('div')
    tdWrap.classList.add('td-wrap')
    tdWrap.classList.add('flex-center')
    const lbl = document.createElement('label')
    lbl.classList.add('flex-center')
    const cb = document.createElement('input')
    cb.type = 'checkbox'
    cb.addEventListener('change', markCompleted)
    const td = document.createElement('p')
    td.classList.add('td')
    td.classList.add('td')
    td.textContent = inp.value
    const del = document.createElement('p')
    del.classList.add('del')
    del.classList.add('flex-center')
    del.textContent ='🗑️'
    del.addEventListener('click', delToDo)

    // structure
    lbl.appendChild(cb)
    lbl.appendChild(td)
    tdWrap.appendChild(lbl)
    tdWrap.appendChild(del)
    list.appendChild(tdWrap)
}

//  event handler
btn.addEventListener('click', createToDoSection)
