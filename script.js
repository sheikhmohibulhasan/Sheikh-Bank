
        //Login button event handler
        var loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function(){
            var loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";
            var transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display = "block"; 
        })

        //Deposit button event handler
        var depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function(){
            var depositNumber = getInputNumber("depositAmount");

            updateSpanText("currentDeposit", depositNumber);
            updateSpanText ("currentBalance", depositNumber);

            /*var currentDeposit = document.getElementById("currentDeposit").innerText;
            var currentDepositNumber = parseFloat(currentDeposit);
            var totalDeposit = depositNumber + currentDepositNumber;
            document.getElementById("currentDeposit").innerText = totalDeposit;

            var currentBalance = document.getElementById("currentBalance").innerText;
            var currentBalanceNumber = parseFloat(currentBalance);
            var totalBalance = depositNumber + currentBalanceNumber;
            document.getElementById("currentBalance").innerText = totalBalance;*/

            document.getElementById("depositAmount").value = "";
        })
        //Withdraw button event handler
            var withdrawBtn = document.getElementById("addWithdraw");
            withdrawBtn.addEventListener("click", function(){
            var withdrawNumber = getInputNumber("withdrawAmount");
            updateSpanText("currentWithdraw", withdrawNumber);
            updateSpanText("currentBalance", -1*withdrawNumber);
            document.getElementById("withdrawAmount").value = "";
        })

        function getInputNumber(id){
            var amount = document.getElementById(id).value;
            var amountNumber = parseFloat(amount);
            return amountNumber;
        }


        function updateSpanText(id, addedNumber){
            var current = document.getElementById(id).innerText;
            var currentNumber = parseFloat(current);
            var totalAmount = addedNumber + currentNumber;
            document.getElementById(id).innerText = totalAmount;
        }