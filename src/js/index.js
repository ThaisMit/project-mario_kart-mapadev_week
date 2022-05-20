const characteres = document.querySelectorAll('.character')

characteres.forEach(character => {
  character.addEventListener('click', () => {
    const idSelect = character.attributes.id.value

    if (idSelect === 'luigi') return

    const characterSelect = document.querySelector('.select')
    characterSelect.classList.remove('select')
    character.classList.add('select')

    const imagePlayerOne = document.getElementById('character-player-one')

    imagePlayerOne.src = `./src/images/${idSelect}-car.png`

    const nameSelect = character.getAttribute('data-name')
    const namePlayerOne = document.getElementById('name-player-one')

    namePlayerOne.innerHTML = nameSelect
  })
})
