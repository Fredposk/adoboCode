const countries = require('./countries');

test('When find is passed an empty string, it returns an empty array', () => {
    expect(countries.find('')).toHaveLength(0);
});

test('The array that it returns contains no more than four matches', () => {
    expect(countries.find('a')).not.toHaveLength(5);
});

test('The search is case insensitive', () => {
    expect(countries.find('BRAZIL')).toEqual(['Brazil']);
});

test('If there are no matching countries, an empty array is returned', () => {
    expect(countries.find('12345')).toHaveLength(0);
});
