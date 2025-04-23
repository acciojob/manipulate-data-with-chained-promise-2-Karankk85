// Function that returns a promise resolving to the array [1, 2, 3, 4] after 3 seconds
function getInitialArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter even numbers after 1 second
function filterEvenNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const even = array.filter(num => num % 2 === 0);
            document.getElementById("output").textContent = even.join(',');
            resolve(even);
        }, 1000);
    });
}

// Function to multiply numbers by 2 after 2 seconds
function multiplyByTwo(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const doubled = array.map(num => num * 2);
            document.getElementById("output").textContent = doubled.join(',');
            resolve(doubled);
        }, 2000);
    });
}

// Start the chained promise flow
getInitialArray()
    .then(filteredArray => filterEvenNumbers(filteredArray))
    .then(doubledArray => multiplyByTwo(doubledArray))
    .catch(err => console.error("Error:", err));
