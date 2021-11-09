import Character from '../app';

test('Наследуется от Character', () => {
    expect(new Character('Lena', 'Zombie')).toBeInstanceOf(Character);
});

test('Тип Character', () => {
    const received = typeof Character;
    const expected = 'function';
    expect(received).toBe(expected);
});

test('Ошибка в name', () => {
    const errName = { name: 'A', type: 'Bowman' };
    expect(() => {
        const nameE = new Character(errName);
        return nameE;
    }).toThrow();
});

test('Ошибка в type', () => {
    const errType = { name: 'Lena', type: 'Bow' };
    expect(() => {
        const typeE = new Character(errType);
        return typeE;
    }).toThrow();
});