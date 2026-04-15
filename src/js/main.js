// import '../css/style.css';
import { translations } from './i18n.js';

// ============================================
//  DATA - Comprehensive Library (26 Items)
// ============================================

const components = [
  // SENSORS
  {
    id: 1,
    category: 'sensor',
    name: 'Ultrasonic Distance Sensor',
    image: 'https://files.manuscdn.com/f/310344078822606/m/17bb7d57bb7e6d0a793c9d747fd0c18a.webp',
    description: 'High-frequency sound waves measure distance to objects by calculating the time of reflection.',
    specs: ['Range: 2cm - 400cm', 'Voltage: 5V DC', 'Accuracy: 3mm'],
    wiring: 'Connect VCC to 5V, GND to GND, Echo and Trigger to digital pins.',
    pins: ['VCC', 'GND', 'Echo', 'Trigger'],
    price: '$3.50',
    stock: 'High',
    tags: ['Robotics', 'Obstacle Avoidance']
  },
  {
    id: 2,
    category: 'sensor',
    name: 'DHT22 Temp & Humidity',
    image: 'https://files.manuscdn.com/f/310344078822606/m/389025110f0322ba91c0e353724c08cd.webp',
    description: 'Precise digital sensor for monitoring ambient environmental conditions.',
    specs: ['Temp Range: -40 to 80°C', 'Humidity: 0-100%', 'Signal: Digital'],
    wiring: 'Requires a 10k pull-up resistor between VCC and Data pin.',
    pins: ['VCC', 'GND', 'Data', 'NC'],
    price: '$5.00',
    stock: 'In Stock',
    tags: ['Weather', 'Automation']
  },
  {
    id: 3,
    category: 'sensor',
    name: 'MPU6050 Gyro & Accelerometer',
    image: 'https://files.manuscdn.com/f/310344078822606/m/68b8b8095d355efdfba6218080f3316f.webp',
    description: 'Triple-axis accelerometer and gyroscope for motion tracking and stabilization.',
    specs: ['Interface: I2C', 'Axes: 6 (3 Gyro, 3 Accel)', 'Voltage: 3.3V'],
    wiring: 'Connect AD0 to Ground for default I2C address 0x68.',
    pins: ['VCC', 'GND', 'SCL', 'SDA', 'AD0', 'INT'],
    price: '$4.20',
    stock: 'Medium',
    tags: ['IMU', 'Motion']
  },
  {
    id: 4,
    category: 'sensor',
    name: 'PIR Motion Sensor',
    image: 'https://files.manuscdn.com/f/310344078822606/m/80091310cdcf034c7b64972e39ea458b.webp',
    description: 'Passive Infrared sensor that detects movement of warm objects within range.',
    specs: ['Angle: 120°', 'Range: 7m', 'Adjustable Delay'],
    wiring: 'Simple 3-pin connection. Output goes HIGH on detection.',
    pins: ['VCC', 'GND', 'OUT'],
    price: '$2.80',
    stock: 'High',
    tags: ['Security', 'Smart Home']
  },
  {
    id: 5,
    category: 'sensor',
    name: 'Infrared Obstacle Sensor',
    image: 'https://files.manuscdn.com/f/310344078822606/m/658fc358f278c2e06917f651ba0e8c56.webp',
    description: 'Emits and detects reflected IR light to sense objects directly in front.',
    specs: ['Range: 2-30cm', 'Digital Output', 'On-board Potentiometer'],
    wiring: 'Output is Active LOW when an obstacle is detected.',
    pins: ['VCC', 'GND', 'OUT'],
    price: '$1.50',
    stock: 'Very High',
    tags: ['Line Follower', 'Robot Tank']
  },
  {
    id: 6,
    category: 'sensor',
    name: 'Force Sensitive Resistor (FSR)',
    image: 'https://files.manuscdn.com/f/310344078822606/m/88c6c58908f921d7b38d33010b9597f7.webp',
    description: 'Resistance decreases as force applied to the sensing area increases.',
    specs: ['Force Range: 0.1N - 100N', 'Type: Analog', 'Thin/Flexible'],
    wiring: 'Use in a voltage divider circuit with a fixed 10k resistor.',
    pins: ['Pin 1', 'Pin 2'],
    price: '$7.50',
    stock: 'Low',
    tags: ['Haptics', 'Pressure']
  },
  {
    id: 7,
    category: 'sensor',
    name: 'MQ-2 Gas Sensor',
    image: 'https://files.manuscdn.com/f/310344078822606/m/0787e91d5774889c293779e54807469a.webp',
    description: 'Detects combustible gases like LPG, Propane, Hydrogen, and Smoke.',
    specs: ['Sensitivity: Adjustable', 'Output: Analog & Digital', 'Warm-up: 20s'],
    wiring: 'Connect A0 to analog input for PPM readings.',
    pins: ['VCC', 'GND', 'D0', 'A0'],
    price: '$4.50',
    stock: 'Medium',
    tags: ['Safety', 'Gas Detection']
  },
  {
    id: 8,
    category: 'sensor',
    name: 'LDR Photoresistor',
    image: 'https://files.manuscdn.com/f/310344078822606/m/63d59e39062eb1d9cbcf766e4a682cfb.webp',
    description: 'Light Dependent Resistor whose resistance drops as light intensity increases.',
    specs: ['Resistance @ 10Lux: 10-20kΩ', 'Response: Fast', 'Low Cost'],
    wiring: 'Standard voltage divider with a 10k resistor to 5V.',
    pins: ['Pin 1', 'Pin 2'],
    price: '$0.50',
    stock: 'Infinite',
    tags: ['Light Sensing', 'Automation']
  },
  {
    id: 9,
    category: 'sensor',
    name: 'Hall Effect Sensor',
    image: 'https://files.manuscdn.com/f/310344078822606/m/68e7e31b6016cf76383a15104ec0337e.webp',
    description: 'Detects magnetic fields. Used for speed calculations and positioning.',
    specs: ['Type: Unipolar/Bipolar', 'Voltage: 4.5 - 24V', 'Digital Output'],
    wiring: 'Active on South pole detection. Requires pull-up resistor.',
    pins: ['VCC', 'GND', 'OUT'],
    price: '$1.20',
    stock: 'High',
    tags: ['Speedometer', 'Encoders']
  },
  {
    id: 10,
    category: 'sensor',
    name: 'Rotary Encoder',
    image: 'https://files.manuscdn.com/f/310344078822606/m/92e808386341cb8333550303c004d49a.webp',
    description: 'Measures angular position and direction of a shaft incrementally.',
    specs: ['Resolution: 20 PPR', 'Operation: 360°', 'Built-in Switch'],
    wiring: 'Connect CLK and DT to interrupt pins for accurate tracking.',
    pins: ['VCC', 'GND', 'CLK', 'DT', 'SW'],
    price: '$3.00',
    stock: 'Medium',
    tags: ['Control', 'UI/UX']
  },

  // ACTUATORS
  {
    id: 11,
    category: 'actuator',
    name: 'Standard Servo (SG90)',
    image: 'https://files.manuscdn.com/f/310344078822606/m/0c4418659139266187654ed915525ca7.webp',
    description: 'Micro servo motor for precise angular positioning up to 180 degrees.',
    specs: ['Torque: 1.2kg/cm', 'Speed: 0.1s/60°', 'Voltage: 4.8V'],
    wiring: 'Brown: GND, Red: VCC, Orange: PWM Signal.',
    pins: ['VCC', 'GND', 'PWM'],
    price: '$3.50',
    stock: 'Very High',
    tags: ['Robotics', 'RC Car']
  },
  {
    id: 12,
    category: 'actuator',
    name: 'Stepper Motor (NEMA 17)',
    image: 'https://files.manuscdn.com/f/310344078822606/m/e38c7ef39cdad53d9e4a30e9d6d7fe73.webp',
    description: 'Brushless DC motor that divides a full rotation into equal steps.',
    specs: ['Step Angle: 1.8°', 'Current: 1.5A', 'Torque: 45Ncm'],
    wiring: 'Requires a stepper driver like A4988. Wire 4 coils carefully.',
    pins: ['A+', 'A-', 'B+', 'B-'],
    price: '$14.00',
    stock: 'Medium',
    tags: ['3D Printing', 'CNC']
  },
  {
    id: 13,
    category: 'actuator',
    name: 'DC Motor with Gearbox',
    image: 'https://files.manuscdn.com/f/310344078822606/m/26ab33eb885c4dc20ff17c244837f4ce.webp',
    description: 'High torque DC motor reduced for driving wheels and heavy loads.',
    specs: ['Voltage: 3-12V', 'Ratio: 1:48', 'RPM: 125-200'],
    wiring: 'Control speed with PWM through an H-Bridge driver.',
    pins: ['Pos', 'Neg'],
    price: '$2.20',
    stock: 'High',
    tags: ['Wheels', 'Robots']
  },
  {
    id: 14,
    category: 'actuator',
    name: 'Brushless DC Motor (BLDC)',
    image: 'https://files.manuscdn.com/f/310344078822606/m/5ba66be851c238b77626391d1847eada.webp',
    description: 'High-speed motor for drones and high-performance robotic wings.',
    specs: ['KV Rate: 2300KV', 'Thrust: Up to 1kg', 'Efficiency: High'],
    wiring: 'Must be controlled via an Electronic Speed Controller (ESC).',
    pins: ['Phase A', 'Phase B', 'Phase C'],
    price: '$18.00',
    stock: 'Low',
    tags: ['Drone', 'Propulsion']
  },
  {
    id: 15,
    category: 'actuator',
    name: '5V Active Buzzer',
    image: 'https://files.manuscdn.com/f/310344078822606/m/df5d3049b106203cf090ba705e71448b.webp',
    description: 'Simple audio signaling device that emits a fixed tone when powered.',
    specs: ['Sound Level: 85dB', 'Freq: 2.3kHz', 'Active/Passive options'],
    wiring: 'Directly connect to digital pin to beep. Check polarity.',
    pins: ['+', '-'],
    price: '$0.80',
    stock: 'Very High',
    tags: ['Alarm', 'UI Feedback']
  },
  {
    id: 16,
    category: 'actuator',
    name: 'Linear Actuator (Micro)',
    image: 'https://files.manuscdn.com/f/310344078822606/m/309489fc964cd08354c0e6498f395724.webp',
    description: 'Converts rotational motion from a motor into linear push/pull motion.',
    specs: ['Stroke: 50-100mm', 'Force: 5kg', 'Built-in limit switches'],
    wiring: 'Reverse polarity to change direction of travel.',
    pins: ['Pos', 'Neg'],
    price: '$25.00',
    stock: 'Limited',
    tags: ['Locks', 'Automated Gates']
  },
  {
    id: 17,
    category: 'actuator',
    name: '5V Relay Module',
    image: 'https://files.manuscdn.com/f/310344078822606/m/8ee8670ab39502b661d4a04467389148.webp',
    description: 'Electromagnetic switch that allows low voltage control of high voltage loads.',
    specs: ['Load: Up to 10A 250V', 'Trigger: Logic High/Low', 'Isolated'],
    wiring: 'COM connected to load. NO is Normally Open.',
    pins: ['VCC', 'GND', 'IN'],
    price: '$2.50',
    stock: 'High',
    tags: ['Home Automation', 'AC Control']
  },
  {
    id: 18,
    category: 'actuator',
    name: 'Laser Diode Module',
    image: 'https://files.manuscdn.com/f/310344078822606/m/68b8e3ea954e3f423e20e8b78913b868.webp',
    description: 'Produces a concentrated beam of red laser light for pointing and tripwires.',
    specs: ['Power: 5mW', 'Wavelength: 650nm', 'Voltage: 5V'],
    wiring: 'Connect to digital pin to pulse the beam.',
    pins: ['VCC', 'GND', 'Signal'],
    price: '$1.50',
    stock: 'High',
    tags: ['Optics', 'Tripwire']
  },

  // CONTROLLERS
  {
    id: 19,
    category: 'controller',
    name: 'Arduino Uno R3',
    image: 'https://files.manuscdn.com/f/310344078822606/m/389025091c0e3c0f2025113d091a182b.webp',
    description: 'The industry standard entry-level microcontroller board based on ATmega328P.',
    specs: ['Digital I/O: 14', 'Analog In: 6', 'Clock: 16MHz'],
    wiring: 'Power via USB or DC Barrel Jack (7-12V).',
    pins: ['0-13 Digital', 'A0-A5 Analog', '5V', 'GND'],
    price: '$12.00',
    stock: 'High',
    tags: ['Beginner', 'Prototype']
  },
  {
    id: 20,
    category: 'controller',
    name: 'ESP32 DevKit V1',
    image: 'https://files.manuscdn.com/f/310344078822606/m/389025110c0e25100918113d091a382b.webp',
    description: 'Powerful microcontroller with integrated Wi-Fi and Dual-mode Bluetooth.',
    specs: ['Core: Dual 240MHz', 'RAM: 520KB', 'WiFi/BT built-in'],
    wiring: 'Program via Micro-USB. Logic levels are 3.3V (NOT 5V).',
    pins: ['GPIO 0-39', 'EN', 'BOOT', '3.3V', 'GND'],
    price: '$6.50',
    stock: 'In Stock',
    tags: ['IoT', 'Wireless']
  },
  {
    id: 21,
    category: 'controller',
    name: 'Raspberry Pi Pico',
    image: 'https://files.manuscdn.com/f/310344078822606/m/2b683e382025113a091a0c0e3c113d2b.webp',
    description: 'Small, fast, and versatile board built using RP2040 silicon designed by Raspberry Pi.',
    specs: ['Silicon: RP2040', 'I/O Index: 26 GPIO', 'MicroPython Ready'],
    wiring: 'Ultra-thin DIP profile suitable for breadboards.',
    pins: ['GP0-GP28', 'RUN', '3V3', 'GND'],
    price: '$4.00',
    stock: 'High',
    tags: ['Silicon', 'Python']
  },
  {
    id: 22,
    category: 'controller',
    name: 'Arduino Mega 2560',
    image: 'https://files.manuscdn.com/f/310344078822606/m/3890251125101a182b0c0e3c0f202511.webp',
    description: 'Expanded board for complex projects requiring many inputs/outputs.',
    specs: ['Digital I/O: 54', 'Analog In: 16', 'Flash: 256KB'],
    wiring: 'Perfect for large robots and 3D printer controllers.',
    pins: ['0-53 Digital', 'A0-A15 Analog'],
    price: '$20.00',
    stock: 'Medium',
    tags: ['Large Scale', 'Complex']
  },
  {
    id: 23,
    category: 'controller',
    name: 'NodeMCU (ESP8266)',
    image: 'https://files.manuscdn.com/f/310344078822606/m/389025110f202b0c0e3c091a18113c0f.webp',
    description: 'Lightweight Wi-Fi enabled controller perfect for small IoT nodes.',
    specs: ['WiFi: 802.11 b/g/n', 'Voltage: 3.3V', 'Flash: 4MB'],
    wiring: 'Program via Arduino IDE with ESP8266 Core installed.',
    pins: ['D0-D8 Digital', 'A0 Analog'],
    price: '$4.50',
    stock: 'High',
    tags: ['WiFi', 'Smarthome']
  },
  {
    id: 24,
    category: 'controller',
    name: 'L298N Motor Driver',
    image: 'https://files.manuscdn.com/f/310344078822606/m/310344078822606.webp',
    description: 'High voltage, high current dual full-bridge driver designed to accept standard TTL logic.',
    specs: ['Current: 2A peak', 'Supply: 5-35V', 'Dual Channel'],
    wiring: 'Drive two DC motors or one stepper motor.',
    pins: ['ENA', 'IN1', 'IN2', 'IN3', 'IN4', 'ENB'],
    price: '$4.00',
    stock: 'High',
    tags: ['Driver', 'Power']
  },
  {
    id: 25,
    category: 'controller',
    name: 'OLED Display (0.96")',
    image: 'https://files.manuscdn.com/f/310344078822606/m/389025113d091a1820250c0e3c0f113a.webp',
    description: 'Crisp blue/white display for showing sensor data and navigation menus.',
    specs: ['Res: 128x64 px', 'Interface: I2C', 'Logic: 3.3-5V'],
    wiring: 'Connect SCL/SDA to hardware I2C pins of controller.',
    pins: ['VCC', 'GND', 'SCL', 'SDA'],
    price: '$5.50',
    stock: 'Medium',
    tags: ['UI', 'Display']
  },
  {
    id: 26,
    category: 'controller',
    name: 'Step-Down Buck Converter',
    image: 'https://files.manuscdn.com/f/310344078822606/m/3890250b3d0c0e3c0f113d091a182025.webp',
    description: 'Efficiently reduces higher input voltage down to safe operating levels.',
    specs: ['Input: 4-35V', 'Output: 1.2-30V', 'Max Current: 3A'],
    wiring: 'Adjust output voltage using the gold screw before connecting load.',
    pins: ['IN+', 'IN-', 'OUT+', 'OUT-'],
    price: '$3.20',
    stock: 'High',
    tags: ['Power', 'Step-down']
  }
];

