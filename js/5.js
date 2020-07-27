function max(a, b) {
    if(a > b){
        return a;
    } else {
        return b;
    }
}

function maxOfThree(a, b, c) {
    return max(a, max(b, c));
}

function isVowel(character) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(character);
}


function sum(nums) {
    return nums.reduce((curr, sum) => curr+sum, 0)
}

function multiply(nums) {
    return nums.reduce((curr, sum) => curr*sum, 1)
}

function reverse(str) {
    return str.split("").reverse().join("");
}

function findLongestWord(words) {
    words.sort((first, second) => {
        return second.length — first.length;
    });

    return words[0];
}

function findLongestWords(words, n) {
    words.sort((first, second) => {
        return second.length — first.length;
    });

    return words.slice[0, n];
}

function multiplyByTen(elements) {
    return elements.map((e) => e*10 );
}

function findThrees(elements) {
    return elements.filter((e) => e === 3 );
}

function multiply(nums) {
    return nums.reduce((curr, sum) => curr*sum, 1)
}

function filterLongWords(words, minSize) {
    return words.filter((word) => word.length > minSize)
}
