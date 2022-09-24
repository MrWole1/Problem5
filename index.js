let primeNumbers = [];

function isPrime(number) { // checks whether number is prime or not
    for(let i = 2; i <= Math.round(Math.sqrt(number)) + 1 ; i++) { // stops checking at 1/2 of number
        if (number % i === 0) return false;
    }
    return true;
}

function storePrimes(limit) {
    for(let i = 2; i < limit; i++) { // starts at 2
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
}

function findLargestSum() {
    let termsCount = 0;
    let sumOfTerms = 0;

    primeNumbers.forEach(currentSum => { // keeps track of possible sum
        primeNumbers.forEach((startNumber, startIndex) => { // keeps track of start index
            let consecutiveCount = 0;
            let consecutiveSum = 0;
            primeNumbers.forEach((prime, primeIndex) => { // iterates through primes
                if (primeIndex >= startIndex) { // applies start index
                    consecutiveCount++;
                    consecutiveSum += prime;
                    if (consecutiveCount > termsCount && consecutiveSum === currentSum) {
                        termsCount = consecutiveCount;
                        sumOfTerms = consecutiveSum;
                    }
                }
            })
        })
    })

    return {largestSum: sumOfTerms, termsCount: termsCount};
}

function findPrimes(count) {
    storePrimes(count)
    let results = findLargestSum();
    console.log("Largest sum'o'primes of prime consecutives under " + count + " is: " + results.largestSum + " with " + results.termsCount + " terms.");
}

findPrimes(1000000);