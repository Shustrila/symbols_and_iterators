import Team from '../src/js/Team';

const team = new Team();
team.add('Лучник', 'Bowman', 50, 1, 40, 10);
team.add('Мечник', 'Swordsman', 80, 1, 35, 25);

describe('TESTS: Team', () => {
  test('1', () => {
    const character = team.characters[Symbol.iterator]();

    expect(character.next().value).toEqual(team.characters[0]);
  });


  test('2', () => {
    const character = team.characters[Symbol.iterator]();

    character.next();
    expect(character.next().value).toEqual(team.characters[1]);
  });
});
