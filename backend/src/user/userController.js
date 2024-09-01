const { Console } = require('console');
var userModel = require('./userModel');

var createUserControlerFn = async (req, res) => {
    try{
        Console.log(req.body)
        const body = req.body
        const userModelData = new userModel()
        userModelData.Fname = body.Fname
        userModelData.Lname = body.Lname
        userModelData.email = body.email
        userModelData.gender=body.gender
        userModelData.year =body.year
        userModelData.college_id=body.college_id
        userModelData.phone=body.phone
        userModelData.course=body.course
        userModelData.connection=body.connection
        await userModelData.save()

        res.status(200).send({
            "status": true, "message": "User Created Successfully"
        });
    }
    catch(error){
        res.status(400).send(error);
    }
}

module.exports = { createUserControlerFn };