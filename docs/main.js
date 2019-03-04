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



var routes = [];
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _restaurant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurant.component */ "./src/app/restaurant.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _restaurant_component__WEBPACK_IMPORTED_MODULE_5__["RestaurantComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_restaurant_component__WEBPACK_IMPORTED_MODULE_5__["RestaurantComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/foodmap.ts":
/*!****************************!*\
  !*** ./src/app/foodmap.ts ***!
  \****************************/
/*! exports provided: restaurants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restaurants", function() { return restaurants; });
var map;
var food1 = {
    "name": "Pizza",
    "basePrice": 9.99,
    "imageSrc": "./assets/img/c700x420.jpg",
    // "imageSrc": "https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg",
    "tags": [],
    "customize": [
        {
            name: "Size",
            options: [
                { name: "Small", price: -1.20 },
                { name: "Medium", price: 0.00 },
                { name: "Large", price: +1.20 },
                { name: "Super", price: +3.00 },
            ],
            required: true,
        }, {
            name: "Cheese",
            options: [
                { name: "None", price: 0.00 },
                { name: "Medium", price: +0.50 },
                { name: "Large", price: +1.00 },
            ],
            required: true,
        }, {
            name: "Sauce",
            options: [
                { name: "Tomato", price: 0.00 },
                { name: "Butter", price: 0.00 },
                { name: "Garlic", price: 0.00 },
            ],
            required: true,
        }, {
            name: "Toppings",
            options: [
                { name: "Pepperoni", price: 1.00 },
                { name: "Bacon", price: +1.00 },
                { name: "Pineapple", price: +1.00 },
                { name: "Bacon Crumble", price: +1.00 },
                { name: "Shawarma", price: +1.00 },
                { name: "Chili", price: +1.00 },
                { name: "Lettuce", price: +1.00 },
                { name: "Anchovies", price: +1.00 },
                { name: "Sausage", price: +1.00 },
            ],
            required: false,
        }
    ]
};
var food12 = {
    "name": "Vegan Cheese Pizza",
    "basePrice": 3.99,
    "imageSrc": "./assets/img/veggie-pizza.jpg",
    // "imageSrc": "./assets/img/veganpizza.webp",
    // "imageSrc": "https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg",
    "tags": ["vegan"]
};
var food2 = {
    "name": "Chicken Panzerotti",
    "basePrice": 4.99,
    "imageSrc": "./assets/img/ckn-e48-chicken-panzerotti-006.jpg",
    // "imageSrc": "http://criderfoods.com/wp-content/uploads/2015/05/ckn-e48-chicken-panzerotti-006.jpg",
    "tags": ["vegan"]
};
var food3 = {
    "name": "Beef Panzerotti",
    "basePrice": 5.99,
    "imageSrc": "./assets/img/chilean_beef_empanadas_alt-web.jpg",
    // "imageSrc": "http://criderfoods.com/wp-content/uploads/2015/05/ckn-e48-chicken-panzerotti-006.jpg",
    "tags": ["halal"]
};
var food4 = {
    "name": "Pasta",
    "basePrice": 4.99,
    "imageSrc": "./assets/img/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
    // "imageSrc": "https://www.thechunkychef.com/wp-content/uploads/2017/10/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
    "tags": ["halal"]
};
var food5 = {
    "name": "Vege Pasta",
    "basePrice": 4.99,
    "imageSrc": "./assets/img/veggie-pasta-04.jpg",
    // "imageSrc": "./assets/img/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
    // "imageSrc": "https://www.thechunkychef.com/wp-content/uploads/2017/10/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
    "tags": ["vegan"]
};
var food6 = {
    "name": "Fries",
    "basePrice": 1.99,
    "imageSrc": "./assets/img/fries_620x330_51517901541.jpg",
    // "imageSrc": "https://recipes.timesofindia.com/photo/54659021.cms",
    "tags": ["vegan"],
    "customize": [
        {
            name: "Size",
            options: [
                { name: "Small", price: -0.20 },
                { name: "Medium", price: 0.00 },
                { name: "Large", price: +0.20 },
                { name: "Super", price: +1.00 },
            ],
            required: true,
        }, {
            name: "Cheese",
            options: [
                { name: "None", price: 0.00 },
                { name: "Medium", price: +0.50 },
                { name: "Large", price: +1.00 },
            ],
            required: true,
        }, {
            name: "Toppings",
            options: [
                { name: "Ketchup", price: 0.00 },
                { name: "Bacon", price: +0.50 },
                { name: "Pickles", price: +1.00 },
            ],
            required: false,
        }
    ]
};
var food7 = {
    "name": "Soda",
    "basePrice": 1.49,
    "imageSrc": "./assets/img/soda.jpg",
    // "imageSrc": "https://recipes.timesofindia.com/photo/54659021.cms",
    "tags": ["vegan"],
    "customize": [
        {
            name: "Size",
            options: [
                { name: "Medium", price: 0.00 },
                { name: "Small", price: -0.20 },
                { name: "Large", price: +0.20 },
                { name: "Super", price: +2.00 },
            ],
            required: true,
        }, {
            name: "Flavour",
            options: [
                { name: "Pepsi", price: 0.00 },
                { name: "Coke", price: 0.00 },
                { name: "Fanta", price: 0.00 },
                { name: "Dr.Pepper", price: 0.00 },
            ],
            required: true,
        }, {
            name: "Ice",
            options: [
                { name: "Normal", price: 0.00 },
                { name: "None", price: 0.00 },
                { name: "Extra", price: +0.00 },
            ],
            required: true,
        }
    ]
};
var menu1 = [
    {
        title: "Pizzas",
        items: [food1, food12]
    }, {
        title: "Dishes",
        items: [food2, food3, food4, food5]
    }, {
        title: "Sides",
        items: [food6, food7]
    }
];
var r2food1 = {
    "name": "Make Your Own",
    "basePrice": 5.49,
    "imageSrc": "./assets/img/boba.png",
    "tags": ["vegan"],
    "customize": [
        {
            name: "Size",
            options: [
                { name: "Medium", price: 0.00 },
                { name: "Small", price: -0.20 },
                { name: "Large", price: +0.20 },
                { name: "Super", price: +2.00 },
            ],
            required: true,
        }, {
            name: "Type",
            options: [
                { name: "Honey Tree", price: 0.00 },
                { name: "Milk Chocolate", price: 0.00 },
                { name: "Blue Mountain", price: 0.00 },
                { name: "Red Bean", price: 0.00 },
            ],
            required: true,
        }, {
            name: "Sugar",
            options: [
                { name: "Normal", price: 0.00 },
                { name: "None", price: 0.00 },
                { name: "Extra", price: +0.00 },
            ],
            required: true,
        }, {
            name: "Ice",
            options: [
                { name: "Normal", price: 0.00 },
                { name: "None", price: 0.00 },
                { name: "Extra", price: +0.00 },
            ],
            required: true,
        }
    ]
};
var r2food2 = {
    "name": "Daily Special",
    "basePrice": 4.49,
    "imageSrc": "./assets/img/boba.png",
    "tags": ["vegan"],
    "customize": [
        {
            name: "Size",
            options: [
                { name: "Medium", price: 0.00 },
                { name: "Small", price: -0.20 },
                { name: "Large", price: +0.20 },
                { name: "Super", price: +2.00 },
            ],
            required: true,
        }, {
            name: "Sugar",
            options: [
                { name: "Normal", price: 0.00 },
                { name: "None", price: 0.00 },
                { name: "Extra", price: +0.00 },
            ],
            required: true,
        }, {
            name: "Ice",
            options: [
                { name: "Normal", price: 0.00 },
                { name: "None", price: 0.00 },
                { name: "Extra", price: +0.00 },
            ],
            required: true,
        }
    ]
};
var r2food3 = {
    "name": "Cotton Candy",
    "basePrice": 1.49,
    "imageSrc": "./assets/img/cotton.png",
    "tags": ["vegan", "vegetarian"],
};
var r2food4 = {
    "name": "pocky",
    "basePrice": 1.49,
    "imageSrc": "./assets/img/pocky.jpg",
    "tags": ["vegan", "vegetarian"],
};
var r2food5 = {
    "name": "Choco Pie",
    "basePrice": 3.49,
    "imageSrc": "./assets/img/choco.jpg",
    "tags": ["vegetarian"],
    "customize": [
        {
            name: "Slices",
            options: [
                { name: "1 slice", price: 0.00 },
                { name: "2 slices", price: +2 },
                { name: "3 slices", price: +3 },
                { name: "Whole pie", price: +9.00 },
            ],
            required: true,
        }
    ]
};
var menu2 = [
    {
        title: "Bubble Tea",
        items: [r2food1, r2food2]
    }, {
        title: "Cotton Candy",
        items: [r2food3]
    }, {
        title: "Sweets",
        items: [r2food4, r2food5]
    }
];
var restaurants = [
    {
        name: "Eleven Eighty",
        latLng: { lat: 43.2630, lng: -79.9192 },
        deliveryTime: 15,
        deliveryFee: 4.99,
        rating: 3,
        money: "💲💲",
        showTags: "🍔🍺",
        tags: [],
        menu: menu1
    },
    {
        name: "Puma's Candy",
        latLng: { lat: 43.2590, lng: -79.9192 },
        deliveryTime: 14,
        deliveryFee: 3.99,
        rating: 4.6,
        money: "💲💲",
        showTags: "🥛🍬",
        tags: ["vegan", "vegetarian"],
        menu: menu2
    },
    {
        name: "Puma's Candy Deluxe",
        latLng: { lat: 43.2630, lng: -79.9210 },
        deliveryTime: 10,
        deliveryFee: 1.99,
        rating: 4.6,
        money: "💲💲💲💲",
        showTags: "🥛🍬",
        tags: [],
        menu: menu2
    },
    {
        name: "Pizza's Candy",
        latLng: { lat: 43.2630, lng: -79.9152 },
        deliveryTime: 5,
        deliveryFee: 8.99,
        rating: 4.6,
        money: "💲💲💲",
        showTags: "🥛🍬",
        tags: ["halal", "vegetarian"],
        menu: menu1
    }
];
console.log(JSON.stringify(restaurants));


/***/ }),

