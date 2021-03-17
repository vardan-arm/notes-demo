"use strict";
var HTTP_STATUSES = {
    ok: {
        code: 200,
        message: "ok"
    },
    internalServerError: {
        code: 500,
        message: "Something went wrong. Please try again later!"
    }
};
var INITIAL_NOTES_RESPONSE_COUNT = 2; // For testing purposes - sends first 2 records on initial notes fetching
module.exports = {
    HTTP_STATUSES: HTTP_STATUSES,
    INITIAL_NOTES_RESPONSE_COUNT: INITIAL_NOTES_RESPONSE_COUNT
};
