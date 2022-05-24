# `@maplero/prettier-config`

> eslint config used by react app in Maple

## Usage

```bash
npm install @maplero/prettier-config -D
```
```bash
pnpm install @maplero/prettier-config -D
```
```bash
yarn add @maplero/prettier-config -D
```

### method1
add `prettier` field in `package.json`

```json
{
  "prettier": "@maplero/prettier-config"
}
```
### method2
create `.prettierrc.js` with next content

```js
module.exports = {
  ...require("@maplero/prettier-config"),
};
```
