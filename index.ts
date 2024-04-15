// Q95
// make a function uses a .filter()to return an array num greater than 10
function greaterThan10(num: number[]): number[] {
    return num.filter((n) => n > 10);
}
let numbers = [1, 2, 3, 14, 5, 16, 7, 8, 9, 20, 11, 12, 13, 14, 25];
console.log(greaterThan10(numbers));

