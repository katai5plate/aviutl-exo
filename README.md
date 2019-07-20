# aviutl-exo

Convert AviUtl exo files to JSON or YAML

# usage

## install

```
npm i
```

## Use for Node.js

```ts
import { decode, encode } from 'aviutl-exo';
import { load, save } from 'aviutl-exo/lib/node/fs';

import { outputFile, readFile } from 'fs-extra';
import { parse } from 'path';

const decodeEXO2JSON = (fileName: string, saving: boolean) => {
  const exoText = await load(fileName);
  const result = decode(exoText, 'JSON');
  if (saving) await outputFile(`${parse(fileName).name}.json`, result);
  return result;
};
const decodeEXO2YAML = (fileName: string, saving: boolean) => {
  const exoText = await load(fileName);
  const result = decode(exoText, 'YAML');
  if (saving) await outputFile(`${parse(fileName).name}.yaml`, result);
  return result;
};

const encodeJSON2EXO = (fileName: string, saving: boolean) => {
  const jsonText = await readFile(fileName, 'utf8');
  const result = encode(jsonText, 'JSON');
  if (saving) await save(`${parse(fileName).name}.exo`, result);
  return result;
};
const encodeYAML2EXO = (fileName: string, saving: boolean) => {
  const yamlText = await readFile(fileName, 'utf8');
  const result = encode(jsonText, 'YAML');
  if (saving) await save(`${parse(fileName).name}.exo`, result);
  return result;
};
```

## Use for Browser

```ts
// TODO
```
