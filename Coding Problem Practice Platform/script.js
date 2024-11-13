const problems = [
    {
        id: 1,
        title: "Sum of Two Numbers",
        description: "Write a function that takes two numbers and returns their sum.",
        example: "function sum(a, b) { return a + b; }",
        testCases: [
            { input: [1, 2], expected: 3 },
            { input: [5, 7], expected: 12 },
            { input: [-1, 1], expected: 0 }
        ]
    },
    {
        id: 2,
        title: "Reverse a String",
        description: "Write a function that takes a string and returns it reversed.",
        example: "function reverseString(str) { return str.split('').reverse().join(''); }",
        testCases: [
            { input: "hello", expected: "olleh" },
            { input: "world", expected: "dlrow" },
            { input: "JavaScript", expected: "tpircSavaJ" }
        ]
    }
];

// Load problems into the dropdown and display them
function loadProblems() {
    const problemList = document.getElementById('problem-list');
    const problemSelect = document.getElementById('problem-id');

    problems.forEach(problem => {
        // Create problem card
        const problemCard = document.createElement('div');
        problemCard.className = 'problem';
        problemCard.innerHTML = `
            <h3>${problem.title}</h3>
            <p>${problem.description}</p>
            <p><strong>Example:</strong> ${problem.example}</p>
        `;
        problemList.appendChild(problemCard);

        // Create option for the select dropdown
        const option = document.createElement('option');
        option.value = problem.id;
        option.textContent = problem.title;
        problemSelect.appendChild(option);
    });
}

// Evaluate the submitted code against the test cases
function evaluateCode(problemId, userCode) {
    const problem = problems.find(p => p.id == problemId);
    let results = [];

    // Create a function from the user's code
    const userFunction = new Function('return ' + userCode)();

    // Test each case
    problem.testCases.forEach(testCase => {
        const result = userFunction(...testCase.input);
        results.push({
            input: testCase.input,
            expected: testCase.expected,
            actual: result,
            passed: result === testCase.expected
        });
    });

    return results;
}

// Handle form submission
document.getElementById('solution-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const problemId = parseInt(document.getElementById('problem-id').value);
    const userCode = document.getElementById('code').value;
    const resultDiv = document.getElementById('result');

    // Clear previous results
    resultDiv.innerHTML = '';

    // Evaluate the user's code
    const results = evaluateCode(problemId, userCode);

    // Display results
    results.forEach(result => {
        const resultMessage = document.createElement('div');
        resultMessage.textContent = `Input: ${JSON.stringify(result.input)} | Expected: ${result.expected} | Actual: ${result.actual} | ${result.passed ? 'Passed' : 'Failed'}`;
        resultMessage.style.color = result.passed ? 'green' : 'red';
        resultDiv.appendChild(resultMessage);
    });
});

// Load problems on page load
window.onload = loadProblems;