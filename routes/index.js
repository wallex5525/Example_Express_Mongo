module.exports = (app) => {
  let indexController = app.controllers.indexController;

  app.get('/', indexController.home);
  app.post('/numero', indexController.insert);
  app.get('/goEdit/:id', indexController.goEdit);
  app.post('/update/:id', indexController.update);
  app.get('/delete/:id', indexController.delete);
}