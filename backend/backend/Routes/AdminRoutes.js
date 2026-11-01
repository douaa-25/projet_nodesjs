const router = require("express").Router();
const users = require("../Controllers/ContUsers");
const EvenCont =require("../Controllers/ContEvent");
const ContCat = require("../Controllers/ContCat");
const ContComm = require("../Controllers/ContComment");

router.get("/users", users.getAllUsers);
router.get("/user/:id",users.getUser);
router.put("/users/:id", users.updateUser);
router.delete("/users/:id", users.deleteUser);
router.patch("/users/:id/status", users.updateStatus);

router.patch("/event/:idEvent/status", EvenCont.updateStatusEvent);
router.get('/event',EvenCont.getAllEvents);
router.get('/event/:idEvent',EvenCont.getEvent);

router.get('/cats',ContCat.getAllCat);
router.get('/cat/:idCat',ContCat.getCat);
router.post('/cat', ContCat.createCat);
router.delete('/cat/:idCat', ContCat.deleteCat);

router.get('/comm',ContComm.getAllCom);
router.get('/comm/:idEvent/:idPar/commentaire',ContComm.getCom);
router.delete('/com/:codeCom',ContComm.deleteCom);


module.exports = router;