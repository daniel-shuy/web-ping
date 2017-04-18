# web-ping
JavaScript ping API for use in a web browser context.  Released under the BSD-3-Clause license, see
LICENSE.

## Installation

`npm install --save web-ping`

## Usage

```js
/**
 * Pings a url.
 * @param  {String} url
 * @param  {Number} multiplier - optional, factor to adjust the ping by.  0.3 works well for HTTP servers.
 * @return {Promise} promise that resolves to a ping (ms, float).
 */
```

Example:

```js
ping('https://google.com/').then(function(delta) {
    console.log('Ping time was ' + String(delta) + ' ms');
}).catch(function(err) {
    console.error('Could not ping remote URL', err);
});
```

## Caveats

The user should be aware that this method relies on the HTTP protocol to ping
remote URLs.  Consequently, ping times are not as reliable as if they were
performed using the ICMP protocol.
