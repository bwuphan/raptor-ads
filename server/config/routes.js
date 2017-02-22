const userController = require('./users/userController.js');
const listingController = require('./listings/listingController.js');
const authController = require('./auth/authController.js');

module.exports = (app, db, path, rootPath) => {
  // Routes for logging in and out
  app.post('/api/login', authController.logIn);
  app.post('/api/logout', authController.logOut);

  // Routes for all users
  app.get('/api/users', userController.getAll);
  app.post('/api/users', userController.createOne);

  // Routes for specific user
  app.get('/api/users/:id', userController.getOne);
  app.patch('/api/users/:id', userController.patchOne);
  app.delete('/api/users/:id', userController.deleteOne);

  // Routes for all listings belonging to a specific user
  app.get('/api/users/:id/listings', listingController.getAll);
  app.post('/api/users/:id/listings', listingController.createOne);

  // Routes for a specific listing
  app.get('/api/listings/:listId', listingController.getOne);
  app.patch('/api/listings/:listId', listingController.patchOne);
  app.delete('/api/listings/:listId', listingController.deleteOne);

  // Routes for a specific listing's photos
  app.get('/api/listings/:listId/photos', listingController.getAllPhotos);
  app.post('/api/listings/:listId/photos', listingController.createOnePhoto);

  // Routes for a specific listing's specific photo
  app.patch('/api/listings/:listId/photos/:id', listingController.patchOnePhoto);
  app.delete('/api/listings/:listId/photos/:id', listingController.deleteOnePhoto);

  // Catch-all route to allow reloading
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${rootPath}/index.html`));
  });
};
