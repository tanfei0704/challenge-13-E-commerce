const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  await Tag.findAll({
    attributes: ["id", "tag_name"],
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
      through: "ProductTag",
    }, ],
  })
  .then((tagData) => {
    res.json(tagData);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
      through: "ProductTag",
    }],
  })
  .then((retrievedTag) => {
    res.json(retrievedTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.post('/', async(req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name,
  },{
    where: {
      id: req.params.id,
    },
  })
  .then((updateTag) => {
    res.json(updateTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(() => {
    res.json(`The tag were removed !!!`);
  })
  .catch((err) => {
    res.json(err);
  });
});

module.exports = router;
