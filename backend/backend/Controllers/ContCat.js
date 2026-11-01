const bd=require("../Base de données/bd");

exports.getCat=(req,res) =>{
    const idCat= req.params.idCat;
    bd.query('SELECT * FROM categorie where codeC= ?',[idCat],(err,results) => {
        if(err) return res.status(500).json(err);
        if(results.length === 0) return res.status(404).json({msg : 'categorie non trouver'})
        res.json(results[0]);
    })
}

exports.getAllCat= (req,res) => {
    bd.query('SELECT * FROM categorie', (err,results) => {
        if(err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.createCat = (req, res) => {
  const { nomCat } = req.body;
  bd.query(
    "INSERT INTO categorie (nomCat) VALUES (?)",[nomCat], (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ msg: "Catégorie ajoutée" });
    }
  );
};

exports.deleteCat = (req, res) => {
  const idCat = req.params.idCat;
  bd.query(
    "DELETE FROM categorie WHERE codeC = ?",[idCat],(err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: "Catégorie supprimée" });
    }
  );
};