class ValidationError extends Error {
    constructor(message){
        super(message);

        this.code = 407;//Custom error code
        this.name = "ValidationError";
    }
}

class InvalidUserError extends Error {
    constructor(message){
        super(message);
        this.code = 407
        this.name = "InvalidUserError"
    }
}

class AuthenticationFailed extends Error {
    constructor(message){
        super(message);
        this.code = 407
        this.name = "AuthenticationFailed"
    }
}

// use case:  throw new ValidationError("Customer Under required age limit");

module.exports  = { ValidationError ,InvalidUserError ,AuthenticationFailed};