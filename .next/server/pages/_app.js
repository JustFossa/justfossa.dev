(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Footer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full mt-24",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-[1px] bg-black dark:bg-slate-700/20"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl font-semibold dark:text-gray-300/40 mt-4",
                children: "JustFossa"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "dark:text-gray-300/20 text-gray-400 mb-24",
                children: [
                    "Software Engineer • ",
                    new Date().getFullYear(),
                    " "
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__(764);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
// EXTERNAL MODULE: external "@tippyjs/react"
var react_ = __webpack_require__(4787);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: external "react-icons/rx"
const rx_namespaceObject = require("react-icons/rx");
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(8933);
// EXTERNAL MODULE: ./node_modules/tippy.js/animations/perspective.css
var perspective = __webpack_require__(7700);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx













const NavItem = ({ title , href , isSelected  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        className: "dark:text-[#fff]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            className: isSelected ? "dark:bg-[#c8c8dc]/10 px-[12px] py-[8px] rounded-md bg-slate-500/20 text-sm" : " bg-transparent hover:bg-slate-500/10 dark:hover:bg-[#c8c8dc]/5 transition-all duration-300 text-sm ease-in-out px-[12px] py-[8px] rounded-md",
            children: title
        })
    });
};
const LinkButton = ({ title , Icon , href , onClick  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((react_default()), {
        className: "dark:bg-slate-900/70 p-1 mr-[10px]",
        arrow: false,
        theme: "custom",
        content: title,
        placement: "bottom",
        duration: 300,
        animation: "perspective",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            rel: "noreferrer",
            target: "_blank",
            href: href,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                size: 26,
                onClick: onClick,
                className: "mr-[10px] font-bold dark:text-white"
            })
        })
    });
};
const MobileNavItem = ({ title , href , isSelected  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            className: "dark:text-[#fff] w-[50%]",
            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: `${isSelected ? "dark:bg-[#1c1f23] bg-gray-400/30" : " dark:bg-[#090c0f]  bg-white"} border-[1px] border-gray-300/50 dark:border-slate-800/50 text-center p-3 w-full transition-all duration-300 ease-in-out`,
                children: title
            })
        })
    });
};
const ThemeSwitcher = ({ handleTheme , theme  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: handleTheme,
        className: "flex flex-row items-center justify-center cursor-pointer",
        children: theme ? /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiMoon, {
            size: 20,
            className: "p-2 w-9 h-9 rounded-md font-bold dark:text-white hover:bg-slate-500/10 dark:hover:bg-[#c8c8dc]/5"
        }) : /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiSun, {
            className: "p-2 w-9 h-9 rounded-md font-bold dark:text-white hover:bg-slate-500/10 dark:hover:bg-[#c8c8dc]/5 "
        })
    });
};
const MobileThemeSwitcher = ({ handleTheme , theme  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: handleTheme,
        className: "flex flex-row items-center justify-center ml-2 cursor-pointer",
        children: theme ? /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiMoon, {
            size: 30,
            className: "p-2 w-10 h-10 rounded-md font-bold dark:text-white cursor-pointer"
        }) : /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiSun, {
            className: "p-2 w-9 h-9 rounded-md font-bold dark:text-white cursor-pointer"
        })
    });
};
const Navbar = ()=>{
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [theme, setTheme] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const theme = localStorage.getItem("theme");
        if (theme == "dark") {
            setTheme(true);
            document.documentElement.classList.add("dark");
        } else {
            setTheme(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);
    const handleThemeChange = ()=>{
        setTheme(!theme);
        if (theme) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sm:hidden fixed flex md:w-[49rem] w-[90%] z-[555] h-[55px] items-center justify-between flex-row border-gray-400 dark:border-slate-800/50 border-[1px] mt-6 rounded-md backdrop-blur-lg dark:bg-[#12181d]/60",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row items-center gap-[5%] justify-start p-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ThemeSwitcher, {
                                handleTheme: handleThemeChange,
                                theme: theme
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                title: "Home",
                                isSelected: router.pathname == "/",
                                href: "/"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                title: "Contact",
                                isSelected: router.pathname == "/contact",
                                href: "/contact"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row items-center justify-end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkButton, {
                                title: "GitHub",
                                Icon: si_.SiGithub,
                                href: "https://github.com/JustFossa"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkButton, {
                                title: "Twitter",
                                Icon: si_.SiTwitter,
                                href: "httpa://twitter.com/Just_Fossa"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkButton, {
                                title: "Email",
                                Icon: io5_.IoMailOutline,
                                href: "mailto:hello@justfossa.dev"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden sm:flex fixed w-full h-[65px] flex-row items-center justify-between z-[555] dark:border-b-slate-800/50 border-b-[1px] backdrop-blur-md dark:bg-[#12181d]/60",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileThemeSwitcher, {
                        handleTheme: handleThemeChange,
                        theme: theme
                    }),
                    open ? /*#__PURE__*/ jsx_runtime_.jsx(rx_namespaceObject.RxCross2, {
                        size: 30,
                        className: "ml-auto mr-6 cursor-pointer dark:text-white",
                        onClick: ()=>setOpen(!open)
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMenu, {
                        size: 30,
                        className: "ml-auto mr-6 cursor-pointer dark:text-white",
                        onClick: ()=>setOpen(!open)
                    }),
                    open && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "fixed grid-cols-2 grid mt-[170px] w-full transition-all",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                title: "Home",
                                isSelected: router.pathname == "/",
                                href: "/"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavItem, {
                                title: "Contact",
                                isSelected: router.pathname == "/contact",
                                href: "/contact"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row justify-center p-4 items-center w-full col-span-2 bg-white border-gray-400 dark:border-none border-b-[1px] dark:bg-[#090c0f]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkButton, {
                                        title: "GitHub",
                                        Icon: si_.SiGithub,
                                        href: "https://github.com/JustFossa"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkButton, {
                                        title: "Twitter",
                                        Icon: si_.SiTwitter,
                                        href: "https://twitter.com/Just_Fossa"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkButton, {
                                        title: "Email",
                                        Icon: io5_.IoMailOutline,
                                        href: "mailto:hello@justfossa.dev"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            open && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sm:flex hidden z-[20] fixed w-full h-full backdrop-blur-lg"
            })
        ]
    });
};


/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3568);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1794);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4204);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events.on("routeChangeStart", ()=>{
    nprogress__WEBPACK_IMPORTED_MODULE_6___default().start();
});
next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done());
next_router__WEBPACK_IMPORTED_MODULE_8__.Router.events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done());
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "JustFossa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "JustFossa - Software Engineer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#000000"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "black"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "justfossa, justfossa web dev, web developer, typescript, github, react, next.js, javascript, full stack developer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "apple-mobile-web-app-title",
                        content: "JustFossa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "application-name",
                        content: "JustFossa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "min-h-screen w-full dark:bg-gradient-to-b dark:from-[#000000] dark:to-[#040a11] flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__/* .Navbar */ .w, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-[80%] md:w-[45rem]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                                    mode: "wait",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* .Footer */ .$, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 4787:
/***/ ((module) => {

"use strict";
module.exports = require("@tippyjs/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 764:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/si");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,181], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();