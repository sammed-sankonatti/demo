const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,OPTIONS,POST,DELETE",
};

exports.successResponse = {
    statusCode: 200,
    headers,
    body: 'Success'
}

exports.noContentError = {
    statusCode: 204,
    headers,
    body: 'No Data Returned'
}

exports.invalidRequest = {
    statusCode: 400,
    headers,
    body: 'Bad Request'
}

exports.unauthorizedResponse = {
    statusCode: 401,
    headers,
    body: 'Not an Authorized User'
}

exports.notFoundResponse = {
    statusCode: 404,
    headers,
    body: 'No Data Found'
}

exports.conflictResponse = {
    statusCode: 409,
    headers,
    body: 'Data Already Exists'
}

exports.methodNotAllowed = {
    statusCode: 405,
    headers,
    body: 'Method Not Allowed'
}

exports.internalServerError = {
    statusCode: 500,
    headers,
    body: 'Internal Server Error'
}
