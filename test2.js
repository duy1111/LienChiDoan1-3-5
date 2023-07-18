let sumU = (num,n) => {
    let temp = parseInt(n/num)
    return num*((temp*(temp+1))/2)
}

let SumU3and5 = (n) => {
    let sum = sumU(3,n) + sumU(5,n) - sumU(15,n) 
    return sum
}

console.log(SumU3and5(1000000007))