import latinize from 'latinize';
import { reduceNumber22, reduceNumberRange } from './number';

let nameTable = (() => {
    let num = 1;
    let obj = {};
    for (let i = 0; i < 26; i++) {
        obj[(i + 10).toString(36)] = num;
        if (num == 9) {
            num = 1;
        } else {
            num++;
        }
    }
    return obj;
})();

console.log(nameTable);

let vowel = ['a', 'e', 'i', 'o', 'u', 'y'];

/**
 *
 * @param {string} name
 * @returns {string} normalized lower case latin-name contains only alphabet
 */
export const normalize = (name) =>
    latinize(name)
        .toLowerCase()
        .replace(/[^a-z]/gi, '');

/**
 *
 * @param {string} name
 * @returns {string} name contains only vowel
 */
export const getVowelString = (name) =>
    [...name].filter((e) => vowel.includes(e)).join('');

/**
 *
 * @param {string} name
 * @returns {string} name not contain vowel
 */
export const getNonVowelString = (name) =>
    [...name].filter((e) => !vowel.includes(e)).join('');

/**
 *
 * @param {string} name
 * @returns {}
 */
export const getNumberString = (name) =>
    name.replace(/[a-z]/g, (e) => `${nameTable[e]}` || e);

export const processName = (name) => {
    let result = {};
    result.original = name;
    result.normalized = normalize(name);
    result.completeNameNumStr = getNumberString(result.normalized);
    result.completeNameNumber = reduceNumber22(result.completeNameNumStr);
    result.vowelStr = getVowelString(result.normalized);
    result.vowelNumStr = getNumberString(result.vowelStr);
    result.soulUrgeNumber = reduceNumberRange(result.vowelNumStr, 1, 11);
    result.nonVowelStr = getNonVowelString(result.normalized);
    result.nonVowelNumStr = getNumberString(result.nonVowelStr);
    result.outerExpressionNumber = reduceNumber22(result.nonVowelNumStr);
    return result;
};
