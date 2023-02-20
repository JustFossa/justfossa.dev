(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ RepoCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const langs = {
    "JavaScript": {
        color: "#f0db4f"
    },
    "TypeScript": {
        color: "#3178c6"
    },
    "HTML": {
        color: "#e34c26"
    },
    "unknown": {
        color: "#000000"
    }
};
const RepoCard = ({ repo  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: repo.html_url,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full h-[10rem] dark:bg-slate-900/5 border-[1px] dark:border-slate-700/20 rounded-lg flex flex-col items-left p-4 gap-2 dark:hover:border-slate-700/90 cursor-pointer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "font-bold dark:text-white",
                    children: repo.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "dark:text-gray-300 text-sm text-gray-400",
                    children: repo.description
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row items-center gap-4 mt-auto text-sm dark:text-gray-300",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "w-3 h-3 rounded-full mr-2",
                                    style: {
                                        background: langs[repo.language ? repo.language : "unknown"].color,
                                        border: `solid 3px ${langs[repo.language ? repo.language : "unknown"].color}`
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "dark:text-gray-300",
                                    children: repo.language || "Unknown"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineStar, {
                                    className: "dark:text-gray-300 mr-1 w-4 h-4"
                                }),
                                " ",
                                repo.stargazers_count
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiGitRepoForked, {
                                    className: "dark:text-gray-300 mr-1 w-4 h-4"
                                }),
                                " ",
                                repo.forks_count
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ TechItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tippy_js_animations_perspective_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7700);
/* harmony import */ var tippy_js_animations_perspective_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_perspective_css__WEBPACK_IMPORTED_MODULE_3__);




const TechItem = ({ Icon , title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "dark:bg-slate-900/50 mr-[10px]",
        arrow: false,
        theme: "custom",
        content: title,
        placement: "top",
        animation: "perspective",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                size: 35,
                className: "mr-[10px] font-bold p-1 dark:text-white"
            })
        })
    });
};


/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TechItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8218);
/* harmony import */ var _components_RepoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1171);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_RepoCard__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_RepoCard__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Home({ stats , repos  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            initial: {
                opacity: 0,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.95
            },
            transition: {
                ease: "easeOut",
                duration: 0.5
            },
            className: "flex flex-col items-center justify-start mt-24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-4xl dark:text-white md:text-5xl font-bold mt-14 mb-4",
                            children: "Hey, I'm JustFossa \uD83D\uDC4B"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: " dark:text-gray-300 tracking-wide mb-12",
                            children: "I'm a self-taught software engineer from the Czech republic. I'm currently pursuing full-stack web development to create stunning user experiences on the front-end, and scalable and secure infrastructure on the backend."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl dark:text-white font-medium mb-4",
                            children: "What I Do \uD83D\uDCAD"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text dark:text-gray-300 font-light tracking-wide mb-12",
                            children: [
                                "I'm passionate about every technology; from designing and developing software, through understanding how many moving parts of the internet work together, to cybersecurity, systems, programming, and so much more. I strive to learn more about these things every day, and utilize my knowledge to further understand ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    children: "how"
                                }),
                                " or ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    children: "why"
                                }),
                                " the technology around us works."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl dark:text-white font-medium mb-4",
                            children: "Technologies \uD83D\uDCBB"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text dark:text-gray-300 font-light tracking-wide mb-12",
                            children: "I use a variety of tools to streamline my development process and increase the quality of both my code, and my projects. Below is a list of technologies and languages I've had experience with in the past, or use currently."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-wrap justify-center p-2 flex-row dark:border-slate-800/50 dark:bg-slate-900/5 border-[1px] rounded-md h-auto items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiTypescript,
                            title: "Typescript"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiReact,
                            title: "React"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiNextdotjs,
                            title: "Next.js"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiVisualstudiocode,
                            title: "VS Code"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiJavascript,
                            title: "Javascript"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiNodedotjs,
                            title: "Node.js"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiTailwindcss,
                            title: "TailwindCSS"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiYarn,
                            title: "Yarn"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiNpm,
                            title: "NPM"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiMongodb,
                            title: "MongoDB"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiUbuntu,
                            title: "Ubuntu"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiGit,
                            title: "Git"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiArduino,
                            title: "Arduino"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiExpress,
                            title: "Express.js"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TechItem__WEBPACK_IMPORTED_MODULE_3__/* .TechItem */ .Q, {
                            Icon: react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiChartdotjs,
                            title: "Chart.js"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl dark:text-white font-medium mb-4 mt-12",
                            children: "Projects \uD83D\uDEE0️"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text dark:text-gray-300 font-light tracking-wide mb-12",
                            children: [
                                "In my free time, I enjoy creating open source projects on ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-violet-600 font-bold hover:underline",
                                    rel: "noreferrer",
                                    href: "https://github.com/JustFossa",
                                    children: "GitHub"
                                }),
                                ", so I can learn from others and showcase what I know. In total, all of my open sourced projects have earned me ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-bold dark:text-slate-200",
                                    children: stats.stars
                                }),
                                " stars on GitHub, and ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-bold dark:text-slate-200",
                                    children: stats.forks
                                }),
                                " forks. Below are some of my most popular repositories."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full grid gap-2 md:grid-rows-1 md:grid-cols-2 grid-cols-1 mb-12",
                            children: repos.map((repo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RepoCard__WEBPACK_IMPORTED_MODULE_4__/* .RepoCard */ .W, {
                                    repo: repo
                                }, repo.name))
                        })
                    ]
                })
            ]
        })
    });
}
const getStaticProps = async ()=>{
    const stats = await fetch("https://api.github-star-counter.workers.dev/user/justfossa").then((res)=>res.json());
    const repos = await fetch("https://api.github.com/users/justfossa/repos?type=owner&per_page=100").then((res)=>res.json());
    const topRepos = repos.sort((a, b)=>b.stargazers_count - a.stargazers_count).slice(0, 4);
    return {
        props: {
            stats: stats,
            repos: topRepos
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7700:
/***/ (() => {



/***/ }),

/***/ 8933:
/***/ (() => {



/***/ }),

/***/ 4787:
/***/ ((module) => {

"use strict";
module.exports = require("@tippyjs/react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

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
var __webpack_exports__ = (__webpack_exec__(5970));
module.exports = __webpack_exports__;

})();