<a href="https://netlicensing.io"><img src="https://netlicensing.io/img/netlicensing-stage-twitter.jpg" alt="Innovative License Management Solution"></a>

# [Labs64 NetLicensing](https://netlicensing.io) Client (JavaScript)

[![Build Status](https://github.com/Labs64/NetLicensingClient-javascript/workflows/NetLicensing%20Client%20CI/badge.svg)](https://github.com/Labs64/NetLicensingClient-javascript/actions?query=workflow%3A%22JavaScript+Client+-+CI%22)
[![npm version](https://img.shields.io/npm/v/netlicensing-client)](https://www.npmjs.com/package/netlicensing-client)
[![npm downloads](https://img.shields.io/npm/dt/netlicensing-client)](https://www.npmjs.com/package/netlicensing-client)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/netlicensing-client/badge)](https://www.jsdelivr.com/package/npm/netlicensing-client)
[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/Labs64/NetLicensingClient-javascript/blob/master/LICENSE)
[![📖 Documentation](https://img.shields.io/badge/📖%20Documentation-Wiki-AB6543.svg)](https://netlicensing.io/wiki/restful-api)
[![NetLicensing @ LinkedIn](https://img.shields.io/badge/NetLicensing-0077B5.svg?logo=LinkedIn)](https://www.linkedin.com/showcase/netlicensing)

JavaScript wrapper for Labs64 NetLicensing [RESTful API](https://netlicensing.io/wiki/restful-api)

Visit Labs64 NetLicensing at https://netlicensing.io

## How to Use

NetLicensing JavaScript Client was designed to work both in the browser and in Node.js.

In order to use NetLicensing JavaScript Client, you must include the compiled and minified JavaScript file in your project. There are multiple options for including these pre-compiled files, also known as a distribution, in your website or application.

### Using from a CDN

A CDN (Content Delivery Network) is the fastest way to get up and running with NetLicensing JavaScript Client.
Simply include the following lines of code in the `<head>` section of your page using latest [released version](https://github.com/Labs64/NetLicensingClient-javascript/releases):
```html
<script src="https://cdn.jsdelivr.net/gh/Labs64/NetLicensingclient-javascript@x.y.z/dist/netlicensing-client.min.js"></script>
```

### Installing with Node.js / npm

NetLicensing JavaScript Client is available on [npmjs](https://www.npmjs.com/package/netlicensing-client). Add the following to your `package.json` file and then run `npm install`:
```json
"dependencies": {
    "netlicensing-client": "x.y.z"
}
```

or execute following command in your Node.js environment:

```bash
$ npm install netlicensing-client
```

### Manual installation

We strongly recommend that you use either a CDN or a package manager like npm. This will make it easier for you to deploy your project in different environments, and easily update NetLicensing JavaScript Client when new versions are released. Nonetheless, if you prefer to integrate NetLicensing into your project manually, you can [download the release of your choice](https://github.com/Labs64/NetLicensingClient-javascript/releases) from GitHub and copy the files from the `dist` directory into your project.

Include the compiled files in your page:
```html
<script src="netlicensing-client/dist/netlicensing-client.min.js"></script>
```

Check out project [wiki](https://github.com/Labs64/NetLicensingClient-javascript/wiki) pages for detailed usage instructions.

## Online Demo

Demo web application for this library can be found [here](http://io.labs64.com/NetLicensingClient-javascript/client-demo.html) as well as [source code](https://github.com/Labs64/NetLicensingClient-javascript/tree/master/docs).

## Development

Useful commands:
- ```npm run dev``` - build and track all changes to your resources
- ```npm run test```- run unit tests
- ```npm run lint``` - syntax check

Here is a Docker-based local development environment prepared, which provides a very flexible and extensible way of developing Node.js applications.

### System Requirements
To be able to build this library you have to meet the following requirements:
* [docker](https://www.docker.com)
To be able to build this NetLicensing Client you have to meet the following requirements:
* Node.js >= 8.x
* npm >= 6.x

### Develop with Docker

1. Clone repository
```bash
$ git clone https://github.com/Labs64/NetLicensingClient-javascript.git
```

2. Prepare docker image
```bash
$ docker build -t labs64/nodejs .
```

3. Start local development environment
```bash
$ docker run -v $(pwd):/opt/NetLicensingClient-javascript -i -t labs64/nodejs /bin/bash
```

4. Configure git using your eMail and Username
```bash
$ git config --global user.email "eMail"
$ git config --global user.name "User Name"
```

## How to Contribute

Everyone is welcome to contribute to this project!
Once you're done with your changes send a pull request and check [CI Status](https://github.com/Labs64/NetLicensingClient-javascript/actions?query=workflow%3A%22NetLicensing+Client+CI%22).
Thanks!

## Bugs and Feedback

For bugs, questions and discussions please use the [GitHub Issues](https://github.com/Labs64/NetLicensingClient-javascript/issues).

## License

This boilerplate is open-sourced software licensed under the [Apache License Version 2.0](LICENSE).

---

Visit Labs64 NetLicensing at https://netlicensing.io
