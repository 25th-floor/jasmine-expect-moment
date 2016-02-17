'use strict';

require('./jasmine-to-string');
const jasmineMatchers = require('jasmine-matchers-loader');

const matchers = {
	toBeMoment         : require('./to-be-moment'),
	toBeMomentAfter    : require('./to-be-moment-after'),
	toBeMomentBefore   : require('./to-be-moment-before'),
	toBeSameMoment     : require('./to-be-same-moment'),
	toHaveMoment       : require('./to-have-moment'),
	toHaveMomentAfter  : require('./to-have-moment-after'),
	toHaveMomentBefore : require('./to-have-moment-before'),
};

jasmineMatchers.add(matchers);
module.exports = matchers;
