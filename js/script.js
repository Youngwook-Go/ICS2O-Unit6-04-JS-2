// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-JS-2/sw.js", {
    scope: "/ICS2O-Unit6-04-JS-2/",
  })
}

// function description

function pageLoad() {
  const params = new URLSearchParams(document.location.search)

  const celsiusInput = params.get("c")
  console.log(celsiusInput)

  const celsius = celsiusInput
  const kelvin = (celsiusInput * 1) + 273.15
  const fahrenheit = (celsiusInput * 1.8) + 32

  document.getElementById("answer").innerHTML =
    "celsius temperature is : " + 
    celsius +
    " °C<br>kelvin temperature is : " +
    kelvin +
    " °K<br>fahrenheit temperature is : " +
    fahrenheit +
    " F"
}