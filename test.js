function loadGrain(levels) {
    let counter = 0;
    let min = 0;
    let minInd = 0;
    if (levels[0] > levels[levels.length - 1]) {
        min = levels[levels.length - 1]
        levels.reverse()
    } else {
        min = levels[0];
    }

    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] >= min) {
            min = levels[i]
            minInd = i;
            if (min > levels[levels.length - 1] && !noMoreMin(min, minInd, levels)) {
                let temp = []
                temp = levels.slice(minInd + 1, levels.length)
                min = 0;
                temp.forEach(el => {
                    if (el > min) {
                        min = el;
                    }
                })
            }
        } else {
            counter += min - levels[i]
            levels[i] += min - levels[i]
        }

    }
    console.log(levels)
    console.log(counter)
    return counter
}



loadGrain([4, 1, 3]) // 2
loadGrain([39, 9, 39, 42, 22, 20, 2, 26, 22, 48, 45]) // 148
loadGrain([30, 21, 28, 23, 26, 23, 46, 35, 28, 31, 48, 12, 13, 23, 1, 23, 4, 13, 47, 40, 9, 19, 14, 38, 40, 39]) // 393
loadGrain([2, 1, 5, 2, 7, 4, 10]) // 7
loadGrain([2, 0, 1, 5, 2, 7]) // 6
loadGrain([2, 4, 2]) // 0
loadGrain([7, 4]) // 0
loadGrain([]) // 0


function noMoreMin(min, minInd, arr) {
    let temp = []
    let result = false;
    temp = arr.slice(minInd, arr.length)
    temp.forEach(el => {
        if (el > min) {
            result = true;
        }
    })
    return result;
}