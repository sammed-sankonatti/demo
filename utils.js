
exports.handleLogs = (event, message, logType)=> {
    console[logType](JSON.stringify({
        api_path : event?.path,
        api_request_body: event?.body,
        api_request_headers: event?.headers,
        api_request_method: event?.httpMethod,
        log_type: logType,
        message: message
    }))
}
