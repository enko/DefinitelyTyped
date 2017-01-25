import i18nisocountries = require('i18n-iso-countries');

// Type definitions for JavaScript i18n-iso-countries v1.8.0
// Project: https://github.com/michaelwittig/node-i18n-iso-countries
// Definitions by: Tim Schumacher <https://github.com/enko/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
function tests() {
	i18nisocountries.alpha2ToAlpha3('US');
	i18nisocountries.alpha2ToNumeric('US');
	i18nisocountries.alpha3ToAlpha2('USA');
	i18nisocountries.alpha3ToNumeric('USA');
	i18nisocountries.numericToAlpha2(840);
	i18nisocountries.numericToAlpha3(840);
	i18nisocountries.getAlpha2Codes();
	i18nisocountries.getAlpha3Codes();
	i18nisocountries.getNumericCodes()
	i18nisocountries.getName('US','en');
	i18nisocountries.getName(840,'en');
	i18nisocountries.getNames('en');
}
