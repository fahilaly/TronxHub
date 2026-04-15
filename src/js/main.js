import '../css/style.css';
import { setLanguage, getCurrentLang, t } from './i18n.js';

// ============================================
//  DATA - Comprehensive Library (26 Items)
// ============================================
const components = [
  // Controllers & Modules
  { id:'arduino_uno', cat:'controller', titleKey:'comp_arduino_uno_title', descKey:'comp_arduino_uno_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/vtmUikjhoovqpvva.png',
    voltage:'5V', protocol:'UART/SPI/I2C', video:null },
  { id:'arduino_mega', cat:'controller', titleKey:'comp_arduino_mega_title', descKey:'comp_arduino_mega_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/XvGreBARWAzISbYU.png',
    voltage:'5V', protocol:'UART/SPI/I2C', video:null },
  { id:'l298n', cat:'controller', titleKey:'comp_l298n_title', descKey:'comp_l298n_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/nWgsNBSiGjkSrqgt.png',
    voltage:'5-35V', protocol:'PWM / H-Bridge', video:null },
  { id:'rpi4', cat:'controller', titleKey:'comp_rpi4_title', descKey:'comp_rpi4_desc',
    img:'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=800',
    voltage:'5V', protocol:'Linux/GPIO', video:null },
  { id:'stm32', cat:'controller', titleKey:'comp_stm32_title', descKey:'comp_stm32_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/suJLZIwKOMLUmnTN.png',
    voltage:'3.3V', protocol:'SWD/UART/I2C', video:null },
  { id:'hc05', cat:'controller', titleKey:'comp_hc05_title', descKey:'comp_hc05_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/CkGLzzIMbiAoLglK.png',
    voltage:'3.6-6V', protocol:'UART Bluetooth', video:null },

  // Sensors
  { id:'hcsr04', cat:'sensor', titleKey:'comp_hcsr04_title', descKey:'comp_hcsr04_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/oaXXdQcLABvTgLwY.png',
    voltage:'5V', protocol:'Trigger/Echo', video:null },
  { id:'ir_sensor', cat:'sensor', titleKey:'comp_ir_title', descKey:'comp_ir_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/tGQkzxpzYTASZdqY.png',
    voltage:'3.3-5V', protocol:'Digital Output', video:null },
  { id:'pir', cat:'sensor', titleKey:'comp_pir_title', descKey:'comp_pir_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/yjybUyAPiiMyMXbU.png',
    voltage:'5V', protocol:'Digital Output', video:null },
  { id:'ldr', cat:'sensor', titleKey:'comp_ldr_title', descKey:'comp_ldr_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/JQUWAzEEgPyTxSzT.png',
    voltage:'Analog', protocol:'ADC', video:null },
  { id:'dht22', cat:'sensor', titleKey:'comp_dht22_title', descKey:'comp_dht22_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/DxdxWxxOsggeFBLy.png',
    voltage:'3.3-5V', protocol:'Single-Wire Digital', video:null },
  { id:'soil', cat:'sensor', titleKey:'comp_soil_moisture_title', descKey:'comp_soil_moisture_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/AIlfzAprRRvTzXvQ.png',
    voltage:'3.3-5V', protocol:'Analog/Digital', video:null },
  { id:'pressure', cat:'sensor', titleKey:'comp_pressure_title', descKey:'comp_pressure_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/UCTlMThmpGBVJArR.png',
    voltage:'3.3V', protocol:'I2C', video:null },
  { id:'voltage', cat:'sensor', titleKey:'comp_voltage_title', descKey:'comp_voltage_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/vaOlUEjhItwMaCqv.png',
    voltage:'0-25V Range', protocol:'Analog (ADC)', video:null },
  { id:'humidity', cat:'sensor', titleKey:'comp_humidity_title', descKey:'comp_humidity_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/AHdYFiMzBaEtIztT.jpg',
    voltage:'3.3-5V', protocol:'Single-Wire', video:null },
  { id:'gas', cat:'sensor', titleKey:'comp_gas_title', descKey:'comp_gas_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/ZnCQMINDfYFqqkGg.jpg',
    voltage:'5V', protocol:'Analog Output', video:null },
  { id:'flame', cat:'sensor', titleKey:'comp_flame_title', descKey:'comp_flame_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/LNokikodeRrfIBOx.jpg',
    voltage:'3.3-5V', protocol:'Digital/Analog', video:null },
  { id:'hall', cat:'sensor', titleKey:'comp_hall_title', descKey:'comp_hall_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/kiAKhleZtoDuDvte.jpg',
    voltage:'5V', protocol:'Digital/Analog', video:null },
  { id:'vibration', cat:'sensor', titleKey:'comp_vibration_title', descKey:'comp_vibration_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/CQopgMCcoAxyQGts.png',
    voltage:'5V', protocol:'Digital Pulse', video:null },
  { id:'sound', cat:'sensor', titleKey:'comp_sound_title', descKey:'comp_sound_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/AcKvpVvcJfojGJgI.jpg',
    voltage:'5V', protocol:'Analog/Digital', video:null },

  // Motors & Actuators
  { id:'dc_motor', cat:'actuator', titleKey:'comp_dc_motor_title', descKey:'comp_dc_motor_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/cKfUmNkcftqdSLpi.png',
    voltage:'3-12V', protocol:'PWM Control', video:null },
  { id:'servo_motor', cat:'actuator', titleKey:'comp_servo_title', descKey:'comp_servo_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/EYpPcIcswQzvVTHJ.png',
    voltage:'5V', protocol:'PWM (50Hz)', video:null },
  { id:'bldc', cat:'actuator', titleKey:'comp_bldc_title', descKey:'comp_bldc_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/SRBaEUaBIAhJAhgM.png',
    voltage:'11.1-22V', protocol:'ESC Pulse', video:null },
  { id:'stepper', cat:'actuator', titleKey:'comp_stepper_title', descKey:'comp_stepper_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/gRRmZJXzIAQwppZI.jpg',
    voltage:'12V', protocol:'Bipolar/Unipolar', video:null },
  { id:'linear', cat:'actuator', titleKey:'comp_linear_actuator_title', descKey:'comp_linear_actuator_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/SGhOcvbeXmKItiRC.png',
    voltage:'12V', protocol:'DC Controlled', video:null },
  { id:'vibe_motor', cat:'actuator', titleKey:'comp_vibration_motor_title', descKey:'comp_vibration_motor_desc',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/aNjjOZvLQBLfhTDX.png',
    voltage:'3V', protocol:'Digital/Analog', video:null },
];

