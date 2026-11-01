require("dotenv").config();
const bd= require("../Base de données/bd");
const even = require("../Routes/EventRoutes");

const PORT = process.env.PORT;

bd.connect((err) => {
    if(err){
        console.error('Erreur connection BD :' , err);
        return;
    }
    console.log('connecté à MySQL');

    even.listen(PORT , () => {
    console.log(" Service connect sur le port "+ PORT);
    });
    
});