const projects = [
  {
    id: 1,
    title: 'Autonomous Maze Solver',
    titleAr: 'حل المتاهات ذاتي القيادة',
    image: 'https://files.manuscdn.com/f/310344078822606/m/17bb7d57bb7e6d0a793c9d747fd0c18a.webp',
    desc: 'Uses three ultrasonic sensors to navigate complex mazes without human intervention.',
    descAr: 'يستخدم ثلاث مستشعرات فوق صوتية للملاحة في المتاهات المعقدة دون تدخل بشري.',
    video: 'https://www.youtube.com/embed/ZpU-Yis2h1I',
    difficulty: 'Intermediate',
    time: '8 Hours',
    components: ['3x HC-SR04', 'Arduino Uno', 'L298N', 'Chassis']
  },
  {
    id: 2,
    title: 'IoT Weather Station',
    titleAr: 'محطة أرصاد إنترنت الأشياء',
    image: 'https://files.manuscdn.com/f/310344078822606/m/389025110f0322ba91c0e353724c08cd.webp',
    desc: 'Bilingual weather monitor that pushes data to a web dashboard via MQTT.',
    descAr: 'راصد جوي ثنائي اللغة يرسل البيانات إلى لوحة تحكم ويب عبر بروتوكول MQTT.',
    video: 'https://www.youtube.com/embed/j_8jH4t9n_8',
    difficulty: 'Advanced',
    time: '12 Hours',
    components: ['ESP32', 'DHT22', 'BMP280', 'OLED']
  },
  {
    id: 3,
    title: 'Self-Balancing Robot',
    titleAr: 'روبوت التوازن الذاتي',
    image: 'https://files.manuscdn.com/f/310344078822606/m/68b8b8095d355efdfba6218080f3316f.webp',
    desc: 'Maintains vertical balance using PID control and an MPU6050 accelerometer.',
    descAr: 'يحافظ على التوازن العمودي باستخدام تحكم PID ومستشعر MPU6050.',
    video: 'https://www.youtube.com/embed/U9OqJ82E_f4',
    difficulty: 'Expert',
    time: '20 Hours',
    components: ['MPU6050', 'Stepper Motors', 'Arduino Uno', 'A4988']
  },
  {
    id: 4,
    title: 'Remote Surveillance Tank',
    titleAr: 'دبابة المراقبة عن بعد',
    image: 'https://files.manuscdn.com/f/310344078822606/m/26ab33eb885c4dc20ff17c244837f4ce.webp',
    desc: 'A tracked robot with live video stream controlled via custom mobile app.',
    descAr: 'روبوت مجنزر مع بث فيديو مباشر يتم التحكم فيه عبر تطبيق جوال مخصص.',
    video: 'https://www.youtube.com/embed/Y-7cWpEq0qQ',
    difficulty: 'Advanced',
    time: '18 Hours',
    components: ['ESP32-CAM', 'L298N', 'Gear Motors', 'LiPo Battery']
  },
  {
    id: 5,
    title: 'Smart Plant Monitor',
    titleAr: 'مراقب النبات الذكي',
    image: 'https://files.manuscdn.com/f/310344078822606/m/63d59e39062eb1d9cbcf766e4a682cfb.webp',
    desc: 'Analyzes soil moisture and light to automatically water plants when needed.',
    descAr: 'يحلل رطوبة التربة والضوء لري النباتات تلقائيًا عند الحاجة.',
    video: 'https://www.youtube.com/embed/uGv36Vf6Y6k',
    difficulty: 'Beginner',
    time: '4 Hours',
    components: ['Moisture Sensor', 'LDR', 'Water Pump', 'Relay']
  }
];

