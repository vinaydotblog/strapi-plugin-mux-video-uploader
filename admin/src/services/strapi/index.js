"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitUpload = exports.setMuxSettings = exports.getIsConfigured = void 0;
var SERVICE_URI = strapi.backendURL;
function getJwtToken() {
    var _a;
    return (_a = window.sessionStorage.getItem('jwtToken')) === null || _a === void 0 ? void 0 : _a.replace(/\"/g, '');
}
var getIsConfigured = function () {
    return fetch(SERVICE_URI + "/mux-video-uploader/mux-settings", {
        method: "GET",
        headers: { 'Authorization': "Bearer " + getJwtToken() }
    }).then(function (response) { return response.json(); });
};
exports.getIsConfigured = getIsConfigured;
var setMuxSettings = function (body) {
    return fetch(SERVICE_URI + "/mux-video-uploader/mux-settings", {
        method: "POST",
        headers: { 'Authorization': "Bearer " + getJwtToken() },
        body: body
    });
};
exports.setMuxSettings = setMuxSettings;
var submitUpload = function (title, method, media) {
    var body = new FormData();
    body.append("title", title);
    var submitUrl;
    if (method === 'url') {
        submitUrl = SERVICE_URI + "/mux-video-uploader/submitRemoteUpload";
        body.append("url", media);
    }
    else if (method === 'upload') {
        submitUrl = SERVICE_URI + "/mux-video-uploader/submitDirectUpload";
    }
    else {
        throw new Error('Unable to determine upload method');
    }
    return fetch(submitUrl, {
        method: "POST",
        headers: { 'Authorization': "Bearer " + getJwtToken() },
        body: body
    }).then(function (response) { return response.json(); });
};
exports.submitUpload = submitUpload;
