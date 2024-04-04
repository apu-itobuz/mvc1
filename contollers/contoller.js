import data from "../model/userSchema.js";

class controller {
    async addUser(req, res) {
        const user = new data(req.body)
        await user.save()
        return res.send("data added")

    }

    async getAll(req, res) {
        const persons = await data.find();
        res.send({ persons })
    }


    async getUserById(req, res) {
        try {
            const userId = req.params.id
            const person = await data.findById(userId)
            res.send(person)
        } catch (err) {
            res.send("user does not exist")
        }
    }


    async getUserByRoll(req, res) {
        try {
            const rollno = req.params.roll
            const person = await data.find({ roll: rollno })
            res.send(person)
        } catch (err) {
            res.send("user does not exist")
        }
    }


    async editUser(req, res) {
        try {
            const userId = req.params.id
            const updatedPerson = await data.findByIdAndUpdate(userId, req.body, { new: true })
            res.send(updatedPerson)
        } catch (error) {
            res.send('id does not exist');
        }

    }

    async deleteUser(req, res){
            try{
            const userId = req.params.id
            const updatedPerson = await data.findByIdAndDelete(userId )
            res.send("person deleted successfully")}
            catch(error){
                res.send('id does not exist');
            }
        }

        async firstThree(req, res){
                const person = await data.find().limit(3);
                res.send(person)
                
            }


            async lastThree(req, res){
                    const person = await data.find().sort({updatedAt:-1}).limit(3);
                    res.send(person)
                    
                }


}

export default new controller()