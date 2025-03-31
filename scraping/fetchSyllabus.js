"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var https = require("https");
var crypto_1 = require("crypto");
var cheerio = require("cheerio");
var fs = require("fs");
// --- 日本語→英語のマッピング ---
var keyMap = {
    '科目名': 'subjectName',
    '担当教員（所属）': 'instructors',
    '授業科目区分': 'courseCategory',
    '授業種別': 'courseType',
    '時間割コード': 'timetableCode',
    '開講学期': 'semester',
    '開講曜限': 'schedule',
    '対象所属': 'department',
    '対象学年': 'grade',
    '単位数': 'credits',
    '教室': 'classroom',
    '更新日': 'lastUpdated',
    '授業概要': 'overview',
    '到達目標': 'objectives',
    'ラーニング・アウトカムズ (学修到達目標)': 'learningOutcomes',
    '授業方法': 'teachingMethod',
    '履修上の注意': 'notes',
    '準備学習': 'preparation',
    '成績評価方法・基準': 'evaluation',
    '教科書': 'textbook',
    //参考書の追加
    '参考書': 'referenceMaterials',
    '授業計画': 'schedulePlan',
};
//ダミーデータ群
var dummyDatas = ["https://kyo-web.teu.ac.jp/syllabus/2025/BT_B10201_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/CS_11050C01_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/MS_M000519_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/ES_K100601_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/ESE7_K000605_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/ESE7_K703901_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/X1_L9110101_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/DS_R204D_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HS_T3300_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2024/X3_GE000401_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2024/GF_GF1004_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/GH_GH1008_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/BT_B21001_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HSH2_U2204_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HSH2_W2206_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HSH6_U60122_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/MS_11051M08_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/MS_11051M21_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/HSH5_W5406_ja_JP.html",
    "https://kyo-web.teu.ac.jp/syllabus/2025/CS_C40260_ja_JP.html",
];
// --- テーブルからデータを抽出 ---
var extractTableData = function ($, table) {
    var data = {};
    $(table).find('tr').each(function (_, row) {
        var _a;
        var th = $(row).find('th').text().trim().replace(/\s+/g, ' ');
        var td = ((_a = $(row).find('td').html()) === null || _a === void 0 ? void 0 : _a.trim()) || '';
        td = td.replace(/<br\s*\/?>/gi, '\n').replace(/\s+/g, ' ').trim();
        //keyの設定（日本語から英語に）
        var key = keyMap[th];
        if (key && td) {
            //scheduleの処理(Schedule{day, period}の処理)
            if (key == 'schedule') {
                //lstをmapで回して数字以外にマッチするものをdayに,数字をperiodに代入
                var schedules = td.split(",").map(function (str) { return str.replace(/\s+/g, ""); });
                var result = schedules.map(function (item) {
                    var match = item.match(/^([^\d]+)(\d+)$/);
                    if (match) {
                        var day = match[1]; //曜日部分の取得
                        var period = Number(match[2]); //数字部分を取得、number型に変換
                        return { day: day, period: period }; //オブジェクトの作成
                    }
                    else {
                        console.warn("Invalid schedule format: ".concat(item));
                        return { day: "他" };
                    }
                });
                data[key] = result;
                //department,gradeの処理（string[]の処理）
            }
            else if ((key == 'department')) {
                data[key] = td.split(",").map(function (str) { return str.replace(/\s+/g, ""); });
            }
            else if ((key == 'grade')) {
                data[key] = td.split(",").map(function (str) { return Number(str.replace(/\s+/g, "").match(/\d+(\.\d+)?/g)); });
            }
            else if (key == 'credits') {
                //credits（numberの処理）
                data[key] = Number(td);
            }
            else {
                //それ以外の処理（stringの処理）
                data[key] = td;
            }
        }
    });
    return data;
};
// --- メイン処理 ---
var main = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (url) {
        var agent, html, $, basicTable, detailTable, basicData, detailData, lectureInfo, error_1;
        if (url === void 0) { url = "https://kyo-web.teu.ac.jp/syllabus/2024/BT_11040B1_ja_JP.html"; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    agent = new https.Agent({
                        minVersion: "TLSv1.2",
                        rejectUnauthorized: false,
                        secureOptions: crypto_1.constants.SSL_OP_LEGACY_SERVER_CONNECT,
                    });
                    return [4 /*yield*/, axios_1.default.get(url, {
                            httpsAgent: agent,
                            headers: {
                                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
                            }
                        })];
                case 1:
                    html = (_a.sent()).data;
                    $ = cheerio.load(html);
                    basicTable = $('#tabs-1 table.syllabus-normal').get(0);
                    detailTable = $('#tabs-2 table.syllabus-normal').get(0);
                    if (!basicTable || !detailTable) {
                        throw new Error('必要なテーブルが見つかりませんでした');
                    }
                    basicData = extractTableData($, basicTable);
                    detailData = extractTableData($, detailTable);
                    lectureInfo = __assign(__assign({}, basicData), detailData);
                    // JSONとして保存
                    //fs.writeFileSync('lectureData/lecture.json', JSON.stringify(lectureInfo, null, 2), 'utf8');
                    //console.log('✅ lecture.json に保存しました');
                    //Dummyの取得
                    fs.writeFileSync("DummyDatas/".concat(basicData.timetableCode, ".json"), JSON.stringify(lectureInfo, null, 2), 'utf8');
                    console.log("\u2705 DummyDatas/".concat(basicData.timetableCode, ".json \u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F"));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('❌ エラーが発生しました:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
main();
//ダミーデータの反復処理（mainの反復実行）
dummyDatas.map(function (dummyUrl) {
    main(dummyUrl);
});
