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
    res.status(404).json('No data found: Products table could not be built');
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
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
    res.status(404).json('No data found: Product ID could not be found');
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: tag.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(tag);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
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
    .then((tag) => {
      if (req.body.tagIds && req.body.tagIds.length) {

        Tag.findAll({
          where: { tag_id: req.params.id }
        }).then((productTags) => {
          // create filtered list of new product_ids
          const productTagIds = productTags.map(({ product_id }) => product_id);
          const newProductTags = req.body.tagIds
            .filter((product_id) => !productTagIds.includes(product_id))
            .map((product_id) => {
              return {
                tag_id: req.params.id,
                product_id,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags
            .filter(({ product_id }) => !req.body.tagIds.includes(product_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: 'No data found: Tag was NOT updated'});
    });
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tagData = await Tag.destroy(
      {where: {
      id: req.params.id
      } 
  })  
  res.status (200).json(tagData) 
  }catch(err){
    res.status(404).json('No data found: Tag was NOT deleted');
  }
});

module.exports = router;
