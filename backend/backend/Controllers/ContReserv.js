const bd=require("../Base de données/bd")

exports.ajoutRes=(req,res) =>{
  const {dateR, nbPlace, status_R} =req.body;
  const idEvent=req.params.idEvent;
  const idPar =req.params.idPar;
  bd.query(
    "INSERT INTO reservation (dateR,nbPlace, status_R, idPar, idEvent) values (?,?,?,?,?)",[dateR, nbPlace,"en attente", idPar, idEvent],(err,results) =>{
      if(err) return res.status(500).json(err);
      res.json({msg : "Reservation ajoutée"})
    }
  );
}

exports.updateStatusRes = (req, res) => {
  const idRes = req.params.idRes;
  const { status_R } = req.body;
  bd.query(
    'UPDATE reservation SET status_R = ? WHERE codeR = ?',[status_R, idRes],(err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Statut reservation est modifié' });
    }
  );
};

exports.getAllRes = (req, res) => {
  bd.query('SELECT * FROM reservation', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getResrEvent=(req,res) =>{
  const idEvent= req.params.idEvent;
  bd.query('SELECT * FROM reservation where idEvent= ?',[idEvent],(err,results) => {
    if(err) return res.status(500).json(err);
    if(results.length === 0) return res.status(404).json({msg : 'reservation non trouver'})
    res.json(results);
  })
}