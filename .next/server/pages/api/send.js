"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 7993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    const { email , message  } = req.body;
    if (!req.body) return res.status(500).json({
        result: "Nice try :)"
    });
    if (message.length < 1 || email.length < 1) return res.status(500).json({
        result: "FIELD_EMPTY"
    });
    if (message.length > 1000) return res.status(500).json({
        result: "MESSAGE_TOO_LONG"
    });
    if (email.length > 500) return res.status(500).json({
        result: "NAME_TOO_LONG"
    });
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(process.env.WEBHOOK_URL, {
        embeds: [
            {
                color: 3108090,
                title: email,
                author: {
                    name: req.headers["x-forwarded-for"] ?? req.socket.remoteAddress ?? "unknown!?"
                },
                description: message
            }
        ]
    }).then((response)=>{
        if (response.data.error) return res.status(500).json({
            result: "DISCORD_API_ERROR"
        });
        return res.status(200).json({
            result: "Success"
        });
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7993));
module.exports = __webpack_exports__;

})();