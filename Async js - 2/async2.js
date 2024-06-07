// promises

// States of Promises
// 1. => Pending
// 2. => Fulfilled
// 3. => Rejected

// Promise Constructor

const myPromise = new Promise(() => {
    // Perform an asynchronous task
    if( /* Task completed successfully */true ){
        // resolve with a value
        resolve('task completed');
    } else {
        // Reject with a reason/error
        reject('Task Failed');
    }
})

// Working with Promises:

myPromise
    .then((result) => {
        // Handle successful fulfillment
        console.log(result);
    })
    .catch((error) => {
        // Handle rejection/error
        console.log(error);
    })
    .finally(() => {
        // This happens regardless of the outcome either promise is resolved or rejected
        console.log('Task completed regardless of outcome.');
        //Perform cleanup tasks if needed

    })


// Using Promises with Fetch:
const url = 'https://jsonplaceholder.typicode.com/posts/3';
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network Response was not okay.');
        }

        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => 
    {
        console.error(error);
    });


// Promise Chaining:
const url2 = 'https://jsonplaceholder.typicode.com/posts/3';
fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error('Network Response was not OKAY!');
        }
        console.log(`Data fetched in promise chaining --> ${response}`);

        return response.json();
    })
    .then((data) => {

        // Perform additional processing or transformation of data
        const transformedData = data;

        // Make another fetch request based on transformed data
        const url3 = 'https://jsonplaceholder.typicode.com/posts/13'
        return fetch(url3
        //     , {
        //     method: 'GET',
        //     body: JSON.stringify(transformedData),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        );
    })  
    .then((response) => {
        if(!response.ok){
            throw new Error('Network Response was not okay');
        }
        console.log('Request Completed Successfully in promise chaining -->.');
    })
    .catch((error) => {
        console.error(error);
    });

// Async/Await:

async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network Response was not OKAY...')
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

fetchData();