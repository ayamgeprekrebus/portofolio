// 1. Fungsi menghitung rata-rata
const hitungRataRata = (tugas, uts, uas) => {
    return (tugas + uts + uas) / 3;
};

// 2. Fungsi menentukan predikat
function predikat(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}

// 3. Mengambil elemen HTML
const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");
const tombol = document.querySelector("#hitung");
const hasil = document.querySelector("#hasil");

// 4. Menjalankan perhitungan saat tombol diklik
tombol.addEventListener("click", () => {
    const tugas = Number(inputTugas.value);
    const uts = Number(inputUts.value);
    const uas = Number(inputUas.value);

    if (
        inputTugas.value === "" ||
        inputUts.value === "" ||
        inputUas.value === ""
    ) {
        hasil.textContent = "Harap isi semua nilai terlebih dahulu.";
        return;
    }

    const rata = hitungRataRata(tugas, uts, uas);
    const grade = predikat(rata);

    hasil.textContent = `Rata-rata: ${rata.toFixed(1)}, predikat: ${grade}`;
});