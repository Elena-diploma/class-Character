import Magician from '../magician';

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