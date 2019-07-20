"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = require("./conv/format");
var ini2yaml_1 = require("./conv/ini2yaml");
exports.decode = function (targetText, fileType) {
    var obj = ini2yaml_1.iniToObj(targetText);
    var formated = format_1.readable(obj);
    var yaml = ini2yaml_1.objToYaml(formated);
    if (fileType === 'JSON') {
        return JSON.stringify(formated, null, '  ');
    }
    return yaml;
};
exports.encode = function (targetText, fileType) {
    var targetObj = {};
    if (fileType === 'JSON') {
        targetObj = JSON.parse(targetText);
    }
    else {
        targetObj = ini2yaml_1.yamlToObj(targetText);
    }
    var normalized = format_1.normalize(targetObj);
    return ini2yaml_1.objToIni(normalized);
};
