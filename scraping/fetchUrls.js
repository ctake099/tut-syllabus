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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
// @ts-ignore
var puppeteer = require("puppeteer");
var fs = require("fs");
// 遅延関数
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
// refer() を実際の URL に変換する関数
function parseReferToUrl(onclick) {
    var match = onclick.match(/refer\('(\d+)',\s*'([^']+)',\s*'([^']+)'\)/);
    if (!match)
        return null;
    var nendo = match[1], jscd = match[2], jcd = match[3];
    return "https://kyo-web.teu.ac.jp/syllabus/".concat(nendo, "/").concat(jscd, "_").concat(jcd, "_ja_JP.html");
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page, frames_1, frameNames, searchFrame, allUrls, resultFrame, _a, onclickValues, urls, hasNext, filePath, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 19, , 20]);
                    return [4 /*yield*/, puppeteer.launch({ headless: true })];
                case 1:
                    browser = _b.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _b.sent();
                    return [4 /*yield*/, page.goto("https://kyo-web.teu.ac.jp/campussy/", {
                            waitUntil: 'domcontentloaded',
                        })];
                case 3:
                    _b.sent();
                    frames_1 = page.frames();
                    frameNames = frames_1.map(function (f) { return f.name(); });
                    console.log("フレーム名一覧:", frameNames);
                    searchFrame = frames_1.find(function (f) { return f.name() === 'search'; });
                    if (!!searchFrame) return [3 /*break*/, 5];
                    console.error("search フレームが見つかりませんでした。");
                    return [4 /*yield*/, browser.close()];
                case 4:
                    _b.sent();
                    return [2 /*return*/];
                case 5: 
                // 検索ボタンをクリック
                return [4 /*yield*/, searchFrame.click('input[name="_eventId_search"]')];
                case 6:
                    // 検索ボタンをクリック
                    _b.sent();
                    console.log("検索ボタンをクリックしました");
                    return [4 /*yield*/, delay(2000)];
                case 7:
                    _b.sent(); // result フレームの更新待ち
                    allUrls = [];
                    _b.label = 8;
                case 8:
                    if (!true) return [3 /*break*/, 17];
                    frames_1 = page.frames();
                    resultFrame = frames_1.find(function (f) { return f.name() === 'result'; });
                    if (!resultFrame) {
                        console.error("result フレームが見つかりません。");
                        return [3 /*break*/, 17];
                    }
                    _b.label = 9;
                case 9:
                    _b.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, resultFrame.waitForSelector('a[onclick]', { timeout: 10000 })];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 11:
                    _a = _b.sent();
                    console.warn("リンクが見つかりませんでした。終了します。");
                    return [3 /*break*/, 17];
                case 12: return [4 /*yield*/, resultFrame.$$eval('a[onclick]', function (anchors) {
                        return anchors.map(function (a) { return a.getAttribute('onclick'); }).filter(Boolean);
                    })];
                case 13:
                    onclickValues = _b.sent();
                    urls = onclickValues
                        .map(parseReferToUrl)
                        .filter(function (url) { return url !== null; });
                    console.log("\uD83D\uDCC4 \u30DA\u30FC\u30B8\u304B\u3089 ".concat(urls.length, " \u4EF6\u306E URL \u3092\u53D6\u5F97"));
                    allUrls.push.apply(allUrls, urls);
                    return [4 /*yield*/, resultFrame.evaluate(function () {
                            var anchors = Array.from(document.querySelectorAll('a'));
                            return anchors.some(function (a) { var _a; return (_a = a.textContent) === null || _a === void 0 ? void 0 : _a.includes("次へ"); });
                        })];
                case 14:
                    hasNext = _b.sent();
                    if (!hasNext) {
                        console.log("『次へ』リンクが見つかりません。終了します。");
                        return [3 /*break*/, 17];
                    }
                    return [4 /*yield*/, resultFrame.evaluate(function () {
                            var anchors = Array.from(document.querySelectorAll('a'));
                            var next = anchors.find(function (a) { var _a; return (_a = a.textContent) === null || _a === void 0 ? void 0 : _a.includes("次へ"); });
                            if (next)
                                next.click();
                        })];
                case 15:
                    _b.sent();
                    console.log("➡ 次ページに遷移...");
                    return [4 /*yield*/, delay(3000)];
                case 16:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 17:
                    filePath = "syllabus_urls.json";
                    fs.writeFileSync(filePath, JSON.stringify(allUrls, null, 2), "utf-8");
                    console.log("\u2705 URL \u30EA\u30B9\u30C8\u3092 '".concat(filePath, "' \u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F (").concat(allUrls.length, " \u4EF6)"));
                    return [4 /*yield*/, browser.close()];
                case 18:
                    _b.sent();
                    return [3 /*break*/, 20];
                case 19:
                    error_1 = _b.sent();
                    console.error("Error in main:", error_1);
                    return [3 /*break*/, 20];
                case 20: return [2 /*return*/];
            }
        });
    });
}
main();
