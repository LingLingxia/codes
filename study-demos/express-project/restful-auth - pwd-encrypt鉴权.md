## express-session
## Authentication
 session-based,
token-based,
passwordless

## JWT token based
- jsonwebtoken package
```
myapp.use(express.json());
```
enables returning a JSON response by the api methods
### use middleware and jwt
```
const jwt = require('jsonwebtoken');
const session = require('express-session');
app.use(session({ secret: "fingerpint", resave: true, saveUninitialized: true }));
```
### set sessionId
```
    let accessToken = jwt.sign({
        data: user
    }, 'access', { expiresIn: 60 * 60 });

    // Store access token in session
    req.session.authorization = {
        accessToken
    }
```
### use sessionId
```
    if (req.session.authorization) {
        let token = req.session.authorization['accessToken']; // Access Token
        
        // Verify JWT token for user authentication
        jwt.verify(token, "access", (err, user) => {
            if (!err) {
                req.user = user; // Set authenticated user data on the request object
                console.log(user)
                next(); // Proceed to the next middleware
            } else {
                return res.status(403).json({ message: "User not authenticated" }); // Return error if token verification fails
            }
        });
        
        // Return error if no access token is found in the session
    }
```

### restful api design 
- please reach to ./restful-auth/routes/users.js

### use hash function to encrypt password

- encrypt

```
const bcrypt = require("bcrypt");
let hashedPwd = bcrypt.hashSync(userPassword,saltRounds);// store it to DB

```

- decrypt
```
let result = await bcrypt.compare(userPassword,hashedPwd);
```