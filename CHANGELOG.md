## [2.5.8](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.5.6...v2.5.8) (2025-08-22)

### Changes
* Updated fcecom-bridge-commons to v2.4.3.
* Added fix to return empty result when a request was executed without a query for the content report.

## [2.5.6](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.5.5...v2.5.6) (2025-03-03)

### Changes
* Updated old `contentpages` endpoints to `content` in the `README.md` file.

## [2.5.5](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.5.4...v2.5.5) (2024-11-29)

### Changes
* Updated fcecom-bridge-commons to v2.4.2.
* Added missing x-total header to /categories/tree and ids endpoints.

## [2.5.4](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.5.3...v2.5.4) (2024-10-16)

### Changes
* Updated fcecom-bridge-commons to v2.4.1.

## [2.5.3](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.5.2...v2.5.3) (2024-09-04)

### Changes
* Fixed security vulnerabilities located in axios (CVE-2024-39338), braces (CVE-2024-4068) and micromatch (CVE-2024-4067) by updating the relevant dependencies.
* Updated fcecom-bridge-commons to v2.4.0.

## [2.5.2](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.5.1...v2.5.2) (2024-07-31)

### Changes
* Adjust responses in case of an error.
* Error responses are now JSON instead of plain text.
* Updated fcecom-bridge-commons to v2.3.1.

## [2.5.1](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.5.0...v2.5.1) (2024-07-10)

### Changes
* Fixed an issue where including the root category in the X-Total header caused the calculated total number of categories to be returned one category larger than the list in the API response.

## [2.5.0](https://github.com/e-Spirit/fcecom-bridge-api-salesforce/compare/v2.4.1...v2.5.0) (2024-06-20)

### Changes
* Added a search by category name to the category report.
* Updated version of `fcecom-bridge-commons` dependency.

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
