var rutas = require("express").Router();

var {mostrarUsuarios, nuevoUsuario, borrarUsuario, buscarPorID} = require("../bd/usuariosBD");

rutas.post("/nuevoUsuario", async(req,res)=>{
    var usuarioValido = await nuevoUsuario(req.body);
    res.json(usuarioValido);
});

rutas.get("/mostrarUsuarios",async(req,res)=>{
    //res.send("Hola estas en raiz");
    var usuariosValidos=await mostrarUsuarios();
    console.log(usuariosValidos);
    res.json(usuariosValidos);
});

rutas.get("/buscarPorId/:id", async(req,res)=>{
    var usuarioValido = await buscarPorID(req.params.id);
    res.json(usuarioValido);
});

rutas.delete("/borrarUsuario/:id",async(req,res)=>{
    var usuarioBorrado=await borrarUsuario(req.params.id);
    res.json(usuarioBorrado);
});



module.exports=rutas;   