(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "context": "You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math.",
        "question": "Find some examples of how math learning is incorporated at Washington University Nursery School.",
        "tag": "math"
    },
    {
        "context": "You are investigating pre-school options for your 4 year old. Both you and your spouse work, so you need to fully understand what scheduling constraints each option involves. One of your schools of interest is the Washington University Nursery School.",
        "question": "When does school start and end each day? What is the longest period of time that your child can be there?",
        "tag": "school_day"
    },
    {
        "context": "You are investigating pre-school options for your 3.5 year old. You’ve been told that one of the hallmarks of a good program is teachers who have been there for a long time. You want your child to attend in the mornings only.",
        "question": "Which teachers would your child have and how long have they been at the school?",
        "tag": "teacher_tenure"
    },
    {
        "context": "You are starting to look at summer camp options and have heard good things about Washington University Nursery School for young children.",
        "question": "What are the daily camp hours? Are there any extended day opportunities?",
        "tag": "summer_camp"
    },
    {
        "context": "You are investigating pre-school options for your spirited 3 year old and want to understand their approach to discipline.",
        "question": "How do teachers at Washington University approach discipline?",
        "tag": "discipline"
    },
    {
        "context": "Your daughter is in the Teddy Bear class at Washington University Nursery School. She came home this week singing a song in Spanish about shapes, but you are pretty sure that she has some of the words wrong.",
        "question": "What are the correct lyrics?",
        "tag": "spanish_song"
    },
    {
        "context": "It is mid-December and you are thinking about things to do over your daughter's upcoming school break. She is 3 years old and attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
        "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
        "tag": "books"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You want to accept the offer of admission.",
        "question": "Figure out what you need to do at this time to finalize your child’s place at the school.",
        "tag": "admission_2"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You need to pay one month of tuition as a deposit.",
        "question": "Find out how much one month of tuition is and whether or not it is possible to pay online.",
        "tag": "deposit"
    },
    {
        "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
        "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
        "tag": "help"
    },
    {
        "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
        "question": "How does the Washington University Nursery School handle communicating with parents?",
        "tag": "communication"
    },
    {
        "context": "It’s mid-December and your son, age 4, came home all excited about science class. They learned a new word, but he can’t actually remember the word they learned about.",
        "question": "What was the topic of his recent science class?",
        "tag": "science"
    },
    {
        "context": "You are selecting a pre-school, but want to be sure that your daughter will be ready for kindergarten when it’s time.",
        "question": "How does the nursery school assess children’s knowledge, support their growth, and share the results with parents?",
        "tag": "parent_teacher_conference"
    },
    {
        "context": "You have recently accepted a position for your child for the coming school year at the Washington University Nursery School. Up to this point, your child has been at home and you are somewhat worried about the transition.",
        "question": "How does the nursery school support kids’ transitions into school?",
        "tag": "orientation"
    }
]

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('data loaded.');
var urlParams = new URL(window.location.href).searchParams;
exports.urlData = {
    raw: urlParams.toString(),
    assignmentID: urlParams.get('assignmentId'),
    hitID: urlParams.get('hitId'),
    workerID: urlParams.get('workerId'),
    submitTo: urlParams.get('turkSubmitTo'),
};
var Data = /** @class */ (function () {
    function Data(rawMturkURLData) {
        this.logs = {};
        this.data = {};
        this.errors = [];
        this.urlData = rawMturkURLData;
    }
    Data.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return Data;
}());
exports.Data = Data;
exports.data = new Data(exports.urlData);
Object.assign(window, { data: exports.data });

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
console_wrapper_1.log("event loaded.", 2 /* BASIC */);
function objectToTrackerEvent(obj, action) {
    obj.action = action;
    obj.time = funcs_1.now();
}
exports.objectToTrackerEvent = objectToTrackerEvent;
function isTrackerEvent(obj) {
    return obj.action !== undefined && obj.time !== undefined;
}
exports.isTrackerEvent = isTrackerEvent;
var BaseTrackerEvent = /** @class */ (function () {
    function BaseTrackerEvent(action, eventInitDict) {
        this.custEv = new CustomEvent(action, eventInitDict);
        this.action = action;
        this.time = funcs_1.now();
    }
    Object.defineProperty(BaseTrackerEvent.prototype, "detail", {
        get: function () {
            return this.custEv.detail;
        },
        enumerable: true,
        configurable: true
    });
    return BaseTrackerEvent;
}());
exports.BaseTrackerEvent = BaseTrackerEvent;
// tslint:disable-next-line: max-classes-per-file
var ClickEvent = /** @class */ (function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(x, y, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.x = x;
        _this.detail.y = y;
        _this.detail.id = id;
        return _this;
    }
    return ClickEvent;
}(BaseTrackerEvent));
exports.ClickEvent = ClickEvent;
// tslint:disable-next-line: max-classes-per-file
var ButtonEvent = /** @class */ (function (_super) {
    __extends(ButtonEvent, _super);
    function ButtonEvent(key, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.key = key;
        _this.detail.id = id;
        return _this;
    }
    return ButtonEvent;
}(BaseTrackerEvent));
exports.ButtonEvent = ButtonEvent;
// tslint:disable-next-line: max-classes-per-file
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent(url, extra, eventInitDict) {
        var _this = _super.call(this, "history" /* HISTORY */, eventInitDict) || this;
        _this.detail.url = url;
        _this.detail.extra = extra;
        return _this;
    }
    return HistoryEvent;
}(BaseTrackerEvent));
exports.HistoryEvent = HistoryEvent;

},{"../utils/console_wrapper":16,"../utils/funcs":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var event_1 = require("./event");
console_wrapper_1.log("receiver loaded.", 2 /* BASIC */);
var EventReceiver = /** @class */ (function () {
    function EventReceiver() {
        this.map = new Map();
        this.emitter = new EventTarget();
    }
    EventReceiver.prototype.register = function (eventType, callback) {
        this.emitter.addEventListener(eventType, function (event) {
            var trackEv = event
                .detail;
            if (event_1.isTrackerEvent(trackEv) && callback) {
                callback(trackEv);
            }
        });
        if (callback) {
            this.map.set(eventType, callback);
        }
    };
    EventReceiver.prototype.doEvent = function (event) {
        var callback = this.map.get("" + event.action);
        if (callback) {
            callback(event);
        }
    };
    return EventReceiver;
}());
exports.EventReceiver = EventReceiver;

},{"../utils/console_wrapper":16,"./event":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("../router/router");
var console_wrapper_1 = require("../utils/console_wrapper");
var history_1 = require("./../router/history");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log("banner loaded.", 2 /* BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () {
        TopBanner.showing ? TopBanner.hide() : TopBanner.show();
    };
    TopBanner.setup = function () {
        document_1.D.addEventListener(elements_1.Elements.ddArrow, "click", TopBanner.doDisplayChange);
    };
    TopBanner.showing = true;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
document_1.D.addEventListener("mturk-top-banner-back", "click", function (e) {
    if (history_1.History.canBackward()) {
        router_1.Router.loadWithPathPrefix(history_1.History.backward());
    }
    else {
        alert("There is no page history to go back for at this time!");
    }
});

},{"../router/router":14,"../utils/console_wrapper":16,"./../router/history":13,"./document":6,"./elements":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./../utils/console_wrapper");
console_wrapper_1.log("document loaded.", 2 /* BASIC */);
var D = /** @class */ (function () {
    function D() {
    }
    D.elem = function (elem) {
        if (typeof elem === "string") {
            return D.id(elem);
        }
        else {
            return elem;
        }
    };
    D.display = function (elem, show) {
        elem = D.elem(elem);
        if (show) {
            elem.classList.remove("none");
            elem.classList.add("display");
        }
        else {
            elem.classList.remove("display");
            elem.classList.add("none");
        }
    };
    D.id = function (id) {
        var element = D.doc.getElementById(id);
        if (element === null) {
            throw new Error("Element was not found, id: <" + id + ">.");
        }
        else {
            return element;
        }
    };
    D.claz = function (claz) {
        return D.doc.getElementsByClassName(claz);
    };
    D.tag = function (tag) {
        return D.doc.getElementsByTagName(tag);
    };
    D.image = function (id, url) {
        console_wrapper_1.error(function () { return D.id(id).setAttribute("src", url); });
    };
    D.addEventListener = function (elem, type, listener) {
        elem = this.elem(elem);
        var wrapperFunc = function (e) {
            try {
                listener(e);
            }
            catch (err) {
                console.error(err);
            }
        };
        elem.addEventListener(type, wrapperFunc);
        return wrapperFunc;
    };
    D.each = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            apply(children[i]);
        }
    };
    D.eachRecur = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            apply(child);
            D.eachRecur(child, apply);
        }
    };
    D.create = function (tagName, options) {
        return document.createElement(tagName, options);
    };
    D.doc = document;
    return D;
}());
exports.D = D;

},{"./../utils/console_wrapper":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
console_wrapper_1.log('element loaded.', 2 /* BASIC */);
/**
 * These are elements that are in every single project. Even if they are not used they should
 * be place in the project and display should be set to none. This simplifies configuration
 * and some common functions and allows less null checks to be performed overall. If the
 * element does not exist at run time an empty div with that id is created and its display
 * is set to none then appended to the body.
 */
/**
 * Attempts to get an element, if unsuccessful, creates div with id and appends to body.
 *
 * @param id - the id of the element to retrieve.
 */
function makeElemIfNotExist(id) {
    var elem;
    try {
        elem = document_1.D.id(id);
    }
    catch (err) {
        elem = document_1.D.create('div');
        elem.id = id;
        elem.style.display = 'none';
        document.body.append(elem);
    }
    return elem;
}
/**
 * Commonly accessed elements, allows for clearer dom manip on these elements.
 */
exports.Elements = {
    document: document_1.D.doc.documentElement,
    wrapper: makeElemIfNotExist('wrapper'),
    htmlLoc: makeElemIfNotExist('html-loc'),
    innerBody: makeElemIfNotExist('inner-body'),
    ddDown: makeElemIfNotExist('mturk-top-banner-drop-down-button'),
    ddUp: makeElemIfNotExist('mturk-top-banner-collapse-button'),
    ddContent: makeElemIfNotExist('mturk-top-banner-drop-down-content'),
    backButton: makeElemIfNotExist('mturk-top-banner-back'),
    ddArrow: makeElemIfNotExist('mturk-top-banner-arrow'),
    mtTopBannerText: makeElemIfNotExist('mturk-top-banner-text'),
    mtScenarioContext: makeElemIfNotExist('scenario_context'),
    mtScenarioQuestion: makeElemIfNotExist('scenario_question'),
    logFileInput: makeElemIfNotExist('mturk-top-banner-drop-down-content-log-file-input'),
    submitForm: makeElemIfNotExist('mturk-submit-form'),
    modal: makeElemIfNotExist('modal'),
};

},{"../utils/console_wrapper":16,"./document":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var elements_1 = require("./../dom/elements");
console_wrapper_1.log('html loc loaded.', 2 /* BASIC */);
var AppEnum;
(function (AppEnum) {
    AppEnum["INFORMATION_FORAGING"] = "information-foraging";
    AppEnum["COGNITIVE_LOAD"] = "cognitive-load";
    AppEnum["GENDER_MAG"] = "gender-mag";
    AppEnum["ERROR"] = "error";
})(AppEnum = exports.AppEnum || (exports.AppEnum = {}));
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["REAL"] = "real";
    ModeEnum["SANDBOX"] = "sandbox";
    ModeEnum["TEST"] = "test";
    ModeEnum["ERROR"] = "error";
})(ModeEnum = exports.ModeEnum || (exports.ModeEnum = {}));
var HTMLLoc = /** @class */ (function () {
    function HTMLLoc() {
    }
    HTMLLoc.setup = function () {
        HTMLLoc.app = HTMLLoc.elem.dataset.app || AppEnum.ERROR;
        HTMLLoc.mode =
            HTMLLoc.elem.dataset.mode || ModeEnum.ERROR;
        HTMLLoc.scenario = HTMLLoc.elem.dataset.scenario || 'error';
    };
    HTMLLoc.elem = elements_1.Elements.htmlLoc;
    return HTMLLoc;
}());
exports.HTMLLoc = HTMLLoc;

},{"../utils/console_wrapper":16,"./../dom/elements":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('modal loaded.', 2 /* BASIC */);
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.display = function (src) {
        Modal.elem.setAttribute('style', "left: " + Math.round(window.pageXOffset) + "px; top: " + Math.round(window.pageYOffset) + "px;");
        Modal.elem.classList.replace('hide-modal', 'show-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = src;
        });
        document.body.classList.add('noscroll');
    };
    Modal.hide = function () {
        Modal.elem.classList.replace('show-modal', 'hide-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = '';
        });
        document.body.classList.remove('noscroll');
    };
    Modal.elem = elements_1.Elements.modal;
    return Modal;
}());
exports.Modal = Modal;
document_1.D.addEventListener(Modal.elem, 'click', function (e) {
    Modal.hide();
});
document_1.D.each(Modal.elem, function (node) {
    document_1.D.addEventListener(node, 'click', function (e) {
        e.preventDefault();
    });
});

},{"./../utils/console_wrapper":16,"./document":6,"./elements":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("./../utils/funcs");
console_wrapper_1.log('scroll loaded.', 2 /* BASIC */);
/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
var Scroll = /** @class */ (function () {
    function Scroll(endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.dispatchEvent(new CustomEvent('scroll'));
            complete(args);
        };
    }
    Scroll.callback = function (endPos, duration, complete) {
        if (duration === void 0) { duration = 200; }
        if (complete === void 0) { complete = funcs_1.noop; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        var oldComplete = complete;
        complete = function () {
            Scroll.running = false;
            console_wrapper_1.error(oldComplete);
        };
        this.instance.update(endPos, duration, complete).attemptScroll();
    };
    Scroll.promise = function (endPos, duration) {
        var _this = this;
        if (duration === void 0) { duration = 200; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        return new Promise(function (resolve, reject) {
            try {
                var runResolver = function () {
                    Scroll.running = false;
                    resolve();
                };
                _this.instance
                    .update(endPos, duration, runResolver)
                    .attemptScroll();
            }
            catch (err) {
                Scroll.running = false;
                reject(err);
            }
        });
    };
    Object.defineProperty(Scroll, "isRunning", {
        get: function () {
            return Scroll.running;
        },
        enumerable: true,
        configurable: true
    });
    Scroll.prototype.update = function (endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = complete;
        return this;
    };
    Scroll.prototype.calcScrollAmount = function () {
        var curTime = funcs_1.now();
        var steps = Math.max(1, (this.duration - curTime) / Scroll.STEP_IN_MS);
        var curPos = window.pageYOffset;
        return Math.ceil((this.endPos - curPos) / steps);
    };
    Scroll.prototype.scroll = function () {
        window.scroll(0, this.calcScrollAmount());
        if (window.pageYOffset === this.endPos) {
            this.complete();
        }
        else {
            requestAnimationFrame(this.scroll);
        }
    };
    Scroll.prototype.attemptScroll = function () {
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, this.endPos);
        }
        this.scroll();
    };
    Scroll.STEP_IN_MS = 17;
    Scroll.running = false;
    Scroll.instance = new Scroll(0, 0, funcs_1.noop);
    return Scroll;
}());
exports.Scroll = Scroll;

},{"../utils/console_wrapper":16,"./../utils/funcs":17}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var funcs_1 = require("../utils/funcs");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var q_params_1 = require("./../utils/q_params");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('submit form loaded.', 2 /* BASIC */);
var k = 'NcF2WRkUbf5tzj4bIvI981FqmS6pMlO83g2j7u5R';
var gate = 'https://2ykopq1oha.execute-api.us-east-1.amazonaws.com/PROD/logs';
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        SubmitForm.submitFunc = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, qp, resp, jsonResp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        allowed = allowSubmission.allow();
                        if (!(allowed === null)) return [3 /*break*/, 3];
                        qp = new URL(window.location.href).searchParams;
                        data_1.data.urlData.raw = window.location.href;
                        data_1.data.urlData.assignmentID = qp.get('assignmentId');
                        data_1.data.urlData.hitID = qp.get('hitId');
                        data_1.data.urlData.workerID = qp.get('workerId');
                        data_1.data.urlData.submitTo =
                            qp.get('turkSubmitTo') + '/mturk/externalSubmit';
                        if (data_1.data.urlData.assignmentID !== null) {
                            document_1.D.id('assignment-id').value =
                                data_1.data.urlData.assignmentID;
                        }
                        if (data_1.data.urlData.hitID !== null) {
                            document_1.D.id('hit-id').value =
                                data_1.data.urlData.hitID;
                        }
                        elements_1.Elements.submitForm.action = data_1.data.urlData
                            .submitTo;
                        allowSubmission.preSubmit();
                        return [4 /*yield*/, fetch(gate, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-key': k,
                                },
                                body: JSON.stringify({
                                    sandbox: q_params_1.params.sandbox,
                                    wustl_key: q_params_1.params.wustl_key,
                                    project: q_params_1.params.project,
                                    iteration: q_params_1.params.iteration,
                                    tag: q_params_1.params.tag,
                                    assignmentID: data_1.data.urlData.assignmentID,
                                    hitID: data_1.data.urlData.hitID,
                                    workerID: data_1.data.urlData.workerID,
                                    log: data_1.data.serialize(),
                                }),
                            })];
                    case 1:
                        resp = _a.sent();
                        console.log(resp.status);
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        jsonResp = _a.sent();
                        console.log(jsonResp);
                        if (resp.status !== 200) {
                            alert('You made a bad request with your submission. The server thinks that you made this error: ' +
                                jsonResp.error);
                            return [2 /*return*/];
                        }
                        SubmitForm.elem.removeEventListener('submit', SubmitForm.submitFunc);
                        SubmitForm.elem.submit();
                        return [3 /*break*/, 4];
                    case 3:
                        alert(allowed);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        SubmitForm.elem.addEventListener('submit', SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;

},{"../utils/funcs":17,"./../data-log/data":2,"./../utils/console_wrapper":16,"./../utils/q_params":20,"./document":6,"./elements":7}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var banner_1 = require("./banner");
var html_loc_1 = require("./html_loc");
var TrackerElements = /** @class */ (function () {
    function TrackerElements() {
    }
    TrackerElements.setupTrackerElements = function () {
        // setup dom elements
        banner_1.TopBanner.setup();
        html_loc_1.HTMLLoc.setup();
    };
    return TrackerElements;
}());
exports.TrackerElements = TrackerElements;

},{"./banner":5,"./html_loc":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tracker_1 = require("./../tracker/tracker");
function newHistoryEntry(currURL, hasPrevURL, prevEntry, extra) {
    tracker_1.Tracker.getEventDispatchFunc('history')({ url: currURL, extra: extra });
    return {
        currURL: currURL,
        hasPrevURL: hasPrevURL,
        prevEntry: prevEntry,
        extra: extra,
        nextEntries: [],
    };
}
var History = /** @class */ (function () {
    function History() {
    }
    History.forward = function (url, extra) {
        var histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    };
    History.canBackward = function () {
        var _a, _b;
        return (History.currhistory.hasPrevURL &&
            !((_b = (_a = History.currhistory.prevEntry) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.wrapper));
    };
    History.backward = function () {
        if (!History.canBackward()) {
            throw new Error('Cannot go back any further.');
        }
        console.log(History.currhistory.prevEntry);
        var prevEntry = History.currhistory.prevEntry;
        var nextURL = prevEntry.currURL;
        var histEnt = newHistoryEntry(nextURL, prevEntry.hasPrevURL, prevEntry.prevEntry, { back: true });
        History.currhistory = histEnt;
        return nextURL;
    };
    History.setup = function (url, extra) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    };
    return History;
}());
exports.History = History;
window.h = History;

},{"./../tracker/tracker":15}],14:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../dom/document");
var elements_1 = require("../dom/elements");
var modal_1 = require("../dom/modal");
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
var html_loader_1 = require("../utils/html_loader");
var history_1 = require("./history");
console_wrapper_1.log('router loaded.', 2 /* BASIC */);
function testOn(elem, config) {
    return (elem.tagName === config.module &&
        (config.mode === 1 /* ON */ ||
            config.mode === 2 /* STANDARD_ALLOWANCES */));
}
function testAllowance(config) {
    return config.mode === 2 /* STANDARD_ALLOWANCES */;
}
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.configure = function (configs, pathPrefix) {
        configs.forEach(function (config) {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
        Router.pathPrefix = pathPrefix;
    };
    Router.setup = function (elem) {
        document_1.D.eachRecur(elem, function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(Router.configs.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var config = _c.value;
                    if (testOn(node, config)) {
                        config.setup(config, node);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Router.STANDARD_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
            var target = e.target;
            var url = target.href;
            history_1.History.forward(Router.getPathName(url));
            var ret = html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc);
            window.dispatchEvent(new CustomEvent('newPageLoad'));
            return ret;
        });
    };
    Router.ON_COMPLETE_SLL = function (post) {
        var _this = this;
        return function (e) {
            console_wrapper_1.error(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Router.STANDARD_LINK_LISTENER(e)];
                        case 1:
                            _a.sent();
                            post(e);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    };
    Router.IMAGE_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
        });
    };
    Router.FORM_OFF_LISTENER = function (e) {
        e.preventDefault();
        console.error('All forms except for the one in the top header are inactive.');
    };
    Router.defaultAllowancesOn = function () {
        Router.registerAllowance({ regex: Router.EMPTY, func: Router.EMPTY_RESPONDER }, { regex: Router.HASH_TAGS, func: Router.HASH_TAG_RESPONDER }, { regex: Router.AT_SYMBOL, func: Router.AT_SYMBOL_RESPONDER });
    };
    Router.defaultAllowancesOff = function () {
        Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS, Router.AT_SYMBOL);
    };
    Router.registerAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) {
            return Router.linkAllowances.set(regex.regex, regex.func);
        });
    };
    Router.unregisterAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) { return Router.linkAllowances.delete(regex); });
    };
    Router.clearAllowances = function () {
        Router.linkAllowances.clear();
    };
    Router.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        ret = _a.sent();
                        window.dispatchEvent(new CustomEvent('newPageLoad'));
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Router.loadWithPathPrefix = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = html_loader_1.HTMLLoader.loadURL(Router.pathPrefix + page, elements_1.Elements.htmlLoc);
                window.dispatchEvent(new CustomEvent('newPageLoad'));
                return [2 /*return*/, ret];
            });
        });
    };
    Router.upgradeConfig = function (config) {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    };
    Router.getPathName = function (url) {
        var ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    };
    Router.HASH_TAGS = new RegExp('#');
    Router.EMPTY = new RegExp('^$');
    Router.AT_SYMBOL = new RegExp('@');
    Router.HASH_TAG_RESPONDER = funcs_1.noop;
    Router.EMPTY_RESPONDER = function (event) { return event.preventDefault(); };
    Router.AT_SYMBOL_RESPONDER = function (event) {
        return event.preventDefault();
    };
    Router.pathPrefix = '';
    Router.SetupFunctions = {
        A: function (config, elem) {
            var aNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_1 = true;
                var href_1 = aNode.href;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = regex.test(href_1);
                    passesRegexTest_1 = passesRegexTest_1 && !test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_1) {
                    if (href_1.substr(href_1.length - 3) === 'pdf') {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            e.preventDefault();
                            modal_1.Modal.display(href_1);
                        });
                    }
                    else {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            return Router.STANDARD_LINK_LISTENER(e);
                        });
                    }
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.STANDARD_LINK_LISTENER(e);
                });
            }
        },
        IMG: function (config, elem) {
            var imgNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_2 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(imgNode.src);
                    passesRegexTest_2 = passesRegexTest_2 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_2) {
                    document_1.D.addEventListener(elem, 'click', function (e) {
                        return Router.IMAGE_LINK_LISTENER(e);
                    });
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.IMAGE_LINK_LISTENER(e);
                });
            }
        },
        FORM: function (config, elem) {
            var formNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_3 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(formNode.src);
                    passesRegexTest_3 = passesRegexTest_3 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_3) {
                    document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
                }
            }
            else {
                document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
            }
        },
    };
    Router.configs = new Map();
    Router.linkAllowances = new Map();
    Router.pathRegex = /\/([\w]+.html)/;
    return Router;
}());
exports.Router = Router;

},{"../dom/document":6,"../dom/elements":7,"../dom/modal":9,"../utils/console_wrapper":16,"../utils/funcs":17,"../utils/html_loader":18,"./history":13}],15:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
console_wrapper_1.log('tracker loaded.', 2 /* BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.context;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(' '),
                sub.lastIndexOf('.'),
                sub.lastIndexOf(','),
                sub.lastIndexOf('?'),
                sub.lastIndexOf('!'),
            ];
            var ind = Math.max.apply(Math, __spread(inds));
            sub = sub.substring(0, ind) + '...';
        }
        console.log(scen);
        console.log('loaded scen');
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        console_wrapper_1.setDebugLevel(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === 'object') {
                if (!event_1.isTrackerEvent(evData)) {
                    event_1.objectToTrackerEvent(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;

},{"../data-log/event":3,"../data-log/receiver":4,"../dom/elements":7,"../dom/tracker_elems":12,"../utils/console_wrapper":16,"./../data-log/data":2,"./../dom/submit_form":11}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./../data-log/data");
log("console wrapper loaded.", 2 /* BASIC */);
function error(func) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, errorHO(func)()];
        });
    });
}
exports.error = error;
function errorHO(func) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, func(args)];
                }
                catch (error) {
                    data_1.data.errors.push(error);
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
}
exports.errorHO = errorHO;
var debugLevel = 2 /* BASIC */;
function setDebugLevel(level) {
    debugLevel = level;
}
exports.setDebugLevel = setDebugLevel;
function log(message, importance) {
    if (debugLevel >= importance) {
        console.log(message);
    }
}
exports.log = log;

},{"./../data-log/data":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("funcs loaded.", 2 /* BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
exports.noop = noop;
function now() {
    return new Date().getTime();
}
exports.now = now;

},{"./console_wrapper":16}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../dom/document");
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
console_wrapper_1.log('html loader loaded.', 2 /* BASIC */);
var HTMLLoader = /** @class */ (function () {
    function HTMLLoader() {
    }
    HTMLLoader.finish = function () {
        HTMLLoader.finished = true;
        HTMLLoader.flattenTSLoadTags();
    };
    HTMLLoader.isFinished = function () {
        return HTMLLoader.finished;
    };
    HTMLLoader.cacheHTML = function (name, content) {
        if (HTMLLoader.finished) {
            throw new Error('Cannot cache new HTML entities after the application has been started.');
        }
        var tsl = document.createElement('ts-load');
        tsl.dataset.name = name;
        tsl.innerHTML = content;
        this.CACHE[name] = tsl;
    };
    HTMLLoader.registerPostLoadFunc = function (func) {
        console_wrapper_1.log('regsiter post load function', 3 /* DETAILED */);
        HTMLLoader.postLoadFunc = func;
    };
    HTMLLoader.load = function (html, elem) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin load', 3 /* DETAILED */);
                var context = document_1.D.elem(elem);
                var range = document.createRange();
                range.selectNodeContents(context);
                var frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, 'script');
                HTMLLoader.loadAllCachedElements(frag);
                context.innerHTML = '';
                context.appendChild(frag);
                console_wrapper_1.log('end load', 3 /* DETAILED */);
                HTMLLoader.postLoadFunc();
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.loadURL = function (url, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = HTMLLoader).load;
                        return [4 /*yield*/, HTMLLoader.getHTML(url)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), elem])];
                }
            });
        });
    };
    HTMLLoader.getHTML = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin request', 3 /* DETAILED */);
                var request_1 = new XMLHttpRequest();
                request_1.open('GET', url, true);
                request_1.send(null);
                request_1.onreadystatechange = function () {
                    if (request_1.readyState === 4) {
                        console_wrapper_1.log('resolve request', 3 /* DETAILED */);
                        resolve(request_1.responseText);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.removeTagsFromDocumentFragment = function (frag, tagName) {
        frag.querySelectorAll(tagName).forEach(function (tag) { return frag.removeChild(tag); });
    };
    HTMLLoader.flattenTSLoadTags = function () {
        console_wrapper_1.log('Flattening', 3 /* DETAILED */);
        var s = new Set();
        Object.keys(HTMLLoader.CACHE).forEach(function (name) {
            return (HTMLLoader.CACHE[name] = HTMLLoader.flattenTSLoadTag(HTMLLoader.getCachedContent(name), s, 0));
        });
    };
    HTMLLoader.multipleTabs = function (n) {
        var ret = '';
        for (var i = 0; i < n; i++) {
            ret += '\t';
        }
        return ret;
    };
    HTMLLoader.flattenTSLoadTag = function (elem, flattened, count) {
        var tabs = HTMLLoader.multipleTabs(count);
        if (count > 100) {
            alert('Check the console, an error has occurred.');
            throw new Error('It seems like you might have infinitely recursively nested tags.' +
                '\nHere are all of the tags that have been flattened so far: ' +
                flattened +
                '\nHere is the name of the current element: ' +
                elem.getAttribute('data-name'));
        }
        var name = elem.getAttribute('data-name');
        if (name === null) {
            return null;
        }
        var content = HTMLLoader.getCachedContent(name);
        if (content === null) {
            return null;
        }
        if (flattened.has(name)) {
            return content;
        }
        content.querySelectorAll('script').forEach(function (e) { return e.remove(); });
        content.querySelectorAll('ts-load').forEach(function (e) {
            var child = HTMLLoader.flattenTSLoadTag(e, flattened, count + 1);
            if (child !== null) {
                e.replaceWith(child);
            }
        });
        flattened.add(name);
        return content;
    };
    HTMLLoader.getCachedContent = function (name) {
        if (name === undefined || name === null) {
            return null;
        }
        var content = HTMLLoader.CACHE[name];
        if (content === undefined || content === null) {
            return null;
        }
        return content.cloneNode(true);
    };
    HTMLLoader.loadAllCachedElements = function (frag) {
        frag.querySelectorAll('ts-load').forEach(function (elem) {
            var name = elem.getAttribute('data-name');
            var content = HTMLLoader.getCachedContent(name);
            if (content != null) {
                elem.replaceWith(content);
            }
        });
    };
    HTMLLoader.CACHE = {};
    HTMLLoader.finished = false;
    HTMLLoader.postLoadFunc = funcs_1.noop;
    return HTMLLoader;
}());
exports.HTMLLoader = HTMLLoader;

},{"../dom/document":6,"./console_wrapper":16,"./funcs":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("id generator loaded", 2 /* BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () {
        IDGenerator.idCount = 0;
    };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: true,
        configurable: true
    });
    IDGenerator.applyID = function (elem) {
        elem.id = elem.id ? elem.id : IDGenerator.next;
    };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) {
        document_1.D.eachRecur(elem, this.applyID);
    };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () {
        IDGenerator.applyRecur(elements_1.Elements.htmlLoc);
    };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = "auto_gen_id_unq_";
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;

},{"../dom/elements":7,"./../dom/document":6,"./console_wrapper":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qParams = new URL(window.location.href).searchParams;
exports.params = {
    wustl_key: '',
    sandbox: false,
    project: '',
    iteration: 0,
    tag: '',
};
try {
    qParams.forEach(console.log);
    if (['wustl_key', 'sandbox', 'project', 'iteration', 'tag'].every(function (key) {
        console.log('key: ' + qParams.has(key));
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get('wustl_key');
        exports.params.sandbox = qParams.get('sandbox') === 'true';
        exports.params.project = qParams.get('project');
        exports.params.iteration = parseInt(qParams.get('iteration'), 10);
        exports.params.tag = qParams.get('tag');
    }
    else {
        console.log('missing query params');
        alert('This HIT is missing neccessary metadata, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
    }
}
catch (e) {
    console.log(e);
    alert(e);
    alert('This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
}

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("ready loaded", 2 /* BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    console_wrapper_1.log("document is ready", 3 /* DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
exports.isReady = isReady;
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}
exports.waitUntilReady = waitUntilReady;

},{"./console_wrapper":16}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-var-requires
exports.scenarios = require('./../../../../scenarios/scenarios.json');
window.scenarios = exports.scenarios;

},{"./../../../../scenarios/scenarios.json":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./../core/dom/document");
var Accordion = /** @class */ (function () {
    function Accordion(outer) {
        var _this = this;
        this.outer = outer;
        document_1.D.addEventListener(outer, "click", function () {
            /* Toggle between adding and removing the "active" class,
                      to highlight the button that controls the panel */
            _this.outer.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = _this.outer.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
    Accordion.setupAll = function () {
        Accordion.discardAll();
        var accordions = document_1.D.claz("accordion");
        for (var accIndex = 0; accIndex < accordions.length; ++accIndex) {
            var elem = accordions.item(accIndex);
            if (elem == null) {
                continue;
            }
            Accordion.accordions.push(new Accordion(elem));
        }
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.accordions = [];
    return Accordion;
}());
exports.Accordion = Accordion;

},{"./../core/dom/document":6}],24:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_loader_1 = require("../core/utils/html_loader");
var accordion_1 = require("./accordion");
var html_imports_1 = require("./html-imports");
var slideshow_1 = require("./slideshow");
// Put all function calls that need to be made on every page load inside the setupAll function body.
function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    window.onscroll = function () { setupSticky(); };
    var banner = document.querySelector('#mturk-top-banner-drop-down-content');
    var header = document.getElementById("main-menu-container");
    console.log(banner);
    // if (banner?.classList.contains("none")) {
    //   header?.classList.remove("banner");
    // }
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            var _a, _b, _c, _d, _e, _f;
            if (mutation.type == "attributes") {
                if ((_a = header) === null || _a === void 0 ? void 0 : _a.classList.contains("banner")) {
                    (_b = header) === null || _b === void 0 ? void 0 : _b.classList.remove("banner");
                    console.log("banner removed");
                }
                if ((_c = banner) === null || _c === void 0 ? void 0 : _c.classList.contains("display")) {
                    (_d = header) === null || _d === void 0 ? void 0 : _d.classList.add("banner");
                    console.log("banner added");
                }
                if ((_e = banner) === null || _e === void 0 ? void 0 : _e.classList.contains("none")) {
                    (_f = header) === null || _f === void 0 ? void 0 : _f.classList.remove("banner");
                }
            }
        });
    });
    if (banner != null) {
        observer.observe(banner, {
            attributes: true //configure it to listen to attribute changes
        });
    }
}
exports.PutStudentPageLoadOperationsInsideThisStudentBody = PutStudentPageLoadOperationsInsideThisStudentBody;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function setupSticky() {
    var _a, _b, _c;
    var header = document.getElementById("main-menu-container");
    var sticky = (_a = header) === null || _a === void 0 ? void 0 : _a.offsetTop;
    if (window.pageYOffset > sticky) {
        (_b = header) === null || _b === void 0 ? void 0 : _b.classList.add("sticky");
    }
    else {
        (_c = header) === null || _c === void 0 ? void 0 : _c.classList.remove("sticky");
    }
}
function setupAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                case 1:
                    _a.sent();
                    console.log('reloading');
                    slideshow_1.Slideshow.setupAll();
                    accordion_1.Accordion.setupAll();
                    PutStudentPageLoadOperationsInsideThisStudentBody();
                    console.log('reloaded');
                    return [2 /*return*/];
            }
        });
    });
}
exports.setupAll = setupAll;
html_imports_1.itemsToCache.forEach(function (item) {
    html_loader_1.HTMLLoader.cacheHTML(item.name, item.content);
});
window.HTMLLoader = html_loader_1.HTMLLoader;
console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', function () { return setupAll(); });

},{"../core/utils/html_loader":18,"./accordion":23,"./html-imports":25,"./slideshow":28}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: 'header',
        content: require('./html/header.html'),
    },
    {
        name: 'footer',
        content: require('./html/footer.html'),
    },
];

},{"./html/footer.html":26,"./html/header.html":27}],26:[function(require,module,exports){
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"footer-widgets\">\n      <aside class=\"widget site-contact\">\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\n        <p>6926 Forest Park Parkway</p>\n        <p>St. Louis, MO 63130</p>\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\n        <p>\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\n        </p>\n      </aside>\n\n      <!-- <div class=\"widget-wrapper\">\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\n          <div class=\"textwidget\">\n            <p>\n              Classes meet Mon. through Fri.<br />\n              Morning: 9-11:45 a.m.<br />\n              Afternoon: 12:30-3:15 p.m.<br />\n              Full day: 9 a.m.-3:15 p.m.\n            </p>\n          </div>\n        </aside>\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\n          <div class=\"textwidget\">\n            <p>\n              Experience the innovative approach and dynamic teaching\n              environment of the Washington University Nursery School.\n            </p>\n            <a href=\"files/apply.html\">Register Now</a>\n          </div>\n        </aside>\n      </div> -->\n    </div>\n    <div class=\"site-info\">\n      <p class=\"footer-copyright\">©Washington University in St. Louis</p>\n    </div>\n  </div>\n</footer>\n";

},{}],27:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"321\"\n    height=\"28\"\n    viewBox=\"0 0 321 28\"\n    class=\"washu-logo\"\n    aria-labelledby=\"title\"\n  >\n    <title id=\"title\">Washington University in St. Louis</title>\n    <path\n      fill=\"#FFF\"\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\"\n    ></path>\n    <path\n      fill=\"#007360\"\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\"\n    ></path>\n    <path\n      fill=\"#A51417\"\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\"\n    ></path>\n    <path\n      fill=\"#007360\"\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\"\n    ></path>\n    <path\n      fill=\"#007360\"\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\"\n    ></path>\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\n      <path\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\"\n      ></path>\n      <path\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\"\n      ></path>\n      <path\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\"\n      ></path>\n    </g>\n  </svg>\n</div>\n<header role=\"banner\">\n  <div class=\"container\">\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\n  </div>\n  <div id=\"main-menu-container\" class=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar\">\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"about\" href=\"files/about.html\">About Us </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"staff\" href=\"files/staff.html\">Staff</a>\n            <a\n              id=\"nursery-school-merchandise\"\n              href=\"files/nursery_school_merchandise.html\"\n              >Nursery School Merchandise</a\n            >\n          </div>\n        </div>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"classrooms\" href=\"files/classrooms.html\">Classrooms</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"teddy-bears\" href=\"files/teddy_bears.html\"\n              >Teddy Bears (Ages 2 1/2 - 3, Mornings)</a\n            >\n            <a id=\"panda-bears\" href=\"files/panda_bears.html\"\n              >Panda Bears (Ages 2 1/2 - 3, Afternoons)</a\n            >\n            <a id=\"bear-cubs\" href=\"files/bear_cubs.html\"\n              >Bear Cubs (Ages 3 - 4, Mornings)</a\n            >\n            <a id=\"big-bears\" href=\"files/big_bears.html\"\n              >Big Bears (Ages 4 - 5, Mornings)</a\n            >\n            <a id=\"sun-bears\" href=\"files/sun_bears.html\"\n              >Sun Bears (Ages 4 - 5, Afternoons)</a\n            >\n            <a id=\"bear-tracks\" href=\"files/bear_tracks.html\"\n              >Bear Tracks Extended Day Program</a\n            >\n          </div>\n        </div>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"curriculum\" href=\"files/class_curriculum.html\">Curriculum</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <div class=\"enrich-btn\">\n              <button class=\"dropbtn\" id=\"enrich\">\n                <a\n                  id=\"enrichment-programs\"\n                  href=\"files/enrichment_programs.html\"\n                  >All-Class Enrichment Programs</a\n                >\n              </button>\n              <div class=\"subdrop\">\n                <a id=\"art\" href=\"files/art_suzy.html\">Art</a>\n                <a id=\"music\" href=\"files/music_christina.html\">Music</a>\n                <a id=\"spanish\" href=\"files/spanish_colleen.html\">Spanish</a>\n                <a id=\"science\" href=\"files/nature_becky.html\">Science</a>\n              </div>\n            </div>\n            <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\"\n              >Curriculum Overview</a\n            >\n          </div>\n        </div>\n\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"calendar\" href=\"files/calendar.html\">Calendar</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"curriculum-overview\" href=\"files/hours_of_operation.html\"\n              >School Year Program Hours</a\n            >\n          </div>\n        </div>\n\n        <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\n\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"parent-info\" href=\"files/parent_info.html\"\n              >Parent Information</a\n            >\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"policies-procedures\" href=\"files/policies_procedures.html\"\n              >Policies & Procedures</a\n            >\n            <a\n              id=\"home-school-communication\"\n              href=\"files/home_school_communication.html\"\n              >Home & School Communication</a\n            >\n            <a id=\"special_help\" href=\"files/special_help.html\"\n              >Personalized Help & Special Needs</a\n            >\n            <a id=\"transitioning\" href=\"files/transitioning.html\"\n              >Transitioning Into School</a\n            >\n            <a id=\"get-involved\" href=\"files/get_involved.html\">Get Involved</a>\n            <a id=\"parent-resources\" href=\"files/parent_resources.html\"\n              >Reccomended Reading</a\n            >\n          </div>\n        </div>\n\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"admissions\" href=\"files/apply.html\">Admissions</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"apply\" href=\"files/apply.html\">Apply</a>\n            <a id=\"enroll\" href=\"files/enrollment.html\">Enroll</a>\n            <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n";

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;

},{"./../core/dom/document":6}],29:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var q_params_1 = require("../core/utils/q_params");
var data_1 = require("./../core/data-log/data");
var document_1 = require("./../core/dom/document");
var elements_1 = require("./../core/dom/elements");
var scroll_1 = require("./../core/dom/scroll");
var history_1 = require("./../core/router/history");
var router_1 = require("./../core/router/router");
var tracker_1 = require("./../core/tracker/tracker");
var html_loader_1 = require("./../core/utils/html_loader");
var id_generator_1 = require("./../core/utils/id_generator");
var ready_1 = require("./../core/utils/ready");
var scenarios_1 = require("./../core/utils/scenarios");
var setup = function () { return __awaiter(void 0, void 0, void 0, function () {
    var scenario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ready_1.waitUntilReady()];
            case 1:
                _a.sent();
                scenario = scenarios_1.scenarios.find(function (scen) { return scen.tag === q_params_1.params.tag; });
                if (!q_params_1.params.sandbox) {
                    if (scenario === null || scenario === undefined) {
                        alert('This HIT is broken and cannot be completed at this time.');
                    }
                    else {
                        tracker_1.Tracker.loadScenario(scenario);
                    }
                }
                tracker_1.Tracker.start({
                    keyPrefix: 'information-foraging',
                    bucketName: 'cse-256-log',
                    allowSubmission: {
                        allow: function () {
                            try {
                                var textArea = document_1.D.id('text-area');
                                console.log(textArea.value);
                                if (textArea.value === '') {
                                    return 'You must fill out the text box to turn this HIT in.';
                                }
                                else {
                                    return null;
                                }
                            }
                            catch (error) {
                                console.log(error);
                                return 'There was an error fill out the form and try again.';
                            }
                        },
                        preSubmit: function () {
                            data_1.data.data.response = document_1.D.id('text-area').value;
                            return;
                        },
                    },
                    debugLevel: 1 /* NONE */,
                    setup: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var sElem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // configure router
                                        router_1.Router.defaultAllowancesOn();
                                        router_1.Router.configure([
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "A" /* A */,
                                            },
                                            { mode: 0 /* OFF */, module: "FORM" /* FORM */ },
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "IMG" /* IMG */,
                                            },
                                        ], 'files/');
                                        history_1.History.setup(window.location.href, { wrapper: true });
                                        // configure html loader post operation
                                        html_loader_1.HTMLLoader.finish();
                                        html_loader_1.HTMLLoader.registerPostLoadFunc(function () {
                                            id_generator_1.IDGenerator.reset();
                                            id_generator_1.IDGenerator.attachIdsToAllElements();
                                            router_1.Router.setup(elements_1.Elements.htmlLoc);
                                            scroll_1.Scroll.promise(0);
                                        });
                                        // configure listeners on html loc
                                        document_1.D.addEventListener(elements_1.Elements.htmlLoc, "click" /* CLICK */, function (e) {
                                            var ev = e;
                                            var obj = {
                                                x: ev.clientX,
                                                y: ev.clientY,
                                                id: ev.target.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("click" /* CLICK */)(obj);
                                        });
                                        document_1.D.addEventListener(elements_1.Elements.document, 'keypress', function (e) {
                                            var ev = e;
                                            var obj = {
                                                key: ev.key,
                                                id: ev.srcElement.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("button" /* BUTTON */)(obj);
                                        });
                                        sElem = document.scrollingElement;
                                        document.addEventListener('scroll', function (e) {
                                            var dx = sElem.scrollLeft;
                                            var dy = sElem.scrollTop;
                                            var dtime = new Date().getTime();
                                            if (Math.abs(tracker_1.Tracker.lastPos.x - dx) > 10 ||
                                                (Math.abs(tracker_1.Tracker.lastPos.y - dy) > 10 &&
                                                    dtime - tracker_1.Tracker.lastPos.time > 100)) {
                                                tracker_1.Tracker.lastPos.x = dx;
                                                tracker_1.Tracker.lastPos.y = dy;
                                                tracker_1.Tracker.lastPos.time = dtime;
                                                var obj = { x: dx, y: dy };
                                                tracker_1.Tracker.getEventDispatchFunc("scroll" /* SCROLL */)(obj);
                                            }
                                        });
                                        // configure tracked events
                                        tracker_1.Tracker.registerEvent("history" /* HISTORY */);
                                        tracker_1.Tracker.registerEvent("button" /* BUTTON */);
                                        tracker_1.Tracker.registerEvent("click" /* CLICK */);
                                        tracker_1.Tracker.registerEvent("scroll" /* SCROLL */);
                                        // load first page
                                        return [4 /*yield*/, router_1.Router.load('files/index.html')];
                                    case 1:
                                        // load first page
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
setup();

},{"../core/utils/q_params":20,"./../core/data-log/data":2,"./../core/dom/document":6,"./../core/dom/elements":7,"./../core/dom/scroll":10,"./../core/router/history":13,"./../core/router/router":14,"./../core/tracker/tracker":15,"./../core/utils/html_loader":18,"./../core/utils/id_generator":19,"./../core/utils/ready":21,"./../core/utils/scenarios":22}]},{},[24,29])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9keW5hbWljLWRvbS50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vaHRtbC1pbXBvcnRzLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sL2Zvb3Rlci5odG1sIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sL2hlYWRlci5odG1sIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9zbGlkZXNob3cudHMiLCJzY3JpcHRzL3RzL3RyYWNrZXIvdHJhY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFFaEQsUUFBQSxPQUFPLEdBQWlCO0lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO0lBQ3pCLFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUMzQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDN0IsUUFBUSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ25DLFFBQVEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztDQUMxQyxDQUFDO0FBRUY7SUFNSSxjQUFZLGVBQTZCO1FBTGxDLFNBQUksR0FBNEMsRUFBRSxDQUFDO1FBQ25ELFNBQUksR0FBMkIsRUFBRSxDQUFDO1FBQ2xDLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFJdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7SUFDbkMsQ0FBQztJQUVNLHdCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxvQkFBSTtBQWVKLFFBQUEsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQU8sQ0FBQyxDQUFDO0FBRXRDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxjQUFBLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2hDLDREQUErRDtBQUMvRCx3Q0FBcUM7QUFDckMscUJBQUcsQ0FBQyxlQUFlLGdCQUF1QixDQUFDO0FBYTNDLFNBQWdCLG9CQUFvQixDQUFDLEdBQVEsRUFBRSxNQUFjO0lBQzNELEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsV0FBRyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUhELG9EQUdDO0FBRUQsU0FBZ0IsY0FBYyxDQUFDLEdBQVE7SUFDckMsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztBQUM1RCxDQUFDO0FBRkQsd0NBRUM7QUFFRDtJQUlFLDBCQUFZLE1BQWMsRUFBRSxhQUE4QztRQUN4RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQkFBVyxvQ0FBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFDSCx1QkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksNENBQWdCO0FBZTdCLGlEQUFpRDtBQUNqRDtJQUFnQyw4QkFJOUI7SUFDQSxvQkFDRSxDQUFTLEVBQ1QsQ0FBUyxFQUNULEVBQVUsRUFDVixhQUVhO1FBTmYsWUFRRSx1Q0FBd0IsYUFBYSxDQUFDLFNBSXZDO1FBSEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7O0lBQ3RCLENBQUM7SUFDSCxpQkFBQztBQUFELENBbEJBLEFBa0JDLENBbEIrQixnQkFBZ0IsR0FrQi9DO0FBbEJZLGdDQUFVO0FBb0J2QixpREFBaUQ7QUFDakQ7SUFBaUMsK0JBQTZDO0lBQzVFLHFCQUNFLEdBQVcsRUFDWCxFQUFVLEVBQ1YsYUFBd0U7UUFIMUUsWUFLRSx1Q0FBd0IsYUFBYSxDQUFDLFNBR3ZDO1FBRkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7SUFDdEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVmdDLGdCQUFnQixHQVVoRDtBQVZZLGtDQUFXO0FBWXhCLGlEQUFpRDtBQUNqRDtJQUFrQyxnQ0FHaEM7SUFDQSxzQkFDRSxHQUFXLEVBQ1gsS0FBVyxFQUNYLGFBQTREO1FBSDlELFlBS0UsMkNBQTBCLGFBQWEsQ0FBQyxTQUd6QztRQUZDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0lBQzVCLENBQUM7SUFDSCxtQkFBQztBQUFELENBYkEsQUFhQyxDQWJpQyxnQkFBZ0IsR0FhakQ7QUFiWSxvQ0FBWTs7Ozs7QUMxRXpCLDREQUErRDtBQUMvRCxpQ0FBdUQ7QUFDdkQscUJBQUcsQ0FBQyxrQkFBa0IsZ0JBQXVCLENBQUM7QUFDOUM7SUFBQTtRQUNVLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBeUMsQ0FBQztRQUN2RCxZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQXFCdEMsQ0FBQztJQW5CUSxnQ0FBUSxHQUFmLFVBQWdCLFNBQWlCLEVBQUUsUUFBd0M7UUFDekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFZO1lBQ3BELElBQU0sT0FBTyxHQUFLLEtBQWlDO2lCQUNoRCxNQUFzQixDQUFDO1lBQzFCLElBQUksc0JBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3ZDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFlLEtBQW1CO1FBQ2hDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHNDQUFhOzs7OztBQ0gxQiwyQ0FBMEM7QUFDMUMsNERBQStEO0FBQy9ELCtDQUE4QztBQUM5Qyx1Q0FBK0I7QUFDL0IsdUNBQXNDO0FBQ3RDLHFCQUFHLENBQUMsZ0JBQWdCLGdCQUF1QixDQUFDO0FBQzVDO0lBQUE7SUF1QkEsQ0FBQztJQXRCZSxjQUFJLEdBQWxCO1FBQ0UsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDekIsWUFBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixZQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLFlBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVhLGNBQUksR0FBbEI7UUFDRSxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMxQixZQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLFlBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsWUFBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRWEseUJBQWUsR0FBN0I7UUFDRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBQ2EsZUFBSyxHQUFuQjtRQUNFLFlBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFYyxpQkFBTyxHQUFHLElBQUksQ0FBQztJQUNoQyxnQkFBQztDQXZCRCxBQXVCQyxJQUFBO0FBdkJZLDhCQUFTO0FBeUJ0QixZQUFDLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLFVBQUMsQ0FBQztJQUNyRCxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDekIsZUFBTSxDQUFDLGtCQUFrQixDQUFDLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUMvQztTQUFNO1FBQ0wsS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7S0FDaEU7QUFDSCxDQUFDLENBQUMsQ0FBQzs7Ozs7QUNyQ0gsOERBQXdFO0FBQ3hFLHFCQUFHLENBQUMsa0JBQWtCLGdCQUF1QixDQUFDO0FBQzlDO0lBQUE7SUFvRkEsQ0FBQztJQWpGZSxNQUFJLEdBQWxCLFVBQW1CLElBQXNCO1FBQ3ZDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjthQUFNO1lBQ0wsT0FBTyxJQUFlLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRWEsU0FBTyxHQUFyQixVQUFzQixJQUFzQixFQUFFLElBQWE7UUFDekQsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRWEsSUFBRSxHQUFoQixVQUFpQixFQUFVO1FBQ3pCLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLGlDQUErQixFQUFFLE9BQUksQ0FBQyxDQUFDO1NBQ3hEO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDYSxNQUFJLEdBQWxCLFVBQW1CLElBQVk7UUFDN0IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDYSxLQUFHLEdBQWpCLFVBQWtCLEdBQVc7UUFDM0IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDYSxPQUFLLEdBQW5CLFVBQW9CLEVBQVUsRUFBRSxHQUFXO1FBQ3pDLHVCQUFLLENBQUMsY0FBTSxPQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFYSxrQkFBZ0IsR0FBOUIsVUFDRSxJQUFzQixFQUN0QixJQUFZLEVBQ1osUUFBMkI7UUFFM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBTSxXQUFXLEdBQUcsVUFBQyxDQUFRO1lBQzNCLElBQUk7Z0JBQ0YsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2I7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDO1FBQ0QsSUFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVhLE1BQUksR0FBbEIsVUFBbUIsSUFBc0IsRUFBRSxLQUE2QjtRQUN0RSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFYSxXQUFTLEdBQXZCLFVBQ0UsSUFBc0IsRUFDdEIsS0FBNkI7UUFFN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRWEsUUFBTSxHQUFwQixVQUNFLE9BQVUsRUFDVixPQUFnQztRQUVoQyxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFsRmEsS0FBRyxHQUFhLFFBQVEsQ0FBQztJQW1GekMsUUFBQztDQXBGRCxBQW9GQyxJQUFBO0FBcEZZLGNBQUM7Ozs7O0FDRmQsNERBQStEO0FBQy9ELHVDQUErQjtBQUMvQixxQkFBRyxDQUFDLGlCQUFpQixnQkFBdUIsQ0FBQztBQUM3Qzs7Ozs7O0dBTUc7QUFFSDs7OztHQUlHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBQyxFQUFVO0lBQ2xDLElBQUksSUFBSSxDQUFDO0lBQ1QsSUFBSTtRQUNBLElBQUksR0FBRyxZQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ25CO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixJQUFJLEdBQUcsWUFBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRDs7R0FFRztBQUNVLFFBQUEsUUFBUSxHQUFHO0lBQ3BCLFFBQVEsRUFBRSxZQUFDLENBQUMsR0FBRyxDQUFDLGVBQWU7SUFDL0IsT0FBTyxFQUFFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztJQUN0QyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7SUFDM0MsTUFBTSxFQUFFLGtCQUFrQixDQUFDLG1DQUFtQyxDQUFDO0lBQy9ELElBQUksRUFBRSxrQkFBa0IsQ0FBQyxrQ0FBa0MsQ0FBQztJQUM1RCxTQUFTLEVBQUUsa0JBQWtCLENBQUMsb0NBQW9DLENBQUM7SUFDbkUsVUFBVSxFQUFFLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDO0lBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQztJQUNyRCxlQUFlLEVBQUUsa0JBQWtCLENBQUMsdUJBQXVCLENBQUM7SUFDNUQsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7SUFDekQsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7SUFDM0QsWUFBWSxFQUFFLGtCQUFrQixDQUM1QixtREFBbUQsQ0FDdEQ7SUFDRCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7SUFDbkQsS0FBSyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztDQUNyQyxDQUFDOzs7OztBQ2xERiw0REFBK0Q7QUFDL0QsOENBQTZDO0FBQzdDLHFCQUFHLENBQUMsa0JBQWtCLGdCQUF1QixDQUFDO0FBQzlDLElBQVksT0FLWDtBQUxELFdBQVksT0FBTztJQUNmLHdEQUE2QyxDQUFBO0lBQzdDLDRDQUFpQyxDQUFBO0lBQ2pDLG9DQUF5QixDQUFBO0lBQ3pCLDBCQUFlLENBQUE7QUFDbkIsQ0FBQyxFQUxXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUtsQjtBQUVELElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNoQix5QkFBYSxDQUFBO0lBQ2IsK0JBQW1CLENBQUE7SUFDbkIseUJBQWEsQ0FBQTtJQUNiLDJCQUFlLENBQUE7QUFDbkIsQ0FBQyxFQUxXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBS25CO0FBRUQ7SUFBQTtJQVlBLENBQUM7SUFOaUIsYUFBSyxHQUFuQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLEdBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBZSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDckUsT0FBTyxDQUFDLElBQUk7WUFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFpQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDOUQsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDO0lBQ2hFLENBQUM7SUFWYSxZQUFJLEdBQUcsbUJBQVEsQ0FBQyxPQUFPLENBQUM7SUFXMUMsY0FBQztDQVpELEFBWUMsSUFBQTtBQVpZLDBCQUFPOzs7OztBQ2pCcEIsOERBQWlFO0FBQ2pFLHVDQUErQjtBQUMvQix1Q0FBc0M7QUFDdEMscUJBQUcsQ0FBQyxlQUFlLGdCQUF1QixDQUFDO0FBQzNDO0lBQUE7SUF3QkEsQ0FBQztJQXJCaUIsYUFBTyxHQUFyQixVQUFzQixHQUFXO1FBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUNuQixPQUFPLEVBQ1AsV0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQVksSUFBSSxDQUFDLEtBQUssQ0FDekQsTUFBTSxDQUFDLFdBQVcsQ0FDckIsUUFBSyxDQUNULENBQUM7UUFDRixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pELFlBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFDLElBQUk7WUFDbkIsSUFBMEIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFYSxVQUFJLEdBQWxCO1FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6RCxZQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBQyxJQUFJO1lBQ25CLElBQTBCLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBdEJhLFVBQUksR0FBRyxtQkFBUSxDQUFDLEtBQUssQ0FBQztJQXVCeEMsWUFBQztDQXhCRCxBQXdCQyxJQUFBO0FBeEJZLHNCQUFLO0FBMEJsQixZQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBQyxDQUFDO0lBQ3RDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqQixDQUFDLENBQUMsQ0FBQztBQUNILFlBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFDLElBQUk7SUFDcEIsWUFBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDOzs7OztBQ3JDSCw0REFBc0U7QUFDdEUsMENBQTZDO0FBQzdDLHFCQUFHLENBQUMsZ0JBQWdCLGdCQUF1QixDQUFDO0FBQzVDOzs7Ozs7R0FNRztBQUNIO0lBc0RJLGdCQUNZLE1BQWMsRUFDZCxRQUFnQixFQUN4QixRQUErQjtRQUZ2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUd4QixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQUMsY0FBWTtpQkFBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO2dCQUFaLHlCQUFZOztZQUN6QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQztJQUNOLENBQUM7SUE1RGEsZUFBUSxHQUF0QixVQUNJLE1BQWMsRUFDZCxRQUFzQixFQUN0QixRQUFzQztRQUR0Qyx5QkFBQSxFQUFBLGNBQXNCO1FBQ3RCLHlCQUFBLEVBQUEsV0FBa0MsWUFBSTtRQUV0QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDWCx3REFBd0QsQ0FDM0QsQ0FBQztTQUNMO1FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFFBQVEsR0FBRztZQUNQLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLHVCQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0lBRWEsY0FBTyxHQUFyQixVQUFzQixNQUFjLEVBQUUsUUFBc0I7UUFBNUQsaUJBMEJDO1FBMUJxQyx5QkFBQSxFQUFBLGNBQXNCO1FBQ3hELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNYLHdEQUF3RCxDQUMzRCxDQUFDO1NBQ0w7UUFDRCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksT0FBTyxDQUNkLFVBQ0ksT0FBa0MsRUFDbEMsTUFBMkI7WUFFM0IsSUFBSTtnQkFDQSxJQUFNLFdBQVcsR0FBRztvQkFDaEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO2dCQUNkLENBQUMsQ0FBQztnQkFDRixLQUFJLENBQUMsUUFBUTtxQkFDUixNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUM7cUJBQ3JDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO1FBQ0wsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBaUJELHNCQUFrQixtQkFBUzthQUEzQjtZQUNJLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVPLHVCQUFNLEdBQWQsVUFDSSxNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsUUFBK0I7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLGlDQUFnQixHQUF4QjtRQUNJLElBQU0sT0FBTyxHQUFHLFdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ2xCLENBQUMsRUFDRCxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FDaEQsQ0FBQztRQUNGLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sdUJBQU0sR0FBZDtRQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDSCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRU8sOEJBQWEsR0FBckI7UUFDSSxJQUFJLHVCQUF1QixJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUF2R2EsaUJBQVUsR0FBRyxFQUFFLENBQUM7SUFpRGYsY0FBTyxHQUFHLEtBQUssQ0FBQztJQUNoQixlQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFJLENBQUMsQ0FBQztJQXNEckQsYUFBQztDQXpHRCxBQXlHQyxJQUFBO0FBekdZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZuQix3Q0FBc0M7QUFDdEMsMkNBQTBDO0FBQzFDLDhEQUFpRTtBQUNqRSxnREFBNkM7QUFDN0MsdUNBQStCO0FBQy9CLHVDQUFzQztBQUN0QyxxQkFBRyxDQUFDLHFCQUFxQixnQkFBdUIsQ0FBQztBQU1qRCxJQUFNLENBQUMsR0FBRywwQ0FBMEMsQ0FBQztBQUNyRCxJQUFNLElBQUksR0FBRyxrRUFBa0UsQ0FBQztBQUVoRixJQUFNLHNCQUFzQixHQUFvQjtJQUM1QyxLQUFLLEVBQUUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJO0lBQ2pCLFNBQVMsRUFBRSxZQUFJO0NBQ2xCLENBQUM7QUFFRjtJQUFBO0lBc0VBLENBQUM7SUFsRWlCLGdCQUFLLEdBQW5CLFVBQ0ksZUFBeUQ7UUFEN0QsaUJBK0RDO1FBOURHLGdDQUFBLEVBQUEsd0NBQXlEO1FBRXpELFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBTyxLQUFLOzs7Ozt3QkFDaEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUNqQixPQUFPLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDOzZCQUNwQyxDQUFBLE9BQU8sS0FBSyxJQUFJLENBQUEsRUFBaEIsd0JBQWdCO3dCQUNWLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQzt3QkFDdEQsV0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ3hDLFdBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQ25ELFdBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JDLFdBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzNDLFdBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTs0QkFDakIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyx1QkFBdUIsQ0FBQzt3QkFDckQsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7NEJBQ25DLFlBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFzQixDQUFDLEtBQUs7Z0NBQzdDLFdBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO3lCQUNqQzt3QkFDRCxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTs0QkFDNUIsWUFBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQXNCLENBQUMsS0FBSztnQ0FDdEMsV0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7eUJBQzFCO3dCQUNBLG1CQUFRLENBQUMsVUFBOEIsQ0FBQyxNQUFNLEdBQUcsV0FBSSxDQUFDLE9BQU87NkJBQ3pELFFBQWtCLENBQUM7d0JBQ3hCLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDZixxQkFBTSxLQUFLLENBQUMsSUFBSSxFQUFFO2dDQUMzQixNQUFNLEVBQUUsTUFBTTtnQ0FDZCxPQUFPLEVBQUU7b0NBQ0wsY0FBYyxFQUFFLGtCQUFrQjtvQ0FDbEMsV0FBVyxFQUFFLENBQUM7aUNBQ2pCO2dDQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29DQUNqQixPQUFPLEVBQUUsaUJBQU0sQ0FBQyxPQUFPO29DQUN2QixTQUFTLEVBQUUsaUJBQU0sQ0FBQyxTQUFTO29DQUMzQixPQUFPLEVBQUUsaUJBQU0sQ0FBQyxPQUFPO29DQUN2QixTQUFTLEVBQUUsaUJBQU0sQ0FBQyxTQUFTO29DQUMzQixHQUFHLEVBQUUsaUJBQU0sQ0FBQyxHQUFHO29DQUNmLFlBQVksRUFBRSxXQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7b0NBQ3ZDLEtBQUssRUFBRSxXQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7b0NBQ3pCLFFBQVEsRUFBRSxXQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7b0NBQy9CLEdBQUcsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFO2lDQUN4QixDQUFDOzZCQUNMLENBQUMsRUFBQTs7d0JBakJJLElBQUksR0FBRyxTQWlCWDt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDUixxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE1QixRQUFRLEdBQUcsU0FBaUI7d0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7NEJBQ3JCLEtBQUssQ0FDRCwyRkFBMkY7Z0NBQ3ZGLFFBQVEsQ0FBQyxLQUFLLENBQ3JCLENBQUM7NEJBQ0Ysc0JBQU87eUJBQ1Y7d0JBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FDL0IsUUFBUSxFQUNSLFVBQVUsQ0FBQyxVQUFVLENBQ3hCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7O3dCQUV6QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7O2FBRXRCLENBQUM7UUFDRixVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQWxFYSxlQUFJLEdBQUcsbUJBQVEsQ0FBQyxVQUE2QixDQUFDO0lBQzlDLDZCQUFrQixHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFFLFNBQVMsRUFBRSxZQUFJLEVBQUUsQ0FBQztJQW9FOUUsaUJBQUM7Q0F0RUQsQUFzRUMsSUFBQTtBQXRFWSxnQ0FBVTs7Ozs7QUNwQnZCLG1DQUFxQztBQUNyQyx1Q0FBcUM7QUFFckM7SUFBQTtJQU1BLENBQUM7SUFMZSxvQ0FBb0IsR0FBbEM7UUFDRSxxQkFBcUI7UUFDckIsa0JBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixrQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDSCxzQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksMENBQWU7Ozs7O0FDSDVCLGdEQUErQztBQVUvQyxTQUFTLGVBQWUsQ0FDcEIsT0FBZSxFQUNmLFVBQW1CLEVBQ25CLFNBQXdCLEVBQ3hCLEtBQVc7SUFFWCxpQkFBTyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDakUsT0FBTztRQUNILE9BQU8sU0FBQTtRQUNQLFVBQVUsWUFBQTtRQUNWLFNBQVMsV0FBQTtRQUNULEtBQUssT0FBQTtRQUNMLFdBQVcsRUFBRSxFQUFFO0tBQ2xCLENBQUM7QUFDTixDQUFDO0FBRUQ7SUFBQTtJQXVDQSxDQUFDO0lBdENpQixlQUFPLEdBQXJCLFVBQXNCLEdBQVcsRUFBRSxLQUFXO1FBQzFDLElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzlCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVhLG1CQUFXLEdBQXpCOztRQUNJLE9BQU8sQ0FDSCxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDOUIsY0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsMENBQUUsS0FBSywwQ0FBRSxPQUFPLENBQUEsQ0FDakQsQ0FBQztJQUNOLENBQUM7SUFFYSxnQkFBUSxHQUF0QjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBeUIsQ0FBQztRQUNoRSxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ2xDLElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FDM0IsT0FBTyxFQUNQLFNBQVMsQ0FBQyxVQUFVLEVBQ3BCLFNBQVMsQ0FBQyxTQUFTLEVBQ25CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUNqQixDQUFDO1FBQ0YsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDOUIsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVhLGFBQUssR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEtBQVc7UUFDeEMsT0FBTyxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckUsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUM7SUFJTCxjQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSwwQkFBTztBQXlDbkIsTUFBYyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRTVCLDRDQUFvQztBQUNwQyw0Q0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLDREQUFzRTtBQUN0RSx3Q0FBc0M7QUFDdEMsb0RBQWtEO0FBQ2xELHFDQUFvQztBQUNwQyxxQkFBRyxDQUFDLGdCQUFnQixnQkFBdUIsQ0FBQztBQXdCNUMsU0FBUyxNQUFNLENBQUMsSUFBYSxFQUFFLE1BQW9CO0lBQy9DLE9BQU8sQ0FDSCxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxNQUFNO1FBQzlCLENBQUMsTUFBTSxDQUFDLElBQUksZUFBa0I7WUFDMUIsTUFBTSxDQUFDLElBQUksZ0NBQW1DLENBQUMsQ0FDdEQsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLGFBQWEsQ0FBQyxNQUFvQjtJQUN2QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLGdDQUFtQyxDQUFDO0FBQzFELENBQUM7QUFFRDtJQUFBO0lBNE1BLENBQUM7SUFoTWlCLGdCQUFTLEdBQXZCLFVBQXdCLE9BQXVCLEVBQUUsVUFBa0I7UUFDL0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNuQyxDQUFDO0lBRWEsWUFBSyxHQUFuQixVQUFvQixJQUFzQjtRQUN0QyxZQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxVQUFDLElBQUk7OztnQkFDbkIsS0FBcUIsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBekMsSUFBTSxNQUFNLFdBQUE7b0JBQ2IsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFO3dCQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0o7Ozs7Ozs7OztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVhLDZCQUFzQixHQUFwQyxVQUFxQyxDQUFhO1FBQzlDLE9BQU8sdUJBQUssQ0FBQztZQUNULENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBMkIsQ0FBQztZQUM3QyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3hCLGlCQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFNLEdBQUcsR0FBRyx3QkFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsbUJBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDckQsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYSxzQkFBZSxHQUE3QixVQUE4QixJQUE0QjtRQUExRCxpQkFPQztRQU5HLE9BQU8sVUFBQyxDQUFhO1lBQ2pCLHVCQUFLLENBQUM7OztnQ0FDRixxQkFBTSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEVBQUE7OzRCQUF0QyxTQUFzQyxDQUFDOzRCQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7aUJBQ1gsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVhLDBCQUFtQixHQUFqQyxVQUFrQyxDQUFhO1FBQzNDLE9BQU8sdUJBQUssQ0FBQztZQUNULENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYSx3QkFBaUIsR0FBL0IsVUFBZ0MsQ0FBUTtRQUNwQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FDVCw4REFBOEQsQ0FDakUsQ0FBQztJQUNOLENBQUM7SUFFYSwwQkFBbUIsR0FBakM7UUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQ3BCLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFDckQsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEVBQzVELEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUNoRSxDQUFDO0lBQ04sQ0FBQztJQUNhLDJCQUFvQixHQUFsQztRQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FDdEIsTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsU0FBUyxFQUNoQixNQUFNLENBQUMsU0FBUyxDQUNuQixDQUFDO0lBQ04sQ0FBQztJQUNhLHdCQUFpQixHQUEvQjtRQUNJLGdCQUFnRTthQUFoRSxVQUFnRSxFQUFoRSxxQkFBZ0UsRUFBaEUsSUFBZ0U7WUFBaEUsMkJBQWdFOztRQUVoRSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUNqQixPQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQztRQUFsRCxDQUFrRCxDQUNyRCxDQUFDO0lBQ04sQ0FBQztJQUNhLDBCQUFtQixHQUFqQztRQUFrQyxnQkFBbUI7YUFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO1lBQW5CLDJCQUFtQjs7UUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNhLHNCQUFlLEdBQTdCO1FBQ0ksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRW1CLFdBQUksR0FBeEIsVUFBeUIsR0FBVzs7Ozs7O3dCQUNoQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLHFCQUFNLHdCQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBckQsR0FBRyxHQUFHLFNBQStDO3dCQUMzRCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQ3JELHNCQUFPLEdBQUcsRUFBQzs7OztLQUNkO0lBRW1CLHlCQUFrQixHQUF0QyxVQUF1QyxJQUFZOzs7O2dCQUN6QyxHQUFHLEdBQUcsd0JBQVUsQ0FBQyxPQUFPLENBQzFCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUN4QixtQkFBUSxDQUFDLE9BQU8sQ0FDbkIsQ0FBQztnQkFDRixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELHNCQUFPLEdBQUcsRUFBQzs7O0tBQ2Q7SUF3RmMsb0JBQWEsR0FBNUIsVUFBNkIsTUFBb0I7UUFDN0MsT0FBTztZQUNILE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUNyQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUM5QyxDQUFDO0lBQ04sQ0FBQztJQUNjLGtCQUFXLEdBQTFCLFVBQTJCLEdBQVc7UUFDbEMsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsT0FBTyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM5RCxDQUFDO0lBMU1hLGdCQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsWUFBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLGdCQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUIseUJBQWtCLEdBQUcsWUFBSSxDQUFDO0lBQzFCLHNCQUFlLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQXRCLENBQXNCLENBQUM7SUFDM0QsMEJBQW1CLEdBQUcsVUFBQyxLQUFZO1FBQzdDLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBRTtJQUF0QixDQUFzQixDQUFDO0lBRWIsaUJBQVUsR0FBRyxFQUFFLENBQUM7SUFpR2YscUJBQWMsR0FBRztRQUM1QixDQUFDLEVBQUUsVUFBQyxNQUF3QixFQUFFLElBQWE7WUFDdkMsSUFBTSxLQUFLLEdBQUcsSUFBeUIsQ0FBQztZQUN4QyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxpQkFBZSxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBTSxNQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztvQkFDdEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFJLENBQUMsQ0FBQztvQkFDOUIsaUJBQWUsR0FBRyxpQkFBZSxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUMzQyxJQUFJLElBQUksRUFBRTt3QkFDTixZQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDM0M7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxpQkFBZSxFQUFFO29CQUNqQixJQUFJLE1BQUksQ0FBQyxNQUFNLENBQUMsTUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7d0JBQ3hDLFlBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQUMsQ0FBQzs0QkFDaEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOzRCQUNuQixhQUFLLENBQUMsT0FBTyxDQUFDLE1BQUksQ0FBQyxDQUFDO3dCQUN4QixDQUFDLENBQUMsQ0FBQztxQkFDTjt5QkFBTTt3QkFDSCxZQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFDLENBQUM7NEJBQ2hDLE9BQUEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQWUsQ0FBQzt3QkFBOUMsQ0FBOEMsQ0FDakQsQ0FBQztxQkFDTDtpQkFDSjthQUNKO2lCQUFNO2dCQUNILFlBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQUMsQ0FBQztvQkFDaEMsT0FBQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBZSxDQUFDO2dCQUE5QyxDQUE4QyxDQUNqRCxDQUFDO2FBQ0w7UUFDTCxDQUFDO1FBQ0QsR0FBRyxFQUFFLFVBQUMsTUFBd0IsRUFBRSxJQUFhO1lBQ3pDLElBQU0sT0FBTyxHQUFHLElBQXdCLENBQUM7WUFDekMsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksaUJBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7b0JBQ3RDLElBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLGlCQUFlLEdBQUcsaUJBQWUsSUFBSSxJQUFJLENBQUM7b0JBQzFDLElBQUksSUFBSSxFQUFFO3dCQUNOLFlBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUMzQztnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLGlCQUFlLEVBQUU7b0JBQ2pCLFlBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsT0FBQSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBZSxDQUFDO29CQUEzQyxDQUEyQyxDQUM5QyxDQUFDO2lCQUNMO2FBQ0o7aUJBQU07Z0JBQ0gsWUFBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBQyxDQUFDO29CQUNoQyxPQUFBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFlLENBQUM7Z0JBQTNDLENBQTJDLENBQzlDLENBQUM7YUFDTDtRQUNMLENBQUM7UUFDRCxJQUFJLEVBQUUsVUFBQyxNQUF3QixFQUFFLElBQWE7WUFDMUMsSUFBTSxRQUFRLEdBQUcsSUFBdUIsQ0FBQztZQUN6QyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxpQkFBZSxHQUFHLElBQUksQ0FBQztnQkFDM0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztvQkFDdEMsSUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkMsaUJBQWUsR0FBRyxpQkFBZSxJQUFJLElBQUksQ0FBQztvQkFDMUMsSUFBSSxJQUFJLEVBQUU7d0JBQ04sWUFBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQzNDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksaUJBQWUsRUFBRTtvQkFDakIsWUFBQyxDQUFDLGdCQUFnQixDQUNkLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxDQUFDLGlCQUFpQixDQUMzQixDQUFDO2lCQUNMO2FBQ0o7aUJBQU07Z0JBQ0gsWUFBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDaEU7UUFDTCxDQUFDO0tBQ0osQ0FBQztJQUVhLGNBQU8sR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztJQUVwRCxxQkFBYyxHQUF1QyxJQUFJLEdBQUcsRUFHeEUsQ0FBQztJQUVXLGdCQUFTLEdBQUcsZ0JBQWdCLENBQUM7SUFhaEQsYUFBQztDQTVNRCxBQTRNQyxJQUFBO0FBNU1ZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNuQiwyQ0FBeUU7QUFDekUsaURBQXFEO0FBQ3JELDRDQUEyQztBQUMzQyxzREFBdUQ7QUFDdkQsNERBQThFO0FBRTlFLDJDQUEwQztBQUMxQyxvREFBbUU7QUFFbkUscUJBQUcsQ0FBQyxpQkFBaUIsZ0JBQXVCLENBQUM7QUFVN0M7SUFBQTtJQThEQSxDQUFDO0lBM0RpQixvQkFBWSxHQUExQixVQUEyQixJQUFjO1FBQ3JDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkIsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUNqQixHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0IsSUFBTSxJQUFJLEdBQUc7Z0JBQ1QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO2dCQUNwQixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO2FBQ3ZCLENBQUM7WUFDRixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksV0FBUSxJQUFJLEVBQUMsQ0FBQztZQUM5QixHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLG1CQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDekMsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwRCxtQkFBUSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RELG1CQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUM3QyxDQUFDO0lBRWEsYUFBSyxHQUFuQixVQUFvQixNQUE0QjtRQUM1QywrQkFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxzQ0FBc0M7UUFDdEMsK0JBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZDLHdCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRWEscUJBQWEsR0FBM0IsVUFBNEIsU0FBaUI7UUFDekMsV0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBSztZQUNwQyxXQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFYSw0QkFBb0IsR0FBbEMsVUFBbUMsU0FBaUI7UUFBcEQsaUJBU0M7UUFSRyxPQUFPLFVBQUMsTUFBVztZQUNmLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO2dCQUM1QixJQUFJLENBQUMsc0JBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDekIsNEJBQW9CLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2lCQUMzQztnQkFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFYSxrQkFBVSxHQUF4QixVQUF5QixHQUFXLEVBQUUsU0FBYztRQUNoRCxXQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRWEsd0JBQWdCLEdBQTlCLFVBQStCLElBQVksRUFBRSxPQUEwQjtRQUNuRSxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTFEYSxlQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBNERqQyxnQkFBUSxHQUFHLElBQUksd0JBQWEsRUFBRSxDQUFDO0lBQ2xELGNBQUM7Q0E5REQsQUE4REMsSUFBQTtBQTlEWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnBCLDJDQUEwQztBQUMxQyxHQUFHLENBQUMseUJBQXlCLGdCQUF1QixDQUFDO0FBQ3JELFNBQXNCLEtBQUssQ0FDekIsSUFBeUI7OztZQUV6QixzQkFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQzs7O0NBQ3hCO0FBSkQsc0JBSUM7QUFFRCxTQUFnQixPQUFPLENBQ3JCLElBQXlCO0lBRDNCLGlCQVdDO0lBUkMsT0FBTztRQUFPLGNBQVk7YUFBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1lBQVoseUJBQVk7Ozs7Z0JBQ3hCLElBQUk7b0JBQ0Ysc0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDO2lCQUNuQjtnQkFBQyxPQUFPLEtBQUssRUFBRTtvQkFDZCxXQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEI7Ozs7S0FDRixDQUFDO0FBQ0osQ0FBQztBQVhELDBCQVdDO0FBUUQsSUFBSSxVQUFVLGdCQUF1QyxDQUFDO0FBRXRELFNBQWdCLGFBQWEsQ0FBQyxLQUFxQjtJQUNqRCxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQWdCLEdBQUcsQ0FBQyxPQUFlLEVBQUUsVUFBMEI7SUFDN0QsSUFBSSxVQUFVLElBQUksVUFBVSxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7QUFDSCxDQUFDO0FBSkQsa0JBSUM7Ozs7O0FDckNELHFEQUF3RDtBQUN4RCxxQkFBRyxDQUFDLGVBQWUsZ0JBQXVCLENBQUM7QUFDM0MscUNBQXFDO0FBQ3JDLFNBQWdCLElBQUksS0FBSSxDQUFDO0FBQXpCLG9CQUF5QjtBQUN6QixTQUFnQixHQUFHO0lBQ2pCLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRkQsa0JBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQsNENBQW9DO0FBQ3BDLHFEQUF3RDtBQUN4RCxpQ0FBK0I7QUFDL0IscUJBQUcsQ0FBQyxxQkFBcUIsZ0JBQXVCLENBQUM7QUFJakQ7SUFBQTtJQXFLQSxDQUFDO0lBbEtpQixpQkFBTSxHQUFwQjtRQUNJLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFYSxxQkFBVSxHQUF4QjtRQUNJLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRWEsb0JBQVMsR0FBdkIsVUFBd0IsSUFBWSxFQUFFLE9BQWU7UUFDakQsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQ1gsd0VBQXdFLENBQzNFLENBQUM7U0FDTDtRQUNELElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFYSwrQkFBb0IsR0FBbEMsVUFBbUMsSUFBZTtRQUM5QyxxQkFBRyxDQUFDLDZCQUE2QixtQkFBMEIsQ0FBQztRQUM1RCxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRWEsZUFBSSxHQUFsQixVQUFtQixJQUFZLEVBQUUsSUFBc0I7UUFDbkQsT0FBTyxJQUFJLE9BQU8sQ0FBVSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3hDLElBQUk7Z0JBQ0EscUJBQUcsQ0FBQyxZQUFZLG1CQUEwQixDQUFDO2dCQUMzQyxJQUFNLE9BQU8sR0FBRyxZQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRCxVQUFVLENBQUMsOEJBQThCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMxRCxVQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixxQkFBRyxDQUFDLFVBQVUsbUJBQTBCLENBQUM7Z0JBQ3pDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFbUIsa0JBQU8sR0FBM0IsVUFBNEIsR0FBVyxFQUFFLElBQXNCOzs7Ozs7d0JBQ3BELEtBQUEsQ0FBQSxLQUFBLFVBQVUsQ0FBQSxDQUFDLElBQUksQ0FBQTt3QkFBQyxxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFBOzRCQUFwRCxzQkFBTyxjQUFnQixTQUE2QixFQUFFLElBQUksRUFBQyxFQUFDOzs7O0tBQy9EO0lBRWEsa0JBQU8sR0FBckIsVUFBc0IsR0FBVztRQUM3QixPQUFPLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDdkMsSUFBSTtnQkFDQSxxQkFBRyxDQUFDLGVBQWUsbUJBQTBCLENBQUM7Z0JBQzlDLElBQU0sU0FBTyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBQ3JDLFNBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDL0IsU0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsU0FBTyxDQUFDLGtCQUFrQixHQUFHO29CQUN6QixJQUFJLFNBQU8sQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO3dCQUMxQixxQkFBRyxDQUFDLGlCQUFpQixtQkFBMEIsQ0FBQzt3QkFDaEQsT0FBTyxDQUFDLFNBQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDakM7Z0JBQ0wsQ0FBQyxDQUFDO2FBQ0w7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQU1jLHlDQUE4QixHQUE3QyxVQUNJLElBQXNCLEVBQ3RCLE9BQWU7UUFFZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFYyw0QkFBaUIsR0FBaEM7UUFDSSxxQkFBRyxDQUFDLFlBQVksbUJBQTBCLENBQUM7UUFDM0MsSUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQ2pDLFVBQUMsSUFBSTtZQUNELE9BQUEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FDakQsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBWSxFQUM1QyxDQUFDLEVBQ0QsQ0FBQyxDQUNPLENBQUM7UUFKYixDQUlhLENBQ3BCLENBQUM7SUFDTixDQUFDO0lBRWMsdUJBQVksR0FBM0IsVUFBNEIsQ0FBUztRQUNqQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLEdBQUcsSUFBSSxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVjLDJCQUFnQixHQUEvQixVQUNJLElBQWEsRUFDYixTQUFzQixFQUN0QixLQUFhO1FBRWIsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDYixLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUNuRCxNQUFNLElBQUksS0FBSyxDQUNYLGtFQUFrRTtnQkFDOUQsOERBQThEO2dCQUM5RCxTQUFTO2dCQUNULDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FDckMsQ0FBQztTQUNMO1FBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUMxQyxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUNoQixDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFYywyQkFBZ0IsR0FBL0IsVUFDSSxJQUErQjtRQUUvQixJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBWSxDQUFDO0lBQzlDLENBQUM7SUFFYyxnQ0FBcUIsR0FBcEMsVUFBcUMsSUFBc0I7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkthLGdCQUFLLEdBQVUsRUFBRSxDQUFDO0lBd0VqQixtQkFBUSxHQUFHLEtBQUssQ0FBQztJQUVqQix1QkFBWSxHQUFjLFlBQUksQ0FBQztJQTBGbEQsaUJBQUM7Q0FyS0QsQUFxS0MsSUFBQTtBQXJLWSxnQ0FBVTs7Ozs7QUNQdkIsNENBQTJDO0FBQzNDLDhDQUFzQztBQUN0QyxxREFBd0Q7QUFDeEQscUJBQUcsQ0FBQyxxQkFBcUIsZ0JBQXVCLENBQUM7QUFDakQ7SUFBQTtJQWtDQSxDQUFDO0lBakNlLGlCQUFLLEdBQW5CO1FBQ0UsV0FBVyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHNCQUFrQixtQkFBSTthQUF0QjtZQUNFLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sV0FBVyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBRWEsbUJBQU8sR0FBckIsVUFBc0IsSUFBYTtRQUNqQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNXLHNCQUFVLEdBQXhCLFVBQXlCLElBQXNCO1FBQzdDLFlBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDVyxrQ0FBc0IsR0FBcEM7UUFDRSxXQUFXLENBQUMsVUFBVSxDQUFDLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVjLG1CQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ1osa0JBQU0sR0FBRyxrQkFBa0IsQ0FBQztJQUM3QyxrQkFBQztDQWxDRCxBQWtDQyxJQUFBO0FBbENZLGtDQUFXOzs7OztBQ0p4QixJQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUM5QyxRQUFBLE1BQU0sR0FBRztJQUNsQixTQUFTLEVBQUUsRUFBRTtJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEVBQUU7SUFDWCxTQUFTLEVBQUUsQ0FBQztJQUNaLEdBQUcsRUFBRSxFQUFFO0NBQ1YsQ0FBQztBQUNGLElBQUk7SUFDQSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixJQUNJLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsRUFDSjtRQUNFLGNBQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQVcsQ0FBQztRQUN0RCxjQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssTUFBTSxDQUFDO1FBQ25ELGNBQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQVcsQ0FBQztRQUNsRCxjQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLGNBQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQVcsQ0FBQztLQUM3QztTQUFNO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssQ0FDRCx1SUFBdUksQ0FDMUksQ0FBQztLQUNMO0NBQ0o7QUFBQyxPQUFPLENBQUMsRUFBRTtJQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVCxLQUFLLENBQ0Qsa0hBQWtILENBQ3JILENBQUM7Q0FDTDs7Ozs7QUNqQ0QscURBQXdEO0FBRXhELHFCQUFHLENBQUMsY0FBYyxnQkFBdUIsQ0FBQztBQUUxQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7QUFFbEIsSUFBSSxXQUFrQyxDQUFDO0FBQ3ZDLElBQUksVUFBVSxDQUFDO0FBQ2YsSUFBTSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUE4QixFQUFFLE1BQU07SUFDdEUsV0FBVyxHQUFHLE9BQU8sQ0FBQztJQUN0QixVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzVDLHFCQUFHLENBQUMsbUJBQW1CLG1CQUEwQixDQUFDO0lBQ2xELEtBQUssR0FBRyxJQUFJLENBQUM7SUFDYixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFnQixPQUFPO0lBQ3JCLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUZELDBCQUVDO0FBQ0QsU0FBZ0IsY0FBYztJQUM1QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0FBQ3RELENBQUM7QUFGRCx3Q0FFQzs7Ozs7QUNsQkQsNENBQTRDO0FBQy9CLFFBQUEsU0FBUyxHQUFlLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0FBQ3RGLE1BQWMsQ0FBQyxTQUFTLEdBQUcsaUJBQVMsQ0FBQzs7Ozs7QUNSdEMsbURBQTJDO0FBRTNDO0lBbUJFLG1CQUFvQixLQUFjO1FBQWxDLGlCQWNDO1FBZG1CLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDaEMsWUFBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7WUFDakM7d0VBQzREO1lBQzVELEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0Qyx3REFBd0Q7WUFDeEQsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxrQkFBaUMsQ0FBQztZQUMzRCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtnQkFDbkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWhDYSxrQkFBUSxHQUF0QjtRQUNFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFNLFVBQVUsR0FBRyxZQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFO1lBQy9ELElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNoQixTQUFTO2FBQ1Y7WUFDRCxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVhLG9CQUFVLEdBQXhCO1FBQ0UsU0FBUyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVjLG9CQUFVLEdBQWdCLEVBQUUsQ0FBQztJQWlCOUMsZ0JBQUM7Q0FsQ0QsQUFrQ0MsSUFBQTtBQWxDWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdEIseURBQXVEO0FBQ3ZELHlDQUF3QztBQUV4QywrQ0FBMkQ7QUFDM0QseUNBQXdDO0FBRXhDLG9HQUFvRztBQUNwRyxTQUFnQixpREFBaUQ7SUFDN0QsdUZBQXVGO0lBRXZGLE1BQU0sQ0FBQyxRQUFRLEdBQUcsY0FBWSxXQUFXLEVBQUUsQ0FBQSxDQUFBLENBQUMsQ0FBQTtJQUU1QyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDN0UsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkIsNENBQTRDO0lBQzVDLHdDQUF3QztJQUN4QyxJQUFJO0lBRUosSUFBSSxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFTLFNBQVM7UUFDcEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFTLFFBQVE7O1lBQ2pDLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBRWpDLFVBQUksTUFBTSwwQ0FBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRTtvQkFDdkMsTUFBQSxNQUFNLDBDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQy9CO2dCQUNELFVBQUksTUFBTSwwQ0FBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRztvQkFDekMsTUFBQSxNQUFNLDBDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUM3QjtnQkFDRCxVQUFJLE1BQU0sMENBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUc7b0JBQ3RDLE1BQUEsTUFBTSwwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtpQkFDcEM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyw2Q0FBNkM7U0FDL0QsQ0FBQyxDQUFDO0tBQ0o7QUFFTCxDQUFDO0FBcENELDhHQW9DQztBQUVELDRIQUE0SDtBQUM1SCxTQUFTLFdBQVc7O0lBQ2xCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMxRCxJQUFJLE1BQU0sU0FBRyxNQUFNLDBDQUFFLFNBQVMsQ0FBQztJQUMvQixJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxFQUFFO1FBQy9CLE1BQUEsTUFBTSwwQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtLQUNqQztTQUFNO1FBQ0wsTUFBQSxNQUFNLDBDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0tBQ3BDO0FBQ0gsQ0FBQztBQUVILFNBQXNCLFFBQVE7Ozs7d0JBQzFCLHFCQUFNLElBQUksT0FBTyxDQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxFQUFBOztvQkFBakQsU0FBaUQsQ0FBQztvQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDekIscUJBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckIscUJBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckIsaURBQWlELEVBQUUsQ0FBQztvQkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7Q0FDM0I7QUFQRCw0QkFPQztBQUVELDJCQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBaUI7SUFDbkMsd0JBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFDRixNQUFjLENBQUMsVUFBVSxHQUFHLHdCQUFVLENBQUM7QUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xDLDhGQUE4RjtBQUM5RixNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLGNBQU0sT0FBQSxRQUFRLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQzs7Ozs7QUNoRXpELHdEQUF3RDtBQUN4RCxJQUFJO0FBQ0osc0JBQXNCO0FBQ3RCLDhDQUE4QztBQUM5QyxJQUFJO0FBRUosa0hBQWtIO0FBQ2xILHlDQUF5QztBQUV6Qyw2R0FBNkc7QUFDN0csb0dBQW9HO0FBRXZGLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLDJHQUEyRztJQUMzRztRQUNJLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztLQUN6QztJQUNEO1FBQ0ksSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0tBQ3pDO0NBRUosQ0FBQzs7O0FDL0JGO0FBQ0E7O0FDREE7QUFDQTs7OztBQ0RBLG1EQUEyQztBQUUzQztJQXdCRSxtQkFBb0IsS0FBYztRQUFsQyxpQkFrQkM7UUFsQm1CLFVBQUssR0FBTCxLQUFLLENBQVM7UUFMMUIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixXQUFNLEdBQWMsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBYyxFQUFFLENBQUM7UUFHM0IsWUFBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtZQUMzQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzdCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO2dCQUMzQyxZQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO2FBQzdEO2lCQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO2dCQUNsRCxZQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO2FBQzVEO2lCQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7Z0NBQ00sQ0FBQztZQUNSLFlBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQzs7O1FBRHJFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7b0JBQWhDLENBQUM7U0FFVDtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXpDYSxrQkFBUSxHQUF0QjtRQUNFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFNLFVBQVUsR0FBRyxZQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFO1lBQzVELElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNoQixTQUFTO2FBQ1Y7WUFDRCxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVhLG9CQUFVLEdBQXhCO1FBQ0UsU0FBUyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQTZCTSw2QkFBUyxHQUFoQixVQUFpQixDQUFTO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNNLDhCQUFVLEdBQWpCLFVBQWtCLENBQVM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ00sNkJBQVMsR0FBaEIsVUFBaUIsS0FBYTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDeEQ7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQTVDYyxvQkFBVSxHQUFnQixFQUFFLENBQUM7SUE2QzlDLGdCQUFDO0NBOURELEFBOERDLElBQUE7QUE5RFksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnRCLG1EQUFnRDtBQUNoRCxnREFBK0M7QUFFL0MsbURBQTJDO0FBQzNDLG1EQUFrRDtBQUNsRCwrQ0FBOEM7QUFDOUMsb0RBQW1EO0FBQ25ELGtEQUEyRTtBQUMzRSxxREFBb0Q7QUFFcEQsMkRBQXlEO0FBQ3pELDZEQUEyRDtBQUMzRCwrQ0FBdUQ7QUFDdkQsdURBQWdFO0FBRWhFLElBQU0sS0FBSyxHQUFHOzs7O29CQUNWLHFCQUFNLHNCQUFjLEVBQUUsRUFBQTs7Z0JBQXRCLFNBQXNCLENBQUM7Z0JBQ2pCLFFBQVEsR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssaUJBQU0sQ0FBQyxHQUFHLEVBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLGlCQUFNLENBQUMsT0FBTyxFQUFFO29CQUNqQixJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTt3QkFDN0MsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7cUJBQ3JFO3lCQUFNO3dCQUNILGlCQUFPLENBQUMsWUFBWSxDQUFDLFFBQW9CLENBQUMsQ0FBQztxQkFDOUM7aUJBQ0o7Z0JBQ0QsaUJBQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ1YsU0FBUyxFQUFFLHNCQUFzQjtvQkFDakMsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLGVBQWUsRUFBRTt3QkFDYixLQUFLLEVBQUw7NEJBQ0ksSUFBSTtnQ0FDQSxJQUFNLFFBQVEsR0FBRyxZQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBd0IsQ0FBQztnQ0FDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQzVCLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7b0NBQ3ZCLE9BQU8scURBQXFELENBQUM7aUNBQ2hFO3FDQUFNO29DQUNILE9BQU8sSUFBSSxDQUFDO2lDQUNmOzZCQUNKOzRCQUFDLE9BQU8sS0FBSyxFQUFFO2dDQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQ25CLE9BQU8scURBQXFELENBQUM7NkJBQ2hFO3dCQUNMLENBQUM7d0JBQ0QsU0FBUyxFQUFUOzRCQUNJLFdBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFJLFlBQUMsQ0FBQyxFQUFFLENBQ3RCLFdBQVcsQ0FDVSxDQUFDLEtBQUssQ0FBQzs0QkFDaEMsT0FBTzt3QkFDWCxDQUFDO3FCQUNKO29CQUVELFVBQVUsY0FBcUI7b0JBRXpCLEtBQUssRUFBWDs7Ozs7O3dDQUNJLG1CQUFtQjt3Q0FDbkIsZUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7d0NBQzdCLGVBQU0sQ0FBQyxTQUFTLENBQ1o7NENBQ0k7Z0RBQ0ksSUFBSSw2QkFBZ0M7Z0RBQ3BDLE1BQU0sYUFBZ0I7NkNBQ3pCOzRDQUNELEVBQUUsSUFBSSxhQUFnQixFQUFFLE1BQU0sbUJBQW1CLEVBQUU7NENBQ25EO2dEQUNJLElBQUksNkJBQWdDO2dEQUNwQyxNQUFNLGlCQUFrQjs2Q0FDM0I7eUNBQ0osRUFDRCxRQUFRLENBQ1gsQ0FBQzt3Q0FDRixpQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dDQUN2RCx1Q0FBdUM7d0NBQ3ZDLHdCQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7d0NBQ3BCLHdCQUFVLENBQUMsb0JBQW9CLENBQUM7NENBQzVCLDBCQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7NENBQ3BCLDBCQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzs0Q0FDckMsZUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRDQUMvQixlQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dDQUN0QixDQUFDLENBQUMsQ0FBQzt3Q0FDSCxrQ0FBa0M7d0NBQ2xDLFlBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBUSxDQUFDLE9BQU8sdUJBQW9CLFVBQUMsQ0FBQzs0Q0FDckQsSUFBTSxFQUFFLEdBQUcsQ0FBZSxDQUFDOzRDQUMzQixJQUFNLEdBQUcsR0FBRztnREFDUixDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU87Z0RBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPO2dEQUNiLEVBQUUsRUFBRyxFQUFFLENBQUMsTUFBc0IsQ0FBQyxFQUFFOzZDQUNwQyxDQUFDOzRDQUNGLGlCQUFPLENBQUMsb0JBQW9CLHFCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dDQUN4RCxDQUFDLENBQUMsQ0FBQzt3Q0FDSCxZQUFDLENBQUMsZ0JBQWdCLENBQUMsbUJBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQUMsQ0FBQzs0Q0FDaEQsSUFBTSxFQUFFLEdBQUcsQ0FBa0IsQ0FBQzs0Q0FDOUIsSUFBTSxHQUFHLEdBQUc7Z0RBQ1IsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHO2dEQUNYLEVBQUUsRUFBRyxFQUFFLENBQUMsVUFBMEIsQ0FBQyxFQUFFOzZDQUN4QyxDQUFDOzRDQUNGLGlCQUFPLENBQUMsb0JBQW9CLHVCQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dDQUN6RCxDQUFDLENBQUMsQ0FBQzt3Q0FFRyxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUEyQixDQUFDO3dDQUNuRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzs0Q0FDbEMsSUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzs0Q0FDNUIsSUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQzs0Q0FDM0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0Q0FDbkMsSUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO2dEQUNyQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUU7b0RBQ2xDLEtBQUssR0FBRyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQ3pDO2dEQUNFLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0RBQ3ZCLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0RBQ3ZCLGlCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0RBQzdCLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0RBQzdCLGlCQUFPLENBQUMsb0JBQW9CLHVCQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzZDQUN4RDt3Q0FDTCxDQUFDLENBQUMsQ0FBQzt3Q0FDSCwyQkFBMkI7d0NBQzNCLGlCQUFPLENBQUMsYUFBYSx5QkFBb0IsQ0FBQzt3Q0FDMUMsaUJBQU8sQ0FBQyxhQUFhLHVCQUFtQixDQUFDO3dDQUN6QyxpQkFBTyxDQUFDLGFBQWEscUJBQWtCLENBQUM7d0NBQ3hDLGlCQUFPLENBQUMsYUFBYSx1QkFBbUIsQ0FBQzt3Q0FDekMsa0JBQWtCO3dDQUNsQixxQkFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUE7O3dDQURyQyxrQkFBa0I7d0NBQ2xCLFNBQXFDLENBQUM7Ozs7O3FCQUN6QztpQkFDSixDQUFDLENBQUM7Ozs7S0FDTixDQUFDO0FBRUYsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz1bXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IGNvbnNpZGVyaW5nIHNlbmRpbmcgeW91ciBjaGlsZCB0byBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdeKAmXZlIGxlYXJuZWQgdGhhdCB0aGUgY3VycmljdWx1bSBpcyBwbGF5LWJhc2VkIGFuZCB5b3Ugd2FudCB0byBrbm93IGhvdyBsZWFybmluZyBpcyBpbmNvcnBvcmF0ZWQgaW50byBhIHBsYXktYmFzZWQgY29udGV4dC4gWW91IGhhdmUgc29tZSBpZGVhcyBhYm91dCBob3cgbGFuZ3VhZ2UgbGVhcm5pbmcgbWlnaHQgaGFwcGVuLCBidXQgYXJlIGxlc3Mgc3VyZSBhYm91dCBtYXRoLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiRmluZCBzb21lIGV4YW1wbGVzIG9mIGhvdyBtYXRoIGxlYXJuaW5nIGlzIGluY29ycG9yYXRlZCBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXCIsXG4gICAgICAgIFwidGFnXCI6IFwibWF0aFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgNCB5ZWFyIG9sZC4gQm90aCB5b3UgYW5kIHlvdXIgc3BvdXNlIHdvcmssIHNvIHlvdSBuZWVkIHRvIGZ1bGx5IHVuZGVyc3RhbmQgd2hhdCBzY2hlZHVsaW5nIGNvbnN0cmFpbnRzIGVhY2ggb3B0aW9uIGludm9sdmVzLiBPbmUgb2YgeW91ciBzY2hvb2xzIG9mIGludGVyZXN0IGlzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGVuIGRvZXMgc2Nob29sIHN0YXJ0IGFuZCBlbmQgZWFjaCBkYXk/IFdoYXQgaXMgdGhlIGxvbmdlc3QgcGVyaW9kIG9mIHRpbWUgdGhhdCB5b3VyIGNoaWxkIGNhbiBiZSB0aGVyZT9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJzY2hvb2xfZGF5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciAzLjUgeWVhciBvbGQuIFlvdeKAmXZlIGJlZW4gdG9sZCB0aGF0IG9uZSBvZiB0aGUgaGFsbG1hcmtzIG9mIGEgZ29vZCBwcm9ncmFtIGlzIHRlYWNoZXJzIHdobyBoYXZlIGJlZW4gdGhlcmUgZm9yIGEgbG9uZyB0aW1lLiBZb3Ugd2FudCB5b3VyIGNoaWxkIHRvIGF0dGVuZCBpbiB0aGUgbW9ybmluZ3Mgb25seS5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoaWNoIHRlYWNoZXJzIHdvdWxkIHlvdXIgY2hpbGQgaGF2ZSBhbmQgaG93IGxvbmcgaGF2ZSB0aGV5IGJlZW4gYXQgdGhlIHNjaG9vbD9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJ0ZWFjaGVyX3RlbnVyZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgc3RhcnRpbmcgdG8gbG9vayBhdCBzdW1tZXIgY2FtcCBvcHRpb25zIGFuZCBoYXZlIGhlYXJkIGdvb2QgdGhpbmdzIGFib3V0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBmb3IgeW91bmcgY2hpbGRyZW4uXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSB0aGUgZGFpbHkgY2FtcCBob3Vycz8gQXJlIHRoZXJlIGFueSBleHRlbmRlZCBkYXkgb3Bwb3J0dW5pdGllcz9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJzdW1tZXJfY2FtcFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgc3Bpcml0ZWQgMyB5ZWFyIG9sZCBhbmQgd2FudCB0byB1bmRlcnN0YW5kIHRoZWlyIGFwcHJvYWNoIHRvIGRpc2NpcGxpbmUuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG8gdGVhY2hlcnMgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IGFwcHJvYWNoIGRpc2NpcGxpbmU/XCIsXG4gICAgICAgIFwidGFnXCI6IFwiZGlzY2lwbGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdXIgZGF1Z2h0ZXIgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3MgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBTaGUgY2FtZSBob21lIHRoaXMgd2VlayBzaW5naW5nIGEgc29uZyBpbiBTcGFuaXNoIGFib3V0IHNoYXBlcywgYnV0IHlvdSBhcmUgcHJldHR5IHN1cmUgdGhhdCBzaGUgaGFzIHNvbWUgb2YgdGhlIHdvcmRzIHdyb25nLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgdGhlIGNvcnJlY3QgbHlyaWNzP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInNwYW5pc2hfc29uZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIkl0IGlzIG1pZC1EZWNlbWJlciBhbmQgeW91IGFyZSB0aGlua2luZyBhYm91dCB0aGluZ3MgdG8gZG8gb3ZlciB5b3VyIGRhdWdodGVyJ3MgdXBjb21pbmcgc2Nob29sIGJyZWFrLiBTaGUgaXMgMyB5ZWFycyBvbGQgYW5kIGF0dGVuZHMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBhbmQgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3Nyb29tLiBZb3UgYXJlIHBsYW5uaW5nIGEgdHJpcCB0byB0aGUgbGlicmFyeSBhbmQgd2FudCB0byBjaGVjayBvdXQgc29tZSBib29rcyB0aGF0IGNvbm5lY3Qgd2l0aCBzb21ldGhpbmcgc2hlIGlzIGRvaW5nIGluIHNjaG9vbC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHNvbWUgcG90ZW50aWFsIGJvb2sgdG9waWNzIHRoYXQgcmVsYXRlIHRvIHNvbWV0aGluZyB0aGF0IGlzIGdvaW5nIG9uIGluIGhlciBjbGFzc3Jvb20gdGhpcyB3ZWVrP1wiLFxuICAgICAgICBcInRhZ1wiOiBcImJvb2tzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBhIHBhcmVudCB3aXRoIGEgY2hpbGQgd2hvIGhhcyBqdXN0IGJlZW4gYWNjZXB0ZWQgdG8gYXR0ZW5kIGFzIGEgZnVsbCB0aW1lIHN0dWRlbnQgYXQgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW91IHdhbnQgdG8gYWNjZXB0IHRoZSBvZmZlciBvZiBhZG1pc3Npb24uXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaWd1cmUgb3V0IHdoYXQgeW91IG5lZWQgdG8gZG8gYXQgdGhpcyB0aW1lIHRvIGZpbmFsaXplIHlvdXIgY2hpbGTigJlzIHBsYWNlIGF0IHRoZSBzY2hvb2wuXCIsXG4gICAgICAgIFwidGFnXCI6IFwiYWRtaXNzaW9uXzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IHdpdGggYSBjaGlsZCB3aG8gaGFzIGp1c3QgYmVlbiBhY2NlcHRlZCB0byBhdHRlbmQgYXMgYSBmdWxsIHRpbWUgc3R1ZGVudCBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3UgbmVlZCB0byBwYXkgb25lIG1vbnRoIG9mIHR1aXRpb24gYXMgYSBkZXBvc2l0LlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiRmluZCBvdXQgaG93IG11Y2ggb25lIG1vbnRoIG9mIHR1aXRpb24gaXMgYW5kIHdoZXRoZXIgb3Igbm90IGl0IGlzIHBvc3NpYmxlIHRvIHBheSBvbmxpbmUuXCIsXG4gICAgICAgIFwidGFnXCI6IFwiZGVwb3NpdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgbW92aW5nIHRvIFN0LiBMb3VpcyBmcm9tIEJlaWppbmcgYW5kIGxvb2tpbmcgZm9yIGEgUHJlLUsgcHJvZ3JhbSBmb3IgeW91ciBkYXVnaHRlciwgYWdlIDUuIFNoZSBpcyB2ZXJ5IGNsb3NlIHRvIGhlciBmcmllbmRzIGFuZCB5b3UgYXJlIHdvcnJpZWQgdGhhdCB0aGUgbW92ZSBtaWdodCBiZSBoYXJkIG9uIGhlci4gU2hlIG1heSBuZWVkIHNvbWUgZXh0cmEgc3VwcG9ydCBmcm9tIGhlciBuZXcgdGVhY2hlcnMgbGVhcm5pbmcgRW5nbGlzaCwgYWRhcHRpbmcgdG8gQW1lcmljYW4gY3VsdHVyZSwgYW5kIG1ha2luZyBuZXcgZnJpZW5kcy5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgc3RhZmYgYXBwcm9hY2ggcHJvdmlkaW5nIGV4dHJhIGhlbHAgdG8gc3R1ZGVudHMgd2hvIG5lZWQgaXQ/XCIsXG4gICAgICAgIFwidGFnXCI6IFwiaGVscFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgbG9va2luZyBhdCBOdXJzZXJ5IFNjaG9vbHMgZm9yIHlvdXIgc29vbiB0byBiZSAzIHllYXIgb2xkLiBIZSBoYXMgbmV2ZXIgYmVlbiBpbiBzY2hvb2wgb3IgZGF5Y2FyZSBiZWZvcmUgYW5kIHlvdSBhcmUgc29tZXdoYXQgd29ycmllZCBhYm91dCB0aGUgdHJhbnNpdGlvbi4gWW91J2QgbGlrZSB0byBlbnN1cmUgdGhhdCB5b3UnbGwgYmUgYWJsZSB0byBoYXZlIHN0cm9uZyBjb21tdW5pY2F0aW9uYXQgaGlzIG5ldyBzY2hvb2wuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGhhbmRsZSBjb21tdW5pY2F0aW5nIHdpdGggcGFyZW50cz9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJjb21tdW5pY2F0aW9uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiSXTigJlzIG1pZC1EZWNlbWJlciBhbmQgeW91ciBzb24sIGFnZSA0LCBjYW1lIGhvbWUgYWxsIGV4Y2l0ZWQgYWJvdXQgc2NpZW5jZSBjbGFzcy4gVGhleSBsZWFybmVkIGEgbmV3IHdvcmQsIGJ1dCBoZSBjYW7igJl0IGFjdHVhbGx5IHJlbWVtYmVyIHRoZSB3b3JkIHRoZXkgbGVhcm5lZCBhYm91dC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgd2FzIHRoZSB0b3BpYyBvZiBoaXMgcmVjZW50IHNjaWVuY2UgY2xhc3M/XCIsXG4gICAgICAgIFwidGFnXCI6IFwic2NpZW5jZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgc2VsZWN0aW5nIGEgcHJlLXNjaG9vbCwgYnV0IHdhbnQgdG8gYmUgc3VyZSB0aGF0IHlvdXIgZGF1Z2h0ZXIgd2lsbCBiZSByZWFkeSBmb3Iga2luZGVyZ2FydGVuIHdoZW4gaXTigJlzIHRpbWUuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgbnVyc2VyeSBzY2hvb2wgYXNzZXNzIGNoaWxkcmVu4oCZcyBrbm93bGVkZ2UsIHN1cHBvcnQgdGhlaXIgZ3Jvd3RoLCBhbmQgc2hhcmUgdGhlIHJlc3VsdHMgd2l0aCBwYXJlbnRzP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInBhcmVudF90ZWFjaGVyX2NvbmZlcmVuY2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgaGF2ZSByZWNlbnRseSBhY2NlcHRlZCBhIHBvc2l0aW9uIGZvciB5b3VyIGNoaWxkIGZvciB0aGUgY29taW5nIHNjaG9vbCB5ZWFyIGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFVwIHRvIHRoaXMgcG9pbnQsIHlvdXIgY2hpbGQgaGFzIGJlZW4gYXQgaG9tZSBhbmQgeW91IGFyZSBzb21ld2hhdCB3b3JyaWVkIGFib3V0IHRoZSB0cmFuc2l0aW9uLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIG51cnNlcnkgc2Nob29sIHN1cHBvcnQga2lkc+KAmSB0cmFuc2l0aW9ucyBpbnRvIHNjaG9vbD9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJvcmllbnRhdGlvblwiXG4gICAgfVxuXVxuIiwiaW1wb3J0IHsgVHJhY2tlckV2ZW50IH0gZnJvbSAnLi9ldmVudCc7XG5jb25zb2xlLmxvZygnZGF0YSBsb2FkZWQuJyk7XG5leHBvcnQgaW50ZXJmYWNlIE10dXJrVVJMRGF0YSB7XG4gICAgcmF3OiBzdHJpbmc7XG4gICAgYXNzaWdubWVudElEOiBzdHJpbmcgfCBudWxsO1xuICAgIGhpdElEOiBzdHJpbmcgfCBudWxsO1xuICAgIHdvcmtlcklEOiBzdHJpbmcgfCBudWxsO1xuICAgIHN1Ym1pdFRvOiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG5cbmV4cG9ydCBjb25zdCB1cmxEYXRhOiBNdHVya1VSTERhdGEgPSB7XG4gICAgcmF3OiB1cmxQYXJhbXMudG9TdHJpbmcoKSxcbiAgICBhc3NpZ25tZW50SUQ6IHVybFBhcmFtcy5nZXQoJ2Fzc2lnbm1lbnRJZCcpLFxuICAgIGhpdElEOiB1cmxQYXJhbXMuZ2V0KCdoaXRJZCcpLFxuICAgIHdvcmtlcklEOiB1cmxQYXJhbXMuZ2V0KCd3b3JrZXJJZCcpLFxuICAgIHN1Ym1pdFRvOiB1cmxQYXJhbXMuZ2V0KCd0dXJrU3VibWl0VG8nKSxcbn07XG5cbmV4cG9ydCBjbGFzcyBEYXRhIHtcbiAgICBwdWJsaWMgbG9nczogeyBbZXZlbnRUeXBlOiBzdHJpbmddOiBUcmFja2VyRXZlbnRbXSB9ID0ge307XG4gICAgcHVibGljIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBwdWJsaWMgZXJyb3JzOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyB1cmxEYXRhOiBNdHVya1VSTERhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihyYXdNdHVya1VSTERhdGE6IE10dXJrVVJMRGF0YSkge1xuICAgICAgICB0aGlzLnVybERhdGEgPSByYXdNdHVya1VSTERhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZGF0YSA9IG5ldyBEYXRhKHVybERhdGEpO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywgeyBkYXRhIH0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IG5vdyB9IGZyb20gXCIuLi91dGlscy9mdW5jc1wiO1xubG9nKFwiZXZlbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY29uc3QgZW51bSBBY3Rpb25FbnVtIHtcbiAgQ0xJQ0sgPSBcImNsaWNrXCIsXG4gIEJVVFRPTiA9IFwiYnV0dG9uXCIsXG4gIFNDUk9MTCA9IFwic2Nyb2xsXCIsXG4gIEhJU1RPUlkgPSBcImhpc3RvcnlcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyRXZlbnQge1xuICBhY3Rpb246IHN0cmluZztcbiAgdGltZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9UcmFja2VyRXZlbnQob2JqOiBhbnksIGFjdGlvbjogc3RyaW5nKSB7XG4gIG9iai5hY3Rpb24gPSBhY3Rpb247XG4gIG9iai50aW1lID0gbm93KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYWNrZXJFdmVudChvYmo6IGFueSk6IG9iaiBpcyBUcmFja2VyRXZlbnQge1xuICByZXR1cm4gb2JqLmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iai50aW1lICE9PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlVHJhY2tlckV2ZW50PFQ+IGltcGxlbWVudHMgVHJhY2tlckV2ZW50IHtcbiAgcHVibGljIGN1c3RFdjogQ3VzdG9tRXZlbnQ7XG4gIHB1YmxpYyBhY3Rpb246IHN0cmluZztcbiAgcHVibGljIHRpbWU6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoYWN0aW9uOiBzdHJpbmcsIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8VD4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmN1c3RFdiA9IG5ldyBDdXN0b21FdmVudChhY3Rpb24sIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMudGltZSA9IG5vdygpO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXRhaWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdEV2LmRldGFpbDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgQ2xpY2tFdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8e1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaWQ6IHN0cmluZztcbn0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICBpZDogc3RyaW5nLFxuICAgIGV2ZW50SW5pdERpY3Q/OlxuICAgICAgfCBDdXN0b21FdmVudEluaXQ8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgaWQ6IHN0cmluZyB9PlxuICAgICAgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5DTElDSywgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwueCA9IHg7XG4gICAgdGhpcy5kZXRhaWwueSA9IHk7XG4gICAgdGhpcy5kZXRhaWwuaWQgPSBpZDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgQnV0dG9uRXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHsga2V5OiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICAgIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8eyBrZXk6IHN0cmluZzsgaWQ6IHN0cmluZyB9PiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkNMSUNLLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC5rZXkgPSBrZXk7XG4gICAgdGhpcy5kZXRhaWwuaWQgPSBpZDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgSGlzdG9yeUV2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7XG4gIHVybDogc3RyaW5nO1xuICBleHRyYT86IGFueTtcbn0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZXh0cmE/OiBhbnksXG4gICAgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDx7IHVybDogc3RyaW5nIH0+IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uSElTVE9SWSwgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwudXJsID0gdXJsO1xuICAgIHRoaXMuZGV0YWlsLmV4dHJhID0gZXh0cmE7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBpc1RyYWNrZXJFdmVudCwgVHJhY2tlckV2ZW50IH0gZnJvbSBcIi4vZXZlbnRcIjtcbmxvZyhcInJlY2VpdmVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIEV2ZW50UmVjZWl2ZXIge1xuICBwcml2YXRlIG1hcCA9IG5ldyBNYXA8c3RyaW5nLCAoZXZlbnQ6IFRyYWNrZXJFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBlbWl0dGVyID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG5cbiAgcHVibGljIHJlZ2lzdGVyKGV2ZW50VHlwZTogc3RyaW5nLCBjYWxsYmFjaz86IChldmVudDogVHJhY2tlckV2ZW50KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5lbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0cmFja0V2ID0gKChldmVudCBhcyB1bmtub3duKSBhcyBDdXN0b21FdmVudClcbiAgICAgICAgLmRldGFpbCBhcyBUcmFja2VyRXZlbnQ7XG4gICAgICBpZiAoaXNUcmFja2VyRXZlbnQodHJhY2tFdikgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sodHJhY2tFdik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm1hcC5zZXQoZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRvRXZlbnQoZXZlbnQ6IFRyYWNrZXJFdmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5tYXAuZ2V0KFwiXCIgKyBldmVudC5hY3Rpb24pO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSBcIi4vLi4vcm91dGVyL2hpc3RvcnlcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xubG9nKFwiYmFubmVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIFRvcEJhbm5lciB7XG4gIHB1YmxpYyBzdGF0aWMgc2hvdygpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IHRydWU7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkVXAsIHRydWUpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZERvd24sIGZhbHNlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRDb250ZW50LCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaGlkZSgpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IGZhbHNlO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZERvd24sIHRydWUpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZFVwLCBmYWxzZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkQ29udGVudCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkb0Rpc3BsYXlDaGFuZ2UoKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPyBUb3BCYW5uZXIuaGlkZSgpIDogVG9wQmFubmVyLnNob3coKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5kZEFycm93LCBcImNsaWNrXCIsIFRvcEJhbm5lci5kb0Rpc3BsYXlDaGFuZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2hvd2luZyA9IHRydWU7XG59XG5cbkQuYWRkRXZlbnRMaXN0ZW5lcihcIm10dXJrLXRvcC1iYW5uZXItYmFja1wiLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChIaXN0b3J5LmNhbkJhY2t3YXJkKCkpIHtcbiAgICBSb3V0ZXIubG9hZFdpdGhQYXRoUHJlZml4KEhpc3RvcnkuYmFja3dhcmQoKSk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJUaGVyZSBpcyBubyBwYWdlIGhpc3RvcnkgdG8gZ28gYmFjayBmb3IgYXQgdGhpcyB0aW1lIVwiKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gXCIuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiZG9jdW1lbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgRCB7XG4gIHB1YmxpYyBzdGF0aWMgZG9jOiBEb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gIHB1YmxpYyBzdGF0aWMgZWxlbShlbGVtOiBFbGVtZW50IHwgc3RyaW5nKTogRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gRC5pZChlbGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW0gYXMgRWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc3BsYXkoZWxlbTogRWxlbWVudCB8IHN0cmluZywgc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgIGVsZW0gPSBELmVsZW0oZWxlbSk7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpO1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlkKGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IEQuZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IHdhcyBub3QgZm91bmQsIGlkOiA8JHtpZH0+LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcHVibGljIHN0YXRpYyBjbGF6KGNsYXo6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xuICAgIHJldHVybiBELmRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXopO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgdGFnKHRhZzogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XG4gICAgcmV0dXJuIEQuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpbWFnZShpZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGVycm9yKCgpID0+IEQuaWQoaWQpLnNldEF0dHJpYnV0ZShcInNyY1wiLCB1cmwpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBlbGVtOiBFbGVtZW50IHwgc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBsaXN0ZW5lcjogKGU6IEV2ZW50KSA9PiBhbnlcbiAgKSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCB3cmFwcGVyRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGlzdGVuZXIoZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG4gICAgKGVsZW0gYXMgRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCB3cmFwcGVyRnVuYyk7XG4gICAgcmV0dXJuIHdyYXBwZXJGdW5jO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlYWNoKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsIGFwcGx5OiAobm9kZTogRWxlbWVudCkgPT4gYW55KSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYXBwbHkoY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZWFjaFJlY3VyKFxuICAgIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsXG4gICAgYXBwbHk6IChub2RlOiBFbGVtZW50KSA9PiBhbnlcbiAgKSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGFwcGx5KGNoaWxkKTtcbiAgICAgIEQuZWFjaFJlY3VyKGNoaWxkLCBhcHBseSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjcmVhdGU8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXG4gICAgdGFnTmFtZTogSyxcbiAgICBvcHRpb25zPzogRWxlbWVudENyZWF0aW9uT3B0aW9uc1xuICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmxvZygnZWxlbWVudCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLyoqXG4gKiBUaGVzZSBhcmUgZWxlbWVudHMgdGhhdCBhcmUgaW4gZXZlcnkgc2luZ2xlIHByb2plY3QuIEV2ZW4gaWYgdGhleSBhcmUgbm90IHVzZWQgdGhleSBzaG91bGRcbiAqIGJlIHBsYWNlIGluIHRoZSBwcm9qZWN0IGFuZCBkaXNwbGF5IHNob3VsZCBiZSBzZXQgdG8gbm9uZS4gVGhpcyBzaW1wbGlmaWVzIGNvbmZpZ3VyYXRpb25cbiAqIGFuZCBzb21lIGNvbW1vbiBmdW5jdGlvbnMgYW5kIGFsbG93cyBsZXNzIG51bGwgY2hlY2tzIHRvIGJlIHBlcmZvcm1lZCBvdmVyYWxsLiBJZiB0aGVcbiAqIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgYXQgcnVuIHRpbWUgYW4gZW1wdHkgZGl2IHdpdGggdGhhdCBpZCBpcyBjcmVhdGVkIGFuZCBpdHMgZGlzcGxheVxuICogaXMgc2V0IHRvIG5vbmUgdGhlbiBhcHBlbmRlZCB0byB0aGUgYm9keS5cbiAqL1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGdldCBhbiBlbGVtZW50LCBpZiB1bnN1Y2Nlc3NmdWwsIGNyZWF0ZXMgZGl2IHdpdGggaWQgYW5kIGFwcGVuZHMgdG8gYm9keS5cbiAqXG4gKiBAcGFyYW0gaWQgLSB0aGUgaWQgb2YgdGhlIGVsZW1lbnQgdG8gcmV0cmlldmUuXG4gKi9cbmZ1bmN0aW9uIG1ha2VFbGVtSWZOb3RFeGlzdChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGxldCBlbGVtO1xuICAgIHRyeSB7XG4gICAgICAgIGVsZW0gPSBELmlkKGlkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZWxlbSA9IEQuY3JlYXRlKCdkaXYnKTtcbiAgICAgICAgZWxlbS5pZCA9IGlkO1xuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbn1cblxuLyoqXG4gKiBDb21tb25seSBhY2Nlc3NlZCBlbGVtZW50cywgYWxsb3dzIGZvciBjbGVhcmVyIGRvbSBtYW5pcCBvbiB0aGVzZSBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnRzID0ge1xuICAgIGRvY3VtZW50OiBELmRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgd3JhcHBlcjogbWFrZUVsZW1JZk5vdEV4aXN0KCd3cmFwcGVyJyksXG4gICAgaHRtbExvYzogbWFrZUVsZW1JZk5vdEV4aXN0KCdodG1sLWxvYycpLFxuICAgIGlubmVyQm9keTogbWFrZUVsZW1JZk5vdEV4aXN0KCdpbm5lci1ib2R5JyksXG4gICAgZGREb3duOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWJ1dHRvbicpLFxuICAgIGRkVXA6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1jb2xsYXBzZS1idXR0b24nKSxcbiAgICBkZENvbnRlbnQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tY29udGVudCcpLFxuICAgIGJhY2tCdXR0b246IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1iYWNrJyksXG4gICAgZGRBcnJvdzogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWFycm93JyksXG4gICAgbXRUb3BCYW5uZXJUZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItdGV4dCcpLFxuICAgIG10U2NlbmFyaW9Db250ZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoJ3NjZW5hcmlvX2NvbnRleHQnKSxcbiAgICBtdFNjZW5hcmlvUXVlc3Rpb246IG1ha2VFbGVtSWZOb3RFeGlzdCgnc2NlbmFyaW9fcXVlc3Rpb24nKSxcbiAgICBsb2dGaWxlSW5wdXQ6IG1ha2VFbGVtSWZOb3RFeGlzdChcbiAgICAgICAgJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWNvbnRlbnQtbG9nLWZpbGUtaW5wdXQnXG4gICAgKSxcbiAgICBzdWJtaXRGb3JtOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXN1Ym1pdC1mb3JtJyksXG4gICAgbW9kYWw6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbW9kYWwnKSxcbn07XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi8uLi9kb20vZWxlbWVudHMnO1xubG9nKCdodG1sIGxvYyBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGVudW0gQXBwRW51bSB7XG4gICAgSU5GT1JNQVRJT05fRk9SQUdJTkcgPSAnaW5mb3JtYXRpb24tZm9yYWdpbmcnLFxuICAgIENPR05JVElWRV9MT0FEID0gJ2NvZ25pdGl2ZS1sb2FkJyxcbiAgICBHRU5ERVJfTUFHID0gJ2dlbmRlci1tYWcnLFxuICAgIEVSUk9SID0gJ2Vycm9yJyxcbn1cblxuZXhwb3J0IGVudW0gTW9kZUVudW0ge1xuICAgIFJFQUwgPSAncmVhbCcsXG4gICAgU0FOREJPWCA9ICdzYW5kYm94JyxcbiAgICBURVNUID0gJ3Rlc3QnLFxuICAgIEVSUk9SID0gJ2Vycm9yJyxcbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxMb2Mge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLmh0bWxMb2M7XG4gICAgcHVibGljIHN0YXRpYyBhcHA6IEFwcEVudW07XG4gICAgcHVibGljIHN0YXRpYyBtb2RlOiBNb2RlRW51bTtcbiAgICBwdWJsaWMgc3RhdGljIHNjZW5hcmlvOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xuICAgICAgICBIVE1MTG9jLmFwcCA9IChIVE1MTG9jLmVsZW0uZGF0YXNldC5hcHAgYXMgQXBwRW51bSkgfHwgQXBwRW51bS5FUlJPUjtcbiAgICAgICAgSFRNTExvYy5tb2RlID1cbiAgICAgICAgICAgIChIVE1MTG9jLmVsZW0uZGF0YXNldC5tb2RlIGFzIE1vZGVFbnVtKSB8fCBNb2RlRW51bS5FUlJPUjtcbiAgICAgICAgSFRNTExvYy5zY2VuYXJpbyA9IEhUTUxMb2MuZWxlbS5kYXRhc2V0LnNjZW5hcmlvIHx8ICdlcnJvcic7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5sb2coJ21vZGFsIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLm1vZGFsO1xuXG4gICAgcHVibGljIHN0YXRpYyBkaXNwbGF5KHNyYzogc3RyaW5nKSB7XG4gICAgICAgIE1vZGFsLmVsZW0uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICAgIGBsZWZ0OiAke01hdGgucm91bmQod2luZG93LnBhZ2VYT2Zmc2V0KX1weDsgdG9wOiAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICApfXB4O2BcbiAgICAgICAgKTtcbiAgICAgICAgTW9kYWwuZWxlbS5jbGFzc0xpc3QucmVwbGFjZSgnaGlkZS1tb2RhbCcsICdzaG93LW1vZGFsJyk7XG4gICAgICAgIEQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgKG5vZGUgYXMgSFRNTElGcmFtZUVsZW1lbnQpLnNyYyA9IHNyYztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9zY3JvbGwnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGhpZGUoKSB7XG4gICAgICAgIE1vZGFsLmVsZW0uY2xhc3NMaXN0LnJlcGxhY2UoJ3Nob3ctbW9kYWwnLCAnaGlkZS1tb2RhbCcpO1xuICAgICAgICBELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5zcmMgPSAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbiAgICB9XG59XG5cbkQuYWRkRXZlbnRMaXN0ZW5lcihNb2RhbC5lbGVtLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIE1vZGFsLmhpZGUoKTtcbn0pO1xuRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgRC5hZGRFdmVudExpc3RlbmVyKG5vZGUsICdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCwgbm93IH0gZnJvbSAnLi8uLi91dGlscy9mdW5jcyc7XG5sb2coJ3Njcm9sbCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLyoqXG4gKiBMaW5lYXIgaW1wbGVtZW50YXRpb24gb2Ygc2Nyb2xsaW5nLlxuICogRm9sbG93cyB0aGUgc2luZ2xldG9uIHBhdHRlcm4sIGNhbGwgZG8gdG8gc3RhcnQgYSBzY3JvbGwgb3BlcmF0aW9uLlxuICpcbiAqIElmIGEgc2Nyb2xsIGlzIGNhbGxlZCB3aGVuIGFub3RoZXIgc2Nyb2xsIGhhcyBhbHJlYWR5IGJlZ3VuIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93biwgYnV0IHRoZSBmaXJzdCBzY3JvbGwgd2lsbCBjb250aW51ZSB1bnRpbCBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgU2Nyb2xsIHtcbiAgICBwdWJsaWMgc3RhdGljIFNURVBfSU5fTVMgPSAxNztcblxuICAgIHB1YmxpYyBzdGF0aWMgY2FsbGJhY2soXG4gICAgICAgIGVuZFBvczogbnVtYmVyLFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyID0gMjAwLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55ID0gbm9vcFxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAoU2Nyb2xsLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JvbGwucnVubmluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9sZENvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9yKG9sZENvbXBsZXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUoZW5kUG9zLCBkdXJhdGlvbiwgY29tcGxldGUpLmF0dGVtcHRTY3JvbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHByb21pc2UoZW5kUG9zOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAyMDApIHtcbiAgICAgICAgaWYgKFNjcm9sbC5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBtYWtlIG11bHRpcGxlIGNhbGxzIHRvIHNjcm9sbCBhdCB0aGUgc2FtZSB0aW1lLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgcmVzb2x2ZTogKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICByZWplY3Q6IChhcmcwOiBhbnkpID0+IHZvaWRcbiAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1blJlc29sdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZShlbmRQb3MsIGR1cmF0aW9uLCBydW5SZXNvbHZlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRlbXB0U2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBydW5uaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgU2Nyb2xsKDAsIDAsIG5vb3ApO1xuICAgIHByaXZhdGUgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZW5kUG9zOiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgZHVyYXRpb246IG51bWJlcixcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICAgICkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Njcm9sbCcpKTtcbiAgICAgICAgICAgIGNvbXBsZXRlKGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIFNjcm9sbC5ydW5uaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlKFxuICAgICAgICBlbmRQb3M6IG51bWJlcixcbiAgICAgICAgZHVyYXRpb246IG51bWJlcixcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICAgICk6IFNjcm9sbCB7XG4gICAgICAgIHRoaXMuZW5kUG9zID0gZW5kUG9zO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjU2Nyb2xsQW1vdW50KCkge1xuICAgICAgICBjb25zdCBjdXJUaW1lID0gbm93KCk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgKHRoaXMuZHVyYXRpb24gLSBjdXJUaW1lKSAvIFNjcm9sbC5TVEVQX0lOX01TXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGN1clBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgodGhpcy5lbmRQb3MgLSBjdXJQb3MpIC8gc3RlcHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuY2FsY1Njcm9sbEFtb3VudCgpKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gdGhpcy5lbmRQb3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGF0dGVtcHRTY3JvbGwoKSB7XG4gICAgICAgIGlmICgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBpbiB3aW5kb3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuZW5kUG9zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscy9mdW5jcyc7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9kYXRhLWxvZy9kYXRhJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLy4uL3V0aWxzL3FfcGFyYW1zJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5sb2coJ3N1Ym1pdCBmb3JtIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgaW50ZXJmYWNlIEFsbG93U3VibWlzc2lvbiB7XG4gICAgYWxsb3coKTogc3RyaW5nIHwgbnVsbDtcbiAgICBwcmVTdWJtaXQoLi4uYXJnczogYW55KTogYW55O1xufVxuXG5jb25zdCBrID0gJ05jRjJXUmtVYmY1dHpqNGJJdkk5ODFGcW1TNnBNbE84M2cyajd1NVInO1xuY29uc3QgZ2F0ZSA9ICdodHRwczovLzJ5a29wcTFvaGEuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vUFJPRC9sb2dzJztcblxuY29uc3QgQWxsb3dTdWJtaXNzaW9uRGVmYXVsdDogQWxsb3dTdWJtaXNzaW9uID0ge1xuICAgIGFsbG93OiAoKSA9PiBudWxsLFxuICAgIHByZVN1Ym1pdDogbm9vcCxcbn07XG5cbmV4cG9ydCBjbGFzcyBTdWJtaXRGb3JtIHtcbiAgICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBwdWJsaWMgc3RhdGljIGFsbG93U3VibWl0RGVmYXVsdCA9IHsgYWxsb3c6ICgpID0+IHRydWUsIHByZVN1Ym1pdDogbm9vcCB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cChcbiAgICAgICAgYWxsb3dTdWJtaXNzaW9uOiBBbGxvd1N1Ym1pc3Npb24gPSBBbGxvd1N1Ym1pc3Npb25EZWZhdWx0XG4gICAgKSB7XG4gICAgICAgIFN1Ym1pdEZvcm0uc3VibWl0RnVuYyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWQgPSBhbGxvd1N1Ym1pc3Npb24uYWxsb3coKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXAgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLnJhdyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgPSBxcC5nZXQoJ2Fzc2lnbm1lbnRJZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5oaXRJRCA9IHFwLmdldCgnaGl0SWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEud29ya2VySUQgPSBxcC5nZXQoJ3dvcmtlcklkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLnN1Ym1pdFRvID1cbiAgICAgICAgICAgICAgICAgICAgcXAuZ2V0KCd0dXJrU3VibWl0VG8nKSArICcvbXR1cmsvZXh0ZXJuYWxTdWJtaXQnO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnVybERhdGEuYXNzaWdubWVudElEICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIChELmlkKCdhc3NpZ25tZW50LWlkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudXJsRGF0YS5oaXRJRCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAoRC5pZCgnaGl0LWlkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLmhpdElEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoRWxlbWVudHMuc3VibWl0Rm9ybSBhcyBIVE1MRm9ybUVsZW1lbnQpLmFjdGlvbiA9IGRhdGEudXJsRGF0YVxuICAgICAgICAgICAgICAgICAgICAuc3VibWl0VG8gYXMgc3RyaW5nO1xuICAgICAgICAgICAgICAgIGFsbG93U3VibWlzc2lvbi5wcmVTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goZ2F0ZSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd4LWFwaS1rZXknOiBrLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW5kYm94OiBwYXJhbXMuc2FuZGJveCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHd1c3RsX2tleTogcGFyYW1zLnd1c3RsX2tleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHBhcmFtcy5wcm9qZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uOiBwYXJhbXMuaXRlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBwYXJhbXMudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudElEOiBkYXRhLnVybERhdGEuYXNzaWdubWVudElELFxuICAgICAgICAgICAgICAgICAgICAgICAgaGl0SUQ6IGRhdGEudXJsRGF0YS5oaXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlcklEOiBkYXRhLnVybERhdGEud29ya2VySUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2c6IGRhdGEuc2VyaWFsaXplKCksXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3Auc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uUmVzcCA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb25SZXNwKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICdZb3UgbWFkZSBhIGJhZCByZXF1ZXN0IHdpdGggeW91ciBzdWJtaXNzaW9uLiBUaGUgc2VydmVyIHRoaW5rcyB0aGF0IHlvdSBtYWRlIHRoaXMgZXJyb3I6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb25SZXNwLmVycm9yXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgU3VibWl0Rm9ybS5lbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFN1Ym1pdEZvcm0uZWxlbS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYWxsb3dlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFN1Ym1pdEZvcm0uZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHN1Ym1pdEZ1bmM6IChldmVudDogRXZlbnQpID0+IGFueTtcbn1cbiIsImltcG9ydCB7IFRvcEJhbm5lciB9IGZyb20gXCIuL2Jhbm5lclwiO1xuaW1wb3J0IHsgSFRNTExvYyB9IGZyb20gXCIuL2h0bWxfbG9jXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja2VyRWxlbWVudHMge1xuICBwdWJsaWMgc3RhdGljIHNldHVwVHJhY2tlckVsZW1lbnRzKCkge1xuICAgIC8vIHNldHVwIGRvbSBlbGVtZW50c1xuICAgIFRvcEJhbm5lci5zZXR1cCgpO1xuICAgIEhUTUxMb2Muc2V0dXAoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJy4vLi4vdHJhY2tlci90cmFja2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5RW50cnkge1xuICAgIGhhc1ByZXZVUkw6IGJvb2xlYW47XG4gICAgcHJldkVudHJ5PzogSGlzdG9yeUVudHJ5O1xuICAgIGN1cnJVUkw6IHN0cmluZztcbiAgICBleHRyYT86IGFueTtcbiAgICBuZXh0RW50cmllczogSGlzdG9yeUVudHJ5W107XG59XG5cbmZ1bmN0aW9uIG5ld0hpc3RvcnlFbnRyeShcbiAgICBjdXJyVVJMOiBzdHJpbmcsXG4gICAgaGFzUHJldlVSTDogYm9vbGVhbixcbiAgICBwcmV2RW50cnk/OiBIaXN0b3J5RW50cnksXG4gICAgZXh0cmE/OiBhbnlcbik6IEhpc3RvcnlFbnRyeSB7XG4gICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYygnaGlzdG9yeScpKHsgdXJsOiBjdXJyVVJMLCBleHRyYSB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyVVJMLFxuICAgICAgICBoYXNQcmV2VVJMLFxuICAgICAgICBwcmV2RW50cnksXG4gICAgICAgIGV4dHJhLFxuICAgICAgICBuZXh0RW50cmllczogW10sXG4gICAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEhpc3Rvcnkge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yd2FyZCh1cmw6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBoaXN0RW50ID0gbmV3SGlzdG9yeUVudHJ5KHVybCwgdHJ1ZSwgSGlzdG9yeS5jdXJyaGlzdG9yeSwgZXh0cmEpO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5Lm5leHRFbnRyaWVzLnB1c2goaGlzdEVudCk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2FuQmFja3dhcmQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5Lmhhc1ByZXZVUkwgJiZcbiAgICAgICAgICAgICFIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeT8uZXh0cmE/LndyYXBwZXJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGJhY2t3YXJkKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghSGlzdG9yeS5jYW5CYWNrd2FyZCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnbyBiYWNrIGFueSBmdXJ0aGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5KTtcbiAgICAgICAgY29uc3QgcHJldkVudHJ5ID0gSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnkgYXMgSGlzdG9yeUVudHJ5O1xuICAgICAgICBjb25zdCBuZXh0VVJMID0gcHJldkVudHJ5LmN1cnJVUkw7XG4gICAgICAgIGNvbnN0IGhpc3RFbnQgPSBuZXdIaXN0b3J5RW50cnkoXG4gICAgICAgICAgICBuZXh0VVJMLFxuICAgICAgICAgICAgcHJldkVudHJ5Lmhhc1ByZXZVUkwsXG4gICAgICAgICAgICBwcmV2RW50cnkucHJldkVudHJ5LFxuICAgICAgICAgICAgeyBiYWNrOiB0cnVlIH1cbiAgICAgICAgKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IGhpc3RFbnQ7XG4gICAgICAgIHJldHVybiBuZXh0VVJMO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAodXJsOiBzdHJpbmcsIGV4dHJhPzogYW55KSB7XG4gICAgICAgIEhpc3RvcnkuZmlyc3RIaXN0b3J5ID0gbmV3SGlzdG9yeUVudHJ5KHVybCwgZmFsc2UsIHVuZGVmaW5lZCwgZXh0cmEpO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gSGlzdG9yeS5maXJzdEhpc3Rvcnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmlyc3RIaXN0b3J5OiBIaXN0b3J5RW50cnk7XG4gICAgcHJpdmF0ZSBzdGF0aWMgY3Vycmhpc3Rvcnk6IEhpc3RvcnlFbnRyeTtcbn1cblxuKHdpbmRvdyBhcyBhbnkpLmggPSBIaXN0b3J5O1xuIiwiaW1wb3J0IHsgRCB9IGZyb20gJy4uL2RvbS9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4uL2RvbS9lbGVtZW50cyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uL2RvbS9tb2RhbCc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi4vdXRpbHMvZnVuY3MnO1xuaW1wb3J0IHsgSFRNTExvYWRlciB9IGZyb20gJy4uL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnknO1xubG9nKCdyb3V0ZXIgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjb25zdCBlbnVtIFJvdXRlck1vZGUge1xuICAgIE9GRixcbiAgICBPTixcbiAgICBTVEFOREFSRF9BTExPV0FOQ0VTLFxufVxuXG4vLyBUT0RPOiBOZWVkIHRvIGltcHJvdmUgdGhpcyB0byB0YWtlIGluIGEgZnVuY3Rpb24gZm9yIHRoZSBhbGxvd2FuY2Ugb3IgcmVkdWNlIGFic3RyYWN0bmVzcyBvdmVyYWxsLlxuXG5leHBvcnQgY29uc3QgZW51bSBSb3V0ZXJNb2R1bGUge1xuICAgIEEgPSAnQScsXG4gICAgSU1HID0gJ0lNRycsXG4gICAgRk9STSA9ICdGT1JNJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJDb25maWcge1xuICAgIG1vZHVsZTogUm91dGVyTW9kdWxlO1xuICAgIG1vZGU6IFJvdXRlck1vZGU7XG59XG5cbmludGVyZmFjZSBGdWxsUm91dGVyQ29uZmlnIGV4dGVuZHMgUm91dGVyQ29uZmlnIHtcbiAgICBzZXR1cChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpOiBhbnk7XG59XG5cbmZ1bmN0aW9uIHRlc3RPbihlbGVtOiBFbGVtZW50LCBjb25maWc6IFJvdXRlckNvbmZpZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIGVsZW0udGFnTmFtZSA9PT0gY29uZmlnLm1vZHVsZSAmJlxuICAgICAgICAoY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuT04gfHxcbiAgICAgICAgICAgIGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMpXG4gICAgKTtcbn1cbmZ1bmN0aW9uIHRlc3RBbGxvd2FuY2UoY29uZmlnOiBSb3V0ZXJDb25maWcpIHtcbiAgICByZXR1cm4gY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUztcbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XG4gICAgcHVibGljIHN0YXRpYyBIQVNIX1RBR1MgPSBuZXcgUmVnRXhwKCcjJyk7XG4gICAgcHVibGljIHN0YXRpYyBFTVBUWSA9IG5ldyBSZWdFeHAoJ14kJyk7XG4gICAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0wgPSBuZXcgUmVnRXhwKCdAJyk7XG5cbiAgICBwdWJsaWMgc3RhdGljIEhBU0hfVEFHX1JFU1BPTkRFUiA9IG5vb3A7XG4gICAgcHVibGljIHN0YXRpYyBFTVBUWV9SRVNQT05ERVIgPSAoZXZlbnQ6IEV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRfU1lNQk9MX1JFU1BPTkRFUiA9IChldmVudDogRXZlbnQpID0+XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwdWJsaWMgc3RhdGljIHBhdGhQcmVmaXggPSAnJztcblxuICAgIHB1YmxpYyBzdGF0aWMgY29uZmlndXJlKGNvbmZpZ3M6IFJvdXRlckNvbmZpZ1tdLCBwYXRoUHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgICAgICAgIFJvdXRlci5jb25maWdzLnNldChjb25maWcubW9kdWxlLCBSb3V0ZXIudXBncmFkZUNvbmZpZyhjb25maWcpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFJvdXRlci5wYXRoUHJlZml4ID0gcGF0aFByZWZpeDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICAgICAgRC5lYWNoUmVjdXIoZWxlbSwgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29uZmlnIG9mIFJvdXRlci5jb25maWdzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RPbihub2RlLCBjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5zZXR1cChjb25maWcsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBTVEFOREFSRF9MSU5LX0xJU1RFTkVSKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yKCgpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGFyZ2V0LmhyZWY7XG4gICAgICAgICAgICBIaXN0b3J5LmZvcndhcmQoUm91dGVyLmdldFBhdGhOYW1lKHVybCkpO1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gSFRNTExvYWRlci5sb2FkVVJMKHVybCwgRWxlbWVudHMuaHRtbExvYyk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld1BhZ2VMb2FkJykpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBPTl9DT01QTEVURV9TTEwocG9zdDogKGU6IE1vdXNlRXZlbnQpID0+IGFueSkge1xuICAgICAgICByZXR1cm4gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGVycm9yKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBSb3V0ZXIuU1RBTkRBUkRfTElOS19MSVNURU5FUihlKTtcbiAgICAgICAgICAgICAgICBwb3N0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBJTUFHRV9MSU5LX0xJU1RFTkVSKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yKCgpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBGT1JNX09GRl9MSVNURU5FUihlOiBFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnQWxsIGZvcm1zIGV4Y2VwdCBmb3IgdGhlIG9uZSBpbiB0aGUgdG9wIGhlYWRlciBhcmUgaW5hY3RpdmUuJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEFsbG93YW5jZXNPbigpIHtcbiAgICAgICAgUm91dGVyLnJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgICAgICAgICAgeyByZWdleDogUm91dGVyLkVNUFRZLCBmdW5jOiBSb3V0ZXIuRU1QVFlfUkVTUE9OREVSIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiBSb3V0ZXIuSEFTSF9UQUdTLCBmdW5jOiBSb3V0ZXIuSEFTSF9UQUdfUkVTUE9OREVSIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiBSb3V0ZXIuQVRfU1lNQk9MLCBmdW5jOiBSb3V0ZXIuQVRfU1lNQk9MX1JFU1BPTkRFUiB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEFsbG93YW5jZXNPZmYoKSB7XG4gICAgICAgIFJvdXRlci51bnJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgICAgICAgICAgUm91dGVyLkVNUFRZLFxuICAgICAgICAgICAgUm91dGVyLkhBU0hfVEFHUyxcbiAgICAgICAgICAgIFJvdXRlci5BVF9TWU1CT0xcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckFsbG93YW5jZShcbiAgICAgICAgLi4ucmVnZXhzOiBBcnJheTx7IHJlZ2V4OiBSZWdFeHA7IGZ1bmM6IChldmVudDogRXZlbnQpID0+IGFueSB9PlxuICAgICkge1xuICAgICAgICByZWdleHMuZm9yRWFjaCgocmVnZXgpID0+XG4gICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuc2V0KHJlZ2V4LnJlZ2V4LCByZWdleC5mdW5jKVxuICAgICAgICApO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJBbGxvd2FuY2UoLi4ucmVnZXhzOiBSZWdFeHBbXSkge1xuICAgICAgICByZWdleHMuZm9yRWFjaCgocmVnZXgpID0+IFJvdXRlci5saW5rQWxsb3dhbmNlcy5kZWxldGUocmVnZXgpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBjbGVhckFsbG93YW5jZXMoKSB7XG4gICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBIaXN0b3J5LmZvcndhcmQoUm91dGVyLmdldFBhdGhOYW1lKHVybCkpO1xuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdQYWdlTG9hZCcpKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRXaXRoUGF0aFByZWZpeChwYWdlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gSFRNTExvYWRlci5sb2FkVVJMKFxuICAgICAgICAgICAgUm91dGVyLnBhdGhQcmVmaXggKyBwYWdlLFxuICAgICAgICAgICAgRWxlbWVudHMuaHRtbExvY1xuICAgICAgICApO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld1BhZ2VMb2FkJykpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIFNldHVwRnVuY3Rpb25zID0ge1xuICAgICAgICBBOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhTm9kZSA9IGVsZW0gYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IGFOb2RlLmhyZWY7XG4gICAgICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSByZWdleC50ZXN0KGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgIXRlc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChocmVmLnN1YnN0cihocmVmLmxlbmd0aCAtIDMpID09PSAncGRmJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGFsLmRpc3BsYXkoaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuU1RBTkRBUkRfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBJTUc6IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZ05vZGUgPSBlbGVtIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSAhcmVnZXgudGVzdChpbWdOb2RlLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiB0ZXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuSU1BR0VfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBGT1JNOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtTm9kZSA9IGVsZW0gYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gIXJlZ2V4LnRlc3QoZm9ybU5vZGUuc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmIHRlc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5GT1JNX09GRl9MSVNURU5FUlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdzdWJtaXQnLCBSb3V0ZXIuRk9STV9PRkZfTElTVEVORVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb25maWdzID0gbmV3IE1hcDxSb3V0ZXJNb2R1bGUsIEZ1bGxSb3V0ZXJDb25maWc+KCk7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBsaW5rQWxsb3dhbmNlczogTWFwPFJlZ0V4cCwgKGV2ZW50OiBFdmVudCkgPT4gYW55PiA9IG5ldyBNYXA8XG4gICAgICAgIFJlZ0V4cCxcbiAgICAgICAgKGV2ZW50OiBFdmVudCkgPT4gYW55XG4gICAgPigpO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGF0aFJlZ2V4ID0gL1xcLyhbXFx3XSsuaHRtbCkvO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBncmFkZUNvbmZpZyhjb25maWc6IFJvdXRlckNvbmZpZyk6IEZ1bGxSb3V0ZXJDb25maWcge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlOiBjb25maWcubW9kdWxlLFxuICAgICAgICAgICAgbW9kZTogY29uZmlnLm1vZGUsXG4gICAgICAgICAgICBzZXR1cDogUm91dGVyLlNldHVwRnVuY3Rpb25zW2NvbmZpZy5tb2R1bGVdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRQYXRoTmFtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJldCA9IFJvdXRlci5wYXRoUmVnZXguZXhlYyh1cmwpO1xuICAgICAgICByZXR1cm4gcmV0ID09PSBudWxsID8gdXJsIDogcmV0Lmxlbmd0aCA+IDEgPyByZXRbMV0gOiB1cmw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaXNUcmFja2VyRXZlbnQsIG9iamVjdFRvVHJhY2tlckV2ZW50IH0gZnJvbSAnLi4vZGF0YS1sb2cvZXZlbnQnO1xuaW1wb3J0IHsgRXZlbnRSZWNlaXZlciB9IGZyb20gJy4uL2RhdGEtbG9nL3JlY2VpdmVyJztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL2VsZW1lbnRzJztcbmltcG9ydCB7IFRyYWNrZXJFbGVtZW50cyB9IGZyb20gJy4uL2RvbS90cmFja2VyX2VsZW1zJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2csIHNldERlYnVnTGV2ZWwgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgU2NlbmFyaW8gfSBmcm9tICcuLi91dGlscy9zY2VuYXJpb3MnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vLi4vZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBBbGxvd1N1Ym1pc3Npb24sIFN1Ym1pdEZvcm0gfSBmcm9tICcuLy4uL2RvbS9zdWJtaXRfZm9ybSc7XG5cbmxvZygndHJhY2tlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrZXJDb25maWd1cmF0aW9uIHtcbiAgICBhbGxvd1N1Ym1pc3Npb246IEFsbG93U3VibWlzc2lvbjtcbiAgICBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bTtcbiAgICBidWNrZXROYW1lOiBzdHJpbmc7XG4gICAga2V5UHJlZml4OiBzdHJpbmc7XG4gICAgc2V0dXAoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNrZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgbGFzdFBvcyA9IHsgeDogMCwgeTogMCwgdGltZTogMCB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBsb2FkU2NlbmFyaW8oc2NlbjogU2NlbmFyaW8pIHtcbiAgICAgICAgbGV0IHN1YiA9IHNjZW4uY29udGV4dDtcbiAgICAgICAgaWYgKHN1Yi5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAgc3ViID0gc3ViLnN1YnN0cmluZygwLCA1MCk7XG4gICAgICAgICAgICBjb25zdCBpbmRzID0gW1xuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignICcpLFxuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignLicpLFxuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignLCcpLFxuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignPycpLFxuICAgICAgICAgICAgICAgIHN1Yi5sYXN0SW5kZXhPZignIScpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNvbnN0IGluZCA9IE1hdGgubWF4KC4uLmluZHMpO1xuICAgICAgICAgICAgc3ViID0gc3ViLnN1YnN0cmluZygwLCBpbmQpICsgJy4uLic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc2Nlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkZWQgc2NlbicpO1xuICAgICAgICBFbGVtZW50cy5tdFRvcEJhbm5lclRleHQuaW5uZXJUZXh0ID0gc3ViO1xuICAgICAgICBFbGVtZW50cy5tdFNjZW5hcmlvQ29udGV4dC5pbm5lclRleHQgPSBzY2VuLmNvbnRleHQ7XG4gICAgICAgIEVsZW1lbnRzLm10U2NlbmFyaW9RdWVzdGlvbi5pbm5lclRleHQgPSBzY2VuLnF1ZXN0aW9uO1xuICAgICAgICBFbGVtZW50cy5odG1sTG9jLmRhdGFzZXQudGFzayA9IHNjZW4udGFnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnQoY29uZmlnOiBUcmFja2VyQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzZXREZWJ1Z0xldmVsKGNvbmZpZy5kZWJ1Z0xldmVsKTtcbiAgICAgICAgLy8gY29uZmlndXJlIHRyYWNrZXIgc3BlY2lmaWMgZWxlbWVudHNcbiAgICAgICAgVHJhY2tlckVsZW1lbnRzLnNldHVwVHJhY2tlckVsZW1lbnRzKCk7XG4gICAgICAgIFN1Ym1pdEZvcm0uc2V0dXAoY29uZmlnLmFsbG93U3VibWlzc2lvbik7XG4gICAgICAgIGRhdGEuZGF0YS50YXNrID0gRWxlbWVudHMuaHRtbExvYy5kYXRhc2V0LnRhc2s7XG4gICAgICAgIGNvbmZpZy5zZXR1cCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFdmVudChldmVudFR5cGU6IHN0cmluZykge1xuICAgICAgICBkYXRhLmxvZ3NbZXZlbnRUeXBlXSA9IFtdO1xuICAgICAgICB0aGlzLnJlY2VpdmVyLnJlZ2lzdGVyKGV2ZW50VHlwZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBkYXRhLmxvZ3NbZXZlbnRUeXBlXS5wdXNoKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV2ZW50RGlzcGF0Y2hGdW5jKGV2ZW50VHlwZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRFdmVudERpc3BhdGNoRnVuYyhldmVudFR5cGU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gKGV2RGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2RGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVHJhY2tlckV2ZW50KGV2RGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VG9UcmFja2VyRXZlbnQoZXZEYXRhLCBldmVudFR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVyLmRvRXZlbnQoZXZEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGF0dGFjaERhdGEoa2V5OiBzdHJpbmcsIGF0dHJpYnV0ZTogYW55KSB7XG4gICAgICAgIGRhdGEuZGF0YVtrZXldID0gYXR0cmlidXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIGNvbXB1dGU6ICh2YWw6IGFueSkgPT4gYW55KSB7XG4gICAgICAgIGRhdGEuZGF0YVtuYW1lXSA9IGNvbXB1dGUoZGF0YS5kYXRhW25hbWVdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZWNlaXZlciA9IG5ldyBFdmVudFJlY2VpdmVyKCk7XG59XG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vLi4vZGF0YS1sb2cvZGF0YVwiO1xubG9nKFwiY29uc29sZSB3cmFwcGVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVycm9yPFQ+KFxuICBmdW5jOiAoLi4uYXJnczogYW55KSA9PiBUXG4pOiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcbiAgcmV0dXJuIGVycm9ySE8oZnVuYykoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9ySE88VD4oXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IFRcbik6ICguLi5hcmdzOiBhbnkpID0+IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xuICByZXR1cm4gYXN5bmMgKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuYyhhcmdzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGF0YS5lcnJvcnMucHVzaChlcnJvcik7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIERlYnVnTGV2ZWxFbnVtIHtcbiAgTk9ORSA9IDEsXG4gIEJBU0lDID0gMixcbiAgREVUQUlMRUQgPSAzLFxufVxuXG5sZXQgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW0gPSBEZWJ1Z0xldmVsRW51bS5CQVNJQztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlYnVnTGV2ZWwobGV2ZWw6IERlYnVnTGV2ZWxFbnVtKSB7XG4gIGRlYnVnTGV2ZWwgPSBsZXZlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlOiBzdHJpbmcsIGltcG9ydGFuY2U6IERlYnVnTGV2ZWxFbnVtKSB7XG4gIGlmIChkZWJ1Z0xldmVsID49IGltcG9ydGFuY2UpIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiZnVuY3MgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5XG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5leHBvcnQgZnVuY3Rpb24gbm93KCk6IG51bWJlciB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn1cbiIsImltcG9ydCB7IEQgfSBmcm9tICcuLi9kb20vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL2Z1bmNzJztcbmxvZygnaHRtbCBsb2FkZXIgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGUge1xuICAgIFtuYW1lOiBzdHJpbmddOiBFbGVtZW50O1xufVxuZXhwb3J0IGNsYXNzIEhUTUxMb2FkZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgQ0FDSEU6IENhY2hlID0ge307XG5cbiAgICBwdWJsaWMgc3RhdGljIGZpbmlzaCgpIHtcbiAgICAgICAgSFRNTExvYWRlci5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzRmluaXNoZWQoKSB7XG4gICAgICAgIHJldHVybiBIVE1MTG9hZGVyLmZpbmlzaGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2FjaGVIVE1MKG5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChIVE1MTG9hZGVyLmZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBjYWNoZSBuZXcgSFRNTCBlbnRpdGllcyBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZC4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRzbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RzLWxvYWQnKTtcbiAgICAgICAgdHNsLmRhdGFzZXQubmFtZSA9IG5hbWU7XG4gICAgICAgIHRzbC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICB0aGlzLkNBQ0hFW25hbWVdID0gdHNsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJQb3N0TG9hZEZ1bmMoZnVuYzogKCkgPT4gYW55KSB7XG4gICAgICAgIGxvZygncmVnc2l0ZXIgcG9zdCBsb2FkIGZ1bmN0aW9uJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICBIVE1MTG9hZGVyLnBvc3RMb2FkRnVuYyA9IGZ1bmM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBsb2FkKGh0bWw6IHN0cmluZywgZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2coJ2JlZ2luIGxvYWQnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IEQuZWxlbShlbGVtKTtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWcgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbCk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5yZW1vdmVUYWdzRnJvbURvY3VtZW50RnJhZ21lbnQoZnJhZywgJ3NjcmlwdCcpO1xuICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIubG9hZEFsbENhY2hlZEVsZW1lbnRzKGZyYWcpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgICAgICAgICAgICBsb2coJ2VuZCBsb2FkJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIucG9zdExvYWRGdW5jKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRVUkwodXJsOiBzdHJpbmcsIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIEhUTUxMb2FkZXIubG9hZChhd2FpdCBIVE1MTG9hZGVyLmdldEhUTUwodXJsKSwgZWxlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRIVE1MKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsb2coJ2JlZ2luIHJlcXVlc3QnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQobnVsbCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZygncmVzb2x2ZSByZXF1ZXN0JywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZpbmlzaGVkID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwb3N0TG9hZEZ1bmM6ICgpID0+IGFueSA9IG5vb3A7XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZW1vdmVUYWdzRnJvbURvY3VtZW50RnJhZ21lbnQoXG4gICAgICAgIGZyYWc6IERvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgIHRhZ05hbWU6IHN0cmluZ1xuICAgICkge1xuICAgICAgICBmcmFnLnF1ZXJ5U2VsZWN0b3JBbGwodGFnTmFtZSkuZm9yRWFjaCgodGFnKSA9PiBmcmFnLnJlbW92ZUNoaWxkKHRhZykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZsYXR0ZW5UU0xvYWRUYWdzKCkge1xuICAgICAgICBsb2coJ0ZsYXR0ZW5pbmcnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgIGNvbnN0IHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAgICAgT2JqZWN0LmtleXMoSFRNTExvYWRlci5DQUNIRSkuZm9yRWFjaChcbiAgICAgICAgICAgIChuYW1lKSA9PlxuICAgICAgICAgICAgICAgIChIVE1MTG9hZGVyLkNBQ0hFW25hbWVdID0gSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFnKFxuICAgICAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSkgYXMgRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgcyxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICkgYXMgRWxlbWVudClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBtdWx0aXBsZVRhYnMobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJldCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcmV0ICs9ICdcXHQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmxhdHRlblRTTG9hZFRhZyhcbiAgICAgICAgZWxlbTogRWxlbWVudCxcbiAgICAgICAgZmxhdHRlbmVkOiBTZXQ8c3RyaW5nPixcbiAgICAgICAgY291bnQ6IG51bWJlclxuICAgICk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgY29uc3QgdGFicyA9IEhUTUxMb2FkZXIubXVsdGlwbGVUYWJzKGNvdW50KTtcbiAgICAgICAgaWYgKGNvdW50ID4gMTAwKSB7XG4gICAgICAgICAgICBhbGVydCgnQ2hlY2sgdGhlIGNvbnNvbGUsIGFuIGVycm9yIGhhcyBvY2N1cnJlZC4nKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnSXQgc2VlbXMgbGlrZSB5b3UgbWlnaHQgaGF2ZSBpbmZpbml0ZWx5IHJlY3Vyc2l2ZWx5IG5lc3RlZCB0YWdzLicgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuSGVyZSBhcmUgYWxsIG9mIHRoZSB0YWdzIHRoYXQgaGF2ZSBiZWVuIGZsYXR0ZW5lZCBzbyBmYXI6ICcgK1xuICAgICAgICAgICAgICAgICAgICBmbGF0dGVuZWQgK1xuICAgICAgICAgICAgICAgICAgICAnXFxuSGVyZSBpcyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBlbGVtZW50OiAnICtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgIGlmIChuYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpO1xuICAgICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsYXR0ZW5lZC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XG4gICAgICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgndHMtbG9hZCcpLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFnKGUsIGZsYXR0ZW5lZCwgY291bnQgKyAxKTtcbiAgICAgICAgICAgIGlmIChjaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGUucmVwbGFjZVdpdGgoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZmxhdHRlbmVkLmFkZChuYW1lKTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0Q2FjaGVkQ29udGVudChcbiAgICAgICAgbmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZFxuICAgICk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCB8fCBuYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5DQUNIRVtuYW1lXTtcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkQWxsQ2FjaGVkRWxlbWVudHMoZnJhZzogRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBmcmFnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RzLWxvYWQnKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbGVtLnJlcGxhY2VXaXRoKGNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuLi9kb20vZWxlbWVudHNcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi8uLi9kb20vZG9jdW1lbnRcIjtcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcbmxvZyhcImlkIGdlbmVyYXRvciBsb2FkZWRcIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIElER2VuZXJhdG9yIHtcbiAgcHVibGljIHN0YXRpYyByZXNldCgpIHtcbiAgICBJREdlbmVyYXRvci5pZENvdW50ID0gMDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG5leHQoKSB7XG4gICAgSURHZW5lcmF0b3IuaWRDb3VudCArPSAxO1xuICAgIHJldHVybiBJREdlbmVyYXRvci5wcmVmaXggKyBJREdlbmVyYXRvci5pZENvdW50O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhcHBseUlEKGVsZW06IEVsZW1lbnQpIHtcbiAgICBlbGVtLmlkID0gZWxlbS5pZCA/IGVsZW0uaWQgOiBJREdlbmVyYXRvci5uZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IGFkZHMgaWRzIHRvIGFsbCBlbGVtZW50cyB0aGF0IGFyZSBiZWxvdyB0aGUgZ2l2ZW5cbiAgICogZWxlbWVudCBpbiB0aGUgaGVpcmFyY2h5LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbSAtIHRoZSBlbGVtZW50IHRvIHN0YXJ0IGFwcGx5aW5nIGlkcyB0byBpdHMgY2hpbGRyZW4uXG4gICAqICAgICAgICAgICAgICAgICAgV2lsbCBub3QgYXBwbHkgYW4gaWQgdG8gdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhcHBseVJlY3VyKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICBELmVhY2hSZWN1cihlbGVtLCB0aGlzLmFwcGx5SUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGlkcyB0byBhbGwgaHRtbCBlbGVtZW50cyBpbiB0aGUgdGFyZ2V0IGxvY2F0aW9uIGluIHRoZSBET00gdGhhdCBkbyBub3QgaGF2ZSBpZHMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGF0dGFjaElkc1RvQWxsRWxlbWVudHMoKSB7XG4gICAgSURHZW5lcmF0b3IuYXBwbHlSZWN1cihFbGVtZW50cy5odG1sTG9jKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGlkQ291bnQgPSAwO1xuICBwcml2YXRlIHN0YXRpYyBwcmVmaXggPSBcImF1dG9fZ2VuX2lkX3VucV9cIjtcbn1cbiIsImNvbnN0IHFQYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG5leHBvcnQgY29uc3QgcGFyYW1zID0ge1xuICAgIHd1c3RsX2tleTogJycsXG4gICAgc2FuZGJveDogZmFsc2UsXG4gICAgcHJvamVjdDogJycsXG4gICAgaXRlcmF0aW9uOiAwLFxuICAgIHRhZzogJycsXG59O1xudHJ5IHtcbiAgICBxUGFyYW1zLmZvckVhY2goY29uc29sZS5sb2cpO1xuICAgIGlmIChcbiAgICAgICAgWyd3dXN0bF9rZXknLCAnc2FuZGJveCcsICdwcm9qZWN0JywgJ2l0ZXJhdGlvbicsICd0YWcnXS5ldmVyeSgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygna2V5OiAnICsgcVBhcmFtcy5oYXMoa2V5KSk7XG4gICAgICAgICAgICByZXR1cm4gcVBhcmFtcy5oYXMoa2V5KTtcbiAgICAgICAgfSlcbiAgICApIHtcbiAgICAgICAgcGFyYW1zLnd1c3RsX2tleSA9IHFQYXJhbXMuZ2V0KCd3dXN0bF9rZXknKSBhcyBzdHJpbmc7XG4gICAgICAgIHBhcmFtcy5zYW5kYm94ID0gcVBhcmFtcy5nZXQoJ3NhbmRib3gnKSA9PT0gJ3RydWUnO1xuICAgICAgICBwYXJhbXMucHJvamVjdCA9IHFQYXJhbXMuZ2V0KCdwcm9qZWN0JykgYXMgc3RyaW5nO1xuICAgICAgICBwYXJhbXMuaXRlcmF0aW9uID0gcGFyc2VJbnQocVBhcmFtcy5nZXQoJ2l0ZXJhdGlvbicpIGFzIHN0cmluZywgMTApO1xuICAgICAgICBwYXJhbXMudGFnID0gcVBhcmFtcy5nZXQoJ3RhZycpIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbWlzc2luZyBxdWVyeSBwYXJhbXMnKTtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAnVGhpcyBISVQgaXMgbWlzc2luZyBuZWNjZXNzYXJ5IG1ldGFkYXRhLCBzb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UuIFBsZWFzZSBjb250YWN0IHRoZSBSZXF1ZXN0ZXIgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gaGFwcGVuLidcbiAgICAgICAgKTtcbiAgICB9XG59IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgYWxlcnQoZSk7XG4gICAgYWxlcnQoXG4gICAgICAgICdUaGlzIEhJVCBpcyBicm9rZW4sIHNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZS4gUGxlYXNlIGNvbnRhY3QgdGhlIFJlcXVlc3RlciBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byBoYXBwZW4uJ1xuICAgICk7XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5cbmxvZyhcInJlYWR5IGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5cbmxldCByZWFkeSA9IGZhbHNlO1xuXG5sZXQgcmVzb2x2ZUZ1bmM6ICh2YWw6IGJvb2xlYW4pID0+IGFueTtcbmxldCByZWplY3RGdW5jO1xuY29uc3QgcmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWw6IGJvb2xlYW4pID0+IGFueSwgcmVqZWN0KSA9PiB7XG4gIHJlc29sdmVGdW5jID0gcmVzb2x2ZTtcbiAgcmVqZWN0RnVuYyA9IHJlamVjdDtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxvZyhcImRvY3VtZW50IGlzIHJlYWR5XCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgcmVhZHkgPSB0cnVlO1xuICByZXNvbHZlRnVuYyh0cnVlKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcbiAgcmV0dXJuIHJlYWR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRVbnRpbFJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gcmVhZHkgPyBQcm9taXNlLnJlc29sdmUodHJ1ZSkgOiByZWFkeVByb21pc2U7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFNjZW5hcmlvIHtcbiAgICBjb250ZXh0OiBzdHJpbmc7XG4gICAgcXVlc3Rpb246IHN0cmluZztcbiAgICB0YWc6IHN0cmluZztcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby12YXItcmVxdWlyZXNcbmV4cG9ydCBjb25zdCBzY2VuYXJpb3M6IFNjZW5hcmlvW10gPSByZXF1aXJlKCcuLy4uLy4uLy4uLy4uL3NjZW5hcmlvcy9zY2VuYXJpb3MuanNvbicpO1xuKHdpbmRvdyBhcyBhbnkpLnNjZW5hcmlvcyA9IHNjZW5hcmlvcztcbiIsImltcG9ydCB7IEQgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9kb2N1bWVudFwiO1xuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uIHtcbiAgcHVibGljIHN0YXRpYyBzZXR1cEFsbCgpIHtcbiAgICBBY2NvcmRpb24uZGlzY2FyZEFsbCgpO1xuICAgIGNvbnN0IGFjY29yZGlvbnMgPSBELmNsYXooXCJhY2NvcmRpb25cIik7XG4gICAgZm9yIChsZXQgYWNjSW5kZXggPSAwOyBhY2NJbmRleCA8IGFjY29yZGlvbnMubGVuZ3RoOyArK2FjY0luZGV4KSB7XG4gICAgICBjb25zdCBlbGVtID0gYWNjb3JkaW9ucy5pdGVtKGFjY0luZGV4KTtcbiAgICAgIGlmIChlbGVtID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBBY2NvcmRpb24uYWNjb3JkaW9ucy5wdXNoKG5ldyBBY2NvcmRpb24oZWxlbSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGlzY2FyZEFsbCgpIHtcbiAgICBBY2NvcmRpb24uYWNjb3JkaW9ucyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYWNjb3JkaW9uczogQWNjb3JkaW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG91dGVyOiBFbGVtZW50KSB7XG4gICAgRC5hZGRFdmVudExpc3RlbmVyKG91dGVyLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIFwiYWN0aXZlXCIgY2xhc3MsXG4gICAgICAgICAgICAgICAgdG8gaGlnaGxpZ2h0IHRoZSBidXR0b24gdGhhdCBjb250cm9scyB0aGUgcGFuZWwgKi9cbiAgICAgIHRoaXMub3V0ZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAgICAgLyogVG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBhY3RpdmUgcGFuZWwgKi9cbiAgICAgIGNvbnN0IHBhbmVsID0gdGhpcy5vdXRlci5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAocGFuZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IGRvU29tZXRoaW5nIH0gZnJvbSAnLi9kby1zb21ldGhpbmcnO1xuaW1wb3J0IHsgSFRNTENvbnRlbnQsIGl0ZW1zVG9DYWNoZSB9IGZyb20gJy4vaHRtbC1pbXBvcnRzJztcbmltcG9ydCB7IFNsaWRlc2hvdyB9IGZyb20gJy4vc2xpZGVzaG93JztcblxuLy8gUHV0IGFsbCBmdW5jdGlvbiBjYWxscyB0aGF0IG5lZWQgdG8gYmUgbWFkZSBvbiBldmVyeSBwYWdlIGxvYWQgaW5zaWRlIHRoZSBzZXR1cEFsbCBmdW5jdGlvbiBib2R5LlxuZXhwb3J0IGZ1bmN0aW9uIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKSB7XG4gICAgLy8gVE9ETzogUHV0IGFsbCBvcGVyYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gaGFwcGVuIG9uIGV2ZXIgcGFnZSBsb2FkIGluIHRoaXMgZnVuY3Rpb24uXG4gICAgXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7c2V0dXBTdGlja3koKX1cblxuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1jb250ZW50Jyk7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1tZW51LWNvbnRhaW5lclwiKTtcbiAgICBjb25zb2xlLmxvZyhiYW5uZXIpXG4gICAgLy8gaWYgKGJhbm5lcj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwibm9uZVwiKSkge1xuICAgIC8vICAgaGVhZGVyPy5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyXCIpO1xuICAgIC8vIH1cbiAgICBcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcbiAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG11dGF0aW9uKSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGhlYWRlcj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmFubmVyXCIpKXtcbiAgICAgICAgICAgIGhlYWRlcj8uY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lclwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFubmVyIHJlbW92ZWRcIik7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBpZiAoYmFubmVyPy5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNwbGF5XCIpKSB7XG4gICAgICAgICAgICBoZWFkZXI/LmNsYXNzTGlzdC5hZGQoXCJiYW5uZXJcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbm5lciBhZGRlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJhbm5lcj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwibm9uZVwiKSkge1xuICAgICAgICAgICAgaGVhZGVyPy5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKGJhbm5lciAhPSBudWxsKSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGJhbm5lciwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlIC8vY29uZmlndXJlIGl0IHRvIGxpc3RlbiB0byBhdHRyaWJ1dGUgY2hhbmdlc1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxufVxuXG4vLyBBZGQgdGhlIHN0aWNreSBjbGFzcyB0byB0aGUgaGVhZGVyIHdoZW4geW91IHJlYWNoIGl0cyBzY3JvbGwgcG9zaXRpb24uIFJlbW92ZSBcInN0aWNreVwiIHdoZW4geW91IGxlYXZlIHRoZSBzY3JvbGwgcG9zaXRpb25cbmZ1bmN0aW9uIHNldHVwU3RpY2t5KCkge1xuICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW1lbnUtY29udGFpbmVyXCIpO1xuICAgIHZhciBzdGlja3kgPSBoZWFkZXI/Lm9mZnNldFRvcDtcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gc3RpY2t5KSB7XG4gICAgICBoZWFkZXI/LmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlcj8uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcbiAgICB9XG4gIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwQWxsKCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyOiBhbnkpID0+IHNldFRpbWVvdXQociwgMTAwKSk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZGluZycpO1xuICAgIFNsaWRlc2hvdy5zZXR1cEFsbCgpO1xuICAgIEFjY29yZGlvbi5zZXR1cEFsbCgpO1xuICAgIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKTtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkZWQnKTtcbn1cblxuaXRlbXNUb0NhY2hlLmZvckVhY2goKGl0ZW06IEhUTUxDb250ZW50KSA9PiB7XG4gICAgSFRNTExvYWRlci5jYWNoZUhUTUwoaXRlbS5uYW1lLCBpdGVtLmNvbnRlbnQpO1xufSk7XG4od2luZG93IGFzIGFueSkuSFRNTExvYWRlciA9IEhUTUxMb2FkZXI7XG5cbmNvbnNvbGUubG9nKCdkeW5hbWljLWRvbSBsb2FkZWQnKTtcbi8vIERvIG5vdCB0b3VjaCB0aGlzIGxpbmUsIG5lZWRlZCB0byByZWluaXRpYWxpemUgY29kZSBpbiB0aGUgZHluYW1pYy1kb20udHMgc2V0dXBBbGwgZnVuY3Rpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCduZXdQYWdlTG9hZCcsICgpID0+IHNldHVwQWxsKCkpO1xuIiwiZGVjbGFyZSBmdW5jdGlvbiByZXF1aXJlKGlkOiBzdHJpbmcpOiBzdHJpbmc7XG5cbi8vIFRoaXMgZGVmaW5lcyB0aGUgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHBhc3NlZCB0byB0aGUgSFRNTExvYWRlciB0byBjYWNoZSB5b3VyIGh0bWwgY29udGVudC5cbmV4cG9ydCBpbnRlcmZhY2UgSFRNTENvbnRlbnQge1xuICAgIG5hbWU6IHN0cmluZzsgLy8gVGhlIG5hbWUgdGhhdCB5b3Ugd2lsbCB1c2UgdG8gcmVmZXJlbmNlIHRoZSBjb250ZW50IGluIHlvdXIgaHRtbCBwYWdlcy5cbiAgICBjb250ZW50OiBzdHJpbmc7IC8vIFRoZSBhY3R1YWwgaHRtbCBzdHJpbmcgdGhhdCB3aWxsIGJlIHB1bGxlZCBmcm9tIHRoZSBzb3VyY2UgZmlsZSB0aGF0IHlvdSBzcGVjaWZ5LlxufVxuXG4vLyBBbiBIVE1MQ29udGVudCBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGUgZm9sbG93aW5nOlxuLy8ge1xuLy8gICAgIG5hbWU6ICdmb290ZXInLFxuLy8gICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9mb290ZXIuaHRtbCcpLFxuLy8gfVxuXG4vLyBUaGVuIHlvdSBjYW4gcmVmZXJlbmNlIHRoYXQgY29udGVudCBpbiB5b3VyIGh0bWwgdXNpbmcgdGhlIGZvbGxvd2luZyB0YWcgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBuYW1lIGF0dHJpYnV0ZS5cbi8vIDx0cy1sb2FkIGRhdGEtbmFtZT1cImhlYWRlclwiPjwvdHMtbG9hZD5cblxuLy8gWW91IGNhbiBzcGVjaWZ5IGFzIG1hbnkgYXMgeW91IHdhbnQgaW5zaWRlIG9mIHRoZSBhcnJheSBhbmQgdGhleSB3aWxsIGFsbCBiZSBidW5kbGVkIHVwIHdpdGggeW91ciB3ZWJzaXRlLlxuLy8gTWFrZSBzdXJlIHRvIG1ha2UgYSBjb3JyZXNwb25kaW5nIGh0bWwgZmlsZSBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciBmb3IgZWFjaCBlbGVtZW50IHlvdSBzcGVjaWZ5LlxuXG5leHBvcnQgY29uc3QgaXRlbXNUb0NhY2hlID0gW1xuICAgIC8vIEZlZWwgZnJlZSB0byBjaGFuZ2UgdGhlIGNvbnRlbnQgaW5zaWRlIGFueSBvZiB0aGUgaHRtbCBmaWxlcyBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciB0byBzdWl0IHlvdXIgbmVlZHMuXG4gICAge1xuICAgICAgICBuYW1lOiAnaGVhZGVyJyxcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2hlYWRlci5odG1sJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdmb290ZXInLFxuICAgICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcbiAgICB9LFxuICAgIC8vIFB1dCBtb3JlIGl0ZW1zIGluIHRoZSBhcnJheSBiZWxvdyBoZXJlLlxuXTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9vdGVyIGlkPVxcXCJjb2xvcGhvblxcXCIgY2xhc3M9XFxcImZvb3RlclxcXCIgcm9sZT1cXFwiY29udGVudGluZm9cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldHNcXFwiPlxcbiAgICAgIDxhc2lkZSBjbGFzcz1cXFwid2lkZ2V0IHNpdGUtY29udGFjdFxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPk51cnNlcnkgU2Nob29sPC9oMj5cXG4gICAgICAgIDxwPjY5MjYgRm9yZXN0IFBhcmsgUGFya3dheTwvcD5cXG4gICAgICAgIDxwPlN0LiBMb3VpcywgTU8gNjMxMzA8L3A+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicGhvbmVcXFwiPjMxNC05MzUtNjY4OSA8c3Bhbj58PC9zcGFuPiBGYXg6IDMxNC05MzUtNzI0OTwvcD5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9tYWlsdG86bnVyc2VyeUB3dXN0bC5lZHVcXFwiPm51cnNlcnlAd3VzdGwuZWR1PC9hPlxcbiAgICAgICAgPC9wPlxcbiAgICAgIDwvYXNpZGU+XFxuXFxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJ3aWRnZXQtd3JhcHBlclxcXCI+XFxuICAgICAgICA8YXNpZGUgaWQ9XFxcInRleHQtNFxcXCIgY2xhc3M9XFxcIndpZGdldCB3aWRnZXRfdGV4dCB3aWRnZXQtY291bnQtMlxcXCI+XFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldC10aXRsZVxcXCI+SG91cnMgb2YgT3BlcmF0aW9uPC9oMj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dHdpZGdldFxcXCI+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICBDbGFzc2VzIG1lZXQgTW9uLiB0aHJvdWdoIEZyaS48YnIgLz5cXG4gICAgICAgICAgICAgIE1vcm5pbmc6IDktMTE6NDUgYS5tLjxiciAvPlxcbiAgICAgICAgICAgICAgQWZ0ZXJub29uOiAxMjozMC0zOjE1IHAubS48YnIgLz5cXG4gICAgICAgICAgICAgIEZ1bGwgZGF5OiA5IGEubS4tMzoxNSBwLm0uXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYXNpZGU+XFxuICAgICAgICA8YXNpZGUgaWQ9XFxcInRleHQtM1xcXCIgY2xhc3M9XFxcIndpZGdldCB3aWRnZXRfdGV4dCB3aWRnZXQtY291bnQtMlxcXCI+XFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldC10aXRsZVxcXCI+QXBwbHkgZm9yIHRoZSBOdXJzZXJ5IFNjaG9vbDwvaDI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHR3aWRnZXRcXFwiPlxcbiAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgRXhwZXJpZW5jZSB0aGUgaW5ub3ZhdGl2ZSBhcHByb2FjaCBhbmQgZHluYW1pYyB0ZWFjaGluZ1xcbiAgICAgICAgICAgICAgZW52aXJvbm1lbnQgb2YgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvYXBwbHkuaHRtbFxcXCI+UmVnaXN0ZXIgTm93PC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYXNpZGU+XFxuICAgICAgPC9kaXY+IC0tPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1pbmZvXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwiZm9vdGVyLWNvcHlyaWdodFxcXCI+wqlXYXNoaW5ndG9uIFVuaXZlcnNpdHkgaW4gU3QuIExvdWlzPC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZm9vdGVyPlxcblwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInd1c3RsLWJyYW5kaW5nXFxcIj5cXG4gIDxzdmdcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcbiAgICB3aWR0aD1cXFwiMzIxXFxcIlxcbiAgICBoZWlnaHQ9XFxcIjI4XFxcIlxcbiAgICB2aWV3Qm94PVxcXCIwIDAgMzIxIDI4XFxcIlxcbiAgICBjbGFzcz1cXFwid2FzaHUtbG9nb1xcXCJcXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ0aXRsZVxcXCJcXG4gID5cXG4gICAgPHRpdGxlIGlkPVxcXCJ0aXRsZVxcXCI+V2FzaGluZ3RvbiBVbml2ZXJzaXR5IGluIFN0LiBMb3VpczwvdGl0bGU+XFxuICAgIDxwYXRoXFxuICAgICAgZmlsbD1cXFwiI0ZGRlxcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMS43NmMtLjA5IDAtNC40MS4wNC0xMC40Ni0xLjIxVjE4YzAgLjI3LjAxLjQ3LjAxLjQ3di4wMmMuMDQuODEuMjggMS40NS43NyAyIC4zMi4zNC43Ni43IDEuMzggMS4wNS4xNy4xLjM1LjE4LjU1LjI4LjE1LjA3LjMxLjE0LjQ3LjIuMTQuMDYuNTUuMjQuNjkuMjlsNi41OSAyLjUgNi41OS0yLjVjLjE1LS4wNS41Ni0uMjQuNjktLjI5LjE2LS4wNy4zMi0uMTQuNDctLjIuMTktLjEuMzgtLjE4LjU1LS4yOC42Mi0uMzUgMS4wNi0uNyAxLjM4LTEuMDUuNDgtLjU1LjczLTEuMTkuNzctMnYtLjAyczAtLjE5LjAxLS40N1YuNTVDMTQuODYgMS44IDEwLjU1IDEuNzYgMTAuNDYgMS43NnpcXFwiXFxuICAgID48L3BhdGg+XFxuICAgIDxwYXRoXFxuICAgICAgZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMi44Yy0uMDkgMC00LjAzLjA0LTkuNTYtMS4xdjE1Ljk1YzAgLjI1LjAxLjQzLjAxLjQ0di4wMmMuMDQuNzQuMjUgMS4zMy43IDEuODMuMjkuMzEuNy42NCAxLjI2Ljk1LjE1LjA5LjMyLjE3LjUuMjYuMTQuMDcuMjguMTMuNDQuMTkuMTIuMDUuNS4yMi42My4yN2w2LjAzIDIuMjkgNi4wMy0yLjI5Yy4xMy0uMDUuNTEtLjIyLjYzLS4yNy4xNS0uMDYuMy0uMTMuNDQtLjE5LjE4LS4wOS4zNS0uMTcuNS0uMjYuNTYtLjMxLjk3LS42NCAxLjI2LS45NS40NC0uNS42Ni0xLjA5LjctMS44M3YtLjAyczAtLjE4LjAxLS40NFYxLjdjLTUuNTUgMS4xNC05LjUgMS4xLTkuNTggMS4xelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAzLjc1Yy0uMDggMC0zLjY4LjA0LTguNzQtMS4wMnY0LjA4YzUuMDUgMS4wNSA4LjY3IDEuMDIgOC43NCAxLjAyczMuNjguMDQgOC43NC0xLjAyVjIuNzNjLTUuMDYgMS4wNS04LjY2IDEuMDItOC43NCAxLjAyelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjQTUxNDE3XFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiA3LjgzYy0uMDggMC0zLjY4LjA0LTguNzQtMS4wMnY5LjA1YzUuMDUgMS4wNSA4LjY3IDEuMDIgOC43NCAxLjAyczMuNjguMDQgOC43NC0xLjAyVjYuODJjLTUuMDYgMS4wNC04LjY2IDEuMDEtOC43NCAxLjAxelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xLjcyIDE3LjcyYy4wMy42OS4yMyAxLjIzLjY0IDEuNjguMjYuMjguNjQuNTggMS4xNS44Ny4xNS4wOC4yOS4xNS40Ni4yMy4xMy4wNi4yNi4xMi40LjE3LjExLjA1LjQ2LjIuNTguMjRMMTAuNDYgMjNsNS41MS0yLjA5Yy4xMi0uMDQuNDYtLjIuNTgtLjI0LjE0LS4wNi4yNy0uMTIuNC0uMTcuMTYtLjA4LjMyLS4xNS40Ni0uMjMuNTEtLjI5Ljg4LS41OCAxLjE1LS44Ny40MS0uNDYuNi0xIC42NC0xLjY4di0uMDJzMC0uMTYuMDEtLjR2LTEuNDRjLTUuMDUgMS4wNS04LjY3IDEuMDItOC43NCAxLjAycy0zLjY4LjA0LTguNzQtMS4wMnYxLjQ1Yy0uMDIuMjUtLjAxLjQxLS4wMS40MXpcXFwiXFxuICAgID48L3BhdGg+XFxuICAgIDxwYXRoXFxuICAgICAgZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNNC44IDMuNjlsLjQxIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNS0uNzYtMS4wNS43Ni4zOS0xLjI0LTEuMDQtLjc3IDEuMjktLjAxLjQxLTEuMjN6bTExLjMxIDBsLjQyIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNi0uNzYtMS4wNS43Ni4zOS0xLjI0LTEuMDQtLjc3IDEuMjktLjAxLjQxLTEuMjN6bS01LjY1LjQ4bC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDYuNzUuMzktMS4yNC0xLjA0LS43NyAxLjMtLjAxLjQxLTEuMjJ6TTEwLjQ2IDE3LjIxbC0uNDYuNDV2MS4yMmwuMjMuNjV2MS4wOWguNDV2LTEuMDlsLjIzLS42NXYtMS4yMmwtLjQ1LS40NXptLjIyIDQuNDF2LS42NWgtLjQ1di42NWwtLjIzLjQyLjQ2LjU2LjQ2LS41Ni0uMjQtLjQyem0uMzMtLjY1di41bC4yOS4zMS41MS0uNDF2LS40MWgtLjh6bS41NC0yLjA0bC0uNTQuNnYxLjA5aC40NHYtLjY1bC40My0uNDYuNTUuMzYuMzUtLjM2di0uNThoLTEuMjN6bS0xLjY0IDIuMDR2LjVsLS4yOS4zMS0uNTItLjQxdi0uNDFoLjgxem0tLjU1LTIuMDRsLjU0LjZ2MS4wOWgtLjQzdi0uNjVsLS40My0uNDYtLjU1LjM2LS4zNS0uMzZ2LS41OGgxLjIyelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xNC42MiA5LjI3djUuMTloLTMuNDlsLS4yNS4yMS0uNDMuMzctLjQzLS4zNy0uMjUtLjIxSDYuMjlWOS4yN2wtLjc0LjU0djUuMzhoNC4xMmwuMzcuMzEuNDMuMzguNDMtLjM4LjM3LS4zMWg0LjEyVjkuODFsLS43Ny0uNTR6XFxcIlxcbiAgICA+PC9wYXRoPlxcbiAgICA8cGF0aFxcbiAgICAgIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTExLjAyIDguODNsLS4xNC4xMS0uNDMuMzgtLjQzLS4zOC0uMTItLjExSDcuMDN2NC44OWgyLjg4bC4yLjE3LjM1LjMxLjM2LS4zMS4xOS0uMTdoMi44OFY4LjgzaC0yLjg3ek0xNi4xMSAxMC4zNXYzLjMxYy45NS0uMTQgMS45OC0uMzEgMy4wOC0uNTRWOS44MWE1MC41IDUwLjUgMCAwIDEtMy4wOC41NHptLTExLjMxIDBjLS45NS0uMTQtMS45OC0uMzEtMy4wOC0uNTR2My4zMWMxLjEuMjMgMi4xNC40MSAzLjA4LjU0di0zLjMxelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjMDA3MzYwXFxcIlxcbiAgICAgIGQ9XFxcIk0xNi4xMSAxNi43NmwtLjMxLjMydi44NmwuMTUuNDZ2Ljc3aC4zMXYtLjc3bC4xNi0uNDZ2LS44NmwtLjMxLS4zMnptLjE2IDMuMDl2LS40NWgtLjMxdi40NmwtLjE1LjMuMzEuNC4zMi0uNC0uMTctLjMxem0uMjMtLjQ1di4zNWwuMi4yMi4zNi0uMjh2LS4yOWgtLjU2em0uMzgtMS40M2wtLjM4LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzguMjUuMjQtLjI1di0uNDFoLS44NXptLTEuMTQgMS40M3YuMzVsLS4yMS4yMi0uMzUtLjI4di0uMjloLjU2em0tLjM5LTEuNDNsLjM5LjQzdi43N2gtLjMxdi0uNDZsLS4zLS4zMy0uMzkuMjUtLjI0LS4yNXYtLjQxaC44NXpNNC44IDE2Ljc2bC0uMzIuMzJ2Ljg2bC4xNi40NnYuNzdoLjMxdi0uNzdsLjE1LS40NnYtLjg2bC0uMy0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNi4zLjMyLjQuMzEtLjQtLjE2LS4zMXptLjIyLS40NXYuMzVsLjIxLjIyLjM1LS4yOHYtLjI5aC0uNTZ6bS4zOS0xLjQzbC0uMzkuNDN2Ljc3aC4zMXYtLjQ2bC4zLS4zMy4zOS4yNS4yNC0uMjV2LS40MWgtLjg1ek00LjQyIDE5LjR2LjM1bC0uMi4yMi0uMzYtLjI4di0uMjloLjU2em0tLjM4LTEuNDNsLjM4LjQzdi43N2gtLjMxdi0uNDZsLS4zLS4zMy0uMzguMjUtLjI0LS4yNXYtLjQxaC44NXpcXFwiXFxuICAgID48L3BhdGg+XFxuICAgIDxnIGZpbGw9XFxcIiNGRkZcXFwiIGNsYXNzPVxcXCJ3YXNodS1sb2dvLXRleHRcXFwiPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMjMyLjQ3IDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc2IDEuNTcgMS4wNyAxLjU3em0xMy44MiAxMi4wM3YtNS4wOGMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtMS4wNCAxLjAxLTMuMDYgMS42Mi0uMTMuMDMtLjUuMDQtLjUxLjI3IDAgLjY1IDIuMDMtLjg0IDEuOTkgMS42OHY3LjY0YzAgMS40My0uNyAxLjU1LTEuMjEgMS42OC0uMDMgMC0uMDYtLjAxLS4xIDAtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjkgMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMxIDAgMS4xNS0uMTMgMi41My0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNlYxMy4xYy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjLS4wMyAyLjI3LS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYzEuMjcgMCAxLjgyLjEyIDIuMTYuMTIuMjYgMCAuNzMtLjIuNDUtLjQ0LS42OC0uNS0xLjk3LjMtMS45NS0yLjA0ek00OC45MSAyLjRjLjM3LS4wNS41NS0uMTkuNTUtLjE5IDAtLjI0LS4wNS0uMy0uMzktLjMtLjY1IDAtMS4wNS4xMS0xLjY5LjExLS43MSAwLTEuMjUtLjA4LTEuODUtLjA4LS4zNCAwLS4zMS4xMS0uMzEuMyAwIC4yMS42NS4wOCAxLjAyLjg5LjIxLjQ0LjEzIDEuMzYtLjA4IDEuOWwtNS4wMSAxMy43NC0yLjE0LTYuMS0uODMtMi4yM3MtLjEzLjA2LjQ2LTEuNzlsMS4xNy0zLjUyYy41Ny0xLjczIDEuMTQtMi42NCAxLjg4LTIuNjUuOTItLjAyLjkyLS41Ny4yMS0uNTdzLTEuMTMuMDYtMS43NS4wNmMtLjY1IDAtLjk5LS4wNi0xLjY5LS4wNi0uMjYgMC0uNTUuMDgtLjUyLjMuMDMuMjEuNDIuMTQuNzEuMy40Ny4yNC43OCAxLjI1LjQ1IDIuM2wtMS4zOCA0LjQyLTEuNTgtNC4xM2MtLjMxLS43OC0uNzMtMi41Mi4wMy0yLjY3LjczLS4xNS42My0uNTIuMTgtLjUyLS44NiAwLTEuMzIuMTEtMi4xNS4xMS0uOTEgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMTggMC0uNTIuMDMtLjQyLjM4LjA1LjIxLjQ5LjE0Ljc2LjMgMS4wNS42OCAxLjI1IDEuNTUgMS42MiAyLjUybDIuMyA2LjQ4Yy40MiAxLjE2LjQ1Ljc0LjExIDEuNzNsLTIgNS41LTQuOTUtMTQuMTFjLS4zOS0xLjA2LS42LTEuNzkuMjYtMi4yLjM3LS4xOS40Ny0uMjIuNTItLjMuMDUtLjA3LjEtLjMyLS40NS0uMy0uODkuMDMtMS40My4xMS0yLjMyLjExLS45NCAwLTEuNTktLjExLTIuNDUtLjExLS4yOSAwLS4zNC4xNC0uMzQuMzUgMCAuMzMuNzEuMTEgMS4zMS44MS4zNC4zOC45OSAxLjY2IDEuMTQgMi4xMkwzMi44IDIyLjNjLjExLjI1LjE0Ljc2LjQ4Ljc2LjI3IDAgLjMzLS41Ny40Mi0uNzlsMy4xMy04LjU5IDMuMDUgOC4xNmMuMTMuMzMuMzEgMS4yMi42MyAxLjIyLjI2IDAgLjM2LS40My40OS0uODNsNS45LTE2Ljg3Yy41LTEuMzYgMS4wNy0yLjc5IDIuMDEtMi45NnptNjUuNDYgNi43MWMtMy4yNiAwLTUuNzcgMy4yOC01Ljc3IDcuMTMgMCAxLjk2LjUyIDMuNTEgMS40MiA0LjYzLS4zMS4yMS0uOTIuNy0yLjE1LjctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMlYxMS4ybDMuMzgtLjAxYy4yMiAwIC42NS0xLjQ0LjY3LTEuNTIuMDQtLjE4LjEtLjMzLjEyLS40Ni4wNC0uMjgtLjE3LS4zLS4zNy0uMDEtLjE1LjE1LS4zMi41NS0uOTkuNTVoLTIuODFjMC0yLjQxLjAzLTMuNTEtLjM1LTMuNTEtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNDQgMS40NC0xLjc5IDIuMjMtMi42MyAyLjY4LS4zOC4wOS0uODEuMTItMS4yOS4wMS0uNzQtLjE2LTEuNi0xLjA2LTMuODMtMS4wNi0yLjM4IDAtNC40NiAxLjk1LTQuNDYgNC41NSAwIDEuNC42MiAyLjc2IDEuNzEgMy40OC0uMi4xMi0xLjUzIDEuMjQtMS4zNyAyLjU2IDAgMC0uMDMgMS4zNyAxLjA1IDEuODItLjMzLjE0LS42Ny4zNi0uOTYuNjMtLjctLjI2LTEuNzItLjA2LTEuNzItMS45MVYxNS4xYzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uNzMuOTktMi45MSAxLjU1LS4xMy4wMy0uNDMuMS0uNDQuMzQgMCAuNjUgMS43NS0uNzEgMS43NiAxLjY4djcuNjRjMCAxLjY1LTEuMzEgMS42NS0xLjU0IDEuNjctLjEgMC0uMTkgMC0uMzEuMDEtLjU1LS4wNS0xLjUxLS4zLTEuNTEtMS4zNFY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS43OC0uODYgMi4wMS0xLjQzIDIuMDMtLjY5LS4wOS0xLjIyLS4zNy0xLjIyLTEuNDF2LTUuMTRjMC0yLjY1LTEuMDEtNi4wNy00LjMzLTYuMDctMS40NyAwLTIuNzUuODEtMy43MyAxLjkyVjIuNDFjMC0uMzEtLjE1LS40OC0uMzEtLjQ5LS40LS4wMy0xLjA3IDEuMTktMi45NiAxLjYzLS4xMy4wMy0uNjIuMDctLjYyLjI1IDAgLjY1IDEuOTctLjMxIDEuOTkgMS42OVYyMC42YzAgMS41MS0xLjMgMS4zMS0xLjUzIDEuNzktLjA0LjIxLjA4LjMxLjI2LjMxLjQyIDAgMS41NS0uMTIgMi4zNS0uMTJzMi4xLjEyIDIuNjQuMTJjLjMxIDAgLjQ0LS4wNi40NC0uNDQtLjI3LS41Mi0yLjI4LjI4LTIuMjgtMi4zN3YtNi41YzAtMS41NyAxLjg3LTIuNzggMy4wMy0yLjc4LjkxIDAgMy4xNC43MSAzLjE0IDQuNTN2NS42NGMwIDEuMTEtMS4xOCAxLjIzLTEuMjcgMS41NyAwIC4yNC4xNS4zNC40Mi4zNC4yOCAwIDEuMTEtLjEyIDIuMTItLjEyLjU2IDAgMS4wNy4wMyAxLjUuMDYuMjMuMDUuNTcuMDUuOTkuMDUuMjggMCAxLS4xMSAxLjgyLS4xMXMxLjQ4LjA3IDEuOTkuMTFjLjEuMDEuMi4wMS4zLjAxLjA0IDAgLjA4LjAxLjEyLjAxaC4wMWMuMzIuMDEuNjEgMCAuNzQgMCAuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2YzAgMi0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MuOTMgMCAxLjUzLjA3IDEuOTEuMS0uMjkuNDItLjQ4LjktLjUxIDEuNC0uMTQgMi41MSAyLjkzIDMuNDEgNS41MSAzLjM3IDUuMTItLjA3IDYuNTctMy42MiA1LjUxLTUuNTEtMS4wOS0xLjk1LTMuNDQtMS44Ny01LjY4LTEuODYtNC4yLjAyLTMuNDEtMi41OS0xLjY5LTIuNDkuNC4wMi4yLjE0IDEuNTcuMTQgMi40MyAwIDQuNzYtMS42NiA0LjctNC4zOC0uMDEtLjIzLjA1LTEuMDMtLjUzLTIuMTQgMS4xNC4wMS42OSAwIDIuNDEgMGwtLjAxIDcuNjNjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS43NCAwIDMuMDEtMS4xNSAzLjI0LTEuNjggMS4wMyAxLjEgMi40NiAxLjY4IDQuMTIgMS42OCAzLjE5IDAgNS42LTIuOTMgNS42LTYuNzggMC01LjgtMy42NS02Ljk2LTUuNjEtNi45NnpNOTUuNjIgMjEuNzJjLjIxLS4wMS4yNy4wOCAyLjY0LjE3IDIuNDUuMDYgMy4zMy43NyAzLjQ5IDEuNC4yNiAxLjEyLS41MyAzLjUyLTQuMDUgMy4yOS0yLjIyLS4xNS0yLjg3LTEuMi0zLjAzLTEuNDQtLjg0LTEuMTYtLjE2LTMuMzUuOTUtMy40MnptMi4wMS00LjU3Yy0yLjA4IDAtMi43OC0yLTIuNzgtMy45MSAwLTEuOTYuNTktMy41OCAyLjY3LTMuNTggMi4xMSAwIDIuOTUgMi4xNiAyLjk1IDQuMDcuMDEgMS45My0uODcgMy40Mi0yLjg0IDMuNDJ6bTE2Ljk5IDQuODFjLTMuMDMgMC00LjIyLTMuNzYtNC4yMi02LjgyIDAtMi42NSAxLjA0LTUuMSAzLjU3LTUuMSAzLjA4IDAgNC4xOSAzLjI5IDQuMTkgNi41MS4wMSAzLjg3LTEuMzYgNS40MS0zLjU0IDUuNDF6XFxcIlxcbiAgICAgID48L3BhdGg+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0xMzEuMTEgMjAuMTl2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA3IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAyIDEuNjh2Ny42NGMwIDItMS4zNSAxLjUyLTEuNjYgMi4wNC0uMTUuMjcuMjUuMzMuNTkuMzMuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ0LS40NC0uNjUtLjQ5LTEuOTQuMzEtMS45Mi0yLjAzek03Ny40MSA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42LjAyLjM1Ljc3IDEuNTcgMS4wNyAxLjU3em0tMTcuMyA2Ljk2Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA0IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ3IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42MS0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIC41MS0uMDEuOTgtLjAxIDEuMzgtLjA3LjM2LS4yLjctLjU0LjcyLTEuMjQuMDgtLjk0LTEuOS0uOTQtMi45NXYtNi40M2MtLjA2LTEuOTctMS41NC0zLjI1LTMuOC0zLjI1LTMuMDkgMC01LjMxIDMuODEtNC4yNSA1IC4yNS4yOCAxLjI2LS44IDEuMzItLjg2cy4wOC0uMTMuMDgtLjEzYy0uMDEtMS4zLjk3LTIuOTUgMi4zNy0zLjA5IDEuNi0uMTUgMi40IDEuMDQgMi40IDIuNjV2Mi4wOWMtNi4wNiAxLjIxLTYuOTMgMy4yMi02LjkzIDQuODcgMCAyLjIxIDEuNTUgMy4yIDMuMjMgMy4yIDEuNDUgMCAyLjg4LS42OSAzLjk2LTEuOC4zNCAxLjAzIDEuMDEgMS42NSAyLjAyIDEuNjIuMzUtLjAxLjQxLjA5IDEuNDYtLjM3LjM3LS4xLjM1LS4wOS43Ny0uMDEuNTYuMTkgMS4zMi41NyAyLjY2LjU3IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNyAwLTEuNS0uNDMtMi40MS0yLjM5LTMuNjN6bS04LjQzIDQuMzJjMCAxLjY1LTEuNjggMi41Mi0yLjYgMi41Mi0xLjM4IDAtMi4zMy0uODktMi4zMy0yLjY2IDAtMi43MyAzLjI4LTMuMjMgNC45NC0zLjY3LS4wMS0uMDEtLjAxIDMuODEtLjAxIDMuODF6bTIxOS45OS4xOWMtLjMxIDAtMS4wNyAxLjI5LTEuMDcgMS42MyAwIC4zNC43NyAxLjYgMS4wNyAxLjYuMzMgMCAxLjA3LTEuMjMgMS4wNy0xLjZzLS43My0xLjYzLTEuMDctMS42M3ptMzMuNzEgMS4xMlY5LjkyYzAtLjYxLS4zNC0uNzctLjQ0LS43Ny0uMzkgMC0uNjEuMS0uODguMTYtLjI3LjEtLjU4LjIzLTEuMjkuMjMtLjEzIDAtLjc5LS4xMi0uNzYuMjUuMDQuMzcgMS41Ny4xNSAxLjU4IDEuMjN2Ny44M2MtLjEyIDEuMzctMS4yNyAyLjg4LTIuNjYgMi44OC0uMzIgMC0yLjM5LS4yMi0yLjM3LTMuNjVWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS42MS4yMi0xLjMyLjE5LS4zOC0uMDItLjc5LS4wNy0uNzMuMjkuMDYuMzIgMS41OSAwIDEuNTkgMS4yM3Y3LjUxYzAgMi43NCAxLjYxIDQuMzIgMy41NiA0LjMyIDEuMyAwIDIuNDktLjI4IDMuMjQtMS44aC4wNXYxLjMyYzAgLjEzLjAzLjQ4LjIyLjQ4LjM3IDAgLjU2LS4zLjgzLS40LjI5LS4wNy4zNy0uMzMgMS4yOC0uNDIuMzktLjA0LjgyLS4yNC44Mi0uNS0uMTEtLjUzLTEuNC4wNi0xLjQtLjc4ek0yOTAuMDkgOS4xMWMtMy4yNiAwLTUuNzcgMy4yOC01Ljc3IDcuMTMgMCAxLjczLjQyIDMuMTUgMS4xMyA0LjIzLS43OS41Ny0yLjIzIDEuMS00Ljk2IDEuMS0yLjEzIDAtMS45My0uNzQtMS45My0yLjU1VjQuNTdjMC0yLjY2IDEuOTktMS44OSAyLjAzLTIuMzcuMDMtLjM0LS4yOC0uMjYtLjYxLS4yNi0uMzggMC0xLjA3LjE1LTIuNTIuMTUtMS4yNSAwLTIuMzQtLjEyLTIuODgtLjEyLS4zMyAwLS42My4xLS41Mi4zNS4yNS41NyAyLjE0LjA1IDIuMTQgMS42NXYxNS4xYzAgMS40NC4yMSAyLjM2LS40NSAyLjczLS44MS40OS0xLjc2LjUxLTEuNjguODMuMDUuMTkuNDUuMi42OC4yIDEuMDIgMCAyLjQyLS4xMyAzLjQ0LS4xNSAxLjk0LS4wNiAzLjg2LjEzIDUuNzkuMTMgMS4xMiAwIDEuNC0uMjIgMi4yMi0xLjMzLjAxLS4wMi4wMi0uMDMuMDQtLjA1IDEuMDEuOTQgMi4zNCAxLjQ0IDMuODcgMS40NCAzLjE5IDAgNS42LTIuOTMgNS42LTYuNzguMDEtNS44Mi0zLjY1LTYuOTgtNS42Mi02Ljk4em0uMjYgMTIuODVjLTMuMDMgMC00LjIyLTMuNzYtNC4yMi02LjgyIDAtMi42NSAxLjA0LTUuMSAzLjU3LTUuMSAzLjA4IDAgNC4xOSAzLjI5IDQuMTkgNi41MS4wMSAzLjg3LTEuMzYgNS40MS0zLjU0IDUuNDF6bS0zMi4wMy0xMC40OWMtLjc1LS4zNy0xLjg1LTEuMDQtMi4zOS0xLjM2LTIuMzctMS4zNy0zLjMtMi4yNi0zLjM3LTMuNTItLjEyLTIuMjEgMi4wNC0zLjUyIDMuNTgtMy4zNSAxLjk2IDAgMy41NyAxLjE5IDQuMjQgMy43My4wNy4yNy4zMS44OS41Ni44OS4yMiAwIC4yNi0uMi4yNC0uNDVsLS4zMy00LjAyYy0uMDItLjMzLS4xNC0uNDItLjI3LS40Mi0uMjIgMC0uMzYuMzMtLjU2LjMzLS4zMSAwLTEuMS0xLjExLTMuOC0xLjA5LS4xOC0uMDEtLjQzLjAyLS40My4wMi0yLjYzLS4wNS01LjEgMS43LTUuMDIgNS40LjA3IDMuMzcgMy44NSA1LjMgNS44OSA2LjU5IDEuNTEuOSAzLjA5IDIuMzQgMy4wNCAzLjk1LS4wOCAyLjQ3LTEuNjMgNC4wOC0zLjU4IDMuOTQtNC41OS0uMDgtMy45Ni02LjEzLTQuNzgtNi4xMy0uNTYgMC0uNDUgMS41Mi0uNDYgMi4zMiAwIDEuOTItLjA4IDMuNDkuMTQgMy43Ny4wNy4wOS4yOS4wNS43NC4wNS45IDAgMiAxLjA1IDQuNjUgMS4wNSAyLjk1LjA1IDUuMzgtMi42OSA1LjM4LTYuMjUtLjAxLTIuMTktLjYyLTMuNTgtMy40Ny01LjQ1em01MS42OS0zLjMxYy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3pNMzEyLjY0IDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzMgMCAuNzYtLjguMDctLjY5em01Ljk4LTYuODhjLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDUgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMTEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAxLS4xMyAwLS4yOC4wMS0uMjguMDEtMS44MS0uMDMtMy41IDEuMTEtMy40NCAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42MS0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41Mi0uMDEgMS4yNS0uMDYgMi4yOC4xIDIuNDYuMDUuMDYuMi4wMy41LjAzLjYyIDAgMS4zOC42OSAzLjE5LjY5IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNy0uMDEtMS40OC0uNDMtMi4zOS0yLjM5LTMuNnptLTQ4LjczIDUuNjZjLS4yNi4xMy0uODUuNzctMi4yOC43Ny0xLjA3IDAtMS42OC0uNjQtMS43NC0ydi04LjgybDMuMzgtLjAxYy4yMiAwIC42NS0xLjQ0LjY3LTEuNTIuMDQtLjE4LjEtLjMzLjEyLS40Ni4wNC0uMjgtLjE3LS4zLS4zNy0uMDEtLjE1LjE1LS4zMi41NS0uOTkuNTVoLTIuODFjMC0yLjQxLjAzLTMuMDQtLjM1LTMuMDQtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNTQgMS43OS0yLjUyIDIuNTgtMy4xNSAyLjk3LS4xNS4wOC0uMTUuMTEtLjE1LjE5LS4wMS4yMy43NS4xNCAyLjMxLjE3bC0uMDEgOC4wN2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjg3IDAgMy4yMS0xLjM0IDMuMjgtMS44LjAzLS4yNSAwLS4yOC0uMTUtLjI2em0tODEuMzItMS4wOWMtLjU3IDAtMS40MiAxLjYyLTMuNjYgMS42Mi0xLjU4IDAtNC4xNy0xLjUzLTQuMTctNi42Nmg2LjljLjYgMCAuODguMDMuODgtLjUyIDAtMS4yNS0xLjQtNC45NS00LjU5LTQuOTUtMy4yNCAwLTUuMDggMy4zMy01LjA4IDcuMzEgMCAyLjA1IDEuMzUgNi4zOCA1LjI0IDYuMzggMi4zMyAwIDQuNTktMi4yNCA0LjU5LTIuOTUtLjAxLS4xMS0uMDEtLjIzLS4xMS0uMjN6bS01LjA4LTkuODFjMS40MiAwIDIuODggMS41NiAyLjg4IDMuMyAwIC40Ni0uMTUuNjItLjUyLjYyaC01LjExYzAtMS43MSAxLjEzLTMuOTIgMi43NS0zLjkyem0tMzEuNy03LjMzYy4xLS4xNi0uMjUtLjI0LS4zNy0uMjQtLjQyIDAtMS4zNy4xMS0xLjguMTEtLjg5IDAtMS42NC0uMDktMi41My0uMDktLjA3IDAtLjQ2LjA1LS40Ni4xOC0uMDEuNjMgMi4xMy0uMTEgMi4xMyAyLjZ2MTAuNTdjMCAzLjEzLS45OSA2LjQxLTUuMjkgNi40MS0zLjA5IDAtNC43Ni0xLjk0LTQuNzYtNi4xN1Y0LjQxYzAtMS45MSAxLjQ5LTEuNDkgMS41Mi0xLjkyLjAzLS40MS0xLjMzLS4xNi0xLjQzLS4xNi0uNzEgMC0xLjIxLjA4LTEuOTUuMDgtLjYyIDAtMS4zNy0uMS0xLjk3LS4xLS4xMiAwLS41My0uMDItLjYxLjE1LS4yMy41NiAxLjkxLjI2IDEuOTEgMS44M3YxMC45MmMwIDQuMDggMS4xNCA4LjA4IDcuMTcgNy45NyA3LjE0LS4xMiA3LjAxLTYuNTQgNy4wMS03LjgzVjUuMTJjLjAxLTIuNDMgMS4yLTIuMiAxLjQzLTIuNTd6bTI4LjE5IDcuMjRjLjE3LS4yLjIyLS41My0uNTctLjQ2LS40NSAwLS43Ny4wOC0xLjIyLjA4LS41NyAwLS42OC0uMDItMS4yMi0uMDQtLjY4LS4wMi0uODYuMDUtLjgyLjI1LjEyLjYgMS41NS4wMSAxLjM2IDEuOC0uMTYgMS41LS42NSAyLjc5LTEuMTQgNC4wN2wtMS43MyA0LjYyLTIuNTQtNy43Yy0uMzEtLjk2LS40NS0xLjQ3LS40NS0xLjU3IDAtLjk2IDEuMTYtLjc1IDEuNDItMS4xNC4xNi0uMjYtLjE3LS40LS41NC0uNC0uMzEgMC0uNjcuMTEtMS42My4xMy0uNzkuMDItMS4zNi4wMi0xLjctLjA1LS44OS0uMTYtLjgyLjMzLS41MS40OHMuNDYuMDEuOTEgMS4zNmwzLjkxIDExLjA2Yy4wOC4yMi4xOC43Ny41Mi43Ny4zOSAwIC4zOS0uMzkuODgtMS42OSAwIDAgMy43NS0xMC40OCA0LTEwLjg2LjUxLS43NC44OS0uNSAxLjA3LS43MXptMTQuNDctLjVjLTEuMDcgMC0xLjggMS4yOC0yLjMzIDIuMTZoLS4wNVY5LjUzYzAtLjMtLjE1LS40OC0uMy0uNDgtLjQxIDAtLjcyLjgxLTIuODcgMS4zMy0uMTMuMDMtLjQ4LjEtLjQ4LjI4IDAgLjY0IDEuODItLjE5IDEuODIgMS45M3Y4LjA3YzAgMS4yNS0xLjI5IDEuMTItMS4yOSAxLjc3IDAgLjE4LjA4LjI3LjI4LjI3LjE3IDAgLjYzLS4xMiAyLjMyLS4xMiAxLjQxIDAgMi4wMi4xMiAyLjM3LjEyLjI4IDAgLjQxLS4wNi40MS0uMzQgMC0uOTgtMi4yNS40OC0yLjI1LTIuMzR2LTYuODhjMC0uNC42LTEuOCAxLjY0LTEuOC45MSAwIDEuMDIuNyAxLjUuNy4zIDAgLjkxLS45MS45MS0xLjM4LS4wMS0uNTgtMS4xNi0xLjM3LTEuNjgtMS4zN3ptMzIuNTUuMWMtLjI3IDAtLjk2LjA0LTEuNTkuMDQtLjc2IDAtMS4xMy0uMDktMS40NS0uMDktLjQ4IDAtLjk2IDAtLjg3LjMyLjEuMzYgMS43My4yMyAxLjczIDIuMDEgMCAuMjMgMCAuNTItLjMzIDEuNzFsLTIuMDggNi42My0yLjktOC4xNXMtLjE0LS4yNi0uMTQtLjc5YzAtMS4zMiAxLjU0LTEuMTcgMS42LTEuNDEuMDUtLjE5LS4yMS0uNC0uNjItLjRoLTMuNjNjLS4wMiAwLS4wMy4wMS0uMDUuMDFoLTIuODFjMC0yLjQxLjAzLTMuMDQtLjM1LTMuMDQtLjM2IDAtLjMuMS0uNjMgMS4xNy0uNTQgMS43OS0yLjUyIDIuNTgtMy4xNSAyLjk3LS4xNS4wOC0uMTUuMTEtLjE1LjE5LS4wMS4yMi43Ni4xNCAyLjMxLjE3bC0uMDEgOC4wN2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjg3IDAgMy4yMS0xLjMzIDMuMjgtMS44IDAtLjI3LS4wNC0uMjktLjE4LS4yNy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMlYxMC43czIuNS0uMDEgMy4yMS0uMDFjLjA0LjA2LjA4LjEzLjEuMTlsMi45OSA4LjQ1Yy4yNC42OS4zOS45Mi42OCAyLjE0LjE5Ljc5LjEyIDEuNTEuMTIgMS41MS0uMjkgMS4yNy0xLjA3IDEuOTktMi4yNiA0LjM0LS4xMi4yMiAxLjcxLS4wMiAxLjgxLS4wNS4xNS0uMDUuMTMtLjA5LjMxLS40MmwxLjMyLTMuOTMgMy42OS0xMS4zNGMuNTQtMS45OCAxLjM5LTEuNjIgMS41My0xLjg5LjEyLS4xMyAwLS4zLS4zMy0uM3pcXFwiXFxuICAgICAgPjwvcGF0aD5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTIyMi4yMiAyMi43NmwtLjA3LjE5VjIzbC4wNy0uMjR6bS0xNC43NC0xNC42Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3pNMjEwLjExIDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzMgMCAuNzYtLjguMDctLjY5ek0xNjYuNTIgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzcgMS41NyAxLjA3IDEuNTd6TTE2OS4xNyAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0aC0uMTdjLS41NC0uMS0xLjA2LS4zMi0xLjA1LTEuNzl2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA3IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAyIDEuNjh2Ny42NGMwIDItMS4zNSAxLjUyLTEuNjYgMi4wNC0uMTUuMjcuMjUuMzMuNTkuMzMuMzEgMCAuODMtLjEzIDIuMi0uMTMgMS41IDAgMi4wMi4xMyAyLjQ2LjEzLjM5IDAgLjgzLS4xNy41Ny0uNDQtLjQyLS40MS0yLjI4LjA2LTIuMjgtMi4wNnYtNy4wOWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjA0IDAgLjA5LS4wMS4xMy0uMDEuMTEgMCAuMjEuMDEuMzQuMDEuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjM0LjAyLjc1LS43OC4wOC0uNjd6bTMyLjcyLTYuODljLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDUgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMS0uNzQtMi41NS0uNzQtLjExIDAtLjUyLS4wMS0uNi0uMDItLjEzIDAtLjI4LjAyLS4yOC4wMi0xLjgxLS4wMy0zLjUgMS4xMS0zLjQ1IDMuNTMuMDUgMi4yMSAyLjY0IDMuNDYgNC4wNCA0LjMgMS4wNC41OSAyLjI2IDEuMTUgMi4yNCAyLjU3LS4wMiAxLjYyLTEuMjcgMi42OC0yLjYxIDIuNi0zLjE1LS4wNS0yLjcyLTQtMy4yOC00LS4zOSAwLS4zMSAxLS4zMSAxLjUyIDAgMS4yNS0uMDYgMi4yOC4xIDIuNDYuMDUuMDYuMi4wMy41LjAzLjYyIDAgMS4zOC42OSAzLjE5LjY5IDIuMDMuMDMgMy44NS0xLjg1IDMuODUtNC4xNyAwLTEuNDctLjQyLTIuMzgtMi4zOC0zLjZ6XFxcIlxcbiAgICAgID48L3BhdGg+XFxuICAgIDwvZz5cXG4gIDwvc3ZnPlxcbjwvZGl2PlxcbjxoZWFkZXIgcm9sZT1cXFwiYmFubmVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJzaXRlLXRpdGxlXFxcIiBocmVmPVxcXCJmaWxlcy9pbmRleC5odG1sXFxcIj5OdXJzZXJ5IFNjaG9vbDwvYT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBpZD1cXFwibWFpbi1tZW51LWNvbnRhaW5lclxcXCIgY2xhc3M9XFxcImJhbm5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImFib3V0XFxcIiBocmVmPVxcXCJmaWxlcy9hYm91dC5odG1sXFxcIj5BYm91dCBVcyA8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwic3RhZmZcXFwiIGhyZWY9XFxcImZpbGVzL3N0YWZmLmh0bWxcXFwiPlN0YWZmPC9hPlxcbiAgICAgICAgICAgIDxhXFxuICAgICAgICAgICAgICBpZD1cXFwibnVyc2VyeS1zY2hvb2wtbWVyY2hhbmRpc2VcXFwiXFxuICAgICAgICAgICAgICBocmVmPVxcXCJmaWxlcy9udXJzZXJ5X3NjaG9vbF9tZXJjaGFuZGlzZS5odG1sXFxcIlxcbiAgICAgICAgICAgICAgPk51cnNlcnkgU2Nob29sIE1lcmNoYW5kaXNlPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiY2xhc3Nyb29tc1xcXCIgaHJlZj1cXFwiZmlsZXMvY2xhc3Nyb29tcy5odG1sXFxcIj5DbGFzc3Jvb21zPC9hPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInRlZGR5LWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy90ZWRkeV9iZWFycy5odG1sXFxcIlxcbiAgICAgICAgICAgICAgPlRlZGR5IEJlYXJzIChBZ2VzIDIgMS8yIC0gMywgTW9ybmluZ3MpPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYW5kYS1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvcGFuZGFfYmVhcnMuaHRtbFxcXCJcXG4gICAgICAgICAgICAgID5QYW5kYSBCZWFycyAoQWdlcyAyIDEvMiAtIDMsIEFmdGVybm9vbnMpPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiZWFyLWN1YnNcXFwiIGhyZWY9XFxcImZpbGVzL2JlYXJfY3Vicy5odG1sXFxcIlxcbiAgICAgICAgICAgICAgPkJlYXIgQ3VicyAoQWdlcyAzIC0gNCwgTW9ybmluZ3MpPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiaWctYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL2JpZ19iZWFycy5odG1sXFxcIlxcbiAgICAgICAgICAgICAgPkJpZyBCZWFycyAoQWdlcyA0IC0gNSwgTW9ybmluZ3MpPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzdW4tYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3N1bl9iZWFycy5odG1sXFxcIlxcbiAgICAgICAgICAgICAgPlN1biBCZWFycyAoQWdlcyA0IC0gNSwgQWZ0ZXJub29ucyk8L2FcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImJlYXItdHJhY2tzXFxcIiBocmVmPVxcXCJmaWxlcy9iZWFyX3RyYWNrcy5odG1sXFxcIlxcbiAgICAgICAgICAgICAgPkJlYXIgVHJhY2tzIEV4dGVuZGVkIERheSBQcm9ncmFtPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiY3VycmljdWx1bVxcXCIgaHJlZj1cXFwiZmlsZXMvY2xhc3NfY3VycmljdWx1bS5odG1sXFxcIj5DdXJyaWN1bHVtPC9hPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW5yaWNoLWJ0blxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIiBpZD1cXFwiZW5yaWNoXFxcIj5cXG4gICAgICAgICAgICAgICAgPGFcXG4gICAgICAgICAgICAgICAgICBpZD1cXFwiZW5yaWNobWVudC1wcm9ncmFtc1xcXCJcXG4gICAgICAgICAgICAgICAgICBocmVmPVxcXCJmaWxlcy9lbnJpY2htZW50X3Byb2dyYW1zLmh0bWxcXFwiXFxuICAgICAgICAgICAgICAgICAgPkFsbC1DbGFzcyBFbnJpY2htZW50IFByb2dyYW1zPC9hXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3ViZHJvcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGlkPVxcXCJhcnRcXFwiIGhyZWY9XFxcImZpbGVzL2FydF9zdXp5Lmh0bWxcXFwiPkFydDwvYT5cXG4gICAgICAgICAgICAgICAgPGEgaWQ9XFxcIm11c2ljXFxcIiBocmVmPVxcXCJmaWxlcy9tdXNpY19jaHJpc3RpbmEuaHRtbFxcXCI+TXVzaWM8L2E+XFxuICAgICAgICAgICAgICAgIDxhIGlkPVxcXCJzcGFuaXNoXFxcIiBocmVmPVxcXCJmaWxlcy9zcGFuaXNoX2NvbGxlZW4uaHRtbFxcXCI+U3BhbmlzaDwvYT5cXG4gICAgICAgICAgICAgICAgPGEgaWQ9XFxcInNjaWVuY2VcXFwiIGhyZWY9XFxcImZpbGVzL25hdHVyZV9iZWNreS5odG1sXFxcIj5TY2llbmNlPC9hPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImN1cnJpY3VsdW0tb3ZlcnZpZXdcXFwiIGhyZWY9XFxcImZpbGVzL2N1cnJpY3VsdW1fb3ZlcnZpZXcuaHRtbFxcXCJcXG4gICAgICAgICAgICAgID5DdXJyaWN1bHVtIE92ZXJ2aWV3PC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiY2FsZW5kYXJcXFwiIGhyZWY9XFxcImZpbGVzL2NhbGVuZGFyLmh0bWxcXFwiPkNhbGVuZGFyPC9hPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImN1cnJpY3VsdW0tb3ZlcnZpZXdcXFwiIGhyZWY9XFxcImZpbGVzL2hvdXJzX29mX29wZXJhdGlvbi5odG1sXFxcIlxcbiAgICAgICAgICAgICAgPlNjaG9vbCBZZWFyIFByb2dyYW0gSG91cnM8L2FcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8YSBpZD1cXFwic3VtbWVyLWNhbXBcXFwiIGhyZWY9XFxcImZpbGVzL3N1bW1lcl9jYW1wLmh0bWxcXFwiPlN1bW1lciBDYW1wPC9hPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwicGFyZW50LWluZm9cXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9pbmZvLmh0bWxcXFwiXFxuICAgICAgICAgICAgICA+UGFyZW50IEluZm9ybWF0aW9uPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBvbGljaWVzLXByb2NlZHVyZXNcXFwiIGhyZWY9XFxcImZpbGVzL3BvbGljaWVzX3Byb2NlZHVyZXMuaHRtbFxcXCJcXG4gICAgICAgICAgICAgID5Qb2xpY2llcyAmIFByb2NlZHVyZXM8L2FcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgPGFcXG4gICAgICAgICAgICAgIGlkPVxcXCJob21lLXNjaG9vbC1jb21tdW5pY2F0aW9uXFxcIlxcbiAgICAgICAgICAgICAgaHJlZj1cXFwiZmlsZXMvaG9tZV9zY2hvb2xfY29tbXVuaWNhdGlvbi5odG1sXFxcIlxcbiAgICAgICAgICAgICAgPkhvbWUgJiBTY2hvb2wgQ29tbXVuaWNhdGlvbjwvYVxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICA8YSBpZD1cXFwic3BlY2lhbF9oZWxwXFxcIiBocmVmPVxcXCJmaWxlcy9zcGVjaWFsX2hlbHAuaHRtbFxcXCJcXG4gICAgICAgICAgICAgID5QZXJzb25hbGl6ZWQgSGVscCAmIFNwZWNpYWwgTmVlZHM8L2FcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInRyYW5zaXRpb25pbmdcXFwiIGhyZWY9XFxcImZpbGVzL3RyYW5zaXRpb25pbmcuaHRtbFxcXCJcXG4gICAgICAgICAgICAgID5UcmFuc2l0aW9uaW5nIEludG8gU2Nob29sPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJnZXQtaW52b2x2ZWRcXFwiIGhyZWY9XFxcImZpbGVzL2dldF9pbnZvbHZlZC5odG1sXFxcIj5HZXQgSW52b2x2ZWQ8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1yZXNvdXJjZXNcXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9yZXNvdXJjZXMuaHRtbFxcXCJcXG4gICAgICAgICAgICAgID5SZWNjb21lbmRlZCBSZWFkaW5nPC9hXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiYWRtaXNzaW9uc1xcXCIgaHJlZj1cXFwiZmlsZXMvYXBwbHkuaHRtbFxcXCI+QWRtaXNzaW9uczwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJhcHBseVxcXCIgaHJlZj1cXFwiZmlsZXMvYXBwbHkuaHRtbFxcXCI+QXBwbHk8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImVucm9sbFxcXCIgaHJlZj1cXFwiZmlsZXMvZW5yb2xsbWVudC5odG1sXFxcIj5FbnJvbGw8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInR1aXRpb25cXFwiIGhyZWY9XFxcImZpbGVzL3R1aXRpb24uaHRtbFxcXCI+VHVpdGlvbjwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2hlYWRlcj5cXG5cIjtcbiIsImltcG9ydCB7IEQgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9kb2N1bWVudFwiO1xuXG5leHBvcnQgY2xhc3MgU2xpZGVzaG93IHtcbiAgcHVibGljIHN0YXRpYyBzZXR1cEFsbCgpIHtcbiAgICBTbGlkZXNob3cuZGlzY2FyZEFsbCgpO1xuICAgIGNvbnN0IHNsaWRlc2hvd3MgPSBELmNsYXooXCJzbGlkZXNob3dcIik7XG4gICAgZm9yIChsZXQgc3NJbmRleCA9IDA7IHNzSW5kZXggPCBzbGlkZXNob3dzLmxlbmd0aDsgKytzc0luZGV4KSB7XG4gICAgICBjb25zdCBlbGVtID0gc2xpZGVzaG93cy5pdGVtKHNzSW5kZXgpO1xuICAgICAgaWYgKGVsZW0gPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFNsaWRlc2hvdy5zbGlkZXNob3dzLnB1c2gobmV3IFNsaWRlc2hvdyhlbGVtKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNjYXJkQWxsKCkge1xuICAgIFNsaWRlc2hvdy5zbGlkZXNob3dzID0gW107XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzbGlkZXNob3dzOiBTbGlkZXNob3dbXSA9IFtdO1xuXG4gIHByaXZhdGUgc2xpZGVJbmRleCA9IDA7XG4gIHByaXZhdGUgc2xpZGVDb3VudCA9IDA7XG4gIHByaXZhdGUgc2xpZGVzOiBFbGVtZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBkb3RzOiBFbGVtZW50W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG91dGVyOiBFbGVtZW50KSB7XG4gICAgRC5lYWNoUmVjdXIodGhpcy5vdXRlciwgKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGNMaXN0ID0gZWxlbS5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY0xpc3QuY29udGFpbnMoXCJwcmV2LXNsaWRlc2hvdy1idXR0b25cIikpIHtcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5taW51c1NsaWRlKDEpKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJuZXh0LXNsaWRlc2hvdy1idXR0b25cIikpIHtcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5wbHVzU2xpZGUoMSkpO1xuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcInNsaWRlc2hvdy1lbnRyeVwiKSkge1xuICAgICAgICB0aGlzLnNsaWRlcy5wdXNoKGVsZW0pO1xuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcInNsaWRlc2hvdy1kb3RcIikpIHtcbiAgICAgICAgdGhpcy5kb3RzLnB1c2goZWxlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvdHNbaV0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93U2xpZGUoaSkpO1xuICAgIH1cbiAgICB0aGlzLnNsaWRlQ291bnQgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgdGhpcy5zaG93U2xpZGUodGhpcy5zbGlkZUluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBwbHVzU2xpZGUobjogbnVtYmVyKSB7XG4gICAgdGhpcy5zaG93U2xpZGUoKHRoaXMuc2xpZGVJbmRleCArPSBuKSk7XG4gIH1cbiAgcHVibGljIG1pbnVzU2xpZGUobjogbnVtYmVyKSB7XG4gICAgdGhpcy5zaG93U2xpZGUoKHRoaXMuc2xpZGVJbmRleCAtPSBuKSk7XG4gIH1cbiAgcHVibGljIHNob3dTbGlkZShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zbGlkZUluZGV4ID0gaW5kZXggJSB0aGlzLnNsaWRlQ291bnQ7XG4gICAgdGhpcy5zbGlkZUluZGV4ID0gTWF0aC5tYXgodGhpcy5zbGlkZUluZGV4LCAtMSAqIHRoaXMuc2xpZGVJbmRleCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlcy5sZW5ndGg7ICsraSkge1xuICAgICAgKHRoaXMuc2xpZGVzW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgKHRoaXMuc2xpZGVzW3RoaXMuc2xpZGVJbmRleF0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgdGhpcy5kb3RzW3RoaXMuc2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vY29yZS91dGlscy9xX3BhcmFtcyc7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9jb3JlL2RhdGEtbG9nL2RhdGEnO1xuaW1wb3J0IHsgQWN0aW9uRW51bSB9IGZyb20gJy4vLi4vY29yZS9kYXRhLWxvZy9ldmVudCc7XG5pbXBvcnQgeyBEIH0gZnJvbSAnLi8uLi9jb3JlL2RvbS9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4vLi4vY29yZS9kb20vZWxlbWVudHMnO1xuaW1wb3J0IHsgU2Nyb2xsIH0gZnJvbSAnLi8uLi9jb3JlL2RvbS9zY3JvbGwnO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJy4vLi4vY29yZS9yb3V0ZXIvaGlzdG9yeSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZGUsIFJvdXRlck1vZHVsZSB9IGZyb20gJy4vLi4vY29yZS9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICcuLy4uL2NvcmUvdHJhY2tlci90cmFja2VyJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IElER2VuZXJhdG9yIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL2lkX2dlbmVyYXRvcic7XG5pbXBvcnQgeyB3YWl0VW50aWxSZWFkeSB9IGZyb20gJy4vLi4vY29yZS91dGlscy9yZWFkeSc7XG5pbXBvcnQgeyBzY2VuYXJpb3MsIFNjZW5hcmlvIH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL3NjZW5hcmlvcyc7XG5cbmNvbnN0IHNldHVwID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdhaXRVbnRpbFJlYWR5KCk7XG4gICAgY29uc3Qgc2NlbmFyaW8gPSBzY2VuYXJpb3MuZmluZCgoc2NlbikgPT4gc2Nlbi50YWcgPT09IHBhcmFtcy50YWcpO1xuICAgIGlmICghcGFyYW1zLnNhbmRib3gpIHtcbiAgICAgICAgaWYgKHNjZW5hcmlvID09PSBudWxsIHx8IHNjZW5hcmlvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaGlzIEhJVCBpcyBicm9rZW4gYW5kIGNhbm5vdCBiZSBjb21wbGV0ZWQgYXQgdGhpcyB0aW1lLicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVHJhY2tlci5sb2FkU2NlbmFyaW8oc2NlbmFyaW8gYXMgU2NlbmFyaW8pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRyYWNrZXIuc3RhcnQoe1xuICAgICAgICBrZXlQcmVmaXg6ICdpbmZvcm1hdGlvbi1mb3JhZ2luZycsXG4gICAgICAgIGJ1Y2tldE5hbWU6ICdjc2UtMjU2LWxvZycsXG4gICAgICAgIGFsbG93U3VibWlzc2lvbjoge1xuICAgICAgICAgICAgYWxsb3coKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBELmlkKCd0ZXh0LWFyZWEnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0QXJlYS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0QXJlYS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnWW91IG11c3QgZmlsbCBvdXQgdGhlIHRleHQgYm94IHRvIHR1cm4gdGhpcyBISVQgaW4uJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RoZXJlIHdhcyBhbiBlcnJvciBmaWxsIG91dCB0aGUgZm9ybSBhbmQgdHJ5IGFnYWluLic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZVN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSAoRC5pZChcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtYXJlYSdcbiAgICAgICAgICAgICAgICApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW0uTk9ORSxcblxuICAgICAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSByb3V0ZXJcbiAgICAgICAgICAgIFJvdXRlci5kZWZhdWx0QWxsb3dhbmNlc09uKCk7XG4gICAgICAgICAgICBSb3V0ZXIuY29uZmlndXJlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuQSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBtb2RlOiBSb3V0ZXJNb2RlLk9GRiwgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuRk9STSB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IFJvdXRlck1vZHVsZS5JTUcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAnZmlsZXMvJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIEhpc3Rvcnkuc2V0dXAod2luZG93LmxvY2F0aW9uLmhyZWYsIHsgd3JhcHBlcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSBodG1sIGxvYWRlciBwb3N0IG9wZXJhdGlvblxuICAgICAgICAgICAgSFRNTExvYWRlci5maW5pc2goKTtcbiAgICAgICAgICAgIEhUTUxMb2FkZXIucmVnaXN0ZXJQb3N0TG9hZEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIElER2VuZXJhdG9yLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgSURHZW5lcmF0b3IuYXR0YWNoSWRzVG9BbGxFbGVtZW50cygpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5zZXR1cChFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgICAgICAgICAgICBTY3JvbGwucHJvbWlzZSgwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGxpc3RlbmVycyBvbiBodG1sIGxvY1xuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmh0bWxMb2MsIEFjdGlvbkVudW0uQ0xJQ0ssIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXYgPSBlIGFzIE1vdXNlRXZlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBldi5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBldi5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICBpZDogKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uQ0xJQ0spKG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5kb2N1bWVudCwgJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldiA9IGUgYXMgS2V5Ym9hcmRFdmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZXYua2V5LFxuICAgICAgICAgICAgICAgICAgICBpZDogKGV2LnNyY0VsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLkJVVFRPTikob2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU1BFQ0lBTCBDQVNFOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgZG9lcyBub3QgYmVoYXZlIHRoZSBzYW1lIHdheSBhcyBkb2N1bWVudCBzbyB0aGUgYmVsb3cgZnVuY3Rpb24gbXVzdCBiZWhhdmUgZGlmZmVyZW50bHkgdGhhbiB0aGUgbGlzdGVuZXJzIGFib3ZlLlxuICAgICAgICAgICAgY29uc3Qgc0VsZW0gPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gc0VsZW0uc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHNFbGVtLnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICBjb25zdCBkdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoVHJhY2tlci5sYXN0UG9zLnggLSBkeCkgPiAxMCB8fFxuICAgICAgICAgICAgICAgICAgICAoTWF0aC5hYnMoVHJhY2tlci5sYXN0UG9zLnkgLSBkeSkgPiAxMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZHRpbWUgLSBUcmFja2VyLmxhc3RQb3MudGltZSA+IDEwMClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnggPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnkgPSBkeTtcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnRpbWUgPSBkdGltZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0geyB4OiBkeCwgeTogZHkgfTtcbiAgICAgICAgICAgICAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLlNDUk9MTCkob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VkIGV2ZW50c1xuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uSElTVE9SWSk7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5CVVRUT04pO1xuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQ0xJQ0spO1xuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uU0NST0xMKTtcbiAgICAgICAgICAgIC8vIGxvYWQgZmlyc3QgcGFnZVxuICAgICAgICAgICAgYXdhaXQgUm91dGVyLmxvYWQoJ2ZpbGVzL2luZGV4Lmh0bWwnKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn07XG5cbnNldHVwKCk7XG4iXX0=
