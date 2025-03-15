function palindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(palindrome("madam")); // Output: true
console.log(palindrome("hello")); // Output: false