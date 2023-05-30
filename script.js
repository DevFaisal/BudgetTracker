document.addEventListener('DOMContentLoaded', function () {
    const incomeDescription = document.getElementById("income-description");
    const sumbitBtnOfIncome = document.getElementById("incomeSubmit");
    let incomelistItems = document.getElementById("income-list");

    // income Section Starts 
    let incomes = [];
    let TotalAmount = 0;


    sumbitBtnOfIncome.addEventListener('click', function (event) {
        event.preventDefault();
        let incomeAmount = document.getElementById("income-amount").value;

        let item = {
            incomeDes: incomeDescription.value,
            incomeAmt: incomeAmount,
        }
        incomes.push(item)

        TotalAmount += parseFloat(incomeAmount);
        document.getElementById('income-total').innerHTML = TotalAmount;

        incomelistItems.innerHTML = "";
        incomeDescription.value = '';
        incomeAmount = '';

        for (let i = 0; i < incomes.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerText = incomes[i].incomeDes + " Amount: " + incomes[i].incomeAmt;
            incomelistItems.appendChild(listItem);
        }
        document.getElementById("budget-remaining").innerText = TotalAmount - totalExpense;
    });
    // ENDS HERE

    // Expenses Section Starts
    let expenses = [];
    let totalExpense = 0;
    const expenseDescription = document.getElementById("expense-description");
    const sumbitBtnOfExpense = document.getElementById("expenseSubmit");
    let expenseslistItems = document.getElementById("expense-list");
    sumbitBtnOfExpense.addEventListener('click', function (event) {
        event.preventDefault();
        let expenseAmount = document.getElementById("expense-amount").value;

        let item = {
            expenseDes: expenseDescription.value,
            expenseAmt: expenseAmount,
        }
        expenses.push(item)

        totalExpense += parseFloat(expenseAmount);
        document.getElementById('expense-total').innerHTML = totalExpense;

        expenseslistItems.innerHTML = "";

        for (let i = 0; i < expenses.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerText = expenses[i].expenseDes + " Amount: " + expenses[i].expenseAmt;
            expenseslistItems.appendChild(listItem);
        }
        document.getElementById("budget-remaining").innerText = TotalAmount - totalExpense;
        expenseDescription.value = '';
        expenseAmount.value = '';
    });

    // ENDS HERE

    document.getElementById("budget-remaining").innerText = TotalAmount - totalExpense;

});