/***/ "./src/app/restaurant.component.css":
/*!******************************************!*\
  !*** ./src/app/restaurant.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\";\r\n\r\n#map {\r\n    height: 100vh;\r\n    width: 100%;  /* The width is the width of the web page */\r\n   }\r\n\r\nhtml {\r\n    height: 100vh;\r\n  }\r\n\r\nbody {\r\n    height: 100vh;\r\n}\r\n\r\n#restaurantpicker {\r\n  height: 100vh;\r\n  \r\n}\r\n\r\n#cart {\r\n  position: fixed;\r\n  bottom: 10px;\r\n  right: 20px;\r\n  z-index: 1001;\r\n  cursor: pointer;\r\n}\r\n\r\n.menuImage {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width: 100%;\r\n  height: 140px;\r\n}\r\n\r\n.noclick{\r\n  pointer-events: none;\r\n}\r\n\r\n.restaurantcard{\r\n  cursor: pointer;\r\n}\r\n\r\n.itemcard{\r\n  cursor: pointer;\r\n}\r\n\r\n.inline-field input,\r\n.inline-field label {\r\n  display: inline-block;\r\n  margin-bottom: 0; /* I added this after I posted my reply */\r\n  vertical-align: middle; /* Fixes any weird issues in Firefox and IE */\r\n}\r\n\r\n.inline-field input[type='checkbox'],\r\n.inline-field input[type='radio']{\r\n  width:30px;\r\n  height:30px;\r\n}\r\n\r\n#checkoutBtn {\r\n  position: absolute;\r\n  bottom: 2.1vh;\r\n  width: 93%;\r\n  justify-content: center;\r\n}\r\n\r\nhr {\r\n  color: white;\r\n  background-color: white;\r\n  border-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1GQUFtRjs7QUFFbkY7SUFDSSxjQUFjO0lBQ2QsWUFBWSxFQUFFLDRDQUE0QztJQUMxRDs7QUFDRDtJQUNDLGNBQWM7R0FDZjs7QUFDRDtJQUNFLGNBQWM7Q0FDakI7O0FBRUQ7RUFDRSxjQUFjOztDQUVmOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHFCQUFrQjtLQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDs7RUFFRSxzQkFBc0I7RUFDdEIsaUJBQWlCLENBQUMsMENBQTBDO0VBQzVELHVCQUF1QixDQUFDLDhDQUE4QztDQUN2RTs7QUFDRDs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtDQUNiOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4xLjMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG4jbWFwIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTsgIC8qIFRoZSB3aWR0aCBpcyB0aGUgd2lkdGggb2YgdGhlIHdlYiBwYWdlICovXHJcbiAgIH1cclxuICAgaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNyZXN0YXVyYW50cGlja2VyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIFxyXG59XHJcbiNjYXJ0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHotaW5kZXg6IDEwMDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVudUltYWdlIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG59XHJcblxyXG4ubm9jbGlja3tcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnJlc3RhdXJhbnRjYXJke1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLml0ZW1jYXJke1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5saW5lLWZpZWxkIGlucHV0LFxyXG4uaW5saW5lLWZpZWxkIGxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDsgLyogSSBhZGRlZCB0aGlzIGFmdGVyIEkgcG9zdGVkIG15IHJlcGx5ICovXHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogRml4ZXMgYW55IHdlaXJkIGlzc3VlcyBpbiBGaXJlZm94IGFuZCBJRSAqL1xyXG59XHJcbi5pbmxpbmUtZmllbGQgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSxcclxuLmlubGluZS1maWVsZCBpbnB1dFt0eXBlPSdyYWRpbydde1xyXG4gIHdpZHRoOjMwcHg7XHJcbiAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuXHJcbiNjaGVja291dEJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMi4xdmg7XHJcbiAgd2lkdGg6IDkzJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaHIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/restaurant.component.html":
