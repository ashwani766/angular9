(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    }, {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'angular8-pro';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [["role", "banner", 1, "toolbar", "row", 2, "position", "relative"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], [1, "app-footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Email me @ashwani.vny@gmail.com\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".register[_ngcontent-%COMP%]{\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left[_ngcontent-%COMP%]{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right[_ngcontent-%COMP%]{\n    background: #f8f9fa;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]{\n    padding: 10%;\n    margin-top: 10%;\n}\n.btnRegister[_ngcontent-%COMP%]{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    background: #0062cc;\n    color: #fff;\n    font-weight: 600;\n    width: 50%;\n    cursor: pointer;\n}\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{\n    margin-top: 3%;\n    border: none;\n    background: #0062cc;\n    border-radius: 1.5rem;\n    width: 28%;\n    float: right;\n}\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n    padding: 2%;\n    height: 34px;\n    font-weight: 600;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{\n    border: none;\n}\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{\n    width: 100px;\n    color: #0062cc;\n    border: 2px solid #0062cc;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n.register-heading[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n.inner-right-box[_ngcontent-%COMP%]{\n    background: white;\n    background-color: white;\n    margin-top: 1%;\n\n    border-top-left-radius: 5% 30%;\n    border-bottom-left-radius: 5% 30%;\n    border-top-right-radius: 5% 30%;\n    border-bottom-right-radius: 5% 30%;\n    padding: 3%;\n    margin-bottom: 1%;\n   \n}\n.app-footer[_ngcontent-%COMP%]{\n    position: fixed;\n    bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyREFBMkQ7SUFDM0QsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsK0NBQStDO0lBQy9DLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDO0FBQ0E7SUFDSSxLQUFLLHdCQUF3QixFQUFFO0lBQy9CLE9BQU8sNEJBQTRCLEVBQUU7QUFDekM7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsY0FBYzs7SUFFZCw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlcntcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBwYWRkaW5nOiAzJTtcbn1cbi5yZWdpc3Rlci1sZWZ0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cbi5yZWdpc3Rlci1sZWZ0IGlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzgzZDQxO1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVnaXN0ZXItcmlnaHR7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG59XG4ucmVnaXN0ZXItbGVmdCBpbWd7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlICBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59XG4ucmVnaXN0ZXItbGVmdCBwe1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIHBhZGRpbmc6IDEyJTtcbiAgICBtYXJnaW4tdG9wOiAtOSU7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVyLWZvcm17XG4gICAgcGFkZGluZzogMTAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5idG5SZWdpc3RlcntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgYmFja2dyb3VuZDogIzAwNjJjYztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFic3tcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzAwNjJjYztcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgd2lkdGg6IDI4JTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjVyZW07XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlcntcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGNvbG9yOiAjMDA2MmNjO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDYyY2M7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcbn1cbi5yZWdpc3Rlci1oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTUlO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uaW5uZXItcmlnaHQtYm94e1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNSUgMzAlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUlIDMwJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNSUgMzAlO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1JSAzMCU7XG4gICAgcGFkZGluZzogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICBcbn1cblxuLmFwcC1mb290ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbn0iXX0= */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n.form-box[_ngcontent-%COMP%]{\n  \n  background: rgb(131,58,180);\nbackground: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n}\n.form-left[_ngcontent-%COMP%]{\n  color:white;\n  font-family: cursive;\n    font-size: x-large;\n    font-style: normal;\n}\n\n.form-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n \n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 18, vars: 0, consts: [[1, "container", 2, "margin-top", "1%"], [1, "row"], [1, "col-3"], [1, "nav", "flex-column"], [1, "nav-item"], ["href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], [1, "col-9"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " router\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/dashboard"]; };
class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 85, vars: 2, consts: [[1, "container", 2, "margin-top", "1%"], [1, "row", "form-box"], [1, "col-3", "form-left"], ["src", "https://image.ibb.co/n7oTvU/logo_white.png", "alt", ""], [1, "col-9"], [1, "inner-right-box"], [1, "tab", "row", "justify-content-end", 2, "margin-right", "1%"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3"], [1, "nav-item"], ["id", "pills-home-tab", "data-toggle", "pill", "href", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-toggle", "pill", "href", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "exampleInputPassword1"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], [3, "routerLink"], [2, "color", "white"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control"], ["for", "inputPassword4"], ["type", "password", "id", "inputPassword4", "placeholder", "Password", 1, "form-control"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], ["for", "inputCity"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "inputState"], ["id", "inputState", 1, "form-control"], ["selected", ""], [1, "form-group", "col-md-2"], ["for", "inputZip"], ["type", "text", "id", "inputZip", 1, "form-control"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register a new user in network and earn award");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Check me out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Check me out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".register[_ngcontent-%COMP%]{\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left[_ngcontent-%COMP%]{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right[_ngcontent-%COMP%]{\n    background: #f8f9fa;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]{\n    padding: 10%;\n    margin-top: 10%;\n}\n.btnRegister[_ngcontent-%COMP%]{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    background: #0062cc;\n    color: #fff;\n    font-weight: 600;\n    width: 50%;\n    cursor: pointer;\n}\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{\n    margin-top: 3%;\n    border: none;\n    background: #0062cc;\n    border-radius: 1.5rem;\n    width: 28%;\n    float: right;\n}\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n    padding: 2%;\n    height: 34px;\n    font-weight: 600;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{\n    border: none;\n}\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{\n    width: 100px;\n    color: #0062cc;\n    border: 2px solid #0062cc;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n.register-heading[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n.inner-right-box[_ngcontent-%COMP%]{\n    background: white;\n    background-color: white;\n    margin-top: 1%;\n\n    border-top-left-radius: 5% 30%;\n    border-bottom-left-radius: 5% 30%;\n    border-top-right-radius: 5% 30%;\n    border-bottom-right-radius: 5% 30%;\n    padding: 3%;\n    margin-bottom: 1%;\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJEQUEyRDtJQUMzRCxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDViwrQ0FBK0M7SUFDL0MsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxLQUFLLHdCQUF3QixFQUFFO0lBQy9CLE9BQU8sNEJBQTRCLEVBQUU7QUFDekM7QUFDQTtJQUNJLEtBQUssd0JBQXdCLEVBQUU7SUFDL0IsT0FBTyw0QkFBNEIsRUFBRTtBQUN6QztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjOztJQUVkLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzM5MzFhZiwgIzAwYzZmZik7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgcGFkZGluZzogMyU7XG59XG4ucmVnaXN0ZXItbGVmdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG4ucmVnaXN0ZXItbGVmdCBpbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzM4M2Q0MTtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlZ2lzdGVyLXJpZ2h0e1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xufVxuLnJlZ2lzdGVyLWxlZnQgaW1ne1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICB3aWR0aDogMjUlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAycyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxufVxuQGtleWZyYW1lcyBtb3ZlciB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxufVxuLnJlZ2lzdGVyLWxlZnQgcHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAxMiU7XG4gICAgbWFyZ2luLXRvcDogLTklO1xufVxuLnJlZ2lzdGVyIC5yZWdpc3Rlci1mb3Jte1xuICAgIHBhZGRpbmc6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG4uYnRuUmVnaXN0ZXJ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJhY2tncm91bmQ6ICMwMDYyY2M7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWdpc3RlciAubmF2LXRhYnN7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMwMDYyY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHdpZHRoOiAyOCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbmt7XG4gICAgcGFkZGluZzogMiU7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS41cmVtO1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbms6aG92ZXJ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjb2xvcjogIzAwNjJjYztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA2MmNjO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW07XG59XG4ucmVnaXN0ZXItaGVhZGluZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogOCU7XG4gICAgbWFyZ2luLWJvdHRvbTogLTE1JTtcbiAgICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLmlubmVyLXJpZ2h0LWJveHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcblxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUlIDMwJTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1JSAzMCU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUlIDMwJTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNSUgMzAlO1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgXG59Il19 */", "[_nghost-%COMP%] {\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      font-size: 14px;\n      color: #333;\n      box-sizing: border-box;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  \n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n      margin: 8px 0;\n    }\n  \n    p[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n  \n    .spacer[_ngcontent-%COMP%] {\n      flex: 1;\n    }\n  \n    .toolbar[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 60px;\n      display: flex;\n      align-items: center;\n      background-color: #1976d2;\n      color: white;\n      font-weight: 600;\n    }\n  \n    .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      margin: 0 16px;\n    }\n  \n    .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n      height: 40px;\n      margin: 0 16px;\n    }\n  \n    .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n      opacity: 0.8;\n    }\n  \n    .content[_ngcontent-%COMP%] {\n      display: flex;\n      margin: 82px auto 32px;\n      padding: 0 16px;\n      max-width: 960px;\n      flex-direction: column;\n      align-items: center;\n    }\n  \n    svg.material-icons[_ngcontent-%COMP%] {\n      height: 24px;\n      width: auto;\n    }\n  \n    svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n      margin-right: 8px;\n    }\n  \n    .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n      fill: #888;\n    }\n  \n    .card-container[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin-top: 16px;\n    }\n  \n    .card[_ngcontent-%COMP%] {\n      border-radius: 4px;\n      border: 1px solid #eee;\n      background-color: #fafafa;\n      height: 40px;\n      width: 200px;\n      margin: 0 8px 16px;\n      padding: 16px;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      transition: all 0.2s ease-in-out;\n      line-height: 24px;\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n      margin-right: 0;\n    }\n  \n    .card.card-small[_ngcontent-%COMP%] {\n      height: 16px;\n      width: 168px;\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      cursor: pointer;\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n      transform: translateY(-3px);\n      box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n      fill: rgb(105, 103, 103);\n    }\n  \n    .card.highlight-card[_ngcontent-%COMP%] {\n      background-color: #1976d2;\n      color: white;\n      font-weight: 600;\n      border: none;\n      width: auto;\n      min-width: 30%;\n      position: relative;\n    }\n  \n    .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 60px;\n    }\n  \n    svg#rocket[_ngcontent-%COMP%] {\n      width: 80px;\n      position: absolute;\n      left: -10px;\n      top: -24px;\n    }\n  \n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      height: calc(100vh - 95px);\n      position: absolute;\n      top: 10px;\n      right: 180px;\n      z-index: -10;\n    }\n  \n    a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n      color: #1976d2;\n      text-decoration: none;\n    }\n  \n    a[_ngcontent-%COMP%]:hover {\n      color: #125699;\n    }\n  \n    .terminal[_ngcontent-%COMP%] {\n      position: relative;\n      width: 80%;\n      max-width: 600px;\n      border-radius: 6px;\n      padding-top: 45px;\n      margin-top: 8px;\n      overflow: hidden;\n      background-color: rgb(15, 15, 16);\n    }\n  \n    .terminal[_ngcontent-%COMP%]::before {\n      content: \"\\2022 \\2022 \\2022\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 4px;\n      background: rgb(58, 58, 58);\n      color: #c2c3c4;\n      width: 100%;\n      font-size: 2rem;\n      line-height: 0;\n      padding: 14px 0;\n      text-indent: 4px;\n    }\n  \n    .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n      color: white;\n      padding: 0 1rem 1rem;\n      margin: 0;\n    }\n  \n    .circle-link[_ngcontent-%COMP%] {\n      height: 40px;\n      width: 40px;\n      border-radius: 40px;\n      margin: 8px;\n      background-color: white;\n      border: 1px solid #eeeeee;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: 1s ease-out;\n    }\n  \n    .circle-link[_ngcontent-%COMP%]:hover {\n      transform: translateY(-0.25rem);\n      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n  \n    footer[_ngcontent-%COMP%] {\n      margin-top: 8px;\n      display: flex;\n      align-items: center;\n      line-height: 20px;\n    }\n  \n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n  \n    .github-star-badge[_ngcontent-%COMP%] {\n      color: #24292e;\n      display: flex;\n      align-items: center;\n      font-size: 12px;\n      padding: 3px 10px;\n      border: 1px solid rgba(27,31,35,.2);\n      border-radius: 3px;\n      background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n      margin-left: 4px;\n      font-weight: 600;\n      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n    }\n  \n    .github-star-badge[_ngcontent-%COMP%]:hover {\n      background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n      border-color: rgba(27,31,35,.35);\n      background-position: -.5em;\n    }\n  \n    .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n      height: 16px;\n      width: 16px;\n      margin-right: 4px;\n    }\n  \n    svg#clouds[_ngcontent-%COMP%] {\n      position: fixed;\n      bottom: -160px;\n      left: -230px;\n      z-index: -10;\n      width: 1920px;\n    }\n  \n  .form-box[_ngcontent-%COMP%]{\n    \n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, #0062cc 0%, rgba(0,123,255,.25) 50%, #0014ff 100%);\n  \n  }\n  .form-left[_ngcontent-%COMP%]{\n    color:white;\n    font-family: cursive;\n      font-size: x-large;\n      font-style: normal;\n  }\n  \n  .form-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-top: 15%;\n      margin-bottom: 5%;\n      width: 25%;\n      -webkit-animation: mover 2s infinite  alternate;\n      animation: mover 1s infinite  alternate;\n  }\n\n  .form-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    box-shadow: 4px 4px 4px 4px #0A1312;\n    transition: all 2s;\n}\n    \n    @media screen and (max-width: 767px) {\n  \n      .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n  \n      .card[_ngcontent-%COMP%]:not(.highlight-card) {\n        height: 16px;\n        margin: 8px 0;\n      }\n  \n      .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-left: 72px;\n      }\n  \n      svg#rocket-smoke[_ngcontent-%COMP%] {\n        right: 120px;\n        transform: rotate(-5deg);\n      }\n    }\n   \n    @media screen and (max-width: 575px) {\n      svg#rocket-smoke[_ngcontent-%COMP%] {\n        display: none;\n        visibility: hidden;\n      }\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashwani/angular8-pro/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map