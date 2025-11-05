import React, { useState, useEffect, useCallback } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const wordCategories = {
  "حرف ل":["طَلا","لاک","بالا","لیز","قالی","کالا","سالو","لولا","لوک","پِلاک","پولاد","کِلاس","لِباس","بُلور","لوکس","زُلال","جَلال","زِلزِلِه","بالارو","دِلاوَر","لاک پُشت","سالاد",],
  "حرف ق":["قاب","رَقیق","حُقوق","نُقرِه","صادِق","قارچ","ناطِق","یَقین","نَقاش","قُدرَت","عاشِق","سَقف","قاشُق","حَقیر","قَشَنگ","قَلب","مَقصَد","قِرمِز","قانون","قامَت",],
  "حرف پ": ["پدر", "پسر", "پتو", "پنیر", "پیشی", "پاییز", "پله", "پرتقال"],
  "حرف ص":["صابون","اِصرار","صَبر","صَدر","صُحبَت","بَصیرَت","تَصویر","صورَت"],
  "حرف غ":["غَذا","باغ","غُرور","غُروب","غار","غَریب","غُرِش","غَضَب","باغدار",],
  "حرف ف": ["فَردا","فَرش","دَفتَر","رَفتَن","شَرَف","عَرف","حَرف","فَراموش","تَفریح","فانوس","سِفید","فارسی","فَریاد","ظَرف","فُروتَن","فَرزاد","فِردوس","فارس","فَرض","تُف"],
  "حرف ر": ["بَرادَر","بَر","خِرَد","رُخ","بَرباد","پَرچَم","دارَد","تَر","دَرد","رَد","بار","تاجِر","رُب","چَتر","تُرُب","دَر","چَرخ","اَبر","خَرج","بُخار",],
  "حرف ز":["بُز","روز","زور","زَرد","زیب","باز","پاز","چیز","زِبر","بازی","تیز","زیر","زَر","خَز","زو","زیبا","زِشت","زار","راز","رُز"],
  "حرف ک":["کِتاب","کوکَب","کَبک","کَبود","کوبید","کَفش","کِیک","کَبِد","کِبریت","کَپَک","کِشتی","کیش","کَثیف","کوثَر","کودَک","کاخ","کار","کَشف","کاشی","کوشا",],
  "حرف گ": ["گُربه","گُرگ","گاو","گُل","گوش","گوشی","گاز","تَگ","گُذاشت","توت فَرَنگی","اَگَر","شِگِفت","سازگار","سَگ","گِراف","گُذَر","دِگر","جِگَر","حَق گو","تَگَرگ",],
  "حرف م": ["مار","مات","موز","مَغز","مُلک","مَرد","موم","مَکر","ماست","ماسک","مِداد","ماکارونی","ماتیک","موتور","آمار","رام","کَلام","گام","سُماق","مَطبَخ","مُبل","مُپ","موج","سیمُرغ","مُقَوا","مَخمل","مُژده","ماتَم",],
  "حرف ن": ["نان","اَنار","نارنج","نیش","نَرم","نَقاش","سَنگ","رَنگ","بَنَفش","دَندان","آب نَبات","نَسیم","کَمان","تَکان","نارِنگی","کَفَن","آتَش نِشان","نِگران","نَرگِس","نَوَسان","نازُک","ناقوس","نَعل","ناحَق","نِجات","ناخُن","نازَنین","نَردِبان","نارَس","نازِل","نیکو","دانِش","سَنجاق","نَمَد",],
  "حرف س": ["سَبَد","سَرباز","سَبز","بَست","سیراب","بَسی","سِپاس","بَسیج","سِز","ساز","سُرب","سُرخ","سِپَر","سَر","اَست","سیر","سَبا","سیری","سیب","سوز",],
  "حرف ش":["شِش","شوش","شیشه","باش","پوش","پاش","پیش","بیش","تَشت","چِشم","خوش","خوشی","باشی","شاد","شَب","شور","شیر","شَب رو","شَبَح","بَشیر","شِتاب","چِشید",],
  "حرف ص ": ["صابون","اِصرار","صَبر","صَدر","صُحبَت","بَصیرَت","تَصویر","صورَت"],
  "حرف ض" :  ["ضَرب","ضِد","رِضا","راضی","رضوان","حُضور","وَضع","اِضطِراب","اِضافِه","تَضاد",],
  "حرف چ": ["چای","چراغ","چتر","چاقو","چشم","چوب","چمن","چرخ","چکمه","چاه","چیپس","چمدان","چارقد","چسب","چنگال"],
  "کلاس G- ن": ["نان","اَنار","نیش","نَرم","دَندان","آب نَبات","نَسیم","کَمان","تَکان","آتَش نِشان","نَردِبان","نارَس","نیکو","دانِش","نَمَد",],

};

