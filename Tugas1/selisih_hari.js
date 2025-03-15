// Menghitung selisih hari antara dua tanggal
function selisihHari(tanggal1, tanggal2) {
    const t1 = new Date(tanggal1);
    const t2 = new Date(tanggal2);
    const selisihWaktu = Math.abs(t2 - t1);
    return selisihWaktu / (1000 * 60 * 60 * 24);
}
console.log(selisihHari("2024-03-19", "2024-03-21")); // Output: 2
