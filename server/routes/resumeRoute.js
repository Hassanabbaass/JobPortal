const {addResume, getResume, updateResume,deleteResume} = require('../controllers/resumeController')
const Router = require('express').Router;

// initialize express router
const resumeRouter = Router();

// POST request to add a car
resumeRouter.post('/add', addResume);

// GET request for a list of all cars 
resumeRouter.get('/', getResume);

// PUT request to update a car 
resumeRouter.put('/:id/update', updateResume);

// DELETE request to delete a car
resumeRouter.delete('/:id/delete', deleteResume);

module.exports = resumeRouter;