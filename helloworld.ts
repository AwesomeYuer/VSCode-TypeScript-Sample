/*
tsc
 Important: To use tsconfig.json for the rest of this tutorial,
 invoke tsc without input files. 
 The TypeScript compiler knows to look at your tsconfig.json for project settings and compiler options.
 */
let message: string = 'Hello World';
console.log(message);

let birdWhisperer = new BirdWhisperer('coo-coo-coo...');
document.body.innerHTML = birdWhisperer.chirp();