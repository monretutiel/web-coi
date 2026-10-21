// Banco de preguntas — UT2: Modbus y programación Python industrial
// Fuente: banco_test_aules.xml · J. Monrabal Mateo · CFGS Automatización y Robótica Industrial

const TEMAS_COI_UT2 = [
  {
    id: "ra2_a",
    nombre: "RA2.a — Tramas Modbus RTU: campos, CRC y delimitadores",
    preguntas: [
      {
        pregunta: "¿Cuántos bytes ocupa el campo CRC-16 al final de una trama Modbus RTU?",
        opciones: [
        "1 byte",
        "2 bytes",
        "4 bytes",
        "Modbus RTU no incluye campo de control de errores"
        ],
        correcta: 1,
        explicacion: "Justificación: El CRC-16 de Modbus RTU ocupa siempre 2 bytes (16 bits), transmitidos en orden little-endian (byte bajo primero). Es la única excepción al orden big-endian del resto de campos de la trama."
      },
      {
        pregunta: "¿Cuántos bytes ocupa el campo de dirección de esclavo en una trama Modbus RTU?",
        opciones: [
        "1 byte",
        "2 bytes",
        "4 bytes",
        "Es variable según el protocolo configurado"
        ],
        correcta: 0,
        explicacion: "Justificación: El campo de dirección de esclavo en Modbus RTU ocupa exactamente 1 byte, lo que permite direccionar hasta 247 esclavos (0x01–0xF7). La dirección 0x00 es la de difusión (broadcast)."
      },
      {
        pregunta: "¿Qué define el silencio de 3,5 caracteres en Modbus RTU?",
        opciones: [
        "El tiempo máximo de respuesta del esclavo",
        "El delimitador de inicio y fin de trama serie",
        "El tiempo de espera antes de reintentar una petición fallida",
        "La duración mínima del campo CRC"
        ],
        correcta: 1,
        explicacion: "Justificación: En Modbus RTU no hay delimitadores de byte especiales; el inicio y fin de trama se detectan por el silencio en el bus. Un silencio de al menos 3,5 tiempos de carácter (a la velocidad configurada) marca el límite entre tramas consecutivas."
      },
      {
        pregunta: "¿Cuál es el valor del campo Protocol ID en el MBAP header de una trama Modbus TCP válida?",
        opciones: [
        "0x0001",
        "0x00FF",
        "0x0000",
        "Varía con cada transacción"
        ],
        correcta: 2,
        explicacion: "Justificación: El Protocol ID vale siempre 0x0000 en Modbus TCP, indicando que el protocolo de aplicación es Modbus. Este campo se reserva para futuras variantes de protocolo, pero en la práctica siempre es cero."
      },
      {
        pregunta: "¿Qué indica el campo Length del MBAP header?",
        opciones: [
        "La longitud total de la trama TCP, incluyendo el MBAP",
        "El número de registros solicitados",
        "El número de bytes que siguen a ese campo (Unit ID + PDU)",
        "La longitud máxima que puede tener el campo de datos"
        ],
        correcta: 2,
        explicacion: "Justificación: El campo Length del MBAP indica cuántos bytes quedan a partir de él hasta el final de la trama: 1 byte de Unit ID más la PDU. Para una petición de lectura de 4 registros, Length = 6 (1 + 1 función + 2 dirección + 2 cantidad)."
      },
      {
        pregunta: "¿Cuál es la diferencia entre PDU y ADU en el protocolo Modbus?",
        opciones: [
        "Son sinónimos; ambos términos designan la trama completa",
        "La PDU es el núcleo (código de función + datos); la ADU añade el encapsulado de transporte (dirección + CRC en RTU, o MBAP en TCP)",
        "La ADU es el núcleo; la PDU añade el encapsulado de red",
        "La PDU incluye el MBAP header; la ADU solo incluye los datos de aplicación"
        ],
        correcta: 1,
        explicacion: "Justificación: La PDU (código de función + datos, máx. 253 bytes) es idéntica en Modbus RTU y TCP. La ADU varía según la capa de transporte: en RTU añade dirección de esclavo (1 B) y CRC-16 (2 B); en TCP añade el MBAP header (7 B) y elimina el CRC porque TCP garantiza integridad de entrega."
      },
      {
        pregunta: "¿Cuántos bytes tiene el MBAP header de Modbus TCP y cuáles son sus campos?",
        opciones: [
        "4 bytes: Transaction ID, Protocol ID, Length, Unit ID",
        "6 bytes: Transaction ID, Protocol ID, Length, Unit ID, Function, Data",
        "7 bytes: Transaction ID (2), Protocol ID (2), Length (2), Unit ID (1)",
        "8 bytes: los 7 anteriores más el campo CRC"
        ],
        correcta: 2,
        explicacion: "Justificación: El MBAP header ocupa exactamente 7 bytes: Transaction ID (2 B), Protocol ID (2 B, siempre 0), Length (2 B) y Unit ID (1 B). No incluye CRC porque TCP ya proporciona comprobación de integridad a nivel de transporte."
      },
      {
        pregunta: "La ADU Modbus RTU de una petición para leer 2 holding registers tiene la estructura: [01][03][10 00][00 02][CRC CRC]. ¿Cuántos bytes ocupa en total?",
        opciones: [
        "6 bytes",
        "7 bytes",
        "8 bytes",
        "9 bytes"
        ],
        correcta: 2,
        explicacion: "Justificación: La ADU Modbus RTU tiene: 1 byte (dirección) + 1 byte (función) + 2 bytes (dirección de registro) + 2 bytes (cantidad) + 2 bytes (CRC) = 8 bytes. La PDU son 5 bytes (función + datos); la ADU añade 3 bytes más (dirección + CRC)."
      },
      {
        pregunta: "En el log de Modbus Poll, la trama capturada es: `01 03 04 00 00 05 DC F4 27`. ¿Qué valor en decimal contiene el registro leído?",
        opciones: [
        "1492",
        "1500",
        "5220",
        "6000"
        ],
        correcta: 1,
        explicacion: "Justificación: Los 4 bytes de datos son `00 00 05 DC`. Concatenando los bytes significativos: `0x05DC` en hexadecimal = 5×256 + 13×16 + 12 = 1500 en decimal. Los 2 bytes `F4 27` son el CRC (little-endian) y no forman parte del dato."
      },
      {
        pregunta: "¿Por qué el CRC-16 de Modbus RTU se transmite en orden little-endian (byte bajo primero) mientras el resto de campos van en big-endian?",
        opciones: [
        "Es un error histórico del estándar que se mantiene por compatibilidad",
        "El CRC se calcula sobre los bytes de datos que ya van en big-endian, por lo que el resultado se invierte para evitar confusión",
        "Facilita la comprobación en el receptor: se añade el CRC a los datos y el resultado debe ser cero",
        "Es el orden natural del algoritmo CRC-16 con polinomio 0xA001"
        ],
        correcta: 3,
        explicacion: "Justificación: El algoritmo CRC-16 de Modbus usa el polinomio reflejado 0xA001 (equivalente a 0x8005 procesado bit a bit en orden inverso). Este algoritmo produce el byte bajo del CRC primero de forma natural, y el estándar Modbus mantiene ese orden para simplificar la implementación hardware."
      },
      {
        pregunta: "¿Cuántos bytes de datos contiene la respuesta Modbus RTU a una petición de lectura de 3 holding registers (función 0x03)?",
        opciones: [
        "3 bytes",
        "6 bytes",
        "7 bytes",
        "9 bytes"
        ],
        correcta: 1,
        explicacion: "Justificación: Cada holding register ocupa 2 bytes (WORD de 16 bits). Para 3 registros: 3 × 2 = 6 bytes de datos. La ADU completa de la respuesta tiene: 1 (dirección) + 1 (función) + 1 (byte count = 6) + 6 (datos) + 2 (CRC) = 11 bytes."
      },
      {
        pregunta: "Un esclavo Modbus devuelve la trama: `01 83 02 C0 F1`. ¿Qué significa exactamente?",
        opciones: [
        "Lectura correcta de 2 registros con valor 0x02",
        "Respuesta de excepción a la función 0x03: la dirección de registro solicitada no existe en el esclavo",
        "Respuesta de excepción a la función 0x03: la función no es reconocida por el esclavo",
        "Respuesta de excepción a la función 0x03: el esclavo ha fallado internamente"
        ],
        correcta: 1,
        explicacion: "Justificación: En Modbus, una respuesta de excepción pone el bit 7 del código de función (0x03 | 0x80 = 0x83). El byte de excepción 0x02 significa «Illegal Data Address»: la dirección o el rango de registros solicitado no existe en el mapa de memoria del esclavo. Los 2 bytes finales son el CRC."
      },
      {
        pregunta: "Un variador de frecuencia devuelve el registro de velocidad con el valor 0x1770. Si la resolución del variador es 0,01 Hz por unidad, ¿a qué frecuencia está girando el motor?",
        opciones: [
        "17,70 Hz",
        "23,92 Hz",
        "60,00 Hz",
        "600,00 Hz"
        ],
        correcta: 2,
        explicacion: "Justificación: 0x1770 en hexadecimal = 1×16³ + 7×16² + 7×16 + 0 = 4096 + 1792 + 112 = 6000 en decimal. Aplicando el factor de escala del variador: 6000 × 0,01 Hz = 60,00 Hz. Este tipo de escalado (valor ×0,01) es habitual en variadores que trabajan con registros de 16 bits enteros."
      },
      {
        pregunta: "¿Cuántos bytes de ADU tiene una petición Modbus TCP para escribir un único holding register (función 0x06)?",
        opciones: [
        "6 bytes",
        "8 bytes",
        "12 bytes",
        "14 bytes"
        ],
        correcta: 2,
        explicacion: "Justificación: La ADU Modbus TCP = MBAP header (7 B) + PDU. La PDU de función 0x06 es: 1 byte (función) + 2 bytes (dirección registro) + 2 bytes (valor) = 5 bytes. Total: 7 + 5 = 12 bytes. No hay CRC porque TCP garantiza integridad."
      },
      {
        pregunta: "¿Cuántos tipos de tablas de datos define el estándar Modbus (coils, discrete inputs, holding registers, input registers)?",
        opciones: [
        "2 (solo registros de 16 bits y bobinas de 1 bit)",
        "3 (bobinas, registros de entrada y holding registers)",
        "4 (bobinas, entradas discretas, holding registers, input registers)",
        "5 (incluyendo una tabla de configuración interna)"
        ],
        correcta: 2,
        explicacion: "Justificación: El estándar Modbus define cuatro espacios de datos: coils (0x/1 bit lectura-escritura), discrete inputs (1x/1 bit solo lectura), holding registers (4x/16 bits lectura-escritura) e input registers (3x/16 bits solo lectura). Cada tipo tiene su propia función de lectura; los coils y holding registers tienen además funciones de escritura."
      },
      {
        pregunta: "¿Qué función Modbus se usa para leer bobinas (coils)?",
        opciones: [
        "0x01",
        "0x02",
        "0x03",
        "0x04"
        ],
        correcta: 0,
        explicacion: "Justificación: La función 0x01 (Read Coils) lee el estado de una o varias bobinas (bits de salida, lectura-escritura). La función 0x02 lee entradas discretas (bits de solo lectura), 0x03 lee holding registers (16 bits lectura-escritura) y 0x04 lee input registers (16 bits solo lectura)."
      },
      {
        pregunta: "¿Qué dirección de esclavo se usa en Modbus para enviar un mensaje de difusión (broadcast)?",
        opciones: [
        "0xFF",
        "0x00",
        "0x01",
        "0x7F"
        ],
        correcta: 1,
        explicacion: "Justificación: La dirección 0x00 es la dirección de broadcast en Modbus RTU: todos los esclavos del bus procesan la trama pero ninguno responde. Solo se puede usar con funciones de escritura (0x05, 0x06, 0x0F, 0x10). Las direcciones válidas de esclavo van de 0x01 a 0xF7 (1–247)."
      },
      {
        pregunta: "En Modbus RTU, ¿qué indica el byte de «Byte Count» que aparece en la respuesta de la función 0x03?",
        opciones: [
        "El número de registros solicitados por el maestro",
        "El número de bytes de datos que siguen a ese campo en la respuesta",
        "El número de registros disponibles en el esclavo",
        "El índice del último registro leído"
        ],
        correcta: 1,
        explicacion: "Justificación: En la respuesta de función 0x03, el campo Byte Count indica cuántos bytes de datos siguen. Para N registros leídos, Byte Count = 2×N (cada registro ocupa 2 bytes). Por ejemplo, para 3 registros: Byte Count = 6. Permite al receptor saber cuántos bytes extraer antes del CRC sin conocer de antemano la cantidad solicitada."
      },
      {
        pregunta: "¿Cuál es el tamaño máximo de la PDU Modbus?",
        opciones: [
        "128 bytes",
        "253 bytes",
        "256 bytes",
        "512 bytes"
        ],
        correcta: 1,
        explicacion: "Justificación: La PDU Modbus (código de función + datos) tiene un tamaño máximo de 253 bytes. La ADU RTU añade 3 bytes (1 dirección + 2 CRC), llegando a 256 bytes máximo. La ADU TCP añade 7 bytes de MBAP header, totalizando 260 bytes. El límite de 253 bytes de la PDU determina la cantidad máxima de registros por petición: 125 holding registers (125 × 2 bytes = 250 bytes de datos + 1 byte función + 2 bytes dirección = 253)."
      },
      {
        pregunta: "En una captura Wireshark con filtro `modbus`, ¿qué información muestra la columna «Info» para una petición de lectura de holding registers?",
        opciones: [
        "Solo la dirección IP del maestro",
        "El código de función, la dirección de registro inicial y la cantidad solicitada",
        "El valor de los registros leídos",
        "El CRC-16 de la trama"
        ],
        correcta: 1,
        explicacion: "Justificación: Wireshark decodifica el protocolo Modbus y muestra en la columna Info: «Read Holding Registers, Address: X, Count: Y». Esta información permite identificar de un vistazo qué registros se están leyendo sin necesidad de expandir los detalles de la trama. El CRC no aparece en Modbus TCP (no existe) y en RTU Wireshark lo verifica internamente."
      },
      {
        pregunta: "¿Qué diferencia hay entre Modbus RTU y Modbus ASCII en cuanto a la codificación de los datos?",
        opciones: [
        "Modbus RTU usa codificación hexadecimal; Modbus ASCII usa codificación decimal",
        "Modbus RTU transmite bytes binarios directamente; Modbus ASCII transmite cada byte como dos caracteres ASCII hexadecimales",
        "Modbus ASCII tiene mayor velocidad de transmisión porque usa menos bytes",
        "No hay diferencia real; son nombres distintos para el mismo protocolo"
        ],
        correcta: 1,
        explicacion: "Justificación: En Modbus RTU cada byte se transmite como un byte binario, por lo que una trama de 8 bytes ocupa exactamente 8 bytes en el bus. En Modbus ASCII, cada byte se representa como dos caracteres ASCII (por ejemplo, 0x01 se transmite como &#x27;0&#x27; y &#x27;1&#x27;, es decir 0x30 y 0x31), lo que dobla el tamaño de la trama. Modbus ASCII usa LRC (Longitudinal Redundancy Check) en lugar de CRC-16 y el carácter &#x27;:&#x27; como delimitador de inicio."
      },
      {
        pregunta: "En el contexto de Modbus RTU, ¿qué es el «silencio de 1,5 caracteres»?",
        opciones: [
        "El tiempo máximo entre dos bytes consecutivos dentro de la misma trama",
        "El tiempo mínimo de respuesta del esclavo",
        "El tiempo máximo entre el fin de la petición y el inicio de la respuesta",
        "La pausa entre el encabezado y los datos de la PDU"
        ],
        correcta: 0,
        explicacion: "Justificación: En Modbus RTU hay dos umbrales de silencio: si el espacio entre bytes dentro de una trama supera 1,5 tiempos de carácter, se considera que la trama está incompleta y debe descartarse. Si el silencio supera 3,5 tiempos de carácter, se interpreta como fin de trama e inicio de una nueva. Estos tiempos dependen de la velocidad (baudrate) configurada."
      },
      {
        pregunta: "¿Cuántos holding registers puede leer como máximo una única petición Modbus 0x03?",
        opciones: [
        "64 registros",
        "100 registros",
        "125 registros",
        "253 registros"
        ],
        correcta: 2,
        explicacion: "Justificación: La función 0x03 permite leer hasta 125 holding registers por petición. Esto se debe al límite de 253 bytes de la PDU: 125 registros × 2 bytes = 250 bytes de datos + 1 byte de código de función + 2 bytes de campo de cantidad = 253 bytes máximo. Si se necesitan más de 125 registros, hay que hacer múltiples peticiones."
      },
      {
        pregunta: "En Modbus RTU, si el maestro envía una petición de escritura con función 0x10 a un esclavo que sí procesa el comando, ¿qué devuelve el esclavo como respuesta?",
        opciones: [
        "El esclavo no responde a funciones de escritura",
        "Devuelve un eco de la petición completa",
        "Devuelve el código de función, la dirección inicial y la cantidad de registros escritos",
        "Devuelve solo el código de función (0x10) sin datos adicionales"
        ],
        correcta: 2,
        explicacion: "Justificación: La respuesta a la función 0x10 (Write Multiple Registers) contiene: dirección de esclavo (1 B) + código de función 0x10 (1 B) + dirección del primer registro (2 B) + cantidad de registros escritos (2 B) + CRC (2 B) = 8 bytes en total. Es un acuse de recibo compacto que confirma qué registros se han actualizado."
      },
      {
        pregunta: "¿Qué significa el código de excepción Modbus 0x03?",
        opciones: [
        "Illegal Function",
        "Illegal Data Address",
        "Illegal Data Value",
        "Server Device Failure"
        ],
        correcta: 2,
        explicacion: "Justificación: El código 0x03 (Illegal Data Value) indica que el valor incluido en el campo de datos de la petición está fuera del rango permitido por el dispositivo. Por ejemplo, intentar escribir 0xFFFF en un registro que solo acepta valores de 0 a 6000 (frecuencia de 0 a 60,00 Hz). Es distinto de 0x02 (la dirección no existe) y de 0x01 (la función no está implementada)."
      },
      {
        pregunta: "Al analizar el log de Modbus Poll, ¿qué indica la columna «Err» con un valor distinto de cero?",
        opciones: [
        "El número de retransmisiones realizadas",
        "El número de tramas con error de CRC o timeout desde el inicio de la sesión",
        "El código de excepción devuelto por el esclavo",
        "El número de bytes perdidos en el bus"
        ],
        correcta: 1,
        explicacion: "Justificación: La columna «Err» de Modbus Poll acumula el número de errores de comunicación (CRC incorrecto, timeout sin respuesta) desde que se inició la sesión. Un valor creciente indica inestabilidad en el bus (ruido, terminación incorrecta, baudrate mal configurado). No es el código de excepción Modbus, que aparecería en el campo de datos con el bit 7 del código de función activado."
      },
      {
        pregunta: "¿Por qué Modbus TCP no necesita campo CRC?",
        opciones: [
        "Porque la velocidad de Ethernet es tan alta que los errores son imposibles",
        "Porque la PDU de Modbus TCP incluye un checksum propio en el MBAP header",
        "Porque TCP/IP incluye su propio mecanismo de detección de errores (checksum de TCP e IP)",
        "Porque Modbus TCP solo se usa en redes privadas sin ruido"
        ],
        correcta: 2,
        explicacion: "Justificación: TCP incluye un checksum de 16 bits en su cabecera que detecta errores en los datos. Además, la capa IP también tiene checksum de cabecera. Como la PDU Modbus viaja dentro del payload de TCP, la integridad está garantizada por el stack de red. Añadir un CRC-16 de Modbus sería redundante y aumentaría el tamaño de la trama innecesariamente."
      },
      {
        pregunta: "Un esclavo Modbus recibe la trama `01 03 00 00 00 08 44 0C`. ¿Cuántos bytes de datos contendrá la respuesta (campo de datos, sin contar dirección, función, byte count ni CRC)?",
        opciones: [
        "4 bytes",
        "8 bytes",
        "16 bytes",
        "32 bytes"
        ],
        correcta: 2,
        explicacion: "Justificación: La trama pide leer 8 holding registers (0x0008 = 8). Cada holding register ocupa 2 bytes, por lo que la respuesta contendrá 8 × 2 = 16 bytes de datos. El Byte Count de la respuesta será 16. La ADU completa de respuesta tendrá: 1 (dir) + 1 (función) + 1 (byte count) + 16 (datos) + 2 (CRC) = 21 bytes."
      },
      {
        pregunta: "En un volcado hexadecimal de una trama Modbus RTU de petición, los bytes son: `0A 03 00 10 00 04 XX XX`. ¿Qué esclavo recibe la petición y cuántos registros se solicitan?",
        opciones: [
        "Esclavo 3, 16 registros",
        "Esclavo 10, 4 registros a partir de la dirección 16",
        "Esclavo 16, 4 registros",
        "Esclavo 10, 16 registros"
        ],
        correcta: 1,
        explicacion: "Justificación: Desglose: 0x0A = 10 (dirección de esclavo), 0x03 (función Read Holding Registers), 0x00 0x10 = 16 (dirección inicial de registro, base 0), 0x00 0x04 = 4 (cantidad de registros), XX XX = CRC. Se solicitan 4 registros a partir de la dirección 16 (que corresponde al registro 40017 en notación base 1)."
      },
    ]
  },
  {
    id: "ra2_b",
    nombre: "RA2.b — Interfaces físicas: RS-485, RS-232 y Ethernet industrial",
    preguntas: [
      {
        pregunta: "¿Qué puerto TCP utiliza el protocolo Modbus TCP por estándar?",
        opciones: [
        "80",
        "443",
        "502",
        "4840"
        ],
        correcta: 2,
        explicacion: "Justificación: El puerto 502 está asignado a Modbus TCP por la IANA (Internet Assigned Numbers Authority). El puerto 80 es HTTP, el 443 HTTPS y el 4840 es OPC UA. Usar el puerto estándar evita conflictos con firewalls y facilita el filtrado en Wireshark."
      },
      {
        pregunta: "¿Qué puerto TCP utiliza OPC UA por estándar?",
        opciones: [
        "502",
        "1883",
        "4840",
        "8080"
        ],
        correcta: 2,
        explicacion: "Justificación: El puerto 4840 está asignado a OPC UA (protocolo opc.tcp) por la OPC Foundation. El puerto 502 es Modbus TCP y el 1883 es MQTT. Conocer los puertos estándar permite configurar correctamente los firewalls industriales y los filtros de captura."
      },
      {
        pregunta: "Al conectar un adaptador USB-RS485 al PC, ¿cómo aparece en el sistema operativo?",
        opciones: [
        "Como un dispositivo de red (adaptador Ethernet virtual)",
        "Como un puerto serie virtual (COMx en Windows, /dev/ttyUSBx en Linux)",
        "Como un dispositivo de audio USB",
        "No aparece hasta que se configura en el software de comunicación"
        ],
        correcta: 1,
        explicacion: "Justificación: Los adaptadores USB-serie (tanto RS-232 como RS-485) instalan un driver que crea un puerto serie virtual en el sistema operativo: COMx en Windows o /dev/ttyUSBx en Linux. El número de COM asignado se verifica en el Administrador de dispositivos antes de configurar el cliente Modbus."
      },
      {
        pregunta: "¿Cuál es la distancia máxima típica de RS-485 y el número máximo de dispositivos en el bus?",
        opciones: [
        "15 m, 2 dispositivos",
        "100 m, 16 dispositivos",
        "1200 m, 32 dispositivos (con transceivers estándar)",
        "10 km, ilimitado"
        ],
        correcta: 2,
        explicacion: "Justificación: RS-485 estándar permite hasta 1200 m de longitud de bus y 32 cargas de unidad (32 transceivers estándar). Con transceivers de alta impedancia modernos se pueden conectar hasta 256 dispositivos. Estas características lo hacen adecuado para redes industriales a nivel de campo."
      },
      {
        pregunta: "¿Qué interfaz de red utiliza el protocolo Modbus TCP para la transmisión?",
        opciones: [
        "RS-485 semidúplex",
        "RS-232 punto a punto",
        "Ethernet (IEEE 802.3)",
        "CAN bus"
        ],
        correcta: 2,
        explicacion: "Justificación: Modbus TCP encapsula la PDU Modbus dentro de TCP/IP, que a su vez viaja sobre Ethernet. Esto permite usar la infraestructura de red estándar (switches, routers) y direccionamiento IP, a diferencia de Modbus RTU que usa RS-485 o RS-232."
      },
      {
        pregunta: "¿Cuál es la principal diferencia entre RS-232 y RS-485 en cuanto a topología de red?",
        opciones: [
        "RS-232 permite multidrop (múltiples dispositivos en el mismo bus); RS-485 es solo punto a punto",
        "RS-485 permite multidrop (hasta 32 dispositivos en el mismo bus); RS-232 es solo punto a punto",
        "Ambos permiten multidrop, pero RS-232 soporta más dispositivos",
        "No hay diferencia de topología; la distinción es solo de velocidad"
        ],
        correcta: 1,
        explicacion: "Justificación: RS-232 es inherentemente punto a punto (un transmisor, un receptor). RS-485 usa señalización diferencial con alta impedancia de entrada, lo que permite conectar múltiples dispositivos al mismo par de hilos (topología bus multidrop), que es la base de Modbus RTU industrial."
      },
      {
        pregunta: "¿Cuál es la función de un conversor RS-232→RS-485 en un montaje Modbus RTU?",
        opciones: [
        "Amplificar la señal RS-232 para que llegue a mayor distancia",
        "Traducir el protocolo Modbus RTU a Modbus TCP",
        "Adaptar los niveles de tensión y la topología (punto a punto → bus diferencial) para conectar el PC al bus RS-485",
        "Filtrar el ruido electromagnético del entorno industrial"
        ],
        correcta: 2,
        explicacion: "Justificación: El conversor RS-232→RS-485 transforma la señal RS-232 (niveles ±12V, punto a punto, full-dúplex) en señal RS-485 (diferencial A−B, bus semidúplex). No traduce el protocolo Modbus, que es exactamente el mismo en ambos extremos: solo cambia el medio físico."
      },
      {
        pregunta: "En un bus RS-485, ¿qué mide el receptor para interpretar el dato lógico?",
        opciones: [
        "La tensión del hilo A respecto a masa (GND)",
        "La tensión del hilo B respecto a masa (GND)",
        "La diferencia de tensión entre el hilo A y el hilo B (A − B)",
        "B) La tensión del hilo B respecto a masa (GND)"
        ],
        correcta: 2,
        explicacion: "Justificación: RS-485 es una interfaz diferencial: el receptor mide A − B. Cuando A > B, el dato lógico es &#x27;1&#x27; (o &#x27;0&#x27; según la convención). La señalización diferencial cancela el ruido de modo común que afecta por igual a ambos hilos, lo que explica la robustez de RS-485 en entornos industriales ruidosos."
      },
      {
        pregunta: "¿Qué significa que RS-485 a 2 hilos sea «semidúplex»?",
        opciones: [
        "Que solo puede transmitir, nunca recibir",
        "Que transmisión y recepción usan el mismo par de hilos, pero no de forma simultánea",
        "Que puede transmitir y recibir al mismo tiempo, como Ethernet full-dúplex",
        "Que la velocidad de transmisión es la mitad de la de recepción"
        ],
        correcta: 1,
        explicacion: "Justificación: En RS-485 a 2 hilos (half-dúplex), el único par A−B sirve para transmitir Y recibir, pero no a la vez. Esto es posible porque Modbus RTU usa el modelo maestro-esclavo: el maestro transmite y silencia su driver; el esclavo toma el bus para responder. El conversor RS-232→RS-485 conmuta automáticamente el sentido del driver."
      },
      {
        pregunta: "¿Cuáles son los niveles de tensión lógicos del estándar RS-232 respecto a GND?",
        opciones: [
        "Lógico 0 = 0V, Lógico 1 = +5V (CMOS)",
        "Lógico 0 = +3V a +15V, Lógico 1 = −3V a −15V (lógica invertida)",
        "Lógico 0 = −3V a −15V, Lógico 1 = +3V a +15V",
        "Lógico 0 = −0,5V, Lógico 1 = +0,5V"
        ],
        correcta: 1,
        explicacion: "Justificación: RS-232 usa lógica invertida respecto a TTL: el nivel &#x27;0&#x27; (espacio) corresponde a +3V a +15V, y el nivel &#x27;1&#x27; (marca) a −3V a −15V. La zona entre ±3V es indefinida. Esta convención de lógica negativa es una fuente habitual de confusión al interpretar osciloscopios."
      },
      {
        pregunta: "¿Por qué se usa RS-485 en lugar de RS-232 para Modbus RTU en instalaciones industriales con varios equipos?",
        opciones: [
        "RS-485 es más barato que RS-232",
        "RS-485 permite la topología bus multidrop, mayor distancia y mejor inmunidad al ruido diferencial",
        "RS-232 no soporta el protocolo Modbus",
        "RS-485 tiene mayor velocidad máxima en todos los escenarios"
        ],
        correcta: 1,
        explicacion: "Justificación: RS-232 es punto a punto (solo 2 equipos), limitado a ~15 m y con señal referenciada a GND (vulnerable a ruido de modo común). RS-485 permite hasta 32 dispositivos en el mismo bus, hasta 1200 m y usa señal diferencial que rechaza el ruido del entorno industrial. RS-232 se usa solo cuando hay un único esclavo a corta distancia."
      },
      {
        pregunta: "¿Por qué es necesario colocar resistencias de terminación de 120 Ω solo en los dos extremos del bus RS-485?",
        opciones: [
        "Para limitar la corriente y proteger los transceivers de cortocircuito",
        "Para adaptar la impedancia del cable y eliminar reflexiones de señal en los extremos",
        "Para que el voltaje diferencial A−B sea suficientemente alto",
        "Para evitar que el bus quede en estado indeterminado cuando ningún dispositivo transmite"
        ],
        correcta: 1,
        explicacion: "Justificación: El par trenzado tiene una impedancia característica de ~120 Ω. Sin terminación, las señales que llegan al extremo del cable se reflejan y vuelven, perturbando la comunicación (especialmente a velocidades altas o cables largos). Colocar 120 Ω en cada extremo absorbe la onda y elimina las reflexiones. Solo en los extremos; en medio del bus añadiría carga innecesaria."
      },
      {
        pregunta: "¿Cuál es la velocidad máxima estándar de RS-232?",
        opciones: [
        "9600 bps",
        "115200 bps",
        "1 Mbps",
        "10 Mbps"
        ],
        correcta: 1,
        explicacion: "Justificación: El estándar RS-232 define una velocidad máxima de 115200 bps (115,2 kbps) a distancias cortas (~15 m). En la práctica, muchos chips UART soportan hasta 1 Mbps en condiciones controladas, pero el estándar original limita a 20 kbps a 15 m. En entornos industriales, 9600 y 19200 bps son las velocidades más comunes por su fiabilidad en cables largos."
      },
      {
        pregunta: "¿Qué señales mínimas se necesitan en un cable RS-232 para comunicación serie bidireccional sin control de flujo hardware?",
        opciones: [
        "Solo TX",
        "TX, RX y GND",
        "TX, RX, RTS, CTS y GND",
        "TX, RX, DTR, DSR, RTS, CTS y GND"
        ],
        correcta: 1,
        explicacion: "Justificación: Para comunicación serie básica sin control de flujo hardware solo son necesarias tres señales: TX (transmisión), RX (recepción) y GND (masa de referencia). El cable null-modem de laboratorio cruza TX↔RX entre los dos conectores y conecta las masas. Las señales de control de flujo (RTS/CTS, DTR/DSR) son opcionales y pueden dejarse sin conectar si se deshabilita el control de flujo en el software."
      },
      {
        pregunta: "¿Por qué un cable RS-232 largo (>15 m) puede causar errores de comunicación aunque el hardware funcione correctamente?",
        opciones: [
        "Porque RS-232 usa multiplexación por tiempo que se desincroniza con cables largos",
        "Porque la capacidad del cable actúa como filtro paso-bajo que redondea los pulsos a alta velocidad",
        "Porque RS-232 usa señalización diferencial que necesita cable trenzado",
        "Porque el protocolo RS-232 tiene un límite de 256 bytes por trama"
        ],
        correcta: 1,
        explicacion: "Justificación: Los cables tienen capacitancia por unidad de longitud (~100 pF/m). A velocidades altas, esta capacitancia y la resistencia del cable forman un filtro RC que redondea las transiciones de los pulsos. Si el tiempo de subida/bajada supera el 70% del período de bit, el receptor ya no puede distinguir unos de ceros. Por eso RS-232 limita la distancia: a mayor velocidad, menor distancia máxima."
      },
      {
        pregunta: "¿Cuál es la ventaja principal de RS-485 frente a RS-232 en entornos con ruido electromagnético industrial?",
        opciones: [
        "RS-485 usa blindaje doble en el cable, que RS-232 no permite",
        "RS-485 mide la diferencia de tensión entre dos hilos (modo diferencial), cancelando el ruido de modo común",
        "RS-485 usa codificación Manchester que es inmune al ruido",
        "RS-485 opera a frecuencias más bajas, que son menos susceptibles al ruido"
        ],
        correcta: 1,
        explicacion: "Justificación: En RS-485, el receptor mide A − B. El ruido electromagnético que se induce en el cable afecta por igual a ambos hilos (ruido de modo común), por lo que se cancela en la resta diferencial. Un ruido de 2 V en modo común solo necesita que la diferencia A − B supere 200 mV para que el receptor interprete correctamente el nivel lógico. RS-232, al ser señal referenciada a GND, no tiene esta inmunidad."
      },
      {
        pregunta: "¿Qué ocurre en un bus RS-485 cuando ningún dispositivo está transmitiendo y no hay resistencias de polarización?",
        opciones: [
        "El bus queda en estado lógico &#x27;1&#x27; (marca)",
        "El bus queda en estado indefinido; los receptores pueden leer valores aleatorios",
        "El bus queda en estado lógico &#x27;0&#x27; (espacio), que es el estado seguro",
        "El bus emite una señal de reposo a 2,5 V"
        ],
        correcta: 1,
        explicacion: "Justificación: Cuando ningún driver está activo en el bus, los hilos A y B flotan. La diferencia A − B puede ser cualquier valor pequeño por interferencias, lo que los receptores pueden interpretar como &#x27;0&#x27; o &#x27;1&#x27; de forma aleatoria. Las resistencias de polarización (pull-up en A, pull-down en B o viceversa) fuerzan el bus a un estado definido (lógico &#x27;1&#x27;, estado de reposo Modbus) cuando no hay transmisión activa."
      },
      {
        pregunta: "¿Cuál es la diferencia entre RS-485 a 2 hilos y RS-485 a 4 hilos?",
        opciones: [
        "RS-485 a 4 hilos soporta mayor velocidad que RS-485 a 2 hilos",
        "RS-485 a 2 hilos es semidúplex (mismo par para TX y RX); RS-485 a 4 hilos es full-dúplex (pares separados para TX y RX)",
        "RS-485 a 4 hilos permite más dispositivos en el bus",
        "RS-485 a 4 hilos alcanza mayor distancia"
        ],
        correcta: 1,
        explicacion: "Justificación: En RS-485 a 2 hilos, el mismo par diferencial A−B sirve para transmitir y recibir (semidúplex): los dispositivos deben turnarse. En RS-485 a 4 hilos hay dos pares independientes: TX+/TX− y RX+/RX−, permitiendo transmisión y recepción simultánea (full-dúplex). Modbus RTU usa habitualmente RS-485 a 2 hilos porque su arquitectura maestro-esclavo no necesita full-dúplex."
      },
      {
        pregunta: "En el Administrador de dispositivos de Windows, ¿bajo qué categoría aparece un adaptador USB-RS485 recién conectado?",
        opciones: [
        "Adaptadores de red",
        "Controladores de sonido, vídeo y juegos",
        "Puertos (COM y LPT)",
        "Dispositivos de interfaz humana"
        ],
        correcta: 2,
        explicacion: "Justificación: Los adaptadores USB-serie (RS-232 y RS-485) instalan un driver FTDI, CH340 o similar que crea un puerto COM virtual. En el Administrador de dispositivos de Windows aparecen bajo «Puertos (COM y LPT)» con un nombre como «USB Serial Port (COM3)». El número de COM asignado es el que hay que configurar en el cliente Modbus (parámetro `port`)."
      },
      {
        pregunta: "En la práctica T2 de ENT2, la cadena de conexión hardware es: PC → adaptador USB-RS232 → _____ → par trenzado A/B → puerto RS-485 del variador Omron MX2. ¿Qué componente completa la cadena?",
        opciones: [
        "Conversor RS-232↔RS-485",
        "Segundo adaptador USB-RS485",
        "Switch Ethernet industrial",
        "Módem serie RS-232"
        ],
        correcta: 0,
        explicacion: "Justificación: El adaptador USB-RS232 convierte USB en señal RS-232 (±12 V, punto a punto). El conversor RS-232↔RS-485 adapta los niveles de tensión y la topología: transforma la señal RS-232 en señal diferencial RS-485 (par A/B) apta para bus multidrop. Desde los bornes A(+) y B(−) del conversor sale el par trenzado que llega al RJ45 Modbus del variador MX2. Sin el conversor, la señal RS-232 es incompatible eléctricamente con la interfaz RS-485 del variador."
      },
      {
        pregunta: "¿Cuál es la velocidad nominal de Ethernet estándar en el aula y en instalaciones industriales típicas?",
        opciones: [
        "10 Mbps (10BASE-T)",
        "100 Mbps (Fast Ethernet) o 1 Gbps (Gigabit Ethernet)",
        "10 Mbps en industria, 1 Gbps solo en oficinas",
        "54 Mbps (WiFi 802.11g)"
        ],
        correcta: 1,
        explicacion: "Justificación: Los switches industriales y los PLCs modernos (como el S7-1200) soportan Fast Ethernet (100 Mbps, 100BASE-TX) como mínimo, y muchos también Gigabit Ethernet (1 Gbps). En el aula se usa Fast Ethernet. El S7-1200 tiene una interfaz PROFINET de 100 Mbps full-dúplex con conector RJ45 estándar, lo que permite usar la infraestructura de red Ethernet común."
      },
      {
        pregunta: "¿Por qué no se usa USB para comunicaciones industriales en campo (nivel de sensor/actuador)?",
        opciones: [
        "USB es demasiado caro para aplicaciones industriales",
        "USB está diseñado para distancias cortas (~5 m), sin topología bus multidrop y sin inmunidad al ruido industrial",
        "USB no soporta velocidades superiores a 9600 bps",
        "USB requiere alimentación de 48 V que los dispositivos industriales no pueden proporcionar"
        ],
        correcta: 1,
        explicacion: "Justificación: USB tiene limitaciones críticas para el campo industrial: distancia máxima de ~5 m sin hubs, topología estrella (no bus multidrop), sin señalización diferencial robusta a ruido industrial, y necesita un host activo (PC o hub). RS-485 y fieldbus industriales (PROFIBUS, CAN) están diseñados específicamente para el entorno de campo: hasta 1200 m, multidrop, diferencial y con aislamiento galvánico. USB se usa solo para configuración o laboratorio."
      },
      {
        pregunta: "En la práctica S12, ¿cuál es la función del cable null-modem RS-232 entre los dos PCs?",
        opciones: [
        "Proporciona alimentación de 5 V desde un PC al otro",
        "Cruza las señales TX y RX entre los dos extremos para que cada PC reciba lo que el otro transmite",
        "Convierte la señal RS-232 de un PC a RS-485 para conectarla al bus del variador",
        "Actúa como repetidor de señal para aumentar la distancia máxima"
        ],
        correcta: 1,
        explicacion: "Justificación: En un cable null-modem, el pin TX del conector A se conecta al pin RX del conector B, y viceversa. Esto permite que dos equipos DTE (como dos PCs) se comuniquen directamente sin necesitar un módem intermedio. Sin este cruce, ambos equipos intentarían transmitir por TX y recibir por RX, pero TX de un equipo llegaría a TX del otro, no a RX."
      },
      {
        pregunta: "¿Qué herramienta de captura permite ver tramas RS-232/RS-485 (sobre USB) en Wireshark?",
        opciones: [
        "WinPcap",
        "en Wireshark?",
        "Npcap",
        "libpcap"
        ],
        correcta: 1,
        explicacion: "Justificación: USBpcap es un driver para Windows que captura el tráfico USB a nivel de bus, incluido el que genera un adaptador USB-serie. Wireshark puede usar USBpcap como origen de captura y luego decodificar el protocolo serie (RS-232/RS-485) que viaja dentro del tráfico USB. WinPcap y Npcap son para captura de red Ethernet/WiFi, no USB."
      },
      {
        pregunta: "¿Cuáles son los niveles lógicos de RS-485 para los estados &#x27;1&#x27; y &#x27;0&#x27;?",
        opciones: [
        "&#x27;1&#x27; si A − B > +200 mV; &#x27;0&#x27; si A − B < −200 mV",
        "&#x27;1&#x27; si A > 2,5 V; &#x27;0&#x27; si B > 2,5 V",
        "&#x27;1&#x27; si A − B > +5 V; &#x27;0&#x27; si A − B < −5 V",
        "&#x27;1&#x27; si A = 0 V; &#x27;0&#x27; si A = +5 V"
        ],
        correcta: 0,
        explicacion: "Justificación: El estándar RS-485 define que el receptor interpreta &#x27;1&#x27; (marca) cuando A − B > +200 mV y &#x27;0&#x27; (espacio) cuando A − B < −200 mV. La zona entre ±200 mV es indeterminada. El transmisor genera típicamente ±1,5 V a ±5 V de diferencia, lo que proporciona un margen de ruido amplio. En Modbus RTU, el estado de reposo del bus (sin transmisión) debe ser lógico &#x27;1&#x27;."
      },
      {
        pregunta: "¿Cuántos dispositivos máximos puede tener un bus RS-485 usando transceivers modernos de alta impedancia (1/8 de carga de unidad)?",
        opciones: [
        "32 dispositivos",
        "64 dispositivos",
        "256 dispositivos",
        "1024 dispositivos"
        ],
        correcta: 2,
        explicacion: "Justificación: El estándar RS-485 original define «unidad de carga» (unit load) como la impedancia de un transmisor/receptor estándar. Un driver RS-485 puede alimentar hasta 32 unidades de carga. Los transceivers modernos de 1/8 de carga de unidad (high-impedance) presentan solo 1/8 de la carga estándar, por lo que pueden conectarse 32 × 8 = 256 dispositivos en el mismo bus manteniendo los niveles de señal correctos."
      },
      {
        pregunta: "¿Qué protocolo industrial usa el mismo nivel físico RS-485 que Modbus RTU pero con un protocolo de aplicación diferente?",
        opciones: [
        "PROFIBUS DP",
        "OPC UA",
        "Modbus TCP",
        "MQTT"
        ],
        correcta: 0,
        explicacion: "Justificación: PROFIBUS DP usa RS-485 como capa física (con conector DB-9 de 9 pines y terminación de 220 Ω) pero con su propio protocolo de acceso al medio y de aplicación. Modbus RTU también usa RS-485, por lo que ambos comparten la capa física pero son protocolos completamente distintos y no interoperables. En las prácticas del aula se trabaja con Modbus RTU sobre RS-485 del variador Omron."
      },
      {
        pregunta: "En el aula hay 3 conversores USB-RS232 para 8 alumnos. ¿Cómo se organiza la práctica S12?",
        opciones: [
        "Solo 3 alumnos realizan la práctica; los demás observan",
        "En parejas (3 parejas + 1 trío): un PC actúa como maestro (Modbus Poll) y el otro como esclavo (Modbus Slave), conectados por cable null-modem RS-232",
        "Los 8 alumnos usan el mismo bus RS-485 en topología multidrop",
        "Se simulan los conversores con un adaptador USB-USB"
        ],
        correcta: 1,
        explicacion: "Justificación: Con 3 conversores disponibles se forman 3 parejas (+ 1 trío según la nota de la UT). En cada pareja, el PC A instala Modbus Poll (maestro) con su conversor USB-RS232, y el PC B instala Modbus Slave (esclavo) con el segundo conversor. Ambos se conectan mediante un cable null-modem RS-232 DB-9. Wireshark + USBpcap captura en el conversor del maestro (PC A)."
      },
      {
        pregunta: "¿Qué ventaja tiene usar un switch industrial frente a un hub para conectar el S7-1200 y el PC en las prácticas de Modbus TCP?",
        opciones: [
        "El switch es más barato que el hub",
        "El switch reenvía los paquetes solo al puerto destino, reduciendo colisiones y permitiendo captura Wireshark selectiva",
        "El hub soporta mayor ancho de banda total",
        "El switch permite velocidades de 10 Gbps que el hub no puede"
        ],
        correcta: 1,
        explicacion: "Justificación: Un hub repite todos los paquetes por todos los puertos (capa 1), lo que genera colisiones y deja ver todo el tráfico en cualquier puerto. Un switch (capa 2) aprende las MACs y envía cada trama solo al puerto correspondiente, reduciendo la carga de red. Para Wireshark, el switch filtra el tráfico que no está destinado al PC de captura (a menos que se configure un puerto espejo/SPAN), mientras el hub lo deja ver todo."
      },
      {
        pregunta: "¿Por qué el protocolo OPC UA usa el esquema de URL `opc.tcp://` en lugar de `http://`?",
        opciones: [
        "Porque OPC UA no puede viajar sobre HTTP",
        "Porque `opc.tcp` indica que se usa el protocolo de transporte binario OPC UA sobre TCP, que es más eficiente que el transporte basado en Web Services",
        "Porque HTTP está reservado para comunicaciones con SCADA",
        "Porque `opc.tcp` permite velocidades superiores a 10 Gbps"
        ],
        correcta: 1,
        explicacion: "Justificación: OPC UA define múltiples transportes: el binario (`opc.tcp`), que es el más eficiente en términos de tamaño y latencia; y el basado en Web Services (`http`/`https` con XML o JSON), que es más interoperable pero más pesado. En PLCs industriales como el S7-1200, se usa `opc.tcp` porque los recursos del procesador del PLC son limitados y el transporte binario es significativamente más compacto."
      },
    ]
  },
  {
    id: "ra2_c",
    nombre: "RA2.c — Configuración de dispositivos Modbus y OPC UA",
    preguntas: [
      {
        pregunta: "En TIA Portal, ¿qué bloque de función configura el S7-1200 como servidor Modbus TCP?",
        opciones: [
        "MB_CLIENT",
        "MB_MASTER",
        "MB_SERVER",
        "TCON"
        ],
        correcta: 2,
        explicacion: "Justificación: El bloque MB_SERVER (en el OB1 del S7-1200) habilita al PLC para aceptar conexiones entrantes de clientes Modbus TCP en el puerto 502 y mapear los holding registers al DB de comunicación configurado. MB_CLIENT es el rol contrario (cliente que inicia la conexión)."
      },
      {
        pregunta: "¿Qué entrada del bloque MB_SERVER define el área de memoria del PLC que el cliente Modbus ve como holding registers?",
        opciones: [
        "CONNECT",
        "DISCONNECT",
        "MB_HOLD_REG",
        "NDR"
        ],
        correcta: 2,
        explicacion: "Justificación: La entrada MB_HOLD_REG es un puntero Variant que apunta al DB (o área de memoria) que el servidor Modbus expone como registros 4xxxx. En la práctica del aula se configura como un Array of Word en un DB global (ej. DB_Modbus.HR)."
      },
      {
        pregunta: "Al usar ModbusTcpClient de pymodbus para conectarse a un PLC, ¿cuáles son los dos parámetros mínimos del constructor?",
        opciones: [
        "`host` y `baudrate`",
        "`host` y `port` (por defecto 502 si se omite)",
        "`ip` y `unit_id`",
        "`address` y `timeout`"
        ],
        correcta: 1,
        explicacion: "Justificación: `ModbusTcpClient(host, port=502)` requiere al menos la dirección IP o hostname del servidor. El puerto es opcional (por defecto 502). El `unit_id` (equivalente a la dirección de esclavo) se pasa en cada llamada de lectura/escritura, no en el constructor."
      },
      {
        pregunta: "¿Qué comando instala la librería de OPC UA para Python que se usa en las prácticas del aula?",
        opciones: [
        "`pip install opcua`",
        "`pip install asyncua`",
        "`pip install python-opcua`",
        "`pip install siemens-opcua`"
        ],
        correcta: 0,
        explicacion: "Justificación: La librería que se usa en las prácticas del aula es `opcua` (paquete python-opcua). Se instala con `pip install opcua` y se importa con `from opcua import Client`. Proporciona una API síncrona compatible con el gestor de contexto `with Client(URL) as client:`. La librería `asyncua` es una alternativa más reciente pero diferente, con un paquete e importaciones distintos; usar el nombre incorrecto generaría errores de importación en el entorno del aula."
      },
      {
        pregunta: "¿Cuál es el formato estándar de la URL del endpoint OPC UA del S7-1200?",
        opciones: [
        "`http://192.168.0.1:4840`",
        "`opc.tcp://192.168.0.1:4840`",
        "`modbus://192.168.0.1:502`",
        "`tcp://192.168.0.1:4840`"
        ],
        correcta: 1,
        explicacion: "Justificación: La URL del endpoint OPC UA sigue el esquema `opc.tcp://IP:puerto`. El protocolo `opc.tcp` indica que se usa la capa de transporte TCP binaria de OPC UA (la más habitual en PLC industriales). El puerto 4840 es el estándar; algunos fabricantes usan otros puertos, pero Siemens S7-1200 usa 4840 por defecto."
      },
      {
        pregunta: "En un variador de frecuencia con Modbus RTU, ¿qué configuración es necesaria para que acepte consignas de velocidad y órdenes de marcha/paro desde el maestro Modbus?",
        opciones: [
        "Solo configurar la dirección de esclavo; las consignas Modbus son siempre activas",
        "Configurar la fuente de referencia de frecuencia y la fuente de comando en «Modbus» (en el variador Omron MX2: A001=03 y A002=03)",
        "Configurar el número de registros del DB de comunicación",
        "Activar el modo «remoto» en Modbus Poll"
        ],
        correcta: 1,
        explicacion: "Justificación: Un variador de frecuencia tiene, independientemente de Modbus, parámetros que definen la fuente de la consigna de frecuencia y de las órdenes de marcha. Si estas fuentes no apuntan a «bus de comunicación» (opción Modbus), el variador leerá los registros Modbus pero los ignorará para el control. En el MX2: A001=03 (comando por Modbus) y A002=03 (referencia de frecuencia por Modbus)."
      },
      {
        pregunta: "Al llamar a `read_holding_registers(address=0, count=4, device_id=1)` en pymodbus, ¿a qué registro Modbus estándar (notación 4xxxx) corresponde `address=0`?",
        opciones: [
        "Registro 40000",
        "Registro 40001",
        "Registro 40002",
        "Depende del firmware del PLC"
        ],
        correcta: 1,
        explicacion: "Justificación: pymodbus usa direccionamiento base-0: `address=0` corresponde al registro 40001 en la notación Modbus estándar (base-1). Así, `address=1` es el 40002, etc. Este desfase de 1 es una fuente habitual de error al configurar el MB_SERVER en TIA Portal: el registro que se declara en el DB debe corresponder a `address=0` del cliente."
      },
      {
        pregunta: "¿Cuáles son los cuatro pasos principales para configurar el S7-1200 como servidor Modbus TCP en TIA Portal?",
        opciones: [
        "Instalar pymodbus → crear DB → llamar MB_CLIENT → compilar",
        "Configurar IP → crear DB de registros (Array of Word) → añadir MB_SERVER en OB1 con TCON_IP_v4 → compilar y cargar",
        "Activar OPC UA → crear DB → mapear NodeIds → compilar",
        "Configurar IP → abrir puerto 502 en el firewall → crear bloque FB → compilar"
        ],
        correcta: 1,
        explicacion: "Justificación: Los pasos son: (1) asignar IP a la CPU en sus propiedades de interfaz PROFINET; (2) crear un DB global con un Array of Word como mapa de registros; (3) añadir el bloque MB_SERVER en OB1 con DISCONNECT=FALSE, MB_HOLD_REG apuntando al array y CONNECT con la variable TCON_IP_v4 configurada; (4) compilar y cargar en el PLC en modo RUN."
      },
      {
        pregunta: "¿Cuáles son los pasos para activar el servidor OPC UA en el S7-1200 desde TIA Portal?",
        opciones: [
        "Añadir el bloque OPC_SERVER en OB1 con los parámetros de endpoint",
        "Ir a Propiedades de la CPU → OPC UA → Servidor → activar servidor OPC UA, configurar puerto 4840 y política de seguridad",
        "Instalar una función de bloque especial desde el catálogo de TIA Portal",
        "Configurar el router de la red para redirigir el puerto 4840 al PLC"
        ],
        correcta: 1,
        explicacion: "Justificación: El servidor OPC UA del S7-1200 no requiere bloques en el programa: se activa en las propiedades de la CPU (Propiedades → OPC UA → Servidor). Se configura el puerto (4840), la política de seguridad (sin seguridad en entorno de laboratorio) y la autenticación (invitado anónimo). También requiere licencia runtime en el PLC."
      },
      {
        pregunta: "Al crear un ModbusSerialClient para comunicación RTU con un variador, ¿cuál de estos conjuntos de parámetros es correcto?",
        opciones: [
        "`ModbusSerialClient(host=&#x27;COM3&#x27;, port=502)`",
        "`ModbusSerialClient(port=&#x27;COM3&#x27;, baudrate=9600, bytesize=8, parity=&#x27;E&#x27;, stopbits=1, timeout=1)`",
        "`ModbusSerialClient(ip=&#x27;192.168.0.1&#x27;, baudrate=9600)`",
        "`ModbusSerialClient(&#x27;COM3&#x27;)` sin parámetros adicionales"
        ],
        correcta: 1,
        explicacion: "Justificación: ModbusSerialClient requiere el puerto serie (`port`), la velocidad (`baudrate`), el tamaño del byte de datos (`bytesize`), la paridad (`parity`), los bits de parada (`stopbits`) y el timeout. Todos deben coincidir exactamente con los parámetros configurados en el esclavo. No usa `host` ni `ip`; esos son parámetros de ModbusTcpClient."
      },
      {
        pregunta: "¿Cómo se marca una variable de un bloque de datos del S7-1200 para que sea accesible desde un cliente OPC UA?",
        opciones: [
        "Añadiéndola manualmente al archivo de configuración OPC UA",
        "Marcando las casillas «Accesible desde HMI/OPC UA» y «Escribible» en las propiedades de la variable dentro del DB en TIA Portal",
        "Declarándola como variable global en el OB1",
        "Configurándola con el tipo de dato OPC_UA_Variable en lugar de Real o Bool"
        ],
        correcta: 1,
        explicacion: "Justificación: En TIA Portal, cada variable de un DB tiene atributos de accesibilidad. Para que el servidor OPC UA la publique, debe tener marcada la casilla «Accesible desde HMI/OPC UA». Si además debe ser escribible desde el cliente, también hay que marcar «Escribible». Sin estas marcas, el servidor no incluye la variable en su espacio de direcciones y el cliente obtiene «BadNodeIdUnknown»."
      },
      {
        pregunta: "¿Qué estructura de TIA Portal describe la conexión TCP del MB_SERVER (IP local, puerto, modo pasivo)?",
        opciones: [
        "TCON_IP_v4",
        "DB_Modbus",
        "MB_HOLD_REG",
        "PROFINET_Config"
        ],
        correcta: 0,
        explicacion: "Justificación: La entrada CONNECT del MB_SERVER acepta una variable de tipo TCON_IP_v4 definida en un DB global. Esta estructura contiene el identificador hardware de la interfaz PROFINET, el puerto local (502), el modo de conexión (pasivo = el PLC espera la conexión entrante) y otros parámetros de la conexión TCP."
      },
      {
        pregunta: "¿Cuál es el patrón correcto de la librería opcua para conectar al servidor OPC UA y asegurar el cierre automático de la conexión?",
        opciones: [
        "`client = Client(URL); client.open(); ...; client.close()`",
        "`with Client(URL) as client: ...`",
        "`client = connect(URL); try: ...; finally: disconnect(client)`",
        "`async with Client(URL) as client: ...` (solo en la versión síncrona)"
        ],
        correcta: 1,
        explicacion: "Justificación: La librería opcua (`from opcua import Client`) soporta el gestor de contexto `with Client(URL) as client:`. Al salir del bloque —tanto en ejecución normal como por excepción— se llama automáticamente al cierre de la conexión con el servidor. Este patrón evita conexiones huérfanas en el servidor OPC UA del PLC. El script opcua_plc.py del entregable ENT2 usa este patrón para garantizar la desconexión limpia del S7-1200."
      },
      {
        pregunta: "En el DB_Modbus del S7-1200, cada elemento del Array of Word ocupa 2 bytes. Si el DB tiene 10 elementos (HR[0]..HR[9]), ¿cuántos holding registers puede leer un cliente Modbus?",
        opciones: [
        "5 registros (address 0–4)",
        "10 registros (address 0–9)",
        "20 registros (address 0–19)",
        "Depende del tamaño del bloque MB_SERVER"
        ],
        correcta: 1,
        explicacion: "Justificación: Cada elemento Word del array corresponde a un holding register Modbus. Un array de 10 Words expone los registros 40001–40010 (address 0–9 en pymodbus). Pedir `count=12` cuando el array tiene 10 elementos genera una respuesta de excepción 0x02 (Illegal Data Address) del MB_SERVER."
      },
      {
        pregunta: "¿Por qué hay que desactivar el «acceso optimizado» del DB_Modbus en TIA Portal?",
        opciones: [
        "El acceso optimizado es incompatible con el firmware V4 del S7-1200",
        "El acceso optimizado reorganiza internamente los bytes del DB y rompe el direccionamiento Modbus que espera datos contiguos en posiciones fijas",
        "El acceso optimizado impide la lectura desde clientes externos por red",
        "Es un requisito de la versión de pymodbus usada en el aula"
        ],
        correcta: 1,
        explicacion: "Justificación: Con acceso optimizado activado, TIA Portal reorganiza las variables del DB según criterios de rendimiento interno, sin respetar el orden de declaración. Esto hace que las posiciones absolutas de los bytes no sean predecibles para el cliente Modbus. Con acceso optimizado desactivado, el DB tiene un layout fijo (compatible con DB estándar), y el mapeo Modbus es correcto."
      },
      {
        pregunta: "¿Qué ocurre si el cliente Python llama `read_holding_registers(address=0, count=12)` cuando el array del DB_Modbus solo tiene 10 elementos?",
        opciones: [
        "pymodbus lee los 10 disponibles y rellena los 2 restantes con 0",
        "El MB_SERVER del PLC devuelve una respuesta de excepción (Illegal Data Address) y pymodbus lo marca como error",
        "La función lanza una excepción de Python antes de enviar la petición",
        "El PLC entra en estado STOP por desbordamiento de memoria"
        ],
        correcta: 1,
        explicacion: "Justificación: El MB_SERVER valida que el rango solicitado (address + count) esté dentro del tamaño del array configurado en MB_HOLD_REG. Si se supera, devuelve una respuesta de excepción Modbus con código 0x02 (Illegal Data Address), que pymodbus devuelve como error comprobable con `isError()`. El PLC no se detiene; simplemente rechaza la petición."
      },
      {
        pregunta: "¿Qué consecuencia tiene configurar MB_HOLD_REG apuntando a un DB incorrecto o vacío en el MB_SERVER?",
        opciones: [
        "El bloque MB_SERVER no compila en TIA Portal",
        "El bloque activa la salida ERROR con un código STATUS (ej. 16#8085) y el cliente Modbus no puede leer ni escribir registros",
        "El PLC cambia automáticamente de RUN a STOP",
        "El cliente Python recibe valores aleatorios en lugar de error"
        ],
        correcta: 1,
        explicacion: "Justificación: Si MB_HOLD_REG no apunta correctamente a un área de datos válida, el bloque MB_SERVER activa su salida ERROR=TRUE y la salida STATUS indica el código de error (16#8085 indica que MB_HOLD_REG está vacío o mal referenciado). El cliente Modbus recibirá respuestas de excepción o la conexión se rechazará."
      },
      {
        pregunta: "Si el parámetro de dirección de esclavo del variador (Slave ID) está configurado a 2, pero el cliente Python usa `device_id=1` en sus llamadas, ¿qué ocurre?",
        opciones: [
        "El variador responde igualmente porque ignora el campo de dirección",
        "El variador no responde; el cliente obtiene timeout y el bus permanece en silencio",
        "El variador responde, pero con datos del esclavo 1 de otro dispositivo del bus",
        "está configurado a 2, pero el cliente Python usa `device_id=1` en sus llamadas, ¿qué ocurre?"
        ],
        correcta: 1,
        explicacion: "Justificación: En Modbus RTU, el esclavo solo procesa las tramas dirigidas a su dirección configurada (Slave ID). Si la dirección en la trama no coincide, el esclavo la ignora completamente y no responde. El maestro espera hasta que expira el timeout y lo registra como error de comunicación. Esta es una de las causas más frecuentes de «Timeout error» en el aula."
      },
      {
        pregunta: "En TIA Portal, ¿cuál es la diferencia entre MB_SERVER y MB_CLIENT?",
        opciones: [
        "MB_SERVER es para Modbus RTU; MB_CLIENT es para Modbus TCP",
        "MB_SERVER hace que el PLC espere conexiones entrantes (esclavo TCP); MB_CLIENT hace que el PLC inicie conexiones salientes (maestro TCP)",
        "MB_SERVER es el bloque de datos; MB_CLIENT es el bloque de comunicación",
        "Ambos son equivalentes; la elección depende de la versión de TIA Portal"
        ],
        correcta: 1,
        explicacion: "Justificación: MB_SERVER configura el S7-1200 como servidor Modbus TCP pasivo: espera conexiones entrantes en el puerto 502 y responde a las peticiones del cliente. MB_CLIENT configura el S7-1200 como cliente activo: inicia la conexión hacia un servidor Modbus TCP externo (por ejemplo, otro PLC o un variador TCP). En las prácticas del aula el PLC actúa como servidor (MB_SERVER) y el PC Python como cliente."
      },
      {
        pregunta: "Al crear el DB_Modbus en TIA Portal para usarlo con MB_SERVER, ¿qué tipo de dato se usa para el array de holding registers?",
        opciones: [
        "Array of Byte (1 byte por posición)",
        "Array of Word (2 bytes por posición, equivalente a 16 bits sin signo)",
        "Array of DWord (4 bytes por posición)",
        "Array of Real (4 bytes IEEE 754)"
        ],
        correcta: 1,
        explicacion: "Justificación: Un holding register Modbus es un valor de 16 bits sin signo (WORD en TIA Portal). El array debe ser de tipo Word para que la correspondencia sea directa: cada elemento del array es un holding register. Si se usara DWord, cada posición del array correspondería a 2 registros Modbus consecutivos, lo que complicaría el mapeo. En TIA Portal, Word = 2 bytes = 16 bits = 1 holding register Modbus."
      },
      {
        pregunta: "¿Qué parámetro del bloque MB_SERVER en TIA Portal debe configurarse con `DISCONNECT=FALSE` para mantener la conexión activa?",
        opciones: [
        "El parámetro CONNECT",
        "El parámetro DISCONNECT en la entrada del bloque",
        "El parámetro NDR",
        "El parámetro MB_HOLD_REG"
        ],
        correcta: 1,
        explicacion: "Justificación: La entrada DISCONNECT del bloque MB_SERVER controla si el servidor cierra activamente la conexión. Con DISCONNECT=FALSE (o conectado a una variable Bool en False), el servidor mantiene la conexión abierta indefinidamente para recibir peticiones del cliente. Con DISCONNECT=TRUE el servidor cierra la conexión TCP, lo que obliga al cliente a reconectar. En la práctica del aula siempre se usa FALSE para mantener la sesión activa."
      },
      {
        pregunta: "En pymodbus, ¿qué método se llama después de crear un ModbusTcpClient para establecer la conexión TCP?",
        opciones: [
        "`client.start()`",
        "`client.connect()`",
        "`client.open()`",
        "`client.init()`"
        ],
        correcta: 1,
        explicacion: "Justificación: La secuencia básica de pymodbus para TCP es: `client = ModbusTcpClient(host, port=502)` para crear el objeto, y luego `client.connect()` para establecer la conexión TCP. A partir de ese momento se pueden hacer lecturas y escrituras. Al finalizar se llama `client.close()`. El método `connect()` retorna `True` si la conexión se establece correctamente y `False` si falla."
      },
      {
        pregunta: "¿Cuál es la salida NDR del bloque MB_SERVER en TIA Portal?",
        opciones: [
        "«New Data Ready»: se activa un ciclo de scan cuando el cliente ha escrito datos nuevos en los holding registers",
        "«No Data Received»: se activa cuando el cliente no envía peticiones durante más de 5 segundos",
        "«Network Data Rate»: indica el ancho de banda usado por Modbus TCP",
        "«Node Discovery Ready»: indica que el cliente se ha conectado al servidor"
        ],
        correcta: 0,
        explicacion: "Justificación: NDR (New Data Ready) es una salida Bool del MB_SERVER que se activa durante un ciclo de scan cuando el cliente Modbus ha escrito datos en los holding registers. El programa PLC puede usar NDR para detectar que ha llegado una escritura del cliente y actuar en consecuencia (por ejemplo, copiar el valor de un registro al setpoint del variador de frecuencia local). Es equivalente a una interrupción de comunicación."
      },
      {
        pregunta: "En la librería opcua de Python, ¿cómo se obtiene el nodo de una variable del servidor OPC UA conociendo su NodeId?",
        opciones: [
        "`node = client.find_node(nodeId)`",
        "`node = client.get_node(nodeId)`",
        "`node = client.read_node(nodeId)`",
        "`node = client.node(nodeId)`"
        ],
        correcta: 1,
        explicacion: "Justificación: En la librería opcua, `client.get_node(nodeId)` devuelve un objeto Node sin hacer ninguna comunicación con el servidor. El NodeId se especifica como string con el formato que usa TIA Portal, por ejemplo `\"ns=3;s=\\\"DB_OPC\\\".\\\"Variable1\\\"\"`. Después se llama `node.get_value()` para leer el valor actual o `node.set_value(valor)` para escribirlo. `get_node` solo crea la referencia local; la comunicación con el PLC ocurre en las llamadas a `get_value` y `set_value`."
      },
      {
        pregunta: "En OPC UA, ¿qué significa el formato `ns=3;i=1001` de un NodeId?",
        opciones: [
        "Namespace 3, identificador entero 1001",
        "Nodo de seguridad 3, índice 1001",
        "Versión 3 del protocolo, puerto 1001",
        "Tercer servidor, variable número 1001"
        ],
        correcta: 0,
        explicacion: "Justificación: Un NodeId OPC UA se compone de un índice de espacio de nombres (`ns=`) y un identificador. El namespace 0 y 1 son reservados por OPC UA; los fabricantes usan namespaces ≥2. Siemens TIA Portal asigna sus variables en namespace 3 (o similar según la versión). El identificador puede ser numérico (`i=`), de cadena (`s=`) o GUID (`g=`). El NodeId debe consultarse en UA Expert u otra herramienta de navegación OPC UA antes de usarlo en el script."
      },
      {
        pregunta: "¿Qué política de seguridad OPC UA se usa en el laboratorio para simplificar la configuración?",
        opciones: [
        "Basic256Sha256 con certificados autofirmados",
        "None (sin cifrado ni autenticación de certificado)",
        "Basic128Rsa15 con autenticación por usuario y contraseña",
        "Aes128_Sha256_RsaOaep obligatorio desde TIA Portal V16"
        ],
        correcta: 1,
        explicacion: "Justificación: En entorno de laboratorio se configura la política de seguridad «None» (sin cifrado, sin comprobación de certificados) para simplificar la puesta en marcha. En producción sería inaceptable, pero en el aula permite conectar sin gestionar el intercambio y la confianza de certificados. TIA Portal lo permite explícitamente en la configuración del servidor OPC UA del S7-1200 marcando «Permitir conexiones sin seguridad»."
      },
      {
        pregunta: "Al configurar el TCON_IP_v4 para MB_SERVER en TIA Portal, ¿qué valor se pone en el campo «Connection Type»?",
        opciones: [
        "0x01 (TCP activo — el PLC inicia la conexión)",
        "0x11 (TCP pasivo — el PLC espera conexiones entrantes)",
        "0x03 (UDP)",
        "0x12 (TCP broadcast)"
        ],
        correcta: 1,
        explicacion: "Justificación: Para un servidor Modbus TCP (MB_SERVER), el PLC debe esperar conexiones entrantes, lo que corresponde a una conexión TCP pasiva. En la estructura TCON_IP_v4, el campo `ConnectionType` debe ser 0x11 (TCP pasivo). El campo `LocalPort` se configura a 502 (puerto Modbus TCP estándar). El campo `RemoteAddress` se deja a ceros (acepta conexiones de cualquier cliente)."
      },
      {
        pregunta: "¿Qué hace `client.close()` en pymodbus al finalizar el script?",
        opciones: [
        "Cierra solo el archivo de log, no la conexión de red",
        "Envía una trama Modbus de desconexión al servidor y cierra el socket TCP",
        "Cierra el socket TCP, liberando el puerto en el cliente y el servidor",
        "Termina el proceso Python"
        ],
        correcta: 2,
        explicacion: "Justificación: `client.close()` realiza el cierre ordenado del socket TCP (envía los segmentos FIN/ACK de la secuencia de cierre TCP) y libera el descriptor de fichero del socket. Esto es importante porque el MB_SERVER del S7-1200 tiene un número limitado de conexiones simultáneas; sin `close()`, el servidor puede quedarse con conexiones «zombie» que impiden nuevas conexiones hasta que se agota el timeout de TCP."
      },
      {
        pregunta: "¿Cuál es el propósito de la «Watch Table» de TIA Portal en el contexto de las prácticas de OPC UA?",
        opciones: [
        "Muestra el rendimiento de la CPU del PLC en tiempo real",
        "Permite leer y escribir variables del PLC en modo online para verificar que el valor escrito desde Python ha llegado al PLC",
        "Registra el historial de conexiones OPC UA al PLC",
        "Muestra el mapa de memoria del DB_Modbus durante la ejecución"
        ],
        correcta: 1,
        explicacion: "Justificación: La Watch Table (tabla de observación) de TIA Portal permite al programador, con el PLC conectado en modo online, leer el valor actual de cualquier variable del PLC y también escribir valores directamente. En la práctica de OPC UA se usa para confirmar que la variable escrita desde el script Python (`node.set_value(...)`) ha llegado efectivamente al PLC: el valor en la Watch Table debe cambiar al valor enviado desde Python."
      },
      {
        pregunta: "En el script Python que actúa como gateway RTU↔TCP, ¿por qué se instancian dos clientes pymodbus separados en lugar de uno solo?",
        opciones: [
        "Porque pymodbus no permite usar dos protocolos en el mismo script",
        "Porque cada cliente gestiona su propia conexión, reconexión y timeout de forma independiente; un error en un canal no afecta al otro",
        "Para aumentar la velocidad de transferencia usando ambos canales en paralelo",
        "Por un requisito de licencia de pymodbus para uso comercial"
        ],
        correcta: 1,
        explicacion: "Justificación: Un `ModbusSerialClient` gestiona el puerto COM serie (RS-485 → Omron) y un `ModbusTcpClient` gestiona la conexión Ethernet (TCP → S7-1200). Son objetos con estados de conexión, timeouts y gestión de errores completamente independientes. Si el Omron pierde comunicación, el cliente TCP del S7-1200 permanece conectado y se puede seguir intentando la lectura RTU en la siguiente iteración sin perder la conexión TCP establecida."
      },
    ]
  },
  {
    id: "ra2_d",
    nombre: "RA2.d — Programación Python para comunicaciones industriales",
    preguntas: [
      {
        pregunta: "¿Qué acción realiza la función Modbus 0x06?",
        opciones: [
        "Lee holding registers",
        "Escribe un único holding register",
        "Escribe múltiples holding registers",
        "Lee input registers (solo lectura)"
        ],
        correcta: 1,
        explicacion: "Justificación: La función 0x06 (Write Single Register) escribe un único valor de 16 bits en un holding register del esclavo. Para escribir varios registros a la vez se usa la función 0x10 (Write Multiple Registers), que es más eficiente cuando se necesita actualizar varios registros en una sola transacción."
      },
      {
        pregunta: "¿Qué acción realiza la función Modbus 0x10?",
        opciones: [
        "Lee holding registers",
        "Lee input registers",
        "Escribe un único holding register",
        "Escribe múltiples holding registers en una sola transacción"
        ],
        correcta: 3,
        explicacion: "Justificación: La función 0x10 (Write Multiple Registers) permite escribir un bloque de holding registers consecutivos en una sola transacción Modbus. Es más eficiente que usar varias peticiones 0x06 cuando se necesita actualizar un bloque de registros (por ejemplo, consigna + palabra de control + setpoint en el mismo ciclo)."
      },
      {
        pregunta: "En pymodbus, ¿cuándo devuelve `True` el método `response.isError()`?",
        opciones: [
        "Cuando el esclavo no está disponible en la red",
        "Cuando la respuesta del esclavo contiene un código de excepción Modbus, o cuando se ha producido un error de comunicación (timeout, CRC incorrecto, etc.)",
        "Solo cuando el CRC de la respuesta es incorrecto",
        "Cuando el valor leído está fuera del rango esperado por el programa"
        ],
        correcta: 1,
        explicacion: "Justificación: `isError()` retorna True en cualquier situación anómala: excepciones Modbus del esclavo (códigos 0x01–0x04), timeout, error de CRC, excepción de Python en la transmisión, etc. Es la comprobación imprescindible antes de acceder a `response.registers`; sin ella, el script puede fallar con AttributeError si la respuesta es un objeto de error."
      },
      {
        pregunta: "¿Qué nivel de logging de Python se usa para registrar un error de comunicación que requiere atención inmediata?",
        opciones: [
        "DEBUG",
        "INFO",
        "WARNING",
        "ERROR"
        ],
        correcta: 3,
        explicacion: "Justificación: El nivel ERROR se usa para eventos que impiden el funcionamiento correcto del programa y requieren atención. DEBUG es para trazas de depuración, INFO para eventos normales esperados y WARNING para situaciones anómalas pero recuperables. Un fallo de comunicación con un equipo industrial que supera los reintentos es un ERROR."
      },
      {
        pregunta: "¿Para qué sirve `time.sleep()` en el bucle principal de un script gateway Modbus?",
        opciones: [
        "Para esperar a que el esclavo procese la petición antes de leer la respuesta",
        "Para respetar el tiempo mínimo entre tramas Modbus RTU y evitar saturar el bus RS-485",
        "Para dar tiempo al sistema operativo a liberar el puerto COM",
        "Para esperar a que el servidor OPC UA actualice sus nodos"
        ],
        correcta: 1,
        explicacion: "Justificación: Un bucle sin pausa enviaría miles de peticiones por segundo, saturando el bus RS-485 y el ciclo de scan del PLC. `time.sleep(1)` introduce una pausa de 1 segundo entre iteraciones, que es un ciclo de refresco típico en telemetría industrial. Además, en Modbus RTU, el silencio entre tramas (3,5 caracteres) que gestiona pymodbus ya existe, pero el `time.sleep` del bucle es independiente y controla el ritmo de adquisición."
      },
      {
        pregunta: "¿Qué significa el código de excepción Modbus 0x01?",
        opciones: [
        "Illegal Data Address — la dirección de registro no existe en el esclavo",
        "Illegal Function — el esclavo no soporta el código de función solicitado",
        "Illegal Data Value — el valor del dato está fuera del rango permitido",
        "Server Device Failure — el esclavo ha detectado un error interno"
        ],
        correcta: 1,
        explicacion: "Justificación: El código 0x01 (Illegal Function) indica que el esclavo no reconoce o no implementa el código de función recibido. Es frecuente cuando se intenta usar una función que el dispositivo no soporta (por ejemplo, función 0x05 de escritura de bobinas en un variador que solo soporta 0x03 y 0x06)."
      },
      {
        pregunta: "¿Qué diferencia hay entre la función Modbus 0x03 (Read Holding Registers) y la función 0x04 (Read Input Registers)?",
        opciones: [
        "No hay diferencia funcional; son alias del mismo comando",
        "0x03 lee registros de lectura/escritura (holding); 0x04 lee registros de solo lectura (input), que típicamente provienen de entradas físicas o valores calculados",
        "0x03 lee un único registro; 0x04 lee múltiples registros",
        "0x04 es más rápida porque no comprueba el CRC"
        ],
        correcta: 1,
        explicacion: "Justificación: Los holding registers (4xxxx, función 0x03) son de lectura y escritura; el maestro puede leerlos y escribirlos. Los input registers (3xxxx, función 0x04) son solo de lectura para el maestro; el esclavo los actualiza internamente (por ejemplo, medidas de sensores). En pymodbus se usan `read_holding_registers` y `read_input_registers` respectivamente."
      },
      {
        pregunta: "Un variador de frecuencia devuelve el valor 4500 en el registro de velocidad con resolución 0,01 Hz/unidad. ¿A qué frecuencia está girando el motor?",
        opciones: [
        "4,5 Hz",
        "45,0 Hz",
        "450,0 Hz",
        "4500 Hz"
        ],
        correcta: 1,
        explicacion: "Justificación: 4500 × 0,01 Hz = 45,0 Hz. El variador Omron MX2 expresa la frecuencia de salida en centésimas de hertzio (resolución 0,01 Hz), por lo que un valor de registro de 4500 corresponde a 45,00 Hz, que es la velocidad nominal típica de un motor de 4 polos a 50 Hz en condiciones de carga."
      },
      {
        pregunta: "El enunciado de ENT2 indica que en la Tarea 2 se debe usar «únicamente la función Modbus 0x03 (Read Holding Registers)» sobre el variador Omron. ¿Cuál es la razón principal de esta restricción?",
        opciones: [
        "Pymodbus no soporta las funciones 0x06 ni 0x10 en modo RTU serie",
        "El variador puede tener un motor conectado; escribir en registros de control o consigna sin autorización podría arrancarlo inesperadamente",
        "La función 0x06 solo funciona con Modbus TCP, no con Modbus RTU",
        "El firmware del Omron MX2 solo admite lectura de registros por Modbus"
        ],
        correcta: 1,
        explicacion: "Justificación: La restricción es de seguridad eléctrica: el variador puede estar conectado a un motor real en el taller. Una escritura accidental en el registro de consigna de velocidad (con un valor distinto de cero) o en la palabra de control (bit RUN activo) podría arrancar el motor sin que nadie lo espere. La función 0x03 es de solo lectura y no tiene ningún efecto sobre el estado del variador ni del motor. Pymodbus soporta perfectamente 0x06 y 0x10 en RTU; la restricción es de procedimiento, no técnica."
      },
      {
        pregunta: "¿Qué comprobación mínima debe hacer el script después de llamar a `read_holding_registers()`?",
        opciones: [
        "Verificar que `len(response.registers) > 0`",
        "Verificar que `response is not None`",
        "Verificar con `response.isError()` antes de acceder a `response.registers`",
        "No es necesario; pymodbus lanza una excepción automáticamente si hay error"
        ],
        correcta: 2,
        explicacion: "Justificación: Si la petición falla (timeout, excepción Modbus, error de CRC), pymodbus devuelve un objeto de error en lugar de un objeto con la lista `registers`. Si el script accede directamente a `response.registers` sin comprobar `isError()`, obtendrá un `AttributeError` porque el objeto de error no tiene ese atributo. La comprobación `if response.isError(): ...` es la forma correcta de manejar cualquier tipo de fallo antes de usar los datos."
      },
      {
        pregunta: "¿Cuál es el nivel de logging adecuado para registrar cada ciclo exitoso de lectura en un script de monitorización continua?",
        opciones: [
        "DEBUG",
        "INFO",
        "WARNING",
        "ERROR"
        ],
        correcta: 1,
        explicacion: "Justificación: El nivel INFO se usa para eventos normales esperados que conviene registrar para seguimiento operacional: cada lectura exitosa, cada escritura completada, inicio/fin de sesión. DEBUG es para trazas detalladas de depuración (valores internos, estados de variables) que solo se activan cuando se necesita diagnosticar un problema. WARNING se usa para situaciones anómalas recuperables y ERROR para fallos que requieren atención."
      },
      {
        pregunta: "¿Qué hace el parámetro `timeout` en `ModbusTcpClient(host, port=502, timeout=3)`?",
        opciones: [
        "Define el tiempo máximo de la sesión Modbus completa antes de desconectar",
        "Define cuántos segundos espera el cliente a recibir respuesta del servidor antes de declarar timeout",
        "Define el intervalo entre reintentos automáticos",
        "Define el tiempo máximo para establecer la conexión TCP inicial"
        ],
        correcta: 1,
        explicacion: "Justificación: El parámetro `timeout` define el tiempo máximo que el cliente espera la respuesta del servidor para cada transacción Modbus individual. Si el servidor no responde en ese tiempo, pymodbus devuelve un error de timeout. No controla el tiempo de establecimiento de la conexión TCP (que tiene su propio timeout del sistema operativo) ni el intervalo entre reintentos (que el programador gestiona con `time.sleep` y un bucle)."
      },
      {
        pregunta: "En un script de gateway, ¿cuál es la estrategia correcta cuando la lectura del Omron falla pero el S7-1200 sigue accesible?",
        opciones: [
        "Detener completamente el script y esperar a que el técnico lo reinicie",
        "Escribir un valor centinela (p. ej. −1 o 0xFFFF) en el S7-1200 para indicar dato no válido, registrar el error y continuar el bucle",
        "Continuar escribiendo el último valor válido en el S7-1200 sin registrar el error",
        "Reintentar la lectura RTU indefinidamente hasta que tenga éxito"
        ],
        correcta: 1,
        explicacion: "Justificación: Escribir un valor centinela (−1 o un valor fuera del rango normal, como 0xFFFF) permite que el PLC receptor sepa que el dato no es válido y active alarmas o lógicas de seguridad. Continuar escribiendo el último valor válido enmascaría el fallo de comunicación. El error se registra para diagnóstico posterior. El script continúa el bucle porque la pérdida de comunicación con el Omron puede ser temporal (transitorio de red, reinicio del variador)."
      },
      {
        pregunta: "¿Qué excepción de Python se debe capturar específicamente cuando la conexión TCP al S7-1200 se rompe inesperadamente durante una lectura?",
        opciones: [
        "`ValueError`",
        "`ModbusIOException` (de pymodbus) o `ConnectionResetError` (de la librería socket)",
        "`KeyError`",
        "`IndexError`"
        ],
        correcta: 1,
        explicacion: "Justificación: `ModbusIOException` es la excepción de pymodbus que se lanza cuando hay un error de I/O en el socket (conexión cerrada por el servidor, reset de TCP). A nivel del sistema operativo se manifiesta como `ConnectionResetError` o `BrokenPipeError`. Capturar `ModbusIOException` en el bloque `except` permite distinguir los errores de comunicación de los errores lógicos del protocolo Modbus (como una excepción 0x02 del esclavo)."
      },
      {
        pregunta: "¿Cuál es el patrón correcto de reintentos con espera en Python para una operación Modbus que puede fallar?",
        opciones: [
        "Usar `while True:` sin límite de reintentos",
        "Usar un contador de reintentos con `for i in range(MAX_REINTENTOS):` y `time.sleep` entre intentos, saliendo si tiene éxito",
        "Usar un hilo separado que reintente en segundo plano",
        "Capturar la excepción y relanzarla inmediatamente sin reintentar"
        ],
        correcta: 1,
        explicacion: "Justificación: El patrón correcto es un bucle `for i in range(MAX_REINTENTOS):` con `time.sleep(ESPERA)` entre iteraciones: si la operación tiene éxito se sale con `break`; si agota todos los intentos se registra el error definitivo. `while True:` sin límite puede bloquear el script indefinidamente. Un hilo separado añade complejidad innecesaria. El tiempo de espera entre reintentos evita saturar el bus o la red con peticiones fallidas en ráfaga."
      },
      {
        pregunta: "¿Qué significa `response.registers[0]` en pymodbus después de una lectura exitosa?",
        opciones: [
        "El código de función de la respuesta",
        "El valor del primer holding register solicitado (índice 0 del array de resultados)",
        "La dirección del primer registro leído",
        "El número total de registros devueltos"
        ],
        correcta: 1,
        explicacion: "Justificación: `response.registers` es una lista de enteros de 16 bits (0–65535) con los valores de los holding registers leídos, en el mismo orden en que se solicitaron. `response.registers[0]` es el valor del registro en la dirección `address`, `response.registers[1]` es el siguiente, etc. Si se pidió `count=4`, `response.registers` tendrá 4 elementos (índices 0–3)."
      },
      {
        pregunta: "En el módulo `logging` de Python, ¿cuál es el formato recomendado para incluir la fecha y hora en cada mensaje de log?",
        opciones: [
        "`logging.basicConfig(format=&#x27;%(time)s - %(message)s&#x27;)`",
        "`logging.basicConfig(format=&#x27;%(asctime)s - %(levelname)s - %(message)s&#x27;)`",
        "`logging.basicConfig(format=&#x27;%(timestamp)s %(msg)s&#x27;)`",
        "`logging.basicConfig(format=&#x27;[%(date)s] %(text)s&#x27;)`"
        ],
        correcta: 1,
        explicacion: "Justificación: `%(asctime)s` inserta la fecha y hora automáticamente en cada mensaje de log. `%(levelname)s` muestra el nivel (DEBUG, INFO, WARNING, ERROR). `%(message)s` es el texto del mensaje. El formato `&#x27;%(asctime)s - %(levelname)s - %(message)s&#x27;` produce salidas como `2026-10-15 14:32:01,123 - ERROR - Timeout leyendo Omron`. Es el estándar en scripts de monitorización industrial."
      },
      {
        pregunta: "¿Qué ocurre si se llama `client.write_register(address=0, value=70000, device_id=1)` en un variador que solo acepta valores de 0 a 6000 en ese registro?",
        opciones: [
        "Python lanza un OverflowError antes de enviar la trama porque 70000 no cabe en 16 bits",
        "El variador devuelve una excepción Modbus 0x03 (Illegal Data Value)",
        "El variador trunca el valor a 6000 automáticamente",
        "La trama se envía y el variador la ignora silenciosamente"
        ],
        correcta: 0,
        explicacion: "Justificación: Un holding register Modbus es un entero sin signo de 16 bits (0–65535). El valor 70000 supera 65535, por lo que pymodbus lanzará un error antes de enviar la trama (el valor no cabe en los 2 bytes del campo de datos de la PDU). Si el valor estuviera dentro del rango Modbus (0–65535) pero fuera del rango válido del variador (0–6000), entonces sería el variador quien respondería con excepción 0x03."
      },
      {
        pregunta: "¿Cuál es la diferencia entre un error de timeout y una excepción Modbus en pymodbus?",
        opciones: [
        "Son equivalentes; pymodbus los trata de la misma forma",
        "Timeout: el esclavo no responde en el tiempo configurado (sin trama de respuesta); excepción Modbus: el esclavo responde con una trama de error (código función | 0x80 + código de excepción)",
        "Timeout ocurre solo en Modbus TCP; las excepciones solo en Modbus RTU",
        "Timeout es error del cliente; excepción Modbus es error del servidor"
        ],
        correcta: 1,
        explicacion: "Justificación: Un timeout ocurre cuando el esclavo no envía ninguna respuesta en el tiempo configurado (dispositivo apagado, cable roto, dirección incorrecta). Una excepción Modbus es una respuesta válida del esclavo que indica que no puede procesar la petición (función no soportada, dirección inválida, valor fuera de rango). En `isError()` ambos devuelven True, pero son objetos de error distintos que se pueden distinguir con `isinstance()` para tomar acciones diferentes."
      },
      {
        pregunta: "¿Qué hace el bloque `finally` en un `try/except/finally` en el contexto de un script Modbus?",
        opciones: [
        "Se ejecuta solo si no hay excepciones",
        "Se ejecuta solo si hay una excepción",
        "Se ejecuta siempre, tanto si hay excepción como si no, lo que garantiza el cierre de la conexión",
        "Es equivalente a `else` y se ejecuta cuando el `try` tiene éxito"
        ],
        correcta: 2,
        explicacion: "Justificación: El bloque `finally` se ejecuta siempre: si el `try` termina normalmente, si se captura una excepción en `except`, o incluso si ocurre una excepción no capturada. En scripts Modbus se usa para garantizar que `client.close()` siempre se llama, independientemente de cómo termine el script. Esto evita conexiones huérfanas en el servidor y libera el puerto COM del adaptador serie."
      },
      {
        pregunta: "¿Qué escala habitual usa el variador Omron MX2 para el valor de corriente de salida en su registro Modbus?",
        opciones: [
        "Amperios directos (valor entero)",
        "Décimas de amperio (valor × 0,1 → A)",
        "Miliamperios (valor × 0,001 → A)",
        "Porcentaje de la corriente nominal (0–100)"
        ],
        correcta: 1,
        explicacion: "Justificación: El variador Omron MX2 expresa la corriente de salida con resolución de 0,1 A: un valor de registro de 85 corresponde a 8,5 A. Este escalado permite representar corrientes con un decimal usando un registro entero de 16 bits. Es imprescindible documentar el factor de escala en el docstring de la función de lectura y en la tabla de registros del README para que el técnico que mantenga el script aplique la conversión correcta."
      },
      {
        pregunta: "En el bucle del gateway, ¿cómo se detecta que han ocurrido 5 fallos consecutivos en el canal RTU (Omron)?",
        opciones: [
        "Con un contador que se incrementa en cada fallo RTU y se resetea a cero cuando hay éxito",
        "Con un temporizador de 5 segundos",
        "Con la variable `response.error_count` de pymodbus",
        "Comprobando el campo de estado del variador en el último registro leído"
        ],
        correcta: 0,
        explicacion: "Justificación: La lógica correcta es: `fallos_rtu += 1` en cada iteración fallida, `fallos_rtu = 0` cuando la lectura es exitosa. Si `fallos_rtu >= 5`, se detiene el bucle. Este patrón distingue fallos transitorios (1–4 fallos seguidos) de un fallo persistente que requiere intervención. pymodbus no tiene ninguna propiedad `error_count` integrada; la gestión de reintentos y contadores es responsabilidad del script del programador."
      },
      {
        pregunta: "¿Cuál es el propósito del prefijo `[RTU]` y `[TCP]` en los mensajes de log del gateway?",
        opciones: [
        "Es un requisito del protocolo Modbus para identificar el canal",
        "Permite al técnico identificar rápidamente en qué canal ocurrió cada evento al revisar el log",
        "Es requerido por la librería logging de Python",
        "Indica el nivel de prioridad del mensaje"
        ],
        correcta: 1,
        explicacion: "Justificación: En un script que gestiona simultáneamente dos canales de comunicación distintos, prefixar los mensajes con `[RTU]` o `[TCP]` permite al técnico que revisa el log de diagnóstico identificar inmediatamente en qué canal ocurrió cada evento sin necesidad de analizar el contexto. Por ejemplo: `[RTU] ERROR: Timeout leyendo Omron` frente a `[TCP] ERROR: Conexión rechazada por S7-1200`. Es una buena práctica de logging en sistemas con múltiples subsistemas."
      },
      {
        pregunta: "¿Por qué es incorrecto usar `time.sleep(0.001)` (1 ms) como intervalo en el bucle del gateway Modbus RTU?",
        opciones: [
        "Python no puede dormir menos de 1 segundo",
        "Un intervalo de 1 ms generaría ~1000 peticiones/segundo, saturando el bus RS-485 y el variador",
        "`time.sleep` no funciona dentro de bucles",
        "El variador Omron necesita exactamente 1 segundo entre peticiones"
        ],
        correcta: 1,
        explicacion: "Justificación: El bus RS-485 a 9600 bps puede manejar aproximadamente 10–20 tramas de 8 bytes por segundo. Con 1 ms de pausa el script intentaría 1000 peticiones/segundo, superando ampliamente la capacidad del bus y del variador (que tiene tiempos de respuesta de 5–50 ms). Además, el ruido acumulado en el bus a velocidades tan altas aumentaría la tasa de error. Para telemetría industrial, intervalos de 0,5–2 s son habituales."
      },
      {
        pregunta: "¿Qué significa `logging.basicConfig(level=logging.DEBUG)`?",
        opciones: [
        "Solo se registran mensajes de nivel DEBUG, ignorando el resto",
        "Se registran todos los mensajes de nivel DEBUG y superiores (INFO, WARNING, ERROR, CRITICAL)",
        "Se registran solo mensajes de nivel ERROR y superiores",
        "Activa el modo de depuración de pymodbus automáticamente"
        ],
        correcta: 1,
        explicacion: "Justificación: El nivel de logging funciona como umbral mínimo: `level=logging.DEBUG` registra todo (DEBUG, INFO, WARNING, ERROR, CRITICAL). `level=logging.INFO` registra INFO, WARNING, ERROR y CRITICAL, pero no DEBUG. Durante el desarrollo se usa DEBUG para ver toda la actividad; en producción se sube a INFO o WARNING para reducir el volumen de logs. `logging.basicConfig` configura el logger raíz que afecta a todos los módulos, incluidos los mensajes internos de pymodbus."
      },
      {
        pregunta: "En la función de lectura del Omron, ¿qué valor debe devolver la función si `response.isError()` es True?",
        opciones: [
        "Devolver 0 (valor neutro)",
        "Devolver None o lanzar una excepción personalizada para que el llamante sepa que el dato no es válido",
        "Devolver el último valor válido leído",
        "Devolver −1 siempre"
        ],
        correcta: 1,
        explicacion: "Justificación: Devolver `None` o lanzar una excepción personalizada comunica explícitamente al llamante que no hay dato válido, forzándolo a manejar el caso de error. Devolver 0 o −1 como valor «especial» es propenso a confusión si 0 o −1 son valores válidos del proceso. Devolver el último valor válido enmascara el fallo de comunicación. La práctica correcta es separar claramente los casos «dato válido» y «dato no disponible»."
      },
      {
        pregunta: "¿Qué función de pymodbus se usa para escribir múltiples registros en una sola transacción Modbus TCP?",
        opciones: [
        "`client.write_register(address, value, device_id)`",
        "`client.write_registers(address, values, device_id)` donde `values` es una lista",
        "`client.write_multiple(address, values, device_id)`",
        "`client.write_holding_registers(address, values, device_id)`"
        ],
        correcta: 1,
        explicacion: "Justificación: `write_registers` (función Modbus 0x10, Write Multiple Registers) acepta una lista de valores enteros y los escribe en registros consecutivos a partir de `address`. Por ejemplo, `client.write_registers(0, [1450, 85, 55], device_id=1)` escribe tres registros en una sola transacción TCP, que es más eficiente que tres llamadas separadas a `write_register`. El nombre de la función en pymodbus es `write_registers` (plural), no `write_multiple`."
      },
      {
        pregunta: "¿Por qué es importante documentar el factor de escala en el código del gateway?",
        opciones: [
        "Es un requisito legal de la normativa industrial",
        "Sin documentación, otro técnico que mantenga el script puede interpretar el valor crudo como el valor real, causando errores en el sistema de control",
        "pymodbus lo requiere para funcionar correctamente",
        "TIA Portal no acepta valores sin escala"
        ],
        correcta: 1,
        explicacion: "Justificación: Si el registro del Omron devuelve 1500 y el script escribe 1500 en el S7-1200 sin documentar que representa 15,00 Hz (factor 0,01), el programador del PLC puede asumir que 1500 es directamente la frecuencia en Hz. Este malentendido podría causar un error de control de 100× en la velocidad del motor. El factor de escala debe documentarse en el docstring de la función y en la tabla de registros del README."
      },
      {
        pregunta: "En pymodbus, ¿cuál es la diferencia entre `ModbusException` y `ModbusIOException`?",
        opciones: [
        "Son sinónimos; pymodbus usa ambos nombres indistintamente",
        "`ModbusException` cubre errores del protocolo (excepciones enviadas por el esclavo); `ModbusIOException` cubre errores de comunicación (timeout, socket roto)",
        "`ModbusIOException` es para Modbus RTU; `ModbusException` es para Modbus TCP",
        "`ModbusException` es la clase base; `ModbusIOException` es para errores de valor fuera de rango"
        ],
        correcta: 1,
        explicacion: "Justificación: `ModbusException` (y sus subclases como `ModbusInvalidResponseError`) se genera cuando el esclavo envía una respuesta válida pero con código de excepción (la función tiene el bit 7 activado). `ModbusIOException` se genera cuando hay un problema en la transmisión: timeout, error de CRC, socket cerrado, puerto COM no disponible. Distinguirlos permite actuar diferente: un `ModbusIOException` puede requerir reconexión; un `ModbusException` 0x02 puede indicar que hay que revisar las direcciones de registro."
      },
      {
        pregunta: "¿Qué ventaja tiene usar `with ModbusTcpClient(host) as client:` frente a `client = ModbusTcpClient(host); client.connect()`?",
        opciones: [
        "El gestor de contexto es más rápido porque usa conexión UDP",
        "El gestor de contexto garantiza que `client.close()` se llamará aunque ocurra una excepción, evitando fugas de conexión",
        "El gestor de contexto permite múltiples conexiones simultáneas",
        "`with` solo está disponible en pymodbus >= 3.0"
        ],
        correcta: 1,
        explicacion: "Justificación: El gestor de contexto (`with`) llama automáticamente a `__enter__` (que hace `connect()`) al entrar y a `__exit__` (que hace `close()`) al salir, tanto en terminación normal como por excepción. Si se usa `client.connect()` directamente y el script lanza una excepción no capturada, `client.close()` nunca se ejecuta, dejando el socket abierto. El gestor de contexto es la forma idiomática y segura de usar recursos que necesitan limpieza garantizada."
      },
      {
        pregunta: "¿Cuál es la consecuencia práctica de no manejar el error cuando `response.isError()` devuelve True y el script intenta acceder a `response.registers[0]`?",
        opciones: [
        "pymodbus devuelve 0 automáticamente",
        "El script lanza un `AttributeError` porque el objeto de error no tiene el atributo `registers`",
        "El script continúa con el último valor válido",
        "Python muestra un warning pero continúa"
        ],
        correcta: 1,
        explicacion: "Justificación: Cuando hay un error, pymodbus devuelve un objeto de clase `ModbusIOException` o similar, no un objeto de respuesta normal. Estos objetos de error no tienen el atributo `registers`. Al intentar `response.registers[0]` se obtiene `AttributeError: &#x27;ExceptionResponse&#x27; object has no attribute &#x27;registers&#x27;`. Este es uno de los errores más frecuentes en los scripts de los alumnos y la razón por la que la comprobación `if response.isError():` es obligatoria."
      },
    ]
  },
  {
    id: "ra2_e",
    nombre: "RA2.e — Diagnóstico y resolución de problemas en redes industriales",
    preguntas: [
      {
        pregunta: "Según PEP 257, ¿cómo debe escribirse un docstring de una sola línea?",
        opciones: [
        "`# Descripción breve de la función`",
        "`\"\"\"Descripción breve.\"\"\"` en la misma línea o con las comillas de cierre en la misma línea",
        "`\"\"\"Descripción breve.\\n\"\"\"`",
        "`/* Descripción breve */`"
        ],
        correcta: 1,
        explicacion: "Justificación: PEP 257 especifica que los docstrings de una línea deben usar triple comilla (`\"\"\"...\"\"\"`), con la descripción y las comillas de cierre en la misma línea. Por ejemplo: `\"\"\"Lee los registros Modbus del variador.\"\"\"`. Los comentarios `#` no son docstrings (no son accesibles vía `help()` ni por herramientas de documentación). PEP 257 forma parte de las convenciones de estilo de Python que todo programador profesional debe conocer."
      },
      {
        pregunta: "¿Cuál es la diferencia entre un docstring y un comentario en Python?",
        opciones: [
        "No hay diferencia; ambos se ignoran en tiempo de ejecución",
        "Un docstring (`\"\"\"...\"\"\"`) queda almacenado como `__doc__` de la función/clase/módulo y es accesible en tiempo de ejecución; un comentario (`#`) se descarta en el parseo",
        "Los docstrings solo funcionan en métodos de clase; los comentarios pueden usarse en cualquier lugar",
        "Los comentarios son más lentos porque Python los procesa en cada ejecución"
        ],
        correcta: 1,
        explicacion: "Justificación: Python almacena el docstring de una función en el atributo `__doc__`, accesible con `help(funcion)` o `funcion.__doc__`. Herramientas como Sphinx, pydoc o los IDEs lo usan para generar documentación automática. Los comentarios `#` se descartan durante el análisis léxico y no están disponibles en tiempo de ejecución. En entornos industriales donde los scripts se mantienen durante años, los docstrings son esenciales para que otros técnicos entiendan qué hace cada función."
      },
      {
        pregunta: "¿Qué secciones mínimas debe tener el docstring de una función de comunicación industrial según la plantilla del entregable ENT2?",
        opciones: [
        "Solo la descripción en una línea",
        "Descripción, protocolo usado, Args, Returns y Raises",
        "Descripción, versión y autor",
        "Descripción y ejemplos de uso"
        ],
        correcta: 1,
        explicacion: "Justificación: La plantilla de ENT2 requiere: descripción breve de la función, identificación del protocolo (Modbus TCP función 0x03, OPC UA, etc.), sección `Args` con los parámetros, sección `Returns` con el valor devuelto y su tipo, y sección `Raises` con las excepciones posibles. Esta estructura permite a un técnico que mantiene el script saber qué hace, cómo llamarla, qué esperar como resultado y qué errores manejar, sin necesidad de leer el código."
      },
      {
        pregunta: "¿Por qué es importante indicar el número de función Modbus en el docstring de una función de lectura de registros?",
        opciones: [
        "Python lo requiere para resolver los imports correctamente",
        "Permite al técnico de mantenimiento relacionar el código Python con la documentación del protocolo y el log de Wireshark sin leer la implementación",
        "Evita que el script use accidentalmente la función incorrecta",
        "Es un requisito de licencia de pymodbus"
        ],
        correcta: 1,
        explicacion: "Justificación: Cuando un técnico ve en el log de Wireshark la función `0x03` y en el código llama a `read_holding_registers`, relacionar ambos es inmediato si el docstring dice «Protocolo: Modbus TCP, función 0x03». Sin esa anotación, el técnico tendría que abrir la documentación de pymodbus para saber qué función Modbus genera `read_holding_registers`. En contextos de diagnóstico bajo presión (una avería de madrugada), esa información directa en el docstring es muy valiosa."
      },
      {
        pregunta: "¿Qué información debe incluir la sección «Configuración» del README del entregable ENT2?",
        opciones: [
        "El historial de versiones del script",
        "Las constantes que el usuario debe editar antes de ejecutar: IPs, puertos COM, NodeIds y cualquier parámetro específico del entorno",
        "El algoritmo de comunicación explicado paso a paso",
        "Los resultados de los tests unitarios"
        ],
        correcta: 1,
        explicacion: "Justificación: La sección «Configuración» del README describe qué hay que cambiar en el código antes de ejecutarlo en un entorno concreto: la IP del S7-1200, el puerto COM del adaptador USB-RS485, los NodeIds OPC UA del servidor, el baudrate del Omron. Estas constantes se definen al inicio del script y son las primeras cosas que un técnico que instala el script en un nuevo entorno necesita identificar. Sin esta sección, la puesta en marcha de un nuevo puesto requiere revisar todo el código."
      },
      {
        pregunta: "¿Cuándo es apropiado usar un comentario de línea (`#`) en lugar de ampliar el docstring?",
        opciones: [
        "Nunca; toda la documentación debe estar en el docstring",
        "Para explicar el porqué de una decisión de implementación no obvia o un valor mágico concreto dentro del código de la función",
        "Para documentar los parámetros de entrada de la función",
        "Para listar las excepciones que puede lanzar la función"
        ],
        correcta: 1,
        explicacion: "Justificación: Los docstrings documentan el contrato de la función (qué hace, qué recibe, qué devuelve). Los comentarios inline explican el porqué de decisiones concretas dentro del cuerpo de la función: `# 3,5 caracteres a 9600 bps = 3,65 ms — espera mínima Modbus RTU` o `# Registros base-0: address=0 → registro 40001 en notación Modbus`. Los parámetros, retornos y excepciones siempre van en el docstring, no en comentarios inline."
      },
      {
        pregunta: "¿Qué debe incluir la sección «Solución de problemas» del README según el enunciado de ENT2?",
        opciones: [
        "Los tests unitarios del script con sus resultados",
        "Al menos 3 errores frecuentes con su mensaje exacto, causa probable y solución",
        "El diagrama de flujo del programa",
        "La bibliografía consultada para desarrollar el script"
        ],
        correcta: 1,
        explicacion: "Justificación: La sección «Solución de problemas» del README recoge los errores más habituales que un técnico puede encontrar al instalar o ejecutar el script: `ConnectionRefusedError: [Errno 111]` → «El PLC no está encendido o la IP es incorrecta»; `serial.SerialException: could not open port COM3` → «El adaptador USB-RS485 no está conectado o el puerto COM es incorrecto». Esta sección reduce drásticamente el tiempo de diagnóstico en la primera instalación."
      },
      {
        pregunta: "¿Qué formato de fecha y hora es más adecuado para los mensajes de log en un script industrial?",
        opciones: [
        "Timestamp Unix (segundos desde 1970) sin formato legible",
        "ISO 8601: `YYYY-MM-DD HH:MM:SS` (por ejemplo, `2026-10-15 14:32:01`)",
        "Formato europeo: `DD/MM/YYYY HH:MM`",
        "Solo la hora sin la fecha: `HH:MM:SS`"
        ],
        correcta: 1,
        explicacion: "Justificación: El formato ISO 8601 (`YYYY-MM-DD HH:MM:SS`) es el estándar internacional, ordena cronológicamente de forma natural (año-mes-día), es inequívoco (no hay ambigüedad entre día y mes) y es parseable por herramientas de análisis de logs. En industria, los logs son fundamentales para auditorías y diagnóstico; un formato consistente y sin ambigüedades facilita correlacionar eventos entre sistemas. `logging.basicConfig(format=&#x27;%(asctime)s ...&#x27;)` produce este formato por defecto."
      },
      {
        pregunta: "¿Por qué el apartado «Problemas encontrados» del informe de ENT2 es obligatorio incluso si todo funcionó a la primera?",
        opciones: [
        "Es solo un requisito burocrático sin valor formativo",
        "Porque documentar las dificultades (aunque sean menores) demuestra comprensión real del proceso; si no hubo problemas, se debe documentar al menos una duda resuelta",
        "Para penalizar a los alumnos que no tuvieron dificultades",
        "Porque el profesor necesita esa información para la nota de la prueba escrita"
        ],
        correcta: 1,
        explicacion: "Justificación: El apartado «Problemas encontrados» evalúa la comprensión real del proceso: un alumno que entiende lo que hace sabe qué podría haber fallado y por qué no falló. Un informe que dice «todo funcionó perfectamente sin ningún problema» no aporta evidencia de comprensión. Documentar dudas resueltas («¿por qué base-0 en pymodbus si la norma dice 40001?») es tan válido como un error real, y demuestra pensamiento crítico sobre el proceso."
      },
      {
        pregunta: "¿Qué debe incluir un docstring de módulo (el docstring al inicio del fichero `.py`)?",
        opciones: [
        "Solo el nombre del archivo",
        "Descripción del propósito del módulo, protocolos usados, equipos con los que se comunica, autor y fecha",
        "La lista completa de todas las funciones del módulo con sus parámetros",
        "Los imports necesarios para ejecutar el módulo"
        ],
        correcta: 1,
        explicacion: "Justificación: El docstring de módulo, que aparece como primera sentencia del fichero `.py`, describe el propósito global del script: qué hace, con qué equipos y protocolos se comunica, quién lo escribió y cuándo. Por ejemplo: `\"\"\"Gateway Modbus RTU (Omron MX2) ↔ Modbus TCP (S7-1200). Protocolo: pymodbus 3.x. Autor: [Alumno]. Fecha: 2026-10-21.\"\"\"`. Es lo primero que ve quien abre el fichero y le permite decidir si es el script que busca sin leer el código."
      },
      {
        pregunta: "¿Qué convención de nombres usa Python para las constantes de configuración al inicio de un script?",
        opciones: [
        "camelCase: `serverIp`, `comPort`",
        "UPPER_SNAKE_CASE: `SERVER_IP`, `COM_PORT`",
        "lowercase: `server_ip`, `com_port` (igual que las variables normales)",
        "PascalCase: `ServerIp`, `ComPort`"
        ],
        correcta: 1,
        explicacion: "Justificación: PEP 8 (guía de estilo de Python) indica que las constantes deben nombrarse en UPPER_SNAKE_CASE: `SERVER_IP = &#x27;192.168.0.1&#x27;`, `COM_PORT = &#x27;COM3&#x27;`, `MAX_REINTENTOS = 3`. Esta convención permite al técnico que configura el script identificar de un vistazo al inicio del fichero todas las constantes que debe editar, diferenciándolas de las variables locales en minúsculas y de las clases en PascalCase."
      },
      {
        pregunta: "¿Qué sección del README describe cómo instalar las dependencias del script?",
        opciones: [
        "«Configuración»",
        "«Instalación»",
        "«Uso»",
        "«Descripción»"
        ],
        correcta: 1,
        explicacion: "Justificación: La sección «Instalación» del README incluye los comandos exactos para crear el entorno virtual y instalar las librerías: `python -m venv venv`, `venv\\Scripts\\activate` (Windows) o `source venv/bin/activate` (Linux), `pip install pymodbus pyserial asyncua`. En ENT2 se pide incluir versiones específicas para garantizar reproducibilidad: `pip install pymodbus==3.5.2`. Un técnico que instala el script en un nuevo PC necesita esta sección para el primer arranque."
      },
      {
        pregunta: "¿Cuál es el propósito del fichero `requirements.txt` junto al script Python?",
        opciones: [
        "Documenta los requisitos hardware del sistema",
        "Lista las dependencias Python con sus versiones exactas, permitiendo instalarlas con `pip install -r requirements.txt`",
        "Es el README en formato alternativo",
        "Contiene los parámetros de configuración del script"
        ],
        correcta: 1,
        explicacion: "Justificación: `requirements.txt` es el estándar de Python para declarar dependencias. Contiene líneas como `pymodbus==3.5.2`, `pyserial==3.5`, `asyncua==1.0.6`. El comando `pip install -r requirements.txt` instala todas las dependencias con exactamente las versiones especificadas, garantizando que el entorno del técnico que despliega el script sea idéntico al del desarrollador. En ENT2 se pide incluirlo junto al código en el ZIP."
      },
      {
        pregunta: "¿Qué debe mostrar la sección «Uso» del README como mínimo?",
        opciones: [
        "El código fuente completo del script",
        "El comando exacto de ejecución y un ejemplo de la salida por consola que el usuario puede esperar ver",
        "La URL de la documentación oficial de pymodbus",
        "El diagrama de bloques del sistema de comunicación"
        ],
        correcta: 1,
        explicacion: "Justificación: La sección «Uso» del README debe incluir el comando exacto: `python modbus_tcp.py` (o `python gateway_omron_s71200.py`), y un ejemplo de salida: `2026-10-15 14:32:01 - INFO - [TCP] MW0: 1450 MW2: 85 MW4: 55`. Esto permite al técnico verificar que el script funciona correctamente comparando la salida real con la esperada. Sin el ejemplo de salida, el usuario no sabe si lo que ve en consola es correcto o un error silencioso."
      },
      {
        pregunta: "En el docstring del gateway, ¿cómo se documenta correctamente la tabla de registros del Omron?",
        opciones: [
        "En un comentario `#` al inicio del fichero",
        "Como una tabla en el docstring del módulo o de la función principal, indicando dirección Modbus, función, descripción, factor de escala y registro S7-1200 destino",
        "En un fichero Excel separado adjunto al ZIP",
        "Verbalmente en el informe PDF sin incluirlo en el código"
        ],
        correcta: 1,
        explicacion: "Justificación: La tabla de registros debe estar en el propio código para que sea consultable sin abrir documentación externa. El enunciado de ENT2 pide incluirla como comentario de módulo o docstring. Una tabla markdown en el docstring es perfectamente válida en Python y herramientas como Sphinx la renderizarán en HTML. La tabla en el código garantiza que si el código se mueve a otro servidor o se desvincula del informe PDF, la información de mapeo de registros siempre esté disponible."
      },
      {
        pregunta: "¿Por qué los scripts deben ejecutarse sin modificaciones en el entorno del aula según los criterios de ENT2?",
        opciones: [
        "Es un requisito del sistema operativo Windows",
        "Garantiza que el script está completo y autocontenido: todas las dependencias están declaradas y los parámetros de configuración son correctos para el hardware del aula",
        "Evita que el profesor necesite instalar librerías adicionales",
        "Es una limitación técnica de TIA Portal"
        ],
        correcta: 1,
        explicacion: "Justificación: Un script que «funciona en mi PC» pero requiere modificaciones en el PC del profesor indica que hay parámetros hardcodeados incorrectamente, dependencias no declaradas o paths absolutos específicos del entorno del alumno. El criterio de «ejecutarse sin modificaciones» verifica que el alumno ha considerado la portabilidad: constantes configurables al inicio, dependencias en requirements.txt, paths relativos o parametrizables. Es exactamente lo que se exigiría a un script de producción industrial."
      },
      {
        pregunta: "¿Qué información mínima debe incluir la sección «Descripción» del README de ENT2?",
        opciones: [
        "Solo el nombre del script",
        "Qué hace el script, entre qué equipos se comunica, qué protocolo usa y qué datos transfiere",
        "El historial de cambios del script",
        "Los errores conocidos sin resolver"
        ],
        correcta: 1,
        explicacion: "Justificación: La sección «Descripción» es el primer contacto de un técnico con el README. Debe responder cuatro preguntas en pocas líneas: ¿qué hace este script? (lee registros del variador y los escribe en el PLC), ¿entre qué equipos? (Omron MX2 y S7-1200), ¿con qué protocolo? (Modbus RTU y TCP), ¿qué datos mueve? (velocidad, corriente y estado del variador). Con esa información el técnico puede decidir si es el script que busca sin leer el código ni el resto del README."
      },
      {
        pregunta: "En la práctica de OPC UA, ¿qué información sobre el nodo se debe incluir en el docstring de la función que lo escribe?",
        opciones: [
        "Solo el nombre de la variable en el PLC",
        "El NodeId completo (`ns=X;i=Y`), el tipo de dato OPC UA (por ejemplo, `Float`, `Int16`), el rango válido y el DB de TIA Portal donde está mapeado",
        "Solo el tipo de dato Python del valor",
        "El certificado de seguridad del servidor OPC UA"
        ],
        correcta: 1,
        explicacion: "Justificación: Un NodeId OPC UA (`ns=3;i=1001`) no es intuitivo sin contexto. El docstring debe decir qué variable representa (`DB_Control.Setpoint_Hz`), su tipo OPC UA (`Float` de 32 bits), su rango válido (0.0–60.0 Hz) y dónde está en TIA Portal (DB3.DBD0 o similar). Sin esta documentación, otro técnico que mantenga el script tendría que conectar UA Expert al PLC para averiguar a qué variable corresponde el NodeId, perdiendo tiempo valioso en diagnóstico."
      },
      {
        pregunta: "¿Cuál es la diferencia entre la sección «Análisis del protocolo» y la sección «Procedimiento seguido» en el informe de cada tarea?",
        opciones: [
        "Son la misma sección con nombres distintos",
        "«Procedimiento» describe los pasos realizados; «Análisis del protocolo» identifica y explica los campos clave de la trama capturada en Wireshark",
        "«Análisis del protocolo» es opcional; «Procedimiento» es obligatorio",
        "«Análisis del protocolo» describe la instalación del software; «Procedimiento» describe la comunicación"
        ],
        correcta: 1,
        explicacion: "Justificación: El «Procedimiento» es narrativo: qué se hizo, en qué orden, con qué comandos. El «Análisis del protocolo» es técnico: a partir de la captura Wireshark, identifica nombre y valor de cada campo clave (Transaction ID = 0x0001, Protocol ID = 0x0000, Length = 6, Unit ID = 0x01, Function Code = 0x03). Esta distinción es deliberada: el procedimiento evalúa que el alumno siguió los pasos; el análisis evalúa que el alumno entiende lo que ocurrió a nivel de protocolo."
      },
      {
        pregunta: "¿Por qué las capturas Wireshark del informe deben estar anotadas con flechas o recuadros sobre la imagen?",
        opciones: [
        "Es un requisito estético sin valor técnico",
        "Las anotaciones demuestran que el alumno ha identificado correctamente los campos del protocolo y no se ha limitado a pegar una captura genérica sin interpretarla",
        "TIA Portal requiere capturas anotadas para la documentación oficial",
        "Las capturas sin anotar no se visualizan correctamente en el PDF"
        ],
        correcta: 1,
        explicacion: "Justificación: Una captura de Wireshark sin anotar podría provenir de cualquier fuente o haberse copiado de internet. Las anotaciones (flechas que señalan «Transaction ID: 0x0003», recuadros alrededor del campo «Function Code: 0x03») demuestran que el alumno ha abierto el fichero, encontrado la trama correcta y sido capaz de identificar cada campo. Es la evidencia de comprensión que diferencia un informe de calidad de uno que solo ha pegado imágenes."
      },
      {
        pregunta: "Según ENT2, ¿qué criterio distingue un informe de nivel «Notable» de uno de nivel «Suficiente» en la tarea T1 (Modbus TCP)?",
        opciones: [
        "La extensión del informe: notable > 5 páginas, suficiente < 5 páginas",
        "El notable tiene Wireshark con MBAP + PDU anotados, manejo de ≥3 excepciones documentado y análisis del protocolo correcto; el suficiente describe el procedimiento con capturas de consola",
        "El notable usa Python 3.11 en lugar de Python 3.9",
        "El notable incluye reintentos automáticos; el suficiente no"
        ],
        correcta: 1,
        explicacion: "Justificación: Según la rúbrica de ENT2: suficiente = script funciona + informe describe el procedimiento + Wireshark capturado; notable = Wireshark con MBAP + PDU anotados + manejo de ≥3 excepciones documentado + análisis correcto del protocolo. La diferencia es la profundidad del análisis técnico: el suficiente muestra que hizo la práctica; el notable muestra que entiende lo que hace."
      },
      {
        pregunta: "¿Qué ventaja tiene separar las funciones de lectura y escritura del bucle principal en el script de Modbus TCP?",
        opciones: [
        "Python ejecuta las funciones separadas más rápido",
        "Permite reutilizar las funciones en otros scripts, facilita los tests unitarios y hace el código más legible y mantenible",
        "Es un requisito de pymodbus para scripts de más de 50 líneas",
        "Reduce el número de conexiones TCP necesarias"
        ],
        correcta: 1,
        explicacion: "Justificación: Separar lectura, escritura y bucle principal en funciones independientes aporta varias ventajas: reutilización (la función de lectura puede usarse en otro script sin copiar todo el código), testabilidad (se pueden escribir tests unitarios para cada función por separado), legibilidad (el bucle principal queda corto y claro) y mantenibilidad (modificar el formato de salida no requiere cambiar la lógica de lectura). ENT2 valora explícitamente esta separación con docstrings completos en cada función."
      },
      {
        pregunta: "En el análisis de la captura Wireshark de Modbus TCP, ¿por qué Modbus TCP no necesita CRC a diferencia de Modbus RTU?",
        opciones: [
        "Porque Modbus TCP usa detección de errores por paridad en lugar de CRC",
        "Porque TCP/IP incluye checksum en la cabecera TCP e IP que garantiza la integridad del payload, haciendo redundante el CRC Modbus",
        "Porque en redes Ethernet no hay ruido electromagnético",
        "Porque el MBAP header incluye un campo de verificación de integridad propio"
        ],
        correcta: 1,
        explicacion: "Justificación: TCP calcula un checksum de 16 bits sobre la cabecera TCP, los datos y una pseudo-cabecera IP. Si el checksum no coincide, el segmento se descarta y TCP solicita la retransmisión automáticamente. Esta garantía de integridad del stack TCP/IP hace innecesario el CRC-16 de Modbus. En RS-485, al no haber protocolo de transporte subyacente, el CRC-16 es la única protección contra errores de transmisión."
      },
      {
        pregunta: "¿Qué debe responder el informe de la tarea T3 sobre la ventaja de OPC UA frente a Modbus TCP en cuanto a «semántica»?",
        opciones: [
        "OPC UA es más rápido porque usa menos bytes por trama",
        "OPC UA incluye metadatos en el modelo de información (nombre, tipo, unidades, rango, descripción) que permiten al cliente entender el significado del dato sin documentación externa",
        "OPC UA permite más dispositivos en el mismo servidor",
        "OPC UA no requiere drivers específicos del fabricante"
        ],
        correcta: 1,
        explicacion: "Justificación: En Modbus TCP, el cliente solo ve un número de registro (40001) y un valor entero (1500) sin ninguna información sobre qué representa ni sus unidades. En OPC UA, cada nodo tiene nombre (`Velocidad_Hz`), tipo de dato (`Float`), descripción textual, unidades de ingeniería (`Hz`) y rangos válidos. El cliente OPC UA puede descubrir y entender los datos sin documentación externa, lo que facilita la integración vertical en sistemas SCADA/MES. Esta semántica embebida es la principal ventaja arquitectónica de OPC UA."
      },
      {
        pregunta: "¿Cómo debe documentarse en el README el ejemplo de salida del gateway cuando se produce un error RTU?",
        opciones: [
        "No es necesario documentar los casos de error en el README",
        "Con un ejemplo concreto del mensaje de log: `2026-10-15 14:33:00 - ERROR - [RTU] Timeout leyendo Omron (intento 1/3)` y la acción resultante",
        "Con un diagrama de estados del script",
        "Indicando solo que «el script gestiona errores automáticamente»"
        ],
        correcta: 1,
        explicacion: "Justificación: Un ejemplo concreto de mensaje de error en el README permite al técnico que opera el sistema reconocer inmediatamente cuándo y por qué está ocurriendo un error, comparando el log real con el documentado. «El script gestiona errores automáticamente» no aporta información útil. El ejemplo debe incluir el timestamp, el nivel de log, el canal, la descripción del error y el intento de reintento para ser operativamente útil."
      },
      {
        pregunta: "¿Qué sección de la rúbrica de ENT2 diferencia el nivel «Excelente» del «Notable» en la tarea T2 (gateway)?",
        opciones: [
        "El número de líneas de código",
        "Tener Wireshark RTU + TCP emparejados verificando el mismo dato en ambos lados, valor centinela explicado y conclusión que conecta el gateway con dispositivos IIoT comerciales",
        "Haber usado asyncio en lugar del cliente síncrono",
        "Haber implementado OPC UA en lugar de Modbus TCP para el S7-1200"
        ],
        correcta: 1,
        explicacion: "Justificación: El nivel excelente en T2 requiere: (1) capturas Wireshark RTU y TCP donde se pueda verificar que el mismo valor aparece en ambas (por ejemplo, 4500 en la trama RTU del Omron y 4500 en la trama TCP de escritura al S7-1200), (2) explicación del valor centinela y su propósito, y (3) una conclusión que conecte el gateway propio con los dispositivos edge IIoT comerciales (Node-RED, MQTT brokers, gateways Ewon). Esto evalúa comprensión sistémica, no solo ejecución técnica."
      },
      {
        pregunta: "¿Por qué no se aceptan entregas por correo electrónico en ENT2 según el enunciado?",
        opciones: [
        "El servidor de correo del centro no admite ficheros ZIP",
        "Aules (Moodle) registra la fecha y hora de entrega con validez oficial, garantiza que el fichero entregado es exactamente el que el alumno subió, y centraliza todas las entregas para el profesor",
        "El correo electrónico no puede cifrar los scripts Python",
        "Es una norma del departamento sin justificación técnica"
        ],
        correcta: 1,
        explicacion: "Justificación: Aules proporciona evidencia oficial de la entrega (timestamp, usuario, fichero exacto) que es necesaria para la evaluación y para eventuales reclamaciones. El correo electrónico no tiene estas garantías: puede haber problemas de entrega silenciosa, el fichero puede modificarse antes de reenviar, y la gestión de múltiples correos con adjuntos es ineficiente para el profesor. La entrega centralizada en Aules es la norma del centro y una práctica profesional que prepara al alumno para entornos laborales con sistemas de gestión documental."
      },
      {
        pregunta: "¿Cuál es la diferencia de valor formativo entre incluir «todo funcionó perfectamente» y «encontré este error concreto y lo resolví así» en el apartado de problemas del informe?",
        opciones: [
        "No hay diferencia; ambas respuestas son igualmente válidas",
        "Describir un problema real con su solución demuestra comprensión profunda del sistema y capacidad de diagnóstico; «todo perfecto» solo demuestra que se ejecutó el procedimiento",
        "«Todo perfecto» obtiene mejor nota porque indica mayor habilidad técnica",
        "Solo importa si el script funciona, no si hubo problemas durante el desarrollo"
        ],
        correcta: 1,
        explicacion: "Justificación: Un error resuelto y documentado (por ejemplo, «el MB_SERVER devolvía Illegal Data Address hasta que desactivé el acceso optimizado del DB») muestra comprensión técnica real: el alumno identificó el síntoma, encontró la causa raíz y aplicó la solución correcta. Esto es exactamente la competencia que se evalúa en CE2.c y CE2.d. Un informe sin ningún problema puede indicar que el alumno reprodujo el procedimiento mecánicamente sin entender qué hace cada paso."
      },
      {
        pregunta: "¿Qué captura de pantalla es indispensable en el informe de T3 para acreditar que la escritura OPC UA llegó al PLC?",
        opciones: [
        "La consola Python mostrando que `set_value` no lanzó excepción",
        "Una captura de TIA Portal (watch table o DB online) mostrando el valor de la variable exactamente después de la escritura desde Python",
        "La captura Wireshark con el WriteRequest OPC UA",
        "Una foto del PLC con el LED verde encendido"
        ],
        correcta: 1,
        explicacion: "Justificación: El hecho de que Python no lance excepción al hacer `set_value` no garantiza que el valor llegó al PLC correctamente (puede haber un error de permisos silencioso, o la variable puede estar mapeada a otro nodo). La captura de la Watch Table de TIA Portal, tomada inmediatamente después de la escritura Python, es la evidencia definitiva: muestra el valor actual de la variable en el PLC en tiempo real, confirming el ciclo completo Python → OPC UA → S7-1200."
      },
      {
        pregunta: "¿Cuál es el objetivo final del criterio «Un técnico que no estuvo en clase debe poder reproducir tu comunicación leyendo tu informe»?",
        opciones: [
        "Asegurarse de que el informe sea suficientemente largo",
        "Evaluar que la documentación tiene la precisión y completitud propias de un documento técnico profesional de mantenimiento industrial",
        "Verificar que el alumno ha usado el procesador de texto correctamente",
        "Garantizar que otros alumnos puedan copiar el trabajo"
        ],
        correcta: 1,
        explicacion: "Justificación: En entornos industriales reales, los scripts de comunicación deben poder ser mantenidos por técnicos distintos al autor original, a veces años después de creados. Un documento que solo el autor entiende carece de valor profesional. El criterio «reproducible por un tercero» mide exactamente la calidad de documentación que se exige en mantenimiento industrial: procedimiento claro, parámetros de configuración explícitos, errores conocidos documentados y análisis técnico del protocolo que permita diagnosticar problemas futuros."
      },
    ]
  },
];
