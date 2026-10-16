// Banco de preguntas — UT1: Informática Industrial
// Fuente: banco_test_aules.xml · J. Monrabal Mateo · CFGS Automatización y Robótica Industrial

const TEMAS_GSARI = [
  {
    id: "ra1_a",
    nombre: "RA1.a — Documentación técnica de sistemas industriales",
    preguntas: [
      {
        pregunta: "¿Qué documento describe la topología física y lógica de los componentes de un sistema informático industrial antes de su montaje?",
        opciones: [
        "El manual de usuario del procesador",
        "El plano de instalación o proyecto técnico",
        "La hoja de especificaciones de la memoria RAM",
        "El registro de averías del sistema"
        ],
        correcta: 1,
        explicacion: "Justificación: El plano de instalación o proyecto técnico recoge la topología, los requisitos de espacio, alimentación y comunicaciones del sistema antes de su montaje. El manual del procesador, la hoja de RAM y el registro de averías son documentos parciales que no describen la instalación completa."
      },
      {
        pregunta: "En un entorno industrial, ¿cuál es el primer paso al estudiar una instalación informática existente?",
        opciones: [
        "Sustituir los componentes obsoletos",
        "Analizar la documentación técnica disponible",
        "Instalar el sistema operativo",
        "Conectar el equipo a la red corporativa"
        ],
        correcta: 1,
        explicacion: "Justificación: Antes de cualquier intervención, el técnico debe revisar la documentación técnica (planos, manuales, historial de mantenimiento) para comprender la instalación. Sustituir componentes o instalar software sin ese análisis previo puede agravar los problemas existentes."
      },
      {
        pregunta: "¿Qué característica distingue principalmente a un sistema informático industrial de uno de oficina?",
        opciones: [
        "El uso exclusivo de monitores TFT",
        "La mayor resistencia a perturbaciones eléctricas y ambientales",
        "La ausencia de unidad central de proceso",
        "El uso obligatorio de Windows como sistema operativo"
        ],
        correcta: 1,
        explicacion: "Justificación: Los PCs industriales están diseñados para funcionar en entornos hostiles con interferencias electromagnéticas, variaciones de temperatura, polvo y vibraciones. Los equipos de oficina no están preparados para estas condiciones."
      },
      {
        pregunta: "¿Qué información es imprescindible recopilar antes de integrar un PC en un entorno industrial?",
        opciones: [
        "El precio de mercado del equipo",
        "El historial de compras del departamento",
        "Las condiciones ambientales (temperatura, humedad, polvo) del entorno",
        "El nombre del fabricante del teclado"
        ],
        correcta: 2,
        explicacion: "Justificación: Las condiciones ambientales determinan el tipo de PC adecuado (sellado, refrigeración pasiva, rango de temperatura ampliado) y las medidas de protección necesarias. El precio y el historial de compras son datos administrativos, no técnicos."
      },
      {
        pregunta: "¿Por qué es necesario estudiar la instalación eléctrica del entorno antes de instalar un sistema informático industrial?",
        opciones: [
        "Para calcular el coste de la factura eléctrica mensual",
        "Para garantizar que el suministro de energía cumple los requisitos del sistema",
        "Para seleccionar el color del cableado",
        "Para determinar la marca del monitor"
        ],
        correcta: 1,
        explicacion: "Justificación: La instalación eléctrica debe proporcionar la tensión, frecuencia y potencia correctas, además de contar con toma de tierra y protecciones adecuadas. Un suministro deficiente puede dañar los componentes o provocar inestabilidad."
      },
      {
        pregunta: "¿Cuál de las siguientes describe mejor la función de un SAI (Sistema de Alimentación Ininterrumpida) en una instalación industrial?",
        opciones: [
        "Aumentar la velocidad de transferencia de datos de la red",
        "Mantener el suministro eléctrico durante cortes de tensión",
        "Refrigerar los componentes internos del PC",
        "Gestionar el acceso remoto al sistema"
        ],
        correcta: 1,
        explicacion: "Justificación: El SAI (UPS) incorpora baterías que suministran energía al sistema durante un corte eléctrico, permitiendo una parada controlada o la continuidad del proceso. No interviene en la refrigeración ni en la red de datos."
      },
      {
        pregunta: "Al realizar el estudio de una instalación industrial, ¿qué factor ambiental puede requerir el uso de un PC con caja sellada?",
        opciones: [
        "La presencia de una red WiFi potente",
        "El exceso de polvo o partículas en suspensión",
        "La falta de monitores de alta resolución",
        "La escasez de puertos USB disponibles"
        ],
        correcta: 1,
        explicacion: "Justificación: El polvo y las partículas en suspensión obstruyen ventiladores y se depositan sobre circuitos, pudiendo provocar cortocircuitos o sobrecalentamiento. Una caja sellada con grado de protección IP adecuado evita la entrada de partículas."
      },
      {
        pregunta: "¿Qué norma internacional establece requisitos de compatibilidad electromagnética (CEM) relevantes para sistemas informáticos industriales en Europa?",
        opciones: [
        "ISO 9001",
        "IEC 61000",
        "IEEE 802.11",
        "USB 3.2 Gen 2"
        ],
        correcta: 1,
        explicacion: "Justificación: La norma IEC 61000 y la Directiva CEM 2014/30/UE regulan los límites de emisión e inmunidad electromagnética de los equipos. ISO 9001 es gestión de calidad, IEEE 802.11 es WiFi y USB 3.2 es una interfaz de datos."
      },
      {
        pregunta: "¿Cuál es el objetivo principal de integrar un sistema informático en un entorno industrial de automatización?",
        opciones: [
        "Gestionar correos electrónicos del personal de fábrica",
        "Supervisar, controlar y registrar datos de proceso en tiempo real",
        "Almacenar copias de seguridad de documentos ofimáticos",
        "Gestionar el inventario de papelería del departamento"
        ],
        correcta: 1,
        explicacion: "Justificación: En automatización industrial, el PC actúa como SCADA, HMI o controlador, supervisando sensores, actuando sobre el proceso y registrando datos en tiempo real. El correo o la ofimática son funciones secundarias o ajenas al ámbito de control."
      },
      {
        pregunta: "¿Qué aspecto del entorno industrial justifica el uso de PCs embebidos sin partes móviles?",
        opciones: [
        "La necesidad de mayor potencia gráfica para videojuegos",
        "Las vibraciones y choques mecánicos presentes en la maquinaria industrial",
        "La mayor velocidad de conexión a Internet",
        "La menor necesidad de memoria RAM en entornos industriales"
        ],
        correcta: 1,
        explicacion: "Justificación: Las vibraciones y golpes mecánicos dañan discos duros convencionales y ventiladores. Los PCs embebidos usan SSD, disipación pasiva y diseño compacto para sobrevivir en esas condiciones."
      },
      {
        pregunta: "¿Cuál de los siguientes rangos de temperatura es habitual en las especificaciones de un PC industrial frente a uno de oficina?",
        opciones: [
        "0 °C a 25 °C (industrial) frente a 0 °C a 40 °C (oficina)",
        "0 °C a 60 °C (industrial) frente a 0 °C a 35 °C (oficina)",
        "–40 °C a 85 °C (industrial) frente a 0 °C a 60 °C (oficina)",
        "Ambos tienen el mismo rango de temperatura de funcionamiento"
        ],
        correcta: 1,
        explicacion: "Justificación: Los PCs industriales suelen especificarse para rangos de 0 °C a 60 °C (o más amplio en versiones ruggedizadas), mientras que los de oficina típicamente se limitan a 0 °C–35 °C. El diseño industrial incluye disipadores y materiales aptos para temperaturas más extremas."
      },
      {
        pregunta: "¿Cuál de los siguientes elementos NO forma parte del estudio previo de una instalación informática industrial?",
        opciones: [
        "Análisis de las perturbaciones electromagnéticas del entorno",
        "Revisión de la alimentación eléctrica disponible",
        "Elección del fondo de pantalla del sistema operativo",
        "Evaluación de las condiciones ambientales (temperatura, polvo, humedad)"
        ],
        correcta: 2,
        explicacion: "Justificación: El fondo de pantalla es una preferencia estética sin relevancia técnica. El estudio previo debe contemplar las perturbaciones electromagnéticas, la calidad del suministro eléctrico y las condiciones ambientales que pueden afectar la fiabilidad del sistema."
      },
    ]
  },
  {
    id: "ra1_b",
    nombre: "RA1.b — Componentes hardware de sistemas informáticos",
    preguntas: [
      {
        pregunta: "¿Qué componente de un ordenador ejecuta las instrucciones de los programas?",
        opciones: [
        "La memoria RAM",
        "El disco duro",
        "El procesador (CPU)",
        "La tarjeta gráfica"
        ],
        correcta: 2,
        explicacion: "Justificación: La CPU (Unidad Central de Proceso) es el componente que lee, decodifica y ejecuta las instrucciones. La RAM almacena datos temporalmente, el disco duro los almacena de forma permanente y la GPU se especializa en renderizado gráfico."
      },
      {
        pregunta: "¿Cuál es la función principal de la placa base en un sistema informático?",
        opciones: [
        "Almacenar los datos de forma permanente",
        "Interconectar todos los componentes del sistema",
        "Controlar la velocidad del ventilador de CPU",
        "Gestionar la conexión WiFi"
        ],
        correcta: 1,
        explicacion: "Justificación: La placa base es el bus central que conecta la CPU, RAM, almacenamiento, tarjetas de expansión y puertos de E/S. El almacenamiento permanente corresponde al disco, y la WiFi puede gestionarse mediante una tarjeta específica o módulo M.2."
      },
      {
        pregunta: "¿Qué tipo de memoria pierde su contenido al apagar el ordenador?",
        opciones: [
        "ROM",
        "Flash",
        "RAM",
        "EEPROM"
        ],
        correcta: 2,
        explicacion: "Justificación: La RAM (Random Access Memory) es volátil: necesita alimentación continua para mantener los datos. ROM, Flash y EEPROM son no volátiles; conservan su contenido sin alimentación."
      },
      {
        pregunta: "¿Qué componente es responsable de convertir la corriente alterna (CA) en corriente continua (CC) para alimentar los componentes del PC?",
        opciones: [
        "El chipset",
        "La fuente de alimentación",
        "El condensador de la placa base",
        "La batería CMOS"
        ],
        correcta: 1,
        explicacion: "Justificación: La fuente de alimentación (PSU) toma la CA de la red (230 V en Europa) y la convierte en las tensiones continuas requeridas (+3,3 V, +5 V, +12 V, –12 V). El chipset gestiona comunicaciones internas y la batería CMOS solo mantiene la configuración de la BIOS."
      },
      {
        pregunta: "¿Qué función desempeña el chipset en una placa base?",
        opciones: [
        "Almacenar el sistema operativo",
        "Procesar las instrucciones aritméticas",
        "Gestionar la comunicación entre el procesador, la memoria y los periféricos",
        "Controlar la velocidad de rotación del disco duro"
        ],
        correcta: 2,
        explicacion: "Justificación: El chipset actúa como intermediario entre la CPU y el resto de componentes (RAM, puertos, almacenamiento). El almacenamiento del SO corresponde al disco, el procesamiento aritmético a la UAL de la CPU."
      },
      {
        pregunta: "¿Qué es la BIOS/UEFI en un sistema informático?",
        opciones: [
        "Un programa antivirus integrado en la placa base",
        "El firmware que inicializa el hardware y arranca el sistema operativo",
        "Un protocolo de red de alta velocidad",
        "Un tipo de memoria RAM de acceso aleatorio"
        ],
        correcta: 1,
        explicacion: "Justificación: La BIOS/UEFI es el firmware almacenado en una memoria flash de la placa base. Realiza el POST, inicializa el hardware y transfiere el control al gestor de arranque del SO. No es antivirus ni protocolo de red."
      },
      {
        pregunta: "¿Cuál de los siguientes es un ejemplo de periférico de salida?",
        opciones: [
        "Teclado",
        "Ratón",
        "Monitor",
        "Escáner"
        ],
        correcta: 2,
        explicacion: "Justificación: El monitor muestra información procesada por el PC, por lo que es un periférico de salida. El teclado y el ratón son de entrada; el escáner también es de entrada (convierte imagen física en datos digitales)."
      },
      {
        pregunta: "¿Qué tipo de puerto se usa habitualmente para conectar el ratón y el teclado en sistemas modernos?",
        opciones: [
        "RS-232C",
        "Parallel (Centronics)",
        "USB",
        "FireWire"
        ],
        correcta: 2,
        explicacion: "Justificación: Los sistemas modernos usan USB para teclado y ratón. RS-232C es un puerto serie obsoleto para comunicaciones; Centronics es el antiguo puerto paralelo para impresoras; FireWire (IEEE 1394) se usa para transferencia de datos multimedia."
      },
      {
        pregunta: "¿Cuántos pines tiene el conector principal ATX que alimenta la placa base en los sistemas actuales?",
        opciones: [
        "20",
        "22",
        "24",
        "28"
        ],
        correcta: 2,
        explicacion: "Justificación: El estándar ATX12V 2.x usa un conector de 24 pines para la placa base (evolución del original de 20 pines). El conector de 24 pines permite suministrar mayor corriente a los slots PCIe modernos."
      },
      {
        pregunta: "¿Qué tipo de módulo de memoria RAM se usa en portátiles y sistemas de pequeño formato?",
        opciones: [
        "DIMM estándar",
        "SO-DIMM",
        "RIMM",
        "ECC Registered DIMM"
        ],
        correcta: 1,
        explicacion: "Justificación: El SO-DIMM (Small Outline DIMM) es una versión más corta del DIMM estándar, diseñada para portátiles y sistemas embebidos donde el espacio es limitado. Los DIMM estándar se usan en sobremesas; los Registered DIMM en servidores."
      },
      {
        pregunta: "¿Cuál es la función del caché L1 en un procesador?",
        opciones: [
        "Almacenar el sistema operativo completo",
        "Intercambiar datos con el disco duro",
        "Almacenar temporalmente datos e instrucciones de acceso muy frecuente para el núcleo",
        "Gestionar la comunicación con la red"
        ],
        correcta: 2,
        explicacion: "Justificación: El caché L1 es la memoria más rápida y cercana al núcleo del procesador; almacena datos e instrucciones de uso inmediato para minimizar los ciclos de espera. Su capacidad es pequeña (decenas de KB) pero su latencia es mínima."
      },
      {
        pregunta: "¿Qué componente de un PC industrial sustituye al disco duro mecánico para mayor resistencia a vibraciones?",
        opciones: [
        "Disco óptico Blu-ray",
        "Tarjeta de expansión ISA",
        "SSD (Solid State Drive)",
        "DIMM de alta capacidad"
        ],
        correcta: 2,
        explicacion: "Justificación: Los SSD no tienen partes móviles (sin cabezal ni plato giratorio), por lo que son inmunes a las vibraciones y choques mecánicos habituales en entornos industriales. Los HDD mecánicos son muy vulnerables a estos factores."
      },
      {
        pregunta: "¿Qué elemento físico de la placa base aloja y conecta el procesador?",
        opciones: [
        "El slot PCIe",
        "El socket",
        "El slot DIMM",
        "El conector SATA"
        ],
        correcta: 1,
        explicacion: "Justificación: El socket es el zócalo de la placa base donde se instala el procesador. Los slots PCIe alojan tarjetas de expansión, los slots DIMM alojan módulos de RAM y los conectores SATA conectan discos."
      },
      {
        pregunta: "¿Qué tipo de ranura de expansión permite añadir una tarjeta gráfica de alto rendimiento en placas base actuales?",
        opciones: [
        "ISA",
        "PCI",
        "AGP",
        "PCIe x16"
        ],
        correcta: 3,
        explicacion: "Justificación: El slot PCIe x16 (PCI Express ×16) es el estándar actual para tarjetas gráficas, ofreciendo gran ancho de banda. ISA y PCI son interfaces antiguas, y AGP es el predecesor de PCIe, ya obsoleto."
      },
      {
        pregunta: "¿Cuál de los siguientes voltajes NO proporciona una fuente de alimentación ATX estándar?",
        opciones: [
        "+3,3 V",
        "+5 V",
        "+12 V",
        "+24 V"
        ],
        correcta: 3,
        explicacion: "Justificación: Una PSU ATX estándar suministra +3,3 V, +5 V, +12 V y –12 V. El +24 V no es un voltaje estándar de salida de las fuentes de alimentación de PC."
      },
      {
        pregunta: "¿Qué componente almacena de forma no volátil la configuración de la BIOS entre apagados?",
        opciones: [
        "RAM DDR4",
        "Caché L2",
        "Memoria CMOS alimentada por pila",
        "Memoria virtual del SO"
        ],
        correcta: 2,
        explicacion: "Justificación: Una pequeña batería (tipo CR2032) alimenta la memoria CMOS que conserva la configuración de la BIOS (fecha, hora, orden de arranque) cuando el PC está desconectado. La RAM DDR4 y la caché son volátiles; la memoria virtual es espacio en disco."
      },
      {
        pregunta: "¿Qué tipo de periférico es una impresora láser?",
        opciones: [
        "Entrada",
        "Salida",
        "Entrada/Salida",
        "Almacenamiento"
        ],
        correcta: 1,
        explicacion: "Justificación: La impresora produce una salida física (papel impreso) a partir de datos digitales enviados por el PC. Es un periférico de salida. Un dispositivo de Entrada/Salida sería, por ejemplo, una pantalla táctil."
      },
      {
        pregunta: "¿Cuál de los siguientes buses conecta directamente el procesador con el chipset en plataformas modernas?",
        opciones: [
        "Bus PCI Express (para periféricos)",
        "Bus SATA (para almacenamiento)",
        "Bus local del procesador (FSB, HyperTransport o DMI)",
        "Bus USB (para dispositivos externos)"
        ],
        correcta: 2,
        explicacion: "Justificación: El FSB (Front Side Bus), HyperTransport (AMD) o DMI (Intel) conectan directamente el procesador con el chipset o la memoria. PCIe conecta periféricos de expansión, SATA conecta almacenamiento y USB conecta dispositivos externos."
      },
    ]
  },
  {
    id: "ra1_c",
    nombre: "RA1.c — Sistemas operativos en entornos industriales",
    preguntas: [
      {
        pregunta: "¿Cuál es la diferencia principal entre la arquitectura CISC y la arquitectura RISC?",
        opciones: [
        "CISC usa instrucciones simples y uniformes; RISC usa instrucciones complejas",
        "CISC usa instrucciones complejas de longitud variable; RISC usa instrucciones simples y uniformes",
        "CISC es siempre más rápido que RISC en todas las aplicaciones",
        "RISC solo se usa en ordenadores personales de escritorio"
        ],
        correcta: 1,
        explicacion: "Justificación: La arquitectura CISC incluye instrucciones complejas que pueden tardar varios ciclos (Intel x86). RISC usa instrucciones simples de tamaño fijo que se ejecutan en un ciclo (ARM, MIPS), lo que facilita la segmentación (pipeline)."
      },
      {
        pregunta: "¿Qué función realiza la UAL (Unidad Aritmético-Lógica) dentro del procesador?",
        opciones: [
        "Gestionar el acceso a la memoria RAM",
        "Ejecutar operaciones aritméticas y lógicas sobre los datos",
        "Controlar el flujo de instrucciones del programa",
        "Almacenar el estado del sistema operativo"
        ],
        correcta: 1,
        explicacion: "Justificación: La UAL ejecuta sumas, restas, multiplicaciones, divisiones y operaciones lógicas (AND, OR, NOT). El control del flujo de instrucciones corresponde a la Unidad de Control (UC) y el acceso a la RAM al controlador de memoria."
      },
      {
        pregunta: "¿Qué parámetro expresa la velocidad de un procesador?",
        opciones: [
        "Amperios (A)",
        "Megahercios o gigahercios (MHz/GHz)",
        "Gigabytes (GB)",
        "Vatios (W)"
        ],
        correcta: 1,
        explicacion: "Justificación: La frecuencia de reloj en MHz o GHz indica cuántos ciclos por segundo ejecuta el procesador. Los amperios miden corriente, los GB miden capacidad de almacenamiento y los vatios miden potencia consumida o disipada."
      },
      {
        pregunta: "¿Qué diferencia de tensión de funcionamiento existe entre DDR3 y DDR4?",
        opciones: [
        "DDR4 funciona a mayor tensión que DDR3",
        "DDR4 funciona a 1,2 V frente a los 1,5 V de DDR3",
        "Ambos funcionan a la misma tensión de 1,35 V",
        "DDR3 funciona a 1,2 V y DDR4 a 1,8 V"
        ],
        correcta: 1,
        explicacion: "Justificación: DDR3 estándar opera a 1,5 V (DDR3L a 1,35 V), mientras que DDR4 opera a 1,2 V. Esta reducción de tensión mejora la eficiencia energética y permite mayores frecuencias de funcionamiento."
      },
      {
        pregunta: "¿Qué es el TDP (Thermal Design Power) de un procesador?",
        opciones: [
        "La velocidad máxima del bus de datos interno",
        "La cantidad de caché de nivel 3 disponible",
        "La potencia máxima de calor que debe disipar el sistema de refrigeración",
        "El número máximo de núcleos activos simultáneamente"
        ],
        correcta: 2,
        explicacion: "Justificación: El TDP indica la potencia térmica máxima que el sistema de refrigeración debe ser capaz de disipar para mantener el procesador dentro de su temperatura de operación. Es el dato clave para seleccionar el disipador adecuado."
      },
      {
        pregunta: "¿Qué ventaja ofrece el canal dual (dual channel) de memoria RAM?",
        opciones: [
        "Duplica la frecuencia de reloj del procesador",
        "Permite el acceso simultáneo a dos módulos, duplicando el ancho de banda de memoria",
        "Reduce el consumo de energía a la mitad respecto al canal simple",
        "Aumenta la capacidad máxima de almacenamiento en disco duro"
        ],
        correcta: 1,
        explicacion: "Justificación: En canal dual, el controlador de memoria accede a dos módulos en paralelo, duplicando el ancho de banda efectivo. No afecta a la frecuencia de la CPU ni al almacenamiento en disco."
      },
      {
        pregunta: "¿Qué diferencia existe entre un socket LIF y un socket ZIF para procesadores?",
        opciones: [
        "LIF es de bajo consumo energético y ZIF de alto consumo",
        "En el socket ZIF se inserta el procesador sin aplicar fuerza; en el LIF se requiere fuerza de inserción",
        "LIF es exclusivo de procesadores Intel y ZIF de AMD",
        "ZIF solo se usa en servidores de alta densidad"
        ],
        correcta: 1,
        explicacion: "Justificación: ZIF (Zero Insertion Force) incorpora una palanca de liberación que permite insertar o extraer el procesador sin presión, protegiendo los pines. LIF (Low Insertion Force) requería cierta fuerza y era más propenso a doblar pines."
      },
      {
        pregunta: "¿Qué función realiza el puente norte (Northbridge) en el chipset tradicional?",
        opciones: [
        "Gestionar los dispositivos USB y el audio",
        "Conectar el procesador con la RAM y la tarjeta gráfica (PCIe)",
        "Controlar los discos duros SATA",
        "Gestionar la BIOS y el reloj de sistema"
        ],
        correcta: 1,
        explicacion: "Justificación: El Northbridge gestionaba el tráfico de alta velocidad: CPU-RAM y CPU-GPU. El Southbridge gestionaba dispositivos de menor velocidad como USB, SATA y audio. En procesadores modernos, el controlador de memoria está integrado en la propia CPU."
      },
      {
        pregunta: "¿Cuál es la característica principal de un monitor TFT frente a un monitor CRT?",
        opciones: [
        "El monitor TFT consume más energía",
        "El monitor TFT tiene mayor peso y profundidad",
        "El monitor TFT usa tecnología de cristal líquido y es más delgado, ligero y eficiente",
        "El monitor CRT ofrece siempre mayor resolución nativa"
        ],
        correcta: 2,
        explicacion: "Justificación: Los monitores TFT usan pantallas de cristal líquido retroiluminadas, lo que los hace planos, ligeros y con menor consumo que los CRT, que usaban tubos de vacío con electrones acelerados."
      },
      {
        pregunta: "¿Qué tecnología usa la impresora láser para fijar el tóner sobre el papel?",
        opciones: [
        "Inyección de gotas de tinta líquida",
        "Impacto mecánico de agujas sobre una cinta entintada",
        "Carga electrostática más fusión térmica del tóner",
        "Sublimación de tinta sólida por calor directo"
        ],
        correcta: 2,
        explicacion: "Justificación: La impresora láser carga electrostáticamente un tambor fotosensible, atrae el tóner en polvo y luego lo fija sobre el papel mediante calor y presión en el fusor. La inyección de tinta usa gotas líquidas; la matricial usa agujas; la sublimación usa tinta sólida vaporizada."
      },
      {
        pregunta: "¿Cuál es la función del puente sur (Southbridge) del chipset?",
        opciones: [
        "Conectar el procesador con la RAM de alta velocidad",
        "Gestionar el bus gráfico PCIe x16",
        "Controlar dispositivos de E/S de velocidad media-baja: USB, SATA, audio, LAN",
        "Regular la frecuencia del procesador en tiempo real"
        ],
        correcta: 2,
        explicacion: "Justificación: El Southbridge gestionaba los dispositivos periféricos de menor ancho de banda: puertos USB, controladores SATA, audio integrado y LAN. El Northbridge gestionaba las interfaces de alta velocidad (CPU, RAM, GPU)."
      },
      {
        pregunta: "¿Qué ventaja ofrece el uso de caché L2 y L3 en el procesador?",
        opciones: [
        "Aumenta la capacidad de almacenamiento permanente del disco",
        "Reduce los tiempos de acceso a datos frecuentes, mejorando el rendimiento global",
        "Permite ejecutar varios sistemas operativos simultáneamente",
        "Aumenta la velocidad de la conexión de red local"
        ],
        correcta: 1,
        explicacion: "Justificación: El caché L2 y L3 almacena datos e instrucciones que la CPU puede necesitar próximamente, evitando accesos lentos a la RAM. Cuanto mayor es el caché, menos \"cache misses\" se producen y mayor es el rendimiento efectivo."
      },
      {
        pregunta: "¿Qué significa que una memoria RAM sea de tipo ECC (Error Correcting Code)?",
        opciones: [
        "Es más rápida que la DDR5 estándar en aplicaciones de juegos",
        "Detecta y corrige automáticamente errores de un bit, aumentando la fiabilidad en sistemas críticos",
        "Solo funciona en ordenadores portátiles de última generación",
        "Requiere un bus de datos dedicado de 256 bits"
        ],
        correcta: 1,
        explicacion: "Justificación: La memoria ECC añade bits adicionales para detectar y corregir errores de un bit sin interrumpir el sistema. Es esencial en servidores y sistemas de control industrial donde un error de memoria puede ser catastrófico."
      },
      {
        pregunta: "¿Cuál es la función del reloj de sistema (clock) en un PC?",
        opciones: [
        "Mostrar la hora y fecha en el escritorio del sistema operativo",
        "Sincronizar las operaciones de todos los componentes con una señal periódica",
        "Controlar la velocidad del ventilador de CPU en función de la temperatura",
        "Gestionar las interrupciones generadas por el teclado"
        ],
        correcta: 1,
        explicacion: "Justificación: El oscilador de reloj genera una señal cuadrada periódica que sincroniza todas las operaciones del sistema: cada flanco de reloj marca el ritmo al que la CPU, la memoria y los buses intercambian datos."
      },
      {
        pregunta: "¿Qué diferencia de velocidad de transferencia existe entre USB 3.0 y USB 2.0?",
        opciones: [
        "USB 3.0 es más lento pero consume menos energía que USB 2.0",
        "USB 3.0 transfiere hasta 5 Gbps frente a los 480 Mbps del USB 2.0",
        "USB 3.0 solo admite dispositivos de almacenamiento masivo",
        "USB 3.0 no es compatible con dispositivos USB 2.0"
        ],
        correcta: 1,
        explicacion: "Justificación: USB 3.0 (SuperSpeed) alcanza hasta 5 Gbps, mientras que USB 2.0 (High Speed) llega a 480 Mbps. USB 3.0 es retrocompatible con USB 2.0 y admite cualquier clase de dispositivo."
      },
      {
        pregunta: "¿Qué tipo de conector utiliza el puerto RS-232C para la comunicación serie?",
        opciones: [
        "RJ-45 (8P8C)",
        "BNC (coaxial)",
        "DB-9 o DB-25",
        "USB-C"
        ],
        correcta: 2,
        explicacion: "Justificación: RS-232C usa conectores tipo D-Sub: DB-25 (original, 25 pines) o DB-9 (versión reducida, 9 pines), siendo este último el más habitual en equipos industriales. RJ-45 es para Ethernet, BNC para coaxial y USB-C es estándar moderno."
      },
      {
        pregunta: "¿Qué parámetro describe la velocidad de transferencia del bus de datos en una placa base?",
        opciones: [
        "La frecuencia de la CPU en GHz",
        "El ancho de banda del bus expresado en GB/s o MT/s",
        "La capacidad máxima de RAM instalable en GB",
        "El voltaje de alimentación del procesador"
        ],
        correcta: 1,
        explicacion: "Justificación: El ancho de banda de un bus se expresa en GB/s o MT/s, indicando cuántos datos puede transferir por unidad de tiempo. La frecuencia de la CPU y el voltaje son parámetros del procesador, no del bus de datos general."
      },
      {
        pregunta: "¿Cuál es la función de los registros internos del procesador?",
        opciones: [
        "Almacenar el sistema operativo de forma permanente durante el funcionamiento",
        "Almacenar temporalmente datos e instrucciones que el procesador usa en cada ciclo de reloj",
        "Gestionar la comunicación entre el PC y los discos duros SATA",
        "Controlar el acceso de los usuarios a la red local"
        ],
        correcta: 1,
        explicacion: "Justificación: Los registros son posiciones de memoria interna ultra-rápida dentro del propio núcleo del procesador que almacenan los operandos y resultados de las instrucciones en curso. Su capacidad es mínima pero su velocidad es máxima."
      },
    ]
  },
  {
    id: "ra1_d",
    nombre: "RA1.d — Redes y comunicaciones industriales",
    preguntas: [
      {
        pregunta: "¿Qué precaución es fundamental antes de conectar físicamente componentes internos de un PC?",
        opciones: [
        "Encender el monitor para verificar el voltaje de alimentación",
        "Desconectar la alimentación eléctrica y descargarse de electricidad estática",
        "Instalar primero el sistema operativo en otro equipo",
        "Conectar el cable de red antes de abrir la carcasa"
        ],
        correcta: 1,
        explicacion: "Justificación: La electricidad estática puede destruir componentes electrónicos sensibles, y la tensión residual en los condensadores puede causar descargas eléctricas. Siempre se debe desconectar la alimentación y usar pulsera antiestática antes de manipular el interior."
      },
      {
        pregunta: "¿En qué tipo de slot debe instalarse un módulo de RAM DDR4?",
        opciones: [
        "Slot PCIe x16",
        "Slot DIMM DDR4",
        "Slot PCI convencional",
        "Conector SATA de 7 pines"
        ],
        correcta: 1,
        explicacion: "Justificación: Los módulos DDR4 solo son compatibles con los slots DIMM DDR4 de la placa base, que tienen una muesca en posición diferente a DDR3 para evitar instalaciones incorrectas. No son compatibles físicamente con PCIe, PCI ni SATA."
      },
      {
        pregunta: "¿Qué ocurre si se instalan los módulos RAM en slots no recomendados para canal dual?",
        opciones: [
        "El sistema funciona igualmente en canal dual",
        "El sistema no arranca bajo ninguna circunstancia",
        "El sistema funciona en canal simple, perdiendo el ancho de banda adicional del canal dual",
        "El módulo RAM se daña permanentemente por incompatibilidad"
        ],
        correcta: 2,
        explicacion: "Justificación: Para canal dual, los módulos deben instalarse en los pares de slots indicados por la placa base (normalmente slots del mismo color). Si se instalan en slots incorrectos, el sistema funciona pero en canal simple, con la mitad del ancho de banda disponible."
      },
      {
        pregunta: "¿Qué tipo de cable se usa para conectar un disco SSD SATA a la placa base?",
        opciones: [
        "Cable IDE de 40 conductores",
        "Cable SATA de 7 conductores (datos)",
        "Cable Molex de 4 pines",
        "Cable FireWire IEEE 1394a"
        ],
        correcta: 1,
        explicacion: "Justificación: La interfaz SATA usa un cable de datos de 7 conductores (más delgado y flexible que el IDE) y un conector de alimentación SATA de 15 pines independiente. Molex es un conector de alimentación antiguo; FireWire es para periféricos externos."
      },
      {
        pregunta: "¿Cuántos pines tiene el conector de alimentación SATA para un disco duro o SSD?",
        opciones: [
        "4 pines (Molex)",
        "15 pines",
        "24 pines",
        "8 pines (EPS)"
        ],
        correcta: 1,
        explicacion: "Justificación: El conector de alimentación SATA tiene 15 pines que suministran +3,3 V, +5 V y +12 V, con pines GND intercalados. El conector Molex tiene 4 pines; el ATX24 alimenta la placa base; el EPS8 alimenta el procesador."
      },
      {
        pregunta: "¿Qué conector de la fuente de alimentación se usa para alimentar una tarjeta gráfica de alto rendimiento?",
        opciones: [
        "Conector ATX 24 pines",
        "Conector Molex 4 pines (periférico)",
        "Conector PCIe de 6 u 8 pines",
        "Conector SATA de 15 pines"
        ],
        correcta: 2,
        explicacion: "Justificación: Las tarjetas gráficas de alto rendimiento requieren conectores PCIe de 6 pines (75 W) u 8 pines (150 W), o combinaciones de ambos, directamente desde la PSU. La ranura PCIe de la placa solo puede suministrar 75 W adicionales como máximo."
      },
      {
        pregunta: "¿En qué secuencia correcta se debe ensamblar un PC desde cero?",
        opciones: [
        "Instalar SO → montar placa base → conectar fuente → instalar CPU",
        "Instalar CPU y RAM en placa base fuera de la caja → fijar placa en caja → conectar fuente → conectar discos → conectar panel frontal",
        "Conectar fuente → instalar SO → montar CPU → fijar placa base",
        "Instalar RAM → instalar SO → montar placa base → conectar CPU"
        ],
        correcta: 1,
        explicacion: "Justificación: La secuencia correcta es ensamblar primero la placa con CPU y RAM (fuera de la caja, para tener más espacio), fijarla a la caja, conectar la fuente, añadir el almacenamiento y finalmente conectar los cables del panel frontal. El SO se instala al final."
      },
      {
        pregunta: "¿Qué herramienta se usa para fijar los tornillos de la placa base en la caja sin dañar los circuitos impresos?",
        opciones: [
        "Destornillador plano de gran tamaño",
        "Destornillador Phillips del tamaño apropiado con punta magnética",
        "Alicates de punta fina",
        "Llave inglesa regulable"
        ],
        correcta: 1,
        explicacion: "Justificación: Los tornillos de la placa base son del tipo Phillips M3. Un destornillador Phillips del tamaño correcto con punta magnética facilita la manipulación sin forzar ni resbalar. Los alicates y la llave inglesa pueden dañar los tornillos o los componentes cercanos."
      },
      {
        pregunta: "¿Para qué sirve el cable \"speaker\" que se conecta al panel frontal de la placa base?",
        opciones: [
        "Para conectar altavoces externos de audio estéreo al PC",
        "Para emitir pitidos de diagnóstico POST durante el arranque",
        "Para activar el micrófono integrado del frontal de la caja",
        "Para controlar la velocidad del ventilador frontal del chasis"
        ],
        correcta: 1,
        explicacion: "Justificación: El altavoz del panel frontal emite los códigos de pitidos del POST que indican errores de hardware durante el arranque. No es un altavoz de audio para el sistema operativo, que usa un circuito diferente."
      },
      {
        pregunta: "¿Qué significa que un puerto sea \"hot-swap\"?",
        opciones: [
        "Que solo funciona con dispositivos de alta temperatura de operación",
        "Que permite conectar y desconectar dispositivos con el sistema encendido sin daños",
        "Que transfiere datos a velocidad superior a 10 Gbps",
        "Que requiere reinicio del sistema tras cada nueva conexión"
        ],
        correcta: 1,
        explicacion: "Justificación: Hot-swap permite añadir o retirar dispositivos sin apagar el sistema. Esto es especialmente útil en sistemas industriales que no pueden detener la producción para mantenimiento."
      },
      {
        pregunta: "¿Qué riesgo existe si se conecta un módulo RAM con el sistema encendido en un slot que no soporta hot-swap?",
        opciones: [
        "El sistema operativo detecta el módulo automáticamente sin ningún riesgo",
        "La RAM entra en modo de bajo consumo y reduce su frecuencia",
        "Puede producirse un cortocircuito o daño permanente en el módulo y en la placa base",
        "El sistema operativo instala los controladores automáticamente y continúa funcionando"
        ],
        correcta: 2,
        explicacion: "Justificación: Los slots DIMM no son hot-swap. Conectar RAM con el sistema encendido introduce corriente en un circuito activo sin las protecciones adecuadas, pudiendo quemar la placa base, el módulo o ambos."
      },
      {
        pregunta: "¿Qué velocidad de transferencia máxima teórica ofrece el estándar FireWire 800 (IEEE 1394b)?",
        opciones: [
        "480 Mbps",
        "800 Mbps",
        "1,6 Gbps",
        "5 Gbps"
        ],
        correcta: 1,
        explicacion: "Justificación: IEEE 1394b (FireWire 800) alcanza 800 Mbps, el doble que IEEE 1394a (FireWire 400 = 400 Mbps). Fue utilizado principalmente para cámaras de vídeo, discos externos y equipos de audio profesional antes de la consolidación del USB 3.0."
      },
    ]
  },
  {
    id: "ra1_e",
    nombre: "RA1.e — Seguridad en sistemas informáticos industriales",
    preguntas: [
      {
        pregunta: "¿Qué tipo de perturbación electromagnética se propaga a través del aire sin contacto físico?",
        opciones: [
        "Perturbación conducida (por el cable de alimentación)",
        "Perturbación radiada (por el espacio libre)",
        "Perturbación térmica por convección",
        "Perturbación mecánica por vibración"
        ],
        correcta: 1,
        explicacion: "Justificación: Las perturbaciones radiadas se propagan como ondas electromagnéticas por el espacio (antenas, motores, variadores). Las perturbaciones conducidas viajan a través de cables de alimentación o señal. Las otras opciones no son perturbaciones electromagnéticas."
      },
      {
        pregunta: "¿Qué efecto puede producir un pico de tensión (spike) en un sistema informático industrial?",
        opciones: [
        "Aumentar temporalmente la velocidad de procesamiento",
        "Provocar el reinicio controlado del sistema operativo",
        "Dañar componentes electrónicos de forma permanente",
        "Reducir el consumo energético del sistema"
        ],
        correcta: 2,
        explicacion: "Justificación: Los picos de tensión son sobretensiones transitorias de corta duración pero alta amplitud. Pueden superar el umbral de destrucción de los semiconductores causando daños irreversibles en condensadores, MOSFETs y otros componentes."
      },
      {
        pregunta: "¿Qué dispositivo protege un sistema informático industrial frente a cortes de suministro eléctrico?",
        opciones: [
        "Regulador de tensión pasivo (varistor)",
        "Filtro de red de alta frecuencia",
        "SAI (Sistema de Alimentación Ininterrumpida) / UPS",
        "Fusible de reposición automática"
        ],
        correcta: 2,
        explicacion: "Justificación: El SAI incorpora baterías que suministran energía al sistema durante un corte eléctrico, permitiendo una parada controlada o continuidad del proceso. El varistor protege de picos de tensión pero no de cortes; el filtro de red elimina ruido de alta frecuencia."
      },
      {
        pregunta: "¿Cuál de las siguientes es una fuente típica de interferencias electromagnéticas en un entorno industrial?",
        opciones: [
        "Un monitor TFT de baja emisión certificado CE",
        "Motores eléctricos y variadores de frecuencia (inversores)",
        "Un teclado inalámbrico Bluetooth de baja potencia",
        "Un ratón óptico con cable USB apantallado"
        ],
        correcta: 1,
        explicacion: "Justificación: Los motores eléctricos y los variadores de frecuencia son fuentes intensas de interferencias electromagnéticas tanto radiadas como conducidas. Los dispositivos de las otras opciones son fuentes de interferencia mínimas o negligibles."
      },
      {
        pregunta: "¿Qué norma regula los niveles de emisión e inmunidad electromagnética de equipos industriales en Europa?",
        opciones: [
        "ISO 9001 (gestión de calidad)",
        "IEC 61000 / Directiva CEM 2014/30/UE",
        "IEEE 802.3 (Ethernet)",
        "RoHS 2011/65/UE (sustancias peligrosas)"
        ],
        correcta: 1,
        explicacion: "Justificación: La familia de normas IEC 61000 establece los límites de emisión electromagnética y los requisitos de inmunidad para equipos electrónicos. La Directiva CEM transpone estos requisitos en la UE. ISO 9001, IEEE 802.3 y RoHS cubren ámbitos completamente diferentes."
      },
      {
        pregunta: "¿Qué perturbación eléctrica consiste en una variación lenta y prolongada de la tensión de red por encima o por debajo del valor nominal?",
        opciones: [
        "Pico de tensión (spike/transient)",
        "Ruido eléctrico superpuesto (noise)",
        "Fluctuación de tensión (sag o swell prolongado)",
        "Microcorte eléctrico (duración inferior a 20 ms)"
        ],
        correcta: 2,
        explicacion: "Justificación: Un sag es una caída de tensión prolongada por debajo del nominal; un swell es una elevación prolongada. Ambos pueden provocar inestabilidades en sistemas sin SAI. Los picos son transitorios breves y el ruido es una perturbación de alta frecuencia superpuesta."
      },
      {
        pregunta: "¿Por qué el polvo industrial es una perturbación importante para los sistemas informáticos?",
        opciones: [
        "Provoca interferencias electromagnéticas directas en el bus PCI",
        "Obstruye los ventiladores y actúa como aislante térmico, provocando sobrecalentamiento",
        "Corroe los contactos RJ-45 de la red Ethernet",
        "Reduce la velocidad de acceso de la memoria RAM"
        ],
        correcta: 1,
        explicacion: "Justificación: El polvo acumulado sobre el disipador y los ventiladores reduce el flujo de aire, actuando como aislante térmico. El resultado es un aumento progresivo de temperatura que puede llevar al throttling térmico o al fallo prematuro de componentes."
      },
      {
        pregunta: "¿Qué temperatura ambiente máxima recomienda habitualmente el fabricante para el funcionamiento de un PC estándar de oficina?",
        opciones: [
        "25 °C",
        "35 °C",
        "55 °C",
        "75 °C"
        ],
        correcta: 1,
        explicacion: "Justificación: La mayoría de PCs de oficina especifican una temperatura de operación de 0 °C a 35 °C. Por encima de 35 °C, el sistema de refrigeración puede no ser suficiente para mantener los componentes dentro de sus rangos de temperatura seguros."
      },
      {
        pregunta: "¿Cuál es la principal razón técnica por la que los PCs industriales prefieren SSD frente a discos duros mecánicos (HDD)?",
        opciones: [
        "Los SSD tienen siempre mayor capacidad de almacenamiento que los HDD",
        "Los SSD son más económicos que los HDD en todos los rangos de capacidad",
        "Los SSD no tienen partes móviles y son resistentes a vibraciones y choques mecánicos",
        "Los SSD consumen más energía, lo que mejora la estabilidad térmica en entornos fríos"
        ],
        correcta: 2,
        explicacion: "Justificación: Los HDD tienen platos giratorios y cabezales de lectura/escritura muy sensibles a las vibraciones. Los SSD, al no tener partes móviles, operan fiablemente en entornos con vibración mecánica intensa."
      },
      {
        pregunta: "¿Qué es la compatibilidad electromagnética (CEM/EMC)?",
        opciones: [
        "La capacidad de un dispositivo de funcionar sin alimentación eléctrica externa",
        "La capacidad de un dispositivo de funcionar correctamente en su entorno electromagnético sin perturbar a otros dispositivos",
        "La norma que regula la velocidad máxima de los buses de datos industriales",
        "La propiedad de los cables apantallados de aumentar la velocidad de transferencia"
        ],
        correcta: 1,
        explicacion: "Justificación: La CEM tiene dos aspectos: emisión (que el dispositivo no perturbe a otros) e inmunidad (que el dispositivo funcione correctamente aunque otros lo perturben). Ambos se verifican mediante ensayos normalizados."
      },
      {
        pregunta: "¿Qué daño puede causar la humedad excesiva en una placa base de un sistema informático?",
        opciones: [
        "Sobrecalentamiento de los componentes de potencia",
        "Condensación sobre pistas conductoras, provocando cortocircuitos o corrosión",
        "Reducción de la frecuencia del reloj del procesador",
        "Pérdida de datos en la memoria RAM volátil por interferencia"
        ],
        correcta: 1,
        explicacion: "Justificación: La condensación forma una película de agua que puede cortocircuitar pistas conductoras contiguas, corroer contactos metálicos y degradar los materiales aislantes del PCB. Es una de las causas más comunes de averías en instalaciones con temperatura y humedad variables."
      },
      {
        pregunta: "¿Qué medida reduce las interferencias conducidas que entran al sistema por la línea de alimentación eléctrica?",
        opciones: [
        "Apantallamiento de los cables de datos Ethernet",
        "Uso de conectores USB blindados de tipo C",
        "Filtro de línea (power line filter) en la entrada de alimentación",
        "Ventilador de alto caudal en el interior del armario"
        ],
        correcta: 2,
        explicacion: "Justificación: Un filtro de línea (formado por inductancias y condensadores) atenúa las perturbaciones de alta frecuencia que circulan por el cable de alimentación. No tiene relación con el apantallamiento de datos ni con la ventilación."
      },
      {
        pregunta: "¿Qué efecto tienen las vibraciones mecánicas sobre los discos duros HDD en un entorno industrial?",
        opciones: [
        "Mejoran la velocidad de lectura del cabezal al aumentar la velocidad de rotación",
        "No afectan al HDD si el sistema de archivos está correctamente formateado",
        "Pueden desalinear el cabezal lector y provocar errores de lectura o fallos físicos del disco",
        "Aumentan la capacidad de almacenamiento por reordenación magnética de los sectores"
        ],
        correcta: 2,
        explicacion: "Justificación: El cabezal de un HDD vuela a nanómetros del plato giratorio. Las vibraciones externas pueden hacerlo colisionar con el plato (head crash) o provocar errores de posicionamiento, causando pérdida de datos o fallo total del disco."
      },
      {
        pregunta: "¿Qué componente pasivo de protección se usa a nivel de placa para absorber picos de tensión?",
        opciones: [
        "Condensador electrolítico de gran capacidad (filtrado DC)",
        "Varistor MOV (Metal Oxide Varistor)",
        "Resistencia de pull-up de 10 kOhm",
        "Inductor de ferrita de alta frecuencia"
        ],
        correcta: 1,
        explicacion: "Justificación: El varistor MOV es un componente no lineal que presenta baja impedancia cuando la tensión supera un umbral, derivando a tierra el exceso de energía del pico. Los condensadores filtran el rizado DC, las resistencias de pull-up fijan niveles lógicos y los inductores de ferrita filtran ruido de alta frecuencia."
      },
      {
        pregunta: "¿Por qué los PCs industriales suelen carecer de ventiladores y usar disipación pasiva?",
        opciones: [
        "Para reducir el coste de fabricación eliminando el ventilador como componente",
        "Para eliminar partes móviles y evitar fallos por polvo y vibración en entornos industriales",
        "Porque la normativa IEC 61000 prohíbe expresamente los ventiladores en equipos industriales",
        "Porque los procesadores industriales no generan calor y no necesitan disipación"
        ],
        correcta: 1,
        explicacion: "Justificación: Los ventiladores son las partes móviles con mayor tasa de fallo en un PC (cojinetes). En entornos con polvo y vibración, los cojinetes se desgastan rápidamente. La disipación pasiva elimina este punto de fallo, aumentando la fiabilidad y el MTBF del sistema."
      },
    ]
  },
  {
    id: "ra1_f",
    nombre: "RA1.f — Mantenimiento y diagnóstico de sistemas",
    preguntas: [
      {
        pregunta: "¿Qué medida preventiva es imprescindible para evitar daños por descarga electrostática (ESD) al manipular componentes internos de un PC?",
        opciones: [
        "Usar guantes de goma de alta resistencia eléctrica",
        "Usar pulsera antiestática conectada a un punto de tierra",
        "Trabajar sobre una superficie de madera sin ninguna conexión a tierra",
        "Mantener el PC encendido durante la manipulación de componentes"
        ],
        correcta: 1,
        explicacion: "Justificación: La pulsera antiestática mantiene al técnico al mismo potencial que la placa base, evitando que una descarga estática fluya a través de los componentes. Los guantes de goma aíslan pero impiden trabajar con precisión; la madera sin tierra no descarga la estática."
      },
      {
        pregunta: "¿Qué requisito eléctrico es fundamental para garantizar el funcionamiento fiable de un sistema informático industrial?",
        opciones: [
        "Disponer de enchufes de diseño estético moderno",
        "Contar con toma de tierra adecuada y protección diferencial",
        "Usar exclusivamente cables de color azul para la fase",
        "Instalar el PC en la parte más alta del armario eléctrico"
        ],
        correcta: 1,
        explicacion: "Justificación: La toma de tierra deriva corrientes de fuga y protege de descargas eléctricas; el diferencial corta el suministro ante faltas a tierra. Sin ellos, un fallo de aislamiento puede dañar equipos y poner en riesgo al personal."
      },
      {
        pregunta: "¿Qué rango de temperatura ambiente es adecuado para el funcionamiento de la mayoría de los PCs industriales certificados?",
        opciones: [
        "-20 °C a 0 °C",
        "0 °C a 60 °C",
        "60 °C a 100 °C",
        "-50 °C a -20 °C"
        ],
        correcta: 1,
        explicacion: "Justificación: Los PCs industriales estándar se certifican para 0 °C–60 °C, frente a los 0 °C–35 °C de los de oficina. Versiones ruggedizadas amplían el rango, pero 0–60 °C es el valor habitual de catálogo industrial."
      },
      {
        pregunta: "¿Para qué sirve el apantallamiento (blindaje) de los cables de comunicación en un entorno industrial?",
        opciones: [
        "Para aumentar la velocidad de transferencia de datos del cable",
        "Para reducir las interferencias electromagnéticas inducidas en el conductor",
        "Para mejorar el aspecto estético de la instalación",
        "Para reducir el peso total del cableado"
        ],
        correcta: 1,
        explicacion: "Justificación: El blindaje (malla metálica o lámina de aluminio alrededor del conductor) actúa como jaula de Faraday, atenuando los campos electromagnéticos externos que podrían inducir tensiones parásitas en la señal. Es imprescindible cerca de motores y variadores."
      },
      {
        pregunta: "¿Qué documento debe consultarse para conocer los requisitos de temperatura, humedad y ventilación de un componente informático?",
        opciones: [
        "El manual de usuario del sistema operativo instalado",
        "La hoja de datos técnica (datasheet) del fabricante del componente",
        "El manual de normas de seguridad vial del municipio",
        "El reglamento interno de organización del departamento"
        ],
        correcta: 1,
        explicacion: "Justificación: La hoja de datos del fabricante especifica las condiciones ambientales de operación (temperatura, humedad relativa, altitud) y almacenamiento del componente. El manual del SO o el reglamento interno no contienen esa información técnica."
      },
      {
        pregunta: "¿En qué situación es imprescindible el uso de un SAI en una instalación informática industrial?",
        opciones: [
        "Cuando el PC tiene más de 32 GB de RAM",
        "Cuando una caída de tensión puede provocar pérdida de datos o detención del proceso controlado",
        "Solo cuando el PC ejecuta aplicaciones ofimáticas críticas",
        "Únicamente en instalaciones con más de 50 ordenadores en red"
        ],
        correcta: 1,
        explicacion: "Justificación: En automatización industrial, un corte eléctrico puede provocar pérdida de datos de proceso, estados inconsistentes en el PLC o daños mecánicos en la maquinaria controlada. El SAI garantiza la continuidad o una parada segura. La cantidad de RAM o el número de PCs no son criterios."
      },
      {
        pregunta: "¿Qué precaución debe tomarse para evitar el sobrecalentamiento de un PC instalado en un armario metálico cerrado?",
        opciones: [
        "Pintar el armario de color blanco para reflejar el calor solar",
        "Instalar ventilación forzada o refrigeración activa en el armario",
        "Añadir más módulos de RAM al sistema para reducir la carga del procesador",
        "Aumentar la frecuencia del procesador para terminar los procesos más rápido"
        ],
        correcta: 1,
        explicacion: "Justificación: Un armario cerrado acumula el calor generado por los equipos. Sin ventilación forzada (entradas de aire filtradas + extractor) o refrigeración activa, la temperatura interior puede superar los límites de los componentes."
      },
      {
        pregunta: "¿Qué norma de cableado estructurado es relevante para garantizar la fiabilidad de la red local en una instalación industrial?",
        opciones: [
        "ISO/IEC 11801 o TIA/EIA-568",
        "IEEE 802.11ac (WiFi 5)",
        "RS-232C (comunicación serie)",
        "USB 3.2 Gen 2×2"
        ],
        correcta: 0,
        explicacion: "Justificación: ISO/IEC 11801 y TIA/EIA-568 establecen los requisitos de cableado de par trenzado, conectores, distancias máximas y rendimiento para redes de área local. IEEE 802.11 es WiFi, RS-232C es serie y USB es un bus de corto alcance."
      },
      {
        pregunta: "¿Por qué se recomienda no instalar un PC cerca de motores eléctricos de gran potencia?",
        opciones: [
        "Porque los motores pueden provocar interferencias electromagnéticas que afecten al PC",
        "Porque el calor irradiado por el motor aumenta artificialmente la velocidad de la CPU",
        "Porque los motores reducen el rendimiento de la conexión Ethernet del PC",
        "Porque la vibración del motor mejora la ventilación interna del PC"
        ],
        correcta: 0,
        explicacion: "Justificación: Los motores eléctricos generan campos magnéticos variables y producen transitorios eléctricos en la red de alimentación. Estos pueden inducir tensiones parásitas en los cables de señal del PC y provocar errores, reinicios o daños en componentes sensibles."
      },
      {
        pregunta: "¿Qué función tiene el cable de puesta a tierra de la carcasa metálica de un PC industrial?",
        opciones: [
        "Mejorar la velocidad de transferencia de datos por USB",
        "Derivar a tierra las corrientes de fuga y proteger al usuario de descargas eléctricas",
        "Conectar la placa base con el panel frontal de la caja",
        "Proporcionar alimentación de emergencia a los componentes en caso de fallo de la PSU"
        ],
        correcta: 1,
        explicacion: "Justificación: La carcasa metálica conectada a tierra actúa como pantalla electromagnética y como conductor de seguridad: si hay una falta de aislamiento, la corriente fluye a tierra en lugar de a través del usuario, disparando el diferencial de protección."
      },
      {
        pregunta: "¿Cuál es la humedad relativa máxima recomendada para el funcionamiento de equipos informáticos sin riesgo de condensación?",
        opciones: [
        "20% HR",
        "50% HR",
        "80% HR sin condensación",
        "100% HR"
        ],
        correcta: 2,
        explicacion: "Justificación: La mayoría de equipos informáticos especifican funcionamiento hasta el 80% de humedad relativa sin condensación. Por encima del 80% aumenta el riesgo de condensación sobre los circuitos, especialmente ante cambios bruscos de temperatura."
      },
      {
        pregunta: "¿Qué significa el grado de protección IP65 para un equipo industrial?",
        opciones: [
        "Protección total contra polvo (6) y contra chorros de agua desde cualquier dirección (5)",
        "Protección frente a interferencias electromagnéticas de hasta 65 MHz",
        "Tensión de aislamiento dieléctrico de 65 kV",
        "Velocidad de bus interno de 65 MHz"
        ],
        correcta: 0,
        explicacion: "Justificación: El código IP (IEC 60529) tiene dos dígitos: el primero indica protección frente a sólidos (6 = hermético al polvo), el segundo frente a líquidos (5 = resistente a chorros de agua). IP65 es habitual en cuadros eléctricos industriales con ambiente polvoriento o húmedo."
      },
    ]
  },
  {
    id: "ra1_g",
    nombre: "RA1.g — Montaje e integración de sistemas",
    preguntas: [
      {
        pregunta: "¿Qué tipo de diagrama se usa para representar la arquitectura general de un sistema informático (CPU, memoria, buses, E/S)?",
        opciones: [
        "Diagrama de Gantt",
        "Diagrama de bloques",
        "Diagrama de Pareto",
        "Diagrama de flujo de datos (DFD)"
        ],
        correcta: 1,
        explicacion: "Justificación: El diagrama de bloques representa los componentes funcionales del sistema como bloques rectangulares con flechas que indican el flujo de datos. El diagrama de Gantt es de planificación temporal; el de Pareto es estadístico; el DFD muestra flujos de información en software."
      },
      {
        pregunta: "¿Cómo se representa habitualmente el procesador en los diagramas de bloques de arquitectura de sistemas informáticos?",
        opciones: [
        "Un rectángulo etiquetado como \"CPU\" con sus unidades internas (UC, UAL, registros)",
        "Un círculo con el logotipo del fabricante",
        "Un triángulo invertido conectado a los buses",
        "Una flecha bidireccional entre la memoria y el disco"
        ],
        correcta: 0,
        explicacion: "Justificación: En los diagramas de bloques estándar, la CPU se representa como un rectángulo que puede subdividirse en sus componentes internos (Unidad de Control, UAL, registros). Los demás símbolos no corresponden a la representación normalizada del procesador."
      },
      {
        pregunta: "¿Cuál es el propósito de un diagrama de flujo en la documentación técnica de un sistema informático?",
        opciones: [
        "Representar la distribución física de los componentes en el chasis",
        "Mostrar la secuencia lógica de pasos de un proceso o algoritmo",
        "Indicar los voltajes de alimentación de cada componente",
        "Listar el inventario de piezas en el almacén"
        ],
        correcta: 1,
        explicacion: "Justificación: El diagrama de flujo usa símbolos normalizados (óvalo para inicio/fin, rectángulo para proceso, rombo para decisión) para representar la lógica secuencial de un algoritmo o proceso. No describe distribución física ni inventario de materiales."
      },
      {
        pregunta: "¿Qué documento técnico describe la posición y función de cada conector de la placa base?",
        opciones: [
        "La ficha de seguridad (SDS/MSDS) del fabricante",
        "El manual de usuario del sistema operativo",
        "El manual de la placa base (motherboard manual)",
        "La factura de compra del componente"
        ],
        correcta: 2,
        explicacion: "Justificación: El manual de la placa base incluye el layout del PCB, la función de cada conector y jumper, los slots de expansión, los pines del panel frontal y las especificaciones técnicas. Es la referencia imprescindible para el montaje correcto."
      },
      {
        pregunta: "¿Qué representa el símbolo de \"masa\" o \"tierra\" (GND) en los esquemas eléctricos de sistemas informáticos?",
        opciones: [
        "El punto de conexión a la alimentación de +5 V",
        "El punto de referencia de 0 V / conexión a tierra",
        "La señal de reloj del sistema",
        "El bus de datos bidireccional"
        ],
        correcta: 1,
        explicacion: "Justificación: El símbolo GND representa el punto de referencia de potencial cero voltios respecto al cual se miden todas las demás tensiones del circuito. En un PC, todos los negativos de las fuentes de alimentación se conectan a GND."
      },
      {
        pregunta: "¿Qué norma establece la simbología utilizada en esquemas de circuitos eléctricos y electrónicos?",
        opciones: [
        "ISO 9001 (sistemas de gestión de calidad)",
        "IEC 60617 (símbolos gráficos para esquemas)",
        "ISO 14001 (gestión ambiental)",
        "IEC 61131 (lenguajes de programación de PLC)"
        ],
        correcta: 1,
        explicacion: "Justificación: IEC 60617 establece los símbolos gráficos normalizados para esquemas eléctricos y electrónicos (resistencias, condensadores, transistores, puertas lógicas, etc.). ISO 9001 e ISO 14001 son normas de gestión; IEC 61131 regula los PLC."
      },
      {
        pregunta: "¿Qué información proporciona un diagrama de pines (pinout) de un conector?",
        opciones: [
        "El precio de fabricación del conector en el mercado",
        "La función de cada pin o contacto del conector",
        "La velocidad máxima del bus asociado al conector",
        "La temperatura máxima de operación del conector"
        ],
        correcta: 1,
        explicacion: "Justificación: El pinout describe la asignación de señales a cada pin del conector: cuál es VCC, cuál es GND, cuáles son señales de datos, etc. Es imprescindible para conectar correctamente periféricos y cables sin causar daños."
      },
      {
        pregunta: "¿Qué elemento de la documentación técnica permite localizar físicamente un componente dentro de un sistema complejo?",
        opciones: [
        "El diagrama de flujo del programa de control",
        "El esquema eléctrico unifiliar de la instalación",
        "El plano de ubicación o mapa de componentes (layout)",
        "La lista de precios del fabricante"
        ],
        correcta: 2,
        explicacion: "Justificación: El layout muestra la posición física de cada componente en el PCB o en el armario. Junto con el BOM (Bill of Materials) permite localizar y reemplazar componentes concretos sin ambigüedad."
      },
      {
        pregunta: "¿Cuál es la diferencia principal entre un esquema de principio y un esquema de cableado?",
        opciones: [
        "El esquema de principio es en color y el de cableado en blanco y negro",
        "El esquema de principio muestra funciones lógicas; el de cableado muestra las conexiones físicas reales",
        "El esquema de cableado solo se usa en instalaciones de alta tensión",
        "El esquema de principio incluye los precios de los materiales necesarios"
        ],
        correcta: 1,
        explicacion: "Justificación: El esquema de principio (o funcional) representa las relaciones lógicas entre componentes independientemente de su disposición física. El esquema de cableado muestra cómo están conectados físicamente los conductores, con referencia a bornes y terminales reales."
      },
    ]
  },
  {
    id: "ra1_h",
    nombre: "RA1.h — Configuración de sistemas y periféricos",
    preguntas: [
      {
        pregunta: "¿Qué utilidad tiene la opción \"Boot Order\" en la BIOS/UEFI?",
        opciones: [
        "Seleccionar el idioma del sistema operativo instalado",
        "Definir desde qué dispositivo (USB, disco, red PXE) arranca el sistema",
        "Instalar controladores de red automáticamente al encender",
        "Configurar la contraseña de usuario de Windows"
        ],
        correcta: 1,
        explicacion: "Justificación: El Boot Order determina la secuencia en que el firmware busca un gestor de arranque. Es imprescindible configurarlo correctamente al instalar un SO o al arrancar herramientas de diagnóstico desde USB."
      },
      {
        pregunta: "¿Qué opción de la BIOS debe habilitarse para ejecutar máquinas virtuales con VirtualBox o VMware?",
        opciones: [
        "Secure Boot",
        "TPM 2.0",
        "Virtualization Technology (VT-x / AMD-V)",
        "Fast Boot"
        ],
        correcta: 2,
        explicacion: "Justificación: VT-x (Intel) y AMD-V (AMD) son extensiones de virtualización por hardware que permiten a los hipervisores (VirtualBox, VMware, Hyper-V) crear máquinas virtuales de 64 bits con pleno rendimiento. Sin esta opción activa, los hipervisores no pueden crear VMs de 64 bits."
      },
      {
        pregunta: "¿Qué función tiene la opción \"Secure Boot\" en la UEFI?",
        opciones: [
        "Cifrar el disco duro con AES-256 automáticamente",
        "Impedir que arranquen bootloaders o kernels no firmados digitalmente",
        "Aumentar la velocidad de arranque reduciendo las comprobaciones POST",
        "Habilitar el modo de bajo consumo del procesador durante el arranque"
        ],
        correcta: 1,
        explicacion: "Justificación: Secure Boot verifica la firma criptográfica del gestor de arranque y del kernel antes de ejecutarlos. Impide que malware (bootkits) o sistemas operativos no reconocidos arranquen, aumentando la seguridad del proceso de inicio."
      },
      {
        pregunta: "¿Qué es un jumper en la placa base y para qué sirve?",
        opciones: [
        "Un tipo de conector SATA de alta velocidad para discos NVMe",
        "Un pequeño puente conductor que cierra o abre un circuito para configurar parámetros de hardware",
        "Un componente de refrigeración pasiva del chipset",
        "Un adaptador de voltaje para el socket del procesador"
        ],
        correcta: 1,
        explicacion: "Justificación: El jumper es un conector de dos o tres pines con un puente metálico desplazable. Su posición (cerrado/abierto) determina opciones de configuración hardware como el reset de la BIOS o la habilitación de funciones específicas."
      },
      {
        pregunta: "¿Para qué sirve el software CPU-Z en la verificación de un sistema informático?",
        opciones: [
        "Realizar copias de seguridad del sistema operativo en la nube",
        "Mostrar información detallada del procesador, placa base, memoria RAM y chipset",
        "Gestionar las particiones y el sistema de archivos del disco duro",
        "Diagnosticar fallos en la tarjeta de red Ethernet"
        ],
        correcta: 1,
        explicacion: "Justificación: CPU-Z lee los registros del hardware y muestra: nombre, frecuencia, multiplicador y caché de la CPU; fabricante, modelo y slots de la placa base; tipo, frecuencia, timings y capacidad de la RAM. Es la herramienta básica de inventario y verificación hardware."
      },
      {
        pregunta: "¿Qué herramienta permite verificar la estabilidad y detectar errores en la memoria RAM?",
        opciones: [
        "CPU-Z",
        "Wireshark",
        "Memtest86",
        "CrystalDiskInfo"
        ],
        correcta: 2,
        explicacion: "Justificación: Memtest86 arranca desde USB independientemente del SO y ejecuta patrones de escritura/lectura sobre toda la RAM para detectar celdas defectuosas o problemas de estabilidad. CPU-Z informa de la RAM pero no la testa; Wireshark analiza red; CrystalDiskInfo analiza discos."
      },
      {
        pregunta: "¿Qué perfil de memoria RAM de la BIOS aplica automáticamente los valores de velocidad y timings certificados por el fabricante del módulo?",
        opciones: [
        "ECC mode",
        "XMP (Intel) / EXPO (AMD)",
        "Dual Channel mode",
        "SPD default"
        ],
        correcta: 1,
        explicacion: "Justificación: XMP y EXPO son perfiles almacenados en el módulo RAM que la BIOS puede leer y aplicar automáticamente para alcanzar la velocidad anunciada (ej. DDR4-3200 en lugar del SPD base de 2133 MHz)."
      },
      {
        pregunta: "¿Cuál es el efecto de habilitar el modo AHCI en la BIOS frente al modo IDE para un disco SSD SATA?",
        opciones: [
        "El SSD funciona más lento en modo AHCI que en modo IDE",
        "El modo AHCI permite al SSD aprovechar NCQ y el hot-swap SATA, mejorando el rendimiento",
        "El modo IDE ofrece mayor compatibilidad con sistemas operativos modernos que AHCI",
        "No existe diferencia funcional entre AHCI e IDE para un SSD SATA"
        ],
        correcta: 1,
        explicacion: "Justificación: AHCI activa funciones avanzadas como NCQ (Native Command Queuing), que reordena las operaciones de lectura/escritura para reducir latencias, y el hot-swap. El modo IDE emula discos ATA antiguos y no aprovecha estas capacidades."
      },
      {
        pregunta: "¿Qué parámetros de la BIOS afectan directamente a la estabilidad de la memoria RAM instalada?",
        opciones: [
        "La velocidad del ventilador de CPU y el perfil de curva de temperatura",
        "Los valores de temporización (timings CL, tRCD, tRP) y la frecuencia de operación",
        "El orden de arranque de los dispositivos de almacenamiento",
        "La resolución y frecuencia de refresco del monitor conectado"
        ],
        correcta: 1,
        explicacion: "Justificación: Los timings (latencia CAS, tRCD, tRP, tRAS) y la frecuencia determinan el rendimiento y la estabilidad de la RAM. Si se configuran timings más agresivos o frecuencia mayor que la especificada, el sistema puede ser inestable o no arrancar."
      },
      {
        pregunta: "¿Qué herramienta de software integrada en Windows permite gestionar los dispositivos de hardware instalados y sus controladores?",
        opciones: [
        "Editor del registro (regedit.exe)",
        "Administrador de dispositivos (devmgmt.msc)",
        "Monitor de recursos (resmon.exe)",
        "Editor de directivas de grupo (gpedit.msc)"
        ],
        correcta: 1,
        explicacion: "Justificación: El Administrador de dispositivos lista todos los dispositivos reconocidos, permite actualizar, desinstalar o revertir controladores, y muestra conflictos de recursos. El resto de herramientas tienen funciones de configuración diferentes."
      },
      {
        pregunta: "¿Qué significa configurar los discos en modo RAID 1 en la BIOS?",
        opciones: [
        "Los datos se distribuyen en franjas entre ambos discos para mayor velocidad (striping)",
        "Los datos se replican íntegramente en ambos discos para tolerancia a fallos (mirroring)",
        "El sistema usa un solo disco activo y el segundo permanece vacío como reserva fría",
        "Los dos discos actúan como uno solo con el doble de velocidad de escritura secuencial"
        ],
        correcta: 1,
        explicacion: "Justificación: RAID 1 escribe simultáneamente los mismos datos en dos discos. Si uno falla, el sistema continúa operando con el otro sin pérdida de datos. RAID 0 es striping (velocidad sin redundancia); un disco de reserva sin datos es un \"spare\"."
      },
      {
        pregunta: "¿Para qué se usa VirtualBox en el contexto del módulo de Informática Industrial?",
        opciones: [
        "Para gestionar particiones en sistemas RAID de disco duro",
        "Para crear y ejecutar máquinas virtuales sobre el hardware físico del PC",
        "Para diagnosticar averías en la tarjeta de red Ethernet industrial",
        "Para actualizar el firmware de la BIOS/UEFI automáticamente"
        ],
        correcta: 1,
        explicacion: "Justificación: VirtualBox es un hipervisor de tipo 2 que permite crear máquinas virtuales con diferentes sistemas operativos sobre el hardware real del PC. En Informática Industrial se usa para practicar instalaciones y configuraciones de SO sin riesgo para el sistema anfitrión."
      },
      {
        pregunta: "¿Qué debe comprobarse después de instalar un nuevo componente hardware antes de dar por finalizada la configuración?",
        opciones: [
        "Limpiar el equipo con alcohol isopropílico al 99%",
        "Verificar el funcionamiento correcto del componente mediante herramientas de diagnóstico",
        "Desinstalar los controladores del dispositivo anterior",
        "Eliminar la partición de sistema de Windows y reinstalar el SO"
        ],
        correcta: 1,
        explicacion: "Justificación: Tras instalar un componente, es imprescindible verificar que el sistema lo detecta correctamente, que los controladores funcionan sin errores en el Administrador de dispositivos y que el componente rinde dentro de sus especificaciones."
      },
      {
        pregunta: "¿Qué ocurre si se configura en la BIOS una frecuencia de RAM mayor a la especificada en el módulo?",
        opciones: [
        "El sistema funciona de forma más estable y eficiente al aprovechar más ancho de banda",
        "Puede producirse inestabilidad, cuelgues o que el sistema no arranque",
        "El sistema operativo ajusta automáticamente la frecuencia al valor correcto del SPD",
        "La BIOS corrige la frecuencia sin aviso y sin ningún efecto negativo"
        ],
        correcta: 1,
        explicacion: "Justificación: Superar la frecuencia máxima certificada del módulo puede provocar errores de memoria, cuelgues aleatorios o que el sistema no arranque. La BIOS puede intentar recuperarse reduciendo la frecuencia, pero no siempre lo hace automáticamente."
      },
      {
        pregunta: "¿Qué herramienta de diagnóstico de Windows analiza los archivos de volcado de memoria generados tras un BSOD?",
        opciones: [
        "Desfragmentador de disco (dfrgui.exe)",
        "WinDbg (Windows Debugger) o WhoCrashed",
        "Administrador de tareas (taskmgr.exe)",
        "Editor de registro (regedit.exe)"
        ],
        correcta: 1,
        explicacion: "Justificación: WinDbg analiza los ficheros .dmp generados por Windows tras un BSOD, identificando el módulo del kernel, el controlador o el proceso responsable del fallo. WhoCrashed es una versión simplificada más accesible para técnicos sin experiencia en debugging."
      },
    ]
  },
  {
    id: "ra1_i",
    nombre: "RA1.i — Verificación y puesta en marcha",
    preguntas: [
      {
        pregunta: "¿Cuál es la primera norma de seguridad que debe respetarse antes de manipular el interior de un PC?",
        opciones: [
        "Ponerse guantes de cuero grueso",
        "Desconectar el cable de alimentación de la red eléctrica",
        "Retirar la batería del mando a distancia del monitor",
        "Apagar el monitor antes de abrir la caja"
        ],
        correcta: 1,
        explicacion: "Justificación: Desconectar físicamente el cable de alimentación elimina la tensión de red (230 V CA). Apagar solo con el botón no corta completamente la alimentación, ya que la PSU mantiene en standby el rail +5 VSB."
      },
      {
        pregunta: "¿Qué equipo de protección individual (EPI) es específico para manipulación de componentes electrónicos con riesgo de descarga electrostática?",
        opciones: [
        "Casco de seguridad con visera abatible",
        "Pulsera antiestática con cable conectado a tierra",
        "Calzado de seguridad con puntera de acero",
        "Guantes dieléctricos para alta tensión"
        ],
        correcta: 1,
        explicacion: "Justificación: La pulsera antiestática iguala el potencial electrostático del técnico con el del equipo, evitando que una descarga estática fluya a través de los componentes. Los demás EPIs protegen frente a riesgos mecánicos o eléctricos de alta tensión, no frente a ESD."
      },
      {
        pregunta: "¿Qué normativa regula la prevención de riesgos laborales en España para trabajos con instalaciones eléctricas?",
        opciones: [
        "Directiva CEM 2014/30/UE",
        "Reglamento REACH (CE 1907/2006)",
        "Ley 31/1995 de PRL y RD 614/2001 sobre riesgo eléctrico, junto con el REBT",
        "Normativa RoHS 2011/65/UE"
        ],
        correcta: 2,
        explicacion: "Justificación: La Ley 31/1995 establece el marco general de prevención; el RD 614/2001 regula específicamente los trabajos con riesgo eléctrico. El REBT (RD 842/2002) regula las instalaciones eléctricas de baja tensión."
      },
      {
        pregunta: "¿Qué debe hacerse con los residuos de componentes electrónicos (tarjetas, pilas, pantallas) al retirarlos de servicio?",
        opciones: [
        "Depositarlos en el contenedor de basura orgánica del centro",
        "Quemarlos en el lugar de trabajo para reducir el volumen de residuos",
        "Gestionarlos como RAEE en un punto limpio o gestor autorizado",
        "Reutilizarlos sin ninguna restricción legal adicional"
        ],
        correcta: 2,
        explicacion: "Justificación: La Directiva RAEE (2012/19/UE, transpuesta en España por el RD 110/2015) obliga a gestionar los residuos de aparatos eléctricos y electrónicos a través de sistemas de recogida selectiva y gestores autorizados, dado que contienen sustancias peligrosas."
      },
      {
        pregunta: "¿Qué riesgo eléctrico específico existe al abrir una fuente de alimentación de PC, incluso estando desconectada de la red?",
        opciones: [
        "No existe riesgo alguno una vez desenchufado el cable de red",
        "Los condensadores electrolíticos internos pueden mantener carga eléctrica residual peligrosa",
        "Los pines SATA pueden generar un arco eléctrico al contacto",
        "La fuente solo es peligrosa cuando está conectada a un dispositivo USB"
        ],
        correcta: 1,
        explicacion: "Justificación: Los condensadores de gran capacidad de una PSU pueden retener carga eléctrica durante minutos u horas tras desconectarla. Tocar directamente los componentes internos puede producir una descarga eléctrica severa. Por ello, las PSU nunca deben abrirse sin formación específica."
      },
      {
        pregunta: "¿Qué norma ISO regula la gestión de la seguridad de la información en sistemas informáticos de organizaciones?",
        opciones: [
        "ISO 45001 (seguridad y salud laboral)",
        "ISO 14001 (gestión ambiental)",
        "ISO/IEC 27001 (seguridad de la información)",
        "ISO 9001 (calidad)"
        ],
        correcta: 2,
        explicacion: "Justificación: ISO/IEC 27001 establece los requisitos para implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información (SGSI), incluyendo controles técnicos y organizativos para proteger la confidencialidad, integridad y disponibilidad de la información."
      },
      {
        pregunta: "¿Cuál es el procedimiento correcto para limpiar el polvo del interior de un PC industrial?",
        opciones: [
        "Usar agua y jabón con un paño húmedo sobre la placa base",
        "Usar aire comprimido seco y un pincel antiestático con el equipo apagado y desconectado",
        "Usar el aspirador doméstico directamente sobre la placa base con el equipo encendido",
        "Frotar los componentes con un trapo de microfibra impregnado en alcohol de 70°"
        ],
        correcta: 1,
        explicacion: "Justificación: El aire comprimido seco desaloja el polvo sin humedad y sin contacto mecánico agresivo. El equipo debe estar apagado y desconectado para evitar daños eléctricos. Los aspiradores convencionales generan estática; el agua daña los componentes."
      },
      {
        pregunta: "¿Qué señalización de seguridad debe estar visible en un armario eléctrico que contiene equipos con alimentación a 230 V?",
        opciones: [
        "Señal de \"Prohibido fumar\" (fondo blanco con cigarrillo tachado)",
        "Señal de riesgo eléctrico (triángulo amarillo con rayo negro)",
        "Señal de \"Superficie caliente\" (mano sobre ondas de calor)",
        "Señal de \"Material biológico peligroso\" (biohazard)"
        ],
        correcta: 1,
        explicacion: "Justificación: La señal de advertencia de riesgo eléctrico (triángulo amarillo con rayo, ISO 7010-W012) es obligatoria en armarios y cuadros eléctricos con tensiones peligrosas. Alerta al personal de la presencia de tensiones que pueden causar electrocución."
      },
      {
        pregunta: "¿Qué obligación establece la Ley 31/1995 de Prevención de Riesgos Laborales respecto a los equipos de trabajo?",
        opciones: [
        "Que los equipos deben tener al menos 5 años de antigüedad para considerarse seguros",
        "Que el empresario debe garantizar que los equipos son adecuados, seguros y mantenidos correctamente",
        "Que los trabajadores pueden modificar los equipos si consideran que mejoran la seguridad",
        "Que la inspección periódica de los equipos es responsabilidad exclusiva del fabricante"
        ],
        correcta: 1,
        explicacion: "Justificación: El artículo 17 de la Ley 31/1995 y el RD 1215/1997 sobre equipos de trabajo obligan al empresario a proporcionar equipos adecuados, mantenerlos en buen estado y formar a los trabajadores en su uso seguro."
      },
    ]
  },
  {
    id: "ra6_a",
    nombre: "RA6.a — Prevención de riesgos laborales",
    preguntas: [
      {
        pregunta: "¿Cómo se clasifica una avería en la que el PC no enciende y la fuente de alimentación no emite señal ni el LED de encendido se ilumina?",
        opciones: [
        "Avería de software del sistema operativo",
        "Avería lógica por configuración incorrecta de la BIOS",
        "Avería de naturaleza física en la fuente de alimentación o en el cableado eléctrico",
        "Avería por virus en el sector de arranque del disco duro"
        ],
        correcta: 2,
        explicacion: "Justificación: Si no hay ninguna respuesta eléctrica (ni LED, ni ventiladores), el fallo es anterior al software: la fuente de alimentación no entrega tensión, el cable está defectuoso o el interruptor de la PSU está apagado. Son causas físicas que impiden el inicio del sistema."
      },
      {
        pregunta: "¿Qué tipo de avería física puede producir el síntoma de \"pantalla azul de la muerte\" (BSOD) de forma recurrente?",
        opciones: [
        "Exclusivamente problemas de software o controladores mal instalados",
        "Fallo físico en la memoria RAM o en el disco duro, además de posibles problemas de controladores",
        "Solo se produce por infecciones de virus del sector de arranque",
        "Siempre indica un fallo exclusivo de la tarjeta gráfica"
        ],
        correcta: 1,
        explicacion: "Justificación: El BSOD puede tener origen en hardware (RAM defectuosa, disco duro con sectores erróneos, sobrecalentamiento) o en software (controladores incompatibles). Un BSOD recurrente con diferentes códigos de error apunta frecuentemente a RAM o disco con fallos físicos."
      },
      {
        pregunta: "¿Qué síntoma físico visible indica que un condensador electrolítico de la placa base está fallando?",
        opciones: [
        "El LED de encendido parpadea de forma irregular",
        "La carcasa del condensador aparece abombada o con electrolito derramado en la parte superior",
        "El ventilador de la CPU gira a velocidad superior a la normal",
        "Los módulos RAM emiten destellos luminosos"
        ],
        correcta: 1,
        explicacion: "Justificación: El fallo de un condensador electrolítico se manifiesta por el abombamiento de la tapa metálica o por la expulsión del electrolito. Es un indicador visual claro de avería que puede causar inestabilidad o fallo total del sistema."
      },
      {
        pregunta: "¿Cuál es la clasificación correcta de una avería por sobrecalentamiento del procesador en un PC?",
        opciones: [
        "Avería lógica de configuración del sistema operativo",
        "Avería de red de área local",
        "Avería física de tipo térmico por fallo del sistema de refrigeración",
        "Avería de software del controlador de dispositivo"
        ],
        correcta: 2,
        explicacion: "Justificación: El sobrecalentamiento es una avería física: el disipador está obstruido por polvo, la pasta térmica se ha secado o el ventilador ha fallado. El resultado es que la CPU activa el throttling térmico o el apagado de emergencia por hardware."
      },
      {
        pregunta: "¿Qué tipo de avería física es la más probable si el PC emite una serie de pitidos durante el POST sin mostrar imagen en pantalla?",
        opciones: [
        "Avería en el disco duro SATA",
        "Avería en el cable de red Ethernet",
        "Avería en la memoria RAM o en la tarjeta gráfica según el código de pitidos",
        "Avería en el controlador USB del chipset"
        ],
        correcta: 2,
        explicacion: "Justificación: Los códigos de pitidos del POST indican fallos detectados antes de que el sistema pueda mostrar imagen. Los más comunes corresponden a fallos de RAM (sin RAM no hay imagen) o de tarjeta gráfica. El disco duro y la red no se detectan con códigos de pitido en la mayoría de BIOS."
      },
      {
        pregunta: "¿Cómo se denomina la técnica de diagnóstico que consiste en eliminar sistemáticamente componentes hasta aislar el defectuoso?",
        opciones: [
        "Análisis modal de efectos y fallos (AMEF)",
        "Método de aislamiento progresivo o exclusión sistemática",
        "Diagrama causa-efecto (Ishikawa)",
        "Análisis de Pareto de la distribución de fallos"
        ],
        correcta: 1,
        explicacion: "Justificación: El método de aislamiento progresivo consiste en retirar componentes uno a uno o sustituirlos por unidades en buen estado para identificar cuál provoca el fallo. Es la técnica más directa y eficaz en diagnóstico hardware."
      },
      {
        pregunta: "¿Qué tipo de avería física puede producir el síntoma de \"el sistema se reinicia de forma aleatoria sin aviso previo\"?",
        opciones: [
        "Virus en el sector de arranque del disco",
        "Configuración incorrecta del idioma en el panel de control",
        "Fallo en la fuente de alimentación o módulo RAM defectuoso",
        "Error de configuración del protocolo TCP/IP"
        ],
        correcta: 2,
        explicacion: "Justificación: Los reinicios aleatorios sin BSOD previo suelen indicar que la PSU no mantiene la tensión estable bajo carga o que la RAM tiene celdas defectuosas que corrompen datos críticos del SO. Los fallos de software o red no causan reinicios hardware abruptos."
      },
      {
        pregunta: "¿Qué diferencia existe entre una avería intermitente y una avería permanente en un sistema informático?",
        opciones: [
        "La intermitente siempre es de software y la permanente siempre de hardware",
        "La avería intermitente se manifiesta solo en ciertas condiciones y es más difícil de reproducir y diagnosticar",
        "La avería permanente afecta solo a periféricos y la intermitente solo a la placa base",
        "No existe diferencia práctica entre ambos tipos de avería"
        ],
        correcta: 1,
        explicacion: "Justificación: Las averías intermitentes aparecen bajo condiciones específicas (temperatura alta, carga elevada, vibración) y desaparecen en otras. Son las más difíciles de diagnosticar porque no siempre son reproducibles. Las averías permanentes están siempre presentes."
      },
      {
        pregunta: "¿Cuál de los siguientes es un síntoma típico de avería física en un disco duro HDD?",
        opciones: [
        "El sistema operativo muestra mensajes de error de permisos de usuario",
        "Se escuchan ruidos repetitivos (clicking) y el disco no es reconocido en la BIOS",
        "La red WiFi muestra señal débil de forma intermitente",
        "El teclado USB no responde en el sistema operativo"
        ],
        correcta: 1,
        explicacion: "Justificación: El \"click of death\" es el sonido del cabezal intentando buscar la pista sin éxito, indicando un fallo mecánico grave. Si además la BIOS no reconoce el disco, confirma la avería física del HDD. Los permisos y el WiFi son fallos de software/red."
      },
      {
        pregunta: "¿Qué tipo de fallo físico puede causar que un PC no reconozca un módulo RAM recién instalado?",
        opciones: [
        "Fallo en el firmware del disco duro SSD",
        "Contacto deficiente entre el módulo y el slot DIMM, o incompatibilidad de especificaciones",
        "Fallo en la tarjeta de red integrada",
        "Fallo en el cable SATA de datos"
        ],
        correcta: 1,
        explicacion: "Justificación: Un módulo RAM no reconocido puede deberse a: contactos sucios u oxidados, el módulo no insertado completamente hasta que encajen los seguros, o incompatibilidad de voltaje o tipo (DDR3 en slot DDR4). Ninguno de los otros componentes interviene en el reconocimiento de la RAM."
      },
      {
        pregunta: "¿Cómo se clasifica un fallo en el que la pantalla muestra artefactos gráficos (píxeles incorrectos, rayas de colores o distorsiones)?",
        opciones: [
        "Avería de la tarjeta de red de área local",
        "Avería física en la tarjeta gráfica (GPU) o en el cable/conector de vídeo",
        "Avería del software antivirus instalado",
        "Avería del controlador de disco SATA"
        ],
        correcta: 1,
        explicacion: "Justificación: Los artefactos gráficos indican fallo en la GPU (memoria de vídeo defectuosa, chip dañado por temperatura) o en el cable entre la tarjeta y el monitor. Deben descartarse ambas causas sustituyendo el cable primero por ser más sencillo."
      },
      {
        pregunta: "¿Qué indica el código de pitidos \"1 largo + 2 cortos\" en una BIOS Award/Phoenix durante el POST?",
        opciones: [
        "El sistema ha completado el POST sin errores",
        "Error en la tarjeta de vídeo o en su memoria",
        "Error grave en el módulo de memoria RAM principal",
        "Error de comunicación con el teclado PS/2"
        ],
        correcta: 1,
        explicacion: "Justificación: En Award/Phoenix BIOS, \"1 largo + 2 cortos\" indica un error relacionado con la tarjeta de vídeo o su memoria. El sistema no puede continuar el arranque porque no puede inicializar la salida de vídeo."
      },
      {
        pregunta: "¿Qué tipo de avería física puede provocar que el ventilador de la CPU funcione al 100% de forma constante?",
        opciones: [
        "Fallo del controlador de audio integrado en la placa base",
        "Fallo del sensor de temperatura de la CPU o pasta térmica degradada",
        "Fallo del controlador de red Ethernet",
        "Fallo de la memoria USB externa conectada al frontal"
        ],
        correcta: 1,
        explicacion: "Justificación: Si el sensor de temperatura falla y reporta temperatura máxima, o si la pasta térmica se ha secado y la temperatura real es excesiva, el firmware activa el ventilador al máximo como medida de protección."
      },
      {
        pregunta: "¿Cómo se denomina la herramienta de Windows que registra cronológicamente los eventos de error del sistema y las aplicaciones?",
        opciones: [
        "Sistema de archivos FAT32 del disco de sistema",
        "Visor de eventos (Event Viewer / eventvwr.msc)",
        "Fichero de paginación (pagefile.sys)",
        "Sector de arranque MBR del disco"
        ],
        correcta: 1,
        explicacion: "Justificación: El Visor de eventos registra automáticamente errores de hardware (fallos de controlador, errores de disco), eventos del sistema operativo y de las aplicaciones, con código de error, fecha y descripción. Es la primera herramienta a consultar para diagnosticar fallos intermitentes."
      },
      {
        pregunta: "¿Cuál de los siguientes síntomas es indicativo de avería física por humedad o corrosión en una placa base?",
        opciones: [
        "El sistema opera a mayor velocidad de reloj de lo habitual",
        "Se observan manchas de oxidación verdosa o blanca sobre las pistas conductoras del PCB",
        "El disco duro emite un pitido de confirmación al completar el arranque",
        "La memoria RAM muestra mayor latencia de acceso tras una actualización del SO"
        ],
        correcta: 1,
        explicacion: "Justificación: La oxidación visible sobre las pistas del PCB indica exposición prolongada a humedad o líquidos. Puede causar cortocircuitos, interrupciones de pista o fallos intermitentes en componentes cercanos."
      },
    ]
  },
  {
    id: "ra6_b",
    nombre: "RA6.b — Normativa de seguridad y medioambiente",
    preguntas: [
      {
        pregunta: "¿Qué software permite diagnosticar el estado de salud S.M.A.R.T. de un disco duro o SSD?",
        opciones: [
        "CPU-Z",
        "Memtest86",
        "CrystalDiskInfo",
        "Wireshark"
        ],
        correcta: 2,
        explicacion: "Justificación: CrystalDiskInfo lee los atributos S.M.A.R.T. del disco: horas de uso, sectores reasignados, temperatura, errores de lectura. Estos datos permiten anticipar fallos antes de que el disco sea irrecuperable."
      },
      {
        pregunta: "¿Qué herramienta de medida se usa para verificar las tensiones de salida de una fuente de alimentación ATX?",
        opciones: [
        "Osciloscopio de RF",
        "Multímetro digital (voltímetro en DC)",
        "Analizador de espectro de señal",
        "Reflectómetro de dominio temporal (TDR)"
        ],
        correcta: 1,
        explicacion: "Justificación: Un multímetro en modo voltímetro DC permite medir con precisión las tensiones de salida de la PSU (+3,3 V, +5 V, +12 V) y compararlas con los valores nominales. Una desviación superior al 5% indica PSU defectuosa."
      },
      {
        pregunta: "¿Cuál es la función del software Memtest86 en el diagnóstico hardware?",
        opciones: [
        "Analizar el tráfico de red en tiempo real para detectar intrusiones",
        "Detectar errores en los módulos de memoria RAM mediante patrones de escritura y lectura",
        "Verificar la integridad del sistema de archivos del disco duro",
        "Monitorizar en tiempo real la temperatura del procesador"
        ],
        correcta: 1,
        explicacion: "Justificación: Memtest86 arranca desde USB antes del sistema operativo y ejecuta múltiples algoritmos de escritura/lectura sobre toda la RAM instalada para detectar celdas defectuosas o problemas de estabilidad. Sus resultados son independientes del SO instalado."
      },
      {
        pregunta: "¿Qué herramientas permiten ver en tiempo real la temperatura, voltaje y frecuencia del procesador?",
        opciones: [
        "Administrador de dispositivos de Windows",
        "CPU-Z junto con HWMonitor o HWiNFO",
        "CrystalDiskInfo",
        "Wireshark"
        ],
        correcta: 1,
        explicacion: "Justificación: CPU-Z muestra frecuencia, voltaje y multiplicador de la CPU en tiempo real; HWMonitor y HWiNFO añaden temperaturas de todos los sensores y velocidades de ventiladores. Son las herramientas estándar de monitorización hardware durante el diagnóstico."
      },
      {
        pregunta: "¿Cuál es el primer paso del proceso de diagnóstico ante un PC que no arranca?",
        opciones: [
        "Reinstalar el sistema operativo de inmediato",
        "Cambiar el procesador por uno nuevo del mismo socket",
        "Realizar una inspección visual del hardware y verificar las conexiones físicas",
        "Formatear el disco duro y restaurar la última copia de seguridad"
        ],
        correcta: 2,
        explicacion: "Justificación: El primer paso es siempre la inspección visual: verificar que todos los cables están bien conectados, que no hay componentes sueltos, quemados o condensadores abombados, y que los LEDs de diagnóstico de la placa indican algo útil."
      },
      {
        pregunta: "¿Qué indica el mensaje \"No bootable device found\" al arrancar un PC?",
        opciones: [
        "La tarjeta de red no está configurada correctamente",
        "El sistema no puede encontrar un dispositivo de arranque con un gestor de arranque válido",
        "La memoria RAM está defectuosa",
        "El procesador no es compatible con la versión del sistema operativo"
        ],
        correcta: 1,
        explicacion: "Justificación: Este mensaje indica que el firmware ha completado el POST pero no encuentra ningún dispositivo en el boot order que contenga un MBR/GPT con gestor de arranque válido. Causas: disco no conectado, disco sin SO, boot order incorrecto o partición de arranque corrupta."
      },
      {
        pregunta: "¿Qué herramienta hardware de diagnóstico se conecta al slot PCIe de la placa base para mostrar códigos POST numéricos?",
        opciones: [
        "Software Memtest86 en USB bootable",
        "Tarjeta de diagnóstico POST (debug card)",
        "Administrador de dispositivos de Windows",
        "Analizador lógico de bus I2C/SMBus"
        ],
        correcta: 1,
        explicacion: "Justificación: La tarjeta de diagnóstico POST es una tarjeta de expansión con display hexadecimal que muestra el código POST cuando el sistema se bloquea antes de mostrar imagen. Permite identificar en qué etapa del arranque falla el hardware sin necesidad de pantalla funcional."
      },
      {
        pregunta: "¿Qué técnica de diagnóstico consiste en arrancar el sistema con la configuración mínima posible (placa base, CPU, 1 módulo RAM y PSU, sin tarjetas adicionales)?",
        opciones: [
        "Análisis AMEF completo del sistema",
        "Arranque en configuración mínima (minimal boot)",
        "Volcado de memoria completo (full memory dump)",
        "Diagnóstico remoto por acceso SSH al sistema"
        ],
        correcta: 1,
        explicacion: "Justificación: El arranque en configuración mínima aisla el problema eliminando todos los periféricos no esenciales. Si el sistema arranca con la configuración mínima, se van añadiendo componentes uno a uno hasta reproducir el fallo, identificando el componente defectuoso."
      },
      {
        pregunta: "¿Qué herramienta permite analizar los archivos de volcado de memoria (minidump) generados tras un BSOD en Windows?",
        opciones: [
        "Desfragmentador de disco (dfrgui.exe)",
        "WinDbg (Windows Debugger) o WhoCrashed",
        "Administrador de tareas (taskmgr.exe)",
        "Editor del registro (regedit.exe)"
        ],
        correcta: 1,
        explicacion: "Justificación: WinDbg analiza los ficheros .dmp generados tras un BSOD, identificando el módulo del kernel o el controlador responsable del fallo. WhoCrashed es una versión simplificada más accesible para técnicos sin experiencia en debugging."
      },
      {
        pregunta: "¿Qué herramienta de comprobación de archivos del sistema de Windows detecta y repara ficheros de SO corruptos?",
        opciones: [
        "chkdsk /f (comprobación del disco)",
        "sfc /scannow (System File Checker)",
        "diskpart (gestión de particiones)",
        "ipconfig /flushdns (DNS)"
        ],
        correcta: 1,
        explicacion: "Justificación: sfc /scannow analiza todos los archivos protegidos del sistema de Windows y reemplaza los corruptos por versiones correctas del caché del SO. chkdsk comprueba el sistema de archivos del disco; diskpart gestiona particiones; ipconfig gestiona configuración de red."
      },
      {
        pregunta: "¿Qué herramienta bootable desde USB incluye una colección de utilidades de diagnóstico hardware y software para técnicos?",
        opciones: [
        "Microsoft Office Diagnostics",
        "Hiren's Boot CD/USB (o Ultimate Boot CD)",
        "Windows Update Standalone",
        "Administrador de dispositivos en modo WinPE"
        ],
        correcta: 1,
        explicacion: "Justificación: Hiren's Boot CD/USB es una herramienta de rescate y diagnóstico que arranca independientemente del SO instalado e incluye: Memtest86, CrystalDiskInfo, herramientas de particionado y antivirus, junto con una versión mínima de Windows PE."
      },
      {
        pregunta: "¿Qué información ofrece el Visor de eventos de Windows en el diagnóstico de averías hardware?",
        opciones: [
        "La temperatura actual del procesador en una gráfica histórica",
        "El historial cronológico de errores del sistema, aplicaciones y seguridad con código y descripción",
        "El estado S.M.A.R.T. del disco duro en tiempo real",
        "El voltaje de salida de la fuente de alimentación"
        ],
        correcta: 1,
        explicacion: "Justificación: El Visor de eventos registra eventos con identificador (Event ID), origen, fecha/hora y descripción detallada. Los eventos críticos de hardware (fallos de controlador, errores de disco) quedan registrados y son consultables para reconstruir la secuencia de un fallo."
      },
      {
        pregunta: "¿Qué herramienta de diagnóstico de disco duro permite analizar la superficie magnética en busca de sectores defectuosos?",
        opciones: [
        "CPU-Z",
        "HD Tune o HDD Regenerator",
        "Wireshark",
        "Memtest86"
        ],
        correcta: 1,
        explicacion: "Justificación: HD Tune y HDD Regenerator realizan un análisis de superficie del disco, detectando sectores con tiempos de respuesta elevados o defectuosos. Memtest86 analiza RAM; CPU-Z analiza CPU; Wireshark analiza tráfico de red."
      },
      {
        pregunta: "¿Cuál es la utilidad del comando chkdsk /r en Windows para el diagnóstico de un disco duro?",
        opciones: [
        "Reiniciar el servicio de red de Windows",
        "Buscar y marcar sectores defectuosos, intentando recuperar la información legible",
        "Comprobar la integridad de los archivos del sistema operativo",
        "Fragmentar el disco para mejorar el rendimiento de lectura"
        ],
        correcta: 1,
        explicacion: "Justificación: chkdsk /r examina el disco físicamente, localiza sectores con errores físicos, intenta recuperar los datos legibles y marca los sectores defectuosos para que el sistema no los use. La opción /f solo corrige errores lógicos del sistema de archivos sin analizar la superficie física."
      },
      {
        pregunta: "¿Cuál es la utilidad principal de registrar las averías y sus soluciones en un historial de mantenimiento?",
        opciones: [
        "Cumplir con los requisitos contables del departamento de compras",
        "Identificar fallos recurrentes, reducir tiempos de diagnóstico y documentar soluciones probadas",
        "Calcular el coste mensual de la factura eléctrica del taller",
        "Automatizar la compra de piezas de recambio sin intervención humana"
        ],
        correcta: 1,
        explicacion: "Justificación: Un historial de mantenimiento permite identificar componentes con alta tasa de fallo, reutilizar diagnósticos ya realizados para problemas similares y documentar el conocimiento técnico del equipo. Es la base de la mejora continua en el mantenimiento de sistemas."
      },
    ]
  },
];
