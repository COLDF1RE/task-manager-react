export function CustomSelect (option) {
    const elem = option.elem

    elem.onclick = function (event) {
        if (event.target.className == 'title') {
            toggle()
        }   else if (event.target.tagName == 'LI') {
            setValue (event.target.innerHTML, event.target.dataset.value)
            close()
        }
    }

    const isOpen = false

    //закрыть селект если клик не по нему
    function onDocumentClick(event) {
        if (!elem.contains(event.target)) close()
    }

    function setValue(title, value) {
        elem.querySelector('.title').innerHTML = title

        const widgetEvent = new CustomEvent('select', {
            bubbles: true,
            detail: {
                title: title,
                value: value,
            }
        })

        elem.dispatchEvent(widgetEvent)
    }

    function toggle() {
        if (isOpen) close()
        else open()
    }

    function open() {
        elem.classList.add('open')
        document.addEventListener('click', onDocumentClick)
        isOpen = true
    }

    function close() {
        elem.classList.remove('open')
        document.removeEventListener('click', onDocumentClick)
        isOpen = false
    }
}