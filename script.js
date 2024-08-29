const cardData = [
    { name: 'Ludmila', descripcion: 'agregar una descripcion', imgSrc: 'https://images.unsplash.com/photo-1723979304121-b581868e6521?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' },
    { name: 'Belen', descripcion: 'agregar una descripcion', imgSrc: '...' },
    { name: 'Rina', descripcion: 'agregar una descripcion', imgSrc: '...' },
    { name: 'Daiana', descripcion: 'agregar una descripcion', imgSrc: '...' },
]

const cardGroup = document.getElementById('card-group')

cardData.forEach((card) => {
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')
    const imgElement = document.createElement('img')
imgElement.src = card.imgSrc
imgElement.alt = card.name
imgElement.classList.add('card-img-top')

const hrElement = document.createElement('hr')

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')

const titleElement = document.createElement('h5')
titleElement.classList.add('card-title')
titleElement.textContent = card.name

const textElement = document.createElement('p')
textElement.classList.add('card-text')
textElement.textContent = card.description

cardBody.appendChild(titleElement)
cardBody.appendChild(textElement)
cardElement.appendChild(imgElement)
cardElement.appendChild(hrElement)
cardElement.appendChild(cardBody)

cardGroup.appendChild(cardElement)
})