/*!*******************************************!*\
  !*** ./src/app/restaurant.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!ordering\" style=\"position: fixed; left:0; bottom: 0; z-index:1000; margin-bottom: 10vh\" class=\"container-fluid row\">\r\n\r\n  <div class=\"col-4\"></div>\r\n  <div class=\"col-4\" style=\"text-align: center\">\r\n    <p style=\"color:white\"> 1280 Main Street West </p>\r\n    <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"ordering=true\">Begin Ordering</button>\r\n    <p style=\"color:white\"> Average wait time: 45 minutes </p>\r\n  </div>\r\n  <div class=\"col-4\"></div>\r\n</div>\r\n<div class=\"row\" style=\"background:#111; height: 100%;\">\r\n<!--<div class=\"row\" style=\"background:#111; height: 100%; overflow-y: scroll\">-->\r\n\r\n\r\n  <div *ngIf=\"ordering && !checkout\" class=\"col-12 row text-white\" style=\"background:#111; height: 15vh\">\r\n\r\n    <div class=\"col-4 text-center\">\r\n      <h3> Sort By </h3>\r\n      <select class=\"form-control\" [(ngModel)]=\"sortBy\" (change)=\"changeSort()\">\r\n        <option *ngFor=\"let sort of sorts\" [value]=\"sort\">{{sort}}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-4 text-white text-center\">\r\n      <h1 class=\"align-middle display-3\"> 4HC3ats™ </h1>\r\n    </div>\r\n\r\n    <div class=\"col-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 text-center p-1\">\r\n          <button [ngClass]=\"{'btn-secondary': tags.indexOf('halal') == -1, 'btn-primary': tags.indexOf('halal') != -1}\" class=\"btn btn-lg btn-block\"\r\n            (click)=\"toggleTag('halal')\">Halal</button>\r\n        </div>\r\n        <div class=\"col-6 text-center p-1\" [ngClass]=\"{active: tags.indexOf('vegan') != -1}\">\r\n          <button [ngClass]=\"{'btn-secondary': tags.indexOf('vegan') == -1, 'btn-primary': tags.indexOf('vegan') != -1}\" class=\"btn btn-lg btn-block\"\r\n            (click)=\"toggleTag('vegan')\">Vegan</button>\r\n        </div>\r\n        <div class=\"col-6 text-center p-1\" [ngClass]=\"{active: tags.indexOf('vegetarian') != -1}\">\r\n          <button [ngClass]=\"{'btn-secondary': tags.indexOf('vegetarian') == -1, 'btn-primary': tags.indexOf('vegetarian') != -1}\"\r\n            class=\"btn btn-lg btn-block\" (click)=\"toggleTag('vegetarian')\">Vegetarian</button>\r\n        </div>\r\n        <div class=\"col-6 text-center p-1\" [ngClass]=\"{active: tags.indexOf('gluten-free') != -1}\">\r\n          <button [ngClass]=\"{'btn-secondary': tags.indexOf('gluten-free') == -1, 'btn-primary': tags.indexOf('gluten-free') != -1}\"\r\n            class=\"btn btn-lg btn-block\" (click)=\"toggleTag('gluten-free')\">Gluten-Free</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"ordering && !checkout\" style=\"background: #111; height: 85vh\" [ngClass]=\"{'d-none': selectedItem, 'col-3':selectedItem == undefined}\">\r\n    <!--<div *ngIf=\"ordering && !checkout\" style=\"background: black; height: 100vh\" [ngClass]=\"{'d-none': selectedItem, 'col-3':selectedItem == undefined}\">-->\r\n    <div class=\"text-center text-white\" *ngIf=\"filteredRestaurants.length == 0\">\r\n      <h3> No Restaurants match criteria. </h3>\r\n    </div>\r\n    <div (click)=\"loadMenu(restaurant)\" *ngFor=\"let restaurant of filteredRestaurants; let i = index\" [attr.data-index]=\"i\" class=\"card restaurantcard text-white bg-primary my-3 p-2\"\r\n      [ngClass]=\"{'bg-dark': selectedRestaurant != restaurant}\">\r\n      <div class=\"row\">\r\n        <div class=\"col-9 text-left\">\r\n          <h4> {{ restaurant.name }} </h4>\r\n        </div>\r\n        <div class=\"col-3 text-right\">\r\n          {{restaurant.showTags}}\r\n        </div>\r\n        <div class=\"col-6 text-left\">\r\n          {{ restaurant.money }}\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n          🚚 {{ restaurant.deliveryTime }} minutes\r\n        </div>\r\n        <div class=\"col-6 text-left\">\r\n          {{ restaurant.rating }} ⭐\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n          ${{ restaurant.deliveryFee }} Fee\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"height: 100%;\"></div>\r\n    <div id=\"checkoutBtn\" #checkoutBtn *ngIf=\"selectedItem == null && cart.length > 0\" class=\"btn btn-success col-11 align-middle text-center p-2\"\r\n      (click)=\"startCheckout(checkoutBtn)\">\r\n      <!--<div  #checkoutBtn *ngIf=\"selectedItem == null && cart.length > 0\" class=\"btn btn-primary card align-middle text-center p-2\" (click)=\"startCheckout(checkoutBtn)\">-->\r\n      <h4 class=\"\">\r\n        <span class=\"badge badge-pill badge-warning\">🛒 {{cart.length}}</span> Checkout </h4>\r\n      <!--<h4> 🛒 {{cart.length}} item(s) in cart, proceed to checkout. </h4>-->\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div *ngIf=\"selectedRestaurant && !checkout\" style=\"background: black; height: 85vh; overflow-y: scroll\" class=\"col-9 text-white\">\r\n\r\n    <h1 class=\"display-3\"> {{selectedRestaurant.name}} </h1>\r\n    <h1 class=\"lead\"> 1280 main street west </h1>\r\n\r\n    <hr>\r\n    <div class=\"text-white\" *ngFor=\"let category of selectedRestaurant.menu; let i = index\" [attr.data-index]=\"i\">\r\n      <h1 class=\"display-4\"> {{category.title}}</h1>\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let item of category.items; let j = index\" [attr.data-index]=\"j\" class=\"col-4\">\r\n          <div class=\"card itemcard m-1 p-1 card text-white bg-primary\" (click)=\"selectItem(item)\" [ngClass]=\"{'bg-danger noclick': !validItem(item), 'bg-dark': validItem(item) && (selectedItem == null || (selectedItem != null && selectedItem.name != item.name))}\">\r\n            <img [src]=\"item.imageSrc\" class=\"menuImage rounded mx-auto d-block\" alt=\"...\">\r\n            <div class=\"row\">\r\n              <div class=\"col-9\">\r\n                <h3> {{item.name}} </h3>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <h3 *ngIf=\"item.customize\">⚙</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <p class=\"lead\"> ${{item.basePrice}} </p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"selectedItem\" style=\"background: black; height: 85vh; overflow-y: scroll\" class=\"col-3 text-white text-center\">\r\n    <h2>{{selectedItem.name}}</h2>\r\n    <h3>Base Price: ${{selectedItem.basePrice}}</h3>\r\n    <div *ngFor=\"let custom of selectedItem.customize; let i = index\" [attr.data-index]=\"i\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 text-left\">\r\n          <h3> {{custom.name}} </h3>\r\n        </div>\r\n\r\n        <div class=\"col-6 text-right\">\r\n          <h3 *ngIf=\"custom.required\"> Required</h3>\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"custom.required\" class=\"form-group\">\r\n        <div *ngFor=\"let option of custom.options; let j = index\" [attr.data-index]=\"j\" class=\"row\">\r\n          <div class=\"col-6 text-left inline-field\">\r\n            <h5>\r\n              <input (change)=\"updateItem()\" type=\"radio\" [name]=\"i + 'op' + j\" [(ngModel)]=\"custom.selected\" [value]=\"option\">\r\n              <label>\r\n                {{option.name}}\r\n              </label>\r\n            </h5>\r\n          </div>\r\n          <div class=\"col-6 text-right\">\r\n            <h3 *ngIf=\"option.price != 0\"> {{getSign(option.price)}}${{abs(option.price).toFixed(2)}} </h3>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!custom.required\" class=\"form-group\">\r\n        <div *ngFor=\"let option of custom.options; let j = index\" [attr.data-index]=\"j\" class=\"row\">\r\n          <div class=\"col-6 text-left inline-field\">\r\n            <h5>\r\n              <input (change)=\"updateItem()\" type=\"checkbox\" [name]=\"i + 'op' + j\" [(ngModel)]=\"option.enabled\">\r\n              <label class=\"checkbox-inline\">\r\n                {{option.name}}\r\n              </label>\r\n            </h5>\r\n          </div>\r\n          <div class=\"col-6 text-right\">\r\n            <h3 *ngIf=\"option.price != 0\"> {{getSign(option.price)}}${{abs(option.price).toFixed(2)}} </h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-left inline-field\">\r\n        <h5>\r\n          <input class=\"form-control\" type=\"text\" style=\"width:100%\" [(ngModel)]=\"selectedItem.notes\">\r\n          <br>\r\n          <label>\r\n            Driver notes.\r\n          </label>\r\n        </h5>\r\n      </div>\r\n\r\n      <div class=\"col-12 text-center p-1\" [ngClass]=\"{active: itemIsValid()}\">\r\n        <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"addSelectedToCart()\">Add to cart (${{selectedItem.finalPrice.toFixed(2)}})</button>\r\n      </div>\r\n      <div class=\"col-12 text-center p-1\">\r\n        <button class=\"btn btn-danger btn-lg btn-block\" (click)=\"selectedItem = null\">Discard Item</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div #gmap id=\"map\" [ngClass]=\"{'col-9': ordering, 'col-12' : !ordering, 'd-none' : selectedRestaurant}\">\r\n\r\n  </div>\r\n  <div id=\"cart\" #checkoutBtn style=\"width: 20%;\" *ngIf=\"checkout && selectedItem == null && cart.length > 0\" class=\"btn btn-success align-middle text-center p-2\"\r\n    (click)=\"startCheckout(checkoutBtn)\">\r\n    <!--<div id=\"cart\" #checkoutBtn *ngIf=\"selectedItem == null && cart.length > 0\" class=\"card align-middle text-center p-2\" (click)=\"startCheckout(checkoutBtn)\">-->\r\n    <h4 class=\"\">\r\n       Checkout Now <br>  <span class=\"badge badge-success text-center\">🛒 {{cart.length}} Item | Subtotal: ${{cartTotal.toFixed(2)}} </span> </h4>\r\n    <!--<h4> 🛒 {{cart.length}} item(s) in cart, proceed to checkout. </h4>-->\r\n  </div>\r\n\r\n  <div *ngIf=\"checkout\" class=\"col-12\">\r\n    <h1 class=\"display-3 text-center text-white\"> Food Cart </h1>\r\n\r\n    <h1 class=\"display-3 text-white\"> {{cart[0].restaurant.name}} </h1>\r\n    <h1 class=\"lead text-white\"> 1280 main street west </h1>\r\n    <hr>\r\n    <h1 class=\"display-5 text-white\"> Delivery time: {{cart[0].restaurant.deliveryTime}} minutes. </h1>\r\n    <h1 class=\"display-5 text-white\"> Delivery Fee: ${{cart[0].restaurant.deliveryFee.toFixed(2)}} </h1>\r\n\r\n    <hr>\r\n  </div>\r\n    \r\n  <div *ngIf=\"checkout\" class=\"col-12\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let item of cart; let j = index\" [attr.data-index]=\"j\" class=\"col-2\">\r\n        <div class=\"card itemcard m-1 p-1 card text-white bg-dark\" (click)=\"editCart(j)\">\r\n          <img [src]=\"item.imageSrc\" class=\"menuImage rounded mx-auto d-block\" alt=\"...\">\r\n          <div class=\"row\">\r\n            <div class=\"col-9\">\r\n              <h3> {{item.name}} </h3>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <h3 *ngIf=\"item.customize\">⚙</h3>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"lead\"> ${{item.finalPrice.toFixed(2)}} </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"checkout\" class=\"col-6\">\r\n    <div class=\"form-group\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5>\r\n            <label class=\"text-white\">\r\n              Payment Method\r\n            </label>\r\n          </h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <select class=\"form-control\">\r\n            <option> Card ending in 1234 </option>\r\n            <option> Card ending in 5678 </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <h5>\r\n            <label class=\"text-white\">\r\n              Phone Number\r\n            </label>\r\n          </h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <input style=\"width: 100%\" class=\"form-control\" type=\"tel\" id=\"phone\" name=\"phone\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" required>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <h5>\r\n            <label class=\"text-white\">\r\n              Special Instructions\r\n            </label>\r\n          </h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <input style=\"width: 100%\" class=\"form-control\" type=\"text\">\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <h5>\r\n            <label class=\"text-white\">\r\n              Address\r\n            </label>\r\n          </h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <input style=\"width: 100%\" class=\"form-control\" type=\"text\" value=\"1280 Main street west\" required>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/restaurant.component.ts":
/*!*****************************************!*\
  !*** ./src/app/restaurant.component.ts ***!
  \*****************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _foodmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foodmap */ "./src/app/foodmap.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent() {
        this.ordering = false;
        this.checkout = false;
        this.tags = [];
        this.sortBy = 'No sort';
        this.sorts = ['No sort', 'Delivery Time', 'Price', 'Rating'];
        this.cart = [];
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        this.restaurants = _foodmap__WEBPACK_IMPORTED_MODULE_2__["restaurants"]; //Global lol
        this.loadRestaurants();
        this.initMap();
    };
    Object.defineProperty(RestaurantComponent.prototype, "name", {
        set: function (name) {
            console.log(name);
        },
        enumerable: true,
        configurable: true
    });
    RestaurantComponent.prototype.loadRestaurants = function () {
        this.filteredRestaurants = [];
        for (var i = 0; i < this.restaurants.length; i++) {
            var valid = true;
            for (var j = 0; j < this.tags.length; j++) {
                if (this.restaurants[i].tags.indexOf(this.tags[j]) == -1) {
                    valid = false;
                }
            }
            if (!valid)
                continue;
            this.filteredRestaurants.push(this.restaurants[i]);
            //Sort  
            if (this.sortBy == 'Delivery Time') {
                this.filteredRestaurants.sort(function (a, b) {
                    return a.deliveryTime - b.deliveryTime;
                });
            }
            else if (this.sortBy == 'Price') {
                this.filteredRestaurants.sort(function (a, b) {
                    return a.money.length - b.money.length;
                });
            }
            else if (this.sortBy == 'Rating') {
                this.filteredRestaurants.sort(function (a, b) {
                    return a.rating - b.rating;
                });
            }
        }
    };
    RestaurantComponent.prototype.validItem = function (item) {
        var valid = true;
        for (var j = 0; j < this.tags.length; j++) {
            if (item.tags.indexOf(this.tags[j]) == -1) {
                valid = false;
            }
        }
        return valid;
    };
    RestaurantComponent.prototype.loadMenu = function (restaurant) {
        if (this.selectedRestaurant == restaurant) {
            this.selectedRestaurant = null;
            return;
        }
        if (this.cart.length > 0)
            return;
        this.selectedRestaurant = restaurant;
    };
    RestaurantComponent.prototype.changeSort = function () {
        console.log(this.sortBy);
        this.loadRestaurants();
    };
    RestaurantComponent.prototype.toggleTag = function (tag) {
        if (this.tags.indexOf(tag) == -1) {
            this.tags.push(tag);
        }
        else {
            this.tags.splice(this.tags.indexOf(tag), 1);
        }
        this.loadRestaurants();
    };
    RestaurantComponent.prototype.initMap = function () {
        // The location of Uluru
        var uluru = { lat: 43.2609, lng: -79.9192 };
        // The map, centered at Uluru
        this.map = new google.maps.Map(this.gmapElement.nativeElement, {
            zoom: 17, center: uluru, disableDefaultUI: true,
            gestureHandling: 'none',
            zoomControl: false,
            styles: [
                {
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#1d2c4d'
                        }
                    ]
                },
                {
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#8ec3b9'
                        }
                    ]
                },
                {
                    'elementType': 'labels.text.stroke',
                    'stylers': [
                        {
                            'color': '#1a3646'
                        }
                    ]
                },
                {
                    'featureType': 'administrative',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'administrative.country',
                    'elementType': 'geometry.stroke',
                    'stylers': [
                        {
                            'color': '#4b6878'
                        }
                    ]
                },
                {
                    'featureType': 'administrative.land_parcel',
                    'elementType': 'labels',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'administrative.land_parcel',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#64779e'
                        }
                    ]
                },
                {
                    'featureType': 'administrative.province',
                    'elementType': 'geometry.stroke',
                    'stylers': [
                        {
                            'color': '#4b6878'
                        }
                    ]
                },
                {
                    'featureType': 'landscape.man_made',
                    'elementType': 'geometry.stroke',
                    'stylers': [
                        {
                            'color': '#334e87'
                        }
                    ]
                },
                {
                    'featureType': 'landscape.natural',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#023e58'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#283d6a'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'labels.text',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#6f9ba5'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'labels.text.stroke',
                    'stylers': [
                        {
                            'color': '#1d2c4d'
                        }
                    ]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'geometry.fill',
                    'stylers': [
                        {
                            'color': '#023e58'
                        }
                    ]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#3C7680'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#304a7d'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'labels.icon',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#98a5be'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'labels.text.stroke',
                    'stylers': [
                        {
                            'color': '#1d2c4d'
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#2c6675'
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'geometry.stroke',
                    'stylers': [
                        {
                            'color': '#255763'
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#b0d5ce'
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'labels.text.stroke',
                    'stylers': [
                        {
                            'color': '#023e58'
                        }
                    ]
                },
                {
                    'featureType': 'road.local',
                    'elementType': 'labels',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#98a5be'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'labels.text.stroke',
                    'stylers': [
                        {
                            'color': '#1d2c4d'
                        }
                    ]
                },
                {
                    'featureType': 'transit.line',
                    'elementType': 'geometry.fill',
                    'stylers': [
                        {
                            'color': '#283d6a'
                        }
                    ]
                },
                {
                    'featureType': 'transit.station',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#3a4762'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#0e1626'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#4e6d70'
                        }
                    ]
                }
            ]
        });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({
            position: uluru, map: this.map,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Creative-Tail-People-women-skintone2.svg'
        });
        this.addRestaurantsToMap();
    };
    RestaurantComponent.prototype.addRestaurantsToMap = function () {
        for (var i = 0; i < this.restaurants.length; i++) {
            this.createRestaurantMarker(this.restaurants[i]);
        }
    };
    // creates a marker with a closure for the event functions.
    RestaurantComponent.prototype.createRestaurantMarker = function (restaurant) {
        var marker = new google.maps.Marker({
            position: restaurant.latLng,
            map: this.map,
            label: { text: restaurant.name, color: 'white' },
            title: restaurant.name
        });
        google.maps.event.addListener(marker, 'mouseover', function (evt) {
            var label = this.getLabel();
            label.color = 'black';
            this.setLabel(label);
        });
        google.maps.event.addListener(marker, 'mouseout', function (evt) {
            var label = this.getLabel();
            label.color = 'white';
            this.setLabel(label);
        });
        marker.restaurant = restaurant;
        marker.controller = this;
        marker.addListener('click', function () {
            marker.controller.loadMenu(marker.restaurant);
        });
        return marker;
    };
    RestaurantComponent.prototype.selectItem = function (item) {
        this.selectedItem = item;
        this.selectedItem.notes = '';
        this.selectedItem.finalPrice = 0.00;
        if (this.selectedItem.customize) {
            for (var i = 0; i < this.selectedItem.customize.length; i++) {
                if (this.selectedItem.customize[i].required) {
                    this.selectedItem.customize[i].selected = this.selectedItem.customize[i].options[0];
                }
                else {
                    for (var j = 0; j < this.selectedItem.customize[i].options.length; j++) {
                        if (this.selectedItem.customize[i].options[j].enabled == undefined)
                            this.selectedItem.customize[i].options[j].enabled = false;
                    }
                }
            }
        }
        this.updateItem();
    };
    RestaurantComponent.prototype.startCheckout = function (checkoutBtn) {
        var _this = this;
        var html = checkoutBtn.innerHTML;
        if (this.checkout && !this.processing) {
            this.processing = true;
            if (this.processingSubscription) {
                this.processingSubscription.unsubscribe();
            }
            checkoutBtn.innerHTML =
                "<h4>\n            Processing  <i class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\n        </h4>";
            var complete_1 = function () {
                checkoutBtn.innerHTML =
                    "<h4>\n                <i class=\"fas fa-check\"></i> Order Complete! <i class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\n          </h4>";
            };
            var done_1 = function () {
                checkoutBtn.innerHTML = html;
                _this.cart = [];
                _this.ordering = false;
                _this.checkout = false;
                _this.selectedRestaurant = null;
                _this.processing = false;
            };
            this.processingSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                complete_1();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                done_1();
            })).subscribe(function () { return console.log('Done'); });
        }
        else {
            this.checkout = true;
        }
    };
    RestaurantComponent.prototype.getSign = function (num) {
        if (num < 0)
            return '-';
        else
            return '+';
    };
    RestaurantComponent.prototype.abs = function (num) {
        return Math.abs(num);
    };
    RestaurantComponent.prototype.itemIsValid = function () {
        return true;
    };
    RestaurantComponent.prototype.updateItem = function () {
        this.selectedItem.finalPrice = this.selectedItem.basePrice;
        if (this.selectedItem.customize) {
            for (var i = 0; i < this.selectedItem.customize.length; i++) {
                if (this.selectedItem.customize[i].required) {
                    this.selectedItem.finalPrice += this.selectedItem.customize[i].selected.price;
                }
                else {
                    for (var j = 0; j < this.selectedItem.customize[i].options.length; j++) {
                        if (this.selectedItem.customize[i].options[j].enabled)
                            this.selectedItem.finalPrice += this.selectedItem.customize[i].options[j].price;
                    }
                }
            }
        }
    };
    RestaurantComponent.prototype.editCart = function (i) {
        var item = this.cart[i];
        this.cart.splice(i, 1);
        this.selectedItem = item;
    };
    RestaurantComponent.prototype.addSelectedToCart = function () {
        this.selectedItem.restaurant = this.selectedRestaurant;
        this.cart.push(this.selectedItem);
        this.selectedItem = null;
        this.cartTotal = this.selectedRestaurant.deliveryFee;
        for (var i = 0; i < this.cart.length; i++) {
            this.cartTotal += this.cart[i].finalPrice;
        }
    };
    RestaurantComponent.prototype.check = function () {
        console.log(this.selectedItem.customize);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestaurantComponent.prototype, "gmapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], RestaurantComponent.prototype, "name", null);
    RestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurants-root',
            template: __webpack_require__(/*! ./restaurant.component.html */ "./src/app/restaurant.component.html"),
            styles: [__webpack_require__(/*! ./restaurant.component.css */ "./src/app/restaurant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestaurantComponent);
    return RestaurantComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\brand\Documents\GitHub\4hc3-design-project\milestone4\food\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map