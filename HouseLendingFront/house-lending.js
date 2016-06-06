(function(){
'use strict';

angular.module("house-lending.tpl", []).run(["$templateCache", function($templateCache) {$templateCache.put("login/login.tpl.html","<div class=\"row\"><div class=\"medium-6 medium-centered large-4 large-centered columns\"><form><div class=\"row column log-in-form\"><h4 class=\"text-center\">Log in with you email account</h4><label>Email <input type=\"text\" placeholder=\"somebody@example.com\"></label><label>Password <input type=\"text\" placeholder=\"Password\"></label><input id=\"show-password\" type=\"checkbox\"><label for=\"show-password\">Show password</label><p><a type=\"submit\" class=\"button expanded\">Log In</a></p><p class=\"text-center\"><a href=\"#\">Forgot your password?</a></p></div></form></div></div>");
$templateCache.put("landingPage/dashboard/dashboard.tpl.html","<div class=\"off-canvas-wrapper\"><div class=\"off-canvas-wrapper-inner\" data-off-canvas-wrapper><div class=\"off-canvas position-left\" id=\"mobile-menu\" data-off-canvas><ul><li ui-sref-active=\"active\"><a ui-sref=\"#\">Chapter 1</a></li><li ui-sref-active=\"active\"><a ui-sref=\"#\">Chapter 2</a></li><li ui-sref-active=\"active\"><a ui-sref=\"#\">Chapter 3</a></li></ul></div><div class=\"off-canvas-content\" data-off-canvas-content><top-menu-bar></top-menu-bar><section class=\"hero\"><div class=\"wrap\"><div class=\"hero-main-content\"><div class=\"row\"><div class=\"medium-7 large-6 columns\"><h1>Close Your Eyes and Open Your Mind</h1><p class=\"subheader\">There is beauty in space, and it is orderly. There is no weather, and there is regularity. It is predictable. Everything in space obeys the laws of physics. If you know these laws, and obey them, space will treat you kindly.</p><button class=\"button\">Take a Tour</button> <button class=\"button\">Start a free trial</button></div><div class=\"medium-5 large-3 columns\"><div class=\"callout secondary\"><form><div class=\"row\"><div class=\"small-12 columns\"><label>Find Your Dream Planet <input type=\"text\" placeholder=\"Search destinations\"></label></div><div class=\"small-12 columns\"><label>Number of Moons <input type=\"number\" placeholder=\"Moons required\"></label><button type=\"submit\" class=\"button\">Search Now!</button></div></div></form></div></div></div><div class=\"row column\"><hr></div><div class=\"row column\"><p class=\"lead\">Trending Planetary Destinations</p></div><div class=\"row small-up-1 medium-up-2 large-up-2\"><div class=\"column\" ng-repeat=\"ad in vm.advertisements\"><div class=\"callout\"><p>Pegasi B</p><p><img src=\"http://placehold.it/400x370&text=Pegasi B\" alt=\"image of a planet called Pegasi B\"></p><div class=\"row\"><div class=\"small-3 lead\">Property Title</div><div class=\"small-9\">{{ad.title}}</div></div><div class=\"row\"><div class=\"small-3 lead\">Advertisement Details</div><div class=\"small-9\">{{ad.advertisementDetails}}</div></div><div class=\"row\"><div class=\"small-3 lead\">Property Address</div><div class=\"small-9\"><span>{{ad.property.address.addressLine1}},{{ad.property.address.addressLine2}} </span><span>{{ad.property.address.postcode}} </span><span>{{ad.property.address.townOrTaluka}},{{ad.property.address.city}},{{ad.property.address.state}}</span></div></div><div class=\"row\"><div class=\"small-3 lead\">No Of Bedrooms</div><div class=\"small-9\">{{ad.property.bedRooms}}</div></div><div class=\"row\"><div class=\"small-3 lead\">No Of Bathrooms</div><div class=\"small-9\">{{ad.property.bathRooms}}</div></div></div></div></div></div><div class=\"row column\"><a class=\"button hollow expanded\">Load More</a></div></div></section><footer-bar></footer-bar></div></div></div>");
$templateCache.put("landingPage/dashboard/dashboard1.tpl.html","<div class=\"title-bar\" data-responsive-toggle=\"realEstateMenu\" data-hide-for=\"small\"><button class=\"menu-icon\" type=\"button\" data-toggle></button><div class=\"title-bar-title\">Menu</div></div><div class=\"top-bar\" id=\"realEstateMenu\"><div class=\"top-bar-left\"><ul class=\"menu\" data-responsive-menu=\"accordion\"><li class=\"menu-text\">Interplanetary</li><li><a href=\"#\">One</a></li><li><a href=\"#\">Two</a></li><li><a href=\"#\">Three</a></li></ul></div><div class=\"top-bar-right\"><ul class=\"menu\"><li><a href=\"#\">My Account</a></li><li><a class=\"button\">Login</a></li></ul></div></div><br><div class=\"row\"><div class=\"medium-7 large-6 columns\"><h1>Close Your Eyes and Open Your Mind</h1><p class=\"subheader\">There is beauty in space, and it is orderly. There is no weather, and there is regularity. It is predictable. Everything in space obeys the laws of physics. If you know these laws, and obey them, space will treat you kindly.</p><button class=\"button\">Take a Tour</button> <button class=\"button\">Start a free trial</button></div><div class=\"show-for-large large-3 columns\"><img src=\"http://placehold.it/400x370&text=PSR1257 + 12 C\" alt=\"picture of space\"></div><div class=\"medium-5 large-3 columns\"><div class=\"callout secondary\"><form><div class=\"row\"><div class=\"small-12 columns\"><label>Find Your Dream Planet <input type=\"text\" placeholder=\"Search destinations\"></label></div><div class=\"small-12 columns\"><label>Number of Moons <input type=\"number\" placeholder=\"Moons required\"></label><button type=\"submit\" class=\"button\">Search Now!</button></div></div></form></div></div></div><div class=\"row column\"><hr></div><div class=\"row column\"><p class=\"lead\">Trending Planetary Destinations</p></div><div class=\"row small-up-1 medium-up-2 large-up-3\"><div class=\"column\"><div class=\"callout\"><p>Pegasi B</p><p><img src=\"http://placehold.it/400x370&text=Pegasi B\" alt=\"image of a planet called Pegasi B\"></p><p class=\"lead\">Copernican Revolution caused an uproar</p><p class=\"subheader\">Find Earth-like planets life outside the Solar System</p></div></div><div class=\"column\"><div class=\"callout\"><p>Pegasi B</p><p><img src=\"http://placehold.it/400x370&text=Pegasi B\" alt=\"image of a planet called Pegasi B\"></p><p class=\"lead\">Copernican Revolution caused an uproar</p><p class=\"subheader\">Find Earth-like planets life outside the Solar System</p></div></div><div class=\"column\"><div class=\"callout\"><p>Pegasi B</p><p><img src=\"http://placehold.it/400x370&text=Pegasi B\" alt=\"image of a planet called Pegasi B\"></p><p class=\"lead\">Copernican Revolution caused an uproar</p><p class=\"subheader\">Find Earth-like planets life outside the Solar System</p></div></div><div class=\"column\"><div class=\"callout\"><p>Pegasi B</p><p><img src=\"http://placehold.it/400x370&text=Pegasi B\" alt=\"image of a planet called Pegasi B\"></p><p class=\"lead\">Copernican Revolution caused an uproar</p><p class=\"subheader\">Find Earth-like planets life outside the Solar System</p></div></div><div class=\"column\"><div class=\"callout\"><p>Pegasi B</p><p><img src=\"http://placehold.it/400x370&text=Pegasi B\" alt=\"image of a planet called Pegasi B\"></p><p class=\"lead\">Copernican Revolution caused an uproar</p><p class=\"subheader\">Find Earth-like planets life outside the Solar System</p></div></div><div class=\"column\"><div class=\"callout\"><p>Pegasi B</p><p><img src=\"http://placehold.it/400x370&text=Pegasi B\" alt=\"image of a planet called Pegasi B\"></p><p class=\"lead\">Copernican Revolution caused an uproar</p><p class=\"subheader\">Find Earth-like planets life outside the Solar System</p></div></div></div><div class=\"row column\"><a class=\"button hollow expanded\">Load More</a></div><footer><div class=\"row expanded callout secondary\"><div class=\"small-6 large-3 columns\"><p class=\"lead\">Offices</p><ul class=\"menu vertical\"><li><a href=\"#\">One</a></li><li><a href=\"#\">Two</a></li><li><a href=\"#\">Three</a></li><li><a href=\"#\">Four</a></li></ul></div><div class=\"small-6 large-3 columns\"><p class=\"lead\">Solar Systems</p><ul class=\"menu vertical\"><li><a href=\"#\">One</a></li><li><a href=\"#\">Two</a></li><li><a href=\"#\">Three</a></li><li><a href=\"#\">Four</a></li></ul></div><div class=\"small-6 large-3 columns\"><p class=\"lead\">Contact</p><ul class=\"menu vertical\"><li><a href=\"#\"><i class=\"fi-social-twitter\"></i> Twitter</a></li><li><a href=\"#\"><i class=\"fi-social-facebook\"></i> Facebook</a></li><li><a href=\"#\"><i class=\"fi-social-instagram\"></i> Instagram</a></li><li><a href=\"#\"><i class=\"fi-social-pinterest\"></i> Pinterest</a></li></ul></div><div class=\"small-6 large-3 columns\"><p class=\"lead\">Offices</p><ul class=\"menu vertical\"><li><a href=\"#\">One</a></li><li><a href=\"#\">Two</a></li><li><a href=\"#\">Three</a></li><li><a href=\"#\">Four</a></li></ul></div></div><div class=\"row\"><div class=\"medium-6 columns\"><ul class=\"menu\"><li><a href=\"#\">Legal</a></li><li><a href=\"#\">Partner</a></li><li><a href=\"#\">Explore</a></li></ul></div><div class=\"medium-6 columns\"><ul class=\"menu float-right\"><li class=\"menu-text\">Copyright</li></ul></div></div></footer>");
$templateCache.put("landingPage/marketingLandingPage/marketingLandingPage.tpl.html","<div class=\"off-canvas-wrapper\"><div class=\"off-canvas-wrapper-inner\" data-off-canvas-wrapper><div class=\"off-canvas position-left\" id=\"mobile-menu\" data-off-canvas><ul><li ui-sref-active=\"active\"><a ui-sref=\"#\">Chapter 1</a></li><li ui-sref-active=\"active\"><a ui-sref=\"#\">Chapter 2</a></li><li ui-sref-active=\"active\"><a ui-sref=\"#\">Chapter 3</a></li></ul></div><div class=\"off-canvas-content\" data-off-canvas-content><top-menu-bar></top-menu-bar><section class=\"hero\"><div class=\"wrap\"><div class=\"hero-main-content\"><h2>Some Marketting Content</h2><h2>Search Function may be</h2><h2>Some Popular Auctions etc...</h2></div></div></section><footer-bar></footer-bar></div></div></div>");
$templateCache.put("landingPage/menusAndTools/footerBar/footerBar.tpl.html","<div><footer class=\"footer\"><div class=\"wrap row small-up-1 large-up-3\"><div class=\"column\"><h4>Contact info</h4><hr><a href=\"#\"><span>Phone</span> 2344 234 234</a> <a href=\"#\"><span>Email</span> info@company.com</a> <a href=\"#\"><span>Address</span> 123 Street Centre</a></div><div class=\"columns\"><h4>SiteMap</h4><hr><a href=\"#\">About us</a> <a href=\"#\">Services</a> <a href=\"#\">Contact US</a></div><div class=\"columns\"><h4>Social Media</h4><hr><a href=\"#\">Twitter</a> <a href=\"#\">Facebook</a> <a href=\"#\">Instagram</a></div></div></footer></div>");
$templateCache.put("landingPage/menusAndTools/topMenuBar/topMenuBar.tpl.html","<div><div class=\"title-bar show-for-small-only\"><div class=\"title-bar-left\"><button class=\"menu-icon\" type=\"button\" data-toggle=\"mobile-menu\"></button> <span class=\"title-bar-title\">MENU</span></div></div><nav class=\"top-bar nav-desktop\"><div class=\"wrap\"><div class=\"top-bar-left\"><h3 class=\"site-logo\">House Lending Auctions</h3></div><div class=\"top-bar-right\"><ul class=\"menu menu-desktop\"><li ui-sref-active=\"active\"><a ui-sref=\"#\">Services</a></li><li ui-sref-active=\"active\"><a ui-sref=\"#\">Contact</a></li><li ui-sref-active=\"active\"><a ui-sref=\"#\">About</a></li></ul></div></div></nav></div>");}]);

})();
(function(){
'use strict';

angular.module('house-lending.menusAndTools.topMenuBar', []);


})();
(function(){
'use strict';

var TopMenuBarController = function () {
   // var vm = this;
};

angular.module('house-lending.menusAndTools.topMenuBar').controller('TopMenuBarController', TopMenuBarController);

})();
(function(){
'use strict';

angular.module('house-lending.menusAndTools.topMenuBar')
    .component('topMenuBar', {
        controller: 'TopMenuBarController',
        controllerAs: 'vm',
        templateUrl: 'landingPage/menusAndTools/topMenuBar/topMenuBar.tpl.html'
    });

})();
(function(){
'use strict';

angular.module('house-lending.menusAndTools.footerBar', []);

})();
(function(){
'use strict';

var FooterBarController = function () {
   // var vm = this;
};

angular.module('house-lending.menusAndTools.footerBar')
    .controller('FooterBarController', FooterBarController);

})();
(function(){
'use strict';

angular.module('house-lending.menusAndTools.footerBar')
    .component('footerBar', {
        controller: 'FooterBarController',
        controllerAs: 'vm',
        templateUrl: 'landingPage/menusAndTools/footerBar/footerBar.tpl.html'
    });

})();
(function(){
'use strict';

angular.module('house-lending.menusAndTools',
    ['house-lending.menusAndTools.topMenuBar',
        'house-lending.menusAndTools.footerBar']);

})();
(function(){
'use strict';
angular
    .module('house-lending.marketingLandingPage', ['house-lending.common']);

})();
(function(){
'use strict';

var MarketingLandingPageController = function () {
    var vm = this;

    //TODO: Init function, can be replaced with the resolve later
    vm.init();
};

MarketingLandingPageController.prototype.init = function () {

};

angular.module('house-lending.marketingLandingPage')
    .controller('MarketingLandingPageController', MarketingLandingPageController);

})();
(function(){
'use strict';

angular.module('house-lending.marketingLandingPage')
    .component('marketingLandingPage', {
        controller: 'MarketingLandingPageController',
        controllerAs: 'vm',
        templateUrl: 'landingPage/marketingLandingPage/marketingLandingPage.tpl.html'
    });

})();
(function(){
'use strict';
angular
    .module('house-lending.dashboard', ['house-lending.common']);

})();
(function(){
'use strict';

var DashboardController = function (AdvertisementListService /*,advertisementData*/) {
    var vm = this;
    // Data is already loaded before this component is loaded
    //vm.advertisements = advertisementData;
    vm.advertisements = [];
    vm.AdvertisementListService = AdvertisementListService;

    //TODO: Init function, can be replaced with the resolve later
    vm.init();
};
DashboardController.$inject = ['AdvertisementListService'];

DashboardController.prototype.init = function () {
    var self = this;
    self.AdvertisementListService.getAdvertisementsMocked()
        .then(function (advertisements) {
            //success scenario
            console.log(JSON.stringify(advertisements));
            self.advertisements = advertisements;
        }, function (error) {
            //failure scenario
            console.log(error);
        });
};

DashboardController.prototype.getAdvertisementKeys = function (object) {
    return Object.keys(object);
};

angular.module('house-lending.dashboard')
    .controller('DashboardController', DashboardController);

})();
(function(){
'use strict';

angular.module('house-lending.dashboard')
    .component('houseLendingDashbopard', {
        controller: 'DashboardController',
        controllerAs: 'vm',
        templateUrl: 'landingPage/dashboard/dashboard.tpl.html'
    });

})();
(function(){
'use strict';
angular
    .module('house-lending.common.services', []);

})();
(function(){
'use strict';
var LoggerServiceConstants = {
    LOGGER_LEVEL : {
        'DEBUG': 'debug',
        'ERROR': 'error',
        'LOG': 'log'
    }
};

var LoggerService = function ($log) {
    var currentDateAndTime = function () {
        return 'Not Setup Yet ... ';
    };

    var debug = function (message) {
        $log.debug(currentDateAndTime().concat(message));
    };

    var log = function (message) {
        $log.log(currentDateAndTime().concat(message));
    };

    var error = function (message) {
        $log.log(currentDateAndTime().concat(message));
    };

    this.log = function (message, logLevel) {
        if (logLevel === LoggerServiceConstants.LOGGER_LEVEL.LOG) {
            log(message);
        } else if (logLevel === LoggerServiceConstants.LOGGER_LEVEL.DEBUG) {
            debug(message);
        } else if (logLevel === LoggerServiceConstants.LOGGER_LEVEL.ERROR) {
            error(message);
        }
    };
};
LoggerService.$inject = ['$log'];


angular.module('house-lending.common.services')
    .service('LoggerService', LoggerService)
    .constant('LoggerServiceConstants', LoggerServiceConstants);

})();
(function(){
'use strict';


var AuthorizationInterceptor = function () {

};

angular.module('house-lending.common.services')
    .factory('AuthorizationInterceptor', AuthorizationInterceptor);

})();
(function(){
'use strict';

var AdvertisementListService = function ($resource, $q, $timeout, AdvertisementListModel) {
    this.AdvertisementListModel = AdvertisementListModel;
    this.$resource = $resource;
    this.$q = $q;
    this.$timeout = $timeout;

    var mockData = [{
        'id': '1',
        'title': 'Test1',
        'dateCreated': '28-05-2016 11:21:00',
        'advertisementDetails': 'This flat is very good with balcony',
        'property': {
            'address': {
                'addressLine1': 'Address Line 1',
                'addressLine2': 'Address Line 2',
                'postcode': '411046',
                'townOrTaluka': 'Chikli',
                'city': 'Pune',
                'state': 'Maharashtra',
                'country': 'India'
            },
            'bedRooms': 2,
            'bathRooms': 2,
            'superBuiltUpArea': 123.00,
            'buildUpArea': 150.00,
            'carpetArea': 150.00,
            'balconies': 1,
            'parkingReserved': 'Reserved Parking for one car and one bike',
            'floorNo': '5',
            'facingDirection': 'Garden Facing',
            'availableFrom': '29-05-2016',
            'propertyAge': '3 Years Old',
            'availableFor': 'Family Only',
            'propertyPhotos': [
                {
                    'googleMapUrl': '',
                    'photoURL': '',
                    'title': '',
                    'caption': ''
                }
            ]
        }
    },{
        'id': '2',
        'title': 'Test2',
        'dateCreated': '28-05-2016 11:21:00',
        'advertisementDetails': 'This flat is very good with balcony',
        'property': {
            'address': {
                'addressLine1': 'Address Line 1',
                'addressLine2': 'Address Line 2',
                'postcode': '411046',
                'townOrTaluka': 'Chikli',
                'city': 'Pune',
                'state': 'Maharashtra',
                'country': 'India'
            },
            'bedRooms': 2,
            'bathRooms': 2,
            'superBuiltUpArea': 123.00,
            'buildUpArea': 150.00,
            'carpetArea': 150.00,
            'balconies': 1,
            'parkingReserved': 'Reserved Parking for one car and one bike',
            'floorNo': '5',
            'facingDirection': 'Garden Facing',
            'availableFrom': '29-05-2016',
            'propertyAge': '3 Years Old',
            'availableFor': 'Family Only',
            'propertyPhotos': [
                {
                    'googleMapUrl': '',
                    'photoURL': '',
                    'title': '',
                    'caption': ''
                }
            ]
        }
    },
        {
            'id': '3',
            'title': 'Test3',
            'dateCreated': '28-05-2016 11:21:00',
            'advertisementDetails': 'This flat is very good with balcony',
            'property': {
                'address': {
                    'addressLine1': 'Address Line 1',
                    'addressLine2': 'Address Line 2',
                    'postcode': '411046',
                    'townOrTaluka': 'Chikli',
                    'city': 'Pune',
                    'state': 'Maharashtra',
                    'country': 'India'
                },
                'bedRooms': 2,
                'bathRooms': 2,
                'superBuiltUpArea': 123.00,
                'buildUpArea': 150.00,
                'carpetArea': 150.00,
                'balconies': 1,
                'parkingReserved': 'Reserved Parking for one car and one bike',
                'floorNo': '5',
                'facingDirection': 'Garden Facing',
                'availableFrom': '29-05-2016',
                'propertyAge': '3 Years Old',
                'availableFor': 'Family Only',
                'propertyPhotos': [
                    {
                        'googleMapUrl': '',
                        'photoURL': '',
                        'title': '',
                        'caption': ''
                    }
                ]
            }
        }];

    // backend call to fetch records
    this.getAdvertisements = function () {
        var self = this;
        var deferred = self.$q.defer();


        self.$resource('/api/advertisements').query().$promise.then(
            function (json) {
                self.AdvertisementListModel.populateAdvertisementModel(json);
                deferred.resolve(self.AdvertisementListModel);
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    };

    this.getAdvertisementsMocked = function () {
        var self = this;
        var deferred = self.$q.defer();

        self.$timeout(function () {
            deferred.resolve(mockData);
        }, 1000);

        return deferred.promise;
    };


};
AdvertisementListService.$inject = ['$resource', '$q', '$timeout', 'AdvertisementListModel'];

angular.module('house-lending.common.services')
    .service('AdvertisementListService', AdvertisementListService);


})();
(function(){
'use strict';
angular
    .module('house-lending.models', []);

})();
(function(){
'use strict';


var AdvertisementListModel = function (AdvertisementBaseModel) {
    this.Advertisement = [];
    angular.copy(AdvertisementBaseModel, this.Advertisement);
    this.advertisements = [];

    return this;
};
AdvertisementListModel.$inject = ['AdvertisementBaseModel'];

AdvertisementListModel.prototype.getAdvertisements = function () {
    return this.advertisements;
};

AdvertisementListModel.prototype.setAdvertisements = function (advertisements) {
    this.advertisements = advertisements;
};

AdvertisementListModel.prototype.populateAdvertisementModel = function (advertisements) {
    var self = this;
    angular.forEach(advertisements, function (advertisementData) {
        self.advertisements.push(mapAdvertisementToModel((advertisementData)));
    });
};

var mapAdvertisementToModel = function (advertisementData) {
    var advertisement = new this.Advertisement();

    // Considering that the advertisementData and model will be exactly similiar
    advertisement = advertisementData;

    return advertisement;
};

angular.module('house-lending.models')
    .factory('AdvertisementListModel', AdvertisementListModel);




})();
(function(){
'use strict';


var AdvertisementBaseModel = function () {



    var Property = function () {
        return {
            address: new Address(),
            bedRooms: 0,
            bathRooms: 0,
            superBuiltUpArea: 0.0,
            buildUpArea: 0.0,
            carpetArea: 0.0,
            balconies: 0,
            parkingReserved: '',
            floorNo: '',
            facingDirection: '',
            availableFrom: '',
            propertyAge: '',
            availableFor: '',
            propertyPhotos: [new PropertyPhoto()]
        };

    };

    var Address = function () {
        return {
            addressLine1: '',
            addressLine2: '',
            postcode: '',
            townOrTaluka: '',
            city: '',
            state: '',
            country: ''
        };
    };

    var PropertyPhoto = function () {
        return {
            googleMapUrl: '',
            photoURL: '',
            title: '',
            caption: ''
        };

    };

    return {
        id: '',
        title: '',
        dateCreated: '',
        advertisementDetails: '',
        property: new Property()
    };

};




angular.module('house-lending.models')
    .factory('AdvertisementBaseModel', AdvertisementBaseModel);

})();
(function(){
'use strict';
angular
    .module('house-lending.login', []);


})();
(function(){
'use strict';

var LoginController = function () {
    //var vm = this;


};

angular.module('house-lending.login')
    .controller('LoginController', LoginController);

})();
(function(){
'use strict';

angular.module('house-lending.login').directive('loginPage', {
    controller: 'LoginController',
    controllerAs: 'vm',
    templateUrl: 'login.tpl.html'
});

})();
(function(){
'use strict';
angular
    .module('house-lending.landingPage',
        ['house-lending.dashboard',
            'house-lending.marketingLandingPage',
            'house-lending.menusAndTools']);

})();
(function(){
'use strict';
angular
    .module('house-lending.common'
        , ['house-lending.common.services',
            'house-lending.models']);

})();
(function(){
'use strict';
angular.module('house-lending',
    ['ngMessages',
        'ui.router',
        'ngResource',
        'house-lending.tpl',
        'house-lending.common',
        'house-lending.login',
        'house-lending.landingPage'
    ]);

})();
(function(){
'use strict';

angular.module('house-lending')
    .constant('MAIN-STATE', 'landingPage')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                redirectTo: 'houseLending',
                template: '<ui-view/>'
            })
            .state('houseLending', {
                url: '/houseLending',
                redirectTo: 'houseLending.dashboard',
                template: '<ui-view/>'
            })
            .state('houseLending.dashboard', {
                url: '/dashboard',
                template: '<house-lending-dashbopard></house-lending-dashbopard>'
                /*,
                 resolve: {
                 advertisementData: function (AdvertisementListService) {

                 //AdvertisementListService.getAdvertisements().then(function(advertisements){


                 }
                 }*/
            })
            .state('houseLending.landingPage', {
                url: '/landingPage',
                template: '<marketing-landing-page></marketing-landing-page>'
            });

        $urlRouterProvider.otherwise('/');
    }])
    .run(['$rootScope', '$log', '$state', function ($rootScope, $log, $state) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState /*,fromParams, options*/) {

                if (toState.redirectTo) {
                    event.preventDefault();
                    $state.go(toState.redirectTo, toParams, {location: 'replace'});
                }

                $log.log('toState : ' + JSON.stringify(toState));
                $log.log('fromState : ' + JSON.stringify(fromState));
            });
    }]);

})();