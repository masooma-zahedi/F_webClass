
import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { nanoid } from "nanoid";

export const SylabeWords = () => {
  const [selectedWord, setSelectedWord] = useState("");
  const [animation, setAnimation] = useState("animate__bounceIn");
  const [selectedDatasetId, setSelectedDatasetId] = useState(9);
  const [sheetOpen, setSheetOpen] = useState(false); // for mobile bottom sheet

  const animations = [
    "animate__bounceIn",
    "animate__fadeIn",
    "animate__zoomIn",
    "animate__lightSpeedInRight",
    "animate__jackInTheBox",
    "animate__rotateIn",
  ];

  const datasets = [
        {
        // buttonTargetId:"testSylabe1",
        id:1,
        titleHead:"تا حرف ت بخوانیم",
        titleColor:"rgb(187, 39, 88)",
        sylabelBg:"rgb(209, 79, 79)",
        sentenceRow: [
        [ { word:"او", syla:"" }, { word:"توت", syla:"" }, { word:"داد.", syla:"" } ],
        [ { word:"دوستَم", syla:"دوس + تَم" }, { word:"با", syla:"" }, { word:"سام", syla:"" }, { word:"دَست", syla:"" }, { word:"داد.", syla:"" } ],
        [ { word:"او", syla:"" }, { word:"تاب", syla:"" }, { word:"بَست.", syla:"" } ],
        [ { word:"او", syla:"" }, { word:"با", syla:"" }, { word:"اَسَد", syla:"اَ + سَد" }, { word:"دَست", syla:"" }, { word:"داد.", syla:"" } ],
        [ { word:"سام", syla:"" }, { word:"تاب", syla:"" }, { word:"بَست.", syla:"" } ],
        [ { word:"سام", syla:"" }, { word:"با", syla:"" }, { word:"اَسَد", syla:"اَ + سَد" }, { word:"دوست", syla:"" }, { word:"اَست.", syla:"" } ],
        [ { word:"سَبا", syla:"" }, { word:"با", syla:"" }, { word:"سوت", syla:"" }, { word:"آمَد.", syla:"آ + مَد" } ],
        [ { word:"او", syla:"" }, { word:"ماست", syla:"" }, { word:"داد.", syla:"" } ],
        ]

    },
    
    {
        // buttonTargetId:"testSylabe2",
        id:2,
        titleHead:"تا حرف س بخوانیم",
        titleColor:"rgb(58, 86, 210)",
        sylabelBg:"rgb(36, 113, 190)",
        sentenceRow : [
        [{word:"آسِمان",syla:"آ+سِ+مان"},{word:"اَبر",syla:""},{word:"دارَد.",syla:"دا+رَد"}],
        [{word:"تو",syla:""},{word:"دَر",syla:""},{word:"سَبَد",syla:"سَ+بَد"},{word:"توت",syla:""},{word:"داری.",syla:"دا+ری"}],
        [{word:"سارا",syla:"سا+را"},{word:"با",syla:""},{word:"اَدَب",syla:"اَ+دَب"},{word:"اَست.",syla:""}],
        [{word:"توت",syla:""},{word:"تازِه",syla:"تا+زِه"},{word:"وَ",syla:""},{word:"سَرد",syla:""},{word:"بود.",syla:""}],
        [{word:"دِرَخت",syla:"دِ+رَخت"},{word:"سَبز",syla:""},{word:"اَست.",syla:""}],
        [{word:"دارا",syla:"دا+را"},{word:"سَردَرد",syla:"سَر+دَرد"},{word:"دارَد.",syla:"دا+رَد"}],
        [{word:"اَسب",syla:""},{word:"بار",syla:""},{word:"شیر",syla:""},{word:"رِضا",syla:"رِ+ضا"},{word:"بَشَر",syla:"بَ+شَر"},{word:"سیر",syla:""}],
        [{word:"شور",syla:""},{word:"آبی",syla:"آ+بی"},{word:"ریش",syla:""},{word:"اَبر",syla:""},{word:"شیب",syla:""},{word:"سیب",syla:""}],
        [{word:"سُرب",syla:""},{word:"اَبرو",syla:"اَب+رو"},{word:"ساری",syla:"سا+ری"},{word:"سَبز",syla:""},{word:"سَراب",syla:"سَ+راب"},{word:"سُروش",syla:"سُ+روش"}],
        [{word:"اَبری",syla:"اَب+ری"},{word:"ضارِب",syla:"ضا+رِب"},{word:"روسی",syla:"رو+سی"},{word:"ویروس",syla:"وی+روس"},{word:"زیبا",syla:"زی+با"},{word:"خُروس",syla:"خُ+روس"}]
        ]
    },
    {
        // buttonTargetId:"testSylabe3",
        id:3,
        titleHead:" تا حرف ظ بخوانیم",
        titleColor:"rgb(88, 191, 57)",
        sylabelBg:"rgb(36, 187, 190)",
        sentenceRow : [
        [{word:"بابا",syla:"با+با"},{word:"بی‌تاب",syla:"بی+تاب"},{word:"اَست.",syla:""}],
        [{word:"پِدَر",syla:"پِ+دَر"},{word:"شَب",syla:""},{word:"دَر",syla:""},{word:"حَیاط",syla:"حَ+یاط"},{word:"اَست.",syla:""}],
        [{word:"حَسن",syla:"حَ+سَن"},{word:"شاد",syla:""},{word:"اَست.",syla:""}],
        [{word:"بابا",syla:"با+با"},{word:"آب",syla:""},{word:"داد.",syla:""}],
        [{word:"بابا",syla:"با+با"},{word:"تَب",syla:""},{word:"دارَد.",syla:"دا+رَد"}],
        [{word:"حُباب",syla:"حُ+باب"},{word:"پاک",syla:""},{word:"اَست.",syla:""}],
        [{word:"شَب",syla:""},{word:"تار",syla:""},{word:"اَست.",syla:""}],
        [{word:"سَبَد",syla:"سَ+بَد"},{word:"پُر",syla:""},{word:"اَز",syla:""},{word:"سیب",syla:""},{word:"شُد.",syla:""}],
        [{word:"سارا",syla:"سا+را"},{word:"توپ",syla:""},{word:"را",syla:""},{word:"زَد",syla:""}],
        [{word:"بابا با حسن در حیاط بود. حسن یک توپ داشت. توپ در سبد بود."}],
        [{word:"بابا توپ را برداشت. حسن با پا توپ را زد. توپ در باد رفت."}],
        [{word:"حسن دوید. توپ به پله خورد و برگشت. بابا خندید."}],
        [{word:"حسن توپ را بغل کرد. شب شد. بابا و حسن به خانه رفتند."}]
        ]

    },

    {
        // buttonTargetId:"testSylabe4",
        id:4,
        titleHead:"تا حرف خ بخوانیم",
        titleColor:"rgb(89, 108, 19)",
        sylabelBg:"rgb(100, 190, 36)",
        sentenceRow:[
            // each arrow is one sentence
            [
                {
                word:"آب",
                syla:""
                },
                {
                word:"پیچ",
                syla:""
                },
                {
                word:"چاپ",
                syla:""
                },
                {
                word:"خوب",
                syla:""
                },
                {
                word:"بَحر",
                syla:""
                },
            ],
            [
                {
                word:"پُخت",
                syla:""
                },
                {
                word:"چوب",
                syla:""
                },
                {
                word:"چُرت",
                syla:""
                },
                {
                word:"تاب",
                syla:""
                },
                {
                word:"بَخت",
                syla:""
                },
            ],
            [
                {
                word:"توپ",
                syla:""
                },
                {
                word:"بیخ",
                syla:""
                },
                {
                word:"تیپ",
                syla:""
                },
                {
                word:"بِتا",
                syla:""
                },
                {
                word:"پَتو",
                syla:""
                },
            ],
            [
                {
                word:"تاج",
                syla:""
                },
                {
                word:"ثَبت",
                syla:""
                },
                {
                word:"جیب",
                syla:""
                },
                {
                word:"باج",
                syla:""
                },
                {
                word:"اُتو",
                syla:""
                },
            ],
            [
                {
                word:"چَتر",
                syla:""
                },
                {
                word:"حاج",
                syla:""
                },
                {
                word:"پوچ",
                syla:""
                },
                {
                word:"ثابِت",
                syla:"ثا + بِت"
                },
                {
                word:"تابو",
                syla:"تا + بو"
                },
            ],
            [
                {
                word:"بُطری",
                syla:"بُط + ری"
                },
                {
                word:"دَر",
                syla:""
                },
                {
                word:"سَبَد",
                syla:"سَ + بَد"
                },
                {
                word:"اَست.",
                syla:""
                },
            ],
            [
                {
                word:"شَب",
                syla:""
                },
                {
                word:"باد",
                syla:""
                },
                {
                word:"آمَد.",
                syla:"آ + مَد"
                },
            ],
            [
                {
                word:"آرِزو",
                syla:"آ + رِ + زو"
                },
                {
                word:"دَست",
                syla:""
                },
                {
                word:"پِدَر",
                syla:"پِ + دَر"
                },
                {
                word:"را",
                syla:""
                },
                {
                word:"بوسید.",
                syla:"بو + سید"
                },
            ],
            [
                {
                word:"شَب",
                syla:""
                },
                {
                word:"سَرد",
                syla:""
                },
                {
                word:"شُد.",
                syla:""
                },
            ],
            [
                {
                word:"او",
                syla:""
                },    
                {
                word:"سیب",
                syla:""
                },
                {
                word:"سُرخ",
                syla:""
                },
                {
                word:"دارَد.",
                syla:"دا + رَد"
                },
            ],
        ]
    },
    {
    // buttonTargetId: "taughtLettersSet1",
    id:5,
    titleHead: "تا حرف ذ بخوانیم ",
    titleColor: "rgb(19, 108, 107)",
    sylabelBg: "rgb(212, 137, 235)",
    sentenceRow : [
    [{word:"پِدَر",syla:"پِ+دَر"},{word:"باد",syla:"با+د"},{word:"را",syla:"را"},{word:"دید.",syla:"دی+د"}],
    [{word:"جوجِه",syla:"جو+جه"},{word:"چای",syla:"چا+ی"},{word:"را",syla:"را"},{word:"خورد.",syla:"خور+د"}],
    [{word:"بوتِه",syla:"بو+ته"},{word:"دَر",syla:"دَر"},{word:"باد",syla:"با+د"},{word:"چَرخید.",syla:"چر+خی+د"}],
    [{word:"تیپ",syla:"تی+پِ"},{word:"بَچِه",syla:"بَ+چه"},{word:"جالِب",syla:"جا+لِب"},{word:"بود.",syla:"بو+د"}],
    [{word:"پُتک",syla:"پُت+کِ"},{word:"دَر",syla:"دَر"},{word:"دَست",syla:"دَس+ت"},{word:"پِدَر",syla:"پِ+دَر"},{word:"بود.",syla:"بو+د"}],
    [{word:"اَبر",syla:"اَ+بر"},{word:"چوبی",syla:"چو+بی"},{word:"دیدَم!",syla:"دی+دَ+م"}],
    [{word:"بی‌تاب",syla:"بی+تاب"},{word:"بودَم.",syla:"بو+دَ+م"}],
    [{word:"باد",syla:"با+د"},{word:"آمَد",syla:"آ+مَـد"},{word:"وَ",syla:"وَ"},{word:"چادُر",syla:"چا+دُر"},{word:"را",syla:"را"},{word:"بُرد.",syla:"بُر+د"}]
    ]
    },
    {
        // buttonTargetId:"testSylabe5",
        id:6,
        titleHead:"تا حرف ع بخوانیم",
        titleColor:"rgb(108, 19, 105)",
        sylabelBg:"rgb(190, 36, 105)",
        sentenceRow : [
        [{word:"ساعَت",syla:"سا+عَت"},{word:"عاشورا",syla:"عا+شو+را"},{word:"عَبد",syla:""},{word:"عابِد",syla:"عا+بِد"},{word:"عِبادَت",syla:"عِ+با+دَت"}],
        [{word:"عادَت",syla:"عا+دَت"},{word:"عاجِز",syla:"عا+جِز"},{word:"عاج",syla:""},{word:"عادی",syla:"عا+دی"},{word:"عُبور",syla:"عُ+بور"}],
        [{word:"عابِر",syla:"عا+بِر"},{word:"عِبارَت",syla:"عِ+با+رَت"},{word:"عَدَد",syla:"عَ+دَد"},{word:"عَدَس",syla:"عَ+دَس"},{word:"عَذاب",syla:"عَ+ذاب"}],
        [{word:"عَجَب",syla:"عَ+جَب"},{word:"عاری",syla:"عا+ری"},{word:"عَصا",syla:"عَ+صا"},{word:"عَروس",syla:"عَ+روس"},{word:"عَزیز",syla:"عَ+زیز"}],
        [{word:"تاسوعا",syla:"تا+سو+عا"},{word:"دُعا",syla:"دُ+عا"},{word:"سُرعَت",syla:"سُر+عَت"},{word:"شاعِر",syla:"شا+عِر"},{word:"اَعداد",syla:"اَع+داد"}],
        [{word:"مادَر",syla:"ما+دَر"},{word:"سوپ",syla:""},{word:"عَدَس",syla:"عَ+دَس"},{word:"خوشمَزِه",syla:"خوش+مَ+زِه"},{word:"پُخت.",syla:""}],
        [{word:"سُرعَت",syla:"سُر+عَت"},{word:"نور",syla:""},{word:"زیاد",syla:"زی+یاد"},{word:"اَست.",syla:""}],
        [{word:"عَروس",syla:"عَ+روس"},{word:"وَ",syla:""},{word:"داماد",syla:"دا+ماد"},{word:"خوشحال",syla:"خوش+حال"},{word:"بودَند.",syla:"بو+دَند"}],
        [{word:"ما",syla:""},{word:"عَدَد",syla:"عَ+دَد"},{word:"پَنج",syla:""},{word:"را",syla:""},{word:"دوست",syla:""},{word:"داریم.",syla:"دا+ریم"}],
        [{word:"عادَت",syla:"عا+دَت"},{word:"بِه",syla:""},{word:"وَرزِش",syla:"وَر+زِش"},{word:"خوب",syla:""},{word:"اَست.",syla:""}],
        [{word:"عَدَس",syla:"عَ+دَس"},{word:"سَرشار",syla:"سَر+شار"},{word:"اَز",syla:""},{word:"ویتامین",syla:"وی+تا+مین"},{word:"اَست.",syla:""}]
        ]
    },
    {
        // buttonTargetId:"testSylabe6",
        id:7,
        titleHead:"تا حرف ق بخوانیم",
        titleColor:"rgb(21, 19, 108)",
        sylabelBg:"rgb(139, 36, 190)",
        // sent
        sentenceRow: [
        [{ word: "با‌ر‌ا‌ن", syla: "با + ران" },{ word: "شَب", syla: "شب" },{ word: "آ‌را‌م", syla: "آ + رام" },{ word: "بود", syla: "بود" }],
        [{ word: "پِدَر", syla: "پِ + دَر" },{ word: "تاب", syla: "تاب" },{ word: "را", syla: "را" },{ word: "بَردا‌شت", syla: "بَرد + داشت" }],
        [{ word: "سارا", syla: "سا + را" },{ word: "چوب", syla: "چوب" },{ word: "خُشک", syla: "خُشک" },{ word: "را", syla: "را" },{ word: "سو‌زا‌ند", syla: "سو + زاند" }],
        [{ word: "آب", syla: "آب" },{ word: "بی‌بو", syla: "بی + بو" },{ word: "اَست", syla: "اَست" }],
        [{ word: "باد", syla: "باد" },{ word: "بَر", syla: "بَر" },{ word: "سَر", syla: "سَر" },{ word: "شاخ", syla: "شاخ" },{ word: "دِرَخت", syla: "دِ + رَخت" },{ word: "چَر‌خید", syla: "چَر + خید" }],
        [{ word: "حُبا‌بی", syla: "حُ + با + بی" },{ word: "بَر", syla: "بَر" },{ word: "آب", syla: "آب" },{ word: "نِشَست", syla: "نِ + شَست" }],
        [{ word: "دُختَر", syla: "دُخ + تَر" },{ word: "چَتر", syla: "چَتر" },{ word: "را", syla: "را" },{ word: "بَردا‌شت", syla: "بَرد + داشت" }],
        [{ word: "صَدا", syla: "صَ + دا" },{ word: "دَر", syla: "دَر" },{ word: "چاه", syla: "چاه" },{ word: "پَخش", syla: "پَخش" },{ word: "شُد", syla: "شُد" }],
        [{ word: "صُبحِ", syla: "صُبحِ" },{ word: "پاک", syla: "پاک" },{ word: "وَ", syla: "وَ" },{ word: "روشَن", syla: "روْ + شَن" },{ word: "بود", syla: "بود" }],
        [{ word: "شیشِه", syla: "شی + شِه" },{ word: "بَر", syla: "بَر" },{ word: "سَنگ", syla: "سَنگ" },{ word: "خورد", syla: "خوْرد" },{ word: "وَ", syla: "وَ" },{ word: "شِکَست", syla: "شِ + کَسْت" }],
        [{ word: "چِراغ", syla: "چِ + راغ" },{ word: "چو‌بی", syla: "چو + بی" },{ word: "بَر", syla: "بَر" },{ word: "طا‌قچِه", syla: "طا + ق + چِه" },{ word: "بود", syla: "بود" }],
        [{ word: "بُطری", syla: "بُط + ری" },{ word: "پُر", syla: "پُر" },{ word: "اَز", syla: "اَز" },{ word: "آبِ", syla: "آ + بِ" },{ word: "سَرد", syla: "سَرد" },{ word: "اَست", syla: "اَست" }],
        [{ word: "پِسَر", syla: "پِ + سَر" },{ word: "با", syla: "با" },{ word: "پِدَر", syla: "پِ + دَر" },{ word: "بِه", syla: "بِه" },{ word: "رود", syla: "رود" },{ word: "رَفت", syla: "رَفت" }],
        [{ word: "حِس", syla: "حِس" },{ word: "شادی", syla: "شا+دی" },{ word: "دَر", syla: "دَر" },{ word: "دِل", syla: "دِل" },{ word: "نِشَست", syla: "نِ + شَسْت" }],
        [{ word: "باد", syla: "باد" },{ word: "صَدا", syla: "صَ + دا" },{ word: "را", syla: "را" },{ word: "بُرد", syla: "بُرد" }],
        [{ word: "صَبر", syla: "صَبْر" },{ word: "دارو‌یِ", syla: "دا + رو + یِ" },{ word: "دَرد", syla: "دَرْد" },{ word: "اَست", syla: "اَست" }],
        [{ word: "شَب", syla: "شَب" },{ word: "سِتا‌رِه‌ها", syla: "سِ + تا + ره + ها" },{ word: "را", syla: "را" },{ word: "دید", syla: "دید" }],
        [{ word: "دَر", syla: "دَر" },{ word: "حَیا‌ط", syla: "حَ + یا + ط" },{ word: "بُط", syla: "بُط" },{ word: "پَر", syla: "پَر" },{ word: "زَد", syla: "زَد" }],
        [{ word: "ضَربِ", syla: "ضَر + بِ" },{ word: "سا‌ز", syla: "سا + ز" },{ word: "شَب", syla: "شَب" },{ word: "را", syla: "را" },{ word: "پُر", syla: "پُر" },{ word: "کَرد", syla: "کَرد" }],
        [{ word: "پَر‌تو", syla: "پَر + تو" },{ word: "خُورشید", syla: "خور + شید" },{ word: "بَر", syla: "بَر" },{ word: "چِهرَه‌اش", syla: "چِه + رَه + اش" },{ word: "تا‌بید", syla: "تا + بید" }],
        [{ word: "دُختَر", syla: "دُخ + تَر" },{ word: "چَشمان", syla: "چَش + مان" },{ word: "خود", syla: "خود" },{ word: "را", syla: "را" },{ word: "شُسْت", syla: "شُسْت" }],
        [{ word: "طَیِّب", syla: "طَ + یِّب" },{ word: "وَ", syla: "وَ" },{ word: "پاک", syla: "پاک" },{ word: "باش", syla: "باش" }],
        [{ word: "شور", syla: "شور" },{ word: "دَر", syla: "دَر" },{ word: "دِلِ", syla: "دِ + لِ" },{ word: "پِدَر", syla: "پِ + دَر" },{ word: "بود", syla: "بود" }],
        [{ word: "زیر", syla: "زیْر" },{ word: "چَتر", syla: "چَتْر" },{ word: "بارا‌ن", syla: "با + ران" },{ word: "صَدا", syla: "صَ + دا" },{ word: "نداشت", syla: "نَ + داشت" }],
        [{ word: "بازیِ", syla: "با + زیِ" },{ word: "با", syla: "با" },{ word: "توپ", syla: "توپ" },{ word: "آغاز", syla: "آ + غاز" },{ word: "شُد", syla: "شُد" }],
        ]

    },
    {
        // buttonTargetId:"testSylabe7",
        id:8,
        titleHead:"تا حرف ن بخوانیم",
        titleColor:"rgb(108, 19, 107)",
        sylabelBg:"rgb(190, 36, 85)",
        sentenceRow: [
        [{ word:"مَن", syla:"" },{ word:"نان", syla:"" },{ word:"تازِه", syla:"" },{ word:"دوست", syla:"" },{ word:"دارَم.", syla:"" }],
        [{ word:"مادَر", syla:"" },{ word:"کَمی", syla:"" },{ word:"نَمک", syla:"" },{ word:"به", syla:"" },{ word:"غَذا", syla:"" },{ word:"زَد.", syla:"" }],
        [{ word:"نَرگِس", syla:"" },{ word:"یِک", syla:"" },{ word:"گُل", syla:"" },{ word:"زیباست.", syla:"" }],
        [{ word:"نَهَنگ", syla:"" },{ word:"دَر", syla:"" },{ word:"دَریا", syla:"" },{ word:"زِندِگی", syla:"" },{ word:"می کُنَد.", syla:"" }],
        [{ word:"پِدَرَم", syla:"" },{ word:"بَرایَم", syla:"" },{ word:"یِک", syla:"" },{ word:"کُلاه", syla:"" },{ word:"نَمَدی", syla:"" },{ word:"خَرید.", syla:"" }],
        [{ word:"مادَر", syla:"" },{ word:"مَرا", syla:"" },{ word:"نَوازِش", syla:"" },{ word:"کَرد.", syla:"" }],
        [{ word:"پَرَنده", syla:"" },{ word:"نوک", syla:"" },{ word:"کوچَکی", syla:"" },{ word:"دارَد.", syla:"" }],
        [{ word:"بَچِه", syla:"" },{ word:"به", syla:"" },{ word:"ماه", syla:"" },{ word:"نِگاه", syla:"" },{ word:"کَرد.", syla:"" }],
        [{ word:"او", syla:"" },{ word:"از", syla:"" },{ word:"نَردِبان", syla:"" },{ word:"بالا", syla:"" },{ word:"رَفت.", syla:"" }],
        [{ word:"این", syla:"" },{ word:"اَنگُشتَر", syla:"" },{ word:"اَز", syla:"" },{ word:"نُقرِه", syla:"" },{ word:"اَست.", syla:"" }],
        [{ word:"مَن", syla:"" },{ word:"آبمیوِه", syla:"" },{ word:"دوست", syla:"" },{ word:"دارَم.", syla:"" }],
        [{ word:"حالا", syla:"" },{ word:"نوبَتِ", syla:"" },{ word:"توست.", syla:"" }],
        [{ word:"کِلاس", syla:"" },{ word:"دَه", syla:"" },{ word:"نَفَر", syla:"" },{ word:"شاگِرد", syla:"" },{ word:"دارَد.", syla:"" }],
        [{ word:"مَن", syla:"" },{ word:"کَفش", syla:"" },{ word:"نو", syla:"" },{ word:"خَریدَم.", syla:"" }],
        [{ word:"مادَر", syla:"" },{ word:"نِگَرانِ", syla:"" },{ word:"مَن", syla:"" },{ word:"بود.", syla:"" }],
        [{ word:"خانِه", syla:"" },{ word:"ما", syla:"" },{ word:"نَزدیک", syla:"" },{ word:"پارک", syla:"" },{ word:"اَست.", syla:"" }],
        [{ word:"آتَش نِشان", syla:"" },{ word:"کودَک", syla:"" },{ word:"را", syla:"" },{ word:"نجات", syla:"" },{ word:"داد.", syla:"" }],
        ]

    },
    {
      id: 9,
      titleHead: "کلاس G",
      titleColor: "rgba(58, 210, 111, 1)",
      sylabelBg: "rgba(36, 190, 190, 1)",
      sentenceRow: [
        [{ word: "بابا", syla: "با + با" }, { word: "آمَد.", syla: "آ + مَد" }],
        [{ word: "مادَر", syla: "ما + دَر" }, { word: "پُخت.", syla: "پُخت" }],
        [{ word: "بابَک", syla: "با + بَک" }, { word: "شاد", syla: "شاد" }, { word: "اَست.", syla: "اَست" }],
        [{ word: "مَت", syla: "مَت" }, { word: "پَد", syla: "پَد" }, { word: "داد.", syla: "داد" }],
        [{ word: "شَب", syla: "شَب" }, { word: "تار", syla: "تار" }, { word: "است.", syla: "اَست" }],
        [{ word: "پِدَر", syla: "پِ + دَر" }, { word: "آمَد.", syla: "آ + مَد" }],
        [{ word: "مادَر", syla: "ما + دَر" }, { word: "دَست", syla: "دَست" }, { word: "داد.", syla: "داد" }],
        [{ word: "بابا", syla: "با + با" }, { word: "پَت", syla: "پَت" }, { word: "را", syla: "را" }, { word: "بُرد.", syla: "بُرد" }],
        [{ word: "کُمُد", syla: "کُ + مُد" }, { word: "پُر", syla: "پُر" }, { word: "بود.", syla: "بود" }],
        [{ word: "مَت", syla: "مَت" }, { word: "شاد", syla: "شاد" }, { word: "شُد.", syla: "شُد" }],
        [{ word: "پَدَر", syla: "پَ + دَر" }, { word: "آب", syla: "آب" }, { word: "داد.", syla: "داد" }],
        [{ word: "مادَر", syla: "ما + دَر" }, { word: "بوس", syla: "بوس" }, { word: "داد.", syla: "داد" }],
        [{ word: "بابَک", syla: "با + بَک" }, { word: "تاب", syla: "تاب" }, { word: "را", syla: "را" }, { word: "بَست.", syla: "بَست" }],
        [{ word: "شَب", syla: "شَب" }, { word: "آرام", syla: "آ + رام" }, { word: "است.", syla: "اَست" }],
      ],
    },

  ];

  const currentDataset = datasets.find((ds) => ds.id === selectedDatasetId) || datasets[0];

  const handleSelect = (word) => {
    setSelectedWord(word);
    setSheetOpen(true); // open bottom sheet on mobile when selecting
    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    setAnimation(randomAnim);
  };

  // inject small css for responsive behaviors (keeps component self-contained)
  useEffect(() => {
    const css = `
      .main-box{
        background: linear-gradient(135deg, #ecff74bd, #0d983b66);
        padding:3px;
      }
      /* card appearance and hover for pointer devices */
      .syl-card {
        min-width: 100px;
        max-width: 140px;
        border-radius: 18px;
        transition: transform .18s ease, box-shadow .18s ease;
        user-select: none;
      }
      .syl-card:active { transform: translateY(2px); }
      @media (hover: hover) and (pointer: fine) {
        .syl-card:hover { transform: translateY(-6px); box-shadow: 0 10px 20px rgba(0,0,0,0.12); }
      }

      /* horizontal scroll row for small screens */
      .syl-row {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 6px;
      }
      .syl-row .syl-card { display: inline-block; margin-right: 2px; }

      /* remove scrollbar gap on some browsers */
      .syl-row::-webkit-scrollbar { height: 8px; }
      .syl-row::-webkit-scrollbar-thumb { border-radius: 10px; background: rgba(0,0,0,0.12); }

      /* bottom sheet for small screens */
      .bottom-sheet {
        display: none;
      }
      @media (max-width: 767.98px) {
        .desktop-right { display: none !important; } /* hide right column on mobile */
        .bottom-sheet {
          display: flex;
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0px;
          z-index: 1050;
          border-top-left-radius: 14px;
          border-top-right-radius: 14px;
          box-shadow: 0 -8px 30px rgba(0,0,0,0.18);
          transition: transform .28s cubic-bezier(.2,.9,.2,1);
        }
        .bottom-sheet.closed { transform: translateY(86%); } /* mostly hidden bar */
        .bottom-sheet.open { transform: translateY(0%); } /* visible */
        .sheet-handle {
          width: 46px;
          height: 6px;
          border-radius: 12px;
          background: rgba(255,255,255,0.5);
          margin-bottom: 10px;
        }
        .sheet-content {
          padding: 12px;
          width: 100%;
        }
        .sheet-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .syl-card {
          min-width: 70px;
          // max-width: 80px;
          border-radius: 18px;
          transition: transform .18s ease, box-shadow .18s ease;
          user-select: none;
        }

      }
      /* ensure sticky on desktop works nicely */
      @media (min-width: 768px) {
        .bottom-sheet { display: none !important; }
      }
    `;
    const styleTag = document.createElement("style");
    styleTag.setAttribute("data-from", "SylabeWords");
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <section className="mt-5 rounded-3 main-box" dir="rtl">
      {/* dataset buttons */}
      <div className="my-4 d-flex flex-wrap gap-2 justify-content-center">
        {datasets.map((ds) => (
          <button
            key={ds.id}
            className={`btn ${selectedDatasetId === ds.id ? "btn-primary" : "btn-outline-primary"} btn-lg`}
            onClick={() => { setSelectedDatasetId(ds.id); setSelectedWord(""); setSheetOpen(false); }}
            aria-pressed={selectedDatasetId === ds.id}
          >
            {ds.titleHead}
          </button>
        ))}
      </div>

      <div className="row g-4 mt-3">
        {/* Left: sentences - occupies full width on mobile */}
        <div className="col-md-7">
          <h2
            className="text-center text-light py-3 rounded-3 shadow"
            style={{ backgroundColor: currentDataset.titleColor || "#6c5ce7" }}
          >
            {currentDataset.titleHead}
          </h2>

          <div className="d-flex flex-column gap-3 mt-4">
            {currentDataset.sentenceRow.map((sentence, rowIndex) => (
              <div
                key={rowIndex}
                className="syl-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "6px 6px",
                }}
                aria-label={`ردیف جمله ${rowIndex + 1}`}
              >
                {sentence.map((item, wordIndex) => (
                  <button
                    key={wordIndex}
                    className="card text-center  syl-card shadow-sm border-0 "
                    style={{
                      background: "linear-gradient(135deg, #74b9ff, #81ecec)",
                      color: "#7a2222ff",
                      minHeight: "60px",
                      flex: "0 0 auto",
                    }}
                    onClick={() => handleSelect(item.syla || item.word)}
                    aria-label={`انتخاب کلمه ${item.word}`}
                  >
                    <div className="card-body d-flex justify-content-center align-items-center p-1" dir="rtl">
                      <h5 className="fw-bold m-0" style={{ fontSize: "20px" }}>{item.word}</h5>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right: desktop sticky display */}
        <div className="col-md-5 desktop-right">
          <div
            className="d-flex flex-column justify-content-center align-items-center shadow-lg rounded-4 p-4"
            style={{
              minHeight: "350px",
              background: currentDataset.sylabelBg || "#00cec9",
              position: "sticky",
              top: "20px",
            }}
            aria-live="polite"
          >
            {selectedWord ? (
              <h1
                key={selectedWord + animation}
                className={`display-2 fw-bold text-light animate__animated ${animation}`}
                style={{ fontSize: "3.2rem", textAlign: "center", lineHeight: 1.05 }}
              >
                {selectedWord}
              </h1>
            ) : (
              <span className="fs-5 text-light">یک کلمه را انتخاب کن ✨</span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom sheet for mobile */}
      <div
        className={`bottom-sheet ${sheetOpen ? "open" : "closed"}`}
        role="region"
        aria-label="نمایش سیلاب‌ها"
        style={{ background: currentDataset.sylabelBg || "#00cec9" }}
      >
        <div className="sheet-content d-flex flex-column" style={{ width: "100%" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100%", paddingTop: 8 }}
          >
            <div className="sheet-handle" aria-hidden="true"></div>
          </div>

          <div className="sheet-preview d-flex align-items-center gap-2">
            <div style={{ flex: 1 }}>
              {selectedWord ? (
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="small text-white-50">انتخاب شده</div>
                      <div className="fw-bold text-white" style={{ fontSize: "1.4rem" }}>{selectedWord}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-white-50">یک کلمه را انتخاب کن ✨</div>
              )}
            </div>

            <div>
              <button
                className="btn btn-sm btn-light"
                onClick={() => setSheetOpen((s) => !s)}
                aria-expanded={sheetOpen}
                aria-controls="sheet-full"
              >
                {sheetOpen ? "بستن" : "نمایش"}
              </button>
            </div>
          </div>

          {/* expanded content area (only visible when open) */}
          <div
            id="sheet-full"
            style={{
              marginTop: 10,
              display: sheetOpen ? "block" : "none",
            }}
          >
            {selectedWord && (
              <div className={`pb-3 animate__animated ${animation}`} style={{ textAlign: "center" }}>
                <div className="pb-4" style={{ fontSize: "3.2rem", fontWeight: 800, color: "white" }}>{selectedWord}</div>
              </div>
            )}

            {/* optional: quick list of a few tips or buttons */}
            {/* <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-sm btn-light flex-grow-1"
                onClick={() => {
                  // example action: clear selection
                  setSelectedWord("");
                  setSheetOpen(false);
                }}
              >
                پاک کردن
              </button>
              <button
                className="btn btn-sm btn-outline-light flex-grow-1"
                onClick={() => {
                  // keep selection but close sheet
                  setSheetOpen(false);
                }}
              >
                بستن
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
