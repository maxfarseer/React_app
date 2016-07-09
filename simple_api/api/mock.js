var uuid = require('node-uuid');

var employees = [
    {
        id: uuid.v4(),
        name: "Rob",
        email: "Rob@test.com"
    },
    {
        id: uuid.v4(),
        name: "Sonam",
        email: "Sonam@test.com"
    },
    {
        id: uuid.v4(),
        name: "Riccardo",
        email: "Riccardo@test.com"
    },
    {
        id: uuid.v4(),
        name: "Barack",
        email: "Barack@test.com"
    },
    {
        id: uuid.v4(),
        name: "George",
        email: "George@test.com"
    }
]


module.exports = {
    employees: employees
};