let mesesArray = [
    {
        nombre: 'Enero',
        numero: 1,
        dias: 31
    },
    {
        nombre: 'Febrero',
        numero: 2,
        dias: 28
    },
    {
        nombre: 'Marzo',
        numero: 3,
        dias: 31
    },
    {
        nombre: 'Abril',
        numero: 4,
        dias: 30
    },
    {
        nombre: 'Mayo',
        numero: 5,
        dias: 30
    },
    {
        nombre: 'Junio',
        numero: 6,
        dias: 31
    },
    {
        nombre: 'Julio',
        numero: 7,
        dias: 30
    },
    {
        nombre: 'Agosto',
        numero: 8,
        dias: 31
    },
    {
        nombre: 'Septiembre',
        numero: 9,
        dias: 30
    },
    {
        nombre: 'Octubre',
        numero: 10,
        dias: 31
    },
    {
        nombre: 'Noviembre',
        numero: 11,
        dias: 30
    },
    {
        nombre: 'Diciembre',
        numero: 12,
        dias: 31
    }
]

function validateDate(dia, mes, ano){
    let errors = [];
    if(dia === undefined || mes === undefined || ano === undefined)
        errors.push('Debes ingresar dia, mes y año.');
    if (typeof ano !== 'number' || ano <= 0 || !Number.isInteger(ano) || ano.toString().length !== 4)
        errors.push('El año debe ser un número entero, de 4 dígitos, mayor a 0.');
    if (typeof dia !== 'number' || dia <= 0 || !Number.isInteger(dia) || dia.toString().length > 2)
        errors.push('El día debe ser un número entero, de hasta dos dígitos y debe ser  mayor a 0.');
    if (typeof mes !== 'number' || mes <= 0 || mes > 12 || !Number.isInteger(mes))
        errors.push('El mes debe ser un número entero del 1 al 12.');
    
    if (errors.length > 0)
        throw new Error(errors.join(' '));

    let output = {};
    for(let m of mesesArray){
        if(m.numero === mes){
            if(dia <= m.dias) {
                output.nombre = m.nombre;
            } else {
                errors = `${m.nombre} tiene ${m.dias} días`;
            }
        }
    }
    
    if(errors.length > 0)
        throw new Error(errors);
    
    return output.nombre;
}