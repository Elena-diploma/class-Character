import Daemon from '../daemon';
import Character from "../app";

test('Наследуется от Character', () => {
    expect(new Character('Lena', 'Daemon')).toBeInstanceOf(Character);
});

test('Создание нового персонажа Daemon', () => {
    const received = new Daemon('Roman', 'Daemon');
    const expected = {
        name: 'Roman',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(received).toEqual(expected);
});