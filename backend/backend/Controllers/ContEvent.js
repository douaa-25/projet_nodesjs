const bd=require("../Base de données/bd");

exports.getAllEvents = (req, res) => {
  bd.query('SELECT * FROM evenement', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getEvent=(req,res) =>{
  const id= req.params.idEvent;
  bd.query('SELECT * FROM evenement where idEvent= ?',[id],(err,results) => {
    if(err) return res.status(500).json(err);
    if(results.length === 0) return res.status(404).json({msg : 'evenement non trouver'})
    res.json(results[0]);
  })
}

exports.getEventOrg=(req,res) =>{
    const idO=req.params.idOrg;
    bd.query('SELECT * FROM evenement where idOrg= ?',[idO],(err,results) =>{
        if (err) return res.status(500).json(err);
        res.json(results);
    })
}

exports.getAcceptEvent = (req, res) => {
  bd.query(
    "SELECT * FROM evenement WHERE statut = ?",["Accepté"],(err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
};

exports.createEvent = (req,res) => {
    const {titre, descriptions, date_E, lieu, image, codeC, prix_Billet}=req.body;
    const idOrg=req.params.idOrg;
    bd.query(
        "INSERT INTO EVENEMENT (titre, descriptions, date_E, lieu, image, codeC, idOrg, prix_Billet) values (?,?,?,?,?,?,?,?)",[titre, descriptions, date_E, lieu, image,codeC, idOrg, prix_Billet], (err, result) => {
                if (err) return res.statut(500).json(err);
                res.json({msg : "Event ajouté"})
            }
    )
}

exports.updateEvent = (req, res) => {
  const id = req.params.idEvent;
  const { titre, descriptions, date_E, lieu, image, codeC, prix_Billet} = req.body;
  bd.query(
    `UPDATE evenement 
    SET titre=?, descriptions=?, date_E=?, lieu=?, image=?, codeC=?, prix_Billet=?
    WHERE idEvent=?`,
    [titre, descriptions, date_E, lieu, image, codeC, prix_Billet, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Event modifié' });
    }
  );
};

exports.deleteEvent = (req, res) => {
  const id = req.params.idEvent;
  bd.query(
    'DELETE FROM evenement WHERE idEvent = ?',[id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Event supprimé' });
    }
  );
};

exports.updateStatusEvent = (req, res) => {
  const id = req.params.idEvent;
  const { statut } = req.body;
    bd.query(
    'UPDATE evenement SET statut = ? WHERE idEvent = ?',
    [statut, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Statut modifié' });
    }
  );
};

/*exports.partage=(req,res) => {
  const idEvent = req.params.idEvent;
  const url = "http://localhost:4200/event/${idEvent}"
  res.json({
    message : "lien partage généré",
    url : url
  })
  
}*/