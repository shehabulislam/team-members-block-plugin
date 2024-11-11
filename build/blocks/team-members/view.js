/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/team-members/TeamProvider.jsx":
/*!**************************************************!*\
  !*** ./src/blocks/team-members/TeamProvider.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TeamProvider),
/* harmony export */   useTeamState: () => (/* binding */ useTeamState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



// Create the context
const ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

// Create a provider component
function TeamProvider({
  children
}) {
  const [teamState, setTeamState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    currentIndex: 0
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ThemeContext.Provider, {
    value: {
      teamState,
      setTeamState
    }
  }, children);
}

// Custom hook to use the ThemeContext
const useTeamState = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);

/***/ }),

/***/ "./src/blocks/team-members/components/Heading.jsx":
/*!********************************************************!*\
  !*** ./src/blocks/team-members/components/Heading.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Heading() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mx-auto mb-8 max-w-screen-sm text-center lg:mb-16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mb-4 text-4xl font-extrabold tracking-tight text-white"
  }, "Our Team"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "font-light text-gray-400 sm:text-xl lg:mb-16"
  }, "Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind")));
}

/***/ }),

/***/ "./src/blocks/team-members/components/Icons/DribbbleIcon.jsx":
/*!*******************************************************************!*\
  !*** ./src/blocks/team-members/components/Icons/DribbbleIcon.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DribbbleIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DribbbleIcon({
  ...restProps
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    height: 20,
    width: 20,
    className: "h-5 w-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    ...restProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
    clipRule: "evenodd"
  })));
}

/***/ }),

/***/ "./src/blocks/team-members/components/Icons/FacebookIcon.jsx":
/*!*******************************************************************!*\
  !*** ./src/blocks/team-members/components/Icons/FacebookIcon.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FacebookIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function FacebookIcon({
  ...restProps
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    height: 20,
    width: 20,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    ...restProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    clipRule: "evenodd"
  })));
}

/***/ }),

/***/ "./src/blocks/team-members/components/Icons/GithubIcon.jsx":
/*!*****************************************************************!*\
  !*** ./src/blocks/team-members/components/Icons/GithubIcon.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GithubIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function GithubIcon({
  ...restProps
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    height: 20,
    width: 20,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    ...restProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    clipRule: "evenodd"
  })));
}

/***/ }),

/***/ "./src/blocks/team-members/components/Icons/LinkedinIcon.jsx":
/*!*******************************************************************!*\
  !*** ./src/blocks/team-members/components/Icons/LinkedinIcon.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const LinkedinIcon = props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  fill: "#000000",
  width: "20px",
  height: "20px",
  viewBox: "-2 -2 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "xMinYMin",
  className: "jam jam-linkedin",
  ...props
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedinIcon);

/***/ }),

/***/ "./src/blocks/team-members/components/Icons/SocialMedia.jsx":
/*!******************************************************************!*\
  !*** ./src/blocks/team-members/components/Icons/SocialMedia.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialMedia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DribbbleIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DribbbleIcon */ "./src/blocks/team-members/components/Icons/DribbbleIcon.jsx");
/* harmony import */ var _FacebookIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FacebookIcon */ "./src/blocks/team-members/components/Icons/FacebookIcon.jsx");
/* harmony import */ var _GithubIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GithubIcon */ "./src/blocks/team-members/components/Icons/GithubIcon.jsx");
/* harmony import */ var _LinkedinIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinkedinIcon */ "./src/blocks/team-members/components/Icons/LinkedinIcon.jsx");
/* harmony import */ var _TwitterIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TwitterIcon */ "./src/blocks/team-members/components/Icons/TwitterIcon.jsx");






const media = {
  facebook: _FacebookIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
  dribble: _DribbbleIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
  twitter: _TwitterIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
  github: _GithubIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
  linkedin: _LinkedinIcon__WEBPACK_IMPORTED_MODULE_4__["default"]
};
function SocialMedia({
  social
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "flex space-x-4 sm:mt-0"
  }, social.map(item => {
    const MediaIcon = media[item.name?.toLowerCase()]; // Get the icon based on item.name

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: item.name
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link || "#",
      className: "text-gray-500 hover:text-white"
    }, MediaIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaIcon, {
      height: "20",
      width: "20"
    }) :
    // Custom SVG if MediaIcon is not found
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      height: "20",
      width: "20",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.478 22 2 17.522 2 12S6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"
    }))));
  })));
}

/***/ }),

/***/ "./src/blocks/team-members/components/Icons/TwitterIcon.jsx":
/*!******************************************************************!*\
  !*** ./src/blocks/team-members/components/Icons/TwitterIcon.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TwitterIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TwitterIcon({
  ...restProps
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    height: 20,
    width: 20,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    ...restProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
  }));
}

/***/ }),

/***/ "./src/blocks/team-members/components/team-templates/TeamMemberCards.jsx":
/*!*******************************************************************************!*\
  !*** ./src/blocks/team-members/components/team-templates/TeamMemberCards.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Member: () => (/* binding */ Member),
/* harmony export */   "default": () => (/* binding */ TeamMembersCards)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../TeamProvider */ "./src/blocks/team-members/TeamProvider.jsx");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Heading */ "./src/blocks/team-members/components/Heading.jsx");
/* harmony import */ var _Icons_SocialMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/SocialMedia */ "./src/blocks/team-members/components/Icons/SocialMedia.jsx");




