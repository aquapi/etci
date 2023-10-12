function c1(arr: string[]) {
    arr.sort((x, y) => y.length - x.length);

    let maxLen = arr[0].length, i = 1;
    while (arr[i].length === maxLen) ++i;

    return arr.slice(0, i);
}

function c2(arr: string[]) {
    let maxLen = arr.reduce((x, y) => x.length > y.length ? x : y).length, i = 1;

    while (arr[i].length === maxLen) ++i;
    return arr.slice(0, i);
}

function c3(arr: string[]) {
    let maxLen = 0, str: string, res: string[] = [];

    for (str of arr)
        if (str.length > maxLen)
            maxLen = str.length;

    for (str of arr)
        if (str.length === maxLen)
            res.push(str);

    return res;
}

const arr = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

console.log(c1(arr), c2(arr), c3(arr));
