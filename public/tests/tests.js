(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={"deluxe":{"friends":["Bob Smith","Jane Doe","Bubba Hyde","Betsy Toheavens"]},"shared":{"friends":["Bob Smith"]},"animal-friendly":{"friends":["Bob Smith","Jane Doe","Bubba Hyde"]},"another":{"friends":["Bob Smith","Jane Doe"]},"and-another":{"friends":[]}}
},{}],2:[function(require,module,exports){
"use strict";module.exports=function(e){if(e&&Array.isArray(e)&&e.length){var r,n,t,a=e.length,i=" stayed here",s=" other friend";return a>1&&e.sort(),1===a?r=e[0]+" has"+i:2===a?r=e.join(" and ")+" have"+i:a>2?(n=e.slice(0,2),t=a-2,r=n.join(", ")+" and "+t+s+(t>1?"s":"")+" have"+i):void 0}};
},{}],3:[function(require,module,exports){
"use strict";function generateRoomData(e,r){if(e&&r&&"string"==typeof e&&Array.isArray(r)){var a={name:pretifyName(e),message:generateMessage(r),id:generateId(e)};return a}}var getRoomsData=require("./process-data"),generateMessage=require("./generate-friends-message"),generateId=require("./id-generator"),pretifyName=require("./pretify-name"),roomsData=getRoomsData();module.exports=function(){var e,r,a,t=[];for(e in roomsData)roomsData.hasOwnProperty(e)&&(r=e,roomsData[e].hasOwnProperty("friends")&&(a=roomsData[e].friends,t.push(generateRoomData(r,a))));return t};
},{"./generate-friends-message":2,"./id-generator":4,"./pretify-name":5,"./process-data":6}],4:[function(require,module,exports){
"use strict";module.exports=function(e){if(e&&""!==e&&"string"==typeof e){var r=e.replace(/\s/,"-");return r.toLowerCase()}};
},{}],5:[function(require,module,exports){
"use strict";module.exports=function(e){if(e&&""!==e&&"string"==typeof e){var r=e.replace(/(\-|\s)/," "),t=r.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()});return t}};
},{}],6:[function(require,module,exports){
"use strict";var data=require("../friends.json");module.exports=function(r){return r?r:data};
},{"../friends.json":1}],7:[function(require,module,exports){
"use strict";require("./unit/process-data"),require("./unit/pretify-name"),require("./unit/id-generator"),require("./unit/generate-friends-message"),require("./unit/generate-room-data");
},{"./unit/generate-friends-message":8,"./unit/generate-room-data":9,"./unit/id-generator":10,"./unit/pretify-name":11,"./unit/process-data":12}],8:[function(require,module,exports){
"use strict";var generateMessage=require("../../js/modules/generate-friends-message"),noFriends=[],oneFriend=["Jerry Mo"],twoFriends=["Jerry Mo","Adam Lo"],threeFriends=["Jerry Mo","Adam Lo","Hernand Fo"],fourFriends=["Jerry Mo","Adam Lo","Hernand Fo","Abe Ade"],manyFriends=["Jerry Mo","Adam Lo","Hernand Fo","Abe Ade","Tu Szu","Laszlo Horvath"],tests=function(){describe("GENERATE FRIENDS MESSAGE",function(){it("Do not run if no data",function(){assert.isUndefined(generateMessage())}),it("Do not run if empty an array",function(){assert.isUndefined(generateMessage(noFriends))}),it("Do not run if data is not an array",function(){assert.isUndefined(generateMessage({blah:2})),assert.isUndefined(generateMessage(!0)),assert.isUndefined(generateMessage(void 0)),assert.isUndefined(generateMessage("betty"))}),it("Returns string if data is correct type ofarray",function(){assert.isString(generateMessage(oneFriend))}),it("For single friend return: Jerry Mo has stayed here",function(){assert.deepEqual(generateMessage(oneFriend),"Jerry Mo has stayed here")}),it("For 2 friends sort and return: Adam Lo and Jerry Mo have stayed here",function(){assert.deepEqual(generateMessage(twoFriends),"Adam Lo and Jerry Mo have stayed here")}),it("For 3 friends sort and return: Adam Lo, Hernand Fo and 1 other friend have stayed here",function(){assert.deepEqual(generateMessage(threeFriends),"Adam Lo, Hernand Fo and 1 other friend have stayed here")}),it("For 4 friends sort and return: Abe Ade, Adam Lo and 2 other friends have stayed here",function(){assert.deepEqual(generateMessage(fourFriends),"Abe Ade, Adam Lo and 2 other friends have stayed here")}),it("For 6 friends sort and return: Abe Ade, Adam Lo and 4 other friends have stayed here",function(){assert.deepEqual(generateMessage(manyFriends),"Abe Ade, Adam Lo and 4 other friends have stayed here")})})};tests();
},{"../../js/modules/generate-friends-message":2}],9:[function(require,module,exports){
"use strict";var generateRoomData=require("../../js/modules/generate-room-data"),tests=function(){describe("GENERATE ROOM DATA",function(){it("Returns array",function(){assert.isArray(generateRoomData())}),it("Array contains objects",function(){var e=generateRoomData();assert.isObject(e[0])}),it("Each object to have 'name', 'message' and 'id' keys",function(){function e(e){assert.property(e,"name"),assert.property(e,"message"),assert.property(e,"id")}var t=generateRoomData();t[0];t.forEach(e)})})};tests();
},{"../../js/modules/generate-room-data":3}],10:[function(require,module,exports){
"use strict";var idGenerator=require("../../js/modules/id-generator"),singleWord="lovely",hyphenatedWord="very-lovely",spacedWord="extremely lovely",combinedWord="very-very lovely",tests=function(){describe("GENERATE ID",function(){it("Do not run no string",function(){assert.isUndefined(idGenerator())}),it("Do not run if empty an string",function(){assert.isUndefined(idGenerator(""))}),it("Do not run if not a string",function(){assert.isUndefined(idGenerator(void 0)),assert.isUndefined(idGenerator(["a","b"])),assert.isUndefined(idGenerator({blah:"muh"}))}),it("Return captilized 'lovely'",function(){assert.deepEqual(idGenerator(singleWord),"lovely")}),it("Return captilized 'extremely lovely'",function(){assert.deepEqual(idGenerator(hyphenatedWord),"very-lovely")}),it("Return captilized 'very-lovely', replace hyphen with space",function(){assert.deepEqual(idGenerator(spacedWord),"extremely-lovely")}),it("Return captilized 'very-very lovely', replace hyphen with space",function(){assert.deepEqual(idGenerator(combinedWord),"very-very-lovely")})})};tests();
},{"../../js/modules/id-generator":4}],11:[function(require,module,exports){
"use strict";var pretifyName=require("../../js/modules/pretify-name"),singleWord="lovely",hyphenatedWord="very-lovely",spacedWord="extremely lovely",combinedWord="very-very lovely",tests=function(){describe("PRETIFY NAME",function(){it("Do not run no string",function(){assert.isUndefined(pretifyName())}),it("Do not run if empty an string",function(){assert.isUndefined(pretifyName(""))}),it("Do not run if not a string",function(){assert.isUndefined(pretifyName(void 0)),assert.isUndefined(pretifyName(["a","b"])),assert.isUndefined(pretifyName({blah:"muh"}))}),it("Return captilized 'lovely'",function(){assert.deepEqual(pretifyName(singleWord),"Lovely")}),it("Return captilized 'extremely lovely'",function(){assert.deepEqual(pretifyName(hyphenatedWord),"Very Lovely")}),it("Return captilized 'very-lovely', replace hyphen with space",function(){assert.deepEqual(pretifyName(spacedWord),"Extremely Lovely")}),it("Return captilized 'very-very lovely', replace hyphen with space",function(){assert.deepEqual(pretifyName(combinedWord),"Very Very Lovely")})})};tests();
},{"../../js/modules/pretify-name":5}],12:[function(require,module,exports){
"use strict";var processData=require("../../js/modules/process-data"),customData={test:"betty",item1:"pop"},tests=function(){describe("PROCESS-DATA",function(){it("Returns an object",function(){assert.isObject(processData())}),it("Returns custom data file",function(){assert.isObject(processData(customData))}),it("Object's key 'test' is 'betty'",function(){var t=processData(customData);assert.deepEqual(t.test,"betty")}),it("Returns default data file if 'undefined' is passed",function(){var t=processData(void 0);assert.isObject(t),assert.property(t,"deluxe")}),it("Returns default data file if 'null' is passed",function(){var t=processData(null);assert.isObject(t),assert.property(t,"deluxe")})})};tests();
},{"../../js/modules/process-data":6}]},{},[7])


//# sourceMappingURL=tests.map.json