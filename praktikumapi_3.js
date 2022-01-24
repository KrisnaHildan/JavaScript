// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

app.use(express.json())

// Desimal -> biner ==> Number(decimal).toString(2)
// Biner -> Oktal ==> parseInt(binary, 2).toString(8);

app.post("/convert/desimal/:desimal", (request, response) => {
    // tampung data
    let desimal = request.params.desimal
    
    let biner = Number(desimal).toString(2)
    let oktal = Number(desimal).toString(8)
    let hexadecimal = Number(desimal).toString(16)

    return response.json({
        biner: biner,
        oktal: oktal,
        hexadecimal: hexadecimal
    })
})

app.post("/convert/biner/:biner", (request, response) => {
    // tampung data
    let biner = request.params.biner
    
    let desimal = parseInt(biner, 2).toString(10);
    let oktal = parseInt(biner, 2).toString(8);
    let hexadecimal = parseInt(biner, 2).toString(16);

    return response.json({
        desimal: desimal,
        oktal: oktal,
        hexadecimal: hexadecimal
    })
})

app.post("/convert/oktal/:oktal", (request, response) => {
    // tampung data
    let oktal = request.params.oktal
    
    let desimal = parseInt(oktal, 8).toString(10);
    let biner = parseInt(oktal, 8).toString(2);
    let hexadecimal = parseInt(oktal, 8).toString(16);

    return response.json({
        desimal: desimal,
        biner: biner,
        hexadecimal: hexadecimal
    })
})

app.post("/convert/hexadecimal/:hexadecimal", (request, response) => {
    // tampung data
    let hexadecimal = request.params.hexadecimal
    
    let desimal = parseInt(hexadecimal, 16).toString(10);
    let biner = parseInt(hexadecimal, 16).toString(2);
    let oktal = parseInt(hexadecimal, 16).toString(8);

    return response.json({
        desimal: desimal,
        biner: biner,
        oktal: oktal
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})