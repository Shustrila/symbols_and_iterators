import Team from '../src/js/Team';

const arrTeam = [
  {
    name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
  },
  {
    name: 'Мечник', type: 'Swordsman', health: 80, level: 1, attack: 35, defence: 25,
  },
];

describe('TESTS: Team', () => {
  test('iterates through the iterator', () => {
    const team = new Team(arrTeam);
    const arr = [];

    for (const i of team) {
      arr.push(i);
    }

    expect(arr).toEqual(arrTeam);
  });
});
