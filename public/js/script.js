const formUser = document.querySelector('form')
const inputImage = document.getElementById('imageUser')
const labelImage = document.querySelector('.imageLabel')
const buttonClosePopup = document.getElementById('closePopup')

inputImage.onchange = (e) => {
    const fileType = e.target.files[0].type

    if(fileType !== 'image/png' && fileType !== 'image/jpeg') {
        labelImage.innerText = 'Imagem inválida'
        labelImage.classList.add('error')
    } else {
        labelImage.innerText = 'Imagem selecionada'
        labelImage.classList.remove('error')
        labelImage.classList.add('selected')
    }

}

formUser.onsubmit = (e) => {

    e.preventDefault()
    let isFilled = false

    const inputName = document.forms['formUser']['name']
    const inputLength = inputName.value.length
    const spanName = inputName.nextElementSibling

    if(inputName.value === '') {
        isFilled = true
        inputName.classList.add('error')
        spanName.innerText = 'Preencha o campo nome!'
    } else {
        inputName.classList.remove('error')
        spanName.innerText = ''

        if(inputLength < 4 || inputLength > 12) {
           isFilled = true
           inputName.classList.add('error')
           spanName.innerText = 'Nome do usuário inválido!'
        } else {
            inputName.classList.remove('error')
            spanName.innerText = ''
        }
    }

    const inputAge = document.forms['formUser']['age']
    const spanAge = inputAge.nextElementSibling

    if(inputAge.value === '') {
        isFilled = true
        inputAge.classList.add('error')
        spanAge.innerText = 'Preencha o campo idade!'
    } else {
        inputAge.classList.remove('error')
        spanAge.innerText = ''
        if(inputAge.value < 18 || inputAge.value > 70) {
            isFilled = true
            inputAge.classList.add('error')
            spanAge.innerText = 'Idade inválida!'
        } else {
            inputAge.classList.remove('error')
            spanAge.innerText = ''
        }
    }

    const inputImage = document.forms['formUser']['image']
    const spanImage = inputImage.nextElementSibling
 
    if(inputImage.files.length === 0) {
        isFilled = true
        labelImage.classList.add('error')
        spanImage.innerText = 'Selecione uma imagem!'
    } else {
        if(labelImage.classList.contains('error')) {
            isFilled = true
            spanImage.innerText = 'Formato inválido!'
        } else {
            labelImage.classList.remove('error')
            spanImage.innerText = ''
        }
    }

    if(!isFilled) {
        openPopup()
    }
}

function openPopup () {
    document.getElementById('myPopup').style.display = 'flex'
}

function closePopup () {
    document.getElementById('myPopup').style.display = 'none'
    formUser.submit()
}

buttonClosePopup.onclick = closePopup