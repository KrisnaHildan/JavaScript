// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// endpoint kedua: hitung BMI
// request data: tinggi, berat
// response data: nilai BMI dan status BMI

// setting agar dapat membaca data request dgn  format json

app.use(express.json())

app.post("/bmi", (request, response) => {
    // tampung data tinggi dan berat
    let nama = request.body.nama
    let tinggi = request.body.tinggi
    let berat = request.body.berat
    
    let bmi = berat/(tinggi * tinggi)
    let status = null

    if (bmi < 18.5) {
        status = 'Gizi Buruk'
    } else if (bmi >= 18.5 && bmi <25) {
        status = 'Ideal'
    } else if (bmi >= 25 && bmi <30) {
        status = 'Kelebihan Berat Badan'
    } else if (bmi >= 30) {
        status = 'Obesitas'
    }

    return response.json({
        nama: nama,
        tinggi: tinggi,
        berat: berat, 
        nilai: bmi,
        status: status
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})