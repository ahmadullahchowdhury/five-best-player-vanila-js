function listItemCounter(){
    var liList = document.getElementById("myul").getElementsByTagName("li");
    var listLen = liList.length
    return listLen
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
    btn.style.backgroundColor = 'DarkGray';
}

function perPlayerExpense(){
    const len = listItemCounter()
    const perPlayerInputField =  document.getElementById("per-player-exp")
    const perPlayerInputFieldToInt = parseInt(perPlayerInputField.value)
    if( perPlayerInputField.value === '') {
        alert("Put Per Player Amount To Calculate")
    }{
        const totalPlayerExpense = perPlayerInputFieldToInt*len
        return totalPlayerExpense
    }
}

function totalTeamExpense(){
    const playerExpense =  perPlayerExpense()

    const managerInputField =  document.getElementById("manager-exp")
    const managerInputFieldToInt = parseInt(managerInputField.value)

    const coachInputField =  document.getElementById("coach-exp")
    const coachInputFieldToInt = parseInt(coachInputField.value)

    if(managerInputField.value === ''){
        alert("Put Manager Coach Amount To Calculate")
    }

    let totalExpense = playerExpense + managerInputFieldToInt + coachInputFieldToInt

    return totalExpense
}

function playerLeftCounter(){
    const listLength = listItemCounter()
    const playerLeftCountElm = document.getElementById("player-left-count")
    playerLeftCountElm.innerText = ((listLength+2)+5)-((listLength+1)+(listLength+1))
}

function addPlayerName(playerId, buttonId){
    const listLen = listItemCounter()
    if(listLen >= 5){
        const mainDiv = document.getElementById('selected-player-div')
        const p  = document.createElement('p')
        p.innerHTML =`<p class="mt-1 text-red-600 text-center">No Player Left!!</p>`
        mainDiv.appendChild(p)
        buttonDisable(buttonId)
    }else{
    addListItem(getPlayerName(playerId))
    buttonDisable(buttonId)
    }
    playerLeftCounter()

}

document.getElementById('btn-1').addEventListener('click', function(){
    addPlayerName('player-name-1','btn-1')
})

document.getElementById('btn-2').addEventListener('click', function(){
    addPlayerName('player-name-2','btn-2')
})

document.getElementById('btn-3').addEventListener('click', function(){
    addPlayerName('player-name-3','btn-3')

})

document.getElementById('btn-4').addEventListener('click', function(){
    addPlayerName('player-name-4','btn-4')
})

document.getElementById('btn-5').addEventListener('click', function(){
    addPlayerName('player-name-5','btn-5')
})

document.getElementById('btn-6').addEventListener('click', function(){
    addPlayerName('player-name-6','btn-6')
})

document.getElementById('player-cal-btn').addEventListener('click', function(){
    const playerExpense =  perPlayerExpense()
    const playerExpenseTextElm =  document.getElementById('player-expense')
    playerExpenseTextElm.innerText = playerExpense
})

document.getElementById('total-cal-btn').addEventListener('click', function(){
    const totalExpenseValue =  totalTeamExpense()
    const totalExpenseTextElm =  document.getElementById('total-expense')
    totalExpenseTextElm.innerText = totalExpenseValue
})