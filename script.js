/***************************************
        Ejercicio Validar Fechas
****************************************/

// Declaro array que contiene la configuración de los meses. 
// Declarando cuál es el número entero que lo representa, su nombre y la cantidad de días que contiene ese mes.
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
];

/*
 * Función que valida un fecha y devuelve el nombre del mes ingresado en caso de ser correcta.
 * @params dia {integer}, mes {integer}, ano {integer}
 * @return {string} Nombre de Mes.
 */
function validateDate(dia, mes, ano){
    //Declaro array vacío para almacenar todos los errores de validación que se detecten.
    let errors = [];

    //Valida si se ingresaron los 3 parámetros requeridos
    if(dia === undefined || mes === undefined || ano === undefined)
        errors.push('Debes ingresar dia, mes y año.');

    /*
    Valida si el año es valido o no. Para cumplir considerarse válido debe cumplir las siguientes condiciones:
    - Debe ser un número entero.
    - Debe ser mayor a 0.
    - Debe tener 4 dígitos.
    */
    if (typeof ano !== 'number' || ano <= 0 || !Number.isInteger(ano) || ano.toString().length !== 4)
        errors.push('El año debe ser un número entero, de 4 dígitos, mayor a 0.');

    /*
    Valida si el día es valido o no. Para cumplir considerarse válido debe cumplir las siguientes condiciones:
    - Debe ser un número entero.
    - Debe ser mayor a 0.
    - Debe tener al menos 2 dígitos.
    */
    if (typeof dia !== 'number' || dia <= 0 || !Number.isInteger(dia) || dia.toString().length > 2)
        errors.push('El día debe ser un número entero, de hasta dos dígitos y debe ser  mayor a 0.');
    
    /*
    Valida si el mes es valido o no. Para cumplir considerarse válido debe cumplir las siguientes condiciones:
    - Debe ser un número entero.
    - Debe ser mayor o igual a 1.
    - Debe ser menor o igual a 12.
    */
    if (typeof mes !== 'number' || mes <= 0 || mes > 12 || !Number.isInteger(mes))
        errors.push('El mes debe ser un número entero del 1 al 12.');
    
    // Si hay errores, toma todos y los convierte en una string para notificar al usuario todos los errores detectados y termina la ejecución con error.
    if (errors.length > 0)
        throw new Error(errors.join(' '));

    // Declaro variable que contendrá el output de la función.
    let output;

    // Iteración "for of" que recorre el mesesArray y refiere al elemento iterado en una variable "m" declarada antes del "of" ).
    for(let m of mesesArray){
        
        //Condicional If que verifica si el mes coincide con el atributo "numero" del objeto iterado
        if(m.numero === mes){
            
            //Condicional IF que verifica si el día es menor o igual a m.dias
            if(dia <= m.dias) {

                //Si cumple condición, almaceno el nombre del mes en la variable output.
                output.nombre = m.nombre;
            
            } else {
                
                //Si no cumple condición, almaceno string con mensaje de error en variable errors. Ahora deja de ser un array y se convierte en string.
                errors = `${m.nombre} tiene ${m.dias} días`;
            
            }
        }
    }
    
    // Si errors tiene algún valor cargado devuelve el mensaje de error al usuario y termina la ejecución con error.
    if(errors.length > 0)
        throw new Error(errors);
    
    // Termina la ejecución e imprime el nombre del Mes en la consola.
    return output.nombre;
}