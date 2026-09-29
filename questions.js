// Banco de preguntas — UT1: Reconocimiento de sistemas de comunicación industrial
// Fuente: banco_test.md · J. Monrabal Mateo · CFGS Automatización Industrial

const TEMAS = [
  {
    id: "proceso_comunicacion",
    nombre: "El proceso de comunicación",
    preguntas: [
      {
        pregunta: "Si la fuente de información es analógica, el transmisor recibe el nombre de:",
        opciones: ["Codificador", "Modulador", "Repetidor", "Demodulador"],
        correcta: 1,
        explicacion: "Cuando la fuente es analógica, el transmisor se denomina modulador, ya que transforma la señal analógica para adaptarla al canal de transmisión."
      },
      {
        pregunta: "Si la fuente de información es digital, el transmisor recibe el nombre de:",
        opciones: ["Modulador", "Amplificador", "Codificador", "Repetidor"],
        correcta: 2,
        explicacion: "Cuando la fuente es digital, el transmisor se denomina codificador, ya que transforma los datos digitales a la forma adecuada para su transmisión."
      },
      {
        pregunta: "¿Qué contaminante se define como 'alteración de la señal debida a las imperfecciones del propio sistema de comunicación'?",
        opciones: ["Ruido", "Interferencia", "Diafonía", "Distorsión"],
        correcta: 3,
        explicacion: "La distorsión es la alteración causada por las imperfecciones del propio sistema (no por agentes externos). El ruido es de origen térmico/electrónico; la interferencia viene de señales externas."
      },
      {
        pregunta: "La diafonía (crosstalk) se produce por:",
        opciones: [
          "Agitación térmica de electrones en el conductor",
          "Señales externas de forma similar a la señal original",
          "Acoplamiento electromagnético entre cables adyacentes muy próximos",
          "Imperfecciones del sistema de transmisión"
        ],
        correcta: 2,
        explicacion: "La diafonía (crosstalk) ocurre cuando la señal de un cable se acopla electromagnéticamente a otro cable adyacente, siendo especialmente problemática en pares sin apantallar."
      },
      {
        pregunta: "El ruido impulsivo se caracteriza por:",
        opciones: [
          "Producirse por agitación térmica de los electrones",
          "Ser de origen cósmico o atmosférico",
          "Perturbaciones de corta duración pero gran amplitud generadas por equipos eléctricos",
          "Producirse por intermodulación de frecuencias"
        ],
        correcta: 2,
        explicacion: "El ruido impulsivo son perturbaciones de corta duración y gran amplitud, típicamente generadas por motores, relés, soldadura eléctrica y otros equipos industriales."
      },
      {
        pregunta: "¿Cuál de los siguientes NO es un tipo de contaminante de la señal?",
        opciones: ["Distorsión", "Interferencia", "Amplificación", "Diafonía"],
        correcta: 2,
        explicacion: "La amplificación no es un contaminante; es una técnica para regenerar la señal. Los contaminantes son: ruido, interferencia, distorsión y diafonía."
      },
      {
        pregunta: "En una red de comunicaciones industriales, los elementos transmisores y receptores se denominan:",
        opciones: ["Protocolos", "Nodos", "Buses", "Pasarelas"],
        correcta: 1,
        explicacion: "Los nodos son los dispositivos finales de una red (PLCs, sensores inteligentes, PCs industriales, etc.) que actúan como emisores y/o receptores de información."
      },
      {
        pregunta: "El canal de transmisión guiado se caracteriza porque:",
        opciones: [
          "La señal viaja por el aire sin conductor",
          "Está formado por un material físico sólido que conduce la señal por su interior",
          "No necesita medio físico de ningún tipo",
          "Solo puede transmitir señales ópticas"
        ],
        correcta: 1,
        explicacion: "El canal guiado utiliza un medio físico sólido (cable de cobre, fibra óptica) que confina y conduce la señal. El canal no guiado usa el aire u otro medio libre."
      },
      {
        pregunta: "El ruido de intermodulación ocurre cuando:",
        opciones: [
          "Equipos eléctricos generan pulsos cortos de gran amplitud",
          "Señales externas se superponen a la señal original",
          "Hay agitación térmica de electrones en el conductor",
          "Distintas frecuencias comparten el mismo medio de transmisión"
        ],
        correcta: 3,
        explicacion: "El ruido de intermodulación aparece cuando señales de distintas frecuencias comparten el mismo medio y se generan frecuencias suma y diferencia no deseadas."
      },
      {
        pregunta: "¿Qué elemento actúa como canal de transmisión en una comunicación inalámbrica Wi-Fi?",
        opciones: [
          "El cable UTP categoría 6",
          "El aire (medio no guiado)",
          "El cable coaxial RG-58",
          "La fibra óptica monomodo"
        ],
        correcta: 1,
        explicacion: "Wi-Fi usa el aire como medio de propagación electromagnética (canal no guiado). Las ondas de radio se propagan en la banda de 2,4 GHz o 5 GHz."
      }
    ]
  },
  {
    id: "red_cim",
    nombre: "Estructura de red y pirámide CIM",
    preguntas: [
      {
        pregunta: "El principal inconveniente del control centralizado en una red industrial es:",
        opciones: [
          "Necesita buses de campo en todos los niveles",
          "Es difícil de mantener por tener muchos controladores",
          "Si el controlador falla, todo el sistema se detiene",
          "No permite conectar dispositivos de distintos fabricantes"
        ],
        correcta: 2,
        explicacion: "En el control centralizado existe un único punto de fallo: si el controlador central falla, todo el sistema de producción se detiene. Esto lo hace menos robusto que el control distribuido."
      },
      {
        pregunta: "¿Qué elemento existe en el control distribuido y no en el centralizado?",
        opciones: [
          "Un único controlador central",
          "Un sistema SCADA",
          "Buses de campo (fieldbus)",
          "Sensores y actuadores"
        ],
        correcta: 2,
        explicacion: "El control distribuido introduce buses de campo para comunicar múltiples controladores locales distribuidos por la planta. El control centralizado usa cableado punto a punto desde un único controlador."
      },
      {
        pregunta: "En la pirámide CIM de 5 niveles, ¿dónde se sitúan los sensores y actuadores que interactúan directamente con el proceso físico?",
        opciones: [
          "Nivel 2 (Campo)",
          "Nivel 3 (Célula)",
          "Nivel 1 (Proceso)",
          "Nivel 4 (Planta)"
        ],
        correcta: 2,
        explicacion: "El Nivel 1 (Proceso) es el más bajo de la pirámide CIM y contiene los sensores, actuadores y dispositivos de campo que interactúan directamente con el proceso físico."
      },
      {
        pregunta: "Los PLCs, CNC y transporte automático se ubican en:",
        opciones: [
          "Nivel 1 (Proceso)",
          "Nivel 2 (Campo)",
          "Nivel 3 (Célula)",
          "Nivel 5 (Empresa)"
        ],
        correcta: 1,
        explicacion: "El Nivel 2 (Campo) alberga los controladores de proceso: PLCs, CNC, robots y sistemas de transporte automático que leen sensores y accionan actuadores del Nivel 1."
      },
      {
        pregunta: "En el Nivel 3 (Célula) de la pirámide CIM se encuentran:",
        opciones: [
          "Sensores y actuadores",
          "LAN corporativa y servidores de empresa",
          "PC industriales, PLCs de célula, LAN industrial y buses de campo",
          "Únicamente transporte automático"
        ],
        correcta: 2,
        explicacion: "El Nivel 3 (Célula) integra la automatización de una célula de fabricación: PC industriales, PLCs de célula, LAN industrial (Ethernet) y buses de campo para coordinar los equipos."
      },
      {
        pregunta: "El flujo de información entre dispositivos del mismo nivel de la pirámide CIM es:",
        opciones: ["Vertical", "Horizontal", "Ascendente", "Jerárquico"],
        correcta: 1,
        explicacion: "La comunicación entre pares del mismo nivel es horizontal (peer-to-peer). La comunicación entre niveles distintos (superior-inferior) es vertical y se realiza a través de pasarelas o gateways."
      },
      {
        pregunta: "Los elementos que interconectan distintos niveles de la pirámide CIM son:",
        opciones: [
          "Buses de campo únicamente",
          "Puentes (bridges), pasarelas (gateways) y routers",
          "Solo switches gestionados",
          "Fibra óptica monomodo"
        ],
        correcta: 1,
        explicacion: "Los puentes (bridges), pasarelas (gateways) y routers son los dispositivos que traducen protocolos y conectan niveles distintos de la pirámide CIM, permitiendo la integración vertical."
      },
      {
        pregunta: "¿Cuál de los siguientes NO es un objetivo del modelo CIM?",
        opciones: [
          "Aumentar la flexibilidad",
          "Reducir los costos",
          "Separar completamente la red IT de la red OT",
          "Mejorar la calidad del producto"
        ],
        correcta: 2,
        explicacion: "CIM (Computer Integrated Manufacturing) busca integrar IT y OT, no separarlas. Sus objetivos son aumentar flexibilidad, reducir costos, mejorar calidad e integrar toda la información de producción."
      },
      {
        pregunta: "A medida que se asciende en la pirámide CIM, el número de dispositivos:",
        opciones: [
          "Aumenta",
          "Se mantiene constante",
          "Disminuye",
          "Se duplica por nivel"
        ],
        correcta: 2,
        explicacion: "La pirámide CIM tiene forma de pirámide: en la base (Nivel 1) hay cientos o miles de sensores/actuadores; en la cima (Nivel 5) hay pocos servidores de empresa."
      },
      {
        pregunta: "En los niveles inferiores de la pirámide CIM (Campo y Proceso), el tiempo de respuesta es:",
        opciones: [
          "No crítico; puede tardar horas",
          "Superior a 1 minuto",
          "Crítico; se exige respuesta en milisegundos o microsegundos",
          "Irrelevante porque el volumen de datos es muy bajo"
        ],
        correcta: 2,
        explicacion: "En los niveles de campo y proceso (control en tiempo real), los tiempos de respuesta deben ser del orden de milisegundos o microsegundos para garantizar el correcto control del proceso industrial."
      },
      {
        pregunta: "¿Cuántos niveles funcionales tiene la pirámide CIM?",
        opciones: ["3", "4", "5", "7"],
        correcta: 2,
        explicacion: "La pirámide CIM clásica tiene 5 niveles: Nivel 1 (Proceso), Nivel 2 (Campo), Nivel 3 (Célula), Nivel 4 (Planta) y Nivel 5 (Empresa/Corporativo)."
      },
      {
        pregunta: "¿Qué institución definió en 1984 el modelo OSI como marco de referencia para la interconexión de sistemas de comunicación?",
        opciones: ["IEEE", "EIA", "CEI/IEC", "ISO"],
        correcta: 3,
        explicacion: "La ISO (International Organization for Standardization) publicó en 1984 el modelo OSI (Open Systems Interconnection) como referencia para estandarizar las comunicaciones entre sistemas heterogéneos."
      }
    ]
  },
  {
    id: "normativa_osi",
    nombre: "Normativa y modelo OSI",
    preguntas: [
      {
        pregunta: "La norma IEC-61158 define:",
        opciones: [
          "Los niveles de tensión de RS-232",
          "Los estándares de redes Wi-Fi",
          "Los buses de campo industriales para control distribuido en tiempo real",
          "El modelo de referencia OSI"
        ],
        correcta: 2,
        explicacion: "IEC-61158 es la norma internacional que define los buses de campo (fieldbus) para sistemas de control distribuido en tiempo real: PROFIBUS, Foundation Fieldbus, DeviceNet, etc."
      },
      {
        pregunta: "El comité 802 del IEEE fue creado en 1980 para:",
        opciones: [
          "Definir los buses de campo industriales",
          "Normalizar los conectores RS-232",
          "Regular la tensión de RS-485",
          "Estandarizar las redes de datos"
        ],
        correcta: 3,
        explicacion: "El comité IEEE 802 fue creado en febrero de 1980 para estandarizar las redes de área local (LAN). De él surgen estándares como IEEE 802.3 (Ethernet) y IEEE 802.11 (Wi-Fi)."
      },
      {
        pregunta: "La EIA (Electronic Industries Alliance) es responsable de normas como:",
        opciones: [
          "IEC-61158",
          "IEEE 802.3",
          "RS-232, RS-422 y RS-485",
          "El modelo OSI"
        ],
        correcta: 2,
        explicacion: "La EIA define los estándares de interfaces serie RS-232, RS-422 y RS-485, que especifican las características eléctricas, mecánicas y funcionales de las interfaces de comunicación serie."
      },
      {
        pregunta: "El modelo OSI divide las comunicaciones en:",
        opciones: ["4 capas", "5 capas", "6 capas", "7 capas"],
        correcta: 3,
        explicacion: "El modelo OSI (Open Systems Interconnection) divide la comunicación en 7 capas: Física, Enlace, Red, Transporte, Sesión, Presentación y Aplicación."
      },
      {
        pregunta: "¿En qué capa OSI opera el protocolo IP?",
        opciones: [
          "Capa 2 (Enlace)",
          "Capa 3 (Red)",
          "Capa 4 (Transporte)",
          "Capa 7 (Aplicación)"
        ],
        correcta: 1,
        explicacion: "IP (Internet Protocol) opera en la Capa 3 (Red) del modelo OSI. Se encarga del direccionamiento lógico y el enrutamiento de paquetes entre redes."
      },
      {
        pregunta: "¿Qué capa OSI segmenta los datos y garantiza la entrega extremo a extremo?",
        opciones: [
          "Capa 3 (Red)",
          "Capa 5 (Sesión)",
          "Capa 2 (Enlace)",
          "Capa 4 (Transporte)"
        ],
        correcta: 3,
        explicacion: "La Capa 4 (Transporte) segmenta los datos en segmentos, gestiona el control de flujo y garantiza la entrega extremo a extremo. TCP y UDP operan en esta capa."
      },
      {
        pregunta: "La capa 2 (Enlace de datos) se ocupa de:",
        opciones: [
          "Enrutamiento entre redes",
          "Cifrado de datos",
          "Gestión de sesiones",
          "Acceso al medio y direccionamiento físico (MAC)"
        ],
        correcta: 3,
        explicacion: "La Capa 2 (Enlace de datos) gestiona el acceso al medio físico compartido, el direccionamiento MAC, la detección de errores en la trama y el control de flujo básico."
      },
      {
        pregunta: "¿Qué protocolo de transporte es NO orientado a conexión y tiene menor latencia?",
        opciones: ["IP", "UDP", "HTTP", "ARP"],
        correcta: 1,
        explicacion: "UDP (User Datagram Protocol) es no orientado a conexión: no establece sesión previa ni garantiza entrega, lo que reduce la latencia. Ideal para transmisiones en tiempo real donde importa la velocidad."
      },
      {
        pregunta: "¿Qué capa OSI interactúa directamente con las aplicaciones del usuario?",
        opciones: [
          "Capa 5 (Sesión)",
          "Capa 6 (Presentación)",
          "Capa 4 (Transporte)",
          "Capa 7 (Aplicación)"
        ],
        correcta: 3,
        explicacion: "La Capa 7 (Aplicación) es la interfaz directa con el usuario final y las aplicaciones: HTTP, FTP, SMTP, DNS, Modbus TCP, OPC UA operan en esta capa."
      },
      {
        pregunta: "La capa 6 (Presentación) se encarga de:",
        opciones: [
          "Gestionar el enrutamiento de paquetes",
          "Establecer y cerrar sesiones",
          "Representación, codificación, cifrado y compresión de los datos",
          "Controlar el flujo extremo a extremo"
        ],
        correcta: 2,
        explicacion: "La Capa 6 (Presentación) transforma los datos a un formato común: codificación de caracteres (ASCII, UTF-8), cifrado/descifrado y compresión para que la capa de aplicación los entienda."
      },
      {
        pregunta: "¿Qué capa OSI establece, mantiene y finaliza la sesión de comunicación entre dos equipos?",
        opciones: [
          "Capa 4 (Transporte)",
          "Capa 5 (Sesión)",
          "Capa 6 (Presentación)",
          "Capa 3 (Red)"
        ],
        correcta: 1,
        explicacion: "La Capa 5 (Sesión) gestiona el diálogo entre aplicaciones: abre, mantiene sincronizada y cierra la sesión de comunicación entre los dos sistemas."
      },
      {
        pregunta: "La capa física (capa 1) del modelo OSI define:",
        opciones: [
          "El acceso al medio y el direccionamiento MAC",
          "El enrutamiento de paquetes",
          "El cifrado extremo a extremo",
          "Las características eléctricas, mecánicas y funcionales del medio de transmisión"
        ],
        correcta: 3,
        explicacion: "La Capa 1 (Física) define los aspectos hardware: niveles de tensión, velocidad en baudios, tipo de conector, codificación de bits, etc. Es la que 'toca' el cable."
      },
      {
        pregunta: "Dos entidades 'pares' en el modelo OSI son aquellas que:",
        opciones: [
          "Están en capas adyacentes del mismo equipo",
          "Realizan la misma función en diferentes sistemas comunicándose entre sí",
          "Comparten la misma dirección MAC",
          "Pertenecen al mismo nivel físico"
        ],
        correcta: 1,
        explicacion: "Las entidades pares (peer entities) son las que implementan el mismo protocolo en la misma capa pero en distintos sistemas. Se comunican lógicamente mediante PDUs (Protocol Data Units)."
      },
      {
        pregunta: "El modelo TCP/IP tiene:",
        opciones: ["3 capas", "4 capas", "5 capas", "7 capas"],
        correcta: 1,
        explicacion: "El modelo TCP/IP simplifica el OSI en 4 capas: Acceso a la red (física+enlace), Internet (red), Transporte y Aplicación (sesión+presentación+aplicación del OSI)."
      }
    ]
  },
  {
    id: "transmision",
    nombre: "Modalidades y parámetros de transmisión",
    preguntas: [
      {
        pregunta: "¿Qué modalidad permite enviar y recibir datos de forma simultánea?",
        opciones: ["Simplex", "Half-duplex", "Paralelo", "Full-duplex"],
        correcta: 3,
        explicacion: "Full-duplex permite transmisión simultánea en ambos sentidos. Half-duplex alterna transmisión y recepción. Simplex solo permite un sentido fijo."
      },
      {
        pregunta: "¿Cuántos conductores mínimos necesita una comunicación RS-232 básica (TX, RX, GND)?",
        opciones: ["1", "2", "3", "9"],
        correcta: 2,
        explicacion: "Una comunicación RS-232 mínima necesita 3 conductores: TX (transmisión), RX (recepción) y GND (masa de referencia). Con control de flujo hardware se añaden RTS y CTS."
      },
      {
        pregunta: "La principal desventaja de la transmisión paralela frente a la serie es:",
        opciones: [
          "Es más lenta",
          "No detecta errores",
          "Solo funciona en simplex",
          "Requiere mayor número de conductores y sufre más interferencias en distancias largas"
        ],
        correcta: 3,
        explicacion: "La transmisión paralela envía varios bits simultáneamente pero necesita tantos conductores como bits, y a distancias largas la sincronización entre líneas (skew) y las interferencias la hacen impráctica."
      },
      {
        pregunta: "En la transmisión asíncrona, ¿qué función cumple el bit de inicio (start bit)?",
        opciones: [
          "Indica el final de la trama",
          "Detecta errores en la trama",
          "Indica la velocidad de transmisión en baudios",
          "Sincroniza el reloj del receptor al inicio de cada carácter"
        ],
        correcta: 3,
        explicacion: "En la transmisión asíncrona no hay reloj compartido. El start bit (siempre '0') avisa al receptor del inicio de un carácter y le permite sincronizar su reloj interno para muestrear los bits de datos."
      },
      {
        pregunta: "El formato '9600 8E1' indica:",
        opciones: [
          "9600 baudios, 8 bits datos, sin paridad, 1 stop bit",
          "9600 baudios, 8 bits datos, paridad par (Even), 1 bit de parada",
          "9600 baudios, 8 bits de parada, sin paridad, 1 bit de datos",
          "9600 Hz, 8 canales, con error, 1 bit de inicio"
        ],
        correcta: 1,
        explicacion: "La notación 'velocidad-datos-paridad-stop' se lee: 9600 baudios, 8 bits de datos, E=Even (paridad par), 1 bit de parada. La paridad par hace que el número total de unos sea par."
      },
      {
        pregunta: "En la práctica de aula, PuTTY se configuró como '9600 8N1'. La 'N' significa:",
        opciones: [
          "Número de canales",
          "Nulo-módem activado",
          "Negativo (tensión negativa)",
          "Sin paridad (None)"
        ],
        correcta: 3,
        explicacion: "N = None (sin paridad). La configuración 8N1 es la más habitual en RS-232 industrial: 8 bits de datos, sin bit de paridad, 1 bit de parada."
      },
      {
        pregunta: "¿Qué tipo de transmisión requiere menos conductores para enviar la misma cantidad de datos?",
        opciones: ["Paralela", "Full-duplex", "Simplex", "Serie"],
        correcta: 3,
        explicacion: "La transmisión serie envía los bits uno tras otro por un único conductor, necesitando solo 1 (o 2 para full-duplex) líneas de datos, frente a los N conductores de la transmisión paralela."
      },
      {
        pregunta: "En una comunicación half-duplex, si ambas estaciones transmiten simultáneamente:",
        opciones: [
          "El sistema arbitra automáticamente y ambos mensajes llegan íntegros",
          "Solo transmite la estación de mayor dirección MAC",
          "El sistema activa CSMA/CA para resolver el conflicto",
          "Se produce una colisión y ninguna recibe correctamente el mensaje"
        ],
        correcta: 3,
        explicacion: "En half-duplex el canal no puede transmitir en ambos sentidos a la vez. Si ambas estaciones transmiten simultáneamente, las señales se mezclan produciendo una colisión y los datos se corrompen."
      }
    ]
  },
  {
    id: "rs232_485",
    nombre: "Normas físicas RS-232 / RS-422 / RS-485",
    preguntas: [
      {
        pregunta: "Los niveles lógicos de tensión en RS-232 son:",
        opciones: [
          "0V y +5V",
          "0V y +3,3V",
          "±12V referenciados a masa (Mark=−12V, Space=+12V)",
          "Tensión diferencial entre líneas A y B"
        ],
        correcta: 2,
        explicacion: "RS-232 usa lógica negativa respecto a masa: Mark (lógico '1') = −3V a −15V; Space (lógico '0') = +3V a +15V. Típicamente se usan ±12V. Esto es opuesto a la lógica TTL."
      },
      {
        pregunta: "La distancia máxima aproximada de RS-232 a bajas velocidades es:",
        opciones: ["15 m", "100 m", "500 m", "1200 m"],
        correcta: 0,
        explicacion: "El estándar RS-232 especifica una distancia máxima de 15 m (50 pies) para garantizar los niveles de señal. En la práctica, con cables de baja capacitancia puede llegarse algo más lejos a velocidades bajas."
      },
      {
        pregunta: "En el conector DB-9, ¿qué señales corresponden a los pines 2, 3 y 5?",
        opciones: ["TX, RX, CTS", "RX, TX, GND", "TX, GND, RX", "RX, GND, TX"],
        correcta: 1,
        explicacion: "En el conector DB-9 macho (DTE): pin 2 = RX (Received Data), pin 3 = TX (Transmitted Data), pin 5 = GND (Signal Ground). Es importante cruzar TX↔RX en el cable nulo-módem."
      },
      {
        pregunta: "¿Cuántos nodos puede conectar RS-485 en topología multidrop estándar?",
        opciones: ["2", "8", "32", "128"],
        correcta: 2,
        explicacion: "RS-485 soporta hasta 32 nodos (1 transmisor + 31 receptores) por segmento con transceivers de 1 Unit Load. Con transceivers de 1/8 UL pueden llegarse a 256 nodos."
      },
      {
        pregunta: "RS-485 alcanza 1200 m a una velocidad máxima de:",
        opciones: ["9600 bps", "100 kbps", "1 Mbps", "10 Mbps"],
        correcta: 1,
        explicacion: "A 1200 m la velocidad máxima de RS-485 es aproximadamente 100 kbps. A 1 Mbps la distancia cae a ~100 m. Existe una relación inversa entre velocidad y distancia máxima."
      },
      {
        pregunta: "La resistencia de terminación de 120Ω en RS-485 se coloca en:",
        opciones: [
          "Cada nodo esclavo",
          "Solo el nodo maestro",
          "Cualquier nodo intermedio",
          "Los dos extremos del bus para eliminar reflexiones"
        ],
        correcta: 3,
        explicacion: "Las resistencias de terminación (120Ω, igual a la impedancia característica del cable) se colocan en los dos extremos físicos del bus para absorber la energía de la señal y evitar reflexiones que distorsionen la transmisión."
      },
      {
        pregunta: "La principal diferencia entre RS-422 y RS-485 es:",
        opciones: [
          "RS-422 usa ±12V; RS-485 usa 5V TTL",
          "RS-485 permite multidrop bidireccional semidúplex; RS-422 es punto a punto o multidrop unidireccional",
          "RS-422 permite 32 nodos; RS-485 solo 2",
          "No hay diferencia; son el mismo estándar con distinto nombre"
        ],
        correcta: 1,
        explicacion: "RS-422 es unidireccional (un emisor, hasta 10 receptores), útil para multidrop con un solo maestro transmisor. RS-485 permite que cualquier nodo transmita (bidireccional semidúplex), siendo la base de Modbus RTU."
      },
      {
        pregunta: "¿Por qué en la práctica se usó un adaptador USB-RS232 (Prolific PL2303)?",
        opciones: [
          "Porque RS-232 no funciona con Windows 11",
          "Porque el adaptador convierte RS-232 a RS-485 automáticamente",
          "Porque PuTTY solo acepta conexiones USB",
          "Porque los PCs modernos no tienen puerto serie DB-9 nativo"
        ],
        correcta: 3,
        explicacion: "Los ordenadores actuales (portátiles, mini-PCs) han eliminado el puerto serie DB-9 nativo. El adaptador USB-RS232 (chip Prolific PL2303 o FTDI FT232) emula un puerto COM serie sobre USB."
      },
      {
        pregunta: "¿Cuál es la tensión del nivel lógico '1' (Mark) en RS-232?",
        opciones: ["+12V", "−12V", "0V", "+3,3V"],
        correcta: 1,
        explicacion: "En RS-232, el nivel Mark (lógico '1') corresponde a tensiones entre −3V y −15V. Típicamente −12V. El nivel Space (lógico '0') es +3V a +15V, típicamente +12V. Lógica negativa."
      },
      {
        pregunta: "RS-485 usa transmisión diferencial. La información se codifica en:",
        opciones: [
          "El nivel absoluto de la línea A respecto a masa",
          "El nivel absoluto de la línea B respecto a masa",
          "La frecuencia de la señal en la línea A",
          "La diferencia de tensión entre la línea A y la línea B"
        ],
        correcta: 3,
        explicacion: "RS-485 es diferencial: el bit se codifica en V(A)−V(B). Si A−B > +200mV → '1'; si A−B < −200mV → '0'. Esto proporciona inmunidad al ruido de modo común que afecta igual a las dos líneas."
      },
      {
        pregunta: "¿Cuál de las siguientes es una velocidad de transmisión estándar en RS-232?",
        opciones: ["7200 bps", "11520 bps", "9600 bps", "25600 bps"],
        correcta: 2,
        explicacion: "Las velocidades estándar RS-232 son: 300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 57600 y 115200 bps. 9600 bps es la más común en aplicaciones industriales."
      },
      {
        pregunta: "Un cable RS-232 recto (straight-through, pin 2↔pin 2, pin 3↔pin 3) se usa para conectar:",
        opciones: [
          "Dos PCs directamente (DTE-DTE)",
          "Un PC a un módem o equipo industrial (DTE-DCE)",
          "Dos módems entre sí",
          "Un PLC con un sensor IO-Link"
        ],
        correcta: 1,
        explicacion: "El cable recto (straight-through) conecta DTE (PC/PLC) con DCE (módem, convertidor, equipo industrial) porque en DCE los pines TX y RX están invertidos respecto al DTE, por lo que los pines homólogos se conectan directamente."
      },
      {
        pregunta: "El cable nulo-módem se llama así porque:",
        opciones: [
          "Transmite a velocidad nula",
          "No usa señal de reloj",
          "No necesita conductor de masa (GND)",
          "Simula la presencia de un módem en cada extremo, permitiendo conectar dos DTE directamente sin módem real"
        ],
        correcta: 3,
        explicacion: "El cable nulo-módem cruza TX↔RX (y RTS↔CTS si hay control de flujo hardware) para que dos equipos DTE puedan comunicarse directamente sin necesitar un módem en cada extremo."
      },
      {
        pregunta: "RS-232 usa señalización no equilibrada (unbalanced). Esto significa que:",
        opciones: [
          "La señal se transmite como diferencia entre dos líneas A y B",
          "No necesita conductor de retorno",
          "Los niveles son simétricos sin referencia a masa",
          "La tensión de la señal se mide respecto a un conductor de masa común (GND)"
        ],
        correcta: 3,
        explicacion: "RS-232 es single-ended (no equilibrado): la tensión de señal se mide respecto a un único conductor de masa (GND) compartido. Esto lo hace susceptible al ruido de modo común, limitando la distancia a 15 m."
      },
      {
        pregunta: "¿Cuántos receptores puede alimentar como máximo un driver RS-422 en configuración multidrop unidireccional?",
        opciones: ["2", "10", "32", "128"],
        correcta: 1,
        explicacion: "Un driver RS-422 puede alimentar hasta 10 receptores (cargas de 100Ω) en configuración multidrop unidireccional. Para más nodos se necesitan repetidores o drivers RS-485."
      },
      {
        pregunta: "RS-422 soporta full-duplex con 4 hilos. ¿Cómo se denominan?",
        opciones: [
          "TX+, TX−, GND, apantallamiento",
          "A, B, GND, apantallamiento",
          "TX, RX, RTS, CTS",
          "TX+, TX−, RX+, RX−"
        ],
        correcta: 3,
        explicacion: "RS-422 full-duplex usa 4 conductores diferenciales: TX+ y TX− para transmisión, RX+ y RX− para recepción, más opcionalmente un quinto conductor de masa de señal."
      },
      {
        pregunta: "¿Por qué RS-485 puede funcionar con solo 2 hilos en modo semidúplex?",
        opciones: [
          "Porque usa señalización TTL de 5V sin referencia a masa",
          "Porque usa modulación de frecuencia sin conductor de retorno",
          "Porque el GND está integrado en el apantallamiento del cable",
          "Porque la información se codifica en la diferencia entre líneas A y B; cuando un nodo no transmite, su salida queda en alta impedancia"
        ],
        correcta: 3,
        explicacion: "En RS-485, cuando un nodo no transmite, su driver pasa a alta impedancia (tri-state), dejando el bus libre. Como la señal es diferencial (A−B), no se necesita una tercera línea de referencia para decodificar los datos."
      },
      {
        pregunta: "A 1 Mbps, ¿cuál es la distancia máxima aproximada de RS-485?",
        opciones: ["15 m", "100 m", "500 m", "1200 m"],
        correcta: 1,
        explicacion: "La relación distancia-velocidad en RS-485 es inversa: a 1 Mbps la distancia máxima es ~100 m. A velocidades menores (≤100 kbps) la distancia puede llegar a 1200 m."
      },
      {
        pregunta: "En la actividad de ampliación con conversor RS-232→RS-485, se recomendó enviar el carácter 'U' (0x55) para verificar la señal en el osciloscopio. ¿Por qué ese carácter?",
        opciones: [
          "Porque es el primer carácter del alfabeto ASCII",
          "Porque tiene todos los bits a 1",
          "Porque es el carácter de inicio de trama en RS-485",
          "Porque su patrón binario 01010101 genera una onda cuadrada perfectamente regular que facilita medir el periodo y verificar los baudios"
        ],
        correcta: 3,
        explicacion: "0x55 = 01010101 en binario. Al transmitirlo continuamente se genera una onda cuadrada con período igual a 2 veces el tiempo de bit, lo que permite medir con precisión la velocidad de transmisión en el osciloscopio."
      },
      {
        pregunta: "¿Cuál de las siguientes comparativas RS-232 / RS-422 / RS-485 es correcta?",
        opciones: [
          "Los tres usan señalización diferencial equilibrada",
          "RS-232 y RS-485 son punto a punto; RS-422 permite multidrop",
          "Los tres alcanzan distancias de hasta 1200 m",
          "RS-232 usa señalización no equilibrada (±12V referenciados a masa); RS-422 y RS-485 usan señalización diferencial entre líneas A y B"
        ],
        correcta: 3,
        explicacion: "RS-232 es single-ended (referenciado a masa, ±12V); RS-422 y RS-485 son diferenciales (par de líneas A/B). La señalización diferencial de RS-422/485 les da mayor inmunidad al ruido y mayor distancia."
      }
    ]
  },
  {
    id: "medios",
    nombre: "Medios guiados y no guiados",
    preguntas: [
      {
        pregunta: "El cable coaxial RG-58 (50Ω) se denomina cable coaxial de:",
        opciones: ["Banda ancha", "Par trenzado", "Banda base", "Fibra óptica"],
        correcta: 2,
        explicacion: "El RG-58 (50Ω) es coaxial de banda base: transmite señal digital directamente sin modular en portadora. Se usaba en Ethernet 10Base2 (Thinnet). El RG-59 (75Ω) es de banda ancha (señal analógica/TV)."
      },
      {
        pregunta: "El cable coaxial RG-59 (75Ω) se usa en transmisión analógica y se denomina:",
        opciones: [
          "Cable coaxial de banda base",
          "Cable coaxial de banda ancha",
          "Par trenzado apantallado",
          "Fibra multimodo"
        ],
        correcta: 1,
        explicacion: "El RG-59 (75Ω) es coaxial de banda ancha: diseñado para transmisión analógica (TV por cable, CATV) donde la señal se modula en una portadora de alta frecuencia."
      },
      {
        pregunta: "¿Cuál es la distancia máxima sin regeneración de un cable UTP?",
        opciones: ["15 m", "50 m", "100 m", "500 m"],
        correcta: 2,
        explicacion: "El estándar Ethernet (IEEE 802.3) limita los segmentos UTP a 100 m sin repetidores/switches, por la atenuación de la señal y los límites de retardo de propagación."
      },
      {
        pregunta: "Para que la luz se propague por el núcleo de la fibra óptica debe cumplirse que:",
        opciones: ["n1 < n2", "n1 = n2", "n2 > n1", "n1 > n2"],
        correcta: 3,
        explicacion: "La reflexión total interna (que confina la luz en el núcleo) solo se produce si el índice de refracción del núcleo (n1) es mayor que el de la cubierta (n2). Si n1 > n2, los rayos por encima del ángulo crítico se reflejan totalmente."
      },
      {
        pregunta: "El diámetro típico del núcleo de fibra óptica monomodo (SMF) es de:",
        opciones: ["50-62,5 μm", "3-10 μm", "125 μm", "1 mm"],
        correcta: 1,
        explicacion: "La fibra monomodo (SMF) tiene un núcleo muy pequeño (3-10 μm) que solo permite un modo de propagación, eliminando la dispersión modal. La fibra multimodo tiene núcleos de 50 o 62,5 μm."
      },
      {
        pregunta: "¿Qué medio guiado tiene inmunidad perfecta al ruido electromagnético?",
        opciones: ["Cable coaxial", "UTP", "STP", "Fibra óptica"],
        correcta: 3,
        explicacion: "La fibra óptica transmite luz, no señales eléctricas, por lo que no se ve afectada por campos electromagnéticos, interferencias de radio ni ruido eléctrico industrial. Es ideal en entornos con motores y variadores."
      },
      {
        pregunta: "El efecto multicamino en comunicaciones por radio se produce cuando:",
        opciones: [
          "Varias señales se fusionan en una sola portadora",
          "Las ondas llegan a la antena por dos o más caminos y tiempos diferentes por reflexión en obstáculos",
          "La señal sufre distorsión por agitación térmica",
          "Se producen interferencias entre canales de distintas frecuencias"
        ],
        correcta: 1,
        explicacion: "El efecto multicamino (multipath) ocurre cuando la señal llega al receptor por múltiples trayectorias (directa + reflejos en paredes, suelo, maquinaria). Las copias llegan con retardos distintos y pueden interferir entre sí."
      },
      {
        pregunta: "¿Cuál es un ejemplo de comunicación óptica en espacio libre a corta distancia y baja velocidad?",
        opciones: ["Fibra multimodo", "IrDA (infrarrojo)", "Wi-Fi IEEE 802.11", "Bluetooth"],
        correcta: 1,
        explicacion: "IrDA (Infrared Data Association) es una comunicación óptica inalámbrica en espacio libre que usa luz infrarroja. Opera a distancias cortas (<1 m) y velocidades de hasta 16 Mbps. Requiere línea de visión directa."
      }
    ]
  },
  {
    id: "control_flujo",
    nombre: "Control de flujo",
    preguntas: [
      {
        pregunta: "¿Cuál es el objetivo del control de flujo?",
        opciones: [
          "Detectar y corregir errores en la trama",
          "Encriptar datos antes del envío",
          "Sincronizar relojes de emisor y receptor",
          "Evitar que el emisor envíe datos más rápido de lo que el receptor puede procesar"
        ],
        correcta: 3,
        explicacion: "El control de flujo evita el desbordamiento del buffer del receptor: si el receptor no puede procesar datos tan rápido como el emisor los envía, indica al emisor que pause temporalmente la transmisión."
      },
      {
        pregunta: "El control de flujo por hardware en RS-232 usa las señales:",
        opciones: ["TX y RX", "DTR y DSR", "GND y Vcc", "RTS (Request To Send) y CTS (Clear To Send)"],
        correcta: 3,
        explicacion: "El control de flujo hardware RS-232 usa RTS y CTS: el emisor activa RTS ('quiero enviar'), el receptor responde con CTS ('puedes enviar'). Usa líneas eléctricas dedicadas sin consumir ancho de banda."
      },
      {
        pregunta: "El control de flujo XON/XOFF consiste en:",
        opciones: [
          "Señales eléctricas dedicadas que pausan la transmisión",
          "Retransmitir automáticamente los paquetes perdidos",
          "Usar CRC para verificar la llegada de datos",
          "Insertar caracteres especiales (XON=0x11, XOFF=0x13) en el flujo de datos para pausar y reanudar"
        ],
        correcta: 3,
        explicacion: "XON/XOFF es control de flujo software: el receptor envía XOFF (0x13, Ctrl+S) para detener al emisor y XON (0x11, Ctrl+Q) para reanudarlo. Usa el mismo canal de datos, sin cables adicionales."
      },
      {
        pregunta: "En la práctica de aula, PuTTY se configuró con 'Flow control = None'. Esto significa:",
        opciones: [
          "Se usa RTS/CTS",
          "Se usa XON/XOFF",
          "El sistema operativo gestiona automáticamente el control de flujo",
          "No se usa ningún mecanismo de control de flujo"
        ],
        correcta: 3,
        explicacion: "Con 'Flow control = None', el emisor envía datos sin esperar confirmación del receptor. Válido para la práctica porque el cable nulo-módem básico no conecta RTS/CTS y los datos son de baja velocidad."
      },
      {
        pregunta: "La principal ventaja del control de flujo por hardware frente al software es:",
        opciones: [
          "No requiere cables adicionales",
          "Compatible con todos los protocolos industriales",
          "Funciona sin configurar el puerto",
          "No consume ancho de banda del canal de datos, pues usa líneas eléctricas dedicadas"
        ],
        correcta: 3,
        explicacion: "El control de flujo hardware (RTS/CTS) usa líneas eléctricas dedicadas fuera del canal de datos, por lo que no reduce el ancho de banda disponible ni introduce latencia en el flujo de datos, al contrario que XON/XOFF."
      }
    ]
  },
  {
    id: "topologias",
    nombre: "Topologías de red",
    preguntas: [
      {
        pregunta: "En la topología en bus, ¿qué ocurre si falla el cable principal?",
        opciones: [
          "Solo falla el nodo más cercano al fallo",
          "La red continúa en modo anillo",
          "Toda la red deja de funcionar",
          "Los nodos extremos asumen el control"
        ],
        correcta: 2,
        explicacion: "En la topología bus, todos los nodos comparten el mismo cable. Si el cable principal se rompe o falla, la red queda dividida en dos segmentos incomunicados y toda la comunicación cesa."
      },
      {
        pregunta: "¿Qué topología usa PROFIBUS en instalaciones industriales típicas?",
        opciones: ["Estrella", "Anillo", "Malla", "Bus"],
        correcta: 3,
        explicacion: "PROFIBUS usa topología bus (línea): todos los dispositivos se conectan al mismo par de cables con resistencias de terminación en los extremos. Es la topología más extendida en buses de campo industriales."
      },
      {
        pregunta: "En la topología en estrella, si falla el nodo central:",
        opciones: [
          "El fallo no interrumpe la red",
          "Solo fallan los nodos del mismo segmento",
          "La red continúa en modo bus",
          "Toda la red deja de funcionar"
        ],
        correcta: 3,
        explicacion: "En la topología estrella, el nodo central (switch, hub o concentrador) es el punto de fallo único. Si falla, todos los nodos pierden la comunicación entre sí, aunque los enlaces individuales estén intactos."
      },
      {
        pregunta: "La ventaja de la topología en anillo frente al bus es:",
        opciones: [
          "Es más económica de instalar",
          "Permite mayor número de nodos",
          "No requiere protocolo de acceso al medio",
          "Si el cable se rompe en un punto, el mensaje puede rodear el anillo por el otro sentido"
        ],
        correcta: 3,
        explicacion: "Los anillos dobles (como FDDI o MRP en PROFINET) permiten que si el cable se rompe en un punto, el tráfico se redirija automáticamente por el sentido opuesto del anillo, manteniendo la comunicación."
      },
      {
        pregunta: "La topología en árbol es una generalización de:",
        opciones: [
          "La topología en anillo",
          "La topología malla",
          "La topología punto a punto",
          "La topología en bus"
        ],
        correcta: 3,
        explicacion: "La topología árbol (tree) es una extensión jerárquica de la topología bus: un bus troncal del que parten ramas (sub-buses). Es común en redes Ethernet con switches en cascada."
      },
      {
        pregunta: "¿En qué topología es ejemplo básico el cable RS-232 nulo-módem fabricado en clase?",
        opciones: ["Estrella", "Bus", "Anillo", "Punto a punto (PtP)"],
        correcta: 3,
        explicacion: "El cable nulo-módem conecta exactamente dos equipos directamente: es la topología punto a punto (Point-to-Point), la más simple de todas, sin ningún nodo intermedio."
      },
      {
        pregunta: "La topología en malla:",
        opciones: [
          "Es la más sencilla y económica de instalar",
          "Usa un único cable compartido entre todos los nodos",
          "Requiere una estación central para el arbitraje",
          "Garantiza múltiples rutas entre equipos, pero es compleja y difícil de detectar averías"
        ],
        correcta: 3,
        explicacion: "La topología en malla (mesh) conecta cada nodo con varios otros, ofreciendo redundancia de rutas. Es muy robusta frente a fallos, pero el cableado y la gestión son muy complejos. Se usa en redes críticas de telecomunicaciones."
      },
      {
        pregunta: "¿En qué topología se usa preferentemente el token passing?",
        opciones: ["Bus", "Estrella", "Anillo", "Malla"],
        correcta: 2,
        explicacion: "El token passing nació con la topología anillo (Token Ring IEEE 802.5): un testigo (token) circula por el anillo y solo quien lo posee puede transmitir, garantizando acceso sin colisiones. También se usa en PROFIBUS (token lógico)."
      }
    ]
  },
  {
    id: "deteccion_errores",
    nombre: "Detección de errores",
    preguntas: [
      {
        pregunta: "La ecoplexión (echo) consiste en:",
        opciones: [
          "Añadir un CRC al final de la trama",
          "Verificar los bits de inicio y parada",
          "El receptor devuelve cada dato al emisor para confirmar que llegó correctamente",
          "Calcular la suma de todos los bytes y añadirla al final"
        ],
        correcta: 2,
        explicacion: "La ecoplexión o eco consiste en que el receptor reenvía cada carácter recibido de vuelta al emisor. El emisor compara lo enviado con lo recibido y detecta discrepancias. Simple pero consume el doble de ancho de banda."
      },
      {
        pregunta: "El principal inconveniente de la ecoplexión es:",
        opciones: [
          "Solo detecta errores en números impares de bits",
          "Requiere hardware especial en cada nodo",
          "Solo funciona en redes en anillo",
          "Consume el doble del ancho de banda y no distingue si el error fue en el trayecto de ida o de vuelta"
        ],
        correcta: 3,
        explicacion: "La ecoplexión duplica el tráfico de red. Además, si el emisor detecta un error, no sabe si el dato llegó mal al receptor (ida) o si el eco llegó mal al emisor (vuelta), lo que complica el diagnóstico."
      },
      {
        pregunta: "Si el dato 0101 0101 tiene 4 unos y se usa paridad par, el bit de paridad es:",
        opciones: ["1", "0", "No se puede determinar", "Depende del protocolo"],
        correcta: 1,
        explicacion: "Con paridad par, el número total de bits '1' (incluyendo el bit de paridad) debe ser par. 0101 0101 ya tiene 4 unos (par), por lo que el bit de paridad es 0 para mantener el total par."
      },
      {
        pregunta: "El CRC-16 ANSI (x¹⁶+x¹⁵+x²+1) se usa en:",
        opciones: [
          "Redes móviles GSM",
          "Ethernet y SATA",
          "Modbus RTU y USB",
          "Bluetooth y Wi-Fi"
        ],
        correcta: 2,
        explicacion: "El polinomio CRC-16 ANSI (también llamado CRC-16/ARC o CRC-16/IBM) es el utilizado en Modbus RTU para verificar la integridad de las tramas, y también en el protocolo USB."
      },
      {
        pregunta: "El CRC-32, usado en Ethernet, SATA y MPEG-2, tiene una secuencia de verificación de:",
        opciones: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correcta: 2,
        explicacion: "El CRC-32 genera una secuencia de verificación de 32 bits (4 bytes) que se añade al final de la trama. Detecta errores de hasta 32 bits de longitud con alta probabilidad."
      },
      {
        pregunta: "La suma de comprobación horizontal (checksum) añade al final de la trama:",
        opciones: [
          "Un bit de paridad por carácter",
          "Una secuencia CRC obtenida de una división polinómica",
          "Un dato que contiene el bit de paridad de cada posición de bit de todos los datos enviados",
          "Una copia completa de la trama para comparar"
        ],
        correcta: 2,
        explicacion: "El checksum horizontal (Longitudinal Redundancy Check, LRC) añade un carácter extra cuyos bits son la paridad de cada columna de bits de todos los caracteres del mensaje. Detecta errores que la paridad simple no detecta."
      },
      {
        pregunta: "¿Cuál de estos métodos NO detecta un error en dos bits del mismo carácter?",
        opciones: ["CRC", "Checksum horizontal", "Ecoplexión", "Paridad simple de un bit"],
        correcta: 3,
        explicacion: "La paridad simple de un bit (vertical) no detecta errores de dos bits en el mismo byte, porque si se invierten dos bits, la paridad sigue siendo correcta. CRC, checksum y ecoplexión sí detectarían este caso."
      },
      {
        pregunta: "La verificación de bits de trama (framing) comprueba que:",
        opciones: [
          "El CRC al final de la trama es correcto",
          "La suma de todos los bytes es cero",
          "El número de unos en el byte es par o impar según lo acordado",
          "Los bits de inicio y parada se reciben en el orden y formato correctos"
        ],
        correcta: 3,
        explicacion: "La verificación de framing comprueba la estructura de la trama asíncrona: que el bit de inicio sea '0' y los bits de parada sean '1'. Si no se cumplen, se detecta un error de encuadre (framing error)."
      }
    ]
  },
  {
    id: "correccion_errores",
    nombre: "Corrección de errores",
    preguntas: [
      {
        pregunta: "La corrección hacia atrás (ARQ) consiste en:",
        opciones: [
          "El receptor calcula y corrige los bits erróneos sin pedir retransmisión",
          "El emisor envía redundancia suficiente para que el receptor corrija solo",
          "Se usa un código Hamming en cada byte para corregir errores de 1 bit",
          "El receptor detecta el error y pide al emisor que retransmita el mensaje"
        ],
        correcta: 3,
        explicacion: "ARQ (Automatic Repeat Request) es el método donde el receptor detecta el error y solicita retransmisión al emisor. Es el método más usado en comunicaciones industriales por su simplicidad."
      },
      {
        pregunta: "¿Por qué ARQ es el método de corrección más usado en comunicaciones industriales?",
        opciones: [
          "Porque los entornos industriales no tienen errores de transmisión",
          "Porque FEC requiere un procesador muy potente que los PLCs no tienen",
          "Porque el volumen de datos es relativamente bajo y la retransmisión es viable",
          "Porque FEC no detecta errores de 2 bits"
        ],
        correcta: 2,
        explicacion: "En redes industriales el volumen de datos es moderado y los retardos de retransmisión son aceptables. ARQ es sencillo de implementar en PLCs y microcontroladores, y no requiere añadir tanta redundancia como FEC."
      },
      {
        pregunta: "La corrección hacia delante (FEC) requiere:",
        opciones: [
          "Menos redundancia que la paridad simple",
          "Una señal ACK del receptor al emisor",
          "Que el emisor conozca previamente qué bits se van a alterar",
          "Mayor redundancia en el mensaje para que el receptor localice y corrija los errores sin retransmisión"
        ],
        correcta: 3,
        explicacion: "FEC (Forward Error Correction) añade suficiente redundancia al mensaje original para que el receptor pueda no solo detectar sino también localizar y corregir los bits erróneos sin pedir retransmisión. Ideal para canales unidireccionales."
      },
      {
        pregunta: "Los códigos Hamming son ejemplos de:",
        opciones: [
          "Métodos de detección de errores únicamente",
          "Métodos de corrección hacia atrás",
          "Métodos de acceso al medio",
          "Métodos de corrección hacia delante (FEC)"
        ],
        correcta: 3,
        explicacion: "Los códigos Hamming son códigos de corrección de errores (FEC): añaden bits de paridad en posiciones específicas que permiten al receptor identificar exactamente qué bit se ha alterado y corregirlo sin retransmisión."
      }
    ]
  },
  {
    id: "acceso_medio",
    nombre: "Acceso al medio",
    preguntas: [
      {
        pregunta: "El objetivo principal del control de acceso al medio (MAC) es:",
        opciones: [
          "Cifrar los datos antes de transmitirlos",
          "Asignar direcciones IP a los dispositivos de la red",
          "Detectar errores en la capa de transporte",
          "Regular el acceso a un medio compartido para impedir o reducir las colisiones"
        ],
        correcta: 3,
        explicacion: "El control de acceso al medio (MAC) define las reglas para que varios nodos compartan un medio de transmisión (bus, radio) sin que sus transmisiones colisionen de forma irrecuperable."
      },
      {
        pregunta: "En el polling (sondeo y selección) del bus AS-i, un esclavo transmite:",
        opciones: [
          "Cuando detecta el medio libre",
          "Cuando recibe el token",
          "En cualquier momento si tiene datos urgentes",
          "Solo cuando el maestro le interroga en su turno"
        ],
        correcta: 3,
        explicacion: "En el método de polling (sondeo), hay un nodo maestro que interroga a cada esclavo en orden cíclico. El esclavo solo puede responder cuando el maestro le pregunta, eliminando las colisiones por completo."
      },
      {
        pregunta: "¿Cuál es la principal ventaja del token passing frente a CSMA/CD?",
        opciones: [
          "Es más sencillo de implementar",
          "No requiere cableado específico",
          "Funciona en cualquier topología",
          "Es determinista: garantiza que cada dispositivo recibirá el turno en un tiempo máximo predecible"
        ],
        correcta: 3,
        explicacion: "El token passing es determinista: el tiempo máximo de espera para transmitir es conocido y acotado (tiempo de rotación del token). CSMA/CD es no determinista porque las colisiones introducen retardos variables."
      },
      {
        pregunta: "¿Por qué CSMA/CA se usa en Wi-Fi en lugar de CSMA/CD?",
        opciones: [
          "Porque Wi-Fi opera a mayor velocidad que Ethernet",
          "Porque IEEE 802.11 no permite retransmisiones",
          "Porque Wi-Fi usa señalización en banda base",
          "Porque en un medio inalámbrico el dispositivo no puede detectar colisiones mientras transmite"
        ],
        correcta: 3,
        explicacion: "En un nodo Wi-Fi, mientras transmite, no puede 'escuchar' simultáneamente el canal (problema del terminal oculto y la atenuación de la propia señal). Por ello se usa CA (evitación de colisiones) antes de transmitir en lugar de CD (detección tras colisión)."
      },
      {
        pregunta: "En CSMA/CD, cuando se detecta una colisión, las estaciones:",
        opciones: [
          "Esperan a que el maestro les asigne turno",
          "Envían el frame al nodo de respaldo",
          "Aumentan la velocidad de transmisión para ganar",
          "Detienen la transmisión, envían señal de jam y esperan un tiempo aleatorio (backoff)"
        ],
        correcta: 3,
        explicacion: "Tras detectar una colisión, la estación: 1) detiene la transmisión, 2) envía una señal de jam (32-48 bits) para asegurar que todos los nodos detecten la colisión, 3) espera un tiempo aleatorio (algoritmo de backoff exponencial binario) antes de reintentar."
      },
      {
        pregunta: "CSMA/CA (IEEE 802.11) corresponde al estándar de:",
        opciones: ["Ethernet cableada", "Bluetooth", "ZigBee", "Wi-Fi"],
        correcta: 3,
        explicacion: "IEEE 802.11 define los estándares Wi-Fi. Usa CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) con el mecanismo DCF (Distributed Coordination Function) para gestionar el acceso al medio inalámbrico."
      },
      {
        pregunta: "La señal de 'jam' en CSMA/CD sirve para:",
        opciones: [
          "Indicar al router que recalcule la ruta",
          "Confirmar al receptor que el frame llegó correctamente",
          "Solicitar retransmisión al emisor original",
          "Avisar a todas las estaciones de que se ha producido una colisión y deben detener la transmisión"
        ],
        correcta: 3,
        explicacion: "La señal de jam (secuencia de 32-48 bits) se transmite tras detectar una colisión para asegurar que todos los nodos del segmento también la detecten (ya que la colisión puede ser de baja energía y no detectarse en nodos alejados)."
      },
      {
        pregunta: "La 'A' de CSMA/CA significa:",
        opciones: [
          "Autenticación",
          "Arbitraje",
          "Amplificación",
          "Avoidance (evitación de colisión antes de que se produzca)"
        ],
        correcta: 3,
        explicacion: "CA = Collision Avoidance (evitación de colisión). El nodo espera un tiempo aleatorio (DIFS + backoff) y, si el medio está libre durante ese tiempo, transmite. Evita la colisión antes de que ocurra, en lugar de detectarla después."
      }
    ]
  },
  {
    id: "practica_rs232",
    nombre: "Práctica RS-232 / PuTTY / Wireshark / ASCII",
    preguntas: [
      {
        pregunta: "¿Cuál es el valor decimal de 0x41 y a qué carácter ASCII corresponde?",
        opciones: ["41 → ')'", "65 → 'A'", "65 → 'a'", "41 → 'A'"],
        correcta: 1,
        explicacion: "0x41 en hexadecimal = 4×16 + 1 = 65 en decimal. Según la tabla ASCII, el código 65 corresponde a la letra 'A' mayúscula. La 'a' minúscula es 97 (0x61)."
      },
      {
        pregunta: "En la práctica, Wireshark capturó el tráfico con USBcap en lugar de en la interfaz Ethernet. ¿Por qué?",
        opciones: [
          "Porque Ethernet no puede capturar RS-232",
          "Porque RS-232 usa el protocolo USB internamente",
          "Porque el adaptador USB-RS232 transporta los datos RS-232 sobre USB, y USBcap captura ese tráfico",
          "Porque Wireshark no soporta Ethernet en Windows"
        ],
        correcta: 2,
        explicacion: "El adaptador USB-RS232 (PL2303/FTDI) convierte la señal RS-232 en paquetes USB. En el PC, los datos pasan por el bus USB, no por Ethernet. USBcap (plugin de Wireshark) captura el tráfico USB donde viajan los datos RS-232."
      },
      {
        pregunta: "En el osciloscopio, se observó el patrón binario 0110 1000. ¿A qué letra ASCII (decimal 104) corresponde?",
        opciones: ["'H' mayúscula", "'h' minúscula", "'k' minúscula", "'d' minúscula"],
        correcta: 1,
        explicacion: "0110 1000 en binario = 0×128 + 1×64 + 1×32 + 0×16 + 1×8 + 0×4 + 0×2 + 0×1 = 64+32+8 = 104 decimal = 0x68 → 'h' minúscula en ASCII. ('H' mayúscula es 72 = 0x48)."
      },
      {
        pregunta: "Una trama RS-232 '9600 8N1' transmite 10 bits por carácter. ¿Cuánto tarda en transmitirse un carácter?",
        opciones: ["1 µs", "104 µs", "~1042 µs (aprox. 1 ms)", "9600 µs"],
        correcta: 2,
        explicacion: "A 9600 baudios, cada bit dura 1/9600 ≈ 104 µs. Una trama 8N1 tiene 10 bits (1 start + 8 datos + 1 stop), por lo que un carácter dura 10 × 104 µs ≈ 1042 µs (aproximadamente 1 ms)."
      },
      {
        pregunta: "En el cable nulo-módem fabricado en clase, ¿para qué se usó el termorretráctil?",
        opciones: [
          "Para aislar eléctricamente el apantallamiento del cable",
          "Para proteger y cubrir la soldadura de cada hilo en el pin del conector DB-9",
          "Para sujetar la carcasa del conector al cable",
          "Para marcar con colores los distintos hilos del cable multifilar"
        ],
        correcta: 1,
        explicacion: "El termorretráctil (heat shrink tubing) se aplica sobre cada unión soldada pin-hilo del conector DB-9 para aislarla eléctricamente y protegerla mecánicamente, evitando cortocircuitos entre pines adyacentes."
      }
    ]
  }
];
