document.getElementById('finance-form').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log('Button Clicked'); // This will log to the console to ensure the button is clicked

    const income = parseFloat(document.getElementById('income').value);

    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid income.");
        return;
    }

});


    // Define the percentages for each category
    const allocations = {
        groceries: 0.2, // 20%
        cleaning: 0.05, // 5%
        electricity: 0.1, // 10%
        family: 0.2, // 20%
        fun: 0.1, // 10%
        savings: 0.35, // 35%
    };

    // Calculate the amounts
    const groceries = (allocations.groceries * income).toFixed(2);
    const cleaning = (allocations.cleaning * income).toFixed(2);
    const electricity = (allocations.electricity * income).toFixed(2);
    const family = (allocations.family * income).toFixed(2);
    const fun = (allocations.fun * income).toFixed(2);
    const savings = (allocations.savings * income).toFixed(2);

    // Update the DOM with the calculated values
    document.getElementById('groceries').textContent = groceries;
    document.getElementById('cleaning').textContent = cleaning;
    document.getElementById('electricity').textContent = electricity;
    document.getElementById('family').textContent = family;
    document.getElementById('fun').textContent = fun;
    document.getElementById('savings').textContent = savings;

    // Show the results section
    document.getElementById('allocation-results').style.display = 'block';
});
