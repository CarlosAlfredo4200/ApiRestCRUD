/**
 * Ejemplo de prueba unitaria
 */

describe("[APP] probando test", ()=>{
    test('Esto deberia retornar', () => { 
        const a = 4; 
        const b = 5; 
        const total = a + b;
        expect(total).toEqual(9); 
    })
})