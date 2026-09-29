const TEMAS = [
  {
    id: "modbus",
    nombre: "Modbus",
    preguntas: [
      {
        pregunta: "¿Cuál es la función Modbus utilizada para leer registros holding?",
        opciones: ["FC01", "FC03", "FC05", "FC16"],
        correcta: 1,
        explicacion: "La función FC03 (Function Code 03) se usa para leer registros holding (Read Holding Registers), que son los registros de lectura/escritura más comunes en Modbus."
      },
      {
        pregunta: "¿Cuántos dispositivos esclavos puede tener como máximo una red Modbus RTU sobre RS-485?",
        opciones: ["16", "32", "247", "512"],
        correcta: 2,
        explicacion: "Modbus RTU permite hasta 247 esclavos (direcciones 1-247). La dirección 0 es broadcast y las 248-255 están reservadas."
      },
      {
        pregunta: "En Modbus RTU, ¿qué mecanismo de detección de errores se utiliza?",
        opciones: ["Paridad par", "Checksum LRC", "CRC-16", "CRC-32"],
        correcta: 2,
        explicacion: "Modbus RTU usa CRC-16 (Cyclic Redundancy Check de 16 bits). Modbus ASCII usa LRC. El CRC proporciona mayor robustez frente a errores de transmisión."
      },
      {
        pregunta: "¿Qué tipo de topología usa Modbus RTU sobre RS-485?",
        opciones: ["Estrella", "Bus (línea)", "Anillo", "Malla"],
        correcta: 1,
        explicacion: "Modbus RTU sobre RS-485 usa topología bus (línea). Todos los dispositivos comparten el mismo par de cables con resistencias de terminación en cada extremo."
      },
      {
        pregunta: "La función FC06 de Modbus sirve para:",
        opciones: ["Leer un registro holding", "Escribir un único registro holding", "Escribir múltiples registros holding", "Leer entradas analógicas"],
        correcta: 1,
        explicacion: "FC06 (Write Single Register) escribe un único registro holding. Para escribir múltiples registros se usa FC16 (Write Multiple Registers)."
      },
      {
        pregunta: "¿Cuál es la velocidad de transmisión más común en Modbus RTU para entornos industriales?",
        opciones: ["1200 bps", "9600 bps", "115200 bps", "1 Mbps"],
        correcta: 1,
        explicacion: "9600 bps es la velocidad más habitual en Modbus RTU, aunque también se usan 19200 y 38400 bps. A mayor velocidad, mayor susceptibilidad a interferencias en cables largos."
      },
      {
        pregunta: "En Modbus, las 'Discrete Inputs' (entradas discretas) corresponden a:",
        opciones: ["Valores analógicos de solo lectura", "Bits de solo lectura (entradas digitales)", "Bits de lectura/escritura", "Registros de 16 bits"],
        correcta: 1,
        explicacion: "Las Discrete Inputs son bits de solo lectura que representan entradas digitales del dispositivo (sensores, etc.). Se leen con FC02."
      },
      {
        pregunta: "¿Qué diferencia principal existe entre Modbus RTU y Modbus ASCII?",
        opciones: [
          "RTU usa más velocidad; ASCII más dispositivos",
          "RTU transmite datos en binario; ASCII en caracteres hexadecimales legibles",
          "RTU usa RS-232; ASCII usa RS-485",
          "RTU es más moderno que ASCII"
        ],
        correcta: 1,
        explicacion: "RTU codifica los datos en binario (más eficiente, mayor velocidad efectiva). ASCII los codifica como caracteres hexadecimales (menos eficiente pero más fácil de depurar con un terminal serie)."
      },
      {
        pregunta: "¿Qué puerto TCP usa Modbus TCP/IP por defecto?",
        opciones: ["80", "443", "502", "1024"],
        correcta: 2,
        explicacion: "Modbus TCP/IP usa el puerto 502 por defecto. Encapsula el mensaje Modbus en un paquete TCP eliminando el CRC (ya que TCP/IP tiene su propio control de errores)."
      },
      {
        pregunta: "En Modbus TCP, ¿qué campo del MBAP Header identifica la transacción?",
        opciones: ["Unit Identifier", "Transaction Identifier", "Protocol Identifier", "Length Field"],
        correcta: 1,
        explicacion: "El Transaction Identifier (2 bytes) identifica de forma única cada transacción, permitiendo asociar respuestas con peticiones en comunicaciones simultáneas."
      }
    ]
  },
  {
    id: "profibus",
    nombre: "PROFIBUS",
    preguntas: [
      {
        pregunta: "¿Qué significa el acrónimo PROFIBUS?",
        opciones: [
          "Process Field Industrial Bus",
          "Programmable Field Bus System",
          "Process Field Bus",
          "Professional Industrial Bus"
        ],
        correcta: 2,
        explicacion: "PROFIBUS son las siglas de Process Field Bus, un estándar de bus de campo industrial desarrollado en Alemania a finales de los 80 y normalizado en IEC 61158."
      },
      {
        pregunta: "¿Cuál es la velocidad máxima de PROFIBUS-DP?",
        opciones: ["93,75 Kbps", "1,5 Mbps", "12 Mbps", "100 Mbps"],
        correcta: 2,
        explicacion: "PROFIBUS-DP puede alcanzar hasta 12 Mbps, aunque la velocidad depende de la longitud del bus. A 12 Mbps la longitud máxima del segmento es 100 m."
      },
      {
        pregunta: "En PROFIBUS, ¿qué tipo de medio físico se usa principalmente?",
        opciones: ["Par trenzado RS-485", "Fibra óptica", "Cable coaxial", "Par sin apantallar"],
        correcta: 0,
        explicacion: "PROFIBUS usa principalmente par trenzado apantallado RS-485 (tipo A). También puede usarse fibra óptica para distancias mayores o entornos con mucha interferencia."
      },
      {
        pregunta: "¿Cuántos dispositivos máximo permite PROFIBUS en un segmento sin repetidores?",
        opciones: ["16", "32", "64", "128"],
        correcta: 1,
        explicacion: "Un segmento PROFIBUS admite hasta 32 dispositivos (nodos). Con repetidores se pueden conectar hasta 126 dispositivos en total."
      },
      {
        pregunta: "PROFIBUS-DP está diseñado principalmente para:",
        opciones: [
          "Comunicación entre PLCs y sistemas SCADA",
          "Comunicación rápida entre PLCs y dispositivos de campo (sensores/actuadores)",
          "Comunicación de seguridad (Safety)",
          "Redes de oficina industrial"
        ],
        correcta: 1,
        explicacion: "PROFIBUS-DP (Decentralized Periphery) está optimizado para comunicación rápida y cíclica entre un maestro (PLC/DCS) y dispositivos de campo descentralizados como variadores, I/O remotas, etc."
      },
      {
        pregunta: "¿Qué perfil PROFIBUS se usa para aplicaciones de seguridad funcional (SIL)?",
        opciones: ["PROFIBUS-PA", "PROFIBUS-FMS", "PROFIsafe", "PROFIBUS-DP V2"],
        correcta: 2,
        explicacion: "PROFIsafe es el perfil de seguridad que se ejecuta sobre PROFIBUS-DP (y también sobre PROFINET) para aplicaciones hasta SIL3 / PL e, como paradas de emergencia, cortinas de luz, etc."
      },
      {
        pregunta: "PROFIBUS-PA está diseñado para:",
        opciones: [
          "Alta velocidad en líneas de producción",
          "Instrumentación en áreas peligrosas (zonas ATEX) con alimentación por bus",
          "Redes de control de movimiento",
          "Comunicación entre PLCs maestros"
        ],
        correcta: 1,
        explicacion: "PROFIBUS-PA (Process Automation) opera a 31,25 Kbps con alimentación de dispositivos a través del propio cable de bus, y está diseñado para zonas con riesgo de explosión (ATEX/IECEx)."
      },
      {
        pregunta: "El fichero GSD en PROFIBUS sirve para:",
        opciones: [
          "Guardar los datos de proceso en tiempo real",
          "Describir las características del dispositivo para la herramienta de configuración",
          "Configurar la velocidad del bus automáticamente",
          "Definir las alarmas del sistema"
        ],
        correcta: 1,
        explicacion: "El fichero GSD (Generic Station Description) es un archivo de texto que describe las características de un dispositivo PROFIBUS (velocidades soportadas, módulos, parámetros) para importarlo en herramientas como STEP 7 o TIA Portal."
      }
    ]
  },
  {
    id: "profinet",
    nombre: "PROFINET",
    preguntas: [
      {
        pregunta: "¿Sobre qué tecnología de red está basado PROFINET?",
        opciones: ["RS-485", "Ethernet industrial (IEEE 802.3)", "CAN", "Token Ring"],
        correcta: 1,
        explicacion: "PROFINET está basado en Ethernet estándar (IEEE 802.3), lo que permite velocidades de 100 Mbps / 1 Gbps y uso de infraestructura Ethernet convencional."
      },
      {
        pregunta: "¿Cuál es el tiempo de ciclo mínimo que permite PROFINET IRT?",
        opciones: ["1 ms", "250 µs", "31,25 µs", "1 µs"],
        correcta: 1,
        explicacion: "PROFINET IRT (Isochronous Real-Time) permite tiempos de ciclo de hasta 250 µs con jitter menor de 1 µs, adecuado para control de movimiento sincronizado."
      },
      {
        pregunta: "¿Qué clase de PROFINET se usa para aplicaciones estándar de automatización (no motion)?",
        opciones: ["PROFINET IRT", "PROFINET RT", "PROFINET NRT", "PROFINET CBA"],
        correcta: 1,
        explicacion: "PROFINET RT (Real-Time) proporciona tiempos de ciclo típicos de 1-10 ms, suficiente para E/S estándar. Usa prioridad de trama Ethernet pero no requiere hardware especial."
      },
      {
        pregunta: "El archivo que describe un dispositivo PROFINET en la herramienta de ingeniería se llama:",
        opciones: ["EDS", "GSD", "GSDML", "DTM"],
        correcta: 2,
        explicacion: "GSDML (Generic Station Description Markup Language) es el archivo XML que describe un dispositivo PROFINET IO, equivalente al GSD de PROFIBUS pero en formato XML."
      },
      {
        pregunta: "En PROFINET, ¿cómo se llama el controlador que gestiona los dispositivos de campo?",
        opciones: ["Master", "IO-Controller", "Supervisor", "Manager"],
        correcta: 1,
        explicacion: "En la terminología PROFINET, el PLC actúa como IO-Controller. Los dispositivos de campo son IO-Devices. El IO-Supervisor es la herramienta de ingeniería/diagnóstico."
      },
      {
        pregunta: "¿Qué protocolo usa PROFINET para el descubrimiento y diagnóstico de dispositivos en la red?",
        opciones: ["SNMP", "LLDP / DCP", "DHCP", "ARP"],
        correcta: 1,
        explicacion: "PROFINET usa DCP (Discovery and Configuration Protocol) para asignar nombre y dirección IP a dispositivos, y LLDP (Link Layer Discovery Protocol) para la topología de red."
      },
      {
        pregunta: "¿Qué velocidad de transmisión soporta PROFINET a nivel físico?",
        opciones: ["12 Mbps", "31,25 Kbps", "100 Mbps / 1 Gbps", "10 Mbps únicamente"],
        correcta: 2,
        explicacion: "PROFINET opera sobre Ethernet a 100 Mbps (Fast Ethernet) y 1 Gbps (Gigabit Ethernet), lo que lo hace significativamente más rápido que buses de campo como PROFIBUS."
      }
    ]
  },
  {
    id: "canbus",
    nombre: "CAN Bus",
    preguntas: [
      {
        pregunta: "¿Qué significa CAN en CAN Bus?",
        opciones: ["Control Area Network", "Controller Area Network", "Computer Automation Network", "Central Automation Node"],
        correcta: 1,
        explicacion: "CAN son las siglas de Controller Area Network, desarrollado por Bosch en 1983, inicialmente para el sector del automóvil y luego extendido a la industria."
      },
      {
        pregunta: "¿Cuál es la velocidad máxima del bus CAN clásico (CAN 2.0)?",
        opciones: ["125 Kbps", "500 Kbps", "1 Mbps", "10 Mbps"],
        correcta: 2,
        explicacion: "CAN 2.0 (clásico) tiene una velocidad máxima de 1 Mbps a distancias cortas (<40 m). CAN FD puede alcanzar hasta 8 Mbps en la fase de datos."
      },
      {
        pregunta: "El mecanismo de arbitraje de CAN Bus se basa en:",
        opciones: [
          "Token passing",
          "TDMA (Time Division Multiple Access)",
          "CSMA/CR (Carrier Sense Multiple Access / Collision Resolution)",
          "Polling del maestro"
        ],
        correcta: 2,
        explicacion: "CAN usa CSMA/CR: cuando hay colisión, el mensaje con identificador de menor valor numérico (mayor prioridad) gana el bus sin pérdida de datos. El ID más pequeño es dominante."
      },
      {
        pregunta: "En CAN Bus, el bit dominante corresponde a:",
        opciones: ["Nivel lógico '1' (5V diferencial)", "Nivel lógico '0' (0V diferencial)", "Depende de la implementación", "Estado de alta impedancia"],
        correcta: 1,
        explicacion: "El nivel dominante en CAN es el '0' lógico (diferencia de tensión entre CANH y CANL de ~2V). El nivel recesivo es el '1'. Esto permite que el '0' prevalezca en el arbitraje."
      },
      {
        pregunta: "¿Cuántos bytes de datos máximo puede transportar una trama CAN 2.0?",
        opciones: ["4 bytes", "8 bytes", "16 bytes", "64 bytes"],
        correcta: 1,
        explicacion: "Una trama CAN 2.0 puede transportar hasta 8 bytes de datos. CAN FD amplía esto hasta 64 bytes por trama."
      },
      {
        pregunta: "CANopen es:",
        opciones: [
          "Una versión de CAN a cielo abierto (open field)",
          "Un protocolo de nivel superior basado en CAN para automatización",
          "Un estándar de cableado para CAN Bus",
          "Una herramienta de diagnóstico para CAN"
        ],
        correcta: 1,
        explicacion: "CANopen es un protocolo de capa de aplicación definido sobre CAN, estandarizado por CiA (CAN in Automation). Define servicios de comunicación, tipos de datos y perfiles de dispositivo para automatización."
      },
      {
        pregunta: "¿Cuál es la longitud máxima del bus CAN a 1 Mbps?",
        opciones: ["10 m", "25 m", "40 m", "100 m"],
        correcta: 2,
        explicacion: "A 1 Mbps la longitud máxima es ~40 m. Existe una relación inversa entre velocidad y distancia: a 125 Kbps se puede llegar a ~500 m."
      }
    ]
  },
  {
    id: "rs485",
    nombre: "RS-232 / RS-485",
    preguntas: [
      {
        pregunta: "¿Cuál es la principal diferencia entre RS-232 y RS-485?",
        opciones: [
          "RS-232 es diferencial; RS-485 es de extremo único",
          "RS-485 es diferencial y permite múltiples nodos; RS-232 es de extremo único punto a punto",
          "RS-232 es más rápido que RS-485",
          "RS-485 usa conectores DB-9; RS-232 usa bornes"
        ],
        correcta: 1,
        explicacion: "RS-485 usa señalización diferencial (par de cables) lo que le da inmunidad al ruido y permite hasta 32 (o más con repetidores) nodos. RS-232 es single-ended y solo permite comunicación punto a punto."
      },
      {
        pregunta: "¿Qué distancia máxima puede alcanzar RS-485 a bajas velocidades?",
        opciones: ["15 m", "100 m", "1200 m", "5000 m"],
        correcta: 2,
        explicacion: "RS-485 puede alcanzar hasta 1200 m a velocidades bajas (~100 Kbps). La distancia disminuye con el aumento de velocidad."
      },
      {
        pregunta: "La tensión de señal en RS-232 para representar un '1' lógico es:",
        opciones: ["+3V a +15V", "-3V a -15V", "0V a 0,8V", "+5V"],
        correcta: 1,
        explicacion: "En RS-232, el '1' lógico (Mark) corresponde a tensiones entre -3V y -15V. El '0' lógico (Space) corresponde a +3V a +15V. Esto es inverso a la lógica TTL."
      },
      {
        pregunta: "¿Para qué se usan las resistencias de terminación en RS-485?",
        opciones: [
          "Aumentar la corriente de señal",
          "Evitar reflexiones de señal en los extremos del cable",
          "Proteger contra cortocircuitos",
          "Filtrar el ruido de alta frecuencia"
        ],
        correcta: 1,
        explicacion: "Las resistencias de terminación (típicamente 120Ω) se colocan en ambos extremos del bus para igualar la impedancia característica del cable y evitar reflexiones que distorsionarían la señal."
      },
      {
        pregunta: "RS-485 half-duplex significa que:",
        opciones: [
          "Solo puede transmitir datos, no recibirlos",
          "La transmisión y recepción se alternan en el mismo par de cables",
          "Usa dos pares de cables para TX y RX simultáneos",
          "La velocidad es la mitad de RS-232"
        ],
        correcta: 1,
        explicacion: "En modo half-duplex (2 hilos), el mismo par se usa para transmitir y recibir, pero no simultáneamente. Full-duplex (4 hilos) usa pares separados para TX y RX."
      },
      {
        pregunta: "¿Cuántos transmisores y receptores permite el estándar RS-485 básico por segmento?",
        opciones: ["8 transmisores, 32 receptores", "1 transmisor, 31 receptores", "32 transmisores y receptores", "Ilimitado"],
        correcta: 2,
        explicacion: "El estándar RS-485 original define hasta 32 cargas unitarias (unit loads) por segmento. Muchos transceivers modernos son 1/8 o 1/4 UL, lo que permite hasta 256 nodos por segmento."
      }
    ]
  },
  {
    id: "ethernet_industrial",
    nombre: "Ethernet Industrial",
    preguntas: [
      {
        pregunta: "¿Qué es el protocolo EtherNet/IP?",
        opciones: [
          "Ethernet con IP como protocolo de aplicación propio",
          "El protocolo CIP (Common Industrial Protocol) encapsulado sobre Ethernet TCP/UDP",
          "Una versión segura de Ethernet para industria",
          "Ethernet a 10 Mbps para entornos industriales"
        ],
        correcta: 1,
        explicacion: "EtherNet/IP usa el protocolo CIP (Common Industrial Protocol) encapsulado sobre TCP/IP (servicios explícitos) y UDP/IP (E/S implícitas). Es promovido por ODVA y muy usado en América del Norte."
      },
      {
        pregunta: "¿Qué estándar define las comunicaciones en tiempo real sobre Ethernet (TSN)?",
        opciones: ["IEEE 802.11", "IEEE 802.1Q/AS/Qbv (TSN)", "IEEE 802.3u", "IEC 61850"],
        correcta: 1,
        explicacion: "TSN (Time-Sensitive Networking) es un conjunto de estándares IEEE 802.1 (802.1AS, 802.1Qbv, etc.) que añaden determinismo temporal a Ethernet estándar para comunicaciones industriales."
      },
      {
        pregunta: "¿Qué protocolo se usa ampliamente en subestaciones eléctricas para comunicaciones IED?",
        opciones: ["PROFINET", "Modbus TCP", "IEC 61850", "EtherNet/IP"],
        correcta: 2,
        explicacion: "IEC 61850 es el estándar internacional para comunicaciones en subestaciones eléctricas. Define servicios como GOOSE (mensajes de protección rápida) y MMS para control."
      },
      {
        pregunta: "EtherCAT destaca principalmente por:",
        opciones: [
          "Su bajo coste de infraestructura",
          "Tiempos de ciclo extremadamente bajos (<100 µs) y sincronismo distribuido",
          "Compatibilidad con cualquier switch Ethernet",
          "Uso en redes inalámbricas industriales"
        ],
        correcta: 1,
        explicacion: "EtherCAT (Ethernet for Control Automation Technology, de Beckhoff) logra tiempos de ciclo menores de 100 µs procesando las tramas 'al vuelo' en cada nodo esclavo, sin necesidad de switches."
      },
      {
        pregunta: "¿Qué diferencia a los switches industriales de los switches comerciales?",
        opciones: [
          "Los industriales son más lentos pero más baratos",
          "Rango de temperatura extendido, alimentación redundante, carcasa robusta y funciones como PROFINET MRP",
          "Los industriales solo soportan 10 Mbps",
          "Los switches industriales no soportan VLANs"
        ],
        correcta: 1,
        explicacion: "Los switches industriales están diseñados para entornos hostiles: temperatura ampliada (-40°C a +70°C), PSU redundante, montaje en carril DIN, inmunidad EMC, y soporte de protocolos como MRP, LLDP, PROFINET."
      }
    ]
  },
  {
    id: "opc",
    nombre: "OPC UA",
    preguntas: [
      {
        pregunta: "¿Qué significa OPC UA?",
        opciones: [
          "Open Process Control Unified Architecture",
          "OLE for Process Control Unified Architecture",
          "Open Platform Communications Unified Architecture",
          "Optimized Process Communication Universal Access"
        ],
        correcta: 2,
        explicacion: "OPC UA son las siglas de Open Platform Communications Unified Architecture. Es un estándar de comunicación M2M independiente de plataforma, definido en IEC 62541."
      },
      {
        pregunta: "¿Qué ventaja principal tiene OPC UA respecto al OPC clásico (DA, HDA, A&E)?",
        opciones: [
          "Mayor velocidad de transmisión",
          "Independencia de plataforma (no requiere COM/DCOM de Windows)",
          "Menor consumo de CPU",
          "Solo funciona con protocolos Ethernet"
        ],
        correcta: 1,
        explicacion: "OPC clásico dependía de COM/DCOM de Microsoft (solo Windows). OPC UA es multiplataforma, funciona en Linux, microcontroladores, PLC, etc., y añade seguridad integrada."
      },
      {
        pregunta: "En OPC UA, ¿qué es el 'Address Space'?",
        opciones: [
          "El rango de direcciones IP del servidor OPC",
          "El espacio de nombres donde se exponen los nodos con datos, métodos y eventos",
          "El buffer de memoria para almacenar datos históricos",
          "La dirección MAC del servidor OPC UA"
        ],
        correcta: 1,
        explicacion: "El Address Space es el modelo de información del servidor OPC UA, organizado como un grafo de nodos. Expone variables (datos), métodos (llamadas), objetos y tipos de forma estructurada."
      },
      {
        pregunta: "OPC UA Pub/Sub es un patrón de comunicación donde:",
        opciones: [
          "Un cliente solicita datos al servidor (pull)",
          "Los publicadores envían datos a un broker o red sin esperar petición (push)",
          "Cada nodo actúa como servidor y cliente simultáneamente",
          "Los datos se replican entre servidores OPC UA"
        ],
        correcta: 1,
        explicacion: "OPC UA Pub/Sub (basado en MQTT o UDP Multicast) permite que los publicadores envíen datos sin requerir una conexión cliente-servidor, ideal para IoT y arquitecturas desacopladas."
      },
      {
        pregunta: "¿Qué mecanismos de seguridad integra OPC UA?",
        opciones: [
          "Solo cifrado SSL/TLS",
          "Autenticación, autorización, cifrado (TLS) y firma de mensajes",
          "Firewall de aplicación integrado",
          "VPN entre cliente y servidor"
        ],
        correcta: 1,
        explicacion: "OPC UA integra autenticación de usuario/aplicación mediante certificados X.509, autorización por roles, cifrado de canal (TLS 1.2/1.3) y firma de mensajes para garantizar integridad."
      }
    ]
  },
  {
    id: "inalambrico",
    nombre: "Comunicaciones Inalámbricas Industriales",
    preguntas: [
      {
        pregunta: "¿Qué estándar inalámbrico se usa específicamente para redes de sensores industriales (WirelessHART)?",
        opciones: ["IEEE 802.11n", "IEEE 802.15.4 con TDMA", "Bluetooth 5.0", "LoRaWAN"],
        correcta: 1,
        explicacion: "WirelessHART está basado en IEEE 802.15.4 con TDMA (Time Division Multiple Access) en la banda de 2,4 GHz, con salto de frecuencias adaptativo para robustez en entornos industriales."
      },
      {
        pregunta: "¿Qué estándar define las redes inalámbricas industriales ISA100.11a?",
        opciones: [
          "Redes Wi-Fi para control de procesos",
          "Redes de sensores inalámbricos para automatización de procesos (ISA)",
          "Estándar Bluetooth para instrumentación",
          "Redes Zigbee para domótica industrial"
        ],
        correcta: 1,
        explicacion: "ISA100.11a es el estándar de la ISA (International Society of Automation) para redes inalámbricas en automatización de procesos, compatible con IPv6 y diseñado para aplicaciones no críticas de tiempo."
      },
      {
        pregunta: "La principal desventaja de Wi-Fi (IEEE 802.11) en entornos industriales de control de proceso es:",
        opciones: [
          "Su baja velocidad de datos",
          "Latencia variable y no determinista, susceptibilidad a interferencias",
          "El coste elevado de los access points",
          "La limitación a 2,4 GHz únicamente"
        ],
        correcta: 1,
        explicacion: "Wi-Fi usa CSMA/CA que introduce latencia variable, lo que lo hace inadecuado para control en tiempo real. Es apropiado para transferencia de datos, SCADA remoto o mantenimiento, no para lazo de control cerrado."
      },
      {
        pregunta: "¿En qué banda de frecuencia opera HART inalámbrico (WirelessHART)?",
        opciones: ["433 MHz", "868 MHz", "2,4 GHz", "5 GHz"],
        correcta: 2,
        explicacion: "WirelessHART opera en la banda de 2,4 GHz (ISM), usando 15 canales IEEE 802.15.4 con salto de frecuencia adaptativo (FHSS) para evitar interferencias con Wi-Fi y otros dispositivos."
      }
    ]
  }
];
