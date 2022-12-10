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
            exit;
        }

    }

    // console.log(displayName);


}

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
    // document.getElementById('player-name').innerText = players.length
    // const playerSelectedTable = document.getElementById('player-name');
    // const playerLi = document.createElement('li');
    // playerLi.classList.add('hover-bordered');
    // playerLi.innerHTML = `
    // <a>${playerName} </a>


    // `
    // playerSelectedTable.append(playerLi)
    // const playerAmount = players.length * 1000;

    // document.getElementById('player-amount').innerText = playerAmount;

    displaySelectedName(players);


}
