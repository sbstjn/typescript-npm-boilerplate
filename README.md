# TypeScript NPM Boilerplate

[![npm](https://img.shields.io/npm/v/typescript-npm-boilerplate.svg)](https://www.npmjs.com/package/typescript-npm-boilerplate)
[![CircleCI](https://img.shields.io/circleci/project/github/sbstjn/typescript-npm-boilerplate/master.svg)](https://circleci.com/gh/sbstjn/typescript-npm-boilerplate)
[![license](https://img.shields.io/github/license/sbstjn/typescript-npm-boilerplate.svg)](https://github.com/sbstjn/typescript-npm-boilerplate/blob/master/LICENSE.md)
[![Coveralls](https://img.shields.io/coveralls/sbstjn/typescript-npm-boilerplate.svg)](https://coveralls.io/github/sbstjn/typescript-npm-boilerplate)

A minimal boilerplate to write NPM modules in TypeScript. The TS code is compiled to JavaScript and published to NPM using CircleCI and GitHub Releases.

## Features

- [TypeScript](tsconfig.json) with [linting](tslint.json)
- [Tests with Jest](test)
- Coverage reports with [Coveralls](https://coveralls.io)
- Test and build with [CircleCI](circle.yml)
- Publish with GitHub [Releases](Releases)

## Usage

Fork this repository, download it, or clone it and add your custom files and configurations.

More to come …

### NPM Tasks

- **test** - Run jest
- **test:cover** - Run jest and create coverage report
- **coveralls** - Publish coverage report to Coveralls
- **lint** - Run tslint
- **build** - Compile to JavaScript

## Configuration

### CircleCI

You need to configure two environment variables in CircleCI for publishing and coverage reports. First set `NPM_TOKEN` to a NPM token that allows publishing modules and configure the `COVERALLS_REPO_TOKEN` variable to submit coverage reports for your Coveralls project.

## License

Feel free to use the code, it's released using the [MIT license](LICENSE.md).

## Contribution

You are welcome to contribute to this project! 😘 

To make sure you have a pleasant experience, please read the [code of conduct](CODE_OF_CONDUCT.md). It outlines core values and beliefs and will make working together a happier experience.
