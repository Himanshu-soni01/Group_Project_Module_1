const express = require("express");
const {
  create,
  getevents,
  addevents,
  deleteevents,
  updateevents,
  getUpdateEventData,
} = require("../../controller/manageEvents/manageEventscontroller");
const { verifyuser } = require("../../middleware/authentication");

var router = express.Router();

router.get("/", verifyuser, create);

router.get("/getevent", getevents);

router.post("/addevent", addevents);

router.patch("/updateevent/:id", updateevents);

router.get("/getUpdateEventData/:id", getUpdateEventData);

router.delete("/deleteevent/:id", deleteevents);

module.exports = router;
