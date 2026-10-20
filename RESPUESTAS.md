¿Qué archivo contiene la regla de cálculo?
El archivo precios.ts

¿Qué archivo define la ruta HTTP?
El archivo que define las rutas es el app.ts

¿En qué se diferencian sus responsabilidades?
Precios.ts maneja la logica y app.ts las rutas http

Al leer la prueba que contiene calcularPrecioFinal(1000, 150), ¿qué comportamiento exige?
Exige que lance un error tipo langeError si el descuento supera el 100%

¿Qué hace realmente el código?
Lo que realmente hace es que realiza la resta mateamtica sin validar y devuelve un numero negativo

¿Qué total devuelve actualmente un descuento del 150 % sobre $1.000?
Esto devuelve -500, numero negativo

¿Por qué ese resultado no cumple la regla de negocio?
Porque el precio final justamente no puede ser un nro negativo ni un descuento puede pasar el 100%

¿Por qué la prueba falla si la función terminó de ejecutarse?
Porque termino con exito devolviendo -500 en vez de mandar el langeError que espera el test

¿La validación actual rechaza NaN como precio?
No porque sin validaciones previas digamos la cuenta matematica devuelve NaN

¿Por qué la comprobación de la respuesta HTTP 400 es de integración y no solamente una prueba unitaria?
Porque comprueba como interactua juntos en la ruta express y el servicio de calculo

¿Por qué conviene utilizar tanto typecheck como npm test?
Poruqe typecheck valida las consistencias de tipos en compilacion y npm test valida el logica de negocio en ejecucion

¿Qué diferencia hay entre comprobar manualmente una respuesta y ejecutar una prueba automatizada?
La diferencia q hay en comprobar manualmente es lento y automatizada rapida y repetible

¿Cuál fue la causa de la primera prueba fallida?
La primera prueba fallida era que la funcion no tenia validaciones de limites digamos

¿Por qué es útil incluir casos inválidos además de los casos habituales?
Porque asi el sistema pueda manejar los errores correctamente o datos invalidos

¿Qué parte del sistema comprueba tests/precios.test.ts y qué partes comprueba tests/api.test.ts?
    precio.test.ts comprueba el servicio aislado esto signigica que prueba la funcion sin nada externo y api.test.ts comprueba las respuestas http  y endpoints 

¿Qué ventajas ofrece ejecutar las pruebas después de cada modificación?
Las ventajas que nos da es que detecta rapidamente si un nuevo cambio rompio algo que antes funcionaba

¿Por qué una API que devuelve una respuesta HTTP 200 puede contener errores de negocio?
Porque el 200 solo indica que el servidor proceso la peticion web, no la logica o que la cuenta q se hizo este bien

¿Qué diferencia hay entre una prueba unitaria y una de integración?
La unitaria comprueba una funcion o modulo aislado y la de integracion prueba varios componentes colaborando entre si

¿Por qué toThrow recibe una función en lugar del resultado de ejecutarla?
Para que vitest pueda ejecutarla internamente en lugar de q el error interrumpa la prueba

¿Qué diferencia existe entre npm test y npm run typecheck?
npm run typecheck revisa errores de sintaxis y tipos estaticos y npm test ejecuta los test de comportamientos con datos reales

¿Qué aporta GitHub Actions al trabajo colaborativo?
Automatiza la  ejecucion de pruebas y verificacion de tipos en la nube cada vez que alguien sube algun cambio

Registro de resultados

| Comprobación | Resultado | Observación |
| --- | --- | --- |
| Respuesta de `GET /healthy` | Exitosa | Devolvió {"estado":"ok"} con código HTTP 200 al hacer la petición en la API |
| Primera ejecución de `npm test` | 4 pasaron, 1 falló | Falló la prueba que esperaba RangeError para un descuento superior al 100 % |
| Corrección del servicio | Exitosa | Se incorporaron validaciones en src/services/precios.ts utilizando Number.isFinite y rangos de 0 a 100 |
| Nuevas pruebas unitarias | Exitosa | Se agregaron las pruebas para 100 % de descuento, precio negativo, descuento negativo y NaN |
| Prueba de integración HTTP 400 | Exitosa | La api respondio con codigo 400 y el objeto con la propiedad error ante peticiones con datos invalidos |
| Verificación `npm run typecheck` | Sin errores | El compilador de TypeScript validio correctamente la consistencia de tipos en todo el proyecto |