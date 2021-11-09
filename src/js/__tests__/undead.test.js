import Undead from '../undead';
import Character from "../app";

test('Наследуется от Character', () => {
    expect(new Character('Lena', 'Undead')).toBeInstanceOf(Character);
});

test('Создание нового персонажа Undead', () => {
    const received = new Undead('Anni', 'Undead');
    const expected = {
        name: 'Anni',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(received).toEqual(expected);
});