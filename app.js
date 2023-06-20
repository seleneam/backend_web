const express = require ("express"); 
const app = express();

const cors = require("cors"); //solucion error front con back
app.use(cors());

const fs = require("fs"); //trabajar con archivos 
const https = require ("https"); //servidor seguro

process.env.port = 4000;

const privateKey = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");

const Rutas = require ("./routes");
app.use(Rutas);

const credenciales = {
    key: privateKey,
    cert: certificado,
    passphrase: "a1234567"
};

const httpServidor = https.createServer(credenciales,app); 
httpServidor.listen(process.env.port,() => {
    console.log("Index on port", process.env.port);
});

// const models = require('./models');

// const consultaPropiedades = async () => {
//     r = await models.Propiedad.findAll();
//     await r.forEach(p => {
//         console.log(p.dataValues);
//     });
//     models.sequelize.close();
// }

// const agregarPropietarios = async () => {
//     const prop = await models.Propiedad.findByPk(1);
//     const persona1 = await models.Persona.findByPk(2);
//     const persona2 = await models.Persona.findByPk(1);

//     await prop.addPropietarios([persona1, persona2]);
//     const propietarios = await prop.getPropietarios();
//     await propietarios.forEach(p => {
//         console.log(p.name);
//     });
//     models.sequelize.close();
// }

// agregarPropietarios();