const projects = [
  { titleKey:'proj_line_title', descKey:'proj_line_desc', stepsKey: 'proj_line_steps', 
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/UwcJJFWXTgMirSUB.png',
    tags:['Arduino','IR Sensor','PID','L298N'], price:'$45', video:'https://www.youtube.com/watch?v=S0y1C-Yid-0', requirements:'Arduino Uno, L298N, 2x DC Motors, 2x IR Sensors, Chassis, Battery' },
  { titleKey:'proj_obstacle_title', descKey:'proj_obstacle_desc', stepsKey: 'proj_obstacle_steps',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/WkRQZKTtwJWdpBIo.png',
    tags:['Arduino','HC-SR04','Servo','H-Bridge'], price:'$50', video:'https://www.youtube.com/watch?v=qM-V_oB-x_E', requirements:'Arduino Uno, HC-SR04, Servo, L298N, 2x DC Motors' },
  { titleKey:'proj_irrigation_title', descKey:'proj_irrigation_desc', stepsKey: 'proj_irrigation_steps',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/UFvdqRaxikWSCcEf.png',
    tags:['Arduino','Relay','Moisture Sensor'], price:'$30', video:'https://www.youtube.com/watch?v=Xh0lDndS1iU', requirements:'Arduino, Relay Module, Soil Moisture Sensor, DC Water Pump' },
  { titleKey:'proj_weather_title', descKey:'proj_weather_desc', stepsKey: 'proj_weather_steps',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/UASOgzzcsJBECqeP.png',
    tags:['ESP32','DHT22','MQTT','Web'], price:'$25', video:'https://www.youtube.com/watch?v=4fW16HlB7o8', requirements:'ESP32, DHT22, Jumper Wires, Breadboard' },
  { titleKey:'proj_arm_title', descKey:'proj_arm_desc', stepsKey: 'proj_arm_steps',
    img:'https://files.manuscdn.com/user_upload_by_module/session_file/310519663319989084/TkxszgCtwiuCVTjA.png',
    tags:['Arduino','Servo','Joystick','3D Print'], price:'$60', video:'https://www.youtube.com/watch?v=9_C8D9S1XU4', requirements:'Arduino Uno, 3x SG90 Servos, 2x Joysticks, 3D Printed Parts, External 5V Power' },
];

