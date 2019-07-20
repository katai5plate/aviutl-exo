# aviutl-exo

Convert AviUtl exo files to JSON or YAML

# Usage

## install

```
npm i
```

## Usage for Node.js

```ts
import { decode, encode } from 'aviutl-exo';
import { load, save, loadEXO, saveEXO } from 'aviutl-exo/fs';

const decodeEXO2JSON = async (fileName: string, saving: boolean) => {
  const exoText = await loadEXO(fileName);
  const result = decode(exoText, 'JSON');
  if (saving) await save(fileName, 'json', result);
  return result;
};
const decodeEXO2YAML = async (fileName: string, saving: boolean) => {
  const exoText = await loadEXO(fileName);
  const result = decode(exoText, 'YAML');
  if (saving) await save(fileName, 'yaml', result);
  return result;
};

const encodeJSON2EXO = async (fileName: string, saving: boolean) => {
  const jsonText = await load(fileName, 'json');
  const result = encode(jsonText, 'JSON');
  if (saving) await saveEXO(fileName, result);
  return result;
};
const encodeYAML2EXO = async (fileName: string, saving: boolean) => {
  const yamlText = await load(fileName, 'yaml');
  const result = encode(yamlText, 'YAML');
  if (saving) await saveEXO(fileName, result);
  return result;
};
```

## Use for Browser

```ts
// TODO
```
