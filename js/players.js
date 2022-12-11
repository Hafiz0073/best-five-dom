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

function addToSelectd(element) {
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children);

    const playerName = element.parentNode.parentNode.children[0].innerText;


    const selectedPlayer = {

        playerName: playerName
    }

    players.push(selectedPlayer.playerName);
    // console.log(players)
    // console.log(players.length)

    displaySelectedName(players);


}