const quizQuestions = [
  {
    question: "Which component is used to measure distance using sound waves?",
    questionAr: "ما هو المكون المستخدم لقياس المسافة باستخدام الموجات الصوتية؟",
    options: ["LDR", "HC-SR04", "MPU6050", "SG90"],
    optionsAr: ["المقاومة الضوئية", "مستشعر المسافة", "الجيروسكوب", "المحرك المؤازر"],
    correct: 1
  },
  {
    question: "How many degrees can a standard SG90 servo motor rotate?",
    questionAr: "كم تبلغ درجة دوران محرك SG90 المؤازر القياسي؟",
    options: ["360°", "90°", "180°", "45°"],
    optionsAr: ["360 درجة", "90 درجة", "180 درجة", "45 درجة"],
    correct: 2
  },
  {
    question: "What is the typical logic voltage of an ESP32?",
    questionAr: "ما هو جهد المنطق النموذجي لـ ESP32؟",
    options: ["5V", "12V", "3.3V", "1.8V"],
    optionsAr: ["5 فولت", "12 فولت", "3.3 فولت", "1.8 فولت"],
    correct: 2
  },
  {
    question: "Which sensor is best for detecting leaked LPG gas?",
    questionAr: "أي مستشعر هو الأفضل للكشف عن تسرب غاز الـ LPG؟",
    options: ["DHT11", "MQ-2", "PIR", "Hall Sensor"],
    optionsAr: ["مستشعر الحرارة", "مستشعر الغاز MQ-2", "مستشعر الحركة", "مستشعر هول"],
    correct: 1
  },
  {
    question: "What does PID stand for in control systems?",
    questionAr: "إلى ماذا يرمز اختصار PID في أنظمة التحكم؟",
    options: ["Power Internal Drive", "Parallel Input Device", "Proportional Integral Derivative", "Position Input Data"],
    optionsAr: ["طاقة المحرك الداخلية", "جهاز الإدخال المتوازي", "التناسبي التكاملي التفاضلي", "بيانات إدخال الموقع"],
    correct: 2
  }
];

