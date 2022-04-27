const express =  require('express')

const app =  express()


app.get('/', (req,res)=>{
    return res.json({
        nombre: "Sebastian ",
        correo: "ssebastiang97"
    })
})


app.listen(4000,()=>{
    console.log("Escuchando en: http://localhost:4000")
})