// Use Fetch API to get the data from the JSON file
fetch('problems.json')
.then(response => {
    // Parse the JSON data
    return response.json();
})
.then(data => {
    var solution = data.problems[0].solution;

    // Use the parsed data (Now a JavaScript object)
    var isShown = false;
    var lastInt = null;
    document.getElementById('newQuestion').addEventListener('click', function() {
        var randomInt;
        
        do {
            randomInt = Math.floor(Math.random() * data.problems.length);
        } while (randomInt === lastInt && data.problems.length > 1);

        solution = data.problems[randomInt].solution;
        
        lastInt = randomInt;

        document.getElementById('question').innerHTML = data.problems[randomInt].name;
        document.getElementById('description').innerHTML = data.problems[randomInt].description;
        document.getElementById('number').innerText = data.problems[randomInt].QID;

        document.getElementById('solution').innerHTML = null;
        document.getElementById('showSolution').innerHTML = "Show Solution";
        isShown = false;
    });

    document.getElementById('showSolution').addEventListener('click', function() {
        if (!isShown) {
            document.getElementById('solution').innerHTML = solution;
            document.getElementById('showSolution').innerHTML = "Hide Solution";
            isShown = true;
        }
        else {
            document.getElementById('solution').innerHTML = null;
            document.getElementById('showSolution').innerHTML = "Show Solution";
            isShown = false;
        }
    });
})
.catch(error => {
    console.error('Error fetching the JSON data:', error);
});