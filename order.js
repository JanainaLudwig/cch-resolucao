function getOrdered(numbers) {
    let numbersHash = {}
    numbers.forEach(num => {
        numbersHash[num] = true
    })
    
    let count = 0
    let initialVal = 0
    let sequence = []
    
    numbers.map((val) => {
        if (numbersHash[val-1]) {
            return
        }
    
        let currLen = 1
        currSequence = [val]
    
        while (numbersHash[val + currLen]) {
            currSequence.push(val + currLen)
            currLen++
        }
    
        if (currLen > count) {
            count = currLen
            initialVal = val
            sequence = currSequence
        }
    })

    return { count, sequence }
}

module.exports = getOrdered