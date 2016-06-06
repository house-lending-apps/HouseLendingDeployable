(function(){
/*eslint-env jasmine */
/*global module:false, inject:false */
'use strict';

/* @ngInject */
var config = function ($provide) {
    /*eslint-disable angular/function-type*/
    $provide.decorator('AdvertisementListService', ['$delegate', 'AdvertisementListServiceMock',
        function ($delegate, ServiceMock) {
            ServiceMock.mock();
            return $delegate;
        }
    ]);
    /*eslint-enable angular/function-type*/
};
config.$inject = ['$provide'];

/* @ngInject */
var AdvertisementListServiceMock = function ($httpBackend) {

    var mockData = [];
    var statusCode = 200;

    return {
        getMocks: function () {
            return {
                statusCode: statusCode,
                mockData: mockData
            };
        },
        mock: function () {
            $httpBackend.whenGET('/api/advertisements')
                .respond(statusCode, mockData);
        },
        setMocks: function (newStatusCode, newMockData) {
            statusCode = newStatusCode;
            mockData = newMockData;
        }
    };
};
AdvertisementListServiceMock.$inject = ['$httpBackend'];

angular.module('house-lending.common.services')
    .config(config)
    .factory('AdvertisementListServiceMock', AdvertisementListServiceMock);

})();
(function(){
/*eslint-env jasmine */
/*global module:false, inject:false */
'use strict';

angular.module('house-lending.mocks', ['house-lending','ngMockE2E']).config(function () {
    angular.MOCKDATA = {auth: true};
}).run(['$httpBackend', function ($httpBackend) {
    $httpBackend.whenGET(/^.*.tpl.html/).passThrough();
}]);


})();