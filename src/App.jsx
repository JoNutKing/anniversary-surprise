import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import photo1 from './assets/photos/1.png';

import gal1 from './assets/photos1/1.jpg';
import gal2 from './assets/photos1/2.jpg';
import gal3 from './assets/photos1/3.jpg';
import gal4 from './assets/photos1/4.jpg';
import gal5 from './assets/photos1/5.jpg';
import gal6 from './assets/photos1/6.jpg';
import gal7 from './assets/photos1/7.jpg';
import gal8 from './assets/photos1/8.jpg';
import gal9 from './assets/photos1/9.jpg';
import gal10 from './assets/photos1/10.jpg';
import bgMusic from './assets/mp3/ตั้งใจรัก.mp3';

// --- [ CONFIGURATION ] ---
// คุณสามารถแก้ไขข้อมูลต่างๆ ตรงนี้ได้เลยครับ
const CONFIG = {
  PASSWORD: "050569",            // รหัสผ่านเข้าเว็บ
  START_DATE: "05-05-2026",      // วันที่เริ่มคบกัน (วัน-เดือน-ปี) เช่น "14-02-2025"
  GIRLFRIEND_NAME: "เบบี๋คนสวย", // ชื่อแฟน
};

// --- Shared Components ---
const MusicPlayer = ({ isPlaying, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className="relative w-14 h-14 cursor-pointer group mb-2"
    >
      {/* Vinyl Disk */}
      <motion.div
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={isPlaying ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
        className="w-full h-full bg-[#1A1A1A] rounded-full border-[3px] border-[#D96B84] flex items-center justify-center relative shadow-[0_4px_12px_rgba(217,107,132,0.3)]"
      >
        {/* Vinyl Grooves */}
        <div className="absolute inset-1.5 border border-white/5 rounded-full" />
        <div className="absolute inset-3 border border-white/5 rounded-full" />
        
        {/* Central Label */}
        <div className="w-4 h-4 bg-gradient-to-br from-[#FFE5EC] to-[#FFC2D1] rounded-full flex items-center justify-center shadow-inner">
          <div className="w-1 h-1 bg-[#D96B84] rounded-full" />
        </div>
      </motion.div>

      {/* Tone Arm (Stylus) */}
      <motion.div 
        animate={isPlaying ? { rotate: 25 } : { rotate: 0 }}
        className="absolute top-0 right-0 w-6 h-6 origin-top-right transform -translate-x-1 translate-y-1 pointer-events-none"
      >
        <div className="w-0.5 h-6 bg-gray-300 rounded-full shadow-sm" />
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-gray-400 rounded-sm" />
      </motion.div>

      {/* Status Icon */}
      <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md border border-[#FFE5EC] text-[10px]">
        {isPlaying ? "🎵" : "🔇"}
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#D96B84] text-white px-2 py-0.5 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
        {isPlaying ? "PAUSE" : "PLAY MUSIC ✨"}
      </div>
    </motion.div>
  );
};

const FallingFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const symbols = ["🌸", "🌹", "🌷", "🌺", "🌼", "💐", "✨", "❤️"];
    const newFlowers = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * (30 - 15) + 15,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      delay: Math.random() * 5,
      duration: Math.random() * (10 - 5) + 5,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          initial={{ y: -50, x: `${flower.x}vw`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: "110vh",
            x: `${flower.x + (Math.random() * 10 - 5)}vw`,
            opacity: [0, 1, 1, 0],
            rotate: 360 
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            delay: flower.delay,
            ease: "linear",
          }}
          style={{ position: 'absolute', fontSize: flower.size }}
        >
          {flower.symbol}
        </motion.div>
      ))}
    </div>
  );
};

const FallingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const symbols = ["❤️", "💖", "💗", "💓", "💕", "🤍"];
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * (24 - 14) + 14,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      delay: Math.random() * 5,
      duration: Math.random() * (12 - 6) + 6,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ y: -50, x: `${h.x}vw`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: "110vh",
            x: `${h.x + (Math.random() * 10 - 5)}vw`,
            opacity: [0, 1, 1, 0],
            rotate: 360 
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
            ease: "linear",
          }}
          style={{ position: 'absolute', fontSize: h.size }}
        >
          {h.symbol}
        </motion.div>
      ))}
    </div>
  );
};

const PageContainer = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`min-h-screen font-sans flex flex-col items-center justify-center p-6 text-center text-[#4A4A4A] gap-6 ${className}`}
  >
    {children}
  </motion.div>
);

const PrimaryButton = ({ onClick, children, className = "", variant = "primary" }) => {
  const baseStyles = "rounded-full py-3 px-8 text-lg font-medium cursor-pointer shadow-lg transition-all active:scale-95 hover:shadow-xl flex items-center justify-center";
  const variants = {
    primary: "bg-[#D96B84] text-white hover:bg-[#c85a73]",
    secondary: "bg-white text-[#D96B84] hover:bg-[#FFF5F7]",
    gray: "bg-[#888] text-white hover:bg-[#777]",
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

// ==========================================
// 1. หน้า Welcome (เปิดกล่องของขวัญ)
// ==========================================
function PageWelcome({ onNext, musicState }) {
  return (
    <PageContainer>
      <MusicPlayer isPlaying={musicState.isPlaying} onToggle={musicState.togglePlay} />
      
      <h1 className="text-4xl text-[#D96B84] text-center font-bold drop-shadow-sm">
        Happy Anniversary<br />
        <span className="text-2xl font-medium opacity-80">ทำเว็บพิเศษให้คนสำคัญ</span>
      </h1>
      
      <motion.div 
        className="my-12"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="180" height="180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <rect x="3" y="9" width="18" height="12" rx="2" fill="#FFA6C9" />
          <rect x="2" y="6" width="20" height="3" rx="1" fill="#FF85B3" />
          <path d="M12 6C12 6 10 2 7 2C4 2 4 5 6 6C8 7 12 7 12 7Z" fill="#FF5C93" />
          <path d="M12 6C12 6 14 2 17 2C20 2 20 5 18 6C16 7 12 7 12 7Z" fill="#FF5C93" />
          <rect x="11" y="6" width="2" height="15" fill="#FF5C93" />
          <rect x="2" y="12" width="20" height="2" fill="#FF5C93" />
        </svg>
      </motion.div>

      <p className="text-xl mb-8 text-[#666] font-medium">มีของขวัญมาส่งครับ ! 🎁</p>
      <PrimaryButton onClick={onNext}>
        เปิดกล่อง
      </PrimaryButton>
    </PageContainer>
  );
}

// ==========================================
// 2. หน้ากรอกรหัสผ่าน
// ==========================================
function PagePassword({ onCorrectPassword }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Focus next
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    if (otp.join("") === CONFIG.PASSWORD) {
      onCorrectPassword();
    } else {
      alert("รหัสผ่านไม่ถูกต้อง ลองใหม่อีกครั้งนะจ๊ะ! ❤️");
      setOtp(new Array(6).fill(""));
      inputRefs.current[0].focus();
    }
  };

  return (
    <PageContainer className="justify-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#E86A82] rounded-3xl p-8 w-full max-w-[350px] text-center shadow-2xl text-white"
      >
        <h2 className="text-4xl mb-4 font-black drop-shadow-md" style={{ color: 'white' }}>ยืนยันตัวตน</h2>
        <p className="text-sm mb-2 opacity-90" style={{ color: 'white' }}>ใส่รหัสผ่านลับของเรา ❤️</p>
        <p className="text-[11px] mb-8 opacity-70 italic" style={{ color: 'white' }}>( คำใบ้: วันที่เริ่มคบกัน )</p>
        
        <div className="flex justify-center gap-2 mb-10">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength="1"
              ref={el => inputRefs.current[index] = el}
              className="w-12 h-14 rounded-xl border-none text-center text-2xl font-bold text-[#4A4A4A] bg-[#FFF0F3] shadow-inner focus:ring-4 focus:ring-[#FFB3C6] focus:outline-none transition-all"
              value={data}
              onChange={e => handleChange(e.target.value, index)}
              onKeyDown={e => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <PrimaryButton variant="secondary" onClick={handleVerify} className="w-full">
          ยืนยันรหัส
        </PrimaryButton>
      </motion.div>
    </PageContainer>
  );
}

// ==========================================
// 3. หน้าเปิดรับดอกไม้
// ==========================================
function PageFlowers({ onNext }) {
  return (
    <PageContainer>
      <FallingFlowers />
      <h1 className="text-3xl text-[#D96B84] font-bold text-center">
        สำหรับคนพิเศษของเค้า ! 🌸
      </h1>

      <motion.div 
        className="my-10 px-4"
        initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          rotate: [ -10, 10, -10 ],
        }}
        transition={{ 
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          default: {
            type: "spring", 
            stiffness: 100, 
            damping: 15 
          }
        }}
      >
        <div className="max-w-[220px] relative">
          <img 
            src={photo1} 
            alt="Flower surprise" 
            className="w-full h-auto rotate-[-5deg] drop-shadow-2xl"
          />
        </div>
      </motion.div>

      <p className="text-xl mb-10 font-medium text-[#D96B84] text-center bg-white/50 px-6 py-3 rounded-full shadow-sm">
        เก่งมากเบบี๋ ! ดอกไม้สำหรับคนน่ารักที่สุด
      </p>

      <PrimaryButton onClick={onNext}>
        เข้าสู่หน้าหลัก ➔
      </PrimaryButton>
    </PageContainer>
  );
}

