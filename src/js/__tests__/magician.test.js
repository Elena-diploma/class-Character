import Magician from '../magician';
import Character from "../app";

test('Наследуется от Character', () => {
    expect(new Character('Lena', 'Magician')).toBeInstanceOf(Character);
});

test('Создание нового персонажа Magician', () => {
    const received = new Magician('Ann', 'Magician');
    const expected = {
        name: 'Ann',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(received).toEqual(expected);
});