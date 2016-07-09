var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');
var uuid = require('node-uuid');


router.get('/employees', function (req, res, next) {
    var employees = mocks.employees;
    if (employees) return res.json(employees);
    res.status(404).json({error: "not found"});
});

router.post('/employees', function (req, res, next) {
    var body = req.body;
    if(body){
        var employee = {
            id: uuid.v4(),
            name: body.name,
            email: body.email
        };
        mocks.employees.push(employee);
        console.log(req)
        res.json(mocks)
    } else {
        res.status(404).json({error: "not found"});
    }
});

router.delete('/employees/:id', function (req, res, next) {
    var employees = mocks.employees;
    var employee;
    for (i = 0; i < employees.length; i++) {
        if(employees[i].id == req.params.id) {
            employee = employees.splice( i, 1 )[0];
            break;
        }
    }

    if (employee) return res.json(employee);

    res.status(404).json({error: "not found"});
});

module.exports = router;
