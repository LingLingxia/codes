## store session in mongodb

- when you store session in mongodb ,every api call need to  

```
npm install connect-mongo --save
```


```
const MongoStore = require('connect-mongo');
app.use(session({
  secret: 'your_secret_key', 
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: mongoURL,
    collectionName: 'sessions'
  }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hours
}));
```