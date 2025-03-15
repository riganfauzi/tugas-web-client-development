function hapusFirstOccurrence(str: string, search: string): string {
    return str.replace(search, '');
}
console.log(hapusFirstOccurrence("Hello world", "ell")); // Output: "Ho world"