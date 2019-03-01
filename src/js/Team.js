export default class Team {
  constructor(arr) {
    this._characters = arr;
  }

  [Symbol.iterator]() {
    let counter = 0;

    return {
      next: () => ({
        value: this._characters[counter++],
        done: !(counter <= this._characters.length),
      }),
    };
  }
}
