const Grocery = require("../model/Grocery");

//---------------------------------------------------------------------/ get-all-groceries controller /-----------

async function getAllGroceries(req, res){
    try{
        let foundAllGroceries = await Grocery.find({}).sort({priority: -1});
        res.json({payload: gotAllGroceries})
    }catch(e){
        res.json({message: "Error", error: e})
    }
}

//---------------------------------------------------------------------/ create-new-grocery controller /-----------

async function createGrocery(req, res){
    try{
        console.log(req.body)
        const newGrocery = new Grocery({
            grocery: req.body.grocery,
        })
        const createdGrocery = await newGrocery.save();
        res.json({payload: createdGrocery})
    }catch(e){
        res.json({message: "Error", error: e})
    }
}

//---------------------------------------------------------------------/ update-new-grocery-by-id controller /-----------

async function updateGroceryByID(req, res){
    try{
        const updatedGrocery = await Grocery.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({payload: updatedGrocery});
    }catch(e){
        res.json({message: 'Error', error: e})
    }
}

//---------------------------------------------------------------------/ delete-grocery-by-id controller /-----------

async function deleteGroceryByID(req, res){
    try{
        const deletedGrocery = await Grocery.findByIdAndRemove(req.params.id);
        res.json({payload: deletedGrocery})
    }catch(e){
        res.json({message: "Error", error: e})
    }
}

module.exports = {
    getAllGroceries,
    createGrocery,
    updateGroceryByID,
    deleteGroceryByID,
}








