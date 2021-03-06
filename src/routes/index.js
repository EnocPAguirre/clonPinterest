const { Router } = require('express');
const router = Router();

const Image = require('../models/Image');

router.get('/', async (req, res) => {
  const images = await Image.find();
});
router.get('/upload', (req, res) =>{
  res.render('upload');
});

router.post('/upload', async (req, res) =>{
  const image = new Image();
  image.title = req.body.title;
  image.description = req.body.description;
  image.filename = req.file.filename;
  image.path = '/image/uploads/' + req.file.filename;
  image.originalname = req.file.originalname;
  image.mimetype = req.file.mimetype;
  image.size = req.file.size;

 await image.save();

  res.redirect('/');
});
router.get('/image/:id', (req, res) => {
  res.send('Profile Image');
});

router.get('/image/:id/delete', (req, res) =>{
  res.send('imagen Eliminada');
});


module.exports = router;
