
//function to count how many items in the list
function listItemCounter(){
    var liList = document.getElementById("myul").getElementsByTagName("li");
    var listLen = liList.length
    return listLen
}
//function to get player name by id
function getPlayerName(playerId){
    const playerNameElm = document.getElementById(playerId)
    return playerNameElm.innerText
}
//function to add player name in the list
function addListItem(text){
    const list = document.getElementById("myul")
    const li = document.createElement('li')
    li.innerText = text
    list.appendChild(li)  
}
//function to disable button after clicking it
function buttonDisable(btnId){
    const btn =  document.getElementById(btnId)
    btn.setAttribute('disabled', true)
    btn.style.backgroundColor = 'DarkGray';
}
//function to calculate per player expense and populate it the page
function perPlayerExpense(){
    const len = listItemCounter()
    const perPlayerInputField =  document.getElementById("per-player-exp")
    const perPlayerInputFieldToInt = parseInt(perPlayerInputField.value)
    if( perPlayerInputField.value === '') {
        alert("Put Per Player Amount To Calculate")
        return 0
    }{
        const totalPlayerExpense = perPlayerInputFieldToInt*len
        return totalPlayerExpense
    }
    
}
//function to total  player expense and populate it the page
function totalTeamExpense(){
    const playerExpense =  perPlayerExpense()

    const managerInputField =  document.getElementById("manager-exp")
    const managerInputFieldToInt = parseInt(managerInputField.value)

    const coachInputField =  document.getElementById("coach-exp")
    const coachInputFieldToInt = parseInt(coachInputField.value)

    if(managerInputField.value === ''){
        alert("Put Manager Coach Amount To Calculate")
        return 0
    }

    let totalExpense = playerExpense + managerInputFieldToInt + coachInputFieldToInt

    return totalExpense
}
//function to count how many player we have in hand to update
function playerLeftCounter(){
    const listLength = listItemCounter()
    const playerLeftCountElm = document.getElementById("player-left-count")
    playerLeftCountElm.innerText = ((listLength+2)+5)-((listLength+1)+(listLength+1))
}
//function to check if you have player left to add , 
//if it yes then it will another function to add player name
// other wise it will show error
function addPlayerName(playerId, buttonId){
    const listLen = listItemCounter()
    if(listLen >= 5){
        const deleteDiv = document.getElementById('player-left-text')
        deleteDiv.style.display = 'none'
        const mainDiv = document.getElementById('no-player')
        const p  = document.createElement('p')
        p.innerHTML =`<p class="mt-1 mb-2 text-red-600 text-center">No Player Left!!</p>`
        mainDiv.prepend(p)
        buttonDisable(buttonId)
    }else{
    addListItem(getPlayerName(playerId))
    buttonDisable(buttonId)
    }
    playerLeftCounter()
}

// selecting btn 1
document.getElementById('btn-1').addEventListener('click', function(){
    addPlayerName('player-name-1','btn-1')
})
// selecting btn 2
document.getElementById('btn-2').addEventListener('click', function(){
    addPlayerName('player-name-2','btn-2')
})
// selecting btn 3
document.getElementById('btn-3').addEventListener('click', function(){
    addPlayerName('player-name-3','btn-3')

})
// selecting btn 4
document.getElementById('btn-4').addEventListener('click', function(){
    addPlayerName('player-name-4','btn-4')
})
// selecting btn 5
document.getElementById('btn-5').addEventListener('click', function(){
    addPlayerName('player-name-5','btn-5')
})
// selecting btn 6
document.getElementById('btn-6').addEventListener('click', function(){
    addPlayerName('player-name-6','btn-6')
})


// function to update UI  player cost
document.getElementById('player-cal-btn').addEventListener('click', function(){
    const playerExpense =  perPlayerExpense()
    const playerExpenseTextElm =  document.getElementById('player-expense')
    playerExpenseTextElm.innerText = playerExpense
})
// function to update UI total player cost
document.getElementById('total-cal-btn').addEventListener('click', function(){
    const totalExpenseValue =  totalTeamExpense()
    const totalExpenseTextElm =  document.getElementById('total-expense')
    totalExpenseTextElm.innerText = totalExpenseValue
})