const quizQuestions = [
  { qKey:'q1', options:['q1a','q1b','q1c','q1d'], correct:1 },
  { qKey:'q2', options:['q2a','q2b','q2c','q2d'], correct:0 },
  { qKey:'q3', options:['q3a','q3b','q3c','q3d'], correct:2 },
  { qKey:'q4', options:['q4a','q4b','q4c','q4d'], correct:2 },
  { qKey:'q5', options:['q5a','q5b','q5c','q5d'], correct:0 },
];

const forumThreads = [
  { titleKey:'forum_t1', metaKey:'forum_t1_meta', icon:'ph-chart-line' },
  { titleKey:'forum_t2', metaKey:'forum_t2_meta', icon:'ph-gear' },
  { titleKey:'forum_t3', metaKey:'forum_t3_meta', icon:'ph-wifi-x' },
];

// Smart assistant responses keyed by detected topic
const assistantResponses = {
  en: {
    hcsr04: "The HC-SR04 works by sending a 40kHz ultrasonic pulse via the Trigger pin (10μs HIGH). The Echo pin then goes HIGH for the duration proportional to the distance. Calculate: distance = (echo_time × 0.034) / 2. Max range is ~400cm.",
    servo: "To control a servo, send a 50Hz PWM signal. The pulse width maps to angle:\n• 1ms → 0°\n• 1.5ms → 90°\n• 2ms → 180°\nUse Arduino's Servo.h library — attach to any PWM pin and call write(angle).",
    pwm: "PWM (Pulse Width Modulation) rapidly toggles a digital pin ON/OFF. The duty cycle (% ON time) controls the average voltage. Used for:\n• Motor speed control\n• Servo positioning\n• LED dimming\nArduino: analogWrite(pin, 0–255)",
    i2c: "I2C is a 2-wire protocol (SDA + SCL) allowing multiple devices on one bus. Each device has a unique 7-bit address. Arduino uses Wire.h:\n• Wire.begin()\n• Wire.beginTransmission(addr)\n• Wire.write(data)\n• Wire.endTransmission()",
    pid: "A PID controller continuously calculates an error = setpoint - measured_value:\n• P (Proportional): Reacts to current error\n• I (Integral): Corrects accumulated past error\n• D (Derivative): Predicts future error\nOutput = Kp·e + Ki·∫e + Kd·(de/dt)",
    default: "That's a great question! I am TronxBot, your technical assistant. I can provide detailed answers about mechatronics! Try asking about HC-SR04, servo motors, PWM, I2C, or PID control!"
  },
  ar: {
    hcsr04: "يعمل HC-SR04 بإرسال نبضة فوق صوتية 40kHz عبر طرف Trigger (10μs HIGH). ثم يرتفع طرف Echo لمدة تتناسب مع المسافة. الحساب: المسافة = (زمن_الصدى × 0.034) / 2. أقصى مدى ~400 سم.",
    servo: "للتحكم بالسيرفو، أرسل إشارة PWM بتردد 50Hz. عرض النبضة يحدد الزاوية:\n• 1ms → 0°\n• 1.5ms → 90°\n• 2ms → 180°\nاستخدم مكتبة Servo.h في أردوينو.",
    pwm: "PWM (تعديل عرض النبضة) يبدّل طرفاً رقمياً بسرعة بين ON/OFF. نسبة التشغيل تتحكم بمتوسط الجهد. يُستخدم في:\n• التحكم بسرعة المحركات\n• تحديد موقع السيرفو\n• تعتيم LED\nأردوينو: analogWrite(pin, 0-255)",
    i2c: "I2C بروتوكول بسلكين (SDA + SCL) يسمح بتوصيل أجهزة متعددة. كل جهاز له عنوان 7-بت فريد. في أردوينو استخدم Wire.h:\n• Wire.begin()\n• Wire.beginTransmission(addr)\n• Wire.write(data)\n• Wire.endTransmission()",
    pid: "متحكم PID يحسب الخطأ باستمرار = القيمة المطلوبة - القيمة المقاسة:\n• P (تناسبي): يتفاعل مع الخطأ الحالي\n• I (تكاملي): يصحح الخطأ المتراكم\n• D (تفاضلي): يتنبأ بالخطأ المستقبلي",
    default: "سؤال رائع! أنا ترونكس بوت، مساعدك التقني. يمكنني الإجابة عن HC-SR04 أو محركات السيرفو أو PWM أو I2C أو PID!"
  }
};

