function fahrenheitToCelsius(f: number): string {
    return ((f - 32) * 5 / 9).toFixed(2);
}
console.log(fahrenheitToCelsius(100)); // Output: 37.78
