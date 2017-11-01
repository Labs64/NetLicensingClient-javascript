<a href="https://netlicensing.io"><img src="https://netlicensing.io/img/netlicensing-stage-twitter.jpg" alt="Innovative License Management Solution"></a>

# [Labs64 NetLicensing](https://netlicensing.io) JavaScript Client

[![Build Status](https://travis-ci.org/Labs64/NetLicensingClient-javascript.svg?branch=master)](https://travis-ci.org/Labs64/NetLicensingClient-javascript)
[![npm version](https://badge.fury.io/js/netlicensing-client.svg)](https://badge.fury.io/js/netlicensing-client)
[![](https://data.jsdelivr.com/v1/package/npm/netlicensing-client/badge)](https://www.jsdelivr.com/package/npm/netlicensing-client)

JavaScript wrapper for Labs64 NetLicensing [RESTful API](http://l64.cc/nl10)

## How To Use

Check out project [wiki](https://github.com/Labs64/NetLicensingClient-javascript/wiki) pages for detailed usage instructions.

## Online Demo

Demo web application for this library can be found [here](http://io.labs64.com/NetLicensingClient-javascript/client-demo.html) as well as [source code](https://github.com/Labs64/NetLicensingClient-javascript/tree/master/docs).

## Development

Here is a Docker based local development environment prepared, which provides a very flexible and extensible way of developing Node.js applications.

### System Requirements
To be able to run Laravel Boilerplate you have to meet the following requirements:
* [docker](https://www.docker.com)
To be able to build this NetLicensing Client you have to meet the following requirements:
* Node.js > 6.0
* Gulp > 3.9.1

### Develop with Docker

1. Clone repository
```
$ git clone https://github.com/Labs64/NetLicensingClient-javascript.git
```

2. Prepare docker image
```
$ docker build -t labs64/nodejs .
```

3. Start local development environment
```
$ docker run -v $(pwd):/opt/NetLicensingClient-javascript -i -t labs64/nodejs /bin/bash
```

4. Configure git using your eMail and Username
```
$ git config --global user.email "eMail"
$ git config --global user.name "User Name"
```

## How to Contribute

Everyone is welcome to contribute to this project!
Once you're done with your changes send a pull request and check [CI validation status](https://travis-ci.org/Labs64/NetLicensingClient-javascript).
Thanks!

## Bugs and Feedback

For bugs, questions and discussions please use the [GitHub Issues](https://github.com/Labs64/NetLicensingClient-javascript/issues).

## License

This boilerplate is open-sourced software licensed under the [Apache License Version 2.0](LICENSE).

---

Visit Labs64 NetLicensing at https://netlicensing.io
