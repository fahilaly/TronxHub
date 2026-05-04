export const dict = {
  en: {
    // Nav
    nav_logo: "TronxHub",
    nav_catalog: "Catalog",
    nav_projects: "Projects",
    nav_quiz: "Quiz",
    nav_forum: "Forum",
    nav_dashboard: "Dashboard",
    nav_dashboard_title: "Network & Clubs",
    nav_dashboard_desc: "Explore specialized platforms in the mechatronics network.",
    card_mechmanager_title: "MechManager",
    card_mechmanager_desc: "Access the main mechatronics management dashboard for club administrators.",
    btn_open_dashboard: "Open Dashboard",
    card_mechatronix_title: "Mechatronix",
    card_mechatronix_desc: "Visit the Mechatronix hub for club events and organizational details.",
    btn_visit_mechatronix: "Visit Mechatronix",

    // Hero
    hero_badge: "Mechatronics Engineering",
    hero_title: "Learn. Build. Automate.",
    hero_subtitle: "A hands-on technical platform for understanding sensors, actuators, microcontrollers, and robotic systems.",
    hero_cta_primary: "Explore Components",
    hero_cta_secondary: "Test Your Knowledge",

    // Stats
    stat_components: "Components",
    stat_projects: "Projects",
    stat_questions: "Quiz Questions",
    stat_members: "Members",

    // Catalog
    section_catalog_tag: "HARDWARE LIBRARY",
    section_catalog_title: "Mechatronic Components",
    section_catalog_subtitle: "Master the essential sensors, actuators, and microcontrollers used in modern robotics and automation.",
    filter_all: "All",
    filter_sensors: "Sensors",
    filter_actuators: "Actuators",
    filter_controllers: "Controllers",
    filter_recent: "Recent",
    filter_top: "Top",
    filter_unanswered: "Unanswered",
    view_details: "View Details",
    category_sensor: "Sensor",
    category_actuator: "Actuator",
    category_controller: "Controller",

    // Projects
    section_projects_tag: "HANDS-ON BUILDS",
    section_projects_title: "Student Projects",
    section_projects_subtitle: "Real-world mechatronics projects combining sensors, actuators, and code.",
    proj_price: "Estimated Cost",
    proj_requirements: "What's Needed",
    proj_video: "Watch Tutorial",
    proj_steps: "How to Build",

    // Quiz
    section_quiz_tag: "TEST YOURSELF",
    section_quiz_title: "Quick Knowledge Check",
    section_quiz_subtitle: "Test your understanding of mechatronics fundamentals.",
    quiz_next: "Next",
    quiz_check: "Check Answer",
    quiz_finish: "See Results",
    quiz_retry: "Try Again",
    quiz_score_prefix: "You scored",
    quiz_score_suffix: "correct!",
    quiz_great: "Excellent work, Engineer! 🎉",
    quiz_good: "Good job! Keep learning.",
    quiz_try_again: "Keep practicing — you'll get there!",

    // Community
    section_community_tag: "COMMUNITY & TOOLS",
    section_community_title: "Connect & Learn",
    card_assistant_title: "TronxBot",
    card_assistant_desc: "Ask technical questions about wiring diagrams, communication protocols, and control system logic.",
    btn_open_assistant: "Open TronxBot",
    card_forum_title: "Community Forum",
    card_forum_desc: "Share projects, discuss circuit designs, and debug code with fellow engineering students.",
    btn_visit_forum: "Visit Forum",
    forum_new_topic: "New Topic",

    // Assistant
    assistant_modal_title: "TronxBot",
    assistant_welcome: "Hello Engineer! I am TronxBot. Ask me anything about sensors, motors, wiring, or microcontrollers.",
    assistant_placeholder: "Ask about wiring, code, or physics...",

    // Footer
    footer_desc: "An open educational platform for mechatronics and robotics engineering students.",
    footer_quick_links: "Quick Links",
    footer_resources: "Resources",
    footer_tagline: "Built for Engineers, by Engineers.",

    // Component Titles & Descs
    comp_arduino_uno_title: "Arduino Uno R3",
    comp_arduino_uno_desc: "The gold standard for prototyping. ATmega328P based with 14 digital I/O and 6 analog inputs.",
    comp_arduino_mega_title: "Arduino Mega 2560",
    comp_arduino_mega_desc: "Extended microcontroller with 54 digital I/O pins and 16 analog inputs. Ideal for complex robotics.",
    comp_l298n_title: "L298N Motor Driver",
    comp_l298n_desc: "High-power dual H-bridge driver capable of controlling 2 DC motors or 1 stepper motor.",
    comp_rpi4_title: "Raspberry Pi 4",
    comp_rpi4_desc: "Powerful single-board computer for heavy tasks like computer vision and AI processing.",
    comp_stm32_title: "STM32F103 (Blue Pill)",
    comp_stm32_desc: "32-bit ARM Cortex-M3 processor. High performance and real-time control at a low cost.",
    comp_hc05_title: "Bluetooth HC-05",
    comp_hc05_desc: "Wireless serial communication module allowing robots to be controlled via smartphone.",
    
    comp_hcsr04_title: "Ultrasonic HC-SR04",
    comp_hcsr04_desc: "Measures distance by sending sound waves. Range: 2cm to 400cm. Used for obstacle avoidance.",
    comp_ir_title: "IR Obstacle Sensor",
    comp_ir_desc: "Detects objects using infrared reflection. Essential for line followers and edge detection.",
    comp_pir_title: "PIR Motion Sensor",
    comp_pir_desc: "Detects human movement by sensing changes in infrared radiation levels.",
    comp_ldr_title: "LDR (Photoresistor)",
    comp_ldr_desc: "Light-dependent resistor used to measure ambient light intensity.",
    comp_dht22_title: "DHT22 Temp/Humidity",
    comp_dht22_desc: "High-accuracy digital sensor for environmental monitoring.",
    comp_soil_moisture_title: "Soil Moisture Sensor",
    comp_soil_moisture_desc: "Measures the water content in soil via electrical resistance changes.",
    comp_pressure_title: "Pressure & Altitude",
    comp_pressure_desc: "Measures atmospheric pressure to calculate altitude and predict weather.",
    comp_voltage_title: "Voltage Sensor",
    comp_voltage_desc: "Detects and measures voltage levels, useful for monitoring battery health in robots.",
    comp_humidity_title: "Relative Humidity",
    comp_humidity_desc: "Sensors like DHT11 used for humidity and temperature data logs.",
    comp_gas_title: "Gas Sensor (MQ-5)",
    comp_gas_desc: "Detects LPG, natural gas, and coal gas. Used in safety systems.",
    comp_flame_title: "Flame Sensor",
    comp_flame_desc: "Detects fire or infrared light sources with wavelengths from 760nm to 1100nm.",
    comp_hall_title: "Hall Effect Sensor",
    comp_hall_desc: "Detects magnetic fields. Used for measuring RPM or non-contact switching.",
    comp_vibration_title: "Vibration Sensor",
    comp_vibration_desc: "Detects impacts or vibrations using a sensitive internal spring switch.",
    comp_sound_title: "Sound Sensor",
    comp_sound_desc: "Microphone-based sensor that detects ambient noise levels or specific voices.",
    
    comp_dc_motor_title: "DC Motor",
    comp_dc_motor_desc: "Simple rotary actuator that converts DC energy into mechanical rotation.",
    comp_servo_title: "Servo Motor (SG90)",
    comp_servo_desc: "Small rotary actuator for precise angle control (0-180°). Perfect for robotic arms.",
    comp_bldc_title: "BLDC Motor",
    comp_bldc_desc: "Brushless motor providing high efficiency and RPM for drones and fast robots.",
    comp_stepper_title: "Stepper Motor",
    comp_stepper_desc: "Moves in discrete steps for maximum precision in positioning (CNC, 3D printers).",
    comp_linear_actuator_title: "Linear Actuator",
    comp_linear_actuator_desc: "Converts rotational motion into linear thrust for pushing/pulling mechanisms.",
    comp_vibration_motor_title: "Vibration Motor",
    comp_vibration_motor_desc: "Creates haptic feedback or vibration alerts in wearable devices.",

    comp_arduino_uno_use: "Basic robotics, automated systems, educational prototyping",
    comp_arduino_mega_use: "Complex 3D printers, CNC machines, multi-sensor robots",
    comp_l298n_use: "Driving robot wheels, small conveyor belts, automated curtains",
    comp_rpi4_use: "Computer vision, edge AI, smart home hubs, web servers",
    comp_stm32_use: "Flight controllers (drones), fast data acquisition, industrial control",
    comp_hc05_use: "Wireless RC cars, smartphone integration, smart home networks",
    comp_hcsr04_use: "Obstacle avoidance, water level measurement, presence detection",
    comp_ir_sensor_use: "Line following robots, non-contact switches, proximity alarms",
    comp_pir_use: "Burglar alarms, automated lighting, wildlife cameras",
    comp_ldr_use: "Streetlight automation, solar trackers, laser tripwires",
    comp_dht22_use: "Weather stations, greenhouse automation, HVAC control",
    comp_soil_use: "Smart irrigation, plant care monitors, agricultural IoT",
    comp_pressure_use: "Altimeters in drones, weather forecasting, spirometers",
    comp_voltage_use: "Battery monitoring, solar panel efficiency testing, power management",
    comp_humidity_use: "Climate control, museum preservation, smart terrariums",
    comp_gas_use: "Industrial safety monitors, smart kitchen alarms, air quality meters",
    comp_flame_use: "Firefighting robots, industrial furnace monitors, safety alarms",
    comp_hall_use: "Motor RPM counters, door open/close sensors, 3D printer endstops",
    comp_vibration_use: "Earthquake detectors, washing machine load balancers, anti-theft alarms",
    comp_sound_use: "Clap switches, noise level monitors, voice-activated relays",
    comp_dc_motor_use: "Wheeled robots, cooling fans, water pumps",
    comp_servo_motor_use: "Robotic arms, steering systems, camera gimbals",
    comp_bldc_use: "Quadcopters, electric skateboards, hard drives",
    comp_stepper_use: "3D printers, CNC routers, precision camera sliders",
    comp_linear_use: "Standing desks, automated hatches, hospital beds",
    comp_vibe_motor_use: "Mobile phone feedback, gaming controllers, wearable alerts",

    // Projects
    proj_line_title: "Line-Following Robot",
    proj_line_desc: "A differential-drive robot using IR sensors and PID control to follow a black line.",
    proj_line_steps: "1. Mount motors to chassis\n2. Attach IR sensors to front\n3. Connect L298N driver\n4. Write PID loop",
    proj_weather_title: "IoT Weather Station",
    proj_weather_desc: "ESP32-based station with DHT22 streaming data to a web dashboard via MQTT.",
    proj_weather_steps: "1. Connect DHT22 to ESP32\n2. Connect to WiFi\n3. Setup MQTT Broker\n4. Create Dashboard",
    proj_arm_title: "3-DOF Robotic Arm",
    proj_arm_desc: "Desktop robotic arm with 3 servo joints controlled by an Arduino and a joystick module.",
    proj_arm_steps: "1. Print 3D parts\n2. Assemble servos\n3. Wire joysticks to Arduino analog pins\n4. Map values to servo angles",
    proj_obstacle_title: "Obstacle Avoidance Robot",
    proj_obstacle_desc: "Smart wheeled robot that uses ultrasonic sonar to detect obstacles and navigate automatically.",
    proj_obstacle_steps: "1. Mount HC-SR04 to servo\n2. Integrate L298N driver\n3. Implement distance checks\n4. Logic: If < 15cm, turn.",
    proj_irrigation_title: "Smart Irrigation System",
    proj_irrigation_desc: "Automated plant watering system using soil moisture sensors and a relay-controlled water pump.",
    proj_irrigation_steps: "1. Stick moisture sensor in soil\n2. Wire relay to water pump\n3. Read moisture level\n4. Trigger pump when dry",

    // New Projects
    proj_lighting_title: "Smart Street Lighting",
    proj_lighting_desc: "An energy-saving system that automatically toggles street lights based on ambient light levels.",
    proj_lighting_steps: "1. Connect LDR sensor\n2. Integrate Relay module\n3. Code threshold logic\n4. Test with AC/DC lamp",
    proj_solar_title: "Dual-Axis Solar Tracker",
    proj_solar_tracker_desc: "A motorized solar panel mount that rotates to follow the sun's trajectory for maximum energy efficiency.",
    proj_solar_steps: "1. Mount 4 LDRs in a cross\n2. Use 2 servos for X/Y axes\n3. Logic: Compare LDR values\n4. Rotate servos to balance light",
    proj_sanitizer_title: "Touchless Hand Sanitizer",
    proj_sanitizer_desc: "A COVID-19 safety build that dispenses sanitizer automatically using IR proximity detection.",
    proj_sanitizer_steps: "1. Setup IR proximity sensor\n2. Connect mini water pump\n3. Use transistor or relay\n4. Trigger pump for 1 second",
    proj_voice_title: "Voice Controlled Home",
    proj_voice_desc: "Control appliances using Bluetooth and voice commands via a custom mobile app.",
    proj_voice_steps: "1. Pair HC-05 with phone\n2. Setup Relay board\n3. Use Serial.readString()\n4. Trigger relays on keyword",
    proj_scale_title: "Precision Digital Scale",
    proj_scale_desc: "High-accuracy weighing system using a load cell and HX711 amplifier module.",
    proj_scale_steps: "1. Calibrate load cell\n2. Connect to HX711\n3. Display on 16x2 LCD\n4. Tara function via button",

    // Quiz questions
    quiz_title: "Advanced Mechatronics Quiz",
    q1: "Which protocol is primarily used by the MPU6050, and what is its standard default 7-bit address?",
    q1a: "SPI, 0x50", q1b: "I2C, 0x68", q1c: "UART, 9600", q1d: "I2C, 0x77",
    q2: "What is the primary function of the 'Integral' term in a PID controller?",
    q2a: "To eliminate steady-state error by accumulating past errors", q2b: "To predict future errors based on the rate of change", q2c: "To provide an immediate proportional response", q2d: "To limit the maximum output voltage",
    q3: "If a stepper motor has a step angle of 1.8°, how many steps are required for one full revolution?",
    q3a: "100", q3b: "180", q3c: "200", q3d: "360",
    q4: "In an H-Bridge motor driver like the L298N, what sequence of signals is required to brake the motor rapidly?",
    q4a: "IN1 HIGH, IN2 LOW", q4b: "IN1 LOW, IN2 LOW", q4c: "IN1 HIGH, IN2 HIGH", q4d: "Disconnect power",
    q5: "Which of the following is true regarding a standard servo motor controlled via PWM at 50Hz?",
    q5a: "1ms pulse = 0°, 2ms pulse = 180°", q5b: "Duty cycle strictly controls RPM", q5c: "0V = 0°, 5V = 180°", q5d: "Requires a 40kHz ultrasonic signal",

    // Forum mock
    forum_t1: "How to tune a PID controller for line followers?",
    forum_t1_meta: "24 replies · 1 hour ago",
    forum_t2: "Troubleshooting I2C pull-up resistors",
    forum_t2_meta: "12 replies · 3 hours ago",
    forum_t3: "Raspberry Pi vs ESP32 for computer vision?",
    forum_t3_meta: "45 replies · 1 day ago",
  },
  ar: {
    // Nav
    nav_logo: "ترونكس هب",
    nav_catalog: "الكتالوج",
    nav_projects: "المشاريع",
    nav_quiz: "الاختبار",
    nav_forum: "المنتدى",
    nav_dashboard: "لوحة التحكم",
    nav_dashboard_title: "الشبكة والنوادي",
    nav_dashboard_desc: "استكشف المنصات المتخصصة في شبكة الميكاترونكس.",
    card_mechmanager_title: "ميك مانجر",
    card_mechmanager_desc: "الوصول إلى لوحة الإدارة الرئيسية لنادي الميكاترونكس.",
    btn_open_dashboard: "فتح لوحة التحكم",
    card_mechatronix_title: "ميكاترونيكس",
    card_mechatronix_desc: "قم بزيارة مركز ميكاترونكس لمعرفة فعاليات النادي وتفاصيله التنظيمية.",
    btn_visit_mechatronix: "زيارة ميكاترونيكس",

    // Hero
    hero_badge: "هندسة الميكاترونكس",
    hero_title: "تعلّم. ابنِ. أتمِت.",
    hero_subtitle: "منصة تقنية تطبيقية لفهم الحساسات والمحركات والمتحكمات الدقيقة وأنظمة الروبوتات.",
    hero_cta_primary: "استكشف المكونات",
    hero_cta_secondary: "اختبر معلوماتك",

    // Stats
    stat_components: "مكوّن",
    stat_projects: "مشاريع",
    stat_questions: "سؤال",
    stat_members: "عضو",

    // Catalog
    section_catalog_tag: "مكتبة العتاد",
    section_catalog_title: "مكونات الميكاترونكس",
    section_catalog_subtitle: "أتقن الحساسات والمُشغّلات والمتحكمات المستخدمة في الروبوتات والأتمتة الحديثة.",
    filter_all: "الكل",
    filter_sensors: "حساسات",
    filter_actuators: "محركات",
    filter_controllers: "متحكمات",
    filter_recent: "الأحدث",
    filter_top: "الأفضل",
    filter_unanswered: "بانتظار رد",
    view_details: "عرض التفاصيل",
    category_sensor: "حساس",
    category_actuator: "محرك",
    category_controller: "متحكم",

    // Projects
    section_projects_tag: "مشاريع عملية",
    section_projects_title: "مشاريع الطلاب",
    section_projects_subtitle: "مشاريع ميكاترونكس واقعية تجمع بين الحساسات والمحركات والبرمجة.",
    proj_price: "التكلفة التقديرية",
    proj_requirements: "المتطلبات",
    proj_video: "شاهد الشرح",
    proj_steps: "خطوات التنفيذ",

    // Quiz
    section_quiz_tag: "اختبر نفسك",
    section_quiz_title: "اختبار الميكاترونكس المتقدم",
    section_quiz_subtitle: "اختبر فهمك التقني لبروتوكولات الاتصال ونظم التحكم.",
    quiz_next: "التالي",
    quiz_check: "تحقق من الإجابة",
    quiz_finish: "عرض النتائج",
    quiz_retry: "حاول مرة أخرى",
    quiz_score_prefix: "حصلت على",
    quiz_score_suffix: "إجابات صحيحة!",
    quiz_great: "عمل ممتاز أيها المهندس! 🎉",
    quiz_good: "أحسنت! واصل التعلم.",
    quiz_try_again: "واصل التدريب — ستصل!",

    // Community
    section_community_tag: "المجتمع والأدوات",
    section_community_title: "تواصل وتعلّم",
    card_assistant_title: "ترونكس بوت",
    card_assistant_desc: "اطرح أسئلة تقنية عن مخططات التوصيل وبروتوكولات الاتصال ومنطق أنظمة التحكم.",
    btn_open_assistant: "افتح ترونكس بوت",
    card_forum_title: "منتدى المجتمع",
    card_forum_desc: "شارك مشاريعك وناقش تصاميم الدوائر والأكواد مع زملائك المهندسين.",
    btn_visit_forum: "زر المنتدى",
    forum_new_topic: "موضوع جديد",

    // Assistant
    assistant_modal_title: "ترونكس بوت",
    assistant_welcome: "مرحباً أيها المهندس! أنا ترونكس بوت. اسألني أي شيء عن الحساسات أو المحركات أو التوصيل.",
    assistant_placeholder: "اسأل عن التوصيل أو البرمجة...",

    // Footer
    footer_desc: "منصة تعليمية مفتوحة لطلاب هندسة الميكاترونكس والروبوتات.",
    footer_quick_links: "روابط سريعة",
    footer_resources: "مراجع",
    footer_tagline: "صُنعت للمهندسين، بأيدي مهندسين.",

    // Components Titles & Descs
    comp_arduino_uno_title: "أردوينو أونو R3",
    comp_arduino_uno_desc: "المعيار الذهبي للنماذج الأولية. يعتمد على ATmega328P مع 14 مدخلاً رقمياً و6 مداخل تناظرية.",
    comp_arduino_mega_title: "أردوينو ميجا 2560",
    comp_arduino_mega_desc: "متحكم موسع بـ 54 طرفاً رقمياً و16 مدخلاً تناظرياً. مثالي للروبوتات المعقدة.",
    comp_l298n_title: "درايفر المحركات L298N",
    comp_l298n_desc: "جسر H مزدوج عالي القدرة قادر على التحكم في محركي DC أو محرك خطوي واحد.",
    comp_rpi4_title: "راسبيري باي 4",
    comp_rpi4_desc: "حاسوب لوحي قوي للمهام الثقيلة مثل الرؤية الحاسوبية ومعالجة الذكاء الاصطناعي.",
    comp_stm32_title: "STM32F103 (الحبة الزرقاء)",
    comp_stm32_desc: "معالج ARM Cortex-M3 بـ 32 بت. أداء عالي وتحكم فوري بتكلفة منخفضة.",
    comp_hc05_title: "بلوتوث HC-05",
    comp_hc05_desc: "وحدة اتصال تسلسلي لاسلكية تسمح بالتحكم في الروبوتات عبر الهاتف الذكي.",
    
    comp_hcsr04_title: "الأشعة فوق الصوتية HC-SR04",
    comp_hcsr04_desc: "يقيس المسافة عن طريق إرسال موجات صوتية. المدى: 2 سم إلى 400 سم.",
    comp_ir_title: "حساس الأشعة تحت الحمراء",
    comp_ir_desc: "يكشف الأجسام عبر انعكاس الأشعة. أساسي لتتبع الخطوط وكشف الحواف.",
    comp_pir_title: "حساس الحركة PIR",
    comp_pir_desc: "يكشف حركة البشر عن طريق استشعار التغيرات في مستويات الأشعة تحت الحمراء.",
    comp_ldr_title: "المقاومة الضوئية LDR",
    comp_ldr_desc: "مقاومة تعتمد على الضوء تُستخدم لقياس شدة الإضاءة المحيطة.",
    comp_dht22_title: "حساس الحرارة والرطوبة DHT22",
    comp_dht22_desc: "حساس رقمي عالي الدقة للمراقبة البيئية.",
    comp_soil_moisture_title: "حساس رطوبة التربة",
    comp_soil_moisture_desc: "يقيس محتوى الماء في التربة عبر تغيرات المقاومة الكهربائية.",
    comp_pressure_title: "حساس الضغط والارتفاع",
    comp_pressure_desc: "يقيس الضغط الجوي لحساب الارتفاع والتنبؤ بالطقس.",
    comp_voltage_title: "حساس الجهد",
    comp_voltage_desc: "يكشف ويقيس مستويات الجهد، مفيد لمراقبة حالة البطارية في الروبوتات.",
    comp_humidity_title: "الرطوبة النسبية",
    comp_humidity_desc: "حساسات مثل DHT11 تُستخدم لسجلات بيانات الرطوبة ودرجة الحرارة.",
    comp_gas_title: "حساس الغاز (MQ-5)",
    comp_gas_desc: "يكشف غاز LPG والغاز الطبيعي وغاز الفحم. يُستخدم في أنظمة السلامة.",
    comp_flame_title: "حساس اللهب",
    comp_flame_desc: "يكشف الحريق أو مصادر الأشعة تحت الحمراء بطول موجي من 760 نانومتر إلى 1100 نانومتر.",
    comp_hall_title: "حساس تأثير هول",
    comp_hall_desc: "يكشف المجالات المغناطيسية. يُستخدم لقياس عدد الدورات (RPM) أو التبديل غير التلامسي.",
    comp_vibration_title: "حساس الاهتزاز",
    comp_vibration_desc: "يكشف الصدمات أو الاهتزازات باستخدام مفتاح زنبركي داخلي حساس.",
    comp_sound_title: "حساس الصوت",
    comp_sound_desc: "حساس يعتمد على الميكروفون يكشف مستويات الضوضاء المحيطة أو أصوات محددة.",
    
    comp_dc_motor_title: "محرك تيار مستمر",
    comp_dc_motor_desc: "مشغل دوراني بسيط يحول الطاقة المستمرة إلى دوران ميكانيكي.",
    comp_servo_title: "محرك سيرفو (SG90)",
    comp_servo_desc: "مشغل دوراني صغير للتحكم الدقيق بالزوايا (0-180 درجة). مثالي للأذرع الروبوتية.",
    comp_bldc_title: "محرك بدون فحمات (BLDC)",
    comp_bldc_desc: "محرك عالي الكفاءة والسرعة للطائرات المسيرة والروبوتات السريعة.",
    comp_stepper_title: "محرك خطوي",
    comp_stepper_desc: "يتحرك في خطوات منفصلة لأقصى قدر من الدقة في تحديد الموقع (CNC، طابعات 3D).",
    comp_linear_actuator_title: "مشغل خطي",
    comp_linear_actuator_desc: "يحول الحركة الدورانية إلى دفع خطي لآليات الدفع والسحب.",
    comp_vibration_motor_title: "محرك اهتزاز",
    comp_vibration_motor_desc: "يخلق ردود فعل لمسية أو تنبيهات اهتزازية في الأجهزة القابلة للارتداء.",

    comp_arduino_uno_use: "الروبوتات الأساسية، الأنظمة الآلية، النماذج التعليمية",
    comp_arduino_mega_use: "طابعات ثلاثية الأبعاد معقدة، آلات CNC، روبوتات متعددة الحساسات",
    comp_l298n_use: "قيادة عجلات الروبوتات، أحزمة النقل الصغيرة، الستائر الآلية",
    comp_rpi4_use: "الرؤية الحاسوبية، الذكاء الاصطناعي الطرفي، مراكز المنازل الذكية",
    comp_stm32_use: "متحكمات الطيران (الدرون)، تجميع البيانات السريع، التحكم الصناعي",
    comp_hc05_use: "سيارات التحكم اللاسلكي، التكامل مع الهواتف الذكية، شبكات المنازل الذكية",
    comp_hcsr04_use: "تجنب العوائق، قياس مستوى الماء، كشف الحضور",
    comp_ir_sensor_use: "روبوتات تتبع الخط، مفاتيح غير تلامسية، إنذارات القرب",
    comp_pir_use: "إنذارات السرقة، الإضاءة الآلية، كاميرات الحياة البرية",
    comp_ldr_use: "أتمتة إنارة الشوارع، متتبعات الشمس، أسلاك الليزر الشائكة",
    comp_dht22_use: "محطات الطقس، أتمتة البيوت البلاستيكية، تحكم HVAC",
    comp_soil_use: "الري الذكي، أجهزة مراقبة العناية بالنباتات، إنترنت الأشياء الزراعي",
    comp_pressure_use: "مقاييس الارتفاع في الدرون، التنبؤ بالطقس، مقاييس التنفس",
    comp_voltage_use: "مراقبة البطاريات، اختبار كفاءة الألواح الشمسية، إدارة الطاقة",
    comp_humidity_use: "التحكم في المناخ، حفظ المتاحف، المزارع الزجاجية الذكية",
    comp_gas_use: "شاشات السلامة الصناعية، إنذارات المطابخ الذكية، مقاييس جودة الهواء",
    comp_flame_use: "روبوتات مكافحة الحرائق، مراقبة الأفران الصناعية، إنذارات السلامة",
    comp_hall_use: "عدادات سرعة دوران المحركات، حساسات فتح/إغلاق الأبواب، مصدات طابعات ثلاثية الأبعاد",
    comp_vibration_use: "كاشفات الزلازل، موازنات الغسالات، إنذارات مكافحة السرقة",
    comp_sound_use: "مفاتيح التصفيق، مراقبة مستويات الضوضاء، المرحلات المنشطة بالصوت",
    comp_dc_motor_use: "الروبوتات ذات العجلات، مراوح التبريد، مضخات المياه",
    comp_servo_motor_use: "الأذرع الروبوتية، أنظمة التوجيه، حوامل الكاميرات",
    comp_bldc_use: "الدرون، ألواح التزلج الكهربائية، الأقراص الصلبة",
    comp_stepper_use: "طابعات ثلاثية الأبعاد، ماكينات CNC، مزلقات الكاميرات الدقيقة",
    comp_linear_use: "المكاتب القابلة للارتفاع، البوابات الآلية، أسرة المستشفيات",
    comp_vibe_motor_use: "ردود الفعل في الهواتف المحمولة، وحدات تحكم الألعاب، التنبيهات في الأجهزة القابلة للارتداء",

    // Projects
    proj_line_title: "روبوت تتبع الخط",
    proj_line_desc: "روبوت تفاضلي الحركة يستخدم حساسات IR وتحكم PID لتتبع خط أسود.",
    proj_line_steps: "1. تركيب المحركات بالشاسيه\n2. تثبيت حساسات IR بالأمام\n3. توصيل الموتور درايفر L298N\n4. كتابة كود الـ PID",
    proj_weather_title: "محطة أرصاد إنترنت الأشياء",
    proj_weather_desc: "محطة ESP32 تبث البيانات عبر MQTT إلى لوحة تحكم ويب.",
    proj_weather_steps: "1. توصيل DHT22 لـ ESP32\n2. إنشاء اتصال واي فاي\n3. إعداد وسيط MQTT\n4. برمجة لوحة التحكم",
    proj_arm_title: "ذراع روبوتية 3-DOF",
    proj_arm_desc: "ذراع مكتبية بثلاث مفاصل سيرفو يتحكم بها أردوينو ووحدة جويستيك.",
    proj_arm_steps: "1. طباعة القطع ثلاثية الأبعاد\n2. تجميع السيرفوهات\n3. توصيل الجويستيك للأردوينو\n4. برمجة زوايا المحركات",
    proj_obstacle_title: "روبوت تجنب العقبات",
    proj_obstacle_desc: "روبوت ذكي يستخدم السونار للكشف عن العوائق والتنقل تلقائيًا.",
    proj_obstacle_steps: "1. تثبيت الحساس على سيرفو\n2. توصيل الدرايفر L298N\n3. كتابة كود قياس المسافة\n4. منطق: إذا المسافة < 15 سم، انعطف.",
    proj_irrigation_title: "نظام الري الذكي",
    proj_irrigation_desc: "نظام آلي لري النباتات باستخدام حساس رطوبة التربة ومضخة مياه يتحكم بها ريلاي.",
    proj_irrigation_steps: "1. وضع الحساس في التربة\n2. توصيل الريلاي بالمضخة\n3. قراءة مستوى الرطوبة\n4. تشغيل المضخة عند الجفاف",

    // New Projects
    proj_lighting_title: "إضاءة الشوارع الذكية",
    proj_lighting_desc: "نظام موفر للطاقة يقوم بتشغيل وإطفاء إنارة الشوارع تلقائياً بناءً على مستوى الإضاءة المحيطة.",
    proj_lighting_steps: "1. توصيل حساس LDR\n2. دمج وحدة الريلاي\n3. برمجة منطق العتبة\n4. التجربة مع مصباح AC/DC",
    proj_solar_title: "متتبع شمسي ثنائي المحاور",
    proj_solar_tracker_desc: "قاعدة لوح شمسي بمحركات تدور لتتبع مسار الشمس للحصول على أقصى كفاءة طاقة.",
    proj_solar_steps: "1. تثبيت 4 حساسات LDR\n2. استخدام محركي سيرفو للمحاور\n3. منطق: مقارنة قيم الحساسات\n4. تدوير السيرفوهات لموازنة الضوء",
    proj_sanitizer_title: "معقم يدين بدون تلامس",
    proj_sanitizer_desc: "جهاز سلامة يوزع المعقم تلقائياً باستخدام الكشف عن القرب بالأشعة تحت الحمراء.",
    proj_sanitizer_steps: "1. إعداد حساس القرب IR\n2. توصيل مضخة مياه صغيرة\n3. استخدام ترانزستور أو ريلاي\n4. تشغيل المضخة لمدة ثانية واحدة",
    proj_voice_title: "التحكم المنزلي الصوتي",
    proj_voice_desc: "التحكم في الأجهزة المنزلية باستخدام البلوتوث والأوامر الصوتية عبر تطبيق هاتف.",
    proj_voice_steps: "1. اقتران HC-05 بالهاتف\n2. إعداد لوحة الريلاي\n3. استخدام Serial.readString\n4. تفعيل الريلاي عند كلمة مفتاحية",
    proj_scale_title: "ميزان رقمي دقيق",
    proj_scale_desc: "نظام وزن عالي الدقة باستخدام خلية تحميل (Load Cell) وموحد HX711.",
    proj_scale_steps: "1. معايرة خلية التحميل\n2. التوصيل بمحول HX711\n3. العرض على شاشة 16x2 LCD\n4. وظيفة التصفير عبر زر",

    // Quiz
    quiz_title: "اختبار الميكاترونكس المتقدم",
    q1: "أي بروتوكول اتصال يُستخدم بشكل أساسي في MPU6050، وما هو عنوانه الافتراضي؟",
    q1a: "SPI, 0x50", q1b: "I2C, 0x68", q1c: "UART, 9600", q1d: "I2C, 0x77",
    q2: "ما هي الوظيفة الأساسية للحد 'التكاملي' (Integral) في متحكم PID؟",
    q2a: "إزالة خطأ الحالة المستقرة بتراكم الأخطاء السابقة", q2b: "التنبؤ بالأخطاء المستقبلية معدل التغير", q2c: "توفير استجابة تناسبية فورية", q2d: "تحديد أقصى جهد للخرج",
    q3: "إذا كان لدى محرك خطوي زاوية خطوة 1.8°، كم خطوة يستغرق لدورة كاملة؟",
    q3a: "100", q3b: "180", q3c: "200", q3d: "360",
    q4: "في درايفر جسر H كـ L298N، ما تتابع الإشارات المطلوب لفرملة المحرك بسرعة؟",
    q4a: "IN1 HIGH, IN2 LOW", q4b: "IN1 LOW, IN2 LOW", q4c: "IN1 HIGH, IN2 HIGH", q4d: "فصل الطاقة",
    q5: "أي من التالي صحيح بخصوص التحكم النمطي لمحرك سيرفو قياسي بنبضات PWM عند 50Hz؟",
    q5a: "نبضة 1ms بـ 0° ونبضة 2ms بـ 180°", q5b: "نسبة التشغيل تتحكم بصرامة بسرعته", q5c: "0V = 0°, 5V = 180°", q5d: "يتطلب إشارة 40kHz",

    // Forum
    forum_t1: "كيفية معايرة متحكم PID لروبوت تتبع الخط؟",
    forum_t1_meta: "24 رد · منذ ساعة",
    forum_t2: "مشاكل مقاومات السحب (Pull-up) في I2C",
    forum_t2_meta: "12 رد · منذ 3 ساعات",
    forum_t3: "مقارنة بين راسبيري باي و ESP32 لمعالجة الصور",
    forum_t3_meta: "45 رد · منذ يوم",
  }
};

let currentLang = localStorage.getItem('mechhub_lang') || 'en';

export function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'ar') return;
  currentLang = lang;
  localStorage.setItem('mechhub_lang', lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    const span = toggleBtn.querySelector('span');
    if (span) span.textContent = lang === 'en' ? 'عربي' : 'English';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const prop = el.getAttribute('data-i18n-prop');
    if (dict[lang][key]) {
      if (prop) {
        el.setAttribute(prop, dict[lang][key]);
      } else {
        el.textContent = dict[lang][key];
      }
    }
  });

  return lang;
}

export function t(key) {
  return dict[currentLang][key] || dict['en'][key] || key;
}

export function getCurrentLang() {
  return currentLang;
}
