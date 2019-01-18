const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/clonpinterest', {
  useNewUrlParser: true
})
.then(db => console.log('BD está conectado '))
.catch(err => console.error(err));
