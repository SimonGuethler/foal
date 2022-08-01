import { controller, createApp, Get, HttpResponseOK } from '@foal/core';
import { VerifyAndDecodeJWT } from '@foal/jwt';

class AppController {
  subControllers = [
    controller('/api', ApiController)
  ];
}

class ApiController {
  @Get('/users')
  @VerifyAndDecodeJWT()
  index() {
    return new HttpResponseOK([ { name: 'someone' } ]);
  }
}

createApp(AppController).then(app => app.listen(3000));
