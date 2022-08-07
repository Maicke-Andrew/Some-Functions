const allFunc = require('../challenges.js')

test('testando se encode é uma função', () => {
    expect(typeof allFunc.encode).toBe('function')
})

test('testando se decode é uma função', () => {
    expect(typeof allFunc.decode).toBe('function')
})

test('testando as vogais dentro de encode', () => {
    expect(allFunc.encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
})

test('testando as vogais dentro de decode', () => {
    expect(allFunc.decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
})

test('testando as demais letras/numero para encode e decode', () => {
    expect(allFunc.encode('b c')).toBe('b c')
})

test('testando as demais letras/numero para encode e decode', () => {
    expect(allFunc.decode('6 7')).toBe('6 7')
})

test('testando se o parametro tem o mesmo tamanho que o resultado', () => {
    expect(allFunc.decode('6 7')).toHaveLength(3)
})