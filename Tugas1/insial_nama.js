// Mengambil inisial dari nama dan mengubahnya menjadi huruf besar
function ambilInisial(nama) {
    return nama.split(" ").map(kata => kata[0].toUpperCase()).join("");
}
console.log(ambilInisial("John Doe")); // Output: JD