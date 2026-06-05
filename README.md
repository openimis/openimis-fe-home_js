# openIMIS Frontend Home reference module
This repository holds the files of the openIMIS Frontend Home reference module.

> NOTE: This branch contains development version of this module based on Vite. Please use the `release/26.04` branch if you intend to fix issues via Pull Requests for the [current release](https://openimis.atlassian.net/wiki/spaces/OP/pages/4653678593/Sources+Release+2026-04) of openIMIS. The migration to vite is scheduled to conclude by end of June 2026.

It is dedicated to be deployed as a module of [openimis-fe_js](https://github.com/openimis/openimis-fe_js).

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/openimis/openimis-fe-home_js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/openimis/openimis-fe-home_js/alerts/)

## Other Contributions

- `core.Router`: registering the `home` route in openIMIS client-side router.

## Available Contribution Points

- `home.HomePage.Container`: Use to extend the container of the homepage completely (default: display `home.HomePage.Blocks`)
- `home.HomePage.Blocks`: Blocks displayed on the homepage. The current `user` is passed to each contribution. An example of block can be found on the [Claim management module](https://github.com/openimis/openimis-fe-claim_js)
- `home.HomePage.customDashboard`: A contribution key that enables rendering a custom dashboard as the homepage. To activate this, a component must be provided with the `home.HomePage.customDashboard` contribution key, and the __HomePage.enableCustomDashboard__ configuration must be set to __true__ in the database.

## Configurations Options

- `HomePageContainer.showHomeMessage`: a boolean configuration flag that determines whether or not a special message will be displayed on the home page. If set to true, the application will fetch and display HTML content based on the URL specified in **HomePageContainer.homeMessageURL**. By default, this is set to false. It means that no additional message will be displayed on the home page.
- `HomePageContainer.homeMessageURL`: a string configuration that specifies the URL from which to fetch the HTML payload for display on the home page. By default, this is set to an empty string (""), meaning no URL is specified. This URL is used only when **HomePageContainer.showHomeMessage** is set to true.
- `HomePageContainer.showHealthFacilityMessage`: boolean to show HF status information. It shows days to the end of the contract of a HF assigned to a current user. Default false.
- `HomePage.enableCustomDashboard`: a boolean configuration flag that exposes the `home.HomePage.customDashboard` contribution key. This key allows overriding the default homepage to render a custom dashboard. **NOTE**: The custom page will not be rendered unless a component is provided with the `home.HomePage.customDashboard` contribution key.
