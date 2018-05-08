# angular-detect-browser :eggplant:

> This is an implementation of the [detect-browser](https://github.com/DamonOehlman/detect-browser) module for angularJS.
> Thanks People from the Detect-Browser project
> Module in AngularJS to detect browser version.

## Use:
#### Import Module:
```javascript
angular.module('App', ['angular-detect-browser']);
```
#### Import Controller:
```javascript
angular.controller('Controller', ['AngularDetectBrowser', function(AngularDetectBrowser) {
    const {name, os, version} = AngularDetectBrowser.browser();
}]);
```

#### Only Method:
```javascript
AngularDetectBrowser.browser(); // return: Object { name: "firefox", version: "59.0.0", os: "Linux" }
```
