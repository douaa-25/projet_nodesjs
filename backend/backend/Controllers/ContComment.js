const bd=require("../Base de données/bd")

exports.getAllCom = (req, res) => {
  bd.query('SELECT * FROM commentaire', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getCommEvent = (req, res) =>{
    const idEvent= req.params.idEvent;

    bd.query('SELECT * FROM commentaire where idEvent = ? ',[idEvent],(err, results)=> {
        if(err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getCom=(req,res) =>{
    const idEvent= req.params.idEvent;
    const idPar= req.params.idPar;

    bd.query('SELECT * FROM commentaire where idEvent= ? and idPar= ?',[idEvent,idPar],(err,results) => {
        if(err) return res.status(500).json(err);
        if(results.length === 0) return res.status(404).json({msg : 'commentaire non trouver'})
        res.json(results[0]);
    })
}

exports.createCom=(req,res) =>{
    const {contenu, dateC} =req.body;
    const idEvent= req.params.idEvent;
    const idPar= req.params.idPar;

    bd.query(
        "INSERT INTO commentaire (idEvent, idPar, contenu, dateC) values (?,?,?,?)",[idEvent,idPar, contenu, dateC],(err,results) =>{
            if(err) return res.status(500).json(err);
            res.json({msg : "commentaire ajoutée"})
        }
    );
}

exports.deleteCom=(req,res) => {
    const codeCom = req.params.codeCom;
    
    bd.query(
        "DELETE FROM commentaire WHERE codeCom=?",[codeCom],(err,results) => {
            if (err) return res.status(500).json(err);
            res.json({msg : 'commentaire supprimée'});
        }
    );
}