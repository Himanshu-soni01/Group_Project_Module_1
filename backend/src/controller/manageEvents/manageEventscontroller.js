const express = require("express");
const creating = require("../../sequelize/models");
const table = creating.calendar;

const create = async (req, res, next) => {
  try {
    res.send("from");
  } catch (error) {
    res.status(400).send({ message: "duplicate" });
  }
};

const getevents = async (req, res) => {
  try {
    const gettingdata = await table.findAll();
    res.send(gettingdata);
  } catch (error) {
    console.log(error);
  }
};

const addevents = async (req, res) => {

  try {
    var event = await {
      title: req.body.title,
      eventType: req.body.event_type,
      startDate: req.body.start_date,
      endDate:
        req.body.end_date === undefined
          ? req.body.start_date
          : req.body.end_date,
      startTime: req.body.start_time,
      endTime: req.body.end_time,
      isAllDay:
        (req.body.start_time && req.body.end_time) === "" ? true : false,
      other_details: req.body.other_details,
    };

    const gettingdata = await table.create(event);
    res.send(gettingdata);
  } catch (error) {
    console.log(error);
  }
};

const deleteevents = async (req, res) => {
  try {
    const { id } = await req.params;
    await table.destroy({
      where: { id: id },
    });
    res.send({ message: "deleted successfulluy" });
  } catch (error) {
    console.log(error);
  }
};

const getUpdateEventData = async (req, res) => {
  try {
    const { id } = await req.params;
    const getData = await table.findAll({
      where: { id: id },
    });
    res.send(getData);
  } catch (error) {
    console.log(error);
  }
};

const updateevents = async (req, res) => {
  
  try {
    var event = await {
      eventType: req.body.event_type,
      title: req.body.title,
      startDate: req.body.start_date,
      endDate:
        req.body.end_date === undefined
          ? req.body.start_date
          : req.body.end_date,
      startTime: req.body.start_time,
      endTime: req.body.end_time,
      isAllDay:(req.body.start_time && req.body.end_time) === "00:00:00"? "1" : "0",
      otherDetails: req.body.other_details,
    };

    const { id } = req.params;
    await table.update(event, {
      where: { id: id },
    });
    res.send({ message: "updated successfulluy" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
  getevents,
  addevents,
  deleteevents,
  updateevents,
  getUpdateEventData,
};
