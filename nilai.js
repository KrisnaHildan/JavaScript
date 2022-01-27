const { request } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format //
app.use(express.json())
// JSON is STRING //

app.post("/rata2", (request, response) => {
    let data = request.body.data
    let lulus = [], tidak_lulus = []
   
    let rata_rata_semua_siswa = 0
    
    for (let i = 0; i < data.length; i++) {
        rata_rata_semua_siswa += (data[i].math + data[i].english) / (data.length * 2)
        
    }
    

    for (let i = 0; i < data.length; i++) {
        let rata_rata_siswa = (data[i].math + data[i].english) / 2
        if (rata_rata_siswa >= rata_rata_semua_siswa) {
            lulus.push(data[i].nama)
            
        } else {
            tidak_lulus.push(data[i].nama)
        }
        
    } 
    return response.json({
        Lulus : lulus,
        Tidak_Lulus : tidak_lulus,
        "Rata Rata Semua Siswa" : rata_rata_semua_siswa 
    })
})

app.listen(2010, () => {
    console.log('server run on port 2010');
})