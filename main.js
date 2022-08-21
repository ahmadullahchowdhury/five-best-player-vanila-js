function listItemCounter(){
    var liList = document.getElementById("myul").getElementsByTagName("li");
    var largo = liList.length
    return largo
}

function getPlayerName(playerId){
    const playerNameElm = document.getElementById(playerId)
    return playerNameElm.innerText
}

function addListItem(text){
    const list = document.getElementById("myul")
    const li = document.createElement('li')
    li.innerText = text
    list.appendChild(li)
}

function buttonDisable(btnId){
    const btn =  document.getElementById(btnId)
    btn.setAttribute('disabled', true)
}

document.getElementById('btn-1').addEventListener('click', function(){
    const largo = listItemCounter()
    if(largo >= 5){
        alert('you exceed player limit')
    }else{
    addListItem(getPlayerName('player-name-1'))
    buttonDisable('btn-1')
    }
})

document.getElementById('btn-2').addEventListener('click', function(){
    const largo = listItemCounter()
    if(largo >= 5){
        alert('you exceed player limit')
    }else{
    addListItem(getPlayerName('player-name-2'))
    buttonDisable('btn-2')
    }
})

document.getElementById('btn-3').addEventListener('click', function(){
    const largo = listItemCounter()
    if(largo >= 5){
        alert('you exceed player limit')
    }else{
    addListItem(getPlayerName('player-name-3'))
    buttonDisable('btn-3')
    }
})

document.getElementById('btn-4').addEventListener('click', function(){
    // const playerNameText =  getPlayerName('player-name-4')
    const largo = listItemCounter()
    if(largo >= 5){
        alert('you exceed player limit')
    }else{
    addListItem(getPlayerName('player-name-4'))
    buttonDisable('btn-4')
    }
})

document.getElementById('btn-5').addEventListener('click', function(){
    const largo = listItemCounter()
    if(largo >= 5){
        alert('you exceed player limit')
    }else{
    addListItem(getPlayerName('player-name-5'))
    buttonDisable('btn-5')
    }
})

document.getElementById('btn-6').addEventListener('click', function(){
    const largo = listItemCounter()
    if(largo >= 5){
        alert('you exceed player limit')
    }else{
    addListItem(getPlayerName('player-name-6'))
    buttonDisable('btn-6')
    }
})