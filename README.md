# [Cordova/Phonegap Screen Brightness](https://github.com/leehunz/cordova-plugin-brightness)

This plugin provides a simple way to interact with the brightness of your device. This project is a fork of [cordova-plugin-brightness by mgcrea](https://github.com/mgcrea/cordova-plugin-brightness)

* This plugin is built for cordova 3+.
* This plugin currently supports both iOS and Android.


## Plugin setup

Using this plugin requires [Cordova iOS](https://github.com/apache/cordova-ios).

    phonegap local plugin add https://github.com/leehunz/cordova-plugin-brightness.git
    [phonegap] adding the plugin: https://github.com/leehunz/cordova-plugin-brightness.git
    [phonegap] successfully added the plugin


## Javascript interface

    // After device ready, create a local alias
    var brightness = cordova.plugins.brightness;

    // value should be float in range from 0 to 1.
    brightness.setBrightness(value, success, error);
    // success([-1,0-1]) float 0-1 is a brightness level, -1 represents a system default
    brightness.getBrightness(success, error);
    // prevents sleep
    brightness.setKeepScreenOn(true);


## Communication

- If you **need help**, use [Stack Overflow](http://stackoverflow.com/questions/tagged/cordova). (Tag `cordova`)
- If you'd like to **ask a general question**, use [Stack Overflow](http://stackoverflow.com/questions/tagged/cordova).
- If you **found a bug**, open an issue.
- If you **have a feature request**, open an issue.
- If you **want to contribute**, submit a pull request.


## Original Authors

**Evgeniy Lukovsky**

+ http://github.com/fiscal-cliff


## Copyright and license

    The MIT License (MIT)

    Copyright (c) 2015 Evgeniy Lukovsky

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
