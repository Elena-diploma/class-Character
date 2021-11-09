import Zombie from '../zombie';
import Character from "../app";

test('Наследуется от Character', () => {
    expect(new Character('Lena', 'Zombie')).toBeInstanceOf(Character);
});


test('Создание нового персонажа Zombie', () => {
    const received = new Zombie('Lena', 'Zombie');
    const expected = {
        name: 'Lena',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(received).toEqual(expected);
});
