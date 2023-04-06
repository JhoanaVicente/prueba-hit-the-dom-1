function playInstrument(instrument){
    let audioSonidos = document.createElement('audio')
    audioSonidos.src = instrument
    audioSonidos.play()
}