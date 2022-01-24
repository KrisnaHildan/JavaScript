//loadlibraryexpress
const bodyParser = require("body-parser")
const { response, request } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

app.get("/kubus/:sisi", (request, response) => {
    // tampung data
    let sisi = request.params.sisi

    let volume = sisi * sisi * sisi
    let lp = sisi * 6

    return response.json({
        message: `Volume Kubus adalah ${volume} dan luas permukaan kubus adalah ${lp}`
    })
})

app.get("/balok/:p/:l/:t", (request, response) => {
    // tampung data
    let p = request.params.p
    let l = request.params.l
    let t = request.params.t

    let volume = p * l * t
    let luas = 2 * [(p * l) + (p * t) + (l * t)]

    return response.json({
        message: `Volume Balok adalah ${volume} dan luas permukaan kubus adalah ${luas}`
    })
})

app.get("/limaspersegi/:a/:t/:s", (request, response) => {
    // tampung data
    let a = request.params.a
    let t = request.params.t
    let s = request.params.s

    let volume = 1/3 * s * s * t
    let luas = 4 * (1/2 * a * t) + (s * s)

    return response.json({
        message: `Volume Limas Persegi adalah ${volume} dan luas permukaannya adalah ${luas}`
    })
})

app.get("/bola/:r", (request, response) => {
    // tampung data
    let r = request.params.r

    let volume =  4/3 * Math.PI * r * r * r
    let luas = 4 * Math.PI * r * r

    return response.json({
        message: `Volume Bola adalah ${volume} dan luas permukaan bola adalah ${luas}`
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})