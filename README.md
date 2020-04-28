<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/github_username/repo">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Lator Gator</h3>

  <p align="center">
    An Open Source Slack Eventbot And More! 
    <br />
    <a href="https://github.com/faykc/Lator-Gator"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/faykc/Lator-Gator">View Demo</a>
    ·
    <a href="https://github.com/faykc/Lator-Gator/issues">Report Bug</a>
    ·
    <a href="https://github.com/faykc/Lator-Gator/issues">Request Feature</a>
  </p>
</p>

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Slack Developer Setup](#slack-developer-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

Lator Gator gives you the foundations of a working bot, allowing you to schedule events, RSVP download calendar events and see who is showing up lator, all with the press of one button!


### Built With

* [Node.js](https://nodejs.org/en/)
* [Slack Bolt Framework](https://github.com/slackapi/bolt)
* [Slack Web API](https://api.slack.com/web)
* [Slack Events API](https://api.slack.com/events)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
* npm
```sh
npm install npm@latest -g
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/faykc/Lator-Gator.git
```
2. Install NPM packages
```sh
npm install
```

### Slack Developer Setup
The Slack Bot must have the following permissions in your API settings, if it is being used in public channels:
1. app_mentions:read
2. channels:history
3. chat:write
4. commands
5. files:write

In addition to this, Event Subscriptions must be turned on, with atleast the following scopes:
1. app_home_opened
2. app_mention
3. message.channels
4. message.mpim

Furthermore, navigate to Slash Commands and add the following command, with your appropriate request URL:
1. /lator


<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Insert description of feature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Muhammad Fayk Chaudhry - [@Fayk_C](https://twitter.com/fayk_c?lang=en) - faykc123@gmail.com


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Thanks othneildrew for the README template!](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png



