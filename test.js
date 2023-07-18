let SumU3and5 = (n) => {
    let total = 0;
    for(let i = 3;i<=n;i++){
        if(i % 3 ===0 || i%5===0){
            total +=i
        }
    }
    return total
}

console.log(SumU3and5(1000000007))

