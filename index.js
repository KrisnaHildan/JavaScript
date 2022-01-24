//loadlibraryexpress
const bodyParser = require("body-parser")
const { response, request } = require("express")
let express = require("express")

//inisiasi objek baru dari express
let app = express()

//endpoint pertama kita
app.get("/test", ($request, response) => {
    let kata = 'Be yourself and never surrender'
    return response.json({
        message : kata,
        nama : "jon",
        age : 21
    })
})


// endpoint kedua:hitung BMI
// request data: tinggi, berat
// response data: nilai BMI dan status: BMI

// setting agar dapat membaca data request dengan format json
app.use(express.json())
app.post("/bmi", (request, response) => {
    // Tampung data tinggi dan berat
    let tinggi = request.body.tinggi
    let berat = request.body.berat

    let bmi = berat / (tinggi * tinggi)

    let status = null
    if (bmi < 18.5) {
        status = 'kate mati'
    } else if(bmi >= 18.5 && bmi < 25){
        status = 'Pas'
    } else if (bmi >= 25 && bmi < 30) {
        status = 'Lemu'
    } else if (bmi >= 30){
        status = 'Obesitas Kopros'
    }

    return response.json({
        nilai: bmi,
        status: status
    })
})

// endpoint ketiga (request wuth GET Method)
app.get("/profil/:nama/:usia", (request, response) => {
    // tampung data yang akan dikirimkan
    let nama = request.params.nama
    let usia = request.params.usia

    let status = null
    if (usia < 10) {
        status = 'Bocil'
    } else if (usia >= 10 && usia <= 20) {
        status = 'Remaja'
    } else if (usia > 20 && usia < 50) {
        status = 'Dewasa'
    } else if (usia >= 50){
        status = 'Tua'
    }

    return response.json({
        message: `Saya ${nama} adalah ${status}`
    })
})


app.listen(8000, () => {
    console.log('server run on port 8000');
})