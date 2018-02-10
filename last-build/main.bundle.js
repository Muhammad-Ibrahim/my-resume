webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account-form/account-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pp {\r\n    margin-bottom: 20px;cursor: pointer;\r\n}\r\n\r\n#img {\r\n    display:block;\r\n    margin-bottom:12px;\r\n}\r\n\r\ninput {\r\n    margin: 40px 0 0;\r\n}\r\n\r\n.button {\r\n    margin: 0;\r\n}\r\n\r\n#x {\r\n    position: absolute;\r\n    text-align: center;\r\n    background: #f9f9f9;\r\n    color: hotpink;\r\n    padding: 3px 10px 3px 9.5px;\r\n    width: 30px;\r\n    border: 2px solid hotpink;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-form/account-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!name && user.length <= 0; else profile\">\n  <div id=\"x\" *ngIf=\"small\" (click)=\"newShowAcc()\">x</div>\n  <form [formGroup]=\"aForm\" (ngSubmit)=\"addUser(aForm.value)\">\n    \n    <div style=\"display:inline-block;\">\n      <img src=\"../assets/avatar.png\" [@selectedImg]=\"animateMale\" (click)=\"animate('male')\" alt=\"Male Profile Picture\" style=\"width:100px;min-width:50px;height:100px;min-height:50px;margin-right:10px;\" class=\"pp\">\n      or\n      <img src=\"../assets/favatar.png\" [@selectedImg]=\"animateFemale\" (click)=\"animate('fale')\" alt=\"Female Profile Picture\" style=\"width:100px;min-width:50px;height:100px;min-height:50px;margin-left:10px;\" class=\"pp\">\n    </div>\n    \n    <input formControlName=\"name\" [autofocus]=\"focus\" type=\"text\" placeholder=\"Your Name...\">\n    <div class=\"alert\" [@alert] *ngIf=\"!aForm.controls['name'].valid && aForm.controls['name'].touched\">The name is required</div>\n    \n    <input formControlName=\"password\" type=\"password\" placeholder=\"Password\">\n    <div class=\"alert\" [@alert] *ngIf=\"!aForm.controls['password'].valid && aForm.controls['password'].touched\">Password must be at least 6 charachters</div>\n    \n    <br><br><input type=\"submit\" class=\"button\" value=\"Start Contributing\" [disabled]=\"!aForm.valid\" >\n  </form>\n</div>\n\n<ng-template #profile>\n  <div [@profile]>\n    <img [src]=\"user[0].image\" style=\"margin:0 25px 50px;width:150px;height:150px;\">\n    <h3>{{ user[0].name }}</h3>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/account-form/account-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountFormComponent = (function () {
    function AccountFormComponent(fb, data) {
        this.data = data;
        this.gend = true;
        this.name = '';
        this.password = '';
        /*fetch() {
          this.data.getCons()
            .subscribe(
              data => console.log(JSON.stringify(data)),
              error => console.log(error),
              () => console.log('Finished')
            );
        }*/
        this.animateMale = 'active';
        this.animateFemale = 'inactive';
        this.aForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6)])]
        });
        //this.fetch();
        this.cons = this.data.cons;
    }
    AccountFormComponent.prototype.addUser = function (post) {
        if (this.gend)
            this.image = '../assets/avatar.png';
        else
            this.image = '../assets/favatar.png';
        this.name = post.name;
        this.password = post.password;
        this.user = [{
                'image': this.image,
                'name': this.name,
                'password': this.password
            }];
        this.newUser();
        this.contribute = true;
        this.newContribute();
        if (this.showAcc)
            this.newShowAcc();
    };
    AccountFormComponent.prototype.animate = function (gender) {
        if (gender === 'male') {
            this.animateMale = (this.animateMale === 'inactive' ? 'active' : 'inactive');
            this.animateFemale = 'inactive';
            this.gend = true; //male
        }
        else {
            this.animateFemale = (this.animateFemale === 'inactive' ? 'active' : 'inactive');
            this.animateMale = 'inactive';
            this.gend = false;
        }
    };
    AccountFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentUser.subscribe(function (user) { return _this.user = user; });
        this.data.currentContribute.subscribe(function (contribute) { return _this.contribute = contribute; });
        this.data.currentShowAcc.subscribe(function (showAcc) { return _this.showAcc = showAcc; });
    };
    AccountFormComponent.prototype.newUser = function () {
        this.data.changeUser(this.user);
    };
    AccountFormComponent.prototype.newContribute = function () {
        this.data.changeContribute(this.contribute);
    };
    AccountFormComponent.prototype.newShowAcc = function () {
        this.showAcc = false;
        this.data.changeShowAcc(this.showAcc);
    };
    return AccountFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], AccountFormComponent.prototype, "small", void 0);
AccountFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'account-form',
        template: __webpack_require__("../../../../../src/app/account-form/account-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account-form/account-form.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('selectedImg', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    border: '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    border: '4px solid rgb(23, 121, 186)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-30px)', opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('700ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-30px)', opacity: '0' }))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('alert', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateY(-30px)', opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('700ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateY(-30px)', opacity: '0' }))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('profile', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-60px)', opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1000ms ease-in-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _b || Object])
], AccountFormComponent);

