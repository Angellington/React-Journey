const array = [1, 2, 3, 4, 5];

const square = (array) => array.map((n) => n ** 2)

console.log(square(array))

const array2 = [10, 20, 30, 40, 50]

const filter = array2.filter((n) => n > 20)

console.log(filter)

const filter2 = array2.filter((n) => n % 2 == 0)

if(!filter2) {
    console.log('No even numbers')
}

if(filter2){
    console.log('trest')
}


const array3 = [1, 2, 3, 4, 5] 

const reduce = array3.reduce((acc, n) => acc + n)
console.log(reduce)

const sort = [12, 5, 3, 6,3, 62, 62, 74, 12, 5, 5]

const sortArray = sort.sort((a, b) => a - b)
console.log(sortArray)