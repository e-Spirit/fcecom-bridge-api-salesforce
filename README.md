# FirstSpirit Connect for Commerce - Salesforce Commerce Cloud Bridge

## Overview

### Connect for Commerce Bridge API

The bridge API serves as a REST interface which is able to fetch content, product and category information from any shop backend and to display them in reports in the FirstSpirit ContentCreator.

In order to connect the bridge API with a given shop backend a bridge is needed. It acts as a microservice between the shop backend and FirstSpirit. Further information about how to implement and use a bridge can be found in the official [documentation](https://docs.e-spirit.com/ecom/fsconnect-com/FirstSpirit_Connect_for_Commerce_Documentation_EN.html).

For more information about FirstSpirit or Connect for Commerce please use [this contact form](https://www.e-spirit.com/en/contact-us/) to get in touch.

### Salesforce Commerce Cloud

This project implements the bridge API to connect FirstSpirit and the Salesforce Commerce Cloud e-commerce platform.

For more information about Salesforce Commerce Cloud visit [the Salesforce commerce website](https://www.salesforce.com/).
Lean more about their API [here](https://documentation.b2c.commercecloud.salesforce.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FOCAPI%2Fcurrent%2Fusage%2FOpenCommerceAPI.html).


## Prerequisites
- Server running node 14 or later
- Salesforce Commerce Cloud instance
- Access to the [Salesforce OCAPI](https://documentation.b2c.commercecloud.salesforce.com/DOC2/index.jsp?topic=%2Fcom.demandware.dochelp%2FOCAPI%2Fcurrent%2Fusage%2FOpenCommerceAPI.html)

## Getting Started

### Important Notice
Due to OCAPI API restrictions, the following endpoints are not implemented in the bridge:

- POST /contentpages
- DELETE /contentpages/{contentId}
- PUT /contentpages/{contentId}
- GET /lookup-url
- GET /storefront-url

### Configuration
The configuration is done by copying the `.env.template` file in the root directory to a `.env` file and editing it.

| Param                   | Description                                                                                                      |
|-------------------------|------------------------------------------------------------------------------------------------------------------|
| PORT                    | The port on which the bridge is started.                                                                         |
| BRIDGE_AUTH_USERNAME    | The username to access the bridge's API.                                                                         |
| BRIDGE_AUTH_PASSWORD    | The password to access the bridge's API.                                                                         |
| LOG_LEVEL               | The log level to be used within the Logger and the commons (for possible log levels see [link](https://github.com/e-Spirit/fcecom-bridge-commons/blob/main/README.md)) |
| CONN_MODE               | Either HTTP or HTTPS.                                                                                            |
| SSL_CERT                | Path to the certificate file to use when using HTTPS.                                                            |
| SSL_KEY                 | Path to the private key file to use when using HTTPS.                                                            |
| OAUTH_URL               | The Url where the Oauth token can be retrieved from Salesforce Commerce                                          |
| BASE_URL                | The Base URL of the Salesforce Commerce Server (the URL up to the site part)                                     |
| STOREFRONT              | The Id of the Salesforce Site as referred in the URL                                                             |
| OCAPI_VERSION           | The version of the OCAPI to be used by the bridge                                                                |
| CLIENT_ID               | The Username to authenticate to Salesforce Commerce Cloud                                                        |
| CLIENT_SECRET           | The Password to authenticate to Salesforce Commerce Cloud                                                        |
| BRIDGE_AUTH_USERNAME    | The Username used to identify to the Bridge (Basic Auth)                                                         |
| BRIDGE_AUTH_PASSWORD    | The Password used to identify to the Bridge (Basic Auth)                                                         |

#### Configure Language Mapping
For mapping FirstSpirit languages to Salesforce Commerce Cloud locales, this bridge uses a simple .json file found at 'src/resources/LanguageMap.json'.
To add to this map, simply use the FirstSpirit language abbreviations as keys and the Salesforce Commerce Cloud locales that the OCAPI uses as values.

If the key is not found, the locale in the OCAPI call is omitted and the default Salesforce Commerce Cloud language is returned.

### Run bridge
Before starting the bridge for the first time, you have to install its dependencies:
```
npm ci
```

To start the bridge run:

```
npm start
```

### Run bridge in development mode
To start the bridge and re-start it whenever a file changed:
```
npm run start:watch
```

### View the Swagger UI interface

Open http://localhost:3000/docs in your browser to display the bridge's interactive API documentation.

### Configure FirstSpirit Module
In order to enable the Connect for Commerce FirstSpirit Module to communicate with the bridge, you have to configure it. Please refer to [the documentation](https://docs.e-spirit.com/ecom/fsconnect-com/FirstSpirit_Connect_for_Commerce_Documentation_EN.html#install_pcomp) to learn how to achive this. 

## Legal Notices
The FirstSpirit Connect for Commerce Salesforce Commerce Cloud bridge is a product of [Crownpeak Technology GmbH](https://www.crownpeak.com), Dortmund, Germany. The FirstSpirit Connect for Commerce Salesforce Commerce Cloud bridge is subject to the Apache-2.0 license.

## Disclaimer
This document is provided for information purposes only. Crownpeak may change the contents hereof without notice. This document is not warranted to be error-free, nor subject to any other warranties or conditions, whether expressed orally or implied in law, including implied warranties and conditions of merchantability or fitness for a particular purpose. Crownpeak specifically disclaims any liability with respect to this document and no contractual obligations are formed either directly or indirectly by this document. The technologies, functionality, services, and processes described herein are subject to change without notice.