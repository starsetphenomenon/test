function loadGrain(levels) {
    let counter = 0;
    for (let i = 0; i < levels.length - 1; i++) {
        let min = 0;
        if ((levels[i - 1] && levels[i + 1]) !== undefined && (levels[i - 1] && levels[i + 1]) > levels[i]) {
            if (levels[i - 1] > levels[i + 1]) {
                min = levels[i + 1]
                levels.length <= 3 ? counter += min - levels[i] : counter += levels[i - 1] - levels[i]
                levels[i] += levels[i - 1] - levels[i]
            } else {
                min = levels[i - 1]
                counter += min - levels[i]
                levels[i] += min - levels[i]
            }
        }
    }
    console.log(counter)
    return counter
}

loadGrain([4, 1, 3]) // 2
loadGrain([2, 1, 5, 2, 7, 4, 10]) // 7
loadGrain([2, 0, 1, 5, 2, 7]) // 6
loadGrain([2, 4, 2]) // 0
loadGrain([7, 4]) // 0
loadGrain([]) // 0