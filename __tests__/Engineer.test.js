const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer ('alex', 15, 'email@email.com', 'alex')

    expect(engineer.name).toBe('alex');
    expect(engineer.id).toBe(expect.any(number);
    expect(engineer.email).toEqual('email@email.com');
    expect(engineer.github).toEqual('alex');
});
