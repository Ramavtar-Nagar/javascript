// Introduction to blocking js

console.log('Message before alert');
alert('Hey, Blocking-js this side');
console.log('Have you met Blocking-js before me ?    :)');

// Asynchronomous Nature of JS
// Examples through APIs

// 1. = setTimeout
// syntax = setTimeout(callback, delay, arg1, arg2, ...);

function greet(name){
    console.log(`Hello ${name}, i am setTimeout API, nice to meet you :/`);
}

// Execute greet() with an argument after 2 seconds (2000milliseconds)
const greetTimeout = setTimeout(greet, 2000, "Lily")

// if we want we can also cancel the timeout before it executes
clearTimeout(greetTimeout);
console.log('Timeout is cleared');

// 2. = setInterval 
// syntax = setInterval(callback, interval[, arg1[, arg2[, ...]]])

function eve(name){
    console.log(`hey ${name}, i wish you have a great evening ahead.`);
}

// Greet with a name every 3 seconds (3000 milliseconds)
const greetInterval = setInterval(eve, 3000, "Akon");

// Stopping greetInterval after 10 seconds
setTimeout(() => {

    // Clearing interval using clearInterval()
    clearInterval(greetInterval)
    console.log('Interval Cleared');
}, 6000);

// Asynchronous HTTP Requests
// 1. = XMLHttpRequest (XHR)

// it has different processes as followed
// 1. =>
const xhr = new XMLHttpRequest();

// 2. =>
const url = 'https://jsonplaceholder.typicode.com/posts/1';
xhr.open('GET', url);

// 3. =>
xhr.onload = function(){
    // Handle successful response here
    const response = JSON.parse(xhr.responseText);
    console.log(response);
}

xhr.onerror = function(){
    // Handle error here
    console.log('An error has occured');
}

xhr.onprogress = function(event){
    // Track progress of request if needed
    console.log(`Loaded ${event.loaded} bytes of data`);
}
// ... Other event handlers can be set as well …

// 4. =>
xhr.send()