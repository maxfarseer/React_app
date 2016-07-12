'use strict'

const router = require('express').Router();
const mocks = require('./mock');
const assign = require('object-assign');
const uuid = require('node-uuid');

router.get('/employees', function (req, res, next) {
    const employees = mocks.employees;
    if (employees) return res.json(employees);
    res.status(404).json({error: "not found"});
});

router.post('/employees', function (req, res, next) {
    const body = req.body;
    if(body){
        const employee = {
            id: uuid.v4(),
            name: body.name,
            email: body.email
        };
        const employees = mocks.employees;
        employees.push(employee);
        res.json(employees)
    } else {
        res.status(404).json({error: "not found"});
    }
});

router.delete('/employees/:id', function (req, res, next) {
    const employees = mocks.employees;
    let employee;
    for (let i = 0; i < employees.length; i++) {
        if(employees[i].id == req.params.id) {
            employee = employees.splice( i, 1 )[0];
            break;
        }
    }

    if (employee) return res.json(employee);

    res.status(400).json({error: "not found"});
});

router.put('/employees/:id', function (req, res, next) {
    const id = req.params.id
    let employees = mocks.employees;
    const body = req.body;
    if(body){
        const EditedEmployee = {
            id,
            name: body.name,
            email: body.email
        };

        for (let i = 0; i < employees.length; i++) {
            if(employees[i].id == id) {
                employees[i] = EditedEmployee
                res.json(employees)
                break;
            }
        }
        res.status(404).json({error: "id not found"});
    } else {
        res.status(400).json({error: "obj not found"});
    }

});

module.exports = router;