function TeamMembersCards({
  members,
  ...restProps
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "mx-auto max-w-screen-xl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-6 grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:mb-16"
  }, members.map((member, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Member, {
    key: `member-${i}`,
    member: member,
    index: i,
    ...restProps
  })))));
}
function Member({
  member,
  index,
  RichText,
  updateMember
}) {
  const {
    name,
    social,
    role,
    bio,
    image
  } = member;
  const {
    teamState,
    setTeamState
  } = (0,_TeamProvider__WEBPACK_IMPORTED_MODULE_1__.useTeamState)();
  const {
    currentIndex
  } = teamState;
  // console.log(teamState);

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `items-center bg-gray-50 rounded-lg shadow sm:flex ${currentIndex === index ? "border border-gray-700" : ""}`,
    onClick: () => setTeamState(prevState => ({
      ...prevState,
      currentIndex: index
    }))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "min-w-48 md:max-w-48 h-full"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "w-full rounded-lg sm:rounded-none sm:rounded-l-lg md:!h-full object-cover",
    src: image.url,
    alt: image.alt
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-xl font-bold tracking-tight text-gray-900 \r "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "a",
    value: name,
    className: "!no-underline",
    href: "#",
    onChange: name => updateMember("name", name)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "span",
    value: role,
    onChange: value => updateMember("role", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "p",
    className: "mt-3 mb-4 font-light ",
    value: bio,
    onChange: value => updateMember("bio", value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_SocialMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    social: social
  }))));
}

/***/ }),

/***/ "./src/blocks/team-members/components/team-templates/Template1.jsx":
/*!*************************************************************************!*\
  !*** ./src/blocks/team-members/components/team-templates/Template1.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Template1(props) {
  const {
    RichText,
    members = [],
    updateMember = () => {},
    MediaPlaceholder,
    onClick = () => {}
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full"
  }, members.map((member, index) => {
    const {
      name,
      position,
      image
    } = member;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full",
      onClick: () => onClick(index)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative mb-5"
    }, image ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://pagedone.io/asset/uploads/1698649968.png",
      alt: "Marvin image",
      className: "w-28 h-28 profile-pic rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaPlaceholder, {
      onSelect: el => {
        updateMember(index, "image", el.url);
      },
      onSelectURL: url => {
        updateMember(index, "image", url);
      },
      allowedTypes: ["image"],
      multiple: false,
      labels: {
        title: "Image"
      },
      icon: "image"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h4" // The tag here is the element output and editable in the admin
      ,
      value: name // Any existing content, either from the database or an attribute default
      ,
      allowedFormats: ["core/bold", "core/italic"] // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: name => updateMember(0, "name", name) // Store updated contentI as a block attribute
      ,
      placeholder: "Name...",
      className: "tmbp-name text-inherit text-xl font-semibold text-center mb-2 transition-all duration-500"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "span" // The tag here is the element output and editable in the admin
      ,
      value: position // Any existing content, either from the database or an attribute default
      ,
      allowedFormats: ["core/bold", "core/italic"] // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: position => updateMember(index, "position", position) // Store updated content as a block attribute
      ,
      placeholder: "Position...",
      className: "tmbp-position text-inherit  text-center block transition-all duration-500 group-hover:text-gray-900"
    })));
  }));
}

/***/ }),

/***/ "./src/blocks/team-members/view.js":
/*!*****************************************!*\
  !*** ./src/blocks/team-members/view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaPlaceholder: () => (/* binding */ MediaPlaceholder),
/* harmony export */   RichText: () => (/* binding */ RichText),
/* harmony export */   View: () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_team_templates_TeamMemberCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/team-templates/TeamMemberCards */ "./src/blocks/team-members/components/team-templates/TeamMemberCards.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/team-members/style.scss");
/* harmony import */ var _components_team_templates_Template1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/team-templates/Template1 */ "./src/blocks/team-members/components/team-templates/Template1.jsx");





document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".wp-block-tmbp-team-members");
  blocks.forEach(viewer => {
    const attributes = JSON.parse(viewer.dataset.attributes);
    viewer.removeAttribute("data-attributes");
    const root = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createRoot)(viewer);
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(View, {
      attributes: attributes
    }));
  });
});
const templates = {
  Template1: _components_team_templates_Template1__WEBPACK_IMPORTED_MODULE_4__["default"]
};
function View({
  attributes
}) {
  const {
    members,
    template
  } = attributes;
  const SelectedTemplate = templates[template] || null;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, SelectedTemplate ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectedTemplate, {
    members: members,
    MediaPlaceholder: MediaPlaceholder,
    RichText: RichText
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Template not found"));
}
function MediaPlaceholder({
  image,
  ...restProps
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image,
    ...restProps
  }));
}
function RichText({
  tag: Tag = "p",
  value = ""
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, null, value);
}

/***/ }),

/***/ "./src/blocks/team-members/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/team-members/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/team-members/view": 0,
/******/ 			"blocks/team-members/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkteam_members_block_plugin"] = self["webpackChunkteam_members_block_plugin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/team-members/style-index"], () => (__webpack_require__("./src/blocks/team-members/view.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=view.js.map