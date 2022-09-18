const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      includes: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, { include: [{ model: Product}], });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCat = await Category.create(req.body);
    res.status(200).json(newCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update(
      {
      category_name: req.body.category_name,
      },
      {
        where: {
        id: req.params.id
        },
      }
    );
    if (!updateCat[0]) {
      res.status(404).json({ message: 'No category found' });
      return;
    } 
    res.status(200).json('Category has been updated');
    } catch (err) {
      res.status(500).json(err)
    }
  });

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCat = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if(!deleteCat) {
      res.status(400).json({ message: 'No category found' });
      return;
    }
    res.status(400).json('Category has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