// ============================================
//  INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavbar();
  renderCatalog();
  renderProjects();
  renderQuiz();
  renderForum();
  initAssistant();
  initScrollReveal();
  initCountUp();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ============================================
//  THEME
// ============================================
let currentTheme;

function initTheme() {
  const saved = localStorage.getItem('mechhub_theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  currentTheme = saved || (systemDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(currentTheme);
      localStorage.setItem('mechhub_theme', currentTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.innerHTML = theme === 'dark' ? '<i class="ph ph-sun"></i>' : '<i class="ph ph-moon"></i>';
}

// ============================================
//  LANGUAGE
// ============================================
function initLanguage() {
  setLanguage(getCurrentLang());
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = getCurrentLang() === 'en' ? 'ar' : 'en';
      setLanguage(next);
      renderCatalog(currentFilter);
      renderProjects();
      renderQuiz();
      renderForum();
    });
  }
}

// ============================================
//  NAVBAR
// ============================================
function initNavbar() {
  const nav = document.getElementById('main-nav');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!nav || !menuBtn || !drawer) return;

  // Scroll shadow
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Mobile toggle
  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    menuBtn.innerHTML = isOpen ? '<i class="ph ph-x"></i>' : '<i class="ph ph-list"></i>';
  });

  // Close drawer on link click
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      menuBtn.innerHTML = '<i class="ph ph-list"></i>';
    });
  });
}

// ============================================
//  SCROLL REVEAL
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// ============================================
//  COUNT-UP ANIMATION
// ============================================
function initCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetAttr = el.getAttribute('data-count');
        if (targetAttr) {
           const target = parseInt(targetAttr);
           animateCount(el, target);
           observer.unobserve(el);
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}

function animateCount(el, target) {
  let current = 0;
  const duration = 1200;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.round(current) + '+';
  }, 16);
}

// ============================================
//  CATALOG
// ============================================
let currentFilter = 'all';

function renderCatalog(filter = 'all') {
  currentFilter = filter;
  const container = document.getElementById('catalog-container');
  if (!container) return; // For MPA

  container.innerHTML = '';

  // Update filter tabs
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    btn.onclick = () => renderCatalog(btn.getAttribute('data-filter'));
  });

  const filtered = filter === 'all' ? components : components.filter(c => c.cat === filter);
  const lang = getCurrentLang();

  filtered.forEach((comp, i) => {
    const card = document.createElement('div');
    card.className = 'component-card glass-panel';
    card.setAttribute('data-reveal', '');
    card.style.transitionDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="component-image-wrap">
        <img src="${comp.img}" alt="${t(comp.titleKey)}" class="component-image" loading="lazy">
      </div>
      <div class="component-content">
        <span class="component-tag" data-cat="${comp.cat}">${t('category_' + comp.cat)}</span>
        <h3 class="component-title">${t(comp.titleKey)}</h3>
        <p class="component-desc">${t(comp.descKey)}</p>
        <div class="component-footer">
          <button class="view-btn">
            ${t('view_details')}
            <i class="ph ${lang === 'ar' ? 'ph-arrow-left' : 'ph-arrow-right'}"></i>
          </button>
          <span class="component-voltage">${comp.voltage}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openDetailModal(comp));
    container.appendChild(card);
  });

  // Re-observe for scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  container.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// ============================================