// ============================================
//  CORE LOGIC
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTheme();
  initLanguage();
  initScrollReveal();
  
  // Page specific initializers
  if (document.getElementById('catalog-container')) initCatalog();
  if (document.getElementById('projects-container')) initProjects();
  if (document.getElementById('quiz-container')) initQuiz();
  if (document.getElementById('forum-preview')) initForum();
  if (document.getElementById('open-assistant-btn')) initAssistant();
  
  // Stats counter
  if (document.querySelector('.stat-number')) initCounters();

  // Footer Year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});

// NAVIGATION & UI
function initNavbar() {
  const nav = document.getElementById('main-nav');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if (drawer.classList.contains('active')) {
        icon.className = 'ph ph-x';
      } else {
        icon.className = 'ph ph-list';
      }
    });
  }
}

function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (!icon) return;
  icon.className = theme === 'light' ? 'ph ph-moon' : 'ph ph-sun';
}

function initLanguage() {
  const toggle = document.getElementById('lang-toggle');
  const currentLang = localStorage.getItem('lang') || 'en';
  
  setLanguage(currentLang);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const newLang = document.documentElement.dir === 'ltr' ? 'ar' : 'en';
      setLanguage(newLang);
    });
  }
}

function setLanguage(lang) {
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  localStorage.setItem('lang', lang);

  // Update toggle button text
  const toggleBtn = document.querySelector('#lang-toggle span');
  if (toggleBtn) toggleBtn.textContent = isAr ? 'English' : 'عربي';

  // Translate elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });
  
  // Re-render dynamic content
  if (document.getElementById('catalog-container')) renderCatalog(activeFilter || 'all');
  if (document.getElementById('projects-container')) renderProjects();
  if (document.getElementById('quiz-container') && quizCurrentIndex === -1) renderQuizStart();
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

function initCounters() {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      stat.textContent = Math.floor(current);
      if (current >= target) {
        stat.textContent = target + '+';
        clearInterval(timer);
      }
    }, 30);
  });
}

