import { readFile, outputFile } from 'fs-extra';
import { decode, encode } from 'iconv-lite';
import { parse } from 'path';

import { ReadableFileExt } from 'type';

export const load = async (
  fileName: string,
  ext: ReadableFileExt,
  encoding: string = 'utf8'
) => await readFile(`${parse(fileName).name}.${ext}`, encoding);

export const save = async (
  fileName: string,
  ext: ReadableFileExt,
  data: string,
  encoding?: string
) => await outputFile(`${parse(fileName).name}.${ext}`, data, encoding);

interface ExoIOConfig {
  ext: string;
  encoding?: string;
}
const exoIOConfigDefault: ExoIOConfig = {
  ext: 'exo'
};

export const loadEXO = async (
  fileName: string,
  config: ExoIOConfig = exoIOConfigDefault
) =>
  decode(await readFile(`${parse(fileName).name}.${config.ext}`), 'Shift_JIS');

export const saveEXO = async (
  fileName: string,
  data: string,
  config: ExoIOConfig = exoIOConfigDefault
) =>
  await outputFile(
    `${parse(fileName).name}.${config.ext}`,
    encode(data, 'Shift_JIS')
  );
