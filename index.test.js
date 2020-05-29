const { twoSum } = require('./index');

test('INPUT:  [2, 7, 11, 15], 9. EXPECTED: [0, 1]', () => {
    const nums = [2, 7, 11, 15]
    const target = 9;
    const expected = [0, 1];

    expect(String(twoSum(nums, target))).toEqual(String(expected));
});



test('INPUT:  [2, 11, 7, 15], 9. EXPECTED: [0, 2]', () => {
    const nums = [2, 11, 7, 15]
    const target = 9;
    const expected = [0, 2];

    expect(String(twoSum(nums, target))).toEqual(String(expected));
});

test('INPUT:  [4, 11, 6, 3], 7. EXPECTED: [0, 3]', () => {
    const nums = [4, 11, 7, 3];
    const target = 7;
    const expected = [0, 3];

    expect(String(twoSum(nums, target))).toEqual(String(expected));
});


test('INPUT:  [3, 3], 6. EXPECTED: [0, 1]', () => {
    const nums = [3, 3];
    const target = 6;
    const expected = [0, 1];

    expect(String(twoSum(nums, target))).toEqual(String(expected));
});


test('INPUT:  [3, 2, 3], 6. EXPECTED: [0, 2]', () => {
    const nums = [3, 2, 3];
    const target = 6;
    const expected = [0, 2];

    expect(String(twoSum(nums, target))).toEqual(String(expected));
});


test('INPUT:  [1, 2, 3], 5. EXPECTED: [1, 2]', () => {
    const nums = [1, 2, 3];
    const target = 5;
    const expected = [1, 2];

    expect(String(twoSum(nums, target))).toEqual(String(expected));
});


test('INPUT:  [0, 0], 0. EXPECTED: [0, 1]', () => {
    const nums = [0, 0];
    const target = 0;
    const expected = [0, 1];

    expect(String(twoSum(nums, target))).toEqual(String(expected));
});