// CATALOG
let activeFilter = 'all';
function initCatalog() {
  const filters = document.querySelectorAll('.filter-btn');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderCatalog(activeFilter);
    });
  });
  renderCatalog('all');
}

function renderCatalog(filter) {
  const container = document.getElementById('catalog-container');
  if (!container) return;
  
  container.innerHTML = '';
  const filtered = filter === 'all' ? components : components.filter(c => c.category === filter);
  
  filtered.forEach(comp => {
    const card = document.createElement('div');
    card.className = 'component-card glass-panel';
    card.setAttribute('data-reveal', '');
    card.onclick = () => showComponentDetail(comp.id);
    
    card.innerHTML = `
      <div class="comp-img">
        <img src="${comp.image}" alt="${comp.name}" loading="lazy">
        <span class="category-badge">${comp.category.toUpperCase()}</span>
      </div>
      <div class="comp-info">
        <h3>${comp.name}</h3>
        <div class="comp-tags">
          ${comp.tags.slice(0, 2).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <p class="comp-price">${comp.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
  initScrollReveal();
}

function showComponentDetail(id) {
  const comp = components.find(c => c.id === id);
  const modal = document.getElementById('detail-modal');
  const body = document.getElementById('detail-body');
  
  const isAr = document.documentElement.dir === 'rtl';
  
  body.innerHTML = `
    <div class="detail-grid">
      <div class="detail-visual">
        <img src="${comp.image}" alt="${comp.name}">
      </div>
      <div class="detail-content">
        <h2>${comp.name}</h2>
        <p class="detail-desc">${comp.description}</p>
        
        <div class="detail-section">
          <h4><i class="ph ph-list-checks"></i> ${isAr ? 'المواصفات' : 'Specifications'}</h4>
          <ul>
            ${comp.specs.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div class="detail-section">
          <h4><i class="ph ph-plug"></i> ${isAr ? 'تخطيط الدبابيس' : 'Pinout'}</h4>
          <div class="pin-grid">
            ${comp.pins.map(p => `<span class="pin-tag">${p}</span>`).join('')}
          </div>
        </div>

        <div class="detail-section">
          <h4><i class="ph ph-circuit-board"></i> ${isAr ? 'التوصيل' : 'Wiring'}</h4>
          <p>${comp.wiring}</p>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  const closeBtn = document.getElementById('close-detail-btn');
  closeBtn.onclick = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };
}

// PROJECTS
function initProjects() {
  renderProjects();
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  
  const isAr = document.documentElement.dir === 'rtl';
  container.innerHTML = '';
  
  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card glass-panel';
    card.setAttribute('data-reveal', '');
    
    card.innerHTML = `
      <div class="proj-video">
        <iframe src="${proj.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="proj-info">
        <span class="difficulty ${proj.difficulty.toLowerCase()}">${proj.difficulty}</span>
        <h3>${isAr ? proj.titleAr : proj.title}</h3>
        <p>${isAr ? proj.descAr : proj.desc}</p>
        
        <div class="proj-meta">
          <span><i class="ph ph-clock"></i> ${proj.time}</span>
          <span><i class="ph ph-cpu"></i> ${proj.components.length} ${isAr ? 'قطع' : 'Parts'}</span>
        </div>
        
        <div class="proj-parts">
          ${proj.components.map(c => `<span>${c}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  initScrollReveal();
}

// QUIZ
let quizCurrentIndex = -1;
let quizScore = 0;

function initQuiz() {
  renderQuizStart();
}

function renderQuizStart() {
  const container = document.getElementById('quiz-container');
  const isAr = document.documentElement.dir === 'rtl';
  
  container.innerHTML = `
    <div class="quiz-start">
      <div class="feature-icon large"><i class="ph ph-brain"></i></div>
      <h2>${isAr ? 'جاهز للاختبار؟' : 'Ready to Test?'}</h2>
      <p>${isAr ? 'اختبر معلوماتك في أساسيات الميكاترونكس وهندسة الإلكترونيات.' : 'Challenge your knowledge in mechatronics fundamentals and electronics engineering.'}</p>
      <button class="btn btn-primary" onclick="startQuiz()">
        <span data-i18n="quiz_start_btn">${isAr ? 'ابدأ الاختبار' : 'Start Quiz'}</span>
      </button>
    </div>
  `;
}

window.startQuiz = () => {
  quizCurrentIndex = 0;
  quizScore = 0;
  renderQuestion();
};

function renderQuestion() {
  const container = document.getElementById('quiz-container');
  const isAr = document.documentElement.dir === 'rtl';
  const q = quizQuestions[quizCurrentIndex];
  
  container.innerHTML = `
    <div class="quiz-header">
      <span class="question-count">${isAr ? 'السؤال' : 'Question'} ${quizCurrentIndex + 1} / ${quizQuestions.length}</span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" style="width: ${((quizCurrentIndex + 1) / quizQuestions.length) * 100}%"></div>
      </div>
    </div>
    <div class="quiz-body">
      <h2>${isAr ? q.questionAr : q.question}</h2>
      <div class="quiz-options">
        ${(isAr ? q.optionsAr : q.options).map((opt, i) => `
          <button class="option-btn" onclick="checkAnswer(${i})">${opt}</button>
        `).join('')}
      </div>
    </div>
  `;
}

window.checkAnswer = (idx) => {
  const q = quizQuestions[quizCurrentIndex];
  if (idx === q.correct) {
    quizScore++;
  }
  
  quizCurrentIndex++;
  if (quizCurrentIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    renderQuizFinish();
  }
};

function renderQuizFinish() {
  const container = document.getElementById('quiz-container');
  const isAr = document.documentElement.dir === 'rtl';
  const percentage = (quizScore / quizQuestions.length) * 100;
  
  container.innerHTML = `
    <div class="quiz-finish">
      <div class="result-circle">
        <svg viewBox="0 0 36 36">
          <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <path class="circle" stroke-dasharray="${percentage}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <text x="18" y="20.35" class="percentage">${quizScore}/${quizQuestions.length}</text>
        </svg>
      </div>
      <h2>${isAr ? 'اكتمل الاختبار!' : 'Quiz Completed!'}</h2>
      <p>${isAr ? 'أداء رائع! لقد أجبت بنجاح على أسئلة حول المكونات والأنظمة.' : 'Great job! You have successfully answered questions about components and systems.'}</p>
      <button class="btn btn-outline" onclick="startQuiz()">${isAr ? 'إعادة الاختبار' : 'Retake Quiz'}</button>
    </div>
  `;
}

// FORUM
function initForum() {
  const container = document.getElementById('forum-preview');
  if (!container) return;
  
  const isAr = document.documentElement.dir === 'rtl';
  const topics = [
    { user: 'Omar E.', title: 'Best PID constants for dual motor drive?', tags: ['Control', 'Arduino'], votes: 12, comments: 4, titleAr: 'أفضل ثوابت PID لمحرك القيادة المزدوج؟' },
    { user: 'Sara K.', title: 'How to reduce noise in DHT22 readings?', tags: ['Sensors', 'ESP32'], votes: 8, comments: 15, titleAr: 'كيفية تقليل التشويش في قراءات DHT22؟' },
    { user: 'Ahmed M.', title: 'My RC car is drifting to the left', tags: ['Help', 'Mechanical'], votes: 3, comments: 2, titleAr: 'سيارة التحكم تنجرف لليسار' }
  ];

  topics.forEach(t => {
    const el = document.createElement('div');
    el.className = 'forum-item glass-panel';
    el.innerHTML = `
      <div class="forum-votes">
        <i class="ph ph-caret-up"></i>
        <span>${t.votes}</span>
        <i class="ph ph-caret-down"></i>
      </div>
      <div class="forum-data">
        <h4>${isAr ? t.titleAr : t.title}</h4>
        <div class="item-meta">
          <span>${t.user}</span> • <span>${t.tags[0]}</span>
        </div>
      </div>
      <div class="forum-stats">
        <span><i class="ph ph-chat-circle"></i> ${t.comments}</span>
      </div>
    `;
    container.appendChild(el);
  });
}

// ASSISTANT
function initAssistant() {
  const openBtn = document.getElementById('open-assistant-btn');
  const closeBtn = document.getElementById('close-assistant-btn');
  const modal = document.getElementById('assistant-modal');
  const sendBtn = document.getElementById('send-chat-btn');
  const input = document.getElementById('chat-input');
  
  if(openBtn) {
    openBtn.onclick = () => modal.classList.add('active');
  }
  
  if(closeBtn) {
    closeBtn.onclick = () => modal.classList.remove('active');
  }
  
  if(sendBtn) {
    sendBtn.onclick = handleChat;
    input.onkeypress = (e) => { if(e.key === 'Enter') handleChat(); };
  }
}

function handleChat() {
  const input = document.getElementById('chat-input');
  const history = document.getElementById('chat-history');
  const query = input.value.trim();
  if(!query) return;

  const isAr = document.documentElement.dir === 'rtl';

  // User message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user';
  userMsg.innerHTML = `<div class="msg-bubble">${query}</div>`;
  history.appendChild(userMsg);
  
  input.value = '';
  history.scrollTop = history.scrollHeight;

  // Bot response (Simulated)
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-message bot';
    let response = "That's a great engineering question! I suggest checking our Catalog to find specific pinouts for your component.";
    if (isAr) response = "هذا سؤال هندسي رائع! أقترح مراجعة الكتالوج الخاص بنا للعثور على تخطيطات الدبابيس المحددة لمكونك.";
    
    botMsg.innerHTML = `
      <div class="avatar"><i class="ph ph-robot"></i></div>
      <div class="msg-bubble">${response}</div>
    `;
    history.appendChild(botMsg);
    history.scrollTop = history.scrollHeight;
  }, 1000);
}

// Global translations dictionary
import { translations } from './i18n.js';