//  COMPONENT DETAIL MODAL
// ============================================
function openDetailModal(comp) {
  const modal = document.getElementById('detail-modal');
  const body = document.getElementById('detail-body');
  const title = document.getElementById('detail-title');
  if (!modal) return;

  title.textContent = t(comp.titleKey);
  body.innerHTML = `
    <img src="${comp.img}" alt="${t(comp.titleKey)}" class="detail-hero-img">
    <div class="detail-info">
      <h2>${t(comp.titleKey)}</h2>
      <p style="color:var(--text-secondary);margin-bottom:1rem">${t(comp.descKey)}</p>
      <div class="detail-specs">
        <div class="detail-spec-row">
          <span class="detail-spec-label">${getCurrentLang() === 'ar' ? 'الفئة' : 'Category'}</span>
          <span class="detail-spec-value">${t('category_' + comp.cat)}</span>
        </div>
        <div class="detail-spec-row">
          <span class="detail-spec-label">${getCurrentLang() === 'ar' ? 'الجهد' : 'Voltage'}</span>
          <span class="detail-spec-value">${comp.voltage}</span>
        </div>
        <div class="detail-spec-row">
          <span class="detail-spec-label">${getCurrentLang() === 'ar' ? 'البروتوكول' : 'Protocol'}</span>
          <span class="detail-spec-value">${comp.protocol}</span>
        </div>
      </div>
    </div>
  `;
  modal.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const closeDetail = document.getElementById('close-detail-btn');
  const detailModal = document.getElementById('detail-modal');
  if (closeDetail && detailModal) {
    closeDetail.addEventListener('click', () => {
      detailModal.classList.remove('active');
    });
    detailModal.querySelector('.modal-backdrop').addEventListener('click', () => {
      detailModal.classList.remove('active');
    });
  }
});