var _a, _b;
//# sourceMappingURL=account-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_form_account_form_component__ = __webpack_require__("../../../../../src/app/account-form/account-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__comment_form_comment_form_component__ = __webpack_require__("../../../../../src/app/comment-form/comment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reply_form_reply_form_component__ = __webpack_require__("../../../../../src/app/reply-form/reply-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mibrahim_mibrahim_component__ = __webpack_require__("../../../../../src/app/mibrahim/mibrahim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__account_form_account_form_component__["a" /* AccountFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__comment_form_comment_form_component__["a" /* CommentFormComponent */],
            __WEBPACK_IMPORTED_MODULE_11__reply_form_reply_form_component__["a" /* ReplyFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__mibrahim_mibrahim_component__["a" /* MibrahimComponent */],
            __WEBPACK_IMPORTED_MODULE_13__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routes */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_11__reply_form_reply_form_component__["a" /* ReplyFormComponent */], __WEBPACK_IMPORTED_MODULE_10__comment_form_comment_form_component__["a" /* CommentFormComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mibrahim_mibrahim_component__ = __webpack_require__("../../../../../src/app/mibrahim/mibrahim.component.ts");



var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__main_main_component__["a" /* MainComponent */] },
    { path: 'm.ibrahim', component: __WEBPACK_IMPORTED_MODULE_2__mibrahim_mibrahim_component__["a" /* MibrahimComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__main_main_component__["a" /* MainComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/comment-form/comment-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.button {\r\n    width: 65%;\r\n    background-color: lightgray;\r\n    color: #444;\r\n    font-size: 16px;\r\n    padding: 5px;\r\n    text-align: left;\r\n    margin-left: 23px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment-form/comment-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- {{user[0].name}} -->\r\n<div class=\"contribution\">\r\n  <div class=\"sentence\">\r\n    <div class=\"con-info\">\r\n      <img [src]=\"user[0].image\" alt=\"Contributor image\" style=\"width:50px;height:50px;\">\r\n      <p style=\"margin-top:0;padding:0 10px;line-height:20px;\"><strong>{{ user[0].name }}</strong><br>\r\n      <span class=\"date\">{{ now | date:'medium' }}</span></p>\r\n    </div>\r\n    <div class=\"con-body\">\r\n      <p style=\"padding:0 0 10px 60px;\">{{ comment }}</p>\r\n    </div>\r\n  </div>\r\n  <button class=\"button\" (click)=\"openAccordion()\">{{value || \"Add a Reply\"}}</button>\r\n  <div [@accordion] *ngIf=\"animateA\" class=\"accordion\">\r\n    <div class=\"reply\">\r\n      <div *ngIf=\"rshow\">\r\n        <div *ngFor=\"let radd of radded; let r = index\">\r\n          <div *ngFor=\"let rad of radd\">\r\n            <reply-form [reply]=\"rad\"></reply-form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"rForm\" (ngSubmit)=\"radd(rForm.value)\">\r\n        <div style=\"display:inline-flex;\">\r\n          <input formControlName=\"reply\" type=\"text\" placeholder=\"What do you think?\">\r\n          <input type=\"submit\" class=\"button\" value=\"Add Reply\" [disabled]=\"!rForm.valid\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/comment-form/comment-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentFormComponent = (function () {
    function CommentFormComponent(fb, data) {
        this.data = data;
        this.now = new Date();
        this.radded = [[]];
        this.r = 0;
        this.rshow = false;
        this.first = false;
        this.value = '';
        this.animateA = false;
        this.rForm = fb.group({
            'reply': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
        this.cForm = fb.group({
            'comment': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    }
    CommentFormComponent.prototype.radd = function (post) {
        this.radded[0][this.r] = post.reply;
        console.log(this.radded);
        this.rForm.reset();
        this.r++;
        if (!this.rshow)
            this.rshow = true;
        if (!this.first) {
            this.first = true;
            this.value = 'Hide Replies...';
        }
        ;
    };
    CommentFormComponent.prototype.openAccordion = function () {
        if (!this.first) {
            if (this.animateA) {
                this.animateA = false;
                this.value = 'Add a Reply';
            }
            else {
                this.animateA = true;
                this.value = 'Skip Replying...';
            }
        }
        else {
            if (this.animateA) {
                this.animateA = false;
                this.value = 'View Replies...';
            }
            else {
                this.animateA = true;
                this.value = 'Hide Replies...';
            }
        }
    };
    CommentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentUser.subscribe(function (user) { return _this.user = user; });
    };
    return CommentFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommentFormComponent.prototype, "comment", void 0);
CommentFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'comment-form',
        template: __webpack_require__("../../../../../src/app/comment-form/comment-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comment-form/comment-form.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('alert', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(-30px)', opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('700ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(-30px)', opacity: '0' }))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('accordion', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(-30px)', opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('700ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(-30px)', opacity: '0' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _b || Object])
], CommentFormComponent);

var _a, _b;
//# sourceMappingURL=comment-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    //
    function DataService(http) {
        this.http = http;
        //Shared Variables Declarations
        //created user {} - (!)conribute - {{reply}} - (!)showReply - (!)showAcc
        this.userSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentUser = this.userSource.asObservable();
        this.contributeSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.currentContribute = this.contributeSource.asObservable();
        this.replySource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.currentReply = this.replySource.asObservable();
        this.showReplySource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.currentShowReply = this.showReplySource.asObservable();
        this.showAccSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.currentShowAcc = this.showAccSource.asObservable();
        //
        //initially rendered contributions 
        this.cons = {
            'comments': [
                {
                    'id': 0,
                    'com_id': -1,
                    'hasReplies': true,
                    'image': './assets/muhammad-ibrahim.jpg',
                    'name': 'Muhammad Ibrahim',
                    'time': '08-09-2017',
                    'sentence': 'What is AI?'
                }
            ],
            'replies': [
                {
                    'id': 0,
                    'com_id': 0,
                    'image': './assets/favatar.png',
                    'name': 'Mai Magdy',
                    'time': '10-09-2017',
                    'sentence': 'Artificial Intelligence is the science of giving the machine the ability of learning'
                },
                {
                    'id': 0,
                    'com_id': 0,
                    'image': './assets/avatar.png',
                    'name': 'Ahmed Saleh',
                    'time': '10-09-2017',
                    'sentence': 'That\'s right, it also enables the machine to deciding and acting according to its new thoughts'
                }
            ]
        };
    }
    //change shared variables to be affected globally  
    DataService.prototype.changeUser = function (user) {
        this.userSource.next(user);
    };
    DataService.prototype.changeContribute = function (contribute) {
        this.contributeSource.next(contribute);
    };
    DataService.prototype.changeReply = function (reply) {
        this.replySource.next(reply);
    };
    DataService.prototype.changeShowReply = function (showReply) {
        this.showReplySource.next(showReply);
    };
    DataService.prototype.changeShowAcc = function (showAcc) {
        this.showAccSource.next(showAcc);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 80px;\r\n    padding: 10px;\r\n    background: #555;\r\n    color: #fff;\r\n}\r\n\r\n#menu {\r\n    background: #fff;\r\n    border-radius: 6px;\r\n    padding: 0.5rem 0.8rem;\r\n}\r\n\r\n.icon-bar {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: #555;\r\n    margin: 6px 0;\r\n}\r\n\r\n.dropdown-pane {\r\n    background: #333;\r\n    border-color: #555;\r\n}\r\n\r\n.logo {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-top: 6px;\r\n}\r\n\r\n\r\n\r\n.logo img {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.logo p {\r\n    color: #ddd;\r\n    margin-top: 12px;\r\n    margin-left: 10px;\r\n    font-size: large;\r\n}\r\n\r\nul {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    list-style-type: none;\r\n}\r\n\r\nli {\r\n    margin-top: 13px;\r\n    margin-left: 30px;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\nli:hover {\r\n    background: #777;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header role=\"banner\">\n  <div class=\"logo\">\n    <img src=\"../assets/muhammad-ibrahim.jpg\" alt=\"my photo\" [style.marginLeft.px]=\"imgMargin\">\n    <p>Muhammad Ibrahim</p>\n  </div>\n  <nav role=\"navigation\">\n    <ul *ngIf=\"!small\" [style.marginLeft.px]=\"ulMargin\">\n      <li>PLAY</li>\n      <li class=\"active\">ABOUT</li>\n    </ul>\n    <div *ngIf=\"small\">\n      <a class=\"button\" type=\"button\" (click)=\"toggleMenu()\" id=\"menu\">\n        <div class=\"icon-bar\"></div>\n        <div class=\"icon-bar\"></div>\n        <div class=\"icon-bar\"></div>\n      </a>\n      <div class=\"dropdown-pane\" [style.visibility]=\"menuVisibility\">\n        <ul>\n          <li>PLAY</li>\n          <li>ABOUT</li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.menuVisibility = 'hidden';
    }
    HeaderComponent.prototype.onResize = function (event) {
        this.width = event.target.innerWidth;
        //size style changings
        if (this.width < 570) {
            this.small = true;
        }
        else if (this.width < 800 && this.width >= 570) {
            this.imgMargin = 30;
            this.ulMargin = 40;
            this.small = false;
        }
        else {
            this.imgMargin = 65;
            this.ulMargin = 80;
            this.small = false;
        }
        //
    };
    ;
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuVisibility = (this.menuVisibility === 'hidden' ? 'visible' : 'hidden');
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.width = window.innerWidth;
        //size style changings
        if (this.width < 570) {
            this.small = true;
        }
        else if (this.width < 800 && this.width >= 570) {
            this.imgMargin = 30;
            this.ulMargin = 40;
            this.small = false;
        }
        else {
            this.imgMargin = 65;
            this.ulMargin = 80;
            this.small = false;
        }
        //
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onResize", null);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding: 10px;\r\n}\r\n\r\n.columns {\r\n    background-color: #f9f9f9;\r\n    z-index: 1;\r\n    margin: 30px 0;\r\n    border-radius: 6px;\r\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#wall {\r\n    margin-left: 60px;\r\n    padding: 60px;\r\n}\r\n\r\n#profile {\r\n    padding: 60px 20px;text-align: center;\r\n}\r\n\r\n#img {\r\n    display:block;\r\n    margin-bottom:12px;\r\n}\r\n\r\n.button {\r\n    width: 65%;\r\n    background-color: lightgray;\r\n    color: #444;\r\n    font-size: 16px;\r\n    padding: 5px;\r\n    text-align: left;\r\n    margin-left: 23px;\r\n}\r\n\r\n#contribute {\r\n    background-color: #008AE6;\r\n    color: #fefefe;\r\n    text-align: center;\r\n    padding: 10px 10px;\r\n    width: 230px;\r\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#modal {\r\n    position:fixed;\r\n    z-index: 5;\r\n    top: 100px;\r\n    right:25%;\r\n    width:50%;\r\n    min-width: 285px;\r\n    height:462px;\r\n    padding:10px;\r\n    border-width:2px;\r\n    border-style:solid;\r\n    border-radius: 30px;\r\n    border-color:#3f3f3f;\r\n    text-align: center;\r\n    background: #EEEEEE;\r\n    overflow-y:auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngIf=\"!small\" class=\"shrink columns\" id=\"profile\">\n    <account-form></account-form>\n  </div>\n\n  <div [ngStyle]=\"smallWallStyle\" class=\"columns\" id=\"wall\">\n    <p><strong>Data </strong>neither caught nor saved ..<br>\n    <strong>This is a Frontend app </strong>built with angular with no backend services.</p>\n    <div>\n      <div class=\"contribution\" *ngFor=\"let con of cons.comments; let i = index; let first = first;\">\n        \n        <div class=\"sentence\">\n          <div class=\"con-info\">\n            <div *ngIf=\"first; else notFirst\" style=\"display:flex;\">\n              <a routerLink=\"/m.ibrahim\">\n                <img [src]=\"con.image\" [alt]=\"con.name\" style=\"width:50px;height:50px;\">\n              </a>\n              <p style=\"margin-top:0;padding:0 10px;line-height:20px;\">\n                <a style=\"text-decoration:underline;\" routerLink=\"/m.ibrahim\"><strong>{{ con.name }}</strong></a>&ensp;<small>(visit me)</small><br>\n                <span class=\"date\">{{ con.time | date:'medium' }}</span></p>\n              </div>\n            <ng-template #notFirst style=\"display:flex;\"><img [src]=\"con.image\" alt=\"Contributor image\" style=\"width:50px;height:50px;\">\n            <p style=\"margin-top:0;padding:0 10px;line-height:20px;\"><strong>{{ con.name }}</strong><br>\n            <span class=\"date\">{{ con.time | date:'medium' }}</span></p></ng-template>\n          </div>\n          <div class=\"con-body\">\n            <p style=\"padding:0 0 10px 60px;\">{{ con.sentence }}</p>\n          </div>\n        </div>\n        \n        <button class=\"button\" (click)=\"openAccordion(con)\">{{value[con.id] || \"View\"}} replies...</button>\n        <div [@accordion] *ngIf=\"animateA[con.id]\" class=\"accordion\">\n          <div class=\"reply\" *ngFor=\"let rep of cons.replies; let last = last\">\n            <div *ngIf=\"rep.com_id == i\">\n              <div class=\"con-info\">\n                <img [src]=\"rep.image\" alt=\"Contributor image\" style=\"width:40px;height:40px;\">\n                <p style=\"margin-top:0;padding:0 10px;\"><strong>{{ rep.name }}</strong><br>\n                <span>{{ rep.time | date:'medium' }}</span></p>\n              </div>\n              <div class=\"con-body\">\n                <p style=\"padding:0 0 10px 50px;\">{{ rep.sentence }}</p>\n              </div>\n            </div>\n            <div *ngIf=\"contribute && last\">\n              <!--<reply-form *ngIf=\"truerep[i]\"></reply-form>-->\n              <div *ngIf=\"rshow\">\n                <div *ngFor=\"let radd of radded; let r = index\">\n                  <div *ngFor=\"let rad of radd\">\n                    <reply-form [reply]=\"rad\"></reply-form>\n                  </div>\n                </div>\n              </div>\n              <form [formGroup]=\"rForm\" (ngSubmit)=\"radd(rForm.value)\">\n                <div style=\"display:inline-flex;\">\n                  <input formControlName=\"reply\" type=\"text\" placeholder=\"What do you think?\">\n                  <input type=\"submit\" class=\"button\" value=\"Add Reply\" [disabled]=\"!rForm.valid\">\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n      <div *ngIf=\"!contribute && small\" style=\"text-align:center;\">\n        <button class=\"button\" id=\"contribute\" (click)=\"newShowAcc(true)\" >\n          Create account to contribute!\n        </button>\n      </div>\n      <div *ngIf=\"contribute\" class=\"comment\">\n        <div *ngIf=\"cshow\">\n          <comment-form\n            *ngFor=\"let cadd of cadded; let c = index\"\n            [comment]=\"cadd\">\n          </comment-form>\n        </div>\n        <form [formGroup]=\"cForm\" (ngSubmit)=\"cadd(cForm.value)\" style=\"margin-left:20px;\">\n          <div style=\"display:inline-flex;\">\n            <input formControlName=\"comment\" type=\"text\" placeholder=\"Move it forward...\">\n            <input type=\"submit\" class=\"button\" value=\"Start Contributing\" [disabled]=\"!cForm.valid\">\n          </div>\n        </form>\n      </div>\n    </div>\n    \n  </div>\n\n  <div [@modal] *ngIf=\"showAcc\" id=\"modal\" [style.right]=\"modalRight\">\n    <account-form [small]=true></account-form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = (function () {
    function MainComponent(fb, data) {
        this.data = data;
        this.small = false;
        this.now = new Date();
        this.cadded = [];
        this.radded = [[]];
        this.c = 0;
        this.r = 0;
        this.cshow = false;
        this.rshow = false;
        this.animateA = {};
        this.value = {};
        this.rForm = fb.group({
            'reply': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
        this.cForm = fb.group({
            'comment': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    }
    MainComponent.prototype.onResize = function (event) {
        this.width = event.target.innerWidth;
        //size style changings
        if (this.width < 1000 && this.width >= 800) {
            this.small = true;
            this.smallWallStyle = { 'margin-right': '60px' };
        }
        else if (this.width < 800) {
            this.small = true;
            this.smallWallStyle = { 'margin': '0', 'padding': '10px' };
            this.modalRight = (this.width - 280) / 2 + 'px';
        }
        else {
            if (this.showAcc)
                this.newShowAcc(false);
            this.small = false;
            this.smallWallStyle = { 'margin-right': '0', 'margin-left': '60px', 'padding': '60px' };
            this.modalRight = '25%';
        }
        //
    };
    ;
    MainComponent.prototype.cadd = function (post) {
        this.cadded[this.c] = post.comment;
        this.cForm.reset();
        this.c++;
        if (!this.cshow)
            this.cshow = true;
    };
    MainComponent.prototype.radd = function (post) {
        this.radded[0][this.r] = post.reply;
        console.log(this.radded);
        this.rForm.reset();
        this.r++;
        if (!this.rshow)
            this.rshow = true;
    };
    MainComponent.prototype.openAccordion = function (con) {
        var _this = this;
        if (!this.animateA[con.id]) {
            Object.keys(this.animateA).forEach(function (i) {
                _this.animateA[i] = false;
            });
            Object.keys(this.value).forEach(function (i) {
                _this.value[i] = "View";
            });
            this.animateA[con.id] = true;
            this.value[con.id] = "Hide";
        }
        else {
            this.animateA[con.id] = false;
            this.value[con.id] = "View";
        }
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.width = window.innerWidth;
        //size style changings
        if (this.width < 1000 && this.width >= 800) {
            this.small = true;
            this.smallWallStyle = { 'margin-right': '60px' };
        }
        else if (this.width < 800) {
            this.small = true;
            this.smallWallStyle = { 'margin': '0', 'padding': '10px' };
            this.modalRight = (this.width - 280) / 2 + 'px';
        }
        else {
            if (this.showAcc)
                this.newShowAcc(false);
            this.small = false;
            this.smallWallStyle = { 'margin-right': '0', 'margin-left': '60px', 'padding': '60px' };
            this.modalRight = '25%';
        }
        //
        this.cons = this.data.cons;
        //shared variables watchers
        this.data.currentUser.subscribe(function (user) { return _this.user = user; });
        this.data.currentContribute.subscribe(function (contribute) { return _this.contribute = contribute; });
        this.data.currentShowReply.subscribe(function (showReply) { return _this.showReply = showReply; });
        this.data.currentShowAcc.subscribe(function (showAcc) { return _this.showAcc = showAcc; });
        //
    };
    //ask to change shared variables
    MainComponent.prototype.newShowReply = function () {
        this.data.changeShowReply(this.showReply);
    };
    MainComponent.prototype.newShowAcc = function (state) {
        this.showAcc = state;
        this.data.changeShowAcc(this.showAcc);
    };
    return MainComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainComponent.prototype, "onResize", null);
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('accordion', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(-30px)', opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('700ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(-30px)', opacity: '0' }))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('modal', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(-300px)', opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('500ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('700ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(-300px)', opacity: '0' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/mibrahim/mibrahim.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding: 0;\r\n}\r\n\r\n.row {\r\n    margin: 0;\r\n    max-width: initial;\r\n}\r\n\r\n#hero {\r\n    height: 100vh;\r\n    width: 100%;\r\n    box-shadow: 0 5px 25px 1px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#inner, #item {\r\n    height: 100%;\r\n}\r\n\r\n#logo {\r\n    position: absolute;\r\n    padding: 30px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n#logo:before {\r\n    content: \"\\2190\";\r\n}\r\n\r\na {\r\n    color: #B3DFDC;\r\n}\r\n\r\n#dec {\r\n    color: white;\r\n    width: 94vw;\r\n    padding: 40vh 0 0 30px;\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    padding: 20px 40px;\r\n    border: 2px solid #555;\r\n    border-radius: 35px;\r\n    width: 30vw;\r\n    font-size: 24px;\r\n    color: #1FB36B;\r\n    margin: 5vh 30vw;\r\n}\r\n\r\nbutton:hover {\r\n    color: white;\r\n    background: rgba(31, 179, 107, 0.6);\r\n    border: 2px solid rgb(31, 179, 107);\r\n}\r\n\r\n#techie, #human {\r\n    margin: 60px 0;\r\n    padding: 7.5vw 0;\r\n}\r\n\r\n.left, .right {\r\n    margin: 20px 14vw;\r\n    width: 50vw;\r\n    padding: 10px;\r\n    border-radius: 34px;\r\n}\r\n\r\n.left {\r\n    float: left;\r\n    padding-left: 20px;\r\n}\r\n\r\n.right {\r\n    float: right;\r\n    text-align: right;\r\n    padding-right: 20px;\r\n}\r\n\r\n#o1,#t3,#f5,#s7 {\r\n    background-color: rgba(31, 179, 107, 0.86);\r\n    color: #fff;\r\n}\r\n\r\n#o1, #oo1 {\r\n    margin-top: 0;\r\n}\r\n\r\n#t2,#f4,#s6 {\r\n    background-color: rgba(230, 63, 43, 0.86);\r\n    color: #fff;\r\n}\r\n\r\n#oo1,#tt3,#ff5 {\r\n    background-color: rgba(251, 188, 45, 0.86);\r\n    color: #fff;\r\n}\r\n\r\n#tt2,#ff4 {\r\n    background-color: rgba(80, 190, 232, 0.86);\r\n    color: #fff;\r\n}\r\n\r\nli {\r\n    text-decoration: none;\r\n}\r\n\r\nli:hover {\r\n    opacity: 0.9;\r\n}\r\n\r\na {\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n\r\n.back {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    height: 30px;\r\n}\r\n\r\n.back img {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 2px solid #555;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n.objective-col {\r\n    width: 250px;\r\n}\r\n\r\n.skill {\r\n    background: #eb3720;\r\n    display: inline-block;\r\n    padding: 5px 7px;\r\n    border-radius: 15px;\r\n    color: white;\r\n    margin: 5px 5px;\r\n}\r\n\r\nspan:hover {\r\n    opacity: 0.9;\r\n}\r\n\r\nfooter p {\r\n    color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mibrahim/mibrahim.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <section id=\"hero\">\n    <div id=\"inner\">\n      <div id=\"item\" style=\"background:url(../assets/muhammad-ibrahim.jpg); background-repeat:no-repeat; background-position:center 0%; background-size:cover;\">\n        <div class=\"row\">\n          <div class=\"container\">\n            <a id=\"logo\" routerLink=\"/\">&ensp;Go back</a>\n            <h1 id=\"dec\">Hi<span style=\"display:flex;\" *ngIf=\"user.length > 0\">{{' ' + user[0].name }}</span>,<br>This is <strong style=\"display:flex;\">Muhammad Ibrahim</strong></h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n\n<div style=\"height:200px;width:100%;background:rgb(31, 179, 107);\"></div>\n\n<div *ngIf=\"buttons\" [@showBut] style=\"padding:120px 0;\">\n  <button [ngStyle]=\"smallButton\" (click)=\"activSec('objective')\">My Objective</button>\n  <button [ngStyle]=\"smallButton\" (click)=\"activSec('techie')\">Tech</button>\n  <button [ngStyle]=\"smallButton\" (click)=\"activSec('skills')\">Relevant Skills</button>\n  <button [ngStyle]=\"smallButton\" (click)=\"activSec('human')\">Me Outside Work</button>\n</div>\n\n<div *ngIf=\"objective\" class=\"row\" [@showSec] [style.padding]=\"objpad\">\n  <div class=\"back\"><img src=\"../assets/back.png\" alt=\"go back\" (click)=\"back('objective')\"></div>\n  <div class=\"objective-col\" [class]=\"columns\" [ngStyle]=\"learn\" style=\"text-align:center;\">\n    <p>Sharping my knowledge, learning new skills and getting a good sphere</p>\n    <img src=\"../assets/learn.png\" style=\"width:250px;height:250px;\">\n  </div>\n  <div class=\"objective-col\" [class]=\"columns\" [ngStyle]=\"build\" style=\"text-align:center;\">\n    <p>Collaborating with a successful team in building highly useful products</p>\n    <img src=\"../assets/build.png\" style=\"width:250px;height:250px;\">\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"techie\" [@showSec]>\n  <div class=\"back\" style=\"position:absolute;padding:11.5vw;\"><img src=\"../assets/back.png\" alt=\"go back\" (click)=\"back('techie')\"></div>\n  <ul id=\"techie\">\n    <li id=\"o1\" class=\"left\">Backend:&ensp;PHP - Laravel Framework</li><br>\n    <li id=\"t2\" class=\"right\" >HTML & CSS:&ensp;Accessability and Responsive design</li>\n    <li id=\"t3\" class=\"left\">\n      Full Stack:&ensp;Laravel with Bootstrap, jQuery and AJAX<br>\n      see <em><a target=\"_blank\" href=\"http://geturorders.online/7websites\">7websites</a></em>\n    </li>\n    <li id=\"f4\" class=\"right\" >\n      Frontend:&ensp;Bootstrap and jQuery<br>\n      see <em><a target=\"_blank\" href=\"http://geturorders.online\">get</a></em>\n    </li>\n    <li id=\"f5\" class=\"left\">\n      Frontend:&ensp;Angular 4 and SAAS<br>\n      see <em><a target=\"_blank\" href=\"https://ma3arij-app.firebaseapp.com/\">Ma3arij <strong>on web</strong> or download its <a target=\"_blank\" href=\"https://drive.google.com/file/d/1hZEVoaeKsyc9RhYnhiiHsyQi3akUBJmI/view?usp=sharing\">apk</a></em>\n    </li>\n    <li id=\"s6\" class=\"right\">Cross Platform:&ensp;Ionic 3 and Cordova<br>\n      see <em><a routerLink=\"/\">This site</a></em>\n    </li>\n    <li id=\"s7\" class=\"left\">Currently, Learning:&ensp;Node.js and React</li>\n  </ul>\n</div>\n\n<div *ngIf=\"skills\" class=\"row\" [@showSec] [style.padding]=\"skillspad\">\n  <div class=\"back\"><img src=\"../assets/back.png\" alt=\"go back\" (click)=\"back('skills')\"></div>\n  <div style=\"text-align:center;\">\n    <p style=\"padding-left:10vw;\">\n      <span class=\"skill\">Self learning</span><span class=\"skill\">flexibility</span><span class=\"skill\">continuos development</span><br><br>\n      <span class=\"skill\">Numbers orientation</span><span class=\"skill\">good knowledge about business topics</span><span class=\"skill\">entrepreneurial mindset</span><br><br>\n      <span class=\"skill\">Collective building</span><span class=\"skill\">team working but in self and small tasks which draw the big pic</span>\n    </p>\n  </div>\n  <div style=\"text-align:center;\">\n    <img src=\"../assets/skills.png\" style=\"width:94vw;height:30vw;border:0;border-radius:0;\">\n  </div>\n</div>\n\n<div *ngIf=\"human\" class=\"row\" [@showSec]>\n  <div class=\"back\" style=\"position:absolute;padding:11.5vw;\"><img src=\"../assets/back.png\" alt=\"go back\" (click)=\"back('human')\"></div>\n  <ul id=\"human\">\n    <li id=\"oo1\" class=\"left\">Love Animals</li>\n    <li id=\"tt2\" class=\"right\">Interested in Philosophy and Intellect</li>\n    <li id=\"tt3\" class=\"left\">Volunteer</li>\n    <li id=\"ff4\" class=\"right\">Minimalist in using things</li>\n    <li id=\"ff5\" class=\"left\">Love People</li>\n  </ul>\n</div>\n<footer style=\"height:200px; background:#333; padding:60px 30px;font-size:13px;\">\n  <p>email: engineermohamed.ibrahim.mi@gmail.com</p>\n  <p>mobile: +20 102 507 5652</p>\n  <p>project on&ensp;<a target=\"_blank\" href=\"https://github.com/muhammad-ibrahim/my-resume\"><img src=\"../assets/github.png\" style=\"width:25px;height:25px;\"></a></p>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/mibrahim/mibrahim.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MibrahimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MibrahimComponent = (function () {
    function MibrahimComponent(data) {
        this.data = data;
        this.buttons = true;
        this.human = false;
        this.skills = false;
        this.objective = false;
        this.techie = false;
    }
    MibrahimComponent.prototype.onResize = function (event) {
        this.width = event.target.innerWidth;
        if (this.width < 770 && this.width > 671) {
            this.columns = 'columns';
        }
        else if (this.width < 671 && this.width > 455) {
            this.columns = '';
        }
        else if (this.width <= 455) {
            this.columns = '';
        }
        else {
            this.columns = 'columns';
        }
        // this.learn = {'padding-left':'11.5vw'}; this.build = {'padding-left':'11.5vw'};
        //size style changings
        if (this.width < 800 && this.width > 580) {
            this.small = true;
            this.smallButton = { 'padding': '14px 10px 10px', 'font-size': '19px', 'width': '30vw' };
            this.objpad = '11.5vw';
            this.skillspad = '11.5vw';
            //this.modalRight = (this.width - 280)/2 + 'px';
        }
        else if (this.width <= 580 && this.width > 350) {
            this.small = true;
            this.smallButton = { 'padding': '14px 14px 10px', 'font-size': '14px', 'width': '30vw' };
            this.objpad = '11.5vw';
            this.skillspad = '11.5vw';
        }
        else if (this.width <= 350) {
            this.small = true;
            this.smallButton = { 'padding': '14px 14px 10px', 'font-size': '14px', 'width': '30vw' };
            this.objpad = '4.5vw';
            this.skillspad = '11.5vw 0';
        }
        else {
            this.small = true;
            this.smallButton = { 'padding': '20px 40px', 'font-size': '24px', 'width': '34vw' };
            this.objpad = '11.5vw';
            this.skillspad = '11.5vw';
            //if(this.showAcc) this.newShowAcc(false); this.small = false; this.smallWallStyle = {'margin-right':'0', 'margin-left':'60px', 'padding':'60px'};
            //this.modalRight = '25%';
        }
        //
    };
    ;
    MibrahimComponent.prototype.activSec = function (section) {
        var _this = this;
        //appearance
        this.buttons = false;
        setTimeout(function () {
            switch (section) {
                case 'objective':
                    _this.objective = true;
                    break;
                case 'techie':
                    _this.techie = true;
                    break;
                case 'skills':
                    _this.skills = true;
                    break;
                case 'human':
                    _this.human = true;
                    break;
            }
        }, 900);
    };
    MibrahimComponent.prototype.back = function (section) {
        var _this = this;
        switch (section) {
            case 'objective':
                this.objective = false;
                break;
            case 'techie':
                this.techie = false;
                break;
            case 'skills':
                this.skills = false;
                break;
            case 'human':
                this.human = false;
                break;
        }
        ;
        setTimeout(function () {
            _this.buttons = true;
        }, 900);
    };
    MibrahimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentUser.subscribe(function (user) { return _this.user = user; });
        this.width = window.innerWidth;
        if (this.width < 770 && this.width > 671) {
            this.columns = 'columns';
        }
        else if (this.width < 671 && this.width > 455) {
            this.columns = '';
        }
        else if (this.width <= 455) {
            this.columns = '';
        }
        else {
            this.columns = 'columns';
        }
        //size style changings
        if (this.width < 800 && this.width > 580) {
            this.small = true;
            this.smallButton = { 'padding': '14px 10px 10px', 'font-size': '19px', 'width': '30vw' };
            this.objpad = '11.5vw';
            this.skillspad = '11.5vw';
            //this.modalRight = (this.width - 280)/2 + 'px';
        }
        else if (this.width <= 580 && this.width > 350) {
            this.small = true;
            this.smallButton = { 'padding': '14px 14px 10px', 'font-size': '14px', 'width': '30vw' };
            this.objpad = '11.5vw';
            this.skillspad = '11.5vw';
        }
        else if (this.width <= 350) {
            this.small = true;
            this.smallButton = { 'padding': '14px 14px 10px', 'font-size': '14px', 'width': '30vw' };
            this.objpad = '4.5vw';
            this.skillspad = '11.5vw 0';
        }
        else {
            this.small = true;
            this.smallButton = { 'padding': '20px 40px', 'font-size': '24px', 'width': '34vw' };
            this.objpad = '11.5vw';
            this.skillspad = '11.5vw';
            //if(this.showAcc) this.newShowAcc(false); this.small = false; this.smallWallStyle = {'margin-right':'0', 'margin-left':'60px', 'padding':'60px'};
            //this.modalRight = '25%';
        }
        //
    };
    return MibrahimComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MibrahimComponent.prototype, "onResize", null);
MibrahimComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mibrahim',
        template: __webpack_require__("../../../../../src/app/mibrahim/mibrahim.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mibrahim/mibrahim.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('showSec', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-300px)', opacity: '1' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1000ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1000ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-300px)', opacity: '0' }))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('showBut', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-300px)', opacity: '1' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1000ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1000ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-300px)', opacity: '0' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object])
], MibrahimComponent);

var _a;
//# sourceMappingURL=mibrahim.component.js.map

/***/ }),

/***/ "../../../../../src/app/reply-form/reply-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reply-form/reply-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- {{user[0].name}} -->\n<div class=\"con-info\">\n  <img [src]=\"user[0].image\" alt=\"Contributor image\" style=\"width:40px;height:40px;\">\n  <p style=\"margin-top:0;padding:0 10px;\"><strong>{{ user[0].name }}</strong><br>\n  <span>{{ now | date:'medium' }}</span></p>\n</div>\n<div class=\"con-body\">\n  <p style=\"padding:0 0 10px 50px;\">{{ reply }}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reply-form/reply-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplyFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReplyFormComponent = (function () {
    function ReplyFormComponent(data) {
        this.data = data;
        this.now = new Date();
    }
    ReplyFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentUser.subscribe(function (user) { return _this.user = user; });
    };
    return ReplyFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ReplyFormComponent.prototype, "reply", void 0);
ReplyFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'reply-form',
        template: __webpack_require__("../../../../../src/app/reply-form/reply-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reply-form/reply-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ReplyFormComponent);

var _a;
//# sourceMappingURL=reply-form.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map