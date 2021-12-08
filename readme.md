# TERMINAL ALERTS
Cross platform TERMINAL Alerts with colors & colored symbols for success, info, warning, error. Works on macOS, Linux, and Windows.

## Install 
```js
npm i terminal-alerts
```

## Usage
```js
const alert = require('terminal-alerts');

// Provide the type, msg, and name options.
alert({type: `success`, msg: `Everything finished!`});
// Prints: ✔ SUCCESS Everything finished!

alert({type: `success`, msg: `Everything finished!`, name: `DONE`});
// Prints: ✔ DONE Everything finished!

alert({type: `warning`, msg: `You didn't add something!`});
// Prints: ⚠ WARNING You didn't add something!

alert({type: `info`, msg: `Awais is awesome!`});
// Prints: ℹ INFO Awais is awesome!

alert({type: `error`, msg: `Something went wrong!`});
// Prints: ✖ ERROR Something went wrong!
```

## API

### alert(options)

#### > options

Type: `object`<br>
Default: `{}`

You can specify the options below.

##### ❯ type

Type: `string`<br>
Default: `error`

##### ❯ msg

Type: `string`<br>
Default: `You forgot to define all the options.` (Error message)

##### ❯ name

Type: `string`<br>
Default: `''` (Empty string)

<br>

##### 

Made by Debapriya with ❤ 


