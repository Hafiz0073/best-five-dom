document.getElementById('player-calculation').addEventListener('click', function () {
    const playerInputField = getInputFieldValueByID('amount-input');
    // const expencessPfield = getTextFieldValueByID('player-total');
    const playerExpencess = playerInputField * players.length;
    setTextElementValueByID('player-total', playerExpencess)

})
document.getElementById('managercoach-calculation').addEventListener('click', function () {

    const ManagerCost = getInputFieldValueByID('manager-filed');
    const coachCost = getInputFieldValueByID('coach-filed');
    const PlayerTotal = getTextFieldValueByID('player-total');
    const newExpense = ManagerCost + coachCost + PlayerTotal;

    // set value 
    // setTextElementValueByID('income-balance', newBalance);
    setTextElementValueByID('staffplayer-total', newExpense);
});