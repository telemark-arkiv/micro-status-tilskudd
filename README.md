[![Build Status](https://travis-ci.org/telemark/micro-status-tilskudd.svg?branch=master)](https://travis-ci.org/telemark/micro-status-tilskudd)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-status-tilskudd

Shows status for tilskudd

## API

### **/raw**

Returns json of unformatted data.

#### GET

```bash
$ curl https://tilskudd.status.t-fk.win/raw
```

### **/json**

Returns json of formatted data.

#### GET

```bash
$ curl https://tilskudd.status.t-fk.win/json
```

### **/html**

Renders formatted data to html. 

#### GET

```bash
$ curl https://tilskudd.status.t-fk.win/html
```

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-status-tilskudd.png "Robohash image of micro-status-tilskudd")