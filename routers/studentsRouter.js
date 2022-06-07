const express = require("express");
let studentsRouter = express.Router();

let studentsArray = [
    {id: 1, fullName: "Bayan", age: 17},
    {id: 2, fullName: "Madina", age: 19}
];

studentsRouter.get('/', (request, response) => {
    response.send(studentsArray);
});

studentsRouter.post('/', (request, response) => {
    let {id, fullName, age} = request.body;
    let newStudent = {id, fullName, age};
    studentsArray.push(newStudent);
    response.status(200).send("New student added")
});

module.exports = studentsRouter;