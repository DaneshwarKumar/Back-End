import User from '../schema/user-schema.js';


// function to add the student data on mongodb 
export const addUser = async (request,response) => {
    const user = request.body;
    const newUser = new User(user);
    
    try{
        await newUser.save();
        response.status(201).json(newUser);
    }catch(error){
        response.status(409).json({message: error.message})
    }

}


// function to get the student data 
export const getUsers = async (request,response) => {
    try{
        const users = await User.find({});
        response.status(201).json(users);
    }catch(error){
        response.status(404).json({message: error.message})
    }

}



// function to get user data based on id 
export const getUser = async (request,response) => {
    try{
        // console.log(request.params.id);
        const user = await User.find({_id:request.params.id});
        console.log(user);
        // const user = await User.findById({request.params.id});
        response.status(201).json(user);
    }catch(error){
        response.status(404).json({message: error.message})
    }

}
