let panjang = 20.5 
let lebar = 30
let harga = 1500000
let ppn = 115/100

let total = (panjang * lebar ) * harga
total *= ppn

let akhir = Math.round (total)

console.log("Total " + akhir)