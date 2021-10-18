var recipes = require('../recipes.json');
var router = require('express').Router();
router.get('/shopping-list/',(req,res)=>{
    res.status(400).json({
        message:'not allowed'
    });
});
router.get("/shopping-list/:id",(req,res)=>{
    const {id}=req.params;
    if(isNaN(id))
    {
        res.status(404).json({
            message:"NOT_FOUND"
        });
    }
    else if(id==null)
    {
        res.status(400).json({
            message:"Not allowed"
        });
    }
    else
    {
        let selectedItem=recipes.filter(recipe=>{
            return recipe.id===parseInt(id)
        });
        res.status(200).json({
            selectedItem
        });
    }
});
module.exports = router;

