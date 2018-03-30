# Beep Boop

#### _An application that will accept a number and return a range of numbers, replacing certain numbers with "Beep!", "Boop!", and "I'm sorry, Dave, I'm afraid I can't do that."_

#### By _**Matt Miller**_

## Description

_This app will accept a number input by the user and return a range of numbers from 0 to the input number with the following exceptions:_
  * _1. Numbers that contain a 0 are replaced with "Beep!"_
  * _2. Numbers that contain a 1 are replaced with "Boop!"_
  * _3. Numbers that are a multiple of three are replaced with "I'm sorry, Dave, I'm afraid I can't do that."_

  Where condition _3._ trumps conditions _1._ and _2._ and condition _2._ trumps condition _1._

  The app can be run as many times as the user likes with new numbers.

#### Specifications
  * _Program replaces 0 with "Beep!"_
    * _Ex Input: 0_
    * _Ex Output: "Beep!"_
  * _Program replaces 1 with "Boop!"_
    * _Ex Input: 1_
    * _Ex Output: "Boop!"_
  * _Program replaces 3 with "I'm sorry, Dave, I'm afraid I can't do that."_
    * _Ex Input: 3_
    * _Ex Output: "I'm sorry, Dave, I'm afraid I can't do that."_
  * _Program replaces all digits of numbers containing 0 with "Beep!"_
    * _Ex Input: 20_
    * _Ex Output: "Beep!_
  * _Program replaces all digits of numbers containing 1 with "Boop!"_
    * _Ex Input: 11_
    * _Ex Output: "Boop!"_
  * _Program replaces all multiples of 3 with "I'm sorry, Dave, I'm afraid I can't do that."_
    * _Ex Input: 6_
    * _Ex Output: "I'm sorry, Dave, I'm afraid I can't do that."_
  * _Program replaces all digits of numbers containing 1 (even if they contain a 0) with "Boop!"_
    * _Ex Input: 10_
    * _Ex Output: "Boop!"_
  * _Program replaces all multiples of 3 (even if they contain a 0 or 1) with "I'm sorry, Dave, I'm afraid I can't do that."_
    * _Ex Input: 102_
    * _Ex Output: "I'm sorry, Dave, I'm afraid I can't do that."_
  * _Program creates a range of numbers from 0 to the users number._
    * _Ex Input: 6_
    * _Ex Output: "0, 1, 2, 3, 4, 5, 6_
  * _Program applies appropriate condition to each number in the range._
    * _Ex Input: 6_
    * _Ex Output: "Beep!, Boop!, 2, I'm sorry, Dave, I'm afraid I can't do that., 4, 5, I'm sorry, Dave, I'm afraid I can't do that."_

## Setup/Installation Requirements

* Clone repository from https://github.com/mattfmiller/beep-boop
* Open app in browser

## Known Bugs

None

## Support and contact details

For support contact matt.f.miller@live.com

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

*N/A*

Copyright (c) 2018 **_Matt Miller_**
