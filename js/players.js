const players = [];

const displaySelectedName = displayName => {
    // console.log(displayName)
    const displaySelectedPlayerName = document.getElementById('players-table');

    displaySelectedPlayerName.innerHTML = "";
    for (i = 0; i < displayName.length; i++) {
        const pName = players[i];
        if (displayName.length < 6) {

            // console.log(players[i])
            const trpLayer = document.createElement('tr');

            trpLayer.innerHTML = `
        <th>${i + 1}</th>
        <td>${pName}</td>
        `;
            displaySelectedPlayerName.appendChild(trpLayer);
        }
        else {
            alert('You have already selected 5 players')
            return
        }

    }

}
// document.getElementById('player-calculation').addEventListener('click', function () {
//     const playerInputField = document.getElementById('amount-input');
//     const playerInputFieldString = playerInputField.value;
//     const playerAmountValue = parseInt(playerInputFieldString)
//     // step-2 
//     const expencessPfield = document.getElementById('player-total');
//     const expencessPfieldString = expencessPfield.innerText;
//     const previouspalyerExpencess = parseInt(expencessPfieldString);
//     const currentPlayerExpencess = previouspalyerExpencess + (playerAmountValue * players.length);
//     expencessPfield.innerText = currentPlayerExpencess
//     playerInputField.value = "";
//     // console.log(currentPlayerExpencess);

//     // expencessPfield.innerText = "";

// })
// document.getElementById('managercoach-calculation').addEventListener('click', function () {
//     const mangerInputField = document.getElementById('manager-filed');
//     const mangerInputFieldString = mangerInputField.value;
//     const managerAmountValue = parseInt(mangerInputFieldString)

//     const coachInputField = document.getElementById('coach-filed');
//     const coachInputFieldString = coachInputField.value;
//     const coachAmountValue = parseInt(coachInputFieldString)

//     const managerCoachTotal = managerAmountValue + coachAmountValue;
//     console.log(managerCoachTotal)
//     // step-2 
//     const expencessPfield = document.getElementById('player-total');
//     const expencessPfieldString = expencessPfield.innerText;
//     const previouspalyerExpencess = parseInt(expencessPfieldString);
//     const coachManagerTotalExpencess = previouspalyerExpencess + managerCoachTotal;

//     const totalSystemExpencess = document.getElementById('staffplayer-total')
//     const totalSystemExpencessString = totalSystemExpencess.innerText;
//     const previoustotalSystemExpencess = parseInt(totalSystemExpencessString);

//     const currentToatalexpencess = coachManagerTotalExpencess + previoustotalSystemExpencess;

//     totalSystemExpencess.innerText = currentToatalexpencess

//     mangerInputField.value = "";
//     coachInputField.value = "";

// })

function addToSelectd(element) {
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children);

    const playerName = element.parentNode.parentNode.children[0].innerText;

    // console.log(playerButton);
    const selectedPlayer = {

        playerName: playerName
    }

    players.push(selectedPlayer.playerName);
    // console.log(players)
    // console.log(players.length)

    displaySelectedName(players);


}
