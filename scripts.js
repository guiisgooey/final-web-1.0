const display = document.querySelector('#display')

const inputSize = document.querySelector('#input-size')
const selectFont = document.querySelector('#select-font')
const inputColor = document.querySelector('#input-color')
const inputBgColor = document.querySelector('#input-bg-color')
const enterText = document.querySelector('#enter-text')
const selectWeight = document.querySelector('#select-weight')
const selectStyle = document.querySelector ('#select-style')

const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector('#show-color')
const showBgColor = document.querySelector('#show-bg-color')
const showWeight = document.querySelector('#show-weight')
const showStyle = document.querySelector('#show-style')

function handleInput() {
    // get the font size:
    const fontSize = inputSize.value + "px"
    const fontFamily = selectFont.valueS
    const fontColor = inputColor.value
    const bgColor = inputBgColor.value
    const text = enterText.value
    const fontWeight = selectWeight.value
    const fontStyle = selectStyle.value
    // Set the style 
    display.style.fontSize = fontSize
    display.style.fontFamily = fontFamily
    display.style.color = fontColor
    display.style.backgroundColor = bgColor
    display.style.fontWeight = fontWeight
    display.style.fontStyle = fontStyle
    display.innerHTML = text
    // Show the size
    showSize.innerHTML = fontSize
    showFont.innerHTML = fontFamily
    showColor.innerHTML = fontColor
    showBgColor.innerHTML = bgColor
    showWeight.innerHTML = fontWeight
    showStyle.innerHTML = fontStyle
}

inputSize.addEventListener('change', handleInput)
selectFont.addEventListener('change', handleInput)
inputColor.addEventListener('input', handleInput)
inputBgColor.addEventListener('input', handleInput)
enterText.addEventListener('input', handleInput)
selectWeight.addEventListener('change', handleInput)
selectStyle.addEventListener('change', handleInput)