const getRandomColor = () => {
  const colors = ['#90e8aa', '#90e0a3', '#fff3cd', '#87e3ea', '#85ccf0', '#88a8ea', '#c786eb', '#aae897'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getHighlightedWord = (word, letter) => {
  if (!letter) return word;
  const regex = new RegExp(`(${letter})`, "g");
  const highlighted = word.replace(regex, '<span style="color: red;">$1</span>');
  return `<div dir="rtl" style="display: inline-block;">${highlighted}</div>`;
};

const WordFlipBox = () => {
  const [selectedCategory, setSelectedCategory] = useState('حرف پ');
  const [words, setWords] = useState(wordCategories[selectedCategory]);
  const [currentWord, setCurrentWord] = useState('');
  const [isSpinning, setIsSpinning] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [bgColor, setBgColor] = useState('#f8bcbc');
  const [showSecondBox, setShowSecondBox] = useState(false);
  const [showList, setShowList] = useState(true);
  const [highlightLetter, setHighlightLetter] = useState("ک");

  // چرخش باکس
  useEffect(() => {
    let animation;
    if (isSpinning) {
      animation = setInterval(() => {
        setRotation((prev) => prev + 6);
      }, 16);
    }
    return () => clearInterval(animation);
  }, [isSpinning]);

  // تعویض دسته‌بندی
  useEffect(() => {
    setWords(wordCategories[selectedCategory]);
    setCurrentWord('');
    setIsSpinning(true);
    setRotation(0);
    setShowSecondBox(false);
  }, [selectedCategory]);

  // عملکرد توقف/شروع
  const handleClick = useCallback(() => {
    if (isSpinning && words.length > 0) {
      setIsSpinning(false);
      const randomIndex = Math.floor(Math.random() * words.length);
      const selected = words[randomIndex];
      const updatedWords = words.filter((_, i) => i !== randomIndex);
      setCurrentWord(selected);
      setWords(updatedWords);
      setBgColor(getRandomColor());
      setShowSecondBox(false);
    } else if (!isSpinning && words.length > 0) {
      setCurrentWord('');
      setIsSpinning(true);
      setShowSecondBox(false);
    }
  }, [isSpinning, words]);

  // دکمه space
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClick]);

  const resetGame = () => {
    setWords(wordCategories[selectedCategory]);
    setCurrentWord('');
    setIsSpinning(true);
    setRotation(0);
    setBgColor('#f4c3c3');
    setShowSecondBox(false);
  };

  const handleShowSecondBox = () => {
    setShowSecondBox(true);
  };

  return (
    <div className="container border p-4 my-5 border-success border-2 rounded">
      <div className="container text-center mt-5">
        <style>{`
          .fade-slide-in {
            animation: fadeSlideIn 0.7s ease forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          @keyframes fadeSlideIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* انتخاب دسته‌بندی */}
        <div className="mb-5 text-end">
          <h5>
            انتخاب دسته:{" "}
            <button className="btn btn-sm btn-warning" onClick={() => setShowList(!showList)}>
              {showList ? "HideList" : "ShowList"}
            </button>
          </h5>
          {showList &&
            Object.keys(wordCategories).map((category) => (
              <button
                key={category}
                className={`btn btn-sm me-2 mb-2 ${selectedCategory === category ? 'btn-success' : 'btn-outline-secondary'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
        </div>

        {/* باکس دوم چرخان */}
        <div
          style={{
            width: '250px',
            height: '250px',
            backgroundColor: '#ffe4b5',
            borderRadius: '20px',
            position: 'absolute',
            left: '50%',
            transform: `translateX(-50%) rotate(${-rotation}deg)`,
            transition: isSpinning ? 'none' : 'transform 0.3s ease',
            zIndex: 0,
          }}
        ></div>

        {/* باکس اصلی کلمه */}
<div
  onClick={handleClick}
  style={{
    width: '250px',
    height: '250px',
    backgroundColor: bgColor,
    color: '#000',
    border: '2px solid #333',
    borderRadius: '15px',
    cursor: 'pointer',
    fontSize: '3rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    transform: `rotate(${rotation}deg)`,
    transition: isSpinning ? 'none' : 'transform 0.3s ease',
    zIndex: 1,
    position: 'relative',
    direction: 'rtl',
    textAlign: 'center',
  }}
  dangerouslySetInnerHTML={{
    __html: currentWord ? getHighlightedWord(currentWord, highlightLetter) : "",
  }}
/>

        {/* دکمه‌ها */}
        <div className="my-5">
          <button className="btn btn-primary me-2" onClick={resetGame}>شروع دوباره</button>
          <button className="btn btn-secondary" onClick={handleShowSecondBox}>نمایش کلمه</button>
        </div>

        {/* پیام اتمام کلمات */}
        {words.length === 0 && !isSpinning && (
          <p className="mt-3 text-success">همهٔ کلمات این دسته نمایش داده شدند!</p>
        )}

        {/* باکس دوم برای نمایش جداگانه کلمه */}
        {showSecondBox && currentWord && (
          <div
            className="mt-4 p-3 rounded border fade-slide-in"
            style={{
              backgroundColor: '#e0f7fa',
              color: '#333',
              fontSize: '1.5rem',
              maxWidth: '300px',
              margin: '0 auto',
            }}
            dangerouslySetInnerHTML={{
              __html: getHighlightedWord(currentWord, highlightLetter),
            }}
          />
        )}

        {/* فیلد انتخاب حرف */}
        <div className="mt-4">
          <label htmlFor="letterInput" className="form-label">حرف برای رنگی شدن:</label>
          <input
            type="text"
            id="letterInput"
            maxLength={1}
            className="form-control text-center"
            style={{ width: "60px", margin: "0 auto" }}
            value={highlightLetter}
            onChange={(e) => setHighlightLetter(e.target.value)}
          />
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <span>WordFlipBox</span>
    </div>
  );
};

export default WordFlipBox;
