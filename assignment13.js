console.log("1...............")
async function textFile(filename) {
    
    const mockFiles = {
        "camera_logs.txt": "log1.txt\nlog2.txt\nlog3.txt",
        "log1.txt": "1695709940692\n1695701068331\n1695701189163",
        "log2.txt": "1695809940692\n1695901068331\n1695901189163",
        "log3.txt": "1696009940692\n1696101068331\n1696101189163"
    };
    return mockFiles[filename];
}

// The main function that calculates the activity for a given day
async function activityTable(day) {
    // Read the list of log files
    let logFileList = await textFile("camera_logs.txt");
    const logFiles = logFileList.split("\n");

    // Initialize an array to store the counts of activity for each hour
    let hourlyActivity = new Array(24).fill(0);

    // Process each log file
    for (const logFile of logFiles) {
        // Read the contents of the log file (list of timestamps)
        const logData = await textFile(logFile);
        const timestamps = logData.split("\n").map(Number); // Convert each line to a number

        // Process each timestamp
        for (const timestamp of timestamps) {
            const date = new Date(timestamp);
            const logDay = date.getDay();   // Get the day of the week (0-6)
            const logHour = date.getHours(); // Get the hour of the day (0-23)

            
            if (logDay === day) {
                hourlyActivity[logHour]++;
            }
        }
    }

    return hourlyActivity;
}

function activityGraph(activityTable) {
    return activityTable.map((count, hour) => `${hour}: ${"#".repeat(count)}`).join("\n");
}

activityTable(1)  
    .then(table => console.log(activityGraph(table)));

/* Q2. REAL PROMISES
Rewrite the function from the previous exercise without async/await, using plain Promise methods.
function activityTable(day) {
// Your code here
}
activityTable(6)
.then(table => console.log(activityGraph(table)));

In this style, using Promise.all will be more convenient than trying to model a loop over the logfiles. In
the async function, just using await in a loop is simpler. If reading a file takes some time, which of
these two approaches will take the least time to run?
If one of the files listed in the file list has a typo, and reading it fails, how does that failure end up in
the Promise object that your function returns?*/

function textFile(filename) {
    const mockFiles = {
        "camera_logs.txt": "log1.txt\nlog2.txt\nlog3.txt",
        "log1.txt": "1695709940692\n1695701068331\n1695701189163",
        "log2.txt": "1695809940692\n1695901068331\n1695901189163",
        "log3.txt": "1696009940692\n1696101068331\n1696101189163"
    };
    return new Promise((resolve, reject) => {
        if (mockFiles[filename]) {
            resolve(mockFiles[filename]);
        } else {
            reject(new Error(`File ${filename} not found`));
        }
    });
}

function activityTable(day) {
    // Step 1: Read the list of log files
    return textFile("camera_logs.txt")
        .then(logFileList => {
            const logFiles = logFileList.split("\n");

            // Step 2: Read each log file, and use Promise.all to handle them concurrently
            const filePromises = logFiles.map(logFile => textFile(logFile));

            // Step 3: Wait for all files to be read
            return Promise.all(filePromises);
        })
        .then(logs => {
            // Initialize the hourly activity array
            const hourlyActivity = new Array(24).fill(0);

            // Step 4: Process each log's content
            logs.forEach(log => {
                const timestamps = log.split("\n").map(Number); // Convert timestamps to numbers

                timestamps.forEach(timestamp => {
                    const date = new Date(timestamp);
                    const logDay = date.getDay();
                    const logHour = date.getHours();

                    // Step 5: Count only entries for the specified day
                    if (logDay === day) {
                        hourlyActivity[logHour]++;
                    }
                });
            });

            return hourlyActivity;
        })
        .catch(error => {
            // Handle any errors (e.g., file not found)
            console.error("Error processing logs:", error.message);
            return new Array(24).fill(0); // Return empty activity if an error occurs
        });
}

function activityGraph(activityTable) {
    return activityTable.map((count, hour) => `${hour}: ${"#".repeat(count)}`).join("\n");
}


activityTable(6)  // 6 corresponds to Saturday
    .then(table => console.log(activityGraph(table)));



function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            // If there are no promises, resolve immediately with an empty array
            resolve([]);
            return;
        }

        let results = [];
        let resolvedCount = 0;

        // Loop over all promises
        promises.forEach((promise, index) => {
            // Ensure each promise is resolved or rejected
            Promise.resolve(promise)
                .then(result => {
                    // Store the result at the correct index
                    results[index] = result;
                    resolvedCount++;

                    // If all promises are resolved, resolve the main promise
                    if (resolvedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    // If any promise rejects, reject the main promise immediately
                    reject(error);
                });
        });
    });
}

// Test code

// Test with an empty array of promises
Promise_all([]).then(array => {
    console.log("This should be []:", array); // Expected output: []
});

// Test with some resolving promises
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}

Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array); // Expected output: [1, 2, 3]
});

// Test with one rejected promise
Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        } else {
            console.log("Caught rejection as expected:", error); // Expected output: "Caught rejection as expected: X"
        }
    });

