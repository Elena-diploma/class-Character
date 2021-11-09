import Bowman from '../bowman';
import Character from "../app";

test('Наследуется от Character', () => {
    expect(new Character('Lena', 'Bowman')).toBeInstanceOf(Character);
});


test('Создание нового персонажа Bowman', () => {
    const received = new Bowman('Bob', 'Bowman');
    const expected = {
        name: 'Bob',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(received).toEqual(expected);
});