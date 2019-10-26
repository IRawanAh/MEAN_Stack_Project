(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-app/edit-app.component */ "./src/app/edit-app/edit-app.component.ts");
/* harmony import */ var _view_form_view_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-form/view-form.component */ "./src/app/view-form/view-form.component.ts");
/* harmony import */ var _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userhome/userhome.component */ "./src/app/userhome/userhome.component.ts");
/* harmony import */ var _submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submit-form/submit-form.component */ "./src/app/submit-form/submit-form.component.ts");
/* harmony import */ var _viewallsub_viewallsub_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viewallsub/viewallsub.component */ "./src/app/viewallsub/viewallsub.component.ts");
/* harmony import */ var _guest_page_guest_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guest-page/guest-page.component */ "./src/app/guest-page/guest-page.component.ts");











var routes = [
    { path: '', redirectTo: "login", pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user', component: _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_5__["EditAppComponent"] },
    { path: 'home', component: _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_7__["UserhomeComponent"] },
    { path: 'view/:id', component: _view_form_view_form_component__WEBPACK_IMPORTED_MODULE_6__["ViewFormComponent"] },
    { path: 'form/:id', component: _submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_8__["SubmitFormComponent"] },
    { path: 'viewall/:id', component: _viewallsub_viewallsub_component__WEBPACK_IMPORTED_MODULE_9__["ViewallsubComponent"] },
    { path: 'guest', component: _guest_page_guest_page_component__WEBPACK_IMPORTED_MODULE_10__["GuestPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body { height: 100%; }\r\n.spacer{\r\n  flex: 1 1 auto;\r\n}\r\n.app-toolbar {\r\n  position: sticky;\r\n  position: -webkit-sticky; /* For macOS/iOS Safari */\r\n  top: 0; /* Sets the sticky toolbar to be on top */\r\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n}\r\n:host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\nh1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    margin: 8px 0;\r\n  }\r\np {\r\n    margin: 0;\r\n  }\r\n.spacer {\r\n    flex: 1;\r\n  }\r\n.toolbar {\r\n    height: 60px;\r\n    margin: -8px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n.toolbar img {\r\n    margin: 0 16px;\r\n  }\r\n.toolbar #twitter-logo {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n  }\r\n.toolbar #twitter-logo:hover {\r\n    opacity: 0.8;\r\n  }\r\n.content {\r\n    display: flex;\r\n    margin:  auto;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n  }\r\n.green{\r\n    background-color: #556091;\r\n    color: white;\r\n    padding: 0px;\r\n    width: 300px;\r\n    font-size: 13px;\r\n  }\r\n.mat-card {\r\n    max-width: 250px;\r\n    margin: 5px 10px auto;\r\n    align-self: auto;\r\n  }\r\n.mat-card-avatar{\r\n    background-image: url('formhead.jpg');\r\n    background-size: cover;\r\n  }\r\n.mat-card-actions{\r\n    display: flex;\r\n  }\r\n.mat-card-actions .flex-spacer{\r\n    width: 100%;\r\n  }\r\nsvg.material-icons {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\nsvg.material-icons:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n.card svg.material-icons path {\r\n    fill: #888;\r\n  }\r\nsvg#clouds {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n/* Responsive Styles */\r\n@media screen and (max-width: 767px) {\r\n    .card-container > *:not(.circle-link) ,\r\n    .terminal {\r\n      width: 100%;\r\n    }\r\n    .card:not(.highlight-card) {\r\n      height: 16px;\r\n      margin: 8px 0;\r\n    }\r\n    .card.highlight-card span {\r\n      margin-left: 72px;\r\n    }\r\n    svg#rocket-smoke {\r\n      right: 120px;\r\n      -webkit-transform: rotate(-5deg);\r\n              transform: rotate(-5deg);\r\n    }\r\n  }\r\n@media screen and (max-width: 575px) {\r\n    svg#rocket-smoke {\r\n      display: none;\r\n      visibility: hidden;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxhQUFhLEVBQUU7QUFDNUI7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCLENBQUMsMEJBQTBCO0VBQ3BELE9BQU8sQ0FBQywwQ0FBMEM7RUFDbEQsY0FBYyxDQUFDLGdFQUFnRTtDQUNoRjtBQUNEO0lBQ0ksMkpBQTJKO0lBQzNKLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxtQ0FBbUM7R0FDcEM7QUFDRDs7Ozs7O0lBTUUsY0FBYztHQUNmO0FBQ0Q7SUFDRSxVQUFVO0dBQ1g7QUFDRDtJQUNFLFFBQVE7R0FDVDtBQUNEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCO0FBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxhQUFhO0lBQ2IsZUFBZTtHQUNoQjtBQUNEO0lBQ0UsYUFBYTtHQUNkO0FBQ0Q7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtHQUMzQjtBQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtHQUNqQjtBQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLHNDQUFrRDtJQUNsRCx1QkFBdUI7R0FDeEI7QUFDRDtJQUNFLGNBQWM7R0FDZjtBQUNEO0lBQ0UsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxhQUFhO0lBQ2IsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7QUFDRDtJQUNFLFdBQVc7R0FDWjtBQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7R0FDZjtBQUNELHVCQUF1QjtBQUN2QjtJQUNFOztNQUVFLFlBQVk7S0FDYjtJQUNEO01BQ0UsYUFBYTtNQUNiLGNBQWM7S0FDZjtJQUNEO01BQ0Usa0JBQWtCO0tBQ25CO0lBQ0Q7TUFDRSxhQUFhO01BQ2IsaUNBQXlCO2NBQXpCLHlCQUF5QjtLQUMxQjtHQUNGO0FBQ0Q7SUFDRTtNQUNFLGNBQWM7TUFDZCxtQkFBbUI7S0FDcEI7R0FDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG4uc3BhY2Vye1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5hcHAtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXHJcbiAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXHJcbn1cclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICAudG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IC04cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAudG9vbGJhciBpbWcge1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICB9XHJcbiAgLmdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NjA5MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLm1hdC1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IGF1dG87XHJcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIH1cclxuICAubWF0LWNhcmQtYXZhdGFye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvZm9ybWhlYWQuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLm1hdC1jYXJkLWFjdGlvbnMgLmZsZXgtc3BhY2Vye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIHN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICM4ODg7XHJcbiAgfVxyXG4gIHN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG4gIH1cclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgICB9XHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\"\r\n    viewBox=\"0 0 2611.084 485.677\">\r\n    <path id=\"Path_39\" data-name=\"Path 39\"\r\n        d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\"\r\n        transform=\"translate(142.69 -634.312)\" fill=\"#eee\" />\r\n</svg>\r\n<!-- <footer style=\" position: fixed;\r\nleft: 0;\r\nbottom: 0;\r\nwidth: 100%;\r\ntext-align: center;\r\n\"> <a href=\"#\" >Forms Builder App</a></footer> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'formbuilder';
    }
    AppComponent.prototype.ngOnInit = function () {
        //  this._router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-app/edit-app.component */ "./src/app/edit-app/edit-app.component.ts");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/ngx-drag-drop.es5.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/@toverux/ngx-sweetalert2.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _view_form_view_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-form/view-form.component */ "./src/app/view-form/view-form.component.ts");
/* harmony import */ var _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./userhome/userhome.component */ "./src/app/userhome/userhome.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./submit-form/submit-form.component */ "./src/app/submit-form/submit-form.component.ts");
/* harmony import */ var _viewallsub_viewallsub_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./viewallsub/viewallsub.component */ "./src/app/viewallsub/viewallsub.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _guest_page_guest_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./guest-page/guest-page.component */ "./src/app/guest-page/guest-page.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_6__["EditAppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _view_form_view_form_component__WEBPACK_IMPORTED_MODULE_13__["ViewFormComponent"],
                _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_14__["UserhomeComponent"],
                _submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_25__["SubmitFormComponent"],
                _viewallsub_viewallsub_component__WEBPACK_IMPORTED_MODULE_26__["ViewallsubComponent"],
                _guest_page_guest_page_component__WEBPACK_IMPORTED_MODULE_29__["GuestPageComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_30__["NavComponent"],
            ],
            imports: [
                //RouterModule.forRoot(appRoutes),
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SweetAlert2Module"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"],
                ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DndModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_27__["NgxPaginationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-app/edit-app.component.css":
/*!*************************************************!*\
  !*** ./src/app/edit-app/edit-app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll{\r\n    height:450px;\r\n    width:300px;\r\n    border:1px solid #ccc;\r\n    font:16px/26px Georgia, Garamond, Serif;\r\n    overflow:auto;\r\n    margin-left: 40px;\r\n    background-color: rgb(205, 206, 212);\r\n    }\r\n    \r\n    .btns{\r\n        margin-left: 30px;\r\n        margin-top: 7px;\r\n    }\r\n    \r\n    .btns button{\r\n        margin: 5px;\r\n    }\r\n    \r\n    .green{\r\n        background-color: #018786;\r\n        color: white;\r\n    }\r\n    \r\n    .btnback{\r\n        position: absolute;\r\n        top: 23%;\r\n        left: 85%;\r\n    }\r\n    \r\n    .btnback button{\r\n        height: 35px;\r\n        width: 150px;\r\n        font-size: 16px;\r\n        cursor: pointer;\r\n        /* border-radius: 10px; */\r\n        text-align: center;\r\n        padding: 0;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1hcHAvZWRpdC1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFDQUFxQztLQUNwQzs7SUFFRDtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7S0FDbkI7O0lBQ0Q7UUFDSSxZQUFZO0tBQ2Y7O0lBRUQ7UUFDSSwwQkFBMEI7UUFDMUIsYUFBYTtLQUNoQjs7SUFFRDtRQUNJLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsVUFBVTtLQUNiOztJQUVEO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtRQUMxQixtQkFBbUI7UUFDbkIsV0FBVztLQUNkIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1hcHAvZWRpdC1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGx7XHJcbiAgICBoZWlnaHQ6NDUwcHg7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGZvbnQ6MTZweC8yNnB4IEdlb3JnaWEsIEdhcmFtb25kLCBTZXJpZjtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIwNiwgMjEyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bnN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgfVxyXG4gICAgLmJ0bnMgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ3JlZW57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxODc4NjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG5iYWNre1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDIzJTtcclxuICAgICAgICBsZWZ0OiA4NSU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG5iYWNrIGJ1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/edit-app/edit-app.component.html":
/*!**************************************************!*\
  !*** ./src/app/edit-app/edit-app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-toolbar\" color=\"primary\">\r\n  <span>Forms Builder</span>\r\n\r\n  <span class=\"spacer\"></span>\r\n  <button mat-button [matMenuTriggerFor]=\"belowMenu\">Username<mat-icon class=\"example-icon\" aria-hidden=\"false\"\r\n          aria-label=\"Example user person_pin icon\">person_pin</mat-icon></button>\r\n  <mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\r\n      <!-- <button mat-menu-item routerLink=\"/sttings\">Account<mat-icon class=\"example-icon\" aria-hidden=\"false\"\r\n              aria-label=\"Example user settings_applications icon\">settings_applications</mat-icon></button> -->\r\n      <button mat-menu-item routerLink=\"/login\">Logout<mat-icon class=\"example-icon\" aria-hidden=\"false\"\r\n              aria-label=\"Example user exit_to_app icon\">exit_to_app</mat-icon></button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n<mat-toolbar>\r\n    <a href=\"\"[routerLink]=\"['/home']\"><h6>\r\n      <mat-icon class=\"example-icon\" aria-hidden=\"false\"aria-label=\"Example user home icon\">home</mat-icon>\r\n          Dashboard</h6></a>\r\n  </mat-toolbar>\r\n\r\n<div *ngIf=\"model && !report\" class=\"padding20 white-bg\">\r\n  <p style=\"color: #D81B60; font-weight: 500;margin-left: 30px;margin-top: 20px;\r\n\r\n  \">*Customize your form by drag and drop below fields to the form area.</p>\r\n\r\n  <div class=\"row\" >\r\n    <div class=\" scroll\">\r\n        <div class=\"row\">\r\n            <div class=\"col-8\" >\r\n            <label >Background Color <span class=\"spacer\"></span></label>\r\n            <input class=\"colorpick\" type=\"color\" name=\"bgColor\" [(ngModel)]=\"model.theme.bgColor\">\r\n            <label>Text Color  <span class=\"spacer\"></span></label>\r\n            <input class=\"colorpick\" type=\"color\" name=\"textColor\" [(ngModel)]=\"model.theme.textColor\">\r\n          </div>\r\n        </div>\r\n      <!--a draggable element-->\r\n      <div class=\"fields\" *ngFor=\"let item of fieldModels\" >\r\n        <div class=\"field pointer shadow-bg\" [dndDraggable]=\"item\" [dndEffectAllowed]=\"'copy'\"\r\n          (dndEnd)=\"onDragEnd($event)\">\r\n          <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\r\n          <h5>{{item.label}}</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- el view form drag -->\r\n    <div class=\"col-8\" >\r\n      <div class=\"form-group\" style=\"margin-bottom: 0px !important; padding: 30px 60px 5px 60px;\"\r\n        [style.backgroundColor]=\"model.theme.bgColor\" [style.color]=\"model.theme.textColor\">\r\n        <h2><input class=\"form-control\" type=\"text\" [(ngModel)]=\"model.name\" /></h2>\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"model.description\" />\r\n      </div>\r\n\r\n      <!--a dropzone-->\r\n      <!--to allow dropping content that is not [dndDraggable] set dndAllowExternal to true-->\r\n      <section dndDropzone (dndDragover)=\"onDragover($event)\" (dndDrop)=\"onDrop($event,model.attributes)\"\r\n        class=\"dndDropArea\" [ngClass]=\"{'empty':model.attributes.length == 0}\"\r\n        [style.backgroundColor]=\"model.theme.bgColor\" [style.color]=\"model.theme.textColor\">\r\n\r\n        <div class=\"field\" *ngFor=\"let item of model.attributes;let i= index;\" (dndStart)=\"onDragStart($event)\"\r\n          (dndCanceled)=\"onDragCanceled($event)\" (dndMoved)=\"onDragged(item, model.attributes, 'move')\"\r\n          [dndEffectAllowed]=\"'all'\" [dndDraggable]=\"item\">\r\n          <div class=\"row form-group\">\r\n            <div class=\"col-1\"><i class=\"fa fa-ellipsis-v dndHandle\" dndHandle></i></div>\r\n            <div class=\"col-7\">\r\n              <!-- <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\r\n            <h5>{{item.label}}\r\n            <span *ngIf=\"item.required\" class=\"red\">*</span></h5> -->\r\n              <div *ngIf=\"item.type=='text'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\r\n              </div>\r\n              <div *ngIf=\"item.type=='email'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\r\n              </div>\r\n              <div *ngIf=\"item.type=='phone'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\r\n              </div>\r\n              <div *ngIf=\"item.type=='number'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\"\r\n                  placeholder=\"{{item.placeholder}}\">\r\n              </div>\r\n              <div *ngIf=\"item.type=='date'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\r\n              </div>\r\n              <div *ngIf=\"item.type=='datetime-local'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\r\n              </div>\r\n              <div *ngIf=\"item.type=='textarea'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\r\n                      </textarea>\r\n              </div>\r\n              <!-- <div *ngIf=\"item.type=='file'\">\r\n                <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\"\r\n                  class=\"text-danger\">*</label>\r\n                <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\r\n                <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\r\n              </div> -->\r\n              <div *ngIf=\"item.type=='paragraph'\">\r\n                <p class=\"form-text\">{{item.placeholder}}</p>\r\n              </div>\r\n              <div *ngIf=\"item.type=='autocomplete'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <select class=\"form-control\" id=\"{{item.name}}\">\r\n                  <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>\r\n                </select>\r\n                <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\r\n              </div>\r\n              <div *ngIf=\"item.type=='checkbox'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\r\n                  <label class=\"cust-check-bx\">\r\n                    <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\r\n                    <span class=\"checkmark\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"item.type=='radio'\">\r\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n                <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\r\n                  <label class=\"cust-check-bx\">\r\n                    <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\"> {{v.label}}\r\n                    <span class=\"checkmark\"></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\r\n                <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\"\r\n                  id=\"{{item.name}}\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <i *ngIf=\"item.toggle\" (click)=\"item.toggle=false\" class=\"fa fa-chevron-up pull-right\"></i>\r\n              <i *ngIf=\"!item.toggle\" (click)=\"item.toggle=true\" class=\"fa fa-chevron-down pull-right\"></i>\r\n              <i (click)=\"removeField(i)\" class=\"fa fa-trash pull-right\"></i>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"item.toggle\" class=\"toggle-Wrapper\">\r\n            <div class=\"form-group\">\r\n              <label>Required</label>\r\n              <i *ngIf=\"item.required\" (click)=\"item.required=false\" class=\"fa fa-toggle-on red\"></i>\r\n              <i *ngIf=\"!item.required\" (click)=\"item.required=true\" class=\"fa fa-toggle-off\"></i>\r\n              <span class=\"pull-right ucfirst\">{{item.type}}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Label</label>\r\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.label\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Name</label>\r\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.name\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Placeholder</label>\r\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.placeholder\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Regex</label>\r\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.regex\" />\r\n            </div>\r\n            <div *ngIf=\"item.regex\" class=\"form-group\">\r\n              <label>Error text</label>\r\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.errorText\" />\r\n            </div>\r\n\r\n            <!-- number -->\r\n            <div *ngIf=\"item.type=='number'\" class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label>Min</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.min\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label>Max</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.max\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- radio || checkbox || autocomplete -->\r\n            <div *ngIf=\"item.type=='radio'|| item.type=='checkbox' || item.type=='autocomplete'\">\r\n              <div class=\"row\">\r\n                <div class=\"col-5\">\r\n                  <div class=\"form-group\">\r\n                    <label>Label</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-5\">\r\n                  <div class=\"form-group\">\r\n                    <label>Value</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                  <div class=\"form-group\">\r\n                    <label>Action</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngFor=\"let i of item.values; let valueIndex=index;\" class=\"row\">\r\n                <div class=\"col-5\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.label\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-5\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.value\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                  <div class=\"form-group\">\r\n                    <label (click)=\"item.values.splice(valueIndex,1)\">remove</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.label\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-5\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.value\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                  <div class=\"form-group\">\r\n                    <label (click)=\"addValue(item.values)\">Add</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--optional placeholder element for dropzone-->\r\n        <!--will be removed from DOM on init-->\r\n        <div class=\"dndPlaceholder\" dndPlaceholderRef>\r\n        </div>\r\n      </section>\r\n\r\n    </div>\r\n    <!-- el view form drag -->\r\n    <div class=\"row btns\">\r\n            <button mat-raised-button (click)=\"initReport()\" color=\"primary\" class=\"btn pull-left\">Preview</button>\r\n            <button mat-raised-button (click)=\"updateForm()\"class=\"btn  green pull-left\">Save</button>\r\n            <button  mat-raised-button color=\"warn\" class=\"btn pull-left\" [routerLink]=\"['/home']\">Cancel </button>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"model\" class=\"container marginT60  marginB30\" style=\"max-width:500px;\">\r\n\r\n  <div class=\"row\" style=\"padding:30px;\" [style.backgroundColor]=\"model.theme.bgColor\"\r\n    [style.color]=\"model.theme.textColor\">\r\n    <div class=\"col-12\">\r\n      <h2>{{model.name}}</h2>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <p>{{model.description}}</p>\r\n    </div>\r\n    <div *ngIf=\"success\" class=\"col-12\">\r\n      <div class=\"form-group\">\r\n        <label>Your form has been submitted.</label>\r\n      </div>\r\n    </div>\r\n    <form class=\"ftheme\">\r\n      <div *ngIf=\"!success\" class=\"col-12\">\r\n        <div *ngFor=\"let item of model.attributes\" class=\"form-group\">\r\n          <div *ngIf=\"item.type=='text'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\r\n              [(ngModel)]=\"item.value\" [required]=\"item.required\" [ngModelOptions]=\"{standalone: true}\"\r\n              autocomplete=\"off\">\r\n          </div>\r\n          <div *ngIf=\"item.type=='email'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\r\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\r\n          </div>\r\n          <div *ngIf=\"item.type=='phone'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\r\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\r\n          </div>\r\n          <div *ngIf=\"item.type=='number'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\"\r\n              placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\"\r\n              autocomplete=\"off\">\r\n          </div>\r\n          <div *ngIf=\"item.type=='date'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\r\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\r\n          </div>\r\n          <div *ngIf=\"item.type=='datetime-local'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\r\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\r\n          </div>\r\n          <div *ngIf=\"item.type=='textarea'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\r\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\r\n          </textarea>\r\n          </div>\r\n          <!-- <div *ngIf=\"item.type=='file'\">\r\n            <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\"\r\n              class=\"text-danger\">*</label>\r\n            <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\r\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\r\n            <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\r\n          </div> -->\r\n          <div *ngIf=\"item.type=='paragraph'\">\r\n            <p class=\"form-text\">{{item.placeholder}}</p>\r\n          </div>\r\n          <div *ngIf=\"item.type=='autocomplete'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <select class=\"form-control\" id=\"{{item.name}}\" [(ngModel)]=\"item.value\"\r\n              [ngModelOptions]=\"{standalone: true}\">\r\n              <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>\r\n            </select>\r\n          </div>\r\n          <div *ngIf=\"item.type=='checkbox'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\r\n              <label class=\"cust-check-bx\">\r\n                <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\r\n                <span class=\"checkmark\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"item.type=='radio'\">\r\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\r\n            <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\r\n              <label class=\"cust-check-bx\">\r\n                <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" [(ngModel)]=\"item.value\"\r\n                  [ngModelOptions]=\"{standalone: true}\"> {{v.label}}\r\n                <span class=\"checkmark\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\r\n            <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\"\r\n              id=\"{{item.name}}\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- view Form -->\r\n<div *ngIf=\"report\" class=\"padding20 white-bg\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 btnback\">\r\n        <button mat-raised-button (click)=\"report=false\" color=\"warn\"class=\"btn pull-left\"><mat-icon class=\"example-icon\" aria-hidden=\"false\"\r\n          aria-label=\"Example user arrow_back icon\">arrow_back</mat-icon>Back</button> \r\n      </div> \r\n      <!-- if records found -->\r\n      <div *ngIf=\"reports?.length > 0\" class=\"col-12\">\r\n        <div *ngFor=\"let records of reports\" class=\"report-block\">\r\n          <div *ngFor=\"let record of records.attributes\">\r\n            <div *ngIf=\"record.type !='button' && record.type !='paragraph'\" class=\"row\">\r\n              <div class=\"col-4\">{{record.label}}</div>\r\n              <div class=\"col-8\">{{record.value}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>  \r\n    </div>\r\n  \r\n  </div>\r\n  <!-- view Form -->\r\n\r\n  "

/***/ }),

/***/ "./src/app/edit-app/edit-app.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-app/edit-app.component.ts ***!
  \************************************************/
/*! exports provided: EditAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppComponent", function() { return EditAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditAppComponent = /** @class */ (function () {
    function EditAppComponent(_user, _router) {
        var _this = this;
        this._user = _user;
        this._router = _router;
        this.value = {
            label: "",
            value: ""
        };
        this.success = false;
        this.userId = 0;
        this.fieldModels = [
            {
                "type": "text",
                "icon": "fa-font",
                "label": "Text",
                "description": "Enter your name",
                "placeholder": "Enter your name",
                "className": "form-control",
                "subtype": "text",
                "regex": "",
                "handle": true
            },
            {
                "type": "email",
                "icon": "fa-envelope",
                "required": true,
                "label": "Email",
                "description": "Enter your email",
                "placeholder": "Enter your email",
                "className": "form-control",
                "subtype": "text",
                "regex": "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
                "errorText": "Please enter a valid email",
                "handle": true
            },
            {
                "type": "phone",
                "icon": "fa-phone",
                "label": "Phone",
                "description": "Enter your phone",
                "placeholder": "Enter your phone",
                "className": "form-control",
                "subtype": "text",
                "regex": "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
                "errorText": "Please enter a valid phone number",
                "handle": true
            },
            {
                "type": "number",
                "label": "Number",
                "icon": "fa-html5",
                "description": "Age",
                "placeholder": "Enter your age",
                "className": "form-control",
                "value": "20",
                "min": 12,
                "max": 90
            },
            {
                "type": "date",
                "icon": "fa-calendar",
                "label": "Date",
                "placeholder": "Date",
                "className": "form-control"
            },
            {
                "type": "datetime-local",
                "icon": "fa-calendar",
                "label": "DateTime",
                "placeholder": "Date Time",
                "className": "form-control"
            },
            {
                "type": "textarea",
                "icon": "fa-text-width",
                "label": "Textarea"
            },
            {
                "type": "paragraph",
                "icon": "fa-paragraph",
                "label": "Paragraph",
                "placeholder": "Type your text to display here only"
            },
            {
                "type": "checkbox",
                "required": true,
                "label": "Checkbox",
                "icon": "fa-list",
                "description": "Checkbox",
                "inline": true,
                "values": [
                    {
                        "label": "Option 1",
                        "value": "option-1"
                    },
                    {
                        "label": "Option 2",
                        "value": "option-2"
                    }
                ]
            },
            {
                "type": "radio",
                "icon": "fa-list-ul",
                "label": "Radio",
                "description": "Radio boxes",
                "values": [
                    {
                        "label": "Option 1",
                        "value": "option-1"
                    },
                    {
                        "label": "Option 2",
                        "value": "option-2"
                    }
                ]
            },
            {
                "type": "autocomplete",
                "icon": "fa-bars",
                "label": "Select",
                "description": "Select",
                "placeholder": "Select",
                "className": "form-control",
                "values": [
                    {
                        "label": "Option 1",
                        "value": "option-1"
                    },
                    {
                        "label": "Option 2",
                        "value": "option-2"
                    },
                    {
                        "label": "Option 3",
                        "value": "option-3"
                    }
                ]
            },
            {
                "type": "file",
                "icon": "fa-file",
                "label": "File Upload",
                "className": "form-control",
                "subtype": "file"
            },
            {
                "type": "button",
                "icon": "fa-paper-plane",
                "subtype": "submit",
                "label": "Submit"
            }
        ];
        this.modelFields = [];
        this.model = {
            name: 'App name...',
            description: 'App Description...',
            theme: {
                bgColor: "ffffff",
                textColor: "555555",
                bannerImage: ""
            },
            attributes: this.modelFields
        };
        this.report = false;
        this.reports = [];
        this._user.getUser()
            .subscribe(function (data) { _this.userId = data; console.log(data); }, function (error) { return _this._router.navigate(['/login']); });
    }
    EditAppComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe( params =>{
        //   console.log(params);
        //   this.us.getDataApi('/admin/getFormById',{id:params.id}).subscribe(r=>{
        //     console.log(r);
        //     this.model = r['data'];
        //   });
        // });
        // this.model = this.cs.data; 
        // console.log(this.model.data);
    };
    EditAppComponent.prototype.onDragStart = function (event) {
        console.log("drag started", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDragEnd = function (event) {
        console.log("drag ended", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDraggableCopied = function (event) {
        console.log("draggable copied", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDraggableLinked = function (event) {
        console.log("draggable linked", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDragged = function (item, list, effect) {
        if (effect === "move") {
            var index = list.indexOf(item);
            list.splice(index, 1);
        }
    };
    EditAppComponent.prototype.onDragCanceled = function (event) {
        console.log("drag cancelled", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDragover = function (event) {
        console.log("dragover", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDrop = function (event, list) {
        if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
            if (event.dropEffect === "copy")
                event.data.name = event.data.type + '-' + new Date().getTime();
            var index = event.index;
            if (typeof index === "undefined") {
                index = list.length;
            }
            list.splice(index, 0, event.data);
        }
    };
    EditAppComponent.prototype.addValue = function (values) {
        values.push(this.value);
        this.value = { label: "", value: "" };
    };
    EditAppComponent.prototype.removeField = function (i) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: "Do you want to remove this field?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove!'
        }).then(function (result) {
            if (result.value) {
                _this.model.attributes.splice(i, 1);
            }
        });
    };
    EditAppComponent.prototype.updateForm = function () {
        var _this = this;
        var input = new FormData;
        input.append('id', this.model._id);
        input.append('name', this.model.name);
        input.append('description', this.model.description);
        input.append('bannerImage', this.model.theme.bannerImage);
        input.append('bgColor', this.model.theme.bgColor);
        input.append('textColor', this.model.theme.textColor);
        input.append('attributes', JSON.stringify(this.model.attributes));
        var observable = this._user.addForm(this.model, this.userId);
        observable.subscribe(function (data) {
            console.log("Got the information from post data", data);
            _this._router.navigate(['/home']);
        });
        console.log("hhhhhhhhhhhhh", JSON.stringify(this.model.attributes));
        console.log("iiiinnnppppuut", this.model);
        // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
        //   console.log(r);
        //   swal('Success','App updated successfully','success');
        // });
    };
    EditAppComponent.prototype.initReport = function () {
        this.report = true;
        var input = {
            id: this.model._id
        };
        // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
        //   this.reports = r.data;
        //   console.log('reports',this.reports);
        //   this.reports.map(records=>{
        //     return records.attributes.map(record=>{
        //       if(record.type=='checkbox'){
        //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
        //       }
        //     })
        //   });
        // });
    };
    EditAppComponent.prototype.toggleValue = function (item) {
        item.selected = !item.selected;
    };
    EditAppComponent.prototype.submit = function () {
        var valid = true;
        var validationArray = JSON.parse(JSON.stringify(this.model.attributes));
        validationArray.reverse().forEach(function (field) {
            console.log(field.label + '=>' + field.required + "=>" + field.value);
            if (field.required && !field.value && field.type != 'checkbox') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'Please enter ' + field.label, 'error');
                valid = false;
                return false;
            }
            if (field.required && field.regex) {
                var regex = new RegExp(field.regex);
                if (regex.test(field.value) == false) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', field.errorText, 'error');
                    valid = false;
                    return false;
                }
            }
            if (field.required && field.type == 'checkbox') {
                if (field.values.filter(function (r) { return r.selected; }).length == 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'Please enterrr ' + field.label, 'error');
                    valid = false;
                    return false;
                }
            }
        });
        if (!valid) {
            return false;
        }
        console.log('Save', this.model);
        var input = new FormData;
        input.append('formId', this.model._id);
        input.append('attributes', JSON.stringify(this.model.attributes));
        // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
        //   console.log(r);
        //   swal('Success','You have contact sucessfully','success');
        //   this.success = true;
        // },error=>{
        //   swal('Error',error.message,'error');
        // });
    };
    EditAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-app',
            template: __webpack_require__(/*! ./edit-app.component.html */ "./src/app/edit-app/edit-app.component.html"),
            styles: [__webpack_require__(/*! ./edit-app.component.css */ "./src/app/edit-app/edit-app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditAppComponent);
    return EditAppComponent;
}());



/***/ }),

/***/ "./src/app/guest-page/guest-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/guest-page/guest-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0LXBhZ2UvZ3Vlc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/guest-page/guest-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/guest-page/guest-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n <h1>Thank you for your submission</h1>\n <br>\n <img mat-card-image src=\"../../assets/img/formhead.jpg\" alt=\"Photo of a Shiba Inu\">\n</body>\n</html>"

/***/ }),

/***/ "./src/app/guest-page/guest-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/guest-page/guest-page.component.ts ***!
  \****************************************************/
/*! exports provided: GuestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPageComponent", function() { return GuestPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuestPageComponent = /** @class */ (function () {
    function GuestPageComponent() {
    }
    GuestPageComponent.prototype.ngOnInit = function () {
    };
    GuestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest-page',
            template: __webpack_require__(/*! ./guest-page.component.html */ "./src/app/guest-page/guest-page.component.html"),
            styles: [__webpack_require__(/*! ./guest-page.component.css */ "./src/app/guest-page/guest-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuestPageComponent);
    return GuestPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row2{\r\n  border-radius:15px;\r\n  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\r\n  margin: 30px 10px auto;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  width: 350px;\r\n  height: 420px;\r\n  padding: 60px 20px;\r\n  padding-bottom: 10px;\r\n  box-sizing: border-box;\r\n  background :#eff0f2;\r\n  }\r\n  \r\n  h2{\r\n    margin: 0;\r\n    padding: 0 0 20px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .reg{\r\n    margin: 10px;\r\n    padding: 5px;\r\n    font-style: italic;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n  }\r\n  \r\n  .icon{\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    /* overflow:hidden; */\r\n    position: absolute;\r\n    top: -50px;\r\n    left: calc(50% - 50px);\r\n  }\r\n  \r\n  .row2 .input::-webkit-outer-spin-button,\r\n  .row2 .input::-webkit-inner-spin-button {\r\n    display: none;\r\n  }\r\n  \r\n  .row2 .input{\r\n    -moz-appearance: textfield;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  \r\n  }\r\n  \r\n  .row2 .loginbtn{\r\n    height: 35px;\r\n    width: 130px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    /* border-radius: 10px; */\r\n    text-align: center;\r\n  }\r\n  \r\n  .action{\r\n  padding-top: 30px;\r\n  position: absolute;\r\n  top: 65%;\r\n  left: 55%;\r\n  \r\n  }\r\n  \r\n  mat-form-field {\r\n    width: 100%;\r\n  }\r\n  \r\n  .row2 p{\r\n    position: fixed;\r\n      left: 0;\r\n      bottom: 0;\r\n      width: 100%;\r\n      text-align: center;\r\n  }\r\n  \r\n  form{\r\n    margin-top: 10px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUduQiw0Q0FBNEM7RUFDNUMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixvQkFBb0I7R0FDbkI7O0VBRUQ7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7R0FDbEI7O0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7R0FDeEI7O0VBQ0Q7O0lBRUUsY0FBYztHQUNmOztFQUVEO0lBQ0UsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQkFBb0I7O0dBRXJCOztFQUNEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixtQkFBbUI7R0FDcEI7O0VBRUQ7RUFDQSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVOztHQUVUOztFQUNEO0lBQ0UsWUFBWTtHQUNiOztFQUVEO0lBQ0UsZ0JBQWdCO01BQ2QsUUFBUTtNQUNSLFVBQVU7TUFDVixZQUFZO01BQ1osbUJBQW1CO0dBQ3RCOztFQUVEO0lBQ0UsaUJBQWlCO0dBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cye1xyXG4gIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgbWFyZ2luOiAzMHB4IDEwcHggYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogNDIwcHg7XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZCA6I2VmZjBmMjtcclxuICB9XHJcbiAgXHJcbiAgaDJ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJlZ3tcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5pY29ue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8qIG92ZXJmbG93OmhpZGRlbjsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gIH1cclxuICAucm93MiAuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgLnJvdzIgLmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cyIC5pbnB1dHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIFxyXG4gIH1cclxuICAucm93MiAubG9naW5idG57XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9ue1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY1JTtcclxuICBsZWZ0OiA1NSU7XHJcbiAgXHJcbiAgfVxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAucm93MiBwe1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGZvcm17XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"row2\">\n  <img src=\"../../assets/img/user3.png\" class=\"icon\" alt=\"\">\n  <h2>Log In</h2>\n  <hr>\n    <form [formGroup]=\"loginForm\">\n        <mat-form-field>\n          <input  matInput placeholder=\"Enter your email\" formControlName=\"email\" type=\"email\"  id=\"exampleInputEmail1\"\n            aria-describedby=\"emailHelp\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\"></small>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n            formControlName=\"password\" type=\"password\"  id=\"passwordInput\"\n            aria-describedby=\"passHelp\" required>\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n            [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <small id=\"passHelp\" class=\"form-text text-muted\"></small>\n        </mat-form-field>\n        <br>\n        <div class=\"action\">\n        <button class=\"loginbtn\" mat-raised-button color=\"accent\" (click)=\"login()\">Log in</button> \n        </div>\n        <p class=\"reg\">New user? <a style=\"color: rgb(64, 64, 211);\" (click)=\"moveToRegister()\" >Create an Account</a></p> \n    </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        // console.log(JSON.stringify(this.loginForm.value));
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body { height: 100%; }\r\n.spacer{\r\n  flex: 1 1 auto;\r\n}\r\n.app-toolbar {\r\n  position: sticky;\r\n  position: -webkit-sticky; /* For macOS/iOS Safari */\r\n  top: 0; /* Sets the sticky toolbar to be on top */\r\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n}\r\n:host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\nh1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    margin: 8px 0;\r\n  }\r\np {\r\n    margin: 0;\r\n  }\r\n.spacer {\r\n    flex: 1 1 auto !important;\r\n  }\r\n.toolbar {\r\n    height: 60px;\r\n    margin: -8px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n.toolbar img {\r\n    margin: 0 16px;\r\n  }\r\n.toolbar #twitter-logo {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n  }\r\n.toolbar #twitter-logo:hover {\r\n    opacity: 0.8;\r\n  }\r\n.content {\r\n    display: flex;\r\n    margin:  auto;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n  }\r\n.green{\r\n    background-color: #556091;\r\n    color: white;\r\n    padding: 0px;\r\n    width: 300px;\r\n    font-size: 13px;\r\n  }\r\n.mat-card {\r\n    max-width: 250px;\r\n    margin: 5px 10px auto;\r\n    align-self: auto;\r\n  }\r\n.mat-card-actions{\r\n    display: flex;\r\n  }\r\n.mat-card-actions .flex-spacer{\r\n    width: 100%;\r\n  }\r\nsvg.material-icons {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\nsvg.material-icons:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n.card svg.material-icons path {\r\n    fill: #888;\r\n  }\r\nsvg#clouds {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n/* Responsive Styles */\r\n@media screen and (max-width: 767px) {\r\n    .card-container > *:not(.circle-link) ,\r\n    .terminal {\r\n      width: 100%;\r\n    }\r\n    .card:not(.highlight-card) {\r\n      height: 16px;\r\n      margin: 8px 0;\r\n    }\r\n    .card.highlight-card span {\r\n      margin-left: 72px;\r\n    }\r\n    svg#rocket-smoke {\r\n      right: 120px;\r\n      -webkit-transform: rotate(-5deg);\r\n              transform: rotate(-5deg);\r\n    }\r\n  }\r\n@media screen and (max-width: 575px) {\r\n    svg#rocket-smoke {\r\n      display: none;\r\n      visibility: hidden;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsYUFBYSxFQUFFO0FBQzVCO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QixDQUFDLDBCQUEwQjtFQUNwRCxPQUFPLENBQUMsMENBQTBDO0VBQ2xELGNBQWMsQ0FBQyxnRUFBZ0U7Q0FDaEY7QUFDRDtJQUNJLDJKQUEySjtJQUMzSixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsbUNBQW1DO0dBQ3BDO0FBQ0Q7Ozs7OztJQU1FLGNBQWM7R0FDZjtBQUNEO0lBQ0UsVUFBVTtHQUNYO0FBQ0Q7SUFDRSwwQkFBMEI7R0FDM0I7QUFDRDtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjtBQUNEO0lBQ0UsZUFBZTtHQUNoQjtBQUNEO0lBQ0UsYUFBYTtJQUNiLGVBQWU7R0FDaEI7QUFDRDtJQUNFLGFBQWE7R0FDZDtBQUNEO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwwQkFBMEI7R0FDM0I7QUFDRDtJQUNFLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7R0FDakI7QUFDRDtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0dBQ2xCO0FBRUQ7SUFDRSxjQUFjO0dBQ2Y7QUFDRDtJQUNFLFlBQVk7R0FDYjtBQUNEO0lBQ0UsYUFBYTtJQUNiLFlBQVk7R0FDYjtBQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0FBQ0Q7SUFDRSxXQUFXO0dBQ1o7QUFDRDtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0dBQ2Y7QUFDRCx1QkFBdUI7QUFDdkI7SUFDRTs7TUFFRSxZQUFZO0tBQ2I7SUFDRDtNQUNFLGFBQWE7TUFDYixjQUFjO0tBQ2Y7SUFDRDtNQUNFLGtCQUFrQjtLQUNuQjtJQUNEO01BQ0UsYUFBYTtNQUNiLGlDQUF5QjtjQUF6Qix5QkFBeUI7S0FDMUI7R0FDRjtBQUNEO0lBQ0U7TUFDRSxjQUFjO01BQ2QsbUJBQW1CO0tBQ3BCO0dBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XHJcbi5zcGFjZXJ7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmFwcC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cclxuICB0b3A6IDA7IC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xyXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxufVxyXG46aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgfVxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50b29sYmFyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogLThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC50b29sYmFyIGltZyB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46ICBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gIH1cclxuICAuZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2MDkxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAubWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogNXB4IDEwcHggYXV0bztcclxuICAgIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgfVxyXG4gXHJcbiAgLm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAubWF0LWNhcmQtYWN0aW9ucyAuZmxleC1zcGFjZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogIzg4ODtcclxuICB9XHJcbiAgc3ZnI2Nsb3VkcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IC0xNjBweDtcclxuICAgIGxlZnQ6IC0yMzBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIHdpZHRoOiAxOTIwcHg7XHJcbiAgfVxyXG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4gICAgLnRlcm1pbmFsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICAgIH1cclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-toolbar\" color=\"primary\">\n  <span>Forms Builder</span>\n\n  <span class=\"spacer\"></span>\n  <button mat-button [matMenuTriggerFor]=\"belowMenu\">Username<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n          aria-label=\"Example user person_pin icon\">person_pin</mat-icon></button>\n  <mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n      <button mat-menu-item routerLink=\"/sttings\">Account<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user settings_applications icon\">settings_applications</mat-icon></button>\n      <button mat-menu-item routerLink=\"/login\">Logout<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user exit_to_app icon\">exit_to_app</mat-icon></button>\n  </mat-menu>\n</mat-toolbar>\n<mat-toolbar>\n  <h3>Dashboard \\ Forms</h3>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    border-radius:15px;\r\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\r\n    margin: 30px 10px auto;\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 70%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    width: 350px;\r\n    height: 480px;\r\n    padding: 60px 20px;\r\n    padding-bottom: 10px;\r\n    box-sizing: border-box;\r\n    background :#eff0f2e5;\r\n    }\r\n  \r\n   .img{\r\n    position: fixed;\r\n    height: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    opacity: 0.8;\r\n    }\r\n  \r\n   .right{\r\n        width: 300px;\r\n        height: 250px;\r\n        float:left;\r\n    \r\n    }\r\n  \r\n   mat-form-field {\r\n      width: 100%;\r\n    }\r\n  \r\n   .regbtn{\r\n      height: 35px;\r\n      width: 130px;\r\n      font-size: 16px;\r\n      cursor: pointer;\r\n      /* border-radius: 10px; */\r\n      text-align: center;\r\n      \r\n    }\r\n  \r\n   .action{\r\n      padding-top: 30px;\r\n      position: absolute;\r\n      top: 70%;\r\n      left: 57%;\r\n    }\r\n  \r\n   .log{\r\n      position: fixed;\r\n      left: 0;\r\n      bottom: 0;\r\n      width: 100%;\r\n      text-align: center;\r\n      font-style: italic;\r\n    }\r\n  \r\n   @media screen and (max-width: 770px) {\r\n        .wrapper{\r\n          border-radius:15px;\r\n          box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\r\n          margin: 30px 10px auto;\r\n          position: absolute;\r\n          top: 45%;\r\n          left: 50%;\r\n          -webkit-transform: translate(-50%,-50%);\r\n                  transform: translate(-50%,-50%);\r\n          width: 350px;\r\n          height: 480px;\r\n          padding: 60px 20px;\r\n          padding-bottom: 10px;\r\n          box-sizing: border-box;\r\n          background :#eff0f2e5;\r\n          }\r\n        \r\n        svg#rocket-smoke {\r\n          display: none;\r\n          visibility: hidden;\r\n        }\r\n        .img{\r\n            display: none;\r\n            visibility: hidden;\r\n        }\r\n      }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUduQiw0Q0FBNEM7SUFDNUMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixzQkFBc0I7S0FDckI7O0dBRUY7SUFDQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7S0FDWjs7R0FFRDtRQUNJLGFBQWE7UUFDYixjQUFjO1FBQ2QsV0FBVzs7S0FFZDs7R0FDRDtNQUNFLFlBQVk7S0FDYjs7R0FFRDtNQUNFLGFBQWE7TUFDYixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQiwwQkFBMEI7TUFDMUIsbUJBQW1COztLQUVwQjs7R0FFRDtNQUNFLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsU0FBUztNQUNULFVBQVU7S0FDWDs7R0FFRDtNQUNFLGdCQUFnQjtNQUNoQixRQUFRO01BQ1IsVUFBVTtNQUNWLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsbUJBQW1CO0tBQ3BCOztHQUNDO1FBQ0U7VUFDRSxtQkFBbUI7VUFHbkIsNENBQTRDO1VBQzVDLHVCQUF1QjtVQUN2QixtQkFBbUI7VUFDbkIsU0FBUztVQUNULFVBQVU7VUFDVix3Q0FBZ0M7a0JBQWhDLGdDQUFnQztVQUNoQyxhQUFhO1VBQ2IsY0FBYztVQUNkLG1CQUFtQjtVQUNuQixxQkFBcUI7VUFDckIsdUJBQXVCO1VBQ3ZCLHNCQUFzQjtXQUNyQjs7UUFFSDtVQUNFLGNBQWM7VUFDZCxtQkFBbUI7U0FDcEI7UUFDRDtZQUNJLGNBQWM7WUFDZCxtQkFBbUI7U0FDdEI7T0FDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBtYXJnaW46IDMwcHggMTBweCBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBsZWZ0OiA3MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQgOiNlZmYwZjJlNTtcclxuICAgIH1cclxuICBcclxuICAgLmltZ3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJpZ2h0e1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWdidG57XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9ue1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDcwJTtcclxuICAgICAgbGVmdDogNTclO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2d7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XHJcbiAgICAgICAgLndyYXBwZXJ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDEwcHggYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kIDojZWZmMGYyZTU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"img\" src=\"../../assets/img/img-03.png\" alt=\"\">\n<mat-card class=\"wrapper\">\n  <div class=\"right\">\n      <h3>Join Us</h3>\n      <hr>\n    <form [formGroup]=\"registerForm\">\n        <mat-form-field>\n            <input  matInput placeholder=\"E-mail\" formControlName=\"email\" type=\"email\" id=\"exampleInputEmail1\"\n              aria-describedby=\"emailHelp\" required>\n            <small id=\"emailHelp\" class=\"form-text text-muted\"></small>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n        <input matInput id=\"exampleInputUsername\" aria-describedby=\"userHelp\" formControlName=\"username\" placeholder=\"Username\" required>\n        <small id=\"userHelp\" class=\"form-text text-muted\"></small>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n          <input  matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n            formControlName=\"password\" type=\"password\" id=\"passwordInput\"\n            aria-describedby=\"passHelp\" required>\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n            [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <small id=\"passHelp\" class=\"form-text text-muted\"></small>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n            <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n              formControlName=\"cpass\" type=\"password\"  id=\"CpasswordInput\"\n              aria-describedby=\"CpassHelp\" required>\n              <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n              [attr.aria-pressed]=\"hide\">\n              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <small id=\"passHelp\" class=\"form-text text-muted\"></small>\n          </mat-form-field>\n\n        <div class=\"action\">\n          <button class=\"regbtn\" mat-raised-button color=\"accent\" (click)=\"register()\">Register</button> \n          </div>\n    </form>\n    <div class=\"log\">\n        <p >Have an account? <a href=\"\" (click)=\"moveToLogin()\" >Login</a></p> \n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_router, _userService, route) {
        this._router = _router;
        this._userService = _userService;
        this.route = route;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            cpass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.moveToLogin = function () {
        this._router.navigate(['/login']);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)) {
            console.log('Invalid Form');
            return;
        }
        this._userService.register(JSON.stringify(this.registerForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/login']); }, function (error) { return console.error(error); });
        // console.log(JSON.stringify(this.registerForm.value));
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/submit-form/submit-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/submit-form/submit-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1pdC1mb3JtL3N1Ym1pdC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/submit-form/submit-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/submit-form/submit-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px; background-color:#eff0f2;border-radius:15px;\n  -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n  -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\">\n\n  <div class=\"col-sm-12\">\n\n    <div class=\"container marginT60  marginB30\" style=\"max-width:500px;\">\n\n      <div class=\"row\" style=\"padding:30px;\" [style.backgroundColor]=\"model.theme.bgColor\"\n        [style.color]=\"model.theme.textColor\">\n        <div class=\"col-12\">\n          <h2>{{model.name}}</h2>\n        </div>\n        <div class=\"col-12\">\n          <p>{{model.description}}</p>\n        </div>\n        <div *ngIf=\"success\" class=\"col-12\">\n          <div class=\"form-group\">\n            <label>Your form has been submitted.</label>\n          </div>\n        </div>\n        <form (submit)=\"onSubmit()\" class=\"ftheme\">\n          <div *ngIf=\"!success\" class=\"col-12\">\n            <div *ngFor=\"let item of model.attributes\" class=\"form-group\">\n              <div *ngIf=\"item.type=='text'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"text\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\" [required]=\"item.required\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='email'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"email\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='phone'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"email\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='number'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"number\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\" min=\"{{item.min}}\"\n                  max=\"{{item.max}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='date'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"date\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='datetime-local'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"datetime-local\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='textarea'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <textarea class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n                  </textarea>\n              </div>\n              <div *ngIf=\"item.type=='file'\">\n                <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\"\n                  class=\"text-danger\">*</label>\n                <input type=\"file\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n                <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n              </div>\n              <div *ngIf=\"item.type=='paragraph'\">\n                <p class=\"form-text\">{{item.placeholder}}</p>\n              </div>\n              <div *ngIf=\"item.type=='autocomplete'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <select class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  [(ngModel)]=\"newSubmission[item.name]\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>\n                </select>\n                <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n              </div>\n              <div *ngIf=\"item.type=='checkbox'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                  <label class=\"cust-check-bx\">\n                    <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n                    <span class=\"checkmark\"></span>\n                  </label>\n                </div>\n              </div>\n              <div *ngIf=\"item.type=='radio'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                  <label class=\"cust-check-bx\">\n                    <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                      [ngModelOptions]=\"{standalone: true}\"> {{v.label}}\n                    <span class=\"checkmark\"></span>\n                  </label>\n                </div>\n              </div>\n              <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n                <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\"\n                  name=\"{{item.name}}\" id=\"{{item.name}}\">\n              </div>\n            </div>\n\n            <p (click)=\"show=1\" class=\"marginT60 pointer\">Show developer data</p>\n\n          </div>\n          <div class=\"left\">\n            <button mat-raised-button color=\"accent\">Submit</button>\n          </div>\n        </form>\n      </div>\n      <div class=\"left\">\n        <button mat-raised-button color=\"accent\" [routerLink]=\"['/home']\">Back بنحذف هذاالبوتن </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/submit-form/submit-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/submit-form/submit-form.component.ts ***!
  \******************************************************/
/*! exports provided: SubmitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitFormComponent", function() { return SubmitFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SubmitFormComponent = /** @class */ (function () {
    function SubmitFormComponent(_user, _router, route) {
        this._user = _user;
        this._router = _router;
        this.route = route;
        this.model = {};
        this.userId = 0;
        this.formId = "";
        this.newSubmission = {};
    }
    SubmitFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var formId = this.route.snapshot.params["id"];
        console.log(formId);
        var observable = this._user.getForm(formId);
        observable.subscribe(function (data) {
            _this.model = data[0];
            _this.formId = data[0]._id;
            for (var _i = 0, _a = data[0].attributes; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.newSubmission[item.name] = "";
            }
        });
    };
    SubmitFormComponent.prototype.toggleValue = function (item) {
        item.selected = !item.selected;
    };
    SubmitFormComponent.prototype.onSubmit = function () {
        var observable = this._user.submitForm(this.newSubmission, this.formId);
        observable.subscribe(function (data) {
            console.log("Got the information from post data", data);
            // this.newSubmission = { title: "" }
        });
        console.log(this.newSubmission);
        this._router.navigate(['guest']);
    };
    SubmitFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submit-form',
            template: __webpack_require__(/*! ./submit-form.component.html */ "./src/app/submit-form/submit-form.component.html"),
            styles: [__webpack_require__(/*! ./submit-form.component.css */ "./src/app/submit-form/submit-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubmitFormComponent);
    return SubmitFormComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.register = function (body) {
        return this._http.post('http://127.0.0.1:3000/register', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.getUser = function () {
        return this._http.get('http://127.0.0.1:3000/getUser', {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.login = function (body) {
        return this._http.post('http://127.0.0.1:3000/login', body, {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    // user(){
    //   return this._http.get('http://127.0.0.1:3000/user',{
    //     observe:'body',
    //     withCredentials: true,
    //     headers:new HttpHeaders().append('Content-Type','application/json')
    //   })
    // }
    UserService.prototype.logout = function () {
        return this._http.get('http://127.0.0.1:3000/logout', {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.getForm = function (formId) {
        return this._http.get('http://127.0.0.1:3000/viewForm/' + formId);
    };
    UserService.prototype.deleteForm = function (formId) {
        return this._http.get('http://127.0.0.1:3000/deleteForm/' + formId);
    };
    UserService.prototype.getForms = function (userId) {
        return this._http.get('http://127.0.0.1:3000/getForms/' + userId);
    };
    UserService.prototype.addForm = function (newForm, userId) {
        console.log('this is userid:' + userId);
        return this._http.post('/new/form/' + userId, newForm);
    };
    UserService.prototype.submitForm = function (newSubmission, formId) {
        return this._http.post('/submitForm/' + formId, newSubmission);
    };
    UserService.prototype.addElement = function (newElement, formId) {
        return this._http.post('/new/element/' + formId, newElement);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/userhome/userhome.component.css":
/*!*************************************************!*\
  !*** ./src/app/userhome/userhome.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body { height: 100%; }\r\n\r\n.spacer{\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.formbtn{\r\n  height: 35px;\r\n  width: 150px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  /* border-radius: 10px; */\r\n  text-align: center;\r\n  padding: 0;\r\n}\r\n\r\n.app-toolbar {\r\n  position: sticky;\r\n  position: -webkit-sticky; /* For macOS/iOS Safari */\r\n  top: 0; /* Sets the sticky toolbar to be on top */\r\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n}\r\n\r\n:host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\nh1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    margin: 8px 0;\r\n  }\r\n\r\np {\r\n    margin: 0;\r\n  }\r\n\r\n.toolbar {\r\n    height: 60px;\r\n    margin: -8px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n\r\n.toolbar img {\r\n    margin: 0 16px;\r\n  }\r\n\r\n.toolbar #twitter-logo {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n  }\r\n\r\n.toolbar #twitter-logo:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n.content {\r\n    display: flex;\r\n    margin:  auto;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n  }\r\n\r\n.left{\r\n  /* padding-top: 10px; */\r\n  position: absolute;\r\n  top: 23%;\r\n  left: 85%;\r\n   \r\n  }\r\n\r\n.view{\r\n    background-color: #018786;\r\n    color: white;\r\n  }\r\n\r\n.mat-card {\r\n    max-width: 250px;\r\n    margin: 5px 10px auto;\r\n    align-self: auto;\r\n  }\r\n\r\n.mat-card-avatar{\r\n    background-image: url('formhead.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n.mat-card-actions{\r\n    display: flex;\r\n  }\r\n\r\n.mat-card-actions button{\r\n    margin: 3px;\r\n  }\r\n\r\n.mat-card-actions .flex-spacer{\r\n    width: 100%;\r\n  }\r\n\r\nsvg.material-icons {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\n\r\nsvg.material-icons:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n\r\n.card svg.material-icons path {\r\n    fill: #888;\r\n  }\r\n\r\n.card-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: left;\r\n    margin-top: 16px;\r\n  }\r\n\r\n.card {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n  }\r\n\r\n.card-container .card:not(:last-child) {\r\n    margin-right: 0;\r\n  }\r\n\r\n.card.card-small {\r\n    height: 16px;\r\n    width: 168px;\r\n  }\r\n\r\n.card-container .card:not(.highlight-card) {\r\n    cursor: pointer;\r\n  }\r\n\r\n.card-container .card:not(.highlight-card):hover {\r\n    -webkit-transform: translateY(-3px);\r\n            transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(black, 0.35);\r\n  }\r\n\r\n.card-container .card:not(.highlight-card):hover .material-icons path {\r\n    fill: rgb(105, 103, 103);\r\n  }\r\n\r\n.card.highlight-card {\r\n    background-color: #7792ad;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n  }\r\n\r\n.card.card.highlight-card span {\r\n    margin-left: 60px;\r\n  }\r\n\r\na,\r\n  a:visited,\r\n  a:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n  }\r\n\r\na:hover {\r\n    color: #125699;\r\n  }\r\n\r\n.circle-link {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 40px;\r\n    margin: 8px;\r\n    background-color: white;\r\n    border: 1px solid #eeeeee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 1s ease-out;\r\n  }\r\n\r\n.circle-link:hover {\r\n    -webkit-transform: translateY(-0.25rem);\r\n            transform: translateY(-0.25rem);\r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\nfooter {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n  }\r\n\r\nfooter a {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\nsvg#clouds {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n\r\n/* Responsive Styles */\r\n\r\n@media screen and (max-width: 767px) {\r\n    .card-container > *:not(.circle-link) ,\r\n    .terminal {\r\n      width: 100%;\r\n    }\r\n    .card:not(.highlight-card) {\r\n      height: 16px;\r\n      margin: 8px 0;\r\n    }\r\n    .card.highlight-card span {\r\n      margin-left: 72px;\r\n    }\r\n    svg#rocket-smoke {\r\n      right: 120px;\r\n      -webkit-transform: rotate(-5deg);\r\n              transform: rotate(-5deg);\r\n    }\r\n  }\r\n\r\n@media screen and (max-width: 575px) {\r\n    svg#rocket-smoke {\r\n      display: none;\r\n      visibility: hidden;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmhvbWUvdXNlcmhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLGFBQWEsRUFBRTs7QUFFNUI7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsV0FBVztDQUNaOztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QixDQUFDLDBCQUEwQjtFQUNwRCxPQUFPLENBQUMsMENBQTBDO0VBQ2xELGNBQWMsQ0FBQyxnRUFBZ0U7Q0FDaEY7O0FBQ0Q7SUFDSSwySkFBMko7SUFDM0osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLG1DQUFtQztHQUNwQzs7QUFDRDs7Ozs7O0lBTUUsY0FBYztHQUNmOztBQUNEO0lBQ0UsVUFBVTtHQUNYOztBQUNEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCOztBQUNEO0lBQ0UsZUFBZTtHQUNoQjs7QUFDRDtJQUNFLGFBQWE7SUFDYixlQUFlO0dBQ2hCOztBQUNEO0lBQ0UsYUFBYTtHQUNkOztBQUNEO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwwQkFBMEI7R0FDM0I7O0FBQ0g7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVOztHQUVUOztBQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLGFBQWE7R0FDZDs7QUFDRDtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0dBQ2xCOztBQUNEO0lBQ0Usc0NBQXFEO0lBQ3JELHVCQUF1QjtHQUN4Qjs7QUFDRDtJQUNFLGNBQWM7R0FDZjs7QUFDRDtJQUNFLFlBQVk7R0FDYjs7QUFDRDtJQUNFLFlBQVk7R0FDYjs7QUFDRDtJQUNFLGFBQWE7SUFDYixZQUFZO0dBQ2I7O0FBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7O0FBQ0Q7SUFDRSxXQUFXO0dBQ1o7O0FBQ0Q7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7R0FDbEI7O0FBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxrQkFBa0I7R0FDbkI7O0FBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7O0FBQ0Q7SUFDRSxhQUFhO0lBQ2IsYUFBYTtHQUNkOztBQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCOztBQUNEO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1Qix5Q0FBeUM7R0FDMUM7O0FBQ0Q7SUFDRSx5QkFBeUI7R0FDMUI7O0FBQ0Q7SUFDRSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7R0FDcEI7O0FBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7O0FBQ0Q7OztJQUdFLGVBQWU7SUFDZixzQkFBc0I7R0FDdkI7O0FBQ0Q7SUFDRSxlQUFlO0dBQ2hCOztBQUNEO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHlFQUF5RTtJQUN6RSx3QkFBd0I7R0FDekI7O0FBQ0Q7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLDRDQUE0QztHQUM3Qzs7QUFDRDtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtHQUNuQjs7QUFDRDtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7R0FDckI7O0FBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztHQUNmOztBQUNELHVCQUF1Qjs7QUFDdkI7SUFDRTs7TUFFRSxZQUFZO0tBQ2I7SUFDRDtNQUNFLGFBQWE7TUFDYixjQUFjO0tBQ2Y7SUFDRDtNQUNFLGtCQUFrQjtLQUNuQjtJQUNEO01BQ0UsYUFBYTtNQUNiLGlDQUF5QjtjQUF6Qix5QkFBeUI7S0FDMUI7R0FDRjs7QUFDRDtJQUNFO01BQ0UsY0FBYztNQUNkLG1CQUFtQjtLQUNwQjtHQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlcmhvbWUvdXNlcmhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cclxuXHJcbi5zcGFjZXJ7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtYnRue1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5hcHAtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXHJcbiAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXHJcbn1cclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLnRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAtOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgfVxyXG4ubGVmdHtcclxuICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMyU7XHJcbiAgbGVmdDogODUlO1xyXG4gICBcclxuICB9XHJcbiAgLnZpZXd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4Nzg2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAubWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogNXB4IDEwcHggYXV0bztcclxuICAgIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgfVxyXG4gIC5tYXQtY2FyZC1hdmF0YXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9mb3JtaGVhZC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAubWF0LWNhcmQtYWN0aW9ucyBidXR0b257XHJcbiAgICBtYXJnaW46IDNweDtcclxuICB9XHJcbiAgLm1hdC1jYXJkLWFjdGlvbnMgLmZsZXgtc3BhY2Vye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIHN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICM4ODg7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5jYXJkLmNhcmQtc21hbGwge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2OHB4O1xyXG4gIH1cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxuICB9XHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxuICB9XHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3OTJhZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG4gIGEsXHJcbiAgYTp2aXNpdGVkLFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMjU2OTk7XHJcbiAgfVxyXG4gIC5jaXJjbGUtbGluayB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxuICB9XHJcbiAgLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBmb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgZm9vdGVyIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIHN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG4gIH1cclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgICB9XHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/userhome/userhome.component.html":
/*!**************************************************!*\
  !*** ./src/app/userhome/userhome.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar class=\"app-toolbar\" color=\"primary\">\n  <span>Forms Builder</span>\n\n  <span class=\"spacer\"></span>\n  <button mat-button [matMenuTriggerFor]=\"belowMenu\">Username<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n          aria-label=\"Example user person_pin icon\">person_pin</mat-icon></button>\n  <mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n      <!-- <button mat-menu-item routerLink=\"/sttings\">Account<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user settings_applications icon\">settings_applications</mat-icon></button> -->\n      <button mat-menu-item routerLink=\"/login\">Logout<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user exit_to_app icon\">exit_to_app</mat-icon></button>\n  </mat-menu>\n</mat-toolbar>\n<mat-toolbar>\n  <a href=\"\"[routerLink]=\"['/home']\"><h5><mat-icon class=\"example-icon\" aria-hidden=\"false\"\n    aria-label=\"Example user home icon\">home</mat-icon>Dashboard</h5></a>\n</mat-toolbar>\n<div class=\"left\">\n  <a mat-raised-button class=\"formbtn\" color=\"accent\" style=\"color: white;\" [routerLink]=\"['/user']\"> <mat-icon class=\"example-icon\" aria-hidden=\"false\"\n    aria-label=\"Example user note_add icon\">note_add</mat-icon>Create Form</a>\n</div>\n<div class=\"card-container\">\n    <div *ngFor=\"let form of forms\" >\n\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{form.name}}</mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"../../assets/img/formhead.jpg\" alt=\"form\">\n    <mat-card-content>\n      <p>\n        {{form.description}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-mini-fab class=\"view\" [routerLink]=\"['/viewall',form._id]\" aria-label=\"Example icon-button with a insert_chart icon\">\n          <mat-icon>insert_chart  </mat-icon></button>\n        <button mat-mini-fab color=\"primary\"  [routerLink]=\"['/view',form._id]\" aria-label=\"Example icon-button with a visibility icon\">\n          <mat-icon>visibility</mat-icon></button>\n        <button mat-mini-fab color=\"warn\"  (click)=\"delete(form._id)\" aria-label=\"Example icon-button with a delete icon\">\n          <mat-icon>delete</mat-icon></button>\n      <!-- <button mat-raised-button class=\"view\" [routerLink]=\"['/viewall',form._id]\"  >Responses</button> -->\n      <!-- <button mat-raised-button color=\"primary\"  [routerLink]=\"['/view',form._id]\">View</button> <span class=\"spacer\"></span>\n      <button mat-raised-button color=\"warn\"  (click)=\"delete(form._id)\">Delete</button> -->\n    </mat-card-actions>\n   </mat-card>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/userhome/userhome.component.ts":
/*!************************************************!*\
  !*** ./src/app/userhome/userhome.component.ts ***!
  \************************************************/
/*! exports provided: UserhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserhomeComponent", function() { return UserhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserhomeComponent = /** @class */ (function () {
    function UserhomeComponent(_user, _router) {
        this._user = _user;
        this._router = _router;
        // userId: any = 0;
        this.forms = {};
    }
    UserhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrooooooottttteeeeerrrr", this._router.url);
        var userId = 0;
        this._user.getUser()
            .subscribe(function (data) {
            userId = data;
            console.log(data);
            var observable = _this._user.getForms(userId);
            observable.subscribe(function (data) {
                _this.forms = data;
            });
        }, function (error) { return _this._router.navigate(['/login']); });
    };
    UserhomeComponent.prototype.publish = function (id) {
        window.open("http://localhost:3000/form/5db409eda68282468c08e795");
    };
    UserhomeComponent.prototype.delete = function (formId) {
        var observable = this._user.deleteForm(formId);
        observable.subscribe(function (data) {
            console.log("Got the information from post data", data);
        });
        this._router.navigate(['/home']);
    };
    UserhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userhome',
            template: __webpack_require__(/*! ./userhome.component.html */ "./src/app/userhome/userhome.component.html"),
            styles: [__webpack_require__(/*! ./userhome.component.css */ "./src/app/userhome/userhome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserhomeComponent);
    return UserhomeComponent;
}());



/***/ }),

/***/ "./src/app/view-form/view-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-form/view-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left{\r\n    margin: 30px;\r\n}\r\n.spacer{\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1mb3JtL3ZpZXctZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksZUFBZTtHQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZm9ybS92aWV3LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0e1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcbi5zcGFjZXJ7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/view-form/view-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-form/view-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-toolbar\" color=\"primary\">\n  <span>Forms Builder</span>\n\n  <span class=\"spacer\"></span>\n  <button mat-button [matMenuTriggerFor]=\"belowMenu\">Username<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n          aria-label=\"Example user person_pin icon\">person_pin</mat-icon></button>\n  <mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n      <!-- <button mat-menu-item routerLink=\"/sttings\">Account<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user settings_applications icon\">settings_applications</mat-icon></button> -->\n      <button mat-menu-item routerLink=\"/login\">Logout<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user exit_to_app icon\">exit_to_app</mat-icon></button>\n  </mat-menu>\n</mat-toolbar>\n  <mat-toolbar>\n    <a href=\"\"[routerLink]=\"['/home']\"><h6>\n      <mat-icon class=\"example-icon\" aria-hidden=\"false\"aria-label=\"Example user home icon\">home</mat-icon>\n          Dashboard</h6></a>\n  </mat-toolbar>\n\n<div class=\"wrapper marginT60  marginB30\" style=\"max-width:500px;\">\n\n<div class=\"row\" style=\"padding:30px;\" [style.backgroundColor]=\"model.theme.bgColor\"\n  [style.color]=\"model.theme.textColor\">\n  <div class=\"col-12\">\n    <h2>{{model.name}}</h2>\n  </div>\n  <div class=\"col-12\">\n    <p>{{model.description}}</p>\n  </div>\n  <div *ngIf=\"success\" class=\"col-12\">\n    <div class=\"form-group\">\n      <label>Your form has been submitted.</label>\n    </div>\n  </div>\n  <form class=\"ftheme\">\n    <div *ngIf=\"!success\" class=\"col-12\">\n      <div *ngFor=\"let item of model.attributes\" class=\"form-group\">\n        <div *ngIf=\"item.type=='text'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [required]=\"item.required\" [ngModelOptions]=\"{standalone: true}\"\n            autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='email'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='phone'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='number'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\"\n            placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\"\n            autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='date'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='datetime-local'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='textarea'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </textarea>\n        </div>\n        <div *ngIf=\"item.type=='file'\">\n          <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\"\n            class=\"text-danger\">*</label>\n          <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n          <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n        </div>\n        <div *ngIf=\"item.type=='paragraph'\">\n          <p class=\"form-text\">{{item.placeholder}}</p>\n        </div>\n        <div *ngIf=\"item.type=='autocomplete'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <select class=\"form-control\" id=\"{{item.name}}\" [(ngModel)]=\"item.value\"\n            [ngModelOptions]=\"{standalone: true}\">\n            <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>\n          </select>\n          <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n        </div>\n        <div *ngIf=\"item.type=='checkbox'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n            <label class=\"cust-check-bx\">\n              <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n        </div>\n        <div *ngIf=\"item.type=='radio'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n            <label class=\"cust-check-bx\">\n              <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" [(ngModel)]=\"item.value\"\n                [ngModelOptions]=\"{standalone: true}\"> {{v.label}}\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n        </div>\n        <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n          <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\"\n            id=\"{{item.name}}\">\n        </div>\n      </div>\n\n      <!-- <p (click)=\"show=1\" class=\"marginT60 pointer\">Show developer data</p> -->\n    </div>\n  </form>\n</div>\n\n<div class=\"left\">\n  <button mat-raised-button color=\"accent\"[routerLink]=\"['/home']\"><mat-icon class=\"example-icon\" aria-hidden=\"false\"\n    aria-label=\"Example user arrow_back icon\">arrow_back</mat-icon>Back</button> <span class=\"spacer\"></span>\n  <button mat-raised-button color=\"green\" [routerLink]=\"['/form',model._id]\"><mat-icon class=\"example-icon\" aria-hidden=\"false\"\n    aria-label=\"Example user share icon\">share</mat-icon>Share Form</button> \n\n</div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/view-form/view-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-form/view-form.component.ts ***!
  \**************************************************/
/*! exports provided: ViewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFormComponent", function() { return ViewFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewFormComponent = /** @class */ (function () {
    function ViewFormComponent(_user, _router, route) {
        this._user = _user;
        this._router = _router;
        this.route = route;
        this.model = {};
        this.userId = 0;
    }
    ViewFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var formId = this.route.snapshot.params["id"];
        console.log(formId);
        var observable = this._user.getForm(formId);
        observable.subscribe(function (data) {
            _this.model = data[0];
            console.log("Got the information from post data", _this.model);
        });
    };
    ViewFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-form',
            template: __webpack_require__(/*! ./view-form.component.html */ "./src/app/view-form/view-form.component.html"),
            styles: [__webpack_require__(/*! ./view-form.component.css */ "./src/app/view-form/view-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewFormComponent);
    return ViewFormComponent;
}());



/***/ }),

/***/ "./src/app/viewallsub/viewallsub.component.css":
/*!*****************************************************!*\
  !*** ./src/app/viewallsub/viewallsub.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\r\n  }\r\n  \r\n  .text-center {\r\n    text-align: center;\r\n  }\r\n  \r\n  .list {\r\n    max-width: 900px;\r\n    margin: auto;\r\n  }\r\n  \r\n  li {\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .element{\r\n    display: inline;\r\n  }\r\n  \r\n  .textareashow{\r\n  overflow-y:scroll;\r\n  width: 100%;\r\n  height: 150px;\r\n  background-color: white ;\r\n  border: 1px solid lightgray;\r\n  \r\n}\r\n  \r\n  .column-chart,\r\n.bar-chart,\r\n.scatter-plot {\r\n  position: relative;\r\n  min-width: 100px;\r\n  min-height: 100px;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n  \r\n  .column-chart .chart-column,\r\n.bar-chart .chart-row,\r\n.column-chart [data-cp-size],\r\n.bar-chart [data-cp-size],\r\n.plot-container > * > * {\r\n  list-style: none;\r\n  border: 1px solid #ffffff;\r\n}\r\n  \r\n  .column-chart .plot-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  min-height: 100px;\r\n}\r\n  \r\n  .column-chart.stacked > * > * {\r\n  height: 100%;\r\n  -webkit-transform: scaleY(-1);\r\n  transform: scaleY(-1);\r\n}\r\n  \r\n  .column-chart.stacked .group-by-number [data-cp-size] {\r\n  -webkit-transform: scaleY(-1);\r\n  transform: scaleY(-1);\r\n}\r\n  \r\n  .column-chart .chart-column,\r\n.column-chart [data-cp-size],\r\n.column-chart.stacked > * > * {\r\n  flex-grow: 1;\r\n  align-self: flex-end;\r\n}\r\n  \r\n  .column-chart .chart-column,\r\n.bar-chart .chart-row,\r\n.column-chart [data-cp-size],\r\n.bar-chart [data-cp-size] {\r\n  background: #3498db;\r\n  color: #ffffff;\r\n  box-sizing: border-box;\r\n}\r\n  \r\n  .bar-chart {\r\n  clear: both;\r\n}\r\n  \r\n  .bar-chart .plot-container {\r\n  flex-direction: row;\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n  \r\n  .bar-chart .chart-row,\r\n.bar-chart [data-cp-size] {\r\n  min-height: 8px;\r\n}\r\n  \r\n  .bar-chart.stacked > * > * {\r\n  display: flex;\r\n}\r\n  \r\n  .bar-chart.stacked .group-by-number [data-cp-size] {\r\n  display: inline-block;\r\n}\r\n  \r\n  .scatter-plot .plot-container {\r\n  position: absolute;\r\n  top: 12px;\r\n  left: 0;\r\n  right: 12px;\r\n  bottom: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n  \r\n  .scatter-plot .chart-dot,\r\n.scatter-plot .chart-dot,\r\n.scatter-plot [data-cp-x],\r\n.scatter-plot [data-cp-y] {\r\n  position: absolute;\r\n  height: 0;\r\n  width: 0;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  border: 6px solid #3498db;\r\n  border-radius: 100%;\r\n}\r\n  \r\n  .column-chart,\r\n.bar-chart,\r\n.scatter-plot {\r\n  position: relative;\r\n  min-width: 100px;\r\n  min-height: 100px;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n  \r\n  .column-chart .chart-column,\r\n.bar-chart .chart-row,\r\n.column-chart [data-cp-size],\r\n.bar-chart [data-cp-size],\r\n.plot-container > * > * {\r\n  list-style: none;\r\n  border: 1px solid #ffffff;\r\n}\r\n  \r\n  .column-chart .plot-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  min-height: 100px;\r\n}\r\n  \r\n  .column-chart.stacked > * > * {\r\n  height: 100%;\r\n  -webkit-transform: scaleY(-1);\r\n  transform: scaleY(-1);\r\n}\r\n  \r\n  .column-chart.stacked .group-by-number [data-cp-size] {\r\n  -webkit-transform: scaleY(-1);\r\n  transform: scaleY(-1);\r\n}\r\n  \r\n  .column-chart .chart-column,\r\n.column-chart [data-cp-size],\r\n.column-chart.stacked > * > * {\r\n  flex-grow: 1;\r\n  align-self: flex-end;\r\n}\r\n  \r\n  .column-chart .chart-column,\r\n.bar-chart .chart-row,\r\n.column-chart [data-cp-size],\r\n.bar-chart [data-cp-size] {\r\n  background: #3498db;\r\n  color: #ffffff;\r\n  box-sizing: border-box;\r\n}\r\n  \r\n  .bar-chart {\r\n  clear: both;\r\n}\r\n  \r\n  .bar-chart .plot-container {\r\n  flex-direction: row;\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n  \r\n  .bar-chart .chart-row,\r\n.bar-chart [data-cp-size] {\r\n  min-height: 8px;\r\n}\r\n  \r\n  .bar-chart.stacked > * > * {\r\n  display: flex;\r\n}\r\n  \r\n  .bar-chart.stacked .group-by-number [data-cp-size] {\r\n  display: inline-block;\r\n}\r\n  \r\n  .scatter-plot .plot-container {\r\n  position: absolute;\r\n  top: 12px;\r\n  left: 0;\r\n  right: 12px;\r\n  bottom: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n  \r\n  .scatter-plot .chart-dot,\r\n.scatter-plot .chart-dot,\r\n.scatter-plot [data-cp-x],\r\n.scatter-plot [data-cp-y] {\r\n  position: absolute;\r\n  height: 0;\r\n  width: 0;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  border: 6px solid #3498db;\r\n  border-radius: 100%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"0\"] {\r\n  height: 0%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"1\"] {\r\n  height: 1%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"2\"] {\r\n  height: 2%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"3\"] {\r\n  height: 3%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"4\"] {\r\n  height: 4%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"5\"] {\r\n  height: 5%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"6\"] {\r\n  height: 6%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"7\"] {\r\n  height: 7%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"8\"] {\r\n  height: 8%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"9\"] {\r\n  height: 9%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"10\"] {\r\n  height: 10%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"11\"] {\r\n  height: 11%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"12\"] {\r\n  height: 12%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"13\"] {\r\n  height: 13%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"14\"] {\r\n  height: 14%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"15\"] {\r\n  height: 15%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"16\"] {\r\n  height: 16%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"17\"] {\r\n  height: 17%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"18\"] {\r\n  height: 18%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"19\"] {\r\n  height: 19%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"20\"] {\r\n  height: 20%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"21\"] {\r\n  height: 21%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"22\"] {\r\n  height: 22%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"23\"] {\r\n  height: 23%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"24\"] {\r\n  height: 24%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"25\"] {\r\n  height: 25%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"26\"] {\r\n  height: 26%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"27\"] {\r\n  height: 27%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"28\"] {\r\n  height: 28%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"29\"] {\r\n  height: 29%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"30\"] {\r\n  height: 30%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"31\"] {\r\n  height: 31%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"32\"] {\r\n  height: 32%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"33\"] {\r\n  height: 33%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"34\"] {\r\n  height: 34%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"35\"] {\r\n  height: 35%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"36\"] {\r\n  height: 36%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"37\"] {\r\n  height: 37%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"38\"] {\r\n  height: 38%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"39\"] {\r\n  height: 39%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"40\"] {\r\n  height: 40%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"41\"] {\r\n  height: 41%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"42\"] {\r\n  height: 42%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"43\"] {\r\n  height: 43%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"44\"] {\r\n  height: 44%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"45\"] {\r\n  height: 45%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"46\"] {\r\n  height: 46%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"47\"] {\r\n  height: 47%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"48\"] {\r\n  height: 48%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"49\"] {\r\n  height: 49%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"50\"] {\r\n  height: 50%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"51\"] {\r\n  height: 51%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"52\"] {\r\n  height: 52%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"53\"] {\r\n  height: 53%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"54\"] {\r\n  height: 54%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"55\"] {\r\n  height: 55%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"56\"] {\r\n  height: 56%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"57\"] {\r\n  height: 57%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"58\"] {\r\n  height: 58%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"59\"] {\r\n  height: 59%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"60\"] {\r\n  height: 60%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"61\"] {\r\n  height: 61%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"62\"] {\r\n  height: 62%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"63\"] {\r\n  height: 63%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"64\"] {\r\n  height: 64%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"65\"] {\r\n  height: 65%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"66\"] {\r\n  height: 66%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"67\"] {\r\n  height: 67%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"68\"] {\r\n  height: 68%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"69\"] {\r\n  height: 69%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"70\"] {\r\n  height: 70%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"71\"] {\r\n  height: 71%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"72\"] {\r\n  height: 72%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"73\"] {\r\n  height: 73%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"74\"] {\r\n  height: 74%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"75\"] {\r\n  height: 75%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"76\"] {\r\n  height: 76%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"77\"] {\r\n  height: 77%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"78\"] {\r\n  height: 78%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"79\"] {\r\n  height: 79%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"80\"] {\r\n  height: 80%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"81\"] {\r\n  height: 81%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"82\"] {\r\n  height: 82%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"83\"] {\r\n  height: 83%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"84\"] {\r\n  height: 84%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"85\"] {\r\n  height: 85%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"86\"] {\r\n  height: 86%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"87\"] {\r\n  height: 87%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"88\"] {\r\n  height: 88%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"89\"] {\r\n  height: 89%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"90\"] {\r\n  height: 90%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"91\"] {\r\n  height: 91%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"92\"] {\r\n  height: 92%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"93\"] {\r\n  height: 93%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"94\"] {\r\n  height: 94%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"95\"] {\r\n  height: 95%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"96\"] {\r\n  height: 96%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"97\"] {\r\n  height: 97%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"98\"] {\r\n  height: 98%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"99\"] {\r\n  height: 99%;\r\n}\r\n  \r\n  .column-chart .plot-container [data-cp-size=\"100\"] {\r\n  height: 100%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"0\"] {\r\n  width: 0%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"1\"] {\r\n  width: 1%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"2\"] {\r\n  width: 2%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"3\"] {\r\n  width: 3%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"4\"] {\r\n  width: 4%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"5\"] {\r\n  width: 5%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"6\"] {\r\n  width: 6%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"7\"] {\r\n  width: 7%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"8\"] {\r\n  width: 8%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"9\"] {\r\n  width: 9%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"10\"] {\r\n  width: 10%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"11\"] {\r\n  width: 11%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"12\"] {\r\n  width: 12%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"13\"] {\r\n  width: 13%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"14\"] {\r\n  width: 14%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"15\"] {\r\n  width: 15%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"16\"] {\r\n  width: 16%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"17\"] {\r\n  width: 17%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"18\"] {\r\n  width: 18%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"19\"] {\r\n  width: 19%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"20\"] {\r\n  width: 20%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"21\"] {\r\n  width: 21%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"22\"] {\r\n  width: 22%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"23\"] {\r\n  width: 23%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"24\"] {\r\n  width: 24%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"25\"] {\r\n  width: 25%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"26\"] {\r\n  width: 26%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"27\"] {\r\n  width: 27%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"28\"] {\r\n  width: 28%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"29\"] {\r\n  width: 29%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"30\"] {\r\n  width: 30%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"31\"] {\r\n  width: 31%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"32\"] {\r\n  width: 32%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"33\"] {\r\n  width: 33%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"34\"] {\r\n  width: 34%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"35\"] {\r\n  width: 35%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"36\"] {\r\n  width: 36%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"37\"] {\r\n  width: 37%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"38\"] {\r\n  width: 38%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"39\"] {\r\n  width: 39%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"40\"] {\r\n  width: 40%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"41\"] {\r\n  width: 41%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"42\"] {\r\n  width: 42%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"43\"] {\r\n  width: 43%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"44\"] {\r\n  width: 44%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"45\"] {\r\n  width: 45%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"46\"] {\r\n  width: 46%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"47\"] {\r\n  width: 47%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"48\"] {\r\n  width: 48%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"49\"] {\r\n  width: 49%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"50\"] {\r\n  width: 50%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"51\"] {\r\n  width: 51%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"52\"] {\r\n  width: 52%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"53\"] {\r\n  width: 53%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"54\"] {\r\n  width: 54%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"55\"] {\r\n  width: 55%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"56\"] {\r\n  width: 56%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"57\"] {\r\n  width: 57%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"58\"] {\r\n  width: 58%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"59\"] {\r\n  width: 59%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"60\"] {\r\n  width: 60%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"61\"] {\r\n  width: 61%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"62\"] {\r\n  width: 62%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"63\"] {\r\n  width: 63%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"64\"] {\r\n  width: 64%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"65\"] {\r\n  width: 65%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"66\"] {\r\n  width: 66%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"67\"] {\r\n  width: 67%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"68\"] {\r\n  width: 68%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"69\"] {\r\n  width: 69%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"70\"] {\r\n  width: 70%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"71\"] {\r\n  width: 71%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"72\"] {\r\n  width: 72%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"73\"] {\r\n  width: 73%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"74\"] {\r\n  width: 74%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"75\"] {\r\n  width: 75%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"76\"] {\r\n  width: 76%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"77\"] {\r\n  width: 77%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"78\"] {\r\n  width: 78%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"79\"] {\r\n  width: 79%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"80\"] {\r\n  width: 80%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"81\"] {\r\n  width: 81%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"82\"] {\r\n  width: 82%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"83\"] {\r\n  width: 83%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"84\"] {\r\n  width: 84%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"85\"] {\r\n  width: 85%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"86\"] {\r\n  width: 86%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"87\"] {\r\n  width: 87%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"88\"] {\r\n  width: 88%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"89\"] {\r\n  width: 89%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"90\"] {\r\n  width: 90%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"91\"] {\r\n  width: 91%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"92\"] {\r\n  width: 92%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"93\"] {\r\n  width: 93%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"94\"] {\r\n  width: 94%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"95\"] {\r\n  width: 95%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"96\"] {\r\n  width: 96%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"97\"] {\r\n  width: 97%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"98\"] {\r\n  width: 98%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"99\"] {\r\n  width: 99%;\r\n}\r\n  \r\n  .bar-chart .plot-container [data-cp-size=\"100\"] {\r\n  width: 100%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"0\"] {\r\n  left: 0%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"1\"] {\r\n  left: 1%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"2\"] {\r\n  left: 2%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"3\"] {\r\n  left: 3%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"4\"] {\r\n  left: 4%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"5\"] {\r\n  left: 5%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"6\"] {\r\n  left: 6%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"7\"] {\r\n  left: 7%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"8\"] {\r\n  left: 8%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"9\"] {\r\n  left: 9%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"10\"] {\r\n  left: 10%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"11\"] {\r\n  left: 11%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"12\"] {\r\n  left: 12%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"13\"] {\r\n  left: 13%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"14\"] {\r\n  left: 14%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"15\"] {\r\n  left: 15%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"16\"] {\r\n  left: 16%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"17\"] {\r\n  left: 17%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"18\"] {\r\n  left: 18%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"19\"] {\r\n  left: 19%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"20\"] {\r\n  left: 20%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"21\"] {\r\n  left: 21%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"22\"] {\r\n  left: 22%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"23\"] {\r\n  left: 23%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"24\"] {\r\n  left: 24%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"25\"] {\r\n  left: 25%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"26\"] {\r\n  left: 26%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"27\"] {\r\n  left: 27%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"28\"] {\r\n  left: 28%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"29\"] {\r\n  left: 29%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"30\"] {\r\n  left: 30%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"31\"] {\r\n  left: 31%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"32\"] {\r\n  left: 32%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"33\"] {\r\n  left: 33%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"34\"] {\r\n  left: 34%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"35\"] {\r\n  left: 35%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"36\"] {\r\n  left: 36%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"37\"] {\r\n  left: 37%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"38\"] {\r\n  left: 38%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"39\"] {\r\n  left: 39%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"40\"] {\r\n  left: 40%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"41\"] {\r\n  left: 41%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"42\"] {\r\n  left: 42%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"43\"] {\r\n  left: 43%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"44\"] {\r\n  left: 44%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"45\"] {\r\n  left: 45%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"46\"] {\r\n  left: 46%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"47\"] {\r\n  left: 47%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"48\"] {\r\n  left: 48%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"49\"] {\r\n  left: 49%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"50\"] {\r\n  left: 50%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"51\"] {\r\n  left: 51%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"52\"] {\r\n  left: 52%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"53\"] {\r\n  left: 53%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"54\"] {\r\n  left: 54%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"55\"] {\r\n  left: 55%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"56\"] {\r\n  left: 56%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"57\"] {\r\n  left: 57%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"58\"] {\r\n  left: 58%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"59\"] {\r\n  left: 59%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"60\"] {\r\n  left: 60%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"61\"] {\r\n  left: 61%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"62\"] {\r\n  left: 62%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"63\"] {\r\n  left: 63%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"64\"] {\r\n  left: 64%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"65\"] {\r\n  left: 65%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"66\"] {\r\n  left: 66%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"67\"] {\r\n  left: 67%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"68\"] {\r\n  left: 68%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"69\"] {\r\n  left: 69%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"70\"] {\r\n  left: 70%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"71\"] {\r\n  left: 71%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"72\"] {\r\n  left: 72%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"73\"] {\r\n  left: 73%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"74\"] {\r\n  left: 74%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"75\"] {\r\n  left: 75%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"76\"] {\r\n  left: 76%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"77\"] {\r\n  left: 77%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"78\"] {\r\n  left: 78%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"79\"] {\r\n  left: 79%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"80\"] {\r\n  left: 80%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"81\"] {\r\n  left: 81%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"82\"] {\r\n  left: 82%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"83\"] {\r\n  left: 83%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"84\"] {\r\n  left: 84%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"85\"] {\r\n  left: 85%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"86\"] {\r\n  left: 86%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"87\"] {\r\n  left: 87%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"88\"] {\r\n  left: 88%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"89\"] {\r\n  left: 89%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"90\"] {\r\n  left: 90%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"91\"] {\r\n  left: 91%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"92\"] {\r\n  left: 92%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"93\"] {\r\n  left: 93%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"94\"] {\r\n  left: 94%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"95\"] {\r\n  left: 95%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"96\"] {\r\n  left: 96%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"97\"] {\r\n  left: 97%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"98\"] {\r\n  left: 98%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"99\"] {\r\n  left: 99%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-x=\"100\"] {\r\n  left: 100%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"0\"] {\r\n  bottom: 0%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"1\"] {\r\n  bottom: 1%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"2\"] {\r\n  bottom: 2%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"3\"] {\r\n  bottom: 3%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"4\"] {\r\n  bottom: 4%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"5\"] {\r\n  bottom: 5%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"6\"] {\r\n  bottom: 6%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"7\"] {\r\n  bottom: 7%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"8\"] {\r\n  bottom: 8%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"9\"] {\r\n  bottom: 9%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"10\"] {\r\n  bottom: 10%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"11\"] {\r\n  bottom: 11%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"12\"] {\r\n  bottom: 12%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"13\"] {\r\n  bottom: 13%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"14\"] {\r\n  bottom: 14%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"15\"] {\r\n  bottom: 15%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"16\"] {\r\n  bottom: 16%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"17\"] {\r\n  bottom: 17%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"18\"] {\r\n  bottom: 18%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"19\"] {\r\n  bottom: 19%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"20\"] {\r\n  bottom: 20%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"21\"] {\r\n  bottom: 21%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"22\"] {\r\n  bottom: 22%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"23\"] {\r\n  bottom: 23%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"24\"] {\r\n  bottom: 24%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"25\"] {\r\n  bottom: 25%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"26\"] {\r\n  bottom: 26%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"27\"] {\r\n  bottom: 27%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"28\"] {\r\n  bottom: 28%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"29\"] {\r\n  bottom: 29%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"30\"] {\r\n  bottom: 30%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"31\"] {\r\n  bottom: 31%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"32\"] {\r\n  bottom: 32%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"33\"] {\r\n  bottom: 33%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"34\"] {\r\n  bottom: 34%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"35\"] {\r\n  bottom: 35%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"36\"] {\r\n  bottom: 36%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"37\"] {\r\n  bottom: 37%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"38\"] {\r\n  bottom: 38%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"39\"] {\r\n  bottom: 39%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"40\"] {\r\n  bottom: 40%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"41\"] {\r\n  bottom: 41%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"42\"] {\r\n  bottom: 42%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"43\"] {\r\n  bottom: 43%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"44\"] {\r\n  bottom: 44%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"45\"] {\r\n  bottom: 45%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"46\"] {\r\n  bottom: 46%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"47\"] {\r\n  bottom: 47%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"48\"] {\r\n  bottom: 48%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"49\"] {\r\n  bottom: 49%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"50\"] {\r\n  bottom: 50%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"51\"] {\r\n  bottom: 51%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"52\"] {\r\n  bottom: 52%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"53\"] {\r\n  bottom: 53%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"54\"] {\r\n  bottom: 54%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"55\"] {\r\n  bottom: 55%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"56\"] {\r\n  bottom: 56%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"57\"] {\r\n  bottom: 57%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"58\"] {\r\n  bottom: 58%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"59\"] {\r\n  bottom: 59%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"60\"] {\r\n  bottom: 60%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"61\"] {\r\n  bottom: 61%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"62\"] {\r\n  bottom: 62%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"63\"] {\r\n  bottom: 63%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"64\"] {\r\n  bottom: 64%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"65\"] {\r\n  bottom: 65%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"66\"] {\r\n  bottom: 66%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"67\"] {\r\n  bottom: 67%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"68\"] {\r\n  bottom: 68%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"69\"] {\r\n  bottom: 69%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"70\"] {\r\n  bottom: 70%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"71\"] {\r\n  bottom: 71%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"72\"] {\r\n  bottom: 72%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"73\"] {\r\n  bottom: 73%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"74\"] {\r\n  bottom: 74%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"75\"] {\r\n  bottom: 75%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"76\"] {\r\n  bottom: 76%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"77\"] {\r\n  bottom: 77%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"78\"] {\r\n  bottom: 78%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"79\"] {\r\n  bottom: 79%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"80\"] {\r\n  bottom: 80%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"81\"] {\r\n  bottom: 81%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"82\"] {\r\n  bottom: 82%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"83\"] {\r\n  bottom: 83%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"84\"] {\r\n  bottom: 84%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"85\"] {\r\n  bottom: 85%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"86\"] {\r\n  bottom: 86%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"87\"] {\r\n  bottom: 87%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"88\"] {\r\n  bottom: 88%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"89\"] {\r\n  bottom: 89%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"90\"] {\r\n  bottom: 90%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"91\"] {\r\n  bottom: 91%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"92\"] {\r\n  bottom: 92%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"93\"] {\r\n  bottom: 93%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"94\"] {\r\n  bottom: 94%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"95\"] {\r\n  bottom: 95%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"96\"] {\r\n  bottom: 96%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"97\"] {\r\n  bottom: 97%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"98\"] {\r\n  bottom: 98%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"99\"] {\r\n  bottom: 99%;\r\n}\r\n  \r\n  .scatter-plot .plot-container [data-cp-y=\"100\"] {\r\n  bottom: 100%;\r\n}\r\n  \r\n  .group-by-gender .male {\r\n  background: #3498db;\r\n  color: #ffffff;\r\n}\r\n  \r\n  .group-by-gender .female {\r\n  background: #ff6699;\r\n  color: #ffffff;\r\n}\r\n  \r\n  .group-by-number [data-group=\"0\"] {\r\n  background: #3498db;\r\n  color: #ffffff;\r\n}\r\n  \r\n  .group-by-number [data-group=\"1\"] {\r\n  background: #ff6699;\r\n  color: #ffffff;\r\n}\r\n  \r\n  .group-by-number [data-group=\"2\"] {\r\n  background: #93b881;\r\n  color: #ffffff;\r\n}\r\n  \r\n  .group-by-number [data-group=\"3\"] {\r\n  background: #e09e87;\r\n  color: #ffffff;\r\n}\r\n  \r\n  .group-by-number [data-group=\"4\"] {\r\n  background: #a22041;\r\n  color: #ffffff;\r\n}\r\n  \r\n  .group-by-number [data-group=\"5\"] {\r\n  background: #95879c;\r\n  color: #ffffff;\r\n}\r\n  \r\n  .contain {\r\n  width: 90%;\r\n  border-radius: 20px;\r\n  background-color: #ddd;\r\n}\r\n  \r\n  .skills {\r\n  text-align: right;\r\n  padding-right: 10px;;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  color: white;\r\n  border-radius: 20px;\r\n}\r\n  \r\n  .css {width: 80%; background-color: #2196F3;}\r\n  \r\n  .js {width: 65%; background-color: #f44336;}\r\n  \r\n  .php {width: 60%; background-color: #808080;}\r\n  \r\n  * {box-sizing: border-box}\r\n  \r\n  ul >li {\r\n  font-size: 150%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2FsbHN1Yi92aWV3YWxsc3ViLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvRUFBb0U7R0FDckU7O0VBRUQ7SUFDRSxtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtHQUNkOztFQUVEO0lBQ0UsbUJBQW1CO0dBQ3BCOztFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCOztFQUNIO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDRCQUE0Qjs7Q0FFN0I7O0VBRUM7OztFQUdBLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0NBQ1g7O0VBQ0Q7Ozs7O0VBS0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtDQUMzQjs7RUFDRDtFQUVFLGNBQWM7RUFFZCxvQkFBb0I7RUFFcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0NBQ25COztFQUNEO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUk5QixzQkFBc0I7Q0FDdkI7O0VBQ0Q7RUFDRSw4QkFBOEI7RUFJOUIsc0JBQXNCO0NBQ3ZCOztFQUNEOzs7RUFJRSxhQUFhO0VBRWIscUJBQXFCO0NBQ3RCOztFQUNEOzs7O0VBSUUsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix1QkFBdUI7Q0FDeEI7O0VBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0VBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0NBQ2I7O0VBQ0Q7O0VBRUUsZ0JBQWdCO0NBQ2pCOztFQUNEO0VBQ0UsY0FBYztDQUNmOztFQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCOztFQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztDQUNaOztFQUNEOzs7O0VBSUUsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCOztFQUdEOzs7RUFHRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtDQUNYOztFQUNEOzs7OztFQUtFLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7O0VBQ0Q7RUFFRSxjQUFjO0VBRWQsb0JBQW9CO0VBRXBCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtDQUNuQjs7RUFDRDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFJOUIsc0JBQXNCO0NBQ3ZCOztFQUNEO0VBQ0UsOEJBQThCO0VBSTlCLHNCQUFzQjtDQUN2Qjs7RUFDRDs7O0VBSUUsYUFBYTtFQUViLHFCQUFxQjtDQUN0Qjs7RUFDRDs7OztFQUlFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsdUJBQXVCO0NBQ3hCOztFQUNEO0VBQ0UsWUFBWTtDQUNiOztFQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtDQUNiOztFQUNEOztFQUVFLGdCQUFnQjtDQUNqQjs7RUFDRDtFQUNFLGNBQWM7Q0FDZjs7RUFDRDtFQUNFLHNCQUFzQjtDQUN2Qjs7RUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWjs7RUFDRDs7OztFQUlFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLGFBQWE7Q0FDZDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFNBQVM7Q0FDVjs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFVBQVU7Q0FDWDs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFdBQVc7Q0FDWjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLFlBQVk7Q0FDYjs7RUFDRDtFQUNFLGFBQWE7Q0FDZDs7RUFFRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztFQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7O0VBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7RUFDRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztFQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7O0VBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7RUFDRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztFQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7O0VBS0Q7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHVCQUF1QjtDQUN4Qjs7RUFFRDtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCOztFQUdELE1BQU0sV0FBVyxDQUFDLDBCQUEwQixDQUFDOztFQUM3QyxLQUFLLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQzs7RUFDNUMsTUFBTSxXQUFXLENBQUMsMEJBQTBCLENBQUM7O0VBQzdDLEdBQUcsc0JBQXNCLENBQUM7O0VBRTFCO0VBQ0UsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld2FsbHN1Yi92aWV3YWxsc3ViLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0IHtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLmVsZW1lbnR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4udGV4dGFyZWFzaG93e1xyXG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBcclxufVxyXG5cclxuICAuY29sdW1uLWNoYXJ0LFxyXG4uYmFyLWNoYXJ0LFxyXG4uc2NhdHRlci1wbG90IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5jaGFydC1jb2x1bW4sXHJcbi5iYXItY2hhcnQgLmNoYXJ0LXJvdyxcclxuLmNvbHVtbi1jaGFydCBbZGF0YS1jcC1zaXplXSxcclxuLmJhci1jaGFydCBbZGF0YS1jcC1zaXplXSxcclxuLnBsb3QtY29udGFpbmVyID4gKiA+ICoge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG4uY29sdW1uLWNoYXJ0LnN0YWNrZWQgPiAqID4gKiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxufVxyXG4uY29sdW1uLWNoYXJ0LnN0YWNrZWQgLmdyb3VwLWJ5LW51bWJlciBbZGF0YS1jcC1zaXplXSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLmNoYXJ0LWNvbHVtbixcclxuLmNvbHVtbi1jaGFydCBbZGF0YS1jcC1zaXplXSxcclxuLmNvbHVtbi1jaGFydC5zdGFja2VkID4gKiA+ICoge1xyXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLmNoYXJ0LWNvbHVtbixcclxuLmJhci1jaGFydCAuY2hhcnQtcm93LFxyXG4uY29sdW1uLWNoYXJ0IFtkYXRhLWNwLXNpemVdLFxyXG4uYmFyLWNoYXJ0IFtkYXRhLWNwLXNpemVdIHtcclxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmJhci1jaGFydCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJhci1jaGFydCAuY2hhcnQtcm93LFxyXG4uYmFyLWNoYXJ0IFtkYXRhLWNwLXNpemVdIHtcclxuICBtaW4taGVpZ2h0OiA4cHg7XHJcbn1cclxuLmJhci1jaGFydC5zdGFja2VkID4gKiA+ICoge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJhci1jaGFydC5zdGFja2VkIC5ncm91cC1ieS1udW1iZXIgW2RhdGEtY3Atc2l6ZV0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTJweDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAxMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uc2NhdHRlci1wbG90IC5jaGFydC1kb3QsXHJcbi5zY2F0dGVyLXBsb3QgLmNoYXJ0LWRvdCxcclxuLnNjYXR0ZXItcGxvdCBbZGF0YS1jcC14XSxcclxuLnNjYXR0ZXItcGxvdCBbZGF0YS1jcC15XSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyOiA2cHggc29saWQgIzM0OThkYjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmNvbHVtbi1jaGFydCxcclxuLmJhci1jaGFydCxcclxuLnNjYXR0ZXItcGxvdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAuY2hhcnQtY29sdW1uLFxyXG4uYmFyLWNoYXJ0IC5jaGFydC1yb3csXHJcbi5jb2x1bW4tY2hhcnQgW2RhdGEtY3Atc2l6ZV0sXHJcbi5iYXItY2hhcnQgW2RhdGEtY3Atc2l6ZV0sXHJcbi5wbG90LWNvbnRhaW5lciA+ICogPiAqIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuLmNvbHVtbi1jaGFydC5zdGFja2VkID4gKiA+ICoge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbn1cclxuLmNvbHVtbi1jaGFydC5zdGFja2VkIC5ncm91cC1ieS1udW1iZXIgW2RhdGEtY3Atc2l6ZV0ge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5jaGFydC1jb2x1bW4sXHJcbi5jb2x1bW4tY2hhcnQgW2RhdGEtY3Atc2l6ZV0sXHJcbi5jb2x1bW4tY2hhcnQuc3RhY2tlZCA+ICogPiAqIHtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5jaGFydC1jb2x1bW4sXHJcbi5iYXItY2hhcnQgLmNoYXJ0LXJvdyxcclxuLmNvbHVtbi1jaGFydCBbZGF0YS1jcC1zaXplXSxcclxuLmJhci1jaGFydCBbZGF0YS1jcC1zaXplXSB7XHJcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5iYXItY2hhcnQge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5iYXItY2hhcnQgLmNoYXJ0LXJvdyxcclxuLmJhci1jaGFydCBbZGF0YS1jcC1zaXplXSB7XHJcbiAgbWluLWhlaWdodDogOHB4O1xyXG59XHJcbi5iYXItY2hhcnQuc3RhY2tlZCA+ICogPiAqIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5iYXItY2hhcnQuc3RhY2tlZCAuZ3JvdXAtYnktbnVtYmVyIFtkYXRhLWNwLXNpemVdIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEycHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMTJweDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAuY2hhcnQtZG90LFxyXG4uc2NhdHRlci1wbG90IC5jaGFydC1kb3QsXHJcbi5zY2F0dGVyLXBsb3QgW2RhdGEtY3AteF0sXHJcbi5zY2F0dGVyLXBsb3QgW2RhdGEtY3AteV0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMFwiXSB7XHJcbiAgaGVpZ2h0OiAwJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMVwiXSB7XHJcbiAgaGVpZ2h0OiAxJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMlwiXSB7XHJcbiAgaGVpZ2h0OiAyJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiM1wiXSB7XHJcbiAgaGVpZ2h0OiAzJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNFwiXSB7XHJcbiAgaGVpZ2h0OiA0JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNVwiXSB7XHJcbiAgaGVpZ2h0OiA1JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNlwiXSB7XHJcbiAgaGVpZ2h0OiA2JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiN1wiXSB7XHJcbiAgaGVpZ2h0OiA3JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOFwiXSB7XHJcbiAgaGVpZ2h0OiA4JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOVwiXSB7XHJcbiAgaGVpZ2h0OiA5JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTBcIl0ge1xyXG4gIGhlaWdodDogMTAlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxMVwiXSB7XHJcbiAgaGVpZ2h0OiAxMSU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjEyXCJdIHtcclxuICBoZWlnaHQ6IDEyJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTNcIl0ge1xyXG4gIGhlaWdodDogMTMlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxNFwiXSB7XHJcbiAgaGVpZ2h0OiAxNCU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjE1XCJdIHtcclxuICBoZWlnaHQ6IDE1JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTZcIl0ge1xyXG4gIGhlaWdodDogMTYlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxN1wiXSB7XHJcbiAgaGVpZ2h0OiAxNyU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjE4XCJdIHtcclxuICBoZWlnaHQ6IDE4JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTlcIl0ge1xyXG4gIGhlaWdodDogMTklO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyMFwiXSB7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjIxXCJdIHtcclxuICBoZWlnaHQ6IDIxJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjJcIl0ge1xyXG4gIGhlaWdodDogMjIlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyM1wiXSB7XHJcbiAgaGVpZ2h0OiAyMyU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjI0XCJdIHtcclxuICBoZWlnaHQ6IDI0JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjVcIl0ge1xyXG4gIGhlaWdodDogMjUlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyNlwiXSB7XHJcbiAgaGVpZ2h0OiAyNiU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjI3XCJdIHtcclxuICBoZWlnaHQ6IDI3JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjhcIl0ge1xyXG4gIGhlaWdodDogMjglO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyOVwiXSB7XHJcbiAgaGVpZ2h0OiAyOSU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjMwXCJdIHtcclxuICBoZWlnaHQ6IDMwJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzFcIl0ge1xyXG4gIGhlaWdodDogMzElO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzMlwiXSB7XHJcbiAgaGVpZ2h0OiAzMiU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjMzXCJdIHtcclxuICBoZWlnaHQ6IDMzJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzRcIl0ge1xyXG4gIGhlaWdodDogMzQlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzNVwiXSB7XHJcbiAgaGVpZ2h0OiAzNSU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjM2XCJdIHtcclxuICBoZWlnaHQ6IDM2JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzdcIl0ge1xyXG4gIGhlaWdodDogMzclO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzOFwiXSB7XHJcbiAgaGVpZ2h0OiAzOCU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjM5XCJdIHtcclxuICBoZWlnaHQ6IDM5JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDBcIl0ge1xyXG4gIGhlaWdodDogNDAlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0MVwiXSB7XHJcbiAgaGVpZ2h0OiA0MSU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQyXCJdIHtcclxuICBoZWlnaHQ6IDQyJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDNcIl0ge1xyXG4gIGhlaWdodDogNDMlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0NFwiXSB7XHJcbiAgaGVpZ2h0OiA0NCU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQ1XCJdIHtcclxuICBoZWlnaHQ6IDQ1JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDZcIl0ge1xyXG4gIGhlaWdodDogNDYlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0N1wiXSB7XHJcbiAgaGVpZ2h0OiA0NyU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQ4XCJdIHtcclxuICBoZWlnaHQ6IDQ4JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDlcIl0ge1xyXG4gIGhlaWdodDogNDklO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1MFwiXSB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjUxXCJdIHtcclxuICBoZWlnaHQ6IDUxJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTJcIl0ge1xyXG4gIGhlaWdodDogNTIlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1M1wiXSB7XHJcbiAgaGVpZ2h0OiA1MyU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjU0XCJdIHtcclxuICBoZWlnaHQ6IDU0JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTVcIl0ge1xyXG4gIGhlaWdodDogNTUlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1NlwiXSB7XHJcbiAgaGVpZ2h0OiA1NiU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjU3XCJdIHtcclxuICBoZWlnaHQ6IDU3JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNThcIl0ge1xyXG4gIGhlaWdodDogNTglO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1OVwiXSB7XHJcbiAgaGVpZ2h0OiA1OSU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjYwXCJdIHtcclxuICBoZWlnaHQ6IDYwJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjFcIl0ge1xyXG4gIGhlaWdodDogNjElO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2MlwiXSB7XHJcbiAgaGVpZ2h0OiA2MiU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjYzXCJdIHtcclxuICBoZWlnaHQ6IDYzJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjRcIl0ge1xyXG4gIGhlaWdodDogNjQlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2NVwiXSB7XHJcbiAgaGVpZ2h0OiA2NSU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjY2XCJdIHtcclxuICBoZWlnaHQ6IDY2JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjdcIl0ge1xyXG4gIGhlaWdodDogNjclO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2OFwiXSB7XHJcbiAgaGVpZ2h0OiA2OCU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjY5XCJdIHtcclxuICBoZWlnaHQ6IDY5JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzBcIl0ge1xyXG4gIGhlaWdodDogNzAlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3MVwiXSB7XHJcbiAgaGVpZ2h0OiA3MSU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjcyXCJdIHtcclxuICBoZWlnaHQ6IDcyJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzNcIl0ge1xyXG4gIGhlaWdodDogNzMlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3NFwiXSB7XHJcbiAgaGVpZ2h0OiA3NCU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjc1XCJdIHtcclxuICBoZWlnaHQ6IDc1JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzZcIl0ge1xyXG4gIGhlaWdodDogNzYlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3N1wiXSB7XHJcbiAgaGVpZ2h0OiA3NyU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjc4XCJdIHtcclxuICBoZWlnaHQ6IDc4JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzlcIl0ge1xyXG4gIGhlaWdodDogNzklO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4MFwiXSB7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjgxXCJdIHtcclxuICBoZWlnaHQ6IDgxJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODJcIl0ge1xyXG4gIGhlaWdodDogODIlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4M1wiXSB7XHJcbiAgaGVpZ2h0OiA4MyU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjg0XCJdIHtcclxuICBoZWlnaHQ6IDg0JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODVcIl0ge1xyXG4gIGhlaWdodDogODUlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4NlwiXSB7XHJcbiAgaGVpZ2h0OiA4NiU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjg3XCJdIHtcclxuICBoZWlnaHQ6IDg3JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODhcIl0ge1xyXG4gIGhlaWdodDogODglO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4OVwiXSB7XHJcbiAgaGVpZ2h0OiA4OSU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjkwXCJdIHtcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTFcIl0ge1xyXG4gIGhlaWdodDogOTElO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5MlwiXSB7XHJcbiAgaGVpZ2h0OiA5MiU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjkzXCJdIHtcclxuICBoZWlnaHQ6IDkzJTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTRcIl0ge1xyXG4gIGhlaWdodDogOTQlO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5NVwiXSB7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjk2XCJdIHtcclxuICBoZWlnaHQ6IDk2JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTdcIl0ge1xyXG4gIGhlaWdodDogOTclO1xyXG59XHJcbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5OFwiXSB7XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbn1cclxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjk5XCJdIHtcclxuICBoZWlnaHQ6IDk5JTtcclxufVxyXG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTAwXCJdIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjBcIl0ge1xyXG4gIHdpZHRoOiAwJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMVwiXSB7XHJcbiAgd2lkdGg6IDElO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyXCJdIHtcclxuICB3aWR0aDogMiU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjNcIl0ge1xyXG4gIHdpZHRoOiAzJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNFwiXSB7XHJcbiAgd2lkdGg6IDQlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1XCJdIHtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjZcIl0ge1xyXG4gIHdpZHRoOiA2JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiN1wiXSB7XHJcbiAgd2lkdGg6IDclO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4XCJdIHtcclxuICB3aWR0aDogOCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjlcIl0ge1xyXG4gIHdpZHRoOiA5JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTBcIl0ge1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjExXCJdIHtcclxuICB3aWR0aDogMTElO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxMlwiXSB7XHJcbiAgd2lkdGg6IDEyJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTNcIl0ge1xyXG4gIHdpZHRoOiAxMyU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjE0XCJdIHtcclxuICB3aWR0aDogMTQlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxNVwiXSB7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTZcIl0ge1xyXG4gIHdpZHRoOiAxNiU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjE3XCJdIHtcclxuICB3aWR0aDogMTclO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxOFwiXSB7XHJcbiAgd2lkdGg6IDE4JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTlcIl0ge1xyXG4gIHdpZHRoOiAxOSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjIwXCJdIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyMVwiXSB7XHJcbiAgd2lkdGg6IDIxJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjJcIl0ge1xyXG4gIHdpZHRoOiAyMiU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjIzXCJdIHtcclxuICB3aWR0aDogMjMlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyNFwiXSB7XHJcbiAgd2lkdGg6IDI0JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjVcIl0ge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjI2XCJdIHtcclxuICB3aWR0aDogMjYlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyN1wiXSB7XHJcbiAgd2lkdGg6IDI3JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjhcIl0ge1xyXG4gIHdpZHRoOiAyOCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjI5XCJdIHtcclxuICB3aWR0aDogMjklO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzMFwiXSB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzFcIl0ge1xyXG4gIHdpZHRoOiAzMSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjMyXCJdIHtcclxuICB3aWR0aDogMzIlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzM1wiXSB7XHJcbiAgd2lkdGg6IDMzJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzRcIl0ge1xyXG4gIHdpZHRoOiAzNCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjM1XCJdIHtcclxuICB3aWR0aDogMzUlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzNlwiXSB7XHJcbiAgd2lkdGg6IDM2JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzdcIl0ge1xyXG4gIHdpZHRoOiAzNyU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjM4XCJdIHtcclxuICB3aWR0aDogMzglO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzOVwiXSB7XHJcbiAgd2lkdGg6IDM5JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDBcIl0ge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQxXCJdIHtcclxuICB3aWR0aDogNDElO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0MlwiXSB7XHJcbiAgd2lkdGg6IDQyJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDNcIl0ge1xyXG4gIHdpZHRoOiA0MyU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQ0XCJdIHtcclxuICB3aWR0aDogNDQlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0NVwiXSB7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDZcIl0ge1xyXG4gIHdpZHRoOiA0NiU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQ3XCJdIHtcclxuICB3aWR0aDogNDclO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0OFwiXSB7XHJcbiAgd2lkdGg6IDQ4JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDlcIl0ge1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjUwXCJdIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1MVwiXSB7XHJcbiAgd2lkdGg6IDUxJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTJcIl0ge1xyXG4gIHdpZHRoOiA1MiU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjUzXCJdIHtcclxuICB3aWR0aDogNTMlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1NFwiXSB7XHJcbiAgd2lkdGg6IDU0JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTVcIl0ge1xyXG4gIHdpZHRoOiA1NSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjU2XCJdIHtcclxuICB3aWR0aDogNTYlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1N1wiXSB7XHJcbiAgd2lkdGg6IDU3JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNThcIl0ge1xyXG4gIHdpZHRoOiA1OCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjU5XCJdIHtcclxuICB3aWR0aDogNTklO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2MFwiXSB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjFcIl0ge1xyXG4gIHdpZHRoOiA2MSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjYyXCJdIHtcclxuICB3aWR0aDogNjIlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2M1wiXSB7XHJcbiAgd2lkdGg6IDYzJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjRcIl0ge1xyXG4gIHdpZHRoOiA2NCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjY1XCJdIHtcclxuICB3aWR0aDogNjUlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2NlwiXSB7XHJcbiAgd2lkdGg6IDY2JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjdcIl0ge1xyXG4gIHdpZHRoOiA2NyU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjY4XCJdIHtcclxuICB3aWR0aDogNjglO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2OVwiXSB7XHJcbiAgd2lkdGg6IDY5JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzBcIl0ge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjcxXCJdIHtcclxuICB3aWR0aDogNzElO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3MlwiXSB7XHJcbiAgd2lkdGg6IDcyJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzNcIl0ge1xyXG4gIHdpZHRoOiA3MyU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjc0XCJdIHtcclxuICB3aWR0aDogNzQlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3NVwiXSB7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzZcIl0ge1xyXG4gIHdpZHRoOiA3NiU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjc3XCJdIHtcclxuICB3aWR0aDogNzclO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3OFwiXSB7XHJcbiAgd2lkdGg6IDc4JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzlcIl0ge1xyXG4gIHdpZHRoOiA3OSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjgwXCJdIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4MVwiXSB7XHJcbiAgd2lkdGg6IDgxJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODJcIl0ge1xyXG4gIHdpZHRoOiA4MiU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjgzXCJdIHtcclxuICB3aWR0aDogODMlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4NFwiXSB7XHJcbiAgd2lkdGg6IDg0JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODVcIl0ge1xyXG4gIHdpZHRoOiA4NSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjg2XCJdIHtcclxuICB3aWR0aDogODYlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4N1wiXSB7XHJcbiAgd2lkdGg6IDg3JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODhcIl0ge1xyXG4gIHdpZHRoOiA4OCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjg5XCJdIHtcclxuICB3aWR0aDogODklO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5MFwiXSB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTFcIl0ge1xyXG4gIHdpZHRoOiA5MSU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjkyXCJdIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5M1wiXSB7XHJcbiAgd2lkdGg6IDkzJTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTRcIl0ge1xyXG4gIHdpZHRoOiA5NCU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjk1XCJdIHtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5NlwiXSB7XHJcbiAgd2lkdGg6IDk2JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTdcIl0ge1xyXG4gIHdpZHRoOiA5NyU7XHJcbn1cclxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjk4XCJdIHtcclxuICB3aWR0aDogOTglO1xyXG59XHJcbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5OVwiXSB7XHJcbiAgd2lkdGg6IDk5JTtcclxufVxyXG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTAwXCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMFwiXSB7XHJcbiAgbGVmdDogMCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjFcIl0ge1xyXG4gIGxlZnQ6IDElO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXg9XCIyXCJdIHtcclxuICBsZWZ0OiAyJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiM1wiXSB7XHJcbiAgbGVmdDogMyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjRcIl0ge1xyXG4gIGxlZnQ6IDQlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXg9XCI1XCJdIHtcclxuICBsZWZ0OiA1JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNlwiXSB7XHJcbiAgbGVmdDogNiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjdcIl0ge1xyXG4gIGxlZnQ6IDclO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXg9XCI4XCJdIHtcclxuICBsZWZ0OiA4JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOVwiXSB7XHJcbiAgbGVmdDogOSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjEwXCJdIHtcclxuICBsZWZ0OiAxMCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjExXCJdIHtcclxuICBsZWZ0OiAxMSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjEyXCJdIHtcclxuICBsZWZ0OiAxMiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjEzXCJdIHtcclxuICBsZWZ0OiAxMyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjE0XCJdIHtcclxuICBsZWZ0OiAxNCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjE1XCJdIHtcclxuICBsZWZ0OiAxNSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjE2XCJdIHtcclxuICBsZWZ0OiAxNiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjE3XCJdIHtcclxuICBsZWZ0OiAxNyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjE4XCJdIHtcclxuICBsZWZ0OiAxOCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjE5XCJdIHtcclxuICBsZWZ0OiAxOSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjIwXCJdIHtcclxuICBsZWZ0OiAyMCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjIxXCJdIHtcclxuICBsZWZ0OiAyMSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjIyXCJdIHtcclxuICBsZWZ0OiAyMiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjIzXCJdIHtcclxuICBsZWZ0OiAyMyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjI0XCJdIHtcclxuICBsZWZ0OiAyNCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjI1XCJdIHtcclxuICBsZWZ0OiAyNSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjI2XCJdIHtcclxuICBsZWZ0OiAyNiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjI3XCJdIHtcclxuICBsZWZ0OiAyNyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjI4XCJdIHtcclxuICBsZWZ0OiAyOCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjI5XCJdIHtcclxuICBsZWZ0OiAyOSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjMwXCJdIHtcclxuICBsZWZ0OiAzMCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjMxXCJdIHtcclxuICBsZWZ0OiAzMSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjMyXCJdIHtcclxuICBsZWZ0OiAzMiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjMzXCJdIHtcclxuICBsZWZ0OiAzMyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjM0XCJdIHtcclxuICBsZWZ0OiAzNCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjM1XCJdIHtcclxuICBsZWZ0OiAzNSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjM2XCJdIHtcclxuICBsZWZ0OiAzNiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjM3XCJdIHtcclxuICBsZWZ0OiAzNyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjM4XCJdIHtcclxuICBsZWZ0OiAzOCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjM5XCJdIHtcclxuICBsZWZ0OiAzOSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQwXCJdIHtcclxuICBsZWZ0OiA0MCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQxXCJdIHtcclxuICBsZWZ0OiA0MSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQyXCJdIHtcclxuICBsZWZ0OiA0MiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQzXCJdIHtcclxuICBsZWZ0OiA0MyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQ0XCJdIHtcclxuICBsZWZ0OiA0NCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQ1XCJdIHtcclxuICBsZWZ0OiA0NSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQ2XCJdIHtcclxuICBsZWZ0OiA0NiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQ3XCJdIHtcclxuICBsZWZ0OiA0NyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQ4XCJdIHtcclxuICBsZWZ0OiA0OCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjQ5XCJdIHtcclxuICBsZWZ0OiA0OSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjUwXCJdIHtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjUxXCJdIHtcclxuICBsZWZ0OiA1MSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjUyXCJdIHtcclxuICBsZWZ0OiA1MiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjUzXCJdIHtcclxuICBsZWZ0OiA1MyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjU0XCJdIHtcclxuICBsZWZ0OiA1NCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjU1XCJdIHtcclxuICBsZWZ0OiA1NSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjU2XCJdIHtcclxuICBsZWZ0OiA1NiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjU3XCJdIHtcclxuICBsZWZ0OiA1NyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjU4XCJdIHtcclxuICBsZWZ0OiA1OCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjU5XCJdIHtcclxuICBsZWZ0OiA1OSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjYwXCJdIHtcclxuICBsZWZ0OiA2MCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjYxXCJdIHtcclxuICBsZWZ0OiA2MSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjYyXCJdIHtcclxuICBsZWZ0OiA2MiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjYzXCJdIHtcclxuICBsZWZ0OiA2MyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjY0XCJdIHtcclxuICBsZWZ0OiA2NCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjY1XCJdIHtcclxuICBsZWZ0OiA2NSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjY2XCJdIHtcclxuICBsZWZ0OiA2NiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjY3XCJdIHtcclxuICBsZWZ0OiA2NyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjY4XCJdIHtcclxuICBsZWZ0OiA2OCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjY5XCJdIHtcclxuICBsZWZ0OiA2OSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjcwXCJdIHtcclxuICBsZWZ0OiA3MCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjcxXCJdIHtcclxuICBsZWZ0OiA3MSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjcyXCJdIHtcclxuICBsZWZ0OiA3MiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjczXCJdIHtcclxuICBsZWZ0OiA3MyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjc0XCJdIHtcclxuICBsZWZ0OiA3NCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjc1XCJdIHtcclxuICBsZWZ0OiA3NSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjc2XCJdIHtcclxuICBsZWZ0OiA3NiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjc3XCJdIHtcclxuICBsZWZ0OiA3NyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjc4XCJdIHtcclxuICBsZWZ0OiA3OCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjc5XCJdIHtcclxuICBsZWZ0OiA3OSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjgwXCJdIHtcclxuICBsZWZ0OiA4MCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjgxXCJdIHtcclxuICBsZWZ0OiA4MSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjgyXCJdIHtcclxuICBsZWZ0OiA4MiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjgzXCJdIHtcclxuICBsZWZ0OiA4MyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjg0XCJdIHtcclxuICBsZWZ0OiA4NCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjg1XCJdIHtcclxuICBsZWZ0OiA4NSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjg2XCJdIHtcclxuICBsZWZ0OiA4NiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjg3XCJdIHtcclxuICBsZWZ0OiA4NyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjg4XCJdIHtcclxuICBsZWZ0OiA4OCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjg5XCJdIHtcclxuICBsZWZ0OiA4OSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjkwXCJdIHtcclxuICBsZWZ0OiA5MCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjkxXCJdIHtcclxuICBsZWZ0OiA5MSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjkyXCJdIHtcclxuICBsZWZ0OiA5MiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjkzXCJdIHtcclxuICBsZWZ0OiA5MyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjk0XCJdIHtcclxuICBsZWZ0OiA5NCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjk1XCJdIHtcclxuICBsZWZ0OiA5NSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjk2XCJdIHtcclxuICBsZWZ0OiA5NiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjk3XCJdIHtcclxuICBsZWZ0OiA5NyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjk4XCJdIHtcclxuICBsZWZ0OiA5OCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjk5XCJdIHtcclxuICBsZWZ0OiA5OSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjEwMFwiXSB7XHJcbiAgbGVmdDogMTAwJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMFwiXSB7XHJcbiAgYm90dG9tOiAwJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMVwiXSB7XHJcbiAgYm90dG9tOiAxJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMlwiXSB7XHJcbiAgYm90dG9tOiAyJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiM1wiXSB7XHJcbiAgYm90dG9tOiAzJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNFwiXSB7XHJcbiAgYm90dG9tOiA0JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNVwiXSB7XHJcbiAgYm90dG9tOiA1JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNlwiXSB7XHJcbiAgYm90dG9tOiA2JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiN1wiXSB7XHJcbiAgYm90dG9tOiA3JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiOFwiXSB7XHJcbiAgYm90dG9tOiA4JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiOVwiXSB7XHJcbiAgYm90dG9tOiA5JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMTBcIl0ge1xyXG4gIGJvdHRvbTogMTAlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIxMVwiXSB7XHJcbiAgYm90dG9tOiAxMSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjEyXCJdIHtcclxuICBib3R0b206IDEyJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMTNcIl0ge1xyXG4gIGJvdHRvbTogMTMlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIxNFwiXSB7XHJcbiAgYm90dG9tOiAxNCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjE1XCJdIHtcclxuICBib3R0b206IDE1JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMTZcIl0ge1xyXG4gIGJvdHRvbTogMTYlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIxN1wiXSB7XHJcbiAgYm90dG9tOiAxNyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjE4XCJdIHtcclxuICBib3R0b206IDE4JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMTlcIl0ge1xyXG4gIGJvdHRvbTogMTklO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIyMFwiXSB7XHJcbiAgYm90dG9tOiAyMCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjIxXCJdIHtcclxuICBib3R0b206IDIxJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMjJcIl0ge1xyXG4gIGJvdHRvbTogMjIlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIyM1wiXSB7XHJcbiAgYm90dG9tOiAyMyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjI0XCJdIHtcclxuICBib3R0b206IDI0JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMjVcIl0ge1xyXG4gIGJvdHRvbTogMjUlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIyNlwiXSB7XHJcbiAgYm90dG9tOiAyNiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjI3XCJdIHtcclxuICBib3R0b206IDI3JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMjhcIl0ge1xyXG4gIGJvdHRvbTogMjglO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIyOVwiXSB7XHJcbiAgYm90dG9tOiAyOSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjMwXCJdIHtcclxuICBib3R0b206IDMwJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMzFcIl0ge1xyXG4gIGJvdHRvbTogMzElO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIzMlwiXSB7XHJcbiAgYm90dG9tOiAzMiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjMzXCJdIHtcclxuICBib3R0b206IDMzJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMzRcIl0ge1xyXG4gIGJvdHRvbTogMzQlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIzNVwiXSB7XHJcbiAgYm90dG9tOiAzNSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjM2XCJdIHtcclxuICBib3R0b206IDM2JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMzdcIl0ge1xyXG4gIGJvdHRvbTogMzclO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIzOFwiXSB7XHJcbiAgYm90dG9tOiAzOCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjM5XCJdIHtcclxuICBib3R0b206IDM5JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNDBcIl0ge1xyXG4gIGJvdHRvbTogNDAlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI0MVwiXSB7XHJcbiAgYm90dG9tOiA0MSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjQyXCJdIHtcclxuICBib3R0b206IDQyJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNDNcIl0ge1xyXG4gIGJvdHRvbTogNDMlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI0NFwiXSB7XHJcbiAgYm90dG9tOiA0NCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjQ1XCJdIHtcclxuICBib3R0b206IDQ1JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNDZcIl0ge1xyXG4gIGJvdHRvbTogNDYlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI0N1wiXSB7XHJcbiAgYm90dG9tOiA0NyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjQ4XCJdIHtcclxuICBib3R0b206IDQ4JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNDlcIl0ge1xyXG4gIGJvdHRvbTogNDklO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI1MFwiXSB7XHJcbiAgYm90dG9tOiA1MCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjUxXCJdIHtcclxuICBib3R0b206IDUxJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNTJcIl0ge1xyXG4gIGJvdHRvbTogNTIlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI1M1wiXSB7XHJcbiAgYm90dG9tOiA1MyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjU0XCJdIHtcclxuICBib3R0b206IDU0JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNTVcIl0ge1xyXG4gIGJvdHRvbTogNTUlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI1NlwiXSB7XHJcbiAgYm90dG9tOiA1NiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjU3XCJdIHtcclxuICBib3R0b206IDU3JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNThcIl0ge1xyXG4gIGJvdHRvbTogNTglO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI1OVwiXSB7XHJcbiAgYm90dG9tOiA1OSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjYwXCJdIHtcclxuICBib3R0b206IDYwJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNjFcIl0ge1xyXG4gIGJvdHRvbTogNjElO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI2MlwiXSB7XHJcbiAgYm90dG9tOiA2MiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjYzXCJdIHtcclxuICBib3R0b206IDYzJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNjRcIl0ge1xyXG4gIGJvdHRvbTogNjQlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI2NVwiXSB7XHJcbiAgYm90dG9tOiA2NSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjY2XCJdIHtcclxuICBib3R0b206IDY2JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNjdcIl0ge1xyXG4gIGJvdHRvbTogNjclO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI2OFwiXSB7XHJcbiAgYm90dG9tOiA2OCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjY5XCJdIHtcclxuICBib3R0b206IDY5JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNzBcIl0ge1xyXG4gIGJvdHRvbTogNzAlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI3MVwiXSB7XHJcbiAgYm90dG9tOiA3MSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjcyXCJdIHtcclxuICBib3R0b206IDcyJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNzNcIl0ge1xyXG4gIGJvdHRvbTogNzMlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI3NFwiXSB7XHJcbiAgYm90dG9tOiA3NCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjc1XCJdIHtcclxuICBib3R0b206IDc1JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNzZcIl0ge1xyXG4gIGJvdHRvbTogNzYlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI3N1wiXSB7XHJcbiAgYm90dG9tOiA3NyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjc4XCJdIHtcclxuICBib3R0b206IDc4JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNzlcIl0ge1xyXG4gIGJvdHRvbTogNzklO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI4MFwiXSB7XHJcbiAgYm90dG9tOiA4MCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjgxXCJdIHtcclxuICBib3R0b206IDgxJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiODJcIl0ge1xyXG4gIGJvdHRvbTogODIlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI4M1wiXSB7XHJcbiAgYm90dG9tOiA4MyU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjg0XCJdIHtcclxuICBib3R0b206IDg0JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiODVcIl0ge1xyXG4gIGJvdHRvbTogODUlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI4NlwiXSB7XHJcbiAgYm90dG9tOiA4NiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjg3XCJdIHtcclxuICBib3R0b206IDg3JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiODhcIl0ge1xyXG4gIGJvdHRvbTogODglO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI4OVwiXSB7XHJcbiAgYm90dG9tOiA4OSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjkwXCJdIHtcclxuICBib3R0b206IDkwJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiOTFcIl0ge1xyXG4gIGJvdHRvbTogOTElO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI5MlwiXSB7XHJcbiAgYm90dG9tOiA5MiU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjkzXCJdIHtcclxuICBib3R0b206IDkzJTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiOTRcIl0ge1xyXG4gIGJvdHRvbTogOTQlO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI5NVwiXSB7XHJcbiAgYm90dG9tOiA5NSU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjk2XCJdIHtcclxuICBib3R0b206IDk2JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiOTdcIl0ge1xyXG4gIGJvdHRvbTogOTclO1xyXG59XHJcbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI5OFwiXSB7XHJcbiAgYm90dG9tOiA5OCU7XHJcbn1cclxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjk5XCJdIHtcclxuICBib3R0b206IDk5JTtcclxufVxyXG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMTAwXCJdIHtcclxuICBib3R0b206IDEwMCU7XHJcbn1cclxuXHJcbi5ncm91cC1ieS1nZW5kZXIgLm1hbGUge1xyXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmdyb3VwLWJ5LWdlbmRlciAuZmVtYWxlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY2Njk5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5ncm91cC1ieS1udW1iZXIgW2RhdGEtZ3JvdXA9XCIwXCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5ncm91cC1ieS1udW1iZXIgW2RhdGEtZ3JvdXA9XCIxXCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY2Njk5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5ncm91cC1ieS1udW1iZXIgW2RhdGEtZ3JvdXA9XCIyXCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjOTNiODgxO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5ncm91cC1ieS1udW1iZXIgW2RhdGEtZ3JvdXA9XCIzXCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjZTA5ZTg3O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5ncm91cC1ieS1udW1iZXIgW2RhdGEtZ3JvdXA9XCI0XCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjYTIyMDQxO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5ncm91cC1ieS1udW1iZXIgW2RhdGEtZ3JvdXA9XCI1XCJdIHtcclxuICBiYWNrZ3JvdW5kOiAjOTU4NzljO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY29udGFpbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi5za2lsbHMge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmNzcyB7d2lkdGg6IDgwJTsgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMzt9XHJcbi5qcyB7d2lkdGg6IDY1JTsgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjt9XHJcbi5waHAge3dpZHRoOiA2MCU7IGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7fVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxudWwgPmxpIHtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/viewallsub/viewallsub.component.html":
/*!******************************************************!*\
  !*** ./src/app/viewallsub/viewallsub.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-toolbar\" color=\"primary\">\n  <span>Forms Builder</span>\n\n  <span class=\"spacer\"></span>\n  <button mat-button [matMenuTriggerFor]=\"belowMenu\">Username<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n          aria-label=\"Example user person_pin icon\">person_pin</mat-icon></button>\n  <mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n      <!-- <button mat-menu-item routerLink=\"/sttings\">Account<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user settings_applications icon\">settings_applications</mat-icon></button> -->\n      <button mat-menu-item routerLink=\"/login\">Logout<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user exit_to_app icon\">exit_to_app</mat-icon></button>\n  </mat-menu>\n</mat-toolbar>\n<mat-toolbar>\n    <a href=\"\"[routerLink]=\"['/home']\"><h6>\n      <mat-icon class=\"example-icon\" aria-hidden=\"false\"aria-label=\"Example user home icon\">home</mat-icon>\n          Dashboard</h6></a>\n  </mat-toolbar>\n\n\n<div class=\"text-center\">\n  <h2> You have  {{count}} Submissions</h2>\n</div>\n\n\n<mat-tab-group>\n  <mat-tab label=\"Responses\">\n    <ng-template matTabContent>\n\n      <div class=\"list\">\n        <ul>\n          <div *ngFor=\"let item of ans | paginate: { itemsPerPage: 1, currentPage: p } \">\n            <div class=\"row\" style=\" display: inline-block; width: 100%; padding:20px; background-color:#eff0f2;border-radius:15px;\n                          -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n                          -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n                          box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\">\n\n              <ul class=\"element\">\n                <!-- <li *ngFor=\"let x of a; let j = index\">\n                  {{j}}<b>{{x}}</b>\n                </li> -->\n                <div *ngFor=\"let a of item; let i = index\" >\n                <h4>  {{a[0]}}</h4>\n                  <ul>\n                    <li>\n                      {{a[1]}}\n                    </li>\n                  </ul>\n                </div>\n\n              </ul>\n              <!-- <div *ngFor=\"let answer of item | keyvalue\">\n          \n                    <div *ngFor=\"let a of answer | keyvalue\">\n                      Key: <b>{{a}}</b> and Value: <b>{{a}}</b>\n                    </div>\n          \n                  </div> -->\n\n\n            </div>\n          </div>\n        </ul>\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n      </div>\n\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Summary\">\n    <ng-template matTabContent>\n\n      <div class=\"list\">\n        <ul>\n          <div class=\"row\" style=\" display: inline-block; width: 100%; padding:20px; background-color:#eff0f2;border-radius:15px;\n                          -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n                          -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n                          box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\">\n\n            <!-- <ul class=\"element\">\n              <li *ngFor=\"let x of qs; let j = index\">\n                <b>{{x.label}}</b>\n                <div class=\"bar-chart\">\n                  <ul class=\"plot-container\">\n                    <li data-cp-size=\"100\">100%</li>\n                    <li data-cp-size=\"30\">30%</li>\n                    <li data-cp-size=\"20\">20%</li>\n                    <li data-cp-size=\"70\">70%</li>\n                    <li data-cp-size=\"90\">90%</li>\n                  </ul>\n                </div>\n              </li>\n            </ul> -->\n            <ul class=\"element\">\n              <li *ngFor=\"let dic of result; let j = index\">\n\n                <div *ngIf=\"dic['type']=='radio' || dic['type']=='autocomplete' ;else other_content\">\n\n\n                  <!-- <div *ngFor=\"let a of dic | keyvalue\">\n                  <b>{{a.value}}</b>\n                  </div> -->\n                  <h3>{{dic['qss']}}</h3>\n\n                  <div class=\"bar-chart\">\n                    <ul >\n                      <div *ngFor=\"let num of dic['values'] | keyvalue\">\n                        <!-- {{num.key}}<li [attr.data-cp-size]=\"num.value\">{{num.value}}</li> -->\n\n                        <p>{{num.key}}</p>\n                        <div class=\"contain\">\n                          <div class=\"skills\" [ngStyle]=\"setMyStyles(num.value,dic )\">{{ percernt(num.value,dic)}}%</div>\n                        </div>\n                        \n                      </div>\n                    </ul>\n                  </div>\n                </div>\n                <ng-template #other_content>\n                  <h3>{{dic['qss']}}</h3>\n\n                  <!-- <div class=\"bar-chart\">\n                    <ul class=\"plot-container\">\n                      <li data-cp-size=\"100\">100%</li>\n                      <li data-cp-size=\"30\">30%</li>\n                      <li data-cp-size=\"20\">20%</li>\n                      <li data-cp-size=\"70\">70%</li>\n                      <li data-cp-size=\"90\">90%</li>\n                    </ul>\n                  </div> -->\n                  <div class=\"textareashow\">\n                    <div *ngFor=\"let text of dic['text'] | keyvalue\">\n                      <h6>{{text.value}}</h6>\n                    </div>\n                  </div>\n                </ng-template>\n\n\n              </li>\n            </ul>\n\n\n          </div>\n        </ul>\n      </div>\n\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n\n\n\n\n<div class=\"left\">\n  <button mat-raised-button color=\"accent\" [routerLink]=\"['/home']\">Back</button>\n</div>"

/***/ }),

/***/ "./src/app/viewallsub/viewallsub.component.ts":
/*!****************************************************!*\
  !*** ./src/app/viewallsub/viewallsub.component.ts ***!
  \****************************************************/
/*! exports provided: ViewallsubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewallsubComponent", function() { return ViewallsubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewallsubComponent = /** @class */ (function () {
    function ViewallsubComponent(_user, _router, route) {
        this._user = _user;
        this._router = _router;
        this.route = route;
        this.collection = [];
        this.model = {};
        this.subs = [];
        this.qs = [];
        this.ans = [];
        this.labels = [];
        this.result = [];
        this.count = 0;
        this.numpppp = "200";
        this.tabLoadTimes = [];
        this.length = 100;
        this.pageSize = 1;
        this.pageSizeOptions = [1];
        for (var i = 1; i <= 100; i++) {
            this.collection.push("item " + i);
        }
    }
    ViewallsubComponent.prototype.getTimeLoaded = function (index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    };
    ViewallsubComponent.prototype.setMyStyles = function (num, obj2) {
        console.log("ddddddiiiiiiiiiiiccccc", obj2, obj2.values);
        var sum = this.sum(obj2.values);
        var percernt = this.percernt(num, obj2);
        var color = "#f44336";
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", num / sum);
        if (percernt >= 25) {
            color = "#3f51b5";
        }
        if (percernt >= 50) {
            color = "#018786";
        }
        console.log("ssssssssuuuuuummmmmm", sum);
        var styles = {
            'background-color': color,
            'width': percernt + "%"
        };
        return styles;
    };
    ViewallsubComponent.prototype.percernt = function (num, obj2) {
        var sum = this.sum(obj2.values);
        return Math.round((num / sum) * 100);
    };
    ViewallsubComponent.prototype.sum = function (obj) {
        var sum = 0;
        for (var el in obj) {
            if (obj.hasOwnProperty(el)) {
                sum += parseFloat(obj[el]);
            }
        }
        return sum;
    };
    ViewallsubComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrrr", this._router.url);
        var formId = this.route.snapshot.params["id"];
        console.log(formId);
        var observable = this._user.getForm(formId);
        observable.subscribe(function (data) {
            _this.model = data[0];
            _this.subs = data[0].submissions;
            _this.qs = data[0].attributes;
            _this.count = data[0].submissions.length;
            console.log("ssssssssssssssssss", _this.subs);
            for (var i = 0; i < _this.subs.length; i++) {
                var arr = Object.values(_this.subs[i]);
                console.log("aaaarrrrrrrr", arr);
                var smallarr = [];
                for (var j = 0; j < _this.qs.length; j++) {
                    console.log("llllllllllllllllllll", arr[j]);
                    smallarr.push([_this.qs[j].label, arr[j]]);
                    //this.subs[i].key = this.qs[i];
                }
                _this.ans.push(smallarr);
                console.log("mmmmmmmmmmmmm", smallarr);
            }
            console.log("annnnnnssswwww", _this.ans);
            console.log("qssssssssssqqqqqqqqqqqqqqqqq", _this.qs);
            console.log("Got the information from post data", _this.subs);
            console.log("Got the information from post data", _this.qs);
            for (var j = 0; j < _this.qs.length; j++) {
                _this.labels.push(_this.qs[j].label);
            }
            _this.result = [
            // {"type":"text",
            // "qss":"whaats your name?",
            // "text":["Sara", "Ghadeer", "rawan",]},
            // {"type":"radio",
            //   "qss":"Gender?",
            //   "values":{ "male 1":((10/this.count)*100),
            //       "female 2":((5/this.count)*100)
            // }
            // }
            ];
            for (var j = 0; j < _this.qs.length; j++) {
                var dic = {};
                dic["type"] = _this.qs[j].type;
                dic["qss"] = _this.qs[j].label;
                if (_this.qs[j].type == "radio" || _this.qs[j].type == "autocomplete") {
                    var values = {};
                    for (var i = 0; i < _this.qs[j].values.length; i++) {
                        values[_this.qs[j].values[i].label] = 0;
                    }
                    for (var i = 0; i < _this.subs.length; i++) {
                        for (var a = 0; a < _this.qs[j].values.length; a++) {
                            if (_this.subs[i][_this.qs[j].name] == _this.qs[j].values[a].value)
                                values[_this.qs[j].values[a].label] = values[_this.qs[j].values[a].label] + 1;
                        }
                    }
                    dic["values"] = values;
                }
                else {
                    var text = [];
                    for (var i = 0; i < _this.subs.length; i++) {
                        text.push(_this.subs[i][_this.qs[j].name]);
                    }
                    dic["text"] = text;
                }
                _this.result.push(dic);
            }
            console.log("rrrrrrreeeeeessssssssss", _this.result);
        });
    };
    ViewallsubComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    ViewallsubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewallsub',
            template: __webpack_require__(/*! ./viewallsub.component.html */ "./src/app/viewallsub/viewallsub.component.html"),
            styles: [__webpack_require__(/*! ./viewallsub.component.css */ "./src/app/viewallsub/viewallsub.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewallsubComponent);
    return ViewallsubComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rawaa\Downloads\MEAN_Stack_Project4\MEAN_Stack_Project\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map