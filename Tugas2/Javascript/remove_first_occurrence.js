function removeFirstOccurrence(str, search) {
    return str.replace(search, '');
}
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"