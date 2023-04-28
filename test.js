const {handler} = require("./usersIndex")

const event = {
    httpMethod :"GET",
    path : "/users"
}

const callback = (err,data)=> {
    console.log(data);
}

handler(event, {}, callback)
