const router = require("express").Router();
const users = require("../Controllers/ContUsers");
const EvenCont =require("../Controllers/ContEvent");
const ResCont =require("../Controllers/ContReserv");
const ContComm = require('../Controllers/ContComment');

router.put("/:id",users.updateProfil);
router.patch("/:id",users.updateMotPass);
router.get('/event/accept', EvenCont.getAcceptEvent);
router.get("/event/:id", EvenCont.getEvent);


router.post('/reservation/:idPar/:idEvent',ResCont.ajoutRes);

router.post('/com/:idEvent/:idPar',ContComm.createCom);
router.get('/com/:idEvent/event',ContComm.getCommEvent);



module.exports = router;