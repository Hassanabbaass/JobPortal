const {addAdmin, getAdmin, updateAdmin,deleteAdmin} = require('../controllers/adminController')
const Router = require('express').Router;

// initialize express router
const adminRouter = Router();

// POST request to add a car
adminRouter.post('/add', addAdmin);

// GET request for a list of all cars 
adminRouter.get('/', getAdmin);

// PUT request to update a car 
adminRouter.put('/:id/update', updateAdmin);

// DELETE request to delete a car
adminRouter.delete('/:id/delete', deleteAdmin);

module.exports = adminRouter;