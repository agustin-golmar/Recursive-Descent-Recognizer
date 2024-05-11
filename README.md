[![✗](https://img.shields.io/badge/Release-v0.1.0-ffb600.svg?style=for-the-badge)](https://github.com/agustin-golmar/Recursive-Descent-Recognizer/releases)

[![✗](https://github.com/agustin-golmar/Recursive-Descent-Recognizer/actions/workflows/pipeline.yaml/badge.svg?branch=production)](https://github.com/agustin-golmar/Recursive-Descent-Recognizer/actions/workflows/pipeline.yaml)

# Recursive-Descent-Recognizer

A hand-crafted recursive descent recognizer in TypeScript.

* [Requirements](#requirements)
* [CI/CD](#cicd)
* [Install](#install)
* [Build](#build)
* [Start](#start)
* [Lint](#lint)

## Requirements

The application requires the following dependencies:

* [Node.js v20.13.0](https://nodejs.org/en/)

## CI/CD

To trigger an automatic integration on every push or PR (_Pull Request_), you must activate _GitHub Actions_ in the _Settings_ tab. Use the following configuration:

|Key|Value|
|-|-|
|Actions permissions|Allow all actions and reusable workflows|
|Artifact and log retention|`30 days`|
|Fork pull request workflows from outside collaborators|Require approval for all outside collaborators|
|Workflow permissions|Read repository contents and packages permissions|
|Allow GitHub Actions to create and approve pull requests|`false`|

After integration is done, change the badges of this `README.md` to point to the new repository.

## Install

```bash
nvm install 20.13.0
nvm use 20.13.0
npm install
```

## Build

```bash
npm run build
```

## Start

Using bash:

```bash
chmod u+x src/main/bash/start.sh
echo A string to test. | npm run start:bash
```

Using batch:

```powershell
echo A string to test. | npm run start:batch
```

## Lint

```bash
npm run lint:fix
```
