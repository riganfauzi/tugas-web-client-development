# Tugas mata kuliah Web Client Development

## 📌 Deskripsi Tugas 2

![gambar](images/tugas2.png)

#

1. Konversi Fahrenheit ke Celsius

Fungsi: konversiFahrenheitKeCelsius(f: number): string

Deskripsi: Fungsi ini mengubah suhu dari Fahrenheit ke Celsius menggunakan rumus:

Hasil dikembalikan dalam bentuk string dengan dua angka di belakang koma.

Contoh Penggunaan: 
console.log(konversiFahrenheitKeCelsius(100)); // Output: "37.78"

#

2. Konversi Centimeter ke Kilometer

Fungsi: konversiCmKeKm(cm: number): string

Deskripsi:
Fungsi ini mengonversi panjang dari centimeter ke kilometer dengan membagi angka dengan 100.000.

Contoh Penggunaan:
console.log(konversiCmKeKm(100000)); // Output: "1 km"

#

3. Cek Bilangan Genap atau Ganjil

Fungsi: apakahGenap(n: number): boolean

Deskripsi:
Fungsi ini memeriksa apakah suatu bilangan bulat n adalah genap atau tidak. Jika n habis dibagi 2, maka fungsi mengembalikan true, jika tidak maka false.

Contoh Penggunaan:
console.log(apakahGenap(1000)); // Output: true
console.log(apakahGenap(1001)); // Output: false

#

4. Menghapus Kemunculan Pertama dari Substring dalam String

Fungsi: hapusKemunculanPertama(teks: string, cari: string): string

Deskripsi:
Fungsi ini menghapus kemunculan pertama dari substring yang diberikan dalam sebuah string menggunakan replace().

Contoh Penggunaan:
console.log(hapusKemunculanPertama("Hello world", "ell")); // Output: "Ho world"

#

5. Cek Palindrom

Fungsi: apakahPalindrom(teks: string): boolean

Deskripsi:
Fungsi ini memeriksa apakah suatu string merupakan palindrom atau tidak. Palindrom adalah string yang tetap sama jika dibaca dari depan maupun belakang. Pemeriksaan dilakukan dengan membandingkan string asli dengan versi terbaliknya.

Contoh Penggunaan:
console.log(apakahPalindrom("madam")); // Output: true
console.log(apakahPalindrom("hello")); // Output: false