// ============================================
//  PROJECTS
// ============================================
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return; // For MPA
  container.innerHTML = '';

  projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card glass-panel project-card-expanded';
    card.setAttribute('data-reveal', '');
    card.style.transitionDelay = `${i * 0.08}s`;
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.innerHTML = `
      <div class="project-image-wrap">
        <img src="${p.img}" alt="${t(p.titleKey)}" class="project-image" loading="lazy">
      </div>
      <div class="project-content" style="flex: 1; display:flex; flex-direction:column;">
        <h3 class="project-title">${t(p.titleKey)}</h3>
        <p class="project-desc">${t(p.descKey)}</p>
        
        <div class="project-details" style="margin-top:auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
          <p><strong><i class="ph ph-currency-circle-dollar"></i> ${t('proj_price')}:</strong> ${p.price}</p>
          <p><strong><i class="ph ph-toolbox"></i> ${t('proj_requirements')}:</strong> ${p.requirements}</p>
          <div style="margin-top:0.5rem">
            <strong><i class="ph ph-list-numbers"></i> ${t('proj_steps')}:</strong>
            <pre style="font-family:inherit; white-space:pre-wrap; color:var(--text-secondary); margin-top:0.25rem;">${t(p.stepsKey)}</pre>
          </div>
        </div>

        <div class="project-tags" style="margin-top: 1rem;">
          ${p.tags.map(tag => `<span class="project-tag-chip">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="project-footer" style="padding: 1rem; background: var(--glass-bg); text-align:center;">
        <a href="${p.video}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width:100%; border-radius: 6px;">
          <i class="ph ph-youtube-logo" style="color:#ff0000; font-size:1.2rem;"></i> ${t('proj_video')}
        </a>
      </div>
    `;
    container.appendChild(card);
  });

  // Observe
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  container.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
}

// ============================================
//  QUIZ
// ============================================
let quizState = { current: 0, score: 0, answered: false };

function renderQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return; // For MPA
  quizState = { current: 0, score: 0, answered: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById('quiz-container');
  if (!container) return;
  const q = quizQuestions[quizState.current];
  const total = quizQuestions.length;
  const num = quizState.current + 1;

  container.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(num / total) * 100}%"></div></div>
      <span class="quiz-progress-text">${num}/${total}</span>
    </div>
    <h3 class="quiz-question">${t(q.qKey)}</h3>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" data-index="${i}">
          <span class="opt-icon">${String.fromCharCode(65 + i)}</span>
          <span>${t(opt)}</span>
        </button>
      `).join('')}
    </div>
    <div class="quiz-actions">
      <button class="btn btn-primary quiz-action-btn" disabled>${
        num < total ? t('quiz_next') : t('quiz_finish')
      }</button>
    </div>
  `;

  // Event listeners
  const options = container.querySelectorAll('.quiz-option');
  const actionBtn = container.querySelector('.quiz-action-btn');

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      if (quizState.answered) return;
      quizState.answered = true;
      const idx = parseInt(opt.getAttribute('data-index'));
      const correctIdx = q.correct;

      options.forEach((o, i) => {
        if (i === correctIdx) o.classList.add('correct');
        else if (i === idx && i !== correctIdx) o.classList.add('wrong');
        o.style.pointerEvents = 'none';
      });

      if (idx === correctIdx) quizState.score++;
      actionBtn.disabled = false;
    });
  });

  actionBtn.addEventListener('click', () => {
    if (quizState.current < total - 1) {
      quizState.current++;
      quizState.answered = false;
      renderQuizQuestion();
    } else {
      renderQuizResults();
    }
  });
}

function renderQuizResults() {
  const container = document.getElementById('quiz-container');
  const score = quizState.score;
  const total = quizQuestions.length;
  const pct = Math.round((score / total) * 100);
  let msg;
  if (pct >= 80) msg = t('quiz_great');
  else if (pct >= 50) msg = t('quiz_good');
  else msg = t('quiz_try_again');

  container.innerHTML = `
    <div class="quiz-result">
      <div class="quiz-score">${score}/${total}</div>
      <p class="quiz-result-text">${msg}</p>
      <button class="btn btn-primary" id="quiz-retry-btn">
        <i class="ph ph-arrow-counter-clockwise"></i>
        ${t('quiz_retry')}
      </button>
    </div>
  `;
  document.getElementById('quiz-retry-btn').addEventListener('click', renderQuiz);
}

// ============================================
//  FORUM PREVIEW
// ============================================
function renderForum() {
  const container = document.getElementById('forum-preview');
  if (!container) return;
  container.innerHTML = forumThreads.map(thread => `
    <div class="forum-thread glass-panel" style="padding: 1rem; margin-bottom:1rem; border-radius: 8px;">
      <div class="forum-thread-icon" style="margin-bottom: 0.5rem; color: var(--primary-color);"><i class="ph ${thread.icon} ph-2x"></i></div>
      <div>
        <div class="forum-thread-title" style="font-weight: 600;">${t(thread.titleKey)}</div>
        <div class="forum-thread-meta" style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 5px;">${t(thread.metaKey)}</div>
      </div>
    </div>
  `).join('');
}

// ============================================
//  ASSISTANT
// ============================================
function initAssistant() {
  const modal = document.getElementById('assistant-modal');
  const openBtn = document.getElementById('open-assistant-btn');
  const closeBtn = document.getElementById('close-assistant-btn');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-chat-btn');
  
  if (!modal || !openBtn || !closeBtn || !input || !sendBtn) return;
  
  const backdrop = modal.querySelector('.modal-backdrop');

  openBtn.addEventListener('click', () => modal.classList.add('active'));
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  backdrop.addEventListener('click', () => modal.classList.remove('active'));

  const send = () => {
    const val = input.value.trim();
    if (!val) return;
    addChatMessage('user', val);
    input.value = '';
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      const response = getSmartResponse(val);
      addChatMessage('bot', response);
    }, 800 + Math.random() * 600);
  };

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });
}

function addChatMessage(role, text) {
  const container = document.getElementById('chat-history');
  const msg = document.createElement('div');
  msg.className = `chat-message ${role}`;
  if (role === 'bot') {
    msg.innerHTML = `<div class="avatar"><i class="ph ph-robot"></i></div><div class="msg-bubble">${escapeHtml(text).replace(/\n/g, '<br>')}</div>`;
  } else {
    msg.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`;
  }
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
  const container = document.getElementById('chat-history');
  const typing = document.createElement('div');
  typing.className = 'chat-message bot';
  typing.id = 'typing-indicator';
  typing.innerHTML = `<div class="avatar"><i class="ph ph-robot"></i></div><div class="msg-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>`;
  container.appendChild(typing);
  container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

function getSmartResponse(input) {
  const lang = getCurrentLang();
  const responses = assistantResponses[lang] || assistantResponses.en;
  const lower = input.toLowerCase();

  if (lower.includes('hc-sr04') || lower.includes('ultrasonic') || lower.includes('فوق صوت') || lower.includes('hcsr04'))
    return responses.hcsr04;
  if (lower.includes('servo') || lower.includes('سيرفو') || lower.includes('sg90'))
    return responses.servo;
  if (lower.includes('pwm') || lower.includes('pulse') || lower.includes('نبض'))
    return responses.pwm;
  if (lower.includes('i2c') || lower.includes('wire') || lower.includes('اتصال'))
    return responses.i2c;
  if (lower.includes('pid') || lower.includes('تحكم') || lower.includes('control'))
    return responses.pid;

  return responses.default;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
