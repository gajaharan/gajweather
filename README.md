# Gaj 5 day weather forecast

## Live Version

You can checkout the live version of the app [here](http://www.gajaharan.com/gajweather/index.html).


## Installation

### Clone repository and install dependencies
You must have [nodejs](https://nodejs.org/en/) and [npm](npmjs.com). Run the following commands:

```
$ git clone https://github.com/gajaharan/gajweather.git
$ cd gajweather
$ npm install
$ bower install
```

## Build the app using gulp
```
    $ gulp build
```

## Run the standalone unit tests
```
    $ gulp unit-test
```

## Run the app using gulp. 
Using the following command. This will automatically open a new browers on your [localhost:8000](http://localhost:8000) address.
```
    $ gulp
```

## Reasoning behind the technologies:
I belive in modular component style of developing. I have used 
[AngularJS](angularjs.org) as my JavaScript framework. 
[Bootstrap](http://getbootstrap.com/) for my CSS framework. 
[Gulp](www.gulpjs.com) as my javascript task runner
[Karma](https://karma-runner.github.io/0.13/index.html) as my unit test runner.

AngularJS helps implementing an MVC approach and the componenents e.g. forecast componenet splits between the view (html) and controller and model (service). Also other components can be added e.g. current weather information.

Bootstrap is used to help with the design of the desktop and mobile version of the weather app. Also makes the website responsive.

Gulp to help automate task such run unit tests, minifying third party libraries and stylesheets and Start the web server.

Karma. I did not have time to full implement all tests units for controller, directive and service.

## Design Descision
For The desktop design I wanted the daily information for each day to be displayed vertically with minimal information. For future improvement I would like display more information on click e.g. wind speed, pressure, morning temp, evening temp, etc.

For mobile design I wanted to ideally show the daily information as small cards with today's weather as the main big card with subsequent days as smaller cards below.
