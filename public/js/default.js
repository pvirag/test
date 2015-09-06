(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var setupView=require("./modules/setup-view"),setupEventHandlers=require("./modules/setup-event-handlers");$(function(){setupView(),setupEventHandlers()});
},{"./modules/setup-event-handlers":8,"./modules/setup-view":9}],2:[function(require,module,exports){
module.exports={"deluxe":{"friends":["Bob Smith","Jane Doe","Bubba Hyde","Betsy Toheavens"]},"shared":{"friends":["Bob Smith"]},"animal-friendly":{"friends":["Bob Smith","Jane Doe","Bubba Hyde"]},"another":{"friends":["Bob Smith","Jane Doe"]},"and-another":{"friends":[]}}
},{}],3:[function(require,module,exports){
"use strict";module.exports=function(e){if(e&&Array.isArray(e)&&e.length){var r,n,t,a=e.length,i=" stayed here",s=" other friend";return a>1&&e.sort(),1===a?r=e[0]+" has"+i:2===a?r=e.join(" and ")+" have"+i:a>2?(n=e.slice(0,2),t=a-2,r=n.join(", ")+" and "+t+s+(t>1?"s":"")+" have"+i):void 0}};
},{}],4:[function(require,module,exports){
"use strict";function generateRoomData(e,r){if(e&&r&&"string"==typeof e&&Array.isArray(r)){var a={name:pretifyName(e),message:generateMessage(r),id:generateId(e)};return a}}var getRoomsData=require("./process-data"),generateMessage=require("./generate-friends-message"),generateId=require("./id-generator"),pretifyName=require("./pretify-name"),roomsData=getRoomsData();module.exports=function(){var e,r,a,t=[];for(e in roomsData)roomsData.hasOwnProperty(e)&&(r=e,roomsData[e].hasOwnProperty("friends")&&(a=roomsData[e].friends,t.push(generateRoomData(r,a))));return t};
},{"./generate-friends-message":3,"./id-generator":5,"./pretify-name":6,"./process-data":7}],5:[function(require,module,exports){
"use strict";module.exports=function(e){if(e&&""!==e&&"string"==typeof e){var r=e.replace(/\s/,"-");return r.toLowerCase()}};
},{}],6:[function(require,module,exports){
"use strict";module.exports=function(e){if(e&&""!==e&&"string"==typeof e){var r=e.replace(/(\-|\s)/," "),t=r.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()});return t}};
},{}],7:[function(require,module,exports){
"use strict";var data=require("../friends.json");module.exports=function(r){return r?r:data};
},{"../friends.json":2}],8:[function(require,module,exports){
"use strict";function handleDisplay(e){if(e){var l=$("#"+e);l.siblings("article").hide(),l.fadeIn("slow")}}function handleSelection(e){e&&($("ul.room-list li").removeClass("active"),$('[data-id="'+e+'"]').addClass("active"),$("select.room-list").val(e))}function handleSelect(){var e=$("select.room-list");e.on("change",function(e){var l=e.target.value;handleDisplay(l),handleSelection(l)})}function handleList(){var e=$("ul.room-list");e.children("li").on("click",function(e){var l=$(e.target).attr("data-id");handleDisplay(l),handleSelection(l)})}module.exports=function(){handleList(),handleSelect()};
},{}],9:[function(require,module,exports){
"use strict";function setupNav(e,i){if(e&&i){var a,s,n="";"deluxe"===i.id&&(n=' class="active"'),a='<li data-id="'+i.id+'"'+n+">"+i.name+"</li>",s='<option data-id="'+i.id+'" value="'+i.id+'">'+i.name+"</option>",$("ul"+e).append(a),$("select"+e).append(s)}}function setupFriendsMessage(e){e&&e.message&&$("#"+e.id+" .friends-info").append(e.message).toggleClass("hidden")}var config=require("./generate-room-data");module.exports=function(){var e=".room-list",i=config(),a=i.length,s=0;if($(e).length)for(s;a>s;s+=1)setupNav(e,i[s]),setupFriendsMessage(i[s])};
},{"./generate-room-data":4}]},{},[1])


//# sourceMappingURL=default.map.json