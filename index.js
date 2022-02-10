const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const urlMongoDb = "mongodb+srv://DGCheca:jaroso@mdbatlas.it8sj.mongodb.net/ApiRest?retryWrites=true&w=majority";

mongoose.connect(
    urlMongoDb,
    { 
        useNewUrlParser:true, 
        useUnifiedTopology: true, 
        useFindAndModifiy: false,
    }, 
    (err,res) =>{
        try {
            if (err) {
                throw err;
            } else {
                console.log("conexion a la base de datos correcta");

                app.listen(port, ()=> {
                    console.log(
                        "A tope con el servidor" + port
                        );
                });
                
            }
        } catch (error) {
            console.error(error);
        }
});