// ==========================================
// 4. หน้าเมนูหลัก
// ==========================================
function PageMenu({ onSelectMenu }) {
  const menuItems = [
    { id: 'days', title: 'วันเวลาของเรา', icon: '🗓️', color: '#FF85B3' },
    { id: 'letter', title: 'จดหมายถึงเธอ', icon: '💌', color: '#E86A82' },
    { id: 'quiz', title: 'เรารู้ใจกันแค่ไหน', icon: '🎮', color: '#D96B84' },
    { id: 'memories', title: 'บันทึกความทรงจำ', icon: '✨', color: '#FF99AC' },
  ];

  return (
    <PageContainer>
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl text-[#D96B84] font-bold"
      >
        เลือกสิ่งที่อยากดูนะ ❤️
      </motion.h1>

      <div className="grid grid-cols-2 gap-4 w-full max-w-[360px]">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectMenu(item.id)}
            style={{ backgroundColor: item.color }}
            className="rounded-[24px] p-5 flex flex-col items-center justify-center text-center text-white cursor-pointer shadow-lg aspect-square"
          >
            <span className="text-4xl mb-3">{item.icon}</span>
            <span className="text-base font-semibold leading-tight">{item.title}</span>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-sm opacity-50 italic">made with love for you ~</p>
      
      <p 
        onClick={() => onSelectMenu('welcome')}
        className="mt-4 cursor-pointer text-[#D96B84] hover:underline flex items-center gap-1 opacity-70 italic font-medium text-sm"
      >
        ← ย้อนกลับหน้าแรกสุด
      </p>
    </PageContainer>
  );
}

// ==========================================
// 4.1 หน้าแสดงจำนวนวันที่คบกัน
// ==========================================
function PageDays({ onBack }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    // แยกวันที่จาก format "DD-MM-YYYY"
    const [day, month, year] = CONFIG.START_DATE.split("-").map(Number);
    const startDate = new Date(year, month - 1, day);
    const today = new Date();
    const timeDiff = today.getTime() - startDate.getTime();
    setDays(Math.floor(timeDiff / (1000 * 3600 * 24)));
  }, []);

  return (
    <PageContainer>
      <FallingHearts />
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl text-[#D96B84] font-bold text-center drop-shadow-sm"
      >
        เราคบกันมาได้ดีเเละจะดีต่อไป 🕰️
      </motion.h1>
      
      <div className="relative flex justify-center items-center">
        {/* Pulsing background rings */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-72 h-72 bg-white/40 rounded-full blur-xl"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute w-64 h-64 bg-[#ffb3c6]/50 rounded-full blur-2xl"
        ></motion.div>

        {/* Main Glassmorphism Circle */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          className="relative z-10 bg-white/60 backdrop-blur-md rounded-full w-60 h-60 flex flex-col items-center justify-center shadow-[0_8px_32px_0_rgba(255,182,193,0.4)] border border-white/60"
        >
          <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#D96B84] to-[#f43f5e] drop-shadow-sm">
            {days}
          </span>
          <span className="text-xl text-[#D96B84] opacity-80 font-bold mt-2 tracking-wide">วันแล้วครับ ❤️</span>
        </motion.div>
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center text-[#D96B84] max-w-[300px] font-medium leading-relaxed bg-white/50 px-6 py-4 rounded-2xl shadow-sm backdrop-blur-sm border border-white/60"
      >
        ดีใจที่มีเธอเข้ามาในชีวิต<br/>ขอบคุณสำหรับทุกวันที่ผ่านมานะ ✨
      </motion.p>

      <PrimaryButton variant="secondary" onClick={onBack}>
        ⬅ ย้อนกลับ
      </PrimaryButton>
    </PageContainer>
  );
}

// ==========================================
// 4.2 หน้าจดหมาย
// ==========================================
function PageLetter({ onBack }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageContainer>
      <FallingFlowers />
      <FallingHearts />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div 
            key="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="flex flex-col items-center w-full"
          >
            <motion.div 
              className="relative cursor-pointer"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => setIsOpen(true)}
            >
              <svg width="220" height="160" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                <rect width="24" height="18" rx="2" fill="#FBC4D6" />
                <path d="M0 0L12 10L24 0" stroke="#E86A82" strokeWidth="1.5" />
                <path d="M0 18L9 9" stroke="#E86A82" strokeWidth="1.5" />
                <path d="M24 18L15 9" stroke="#E86A82" strokeWidth="1.5" />
              </svg>
              <span className="absolute -top-6 -right-2 text-5xl">🌸</span>
            </motion.div>

            <h2 className="text-2xl text-[#D96B84] mb-8 italic font-bold">Happy Anniversary My Dear</h2>
            <PrimaryButton onClick={() => setIsOpen(true)}>
              เปิดอ่านจดหมาย ✉️
            </PrimaryButton>
          </motion.div>
        ) : (
          <motion.div 
            key="letter-content"
            initial={{ opacity: 0, y: 50, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            className="bg-white rounded-3xl p-8 w-full max-w-[350px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#D96B84] opacity-20"></div>
            <h3 className="text-[#D96B84] text-2xl mb-6 font-bold flex items-center gap-2">ถึง {CONFIG.GIRLFRIEND_NAME} 🤍</h3>
            <div className="text-base text-[#555] text-left leading-relaxed space-y-4">
              <p className="indent-8">
                สุขสันต์วันครบรอบนะค่าบบี๋ ขอบคุณที่เดินเข้ามาในชีวิตและคอยอยู่เคียงข้างกันเสมอ
                รักในทุกๆ ความใส่ใจ และความน่ารักที่บี๋มีให้เค้าเสมอนะ ขอบคุณที่ปรับอะไรหลายๆอย่างเพื่อเค้า.
              </p>
              <p>
                อยู่เป็นความสุขของกันและกันแบบนี้ไปนานๆ เลยนะ รักที่สุดในโลกเลยยยย~ ❤️
              </p>
            </div>
            <hr className="border-none border-t border-dashed border-[#FFC2D1] my-4" />
            <div className="flex justify-center">
              <PrimaryButton onClick={() => setIsOpen(false)} className="bg-[#FFE5EC] text-[#D96B84] hover:bg-[#FFC2D1] shadow-none py-2 px-10 text-base border border-[#D96B84]/20">
                เก็บจดหมายเข้าซอง 🌸
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <p 
        onClick={onBack}
        className="cursor-pointer text-[#D96B84] hover:underline flex items-center gap-1 opacity-70 italic"
      >
        ← กลับหน้าเมนู
      </p>
    </PageContainer>
  );
}

// ==========================================
// 4.3 หน้าเกมตอบคำถาม (Quiz)
// ==========================================
function PageQuiz({ onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'correct' or 'wrong'
  const [selectedIdx, setSelectedIdx] = useState(null);

  const questions = [
    {
      questionText: 'เดทแรกของเราไปที่ไหน?',
      answerOptions: [
        { answerText: 'คาเฟ่แมวสุดชิค', isCorrect: false },
        { answerText: 'สวนสาธารณะที่เราไปเดินเล่นกัน', isCorrect: false },
        { answerText: 'ร้านตี๋น้อยยั่วๆ', isCorrect: true },
        { answerText: 'โรงหนังที่เราดูเรื่องโปรด', isCorrect: false },
      ],
    },
    {
      questionText: 'ของกินที่เห็นแล้วต้องเดินพุ่งเข้าใส่คือ?',
      answerOptions: [
        { answerText: 'ร้านเหล้า', isCorrect: false },
        { answerText: 'ส้มตำปูปลาร้านัวๆ', isCorrect: true },
        { answerText: 'ซอยจุ๊', isCorrect: false },
        { answerText: 'พิซซ่าหน้าเยอะๆ', isCorrect: false },
      ],
    },
    {
      questionText: 'กิจกรรมที่เราชอบทำด้วยกันบ่อยที่สุดคือ?',
      answerOptions: [
        { answerText: 'ดูหนังในโรงภาพยนตร์', isCorrect: true },
        { answerText: 'เถียงกันเรื่องไร้สาระ', isCorrect: false },
        { answerText: 'เดินเล่น', isCorrect: false },
        { answerText: 'ร้องเพลง', isCorrect: false },
      ],
    },
    {
      questionText: 'นิสัยของเค้าที่บี๋ชอบบ่นบ่อยที่สุดคือ?',
      answerOptions: [
        { answerText: 'นอนดึกตื่นสาย', isCorrect: false },
        { answerText: 'ดื้อรั้นไม่ฟังใคร', isCorrect: false },
        { answerText: 'ชอบแกล้งให้เขิน', isCorrect: false },
        { answerText: 'ขี้น้อยใจเป็นหนึ่ง', isCorrect: true },
      ],
    },
    {
      questionText: 'ทริปหน้าเราจะไปที่ไหนนะ เลือกสักข้อสิ?',
      answerOptions: [
        { answerText: 'เชียงใหม่', isCorrect: true },
        { answerText: 'ประเทศจีน', isCorrect: true },
        { answerText: 'กระบี่', isCorrect: true },
        { answerText: 'คาเฟ่ถ่ายรูปสวยๆ ตามใจบี๋', isCorrect: true },
      ],
    }
  ];

  const handleAnswerOptionClick = (isCorrect, idx) => {
    if (feedback) return;
    setSelectedIdx(idx);

    if (isCorrect) {
      setScore(score + 1);
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }
    
    setTimeout(() => {
      setFeedback(null);
      setSelectedIdx(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1200);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setFeedback(null);
    setSelectedIdx(null);
  };

  return (
    <PageContainer>
      <AnimatePresence mode="wait">
        {showScore ? (
          <motion.div 
            key="score"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-10 w-full max-w-[345px] text-center shadow-2xl"
          >
            <h2 className="text-[#D96B84] text-3xl font-bold mb-4">จบเกมแล้วจ้า! 🎉</h2>
            <p className="text-xl mb-8 font-medium text-[#4A4A4A]">เก่งมาก! ตอบถูก {score} / {questions.length} ข้อ</p>
            <div className="flex justify-center">
              <PrimaryButton onClick={resetQuiz} className="bg-[#FFE5EC] text-[#D96B84] hover:bg-[#FFC2D1] shadow-none py-2 px-10 text-base border border-[#D96B84]/20">
                เล่นอีกรอบ 🔄
              </PrimaryButton>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="quiz-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className={`bg-white rounded-3xl p-8 w-full max-w-[345px] shadow-2xl relative border-2 border-dashed ${feedback === 'correct' ? 'border-green-400' : feedback === 'wrong' ? 'border-red-400' : 'border-[#FFC2D1]'} transition-colors duration-300`}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D96B84] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
              ข้อ {currentQuestion + 1} / {questions.length}
            </div>

            <h3 className="text-xl text-center my-6 text-[#333] font-bold leading-tight">
              {questions[currentQuestion].questionText}
            </h3>

            <div className="flex flex-col gap-3">
              {questions[currentQuestion].answerOptions.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerOptionClick(option.isCorrect, idx)}
                  className={`border rounded-2xl p-4 text-left text-base font-medium transition-all shadow-sm
                    ${feedback && option.isCorrect && (currentQuestion !== 4 || selectedIdx === idx) ? 'bg-green-100 border-green-500 text-green-700' : 
                      feedback && !option.isCorrect && selectedIdx === idx ? 'bg-red-100 border-red-500 text-red-700' :
                      feedback && !option.isCorrect ? 'bg-gray-50 border-gray-200 text-gray-400' : 
                      feedback && option.isCorrect && currentQuestion === 4 && selectedIdx !== idx ? 'bg-gray-50 border-gray-200 text-gray-400' :
                      'bg-[#FFF5F7] border-[#FFD6E0] text-[#D96B84] hover:bg-[#FFE5EC]'}
                  `}
                >
                  {option.answerText}
                </motion.button>
              ))}
            </div>

            {feedback && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`text-center font-bold text-lg mt-4 ${feedback === 'correct' ? 'text-green-500' : 'text-red-500'}`}
              >
                {feedback === 'correct' ? 'ถูกต้องนะคร้าบบบ! ✨' : 'อุ๊ย... ผิดนิดเดียว 💖'}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <p 
        onClick={onBack}
        className="cursor-pointer text-[#D96B84] hover:underline flex items-center gap-1 opacity-70 italic"
      >
        ← กลับหน้าเมนู
      </p>
    </PageContainer>
  );
}

// ==========================================
// 4.4 หน้าความทรงจำ (Memories)
// ==========================================
function PageMemories({ onBack }) {
  const galleryPhotos = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10];
  
  const captions = [
    "ขอบคุณที่เป็นรอยยิ้มให้เค้าในทุกๆ วันนะ 😊",
    "อยากให้เราจับมือด้วยกันแบบนี้ไปนานๆ เลยนะ ❤️",
    "รักความน่ารักของบี๋แบบนี้ที่สุดเลย ✨",
    "ทุกรูปนี้คือความทรงจำที่ดีที่สุดของเค้าเลย 📸",
    "แค่มีบี๋อยู่ข้างๆ โลกก็สดใสขึ้นเยอะเลย 🌟",
    "อยากเก็บสะสมความทรงจำของเราให้เต็มกล้องเลย 💖",
    "ขอบคุณที่ตามใจและคอยดูแลเค้าเสมอมานะ 🎀",
    "จับมือกันผ่านอะไรมาตั้งเยอะ เก่งมากเลยตัวดื้อ 💕",
    "เวลาเดินเร็วมาก แต่เค้าก็ยังรักบี๋เหมือนเดิมนะ 🕰️",
    "พร้อมสร้างความทรงจำใหม่ๆ ไปด้วยกันอีกนะบี๋ 🚀"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length);
  const prevPhoto = () => setCurrentIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));

  return (
    <PageContainer>
      <FallingHearts />
      <h1 className="text-3xl text-[#D96B84] mb-6 font-extrabold tracking-tight drop-shadow-sm shrink-0">
        แกลอรี่ของเรา 📸
      </h1>

      {/* Inline Photo Display */}
      <div className="relative w-full max-w-[300px] h-[420px] mb-8 shrink-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white/70 backdrop-blur-md p-3 shadow-xl rounded-2xl border border-white/60 flex flex-col"
          >
            <img 
              src={galleryPhotos[currentIndex]} 
              className="w-full flex-1 min-h-0 object-cover rounded-lg shadow-sm"
              alt="Memory"
            />
            <div className="mt-3 text-center text-[#D96B84] font-bold text-sm tracking-widest shrink-0">
              {currentIndex + 1} / {galleryPhotos.length}
            </div>
            <p className="mt-2 text-center text-[#666] text-sm font-medium italic min-h-[44px] px-2 leading-tight flex items-center justify-center shrink-0">
              "{captions[currentIndex]}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex gap-3 w-full max-w-[300px] mb-4">
        <button 
          onClick={prevPhoto} 
          className="flex-1 bg-white text-[#D96B84] border border-[#FFC2D1] py-3 rounded-full font-bold hover:bg-[#FFF5F7] active:scale-95 transition-all shadow-sm text-sm"
        >
          ← ก่อนหน้า
        </button>
        <button 
          onClick={nextPhoto} 
          className="flex-[1.5] bg-[#D96B84] text-white py-3 rounded-full font-bold hover:bg-[#c85a73] active:scale-95 transition-all shadow-md text-sm"
        >
          เปลี่ยนรูป ⏭️
        </button>
      </div>

      <p 
        onClick={onBack}
        className="cursor-pointer text-[#D96B84] hover:underline flex items-center justify-center gap-1 opacity-70 italic font-medium shrink-0 mb-4"
      >
        ← กลับหน้าเมนู
      </p>
    </PageContainer>
  );
}



// ==========================================
// Main Component
// ==========================================
export default function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const musicUrl = bgMusic; 

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Autoplay blocked or error: ", err));
    }
    setIsPlaying(!isPlaying);
  };

  const musicState = { isPlaying, togglePlay };

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome': return <PageWelcome onNext={() => setCurrentPage('password')} musicState={musicState} />;
      case 'password': return <PagePassword onCorrectPassword={() => setCurrentPage('flowers')} />;
      case 'flowers': return <PageFlowers onNext={() => setCurrentPage('menu')} />;
      case 'menu': return <PageMenu onSelectMenu={(menuId) => setCurrentPage(menuId)} />;
      case 'days': return <PageDays onBack={() => setCurrentPage('menu')} />;
      case 'letter': return <PageLetter onBack={() => setCurrentPage('menu')} />;
      case 'quiz': return <PageQuiz onBack={() => setCurrentPage('menu')} />;
      case 'memories': return <PageMemories onBack={() => setCurrentPage('menu')} />;
      default: return <PageWelcome onNext={() => setCurrentPage('password')} />;
    }
  };

  return (
    <div className="max-w-[450px] mx-auto min-h-screen relative overflow-hidden w-full">
      <audio ref={audioRef} src={musicUrl} loop />
      
      {/* Small Music Indicator for other pages */}
      {currentPage !== 'welcome' && (
        <div className="fixed top-6 right-6 z-[100] opacity-50 hover:opacity-100 transition-opacity">
          <motion.div 
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={isPlaying ? { duration: 4, repeat: Infinity, ease: "linear" } : {}}
            onClick={togglePlay}
            className="w-8 h-8 bg-[#333] rounded-full border border-[#D96B84] flex items-center justify-center cursor-pointer shadow-sm shadow-[#D96B84]/40"
          >
            <div className="w-2 h-2 bg-[#D96B84] rounded-full" />
          </motion.div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <div key={currentPage}>
          {renderPage()}
        </div>
      </AnimatePresence>
      
      {/* Subtle Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#FFE5EC] blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#FFB3C6] blur-3xl"
        />
      </div>
    </div>
  );
}