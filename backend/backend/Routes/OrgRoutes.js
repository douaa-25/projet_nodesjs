const router = require("express").Router();
const EvenCont =require("../Controllers/ContEvent");
const ResCont =require("../Controllers/ContReserv");

router.get('/event/:idOrg/org',EvenCont.getEventOrg);

router.post('/event/:idOrg',EvenCont.createEvent);
router.put('/event/:idEvent/mod',EvenCont.updateEvent);
router.delete('/event/:idEvent',EvenCont.deleteEvent);


router.patch("/reservation/:idRes", ResCont.updateStatusRes);
router.get("/reservations", ResCont.getAllRes);
router.get("/reservation/:idEvent",ResCont.getResrEvent);


module.exports = router;