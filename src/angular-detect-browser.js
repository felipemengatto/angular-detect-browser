import { detect } from 'detect-browser';

const detectBrowser = detect();

export function AngularDetectBrowser() {

    var service = {
        browser: browser
    };
    
    return service;

    function browser() {
    	return detectBrowser;
    }

}

export default angular.module('angular-detect-browser', []).service('AngularDetectBrowser', AngularDetectBrowser);