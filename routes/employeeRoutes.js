const express = require("express");
const router = express.Router();

const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    searchEmployee
} = require("../controllers/employeeController");

// POST /employees - Create a new employee
router.post("/employees", createEmployee);

// GET /employees - Get all employees
router.get("/employees", getAllEmployees);

// GET /employees/search - Search employees by name or department
// NOTE: This must come before /employees/:id, otherwise Express treats "search" as an ID
router.get("/employees/search", searchEmployee);

// GET /employees/:id - Get an employee by ID
router.get("/employees/:id", getEmployeeById);

// PUT /employees/:id - Update an employee by ID
router.put("/employees/:id", updateEmployee);

// DELETE /employees/:id - Delete an employee by ID
router.delete("/employees/:id", deleteEmployee);

module.exports = router;
