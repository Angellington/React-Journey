const prompt = require('prompt-sync')();

let last = 1

let multiply = (last, value) => {
    return last * value
}

while (true){
    let value = parseInt(prompt('Enter a number: '))

    if (value === 0){
        break
    }

    
    last = multiply(last, value)

    console.log("Result: " + last)
}


