import Users from '../../../models/userModel'
import valid from '../../../utils/valid'
import bcrypt from 'bcrypt'
import { v4 as uuid } from "uuid";
import { connectDB } from "server/db";

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req, res) => {
    try{
        console.log(req.body)
        const { name, email, password, cf_password } = req.body


        const user = await Users.findOne({ email })
        if(user) return res.status(400).json({err: 'This email already exists.'})

// STEP 1 - Sync the user to ROQ
// the user reference (a reference to your user on ROQ - usually a userId or unique identifier) is required while creating the user on ROQ
        const userId = uuid();

        const roqUser = await roqClient.asSuperAdmin().createUser({
            user: {
                reference: userId,
                email,
                firstName: name,
                isOptedIn: true,
                active: true,
            },
        });


        const roqUserId = roqUser?.createUser?.id;
        if (!roqUserId) {
            throw new Error("Could not register on ROQ");
        }


        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = new Users({ 
            name, email, password: passwordHash, cf_password 
        })

        await newUser.save()
        res.json({msg: "Register Success!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}