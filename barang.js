const { response } = require("express")
const express = require("express")
const app = express()

//set to read request data from json format
app.use(express.json())
// JSON is indeed a String Type

app.post("/diskon" ,(request, response) => {
    // storing the request data 

    var data =  request.body.barang 
    var totalHarga = 0
    var totalBarang = 0

    // Menghitung jumlah barang yang dibeli
for (let i = 0; i < data.length; i++) {
   totalBarang += data[i].qty
}

// menghitung jumlah harga keseluruhan
for (let l = 0; l < data.length; l++) {
   total = data[l].harga * data[l].qty

   if (data[l].min_discount <= data[l].qty) {
      total -= total * data[l].discount
   }else { }
   totalHarga += total
}


 return response.json ({

    totalBarang : `Total semua barang adalah ${totalBarang}` ,
    totalHarga : `Total harga barang adalah ${totalHarga.toLocaleString()}` 


 })

})

 app.listen(8000, () => {
    console.log(`Server run on port 8000`);
 })