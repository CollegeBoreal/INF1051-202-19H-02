# Nebular oAuth


https://akveo.github.io/nebular/docs/auth/introduction

```
$ npm install --save @nebular/theme @angular/cdk @angular/animations
```


proxy.config.json

```json
{
  "/api/*": {
    "target": "http://localhost:9000",
    "secure": false,
    "logLevel": "debug"
  }
}
```

```
$ ng serve --proxy-config proxy.config.json
```


## References:

Interceptors:

https://github.com/akveo/ngx-admin/issues/1375

https://github.com/akveo/nebular/blob/master/src/framework/auth/services/interceptors/jwt-interceptor.ts



### ERROR in The Angular Compiler requires TypeScript >=3.1.1 and <3.3.0 but 3.3.3333 was found instead.

```
$ npm i typescript@3.1.6 --save-dev --save-exact
```

### Error: Cannot find module 'node-sass'

```
$ npm i node-sass@4.8.1
```
