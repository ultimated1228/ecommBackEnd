const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll({
      include: [Product]
    })
    res.status (200).json(categoryData)    
  }catch(err){
    res.status(404).json('No data found: Category table could not be built');
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    res.status (200).json(categoryData)    
  }catch(err){
    res.status(404).json('No data found: Category ID could not be found');
  }
});

router.post('/', async(req, res) => {
  // create a new category req.body
  try{
    const categoryData = await Category.create(req.body)
    res.status (200).json(categoryData)    
  }catch(err){
    res.status(404).json('No data found: Category was NOT created');
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
    const categoryData = await Category.update(req.body,
      {where: {
      id: req.params.id
      } 
  })
    res.status (200).json(categoryData)    
  }catch(err){
    res.status(404).json('No data found: Category was NOT updated');
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
    const categoryData = await Category.delete(
      {where: {
      id: req.params.id
      } 
  })  
  res.status (200).json(categoryData) 
  }catch(err){
    res.status(404).json('No data found: Category was NOT deleted');
  }
});

module.exports = router;