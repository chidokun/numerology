import { processBirthday } from './birthday';
import { processName } from './name';
import { getRulingNumber } from './number';
import { getPeakAges, getPeakYears, getPyramids } from './pyramids';

/**
 * Calculate numerology
 * @param {string} name The name
 * @param {string} birthday Birthday string with format dd-MM-yyyy
 */
export const getNumerology = (name, birthday) => {
    let numerology = {};

    numerology.name = processName(name);
    numerology.birthday = processBirthday(birthday);
    numerology.rulingNumber = getRulingNumber(numerology.birthday.numStr);

    const { day, month, year } = numerology.birthday;
    numerology.pyramids = {};
    numerology.pyramids.pyramids = getPyramids(day, month, year);
    numerology.pyramids.peakAges = getPeakAges(numerology.rulingNumber);
    numerology.pyramids.peakYears = getPeakYears(
        year,
        numerology.pyramids.peakAges
    );

    return numerology;
};
