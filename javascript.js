//console.log("Halo Saya Orang Ganteng")

//ini komentar satu baris
//console.log("baris ini dijalankan")

/* ini komentar
   beberapa baris */

// latihan javascript dasar - minggu 06
// kakulator nilai rapor di console

// 1. pesan pertama ke console
console.log("Halo! saya Habil")
console.log("ini latihan javascript pertamaku")

// 2. data siswa
const nama = "Habil"
const kelas = "X RPL B"
let nilaiTugas = 85;
let nilaiUTS = 78;
let nilaiUAS = 89;
let kehadiran = 90;

console.log (`Nama: ${nama}, kelas ${kelas} `);
console.log (`Nilai Tugas: ${nilaiTugas}, UTS: ${nilaiUTS}, UAS: ${nilaiUAS} `);

// 3. hasil nilai habil
const rataRata = (nilaiTugas + nilaiUTS + nilaiUAS) / 3;
const lulus = rataRata >= 75;
const dapatSertifikat = lulus &&kehadiran >= 80;

console.log (`Rata-rata nilai: ${rataRata.toFixed(1)}`);
console.log (`Lulus KKM: ${lulus}`);
console.log (`Dapat sertifikat: ${dapatSertifikat}`);

// predikat dengan if, else if, dan else let predikatNilai;

if (rataRata >= 90) {
    predikatNilai = "A"
} else if (rataRata >= 80) {
    predikatNilai = "B"
} else if (rataRata >= 70) {
    predikatNilai = "C"
} else  {
    predikatNilai ="D"
}

console.log(`predikat: ${predikatNilai}`);

// pesan kelulusan
if (lulus) {
    console.log("selamat, kamu lulus KKM!");
} else {
    console.log("tatap semangat, ikut remidial ya")
}