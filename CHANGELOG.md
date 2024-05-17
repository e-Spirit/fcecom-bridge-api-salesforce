## [2.4.1](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.4.0...v2.4.1) (2024-05-17)

### Changes
* Fixed security vulnerabilities in used node modules.
* Updated version of `fcecom-bridge-commons` dependency.

## [2.4.0](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.3.0...v2.4.0) (2024-04-18)

### Changes
* Fixed security vulnerabilities located in express (CVE-2024-29041) by updating the relevant dependencies.
* Update version of `fcecom-bridge-commons` dependency.
* Improved the error handling for requests failing to have a `query` parameter.

### UPDATE NOTICE
* Please update the fcecom-bridge-commons npm module in your bridge implementations to the latest version.
* The query parameter is and was always mandatory for the getContent endpoint of the Salesforce Commerce Cloud-Bridge.
  Not providing it led wrongly to "Internal Server Error" responses.
  With this bugfix, a better fitting response is sent, containing a status code 400 with the appropriate error message.
  If you have developed against a response with status code 500, you will have to change your code, so it can handle the same error with a status code 400.

## [2.3.0](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.2.3...v2.3.0) (2024-01-19)

### Changes
* Added template for multi-tenant support with Docker Compose.

## [2.2.3](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.2.2...v2.2.3) (2023-12-21)

### Changes
* Removed unnecessary data from test files.

## [2.2.2](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.2.1...v2.2.2) (2023-12-20)

### Changes
* Update version of `fcecom-bridge-commons` dependency.

## [2.2.1](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.2.0...v2.2.1) (2023-11-27)

### Changes
* Update version of `fcecom-bridge-commons` dependency.

## [2.2.0](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.1.0...v2.2.0) (2023-10-25)

### Changes
* Fixed a security vulnerability located in babel/traverse (CVE-2023-45133) by updating the relevant dependencies.

## [2.1.0](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.0.0...v2.1.0) (2023-10-06)

### Changes
* Optimized `Dockerfile` and `.dockerignore` to achieve shorter build times.

Information on previous releases can be found in the [Release Notes](https://docs.e-spirit.com/ecom/fsconnect-com/FirstSpirit_Connect_for_Commerce_Releasenotes_EN.html).
