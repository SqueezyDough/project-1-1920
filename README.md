# OBA Boekhappen (OBA Book Bites)

# Table of contents
* [Assignment](#Assignment)
* [Description](#Description)
* [Features](#Features)
* [Prototype](#Prototype)
* [API](#API)
* * [Data](#Data)
* * [Data Transfornation](#Data-Transformation)
* [Install](#Install)
* * [Clone repository](#Clone-repo)
* * [Usage](#Usage)
* [License](#License)

<a name="Assignment"></a>
# Assignment
I've been assigned to create a single page webapp that helps children from 9-12 years old with their paper. This prototype uses the OBA API to fetch and display books and media from the OBA.

<a name="Description"></a>
# Description
This webapp focusses on the ideation phase for crating a paper. Based on a old dutch tradition known as koekhappen (cake bites), children can eat books of their liking. When they're done, they can go to a results page. This page shows which topics are likely to be preferred by the user based on what they have eaten. The best match is displayed on top of the page and the worst match is displayed at the bottom.

<a name="Prototype"></a>
# Prototype
## Book bites
![](https://github.com/SqueezyDough/project-1-1920/blob/master/github/carousel.png?)		
## Recommendations		
![](https://github.com/SqueezyDough/project-1-1920/blob/master/github/res1.png?)		
![](https://github.com/SqueezyDough/project-1-1920/blob/master/github/res2.png?)		


<a name="Features"></a>
# Features
- [X] Books carousel
- [X] Eat books
- [X] Display preferences
- [X] Save fetched books in local storage
- [X] Save choices in local storage
- [X] Remove results
- [ ] Undo picked book
- [ ] Show picked books on carousel page
- [ ] Remove duplicates in carousel
- [ ] Combine related categories
- [ ] Make the site compatible with other browser (chrome-only)

<a name="API"></a>
# API

<a name="Data"></a>
## Data
I've selected a few categories that might be interesting for the target audience.

* Voetbal (Soccer)
* Politie (Police)
* Brandweer (Fire brigade)
* Planeet (Planets)
* Millieu (Environment)
* Dieren (Animals)
* Dinosaurus (Dino's!)
* Pesten (Bullying)
* Smartphone (Smartphone)
* Social media (Social media)
* Muziek (Music)
* Arme landen (Poor countries)
* Derde wereld (Third world countries)

<a name="Data-Transformation"></a>
## Data Transformation
I've sorted the data by topic.

<a name="Install"></a>
# Install
<a name="Clone-repo"></a>
## Clone repository
`git clone https://github.com/SqueezyDough/project-1-1920.git`

<a name="Usage"></a>
## Usage
`Run index.html with live server`

<a name="License"></a>
# License
[MIT](https://github.com/SqueezyDough/frontend-applications/blob/master/LICENSE) @ SqueezyDough

# Breek je OBA
- [X] Disable images
- [ ] Disable mouse/trackpad
- [X] Disable custom fonts
- [ ] Disable JS
- [X] Disable colors / enable color blind mode
- [ ] Disable local storage / cookies
- [ ] Enable internet throttling

### Notes
* No JS breaks everything
* Can't tab through carousel
* Local storage isn't needed for creating the cards but is needed for saving the choices
* Site does work when throttled but takes a long time to load without giving feedback to the user

## Devices
### Macbook Pro (2017, macOS Catalina 10.15)
#### Chrome version Chrome 80
Works as intended

#### Firefox version
Works as intended

#### Safari version 13.1
* Backface-visibility bug. Card text is visible on front
* Minor positioning issues

### Microsoft surface (Windows RT 8.1)
#### Internet explorer version 11.0
Broke everything

* No browser support for css variables
* No browser support for rotate transforms
* No browser support for fetch
* No browser support for imports

### iPhone 8 (iOS 13.4)
#### Safari iOS version 13.1, Firefox version 23.0 iOS, Chrome version 80 iOS
* Horizontal scrollbar
* Scaling issue
* No event to flip card
* Card position issue

## Screen reader
* Je kunt de boeken niet van elkaar onderscheiden. Boeken moeten worden genummerd.
* Als de beschrijven van de boeken lang zijn zal de screenreader niet de Klaar knop voorlezen.
* Screenreader zal ook boeken voorlezen die je al hebt opgegeten.
