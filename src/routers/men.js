const express = require("express");
const router = new express.Router();
const MenRanking = require("../models/mens");


router.post("/mens", async (req, res) => {
    try {
      const createRecord = new MenRanking(req.body);
      const insertingData = await createRecord.save();
      res.status(201).send(insertingData);
  
      console.log(createRecord);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  });
  
  // Reading all documents
  
  router.get("/mens", async (req, res) => {
    try {
      const getMens = await MenRanking.find({}).sort({"ranking": 1});   //Sorted in ascending order
      res.send(getMens);
    } catch (error) {
      res.send(400).send(error);
    }
  });
  
  //  reading individual data
  router.get("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const showIndividual = await MenRanking.findById(_id);
      res.send(showIndividual);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  });
  
  // update individual
  router.patch("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateInfo = await MenRanking.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      res.send(updateInfo);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  });
  
  // delete data 
  router.delete("/mens/:id", async(req, res) => {
      try {
          const _id = req.params.id;
          const DeleteInfo = await MenRanking.findByIdAndDelete(_id)
          res.send(DeleteInfo);
        } catch (error) {
          res.status(500).send(error);
          console.log(error);
        }
  })

  module.exports = router;