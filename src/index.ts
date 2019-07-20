import { readable, normalize } from './conv/format';
import { iniToObj, objToYaml, yamlToObj, objToIni } from './conv/ini2yaml';

import { ReadableFileType } from './type';

export const decode = (targetText: string, fileType: ReadableFileType) => {
  const obj = iniToObj(targetText);
  const formated = readable(obj);
  const yaml = objToYaml(formated);
  if (fileType === 'JSON') {
    return JSON.stringify(formated, null, '  ');
  }
  return yaml;
};
export const encode = (targetText: string, fileType: ReadableFileType) => {
  let targetObj = {};
  if (fileType === 'JSON') {
    targetObj = JSON.parse(targetText);
  } else {
    targetObj = yamlToObj(targetText);
  }
  const normalized = normalize(targetObj);
  return objToIni(normalized);
};
