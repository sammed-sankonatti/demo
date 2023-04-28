const { successResponse } = require("./response")
const {db} = require("./db");
const { handleLogs } = require("./utils");

const getTheatres =  async (event, context, callback) => {
    handleLogs(event, "get Theatres is called", "log")
    try {
        const data = await db.query("select distinct theatre from ui.ui_region_hierarchy")
        return data?.rows
    } catch (error) {
        handleLogs(event, "error in getting theatres", "error")
        const err = new Error()
        err.name = error.name
        err.message = "unable to get Theatres!"
        err.stack = error.stack
        throw err
    }
}

const getRegions = async (event, context, callback) => {
    handleLogs(event, "get Regions is called", "log")
    try {
        const {theatre} = event?.queryStringParameters
        let data ={}
        if(theatre){
            data = await db.query("select distinct region from ui.ui_region_hierarchy WHERE theatre=$1", [theatre])
        } else {
            data = await db.query("select distinct region from ui.ui_region_hierarchy")
        }
        return data.rows
    } catch (error) {
        handleLogs(event, "error in getting regions", "error")
        const err = new Error()
        err.name = error.name
        err.message = "unable to get regions"
        err.stack = error.stack
        throw err
    }
}

const getRepsDetails =  async (event, context, callback) => {
    handleLogs(event, "get RepDetails is called", "log")
    try {
        const {theatre, region} = event?.queryStringParameters

        let data ={}

        if(theatre && region){
            data = await db.query("select user_name, user_hk from ui.ui_region_hierarchy WHERE theatre=$1 AND region=$2", [theatre, region])
        } else if(theatre){
            data = await db.query("select user_name, user_hk from ui.ui_region_hierarchy WHERE theatre=$1", [theatre])
        } else if(region){
            data = await db.query("select user_name, user_hk from ui.ui_region_hierarchy WHERE region=$1", [region])
        } else {
            data = await db.query("select user_name, user_hk from ui.ui_region_hierarchy")
        }
        return data.rows
    } catch (error) {
        handleLogs(event, "error in getting repsdetails", "error")
        const err = new Error()
        err.name = error.name
        err.message = "unable to get reps details"
        err.stack = error.stack
        throw err
    }
}


exports.handler = async (event, context, callback)=> {
    const {httpMethod, path, queryStringParameters} = event

    try {
        if(httpMethod === "GET" && path === "/theatres"){
            const response = await getTheatres(event, context, callback)
            successResponse.body = JSON.stringify({
                data : response,
                message : "getTheatres is called Successfully!"
            })
            callback(null,successResponse)
        }
        if(httpMethod === "GET" && path === "/regions" && queryStringParameters){
            const response = await getRegions(event, context, callback)
            successResponse.body = JSON.stringify({
                data : response,
                message : "getRegions is called Successfully!"
            })
            callback(null,successResponse)
        }
        if(httpMethod === "GET" && path === "/reps" && queryStringParameters){
            const response = await getRepsDetails(event, context, callback)
            successResponse.body = JSON.stringify({
                data : response,
                message : "getRepDetails is called Successfully!"
            })
            callback(null,successResponse)
        }
    } catch (error) {
        callback(null, error)
    }
}
