const arrayInAverageValue = (arr) =>
  arr.reduce((acc, current) => acc + current / arr.length, 0);

describe('test', () => {
  it('it test', () => {
    expect(arrayInAverageValue([70, 80])).toBe(75);
  });
});
