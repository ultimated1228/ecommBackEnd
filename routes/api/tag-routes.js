const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products', 
        },
      ]
    })
    res.status (200).json(tagData)    
  }catch(err){
    res.status(404).json('No data found: Tags table could not be built');
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products', 
        },
      ],
    });
    res.status (200).json(tagData)    
  }catch(err){
    res.status(404).json('No data found: Product ID could not be found');
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json( {error: 'No data found: Tag was NOT created'});
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: 'No data found: Tag was NOT updated'});
    });
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const deletedTag = await Tag.destroy(
      {where: {
      id: req.params.id
      } 
  })  
  res.status (200).json(deletedTag) 
  }catch(err){
    res.status(404).json('No data found: Tag was NOT deleted');
  }
});

module.exports = router;
