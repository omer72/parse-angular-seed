angular.module('parseSrv', [])
    .factory('ParseSDK', function() {

        // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
//        Parse.initialize("oInJV2JlcXR96EN0SQjee0n5FlRUAd0joyFXReve", "OOZa6rsbkIiRWyiNlmHVMgMIHAyTqPdHRg7N1PxO");
        Parse.initialize("ZyJuqvjTm2rsyFv6AHXRUmowlUPMlH3ZHOQbt27o", "5qK0TQj45X4gh8Q5drjhIAiPTYRndFK8XWmv6YuY");
        // FACEBOOK init
//        window.fbPromise.then(function() {
//
//            Parse.FacebookUtils.init({
//
//                // pro-tip: swap App ID out for PROD App ID automatically on deploy using grunt-replace
//                appId: 481650395275919, // Facebook App ID
//                channelUrl: 'http://brandid.github.io/parse-angular-demo/channel.html', // Channel File
//                cookie: true, // enable cookies to allow Parse to access the session
//                xfbml: true, // parse XFBML
//                frictionlessRequests: true // recommended
//
//            });
//
//        });

    });