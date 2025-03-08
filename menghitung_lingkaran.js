// Menghitung diameter, keliling, dan luas lingkaran
function hitungLingkaran(jariJari) {
    const diameter = 2 * jariJari;
    const keliling = 2 * Math.PI * jariJari;
    const luas = Math.PI * Math.pow(jariJari, 2);

    console.log(`diameter = ${diameter}, keliling = ${keliling.toFixed(4)}, luas = ${luas.toFixed(3)}`);
}
hitungLingkaran(5); 
// Output: diameter = 10, keliling = 31.4159, luas = 78.539