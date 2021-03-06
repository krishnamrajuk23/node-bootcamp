const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

//router.param('id', tourController.checkID);

router
  .route('/top-5')
  .get(tourController.aliasTopTours,tourController.getAllTours);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
  //.post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .put(tourController.updateTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
