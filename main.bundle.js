webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <a routerLink=\"index\" routerLinkActive=\"active\" mat-button>\n      <mat-icon class=\"icon\">home</mat-icon>\n    </a>\n    <h1>\n      Welcome to {{title}}!!\n    </h1>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"create\" routerLinkActive=\"active\" mat-button>\n      <mat-icon class=\"icon\">add</mat-icon>\n      <span>Coin</span>\n    </a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav mode=\"side\" opened>\n    Sidenav content\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'the NG world';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export MaterialModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_index_index_component__ = __webpack_require__("./src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_create_create_component__ = __webpack_require__("./src/app/components/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routerConfig__ = __webpack_require__("./src/app/routerConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__coin_service__ = __webpack_require__("./src/app/coin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // Animation Support






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_edit_edit_component__["a" /* EditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__routerConfig__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__coin_service__["a" /* CoinService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/coin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinService = /** @class */ (function () {
    function CoinService(http) {
        this.http = http;
    }
    CoinService.prototype.addCoin = function (name, price) {
        var uri = 'http://localhost:4000/coins/add';
        var obj = {
            name: name,
            price: price
        };
        this
            .http
            .post(uri, obj)
            .subscribe(function (res) {
            return console.log('Done');
        });
    };
    CoinService.prototype.getCoins = function () {
        var uri = 'http://localhost:4000/coins';
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    CoinService.prototype.editCoin = function (id) {
        var uri = 'http://localhost:4000/coins/edit/' + id;
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    CoinService.prototype.updateCoin = function (name, price, id) {
        var uri = 'http://localhost:4000/coins/update/' + id;
        var obj = {
            name: name,
            price: price
        };
        this
            .http
            .post(uri, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    CoinService.prototype.deleteCoin = function (id) {
        var uri = 'http://localhost:4000/coins/delete/' + id;
        return this
            .http
            .get(uri)
            .map(function (res) {
            return res;
        });
    };
    CoinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CoinService);
    return CoinService;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6\">\n      <form [formGroup]=\"coinForm\" novalidate>\n        <mat-card class=\"form-card\">\n          <mat-card-header>\n            <div mat-card-avatar>\n              <mat-icon class=\"icon\">monetization_on</mat-icon>\n            </div>\n            <mat-card-title>Coins</mat-card-title>\n            <mat-card-subtitle>Create</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div class=\"form-container\">\n              <mat-form-field>\n                <input matInput placeholder=\"Coin Name\" formControlName=\"coinName\">\n                <mat-error *ngIf=\"coinName.invalid\">Coin Name is required</mat-error>\n              </mat-form-field>\n              <mat-form-field>\n                <input type=\"number\" min=\"1\" matInput placeholder=\"Coin Price\" formControlName=\"coinVal\">\n                <mat-error *ngIf=\"coinVal.invalid\">Coin value Must be a number and greater than 0</mat-error>\n              </mat-form-field>\n            </div>\n          </mat-card-content>\n          <mat-card-actions>\n            <div class=\"spacer\"></div>\n            <button mat-button color=\"accent\" (click)=\"addCoin(coinForm.value.coinName, coinForm.value.coinVal)\" [disabled]=\"coinForm.pristine || coinForm.invalid\">Add</button>\n          </mat-card-actions>\n        </mat-card>\n      </form>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/create/create.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-card > .mat-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.form-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 30px 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.form-container > * {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FormControlValidation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coin_service__ = __webpack_require__("./src/app/coin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Error when invalid control is dirty, touched, or submitted. */
var FormControlValidation = /** @class */ (function () {
    function FormControlValidation() {
    }
    FormControlValidation.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return FormControlValidation;
}());

var CreateComponent = /** @class */ (function () {
    function CreateComponent(coinservice, fb) {
        this.coinservice = coinservice;
        this.fb = fb;
        this.coinName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required
        ]);
        this.coinVal = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(1)
        ]);
        this.createForm();
    }
    CreateComponent.prototype.resetForm = function (formGroup) {
        var control = null;
        formGroup.reset();
        formGroup.markAsUntouched();
        Object.keys(formGroup.controls).forEach(function (name) {
            control = formGroup.controls[name];
            control.setErrors(null);
        });
    };
    CreateComponent.prototype.createForm = function () {
        this.coinForm = this.fb.group({
            coinName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required
            ]),
            coinVal: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(1)
            ])
        });
    };
    CreateComponent.prototype.addCoin = function (name, price) {
        this.coinservice.addCoin(name, price);
        this.coinForm.reset();
        this.resetForm(this.coinForm);
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create',
            template: __webpack_require__("./src/app/components/create/create.component.html"),
            styles: [__webpack_require__("./src/app/components/create/create.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__coin_service__["a" /* CoinService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6\">\n      <form [formGroup]=\"coinForm\" novalidate>\n        <mat-card class=\"form-card\">\n          <mat-card-header>\n            <div mat-card-avatar>\n              <mat-icon class=\"icon\">monetization_on</mat-icon>\n            </div>\n            <mat-card-title>Coins</mat-card-title>\n            <mat-card-subtitle>Create</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div class=\"form-container\">\n              <mat-form-field>\n                <input matInput placeholder=\"Coin Name\" formControlName=\"coinName\" [(ngModel)] = \"coin.name\">\n                <mat-error *ngIf=\"coinName.invalid\">Coin Name is required</mat-error>\n              </mat-form-field>\n              <mat-form-field>\n                <input type=\"number\" min=\"1\" matInput placeholder=\"Coin Price\" formControlName=\"coinVal\" [(ngModel)] = \"coin.price\">\n                <mat-error *ngIf=\"coinVal.invalid\">Coin value Must be a number and greater than 0</mat-error>\n              </mat-form-field>\n            </div>\n          </mat-card-content>\n          <mat-card-actions>\n            <div class=\"spacer\"></div>\n            <button mat-button color=\"accent\" (click)=\"updateCoin(coinForm.value.coinName, coinForm.value.coinVal)\" [disabled]=\"coinForm.pristine || coinForm.invalid\">Add</button>\n          </mat-card-actions>\n        </mat-card>\n      </form>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-card > .mat-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.form-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 30px 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.form-container > * {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FormControlValidation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coin_service__ = __webpack_require__("./src/app/coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/** Error when invalid control is dirty, touched, or submitted. */
var FormControlValidation = /** @class */ (function () {
    function FormControlValidation() {
    }
    FormControlValidation.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return FormControlValidation;
}());

var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, service, fb) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.title = 'Edit Coin';
        this.coinName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required
        ]);
        this.coinVal = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(1)
        ]);
        this.createForm();
    }
    EditComponent.prototype.resetForm = function (formGroup) {
        var control = null;
        formGroup.reset();
        formGroup.markAsUntouched();
        Object.keys(formGroup.controls).forEach(function (name) {
            control = formGroup.controls[name];
            control.setErrors(null);
        });
    };
    EditComponent.prototype.createForm = function () {
        this.coinForm = this.fb.group({
            coinName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required
            ]),
            coinVal: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].min(1)
            ])
        });
    };
    EditComponent.prototype.updateCoin = function (name, price) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.updateCoin(name, price, params['id']);
            _this.router.navigate(['index']);
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.coin = _this.service.editCoin(params['id']).subscribe(function (res) {
                _this.coin = res;
            });
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/components/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__coin_service__["a" /* CoinService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\n  <div class=\"col-md-6\">\n    <mat-table #table [dataSource]=\"dataSource\">\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      </ng-container>\n\n      <!-- Price Column -->\n      <ng-container matColumnDef=\"price\">\n        <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.price}} </mat-cell>\n      </ng-container>\n\n      <!-- Action Column -->\n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell *matHeaderCellDef class=\"w-120\"> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"w-120 t-r\">\n            <a [routerLink]=\"['/edit', element._id]\" mat-icon-button color=\"primary\">\n              <mat-icon aria-label=\"Edit Coin\">edit</mat-icon>\n            </a>\n            <a [routerLink]=\"\" (click)=\"deleteCoin(element._id)\" mat-icon-button color=\"warn\">\n              <mat-icon aria-label=\"Delete Coin\">delete</mat-icon>\n            </a>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/index/index.component.scss":
/***/ (function(module, exports) {

module.exports = ".w-120 {\n  max-width: 120px; }\n"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coin_service__ = __webpack_require__("./src/app/coin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, service, snackBar) {
        this.http = http;
        this.service = service;
        this.snackBar = snackBar;
        this.displayedColumns = ['name', 'price', 'action'];
        this.dataSource = this.coins;
    }
    IndexComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    IndexComponent.prototype.getCoins = function () {
        var _this = this;
        this.service.getCoins().subscribe(function (res) {
            _this.coins = res;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatTableDataSource */](_this.coins);
        });
    };
    IndexComponent.prototype.deleteCoin = function (id) {
        var _this = this;
        this.service.deleteCoin(id).subscribe(function (res) {
            _this.getCoins();
            _this.openSnackBar('Successfully Deleted', 'ok');
        });
    };
    IndexComponent.prototype.ngOnInit = function () {
        this.getCoins();
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/components/index/index.component.html"),
            styles: [__webpack_require__("./src/app/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__coin_service__["a" /* CoinService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatSnackBar */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/routerConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_create_create_component__ = __webpack_require__("./src/app/components/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_edit_edit_component__ = __webpack_require__("./src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_component__ = __webpack_require__("./src/app/components/index/index.component.ts");



var appRoutes = [
    { path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_0__components_create_create_component__["a" /* CreateComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__components_edit_edit_component__["a" /* EditComponent */]
    },
    { path: 'index',
        component: __WEBPACK_IMPORTED_MODULE_2__components_index_index_component__["a" /* IndexComponent */]
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map