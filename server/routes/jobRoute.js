const {addJob, getJob, updateJob,deleteJob} = require('../controllers/jobController')
const Router = require('express').Router;

// initialize express router
const jobRouter = Router();

// POST request to add a car
jobRouter.post('/add', addJob);

// GET request for a list of all cars 
jobRouter.get('/', getJob);

// PUT request to update a car 
jobRouter.put('/:id/update', updateJob);

// DELETE request to delete a car
jobRouter.delete('/:id/delete', deleteJob);

module.exports = jobRouter;