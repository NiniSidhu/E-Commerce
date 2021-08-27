const router = require('express').Router(); 
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {

    const category = await Category.findAll({
        include: {model:Product}
    });

    return res.status(200).json(category)

});

router.get('/:id', (req, res) => {
    Category.findByPk(req.params,id,{include:{model:Product}}).then((category) => {
        res.status(200).json(category);
    })
});

router.post('/', async(req, res) => {
    const newCat = await Category.create({
        category_name: req.body.category_name
    })
    return res.json(newCat)
});

router.post('/:id', async(req, res) => {
    const upCat = await Category.update({
        category_name: req.body.category_name
    },
    {
        where:{
            id:req.params.id
        }
    })
    return res.json(
    {
id:req.params.id, 
category_name: req.body.category_name
    }) 
});


router.delete('/:id', async(req, res) => {
    const delCat = await Category.destroy({where:{ id: req.params.id} });

    return res.send(`Category destroyed ID:${req.params.id}`)

});

module.exports = router; 