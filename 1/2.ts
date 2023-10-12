function c1(arr: number[]) {
    let i = 0, teamsTotal = [0, 0];

    while (i < arr.length) {
        teamsTotal[0] += arr[i];
        i += 2;
    }

    i = 1;
    while (i < arr.length) {
        teamsTotal[1] += arr[i];
        i += 2;
    }

    return teamsTotal;
}

function c2(arr: number[]) {
    let teamsTotal = [0, 0], i = 0;

    while (i < arr.length) {
        teamsTotal[i & 1] += arr[i];
        ++i;
    }

    return teamsTotal;
}

const arr = [60, 40, 55, 75, 64];

console.log(c1(arr), c2(arr));
