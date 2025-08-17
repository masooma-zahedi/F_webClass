import React from 'react';
import { nanoid } from 'nanoid';

 let infoCard = [
    {
        mainPic:"/images/assetAlpha/cardAlpha/آ--04-10.jpg",
        title:"حرف الف",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-الف-1.jpg","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-الف-2.jpg","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-الف-3.jpg"],
        examplePicId:"exampleL-A1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/اَ-03-10-3.jpg",
        shortSoundId:"letterA-1",
        longSoundPic:"/images/assetAlpha/cardAlpha/06-10-24-الف-long.jpg",
        longSoundId:"letterA-2"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/ب-03-10-1.jpg",
        title:"حرف ب",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ب-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ب-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ب-3.png"],
        examplePicId:"exampleL-B1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/ب-03-10-3.jpg",
        shortSoundId:"de",
        longSoundPic:"/images/assetAlpha/cardAlpha/06-10-ب-long.jpg",
        longSoundId:"lo"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/03-10-پ-1.jpg",
        title:"حرف پ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-پ-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-پ-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-پ-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-پ-4.png",],
        examplePicId:"exampleL-P1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/3-10-03-پ.jpg",
        shortSoundId:"sw",
        longSoundPic:"/images/assetAlpha/cardAlpha/06-10-24-پ-long.jpg",
        longSoundId:"kj"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/ت-03-10-1.jpg",
        title:"حرف ت ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ت-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ت-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ت-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ت-4.png"],
        examplePicId:"examT1ت",
        shortSoundPic:"/images/assetAlpha/cardAlpha/03-10-ت-4.jpg",
        shortSoundId:"shortT1",
        longSoundPic:"/images/assetAlpha/cardAlpha/ت-long-1.jpg",
        longSoundId:"longT1"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/ث-03-10-1.jpg",
        title:"حرف ث",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ث-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ث-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ث-3.png",],
        examplePicId:"examTh1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/03-10-5-ث.jpg",
        shortSoundId:"shortTh1",
        longSoundPic:"/images/assetAlpha/cardAlpha/ث-long-1.jpg",
        longSoundId:"longTh1"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/ج-30-10-1.jpg",
        title:"حرف ج",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ج-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ج-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ج-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ج-4.png",],
        examplePicId:"exampleL-J1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/ج-03-10-2.jpg",
        shortSoundId:"letterj1",
        longSoundPic:"/images/assetAlpha/cardAlpha/ج-long-1.jpg",
        longSoundId:"letterj2"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-19-چ-1.jpg",
        title:"حرف چ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-چ-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-چ-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-چ-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-چ-4.png",],
        examplePicId:"exampleL-Ch1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/10-25-چ-1.jpg",
        shortSoundId:"letterCh-1",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-چ-long.jpg",
        longSoundId:"letterCh-2"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/ح-03-10-1.jpg",
        title:"حرف ح",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ح-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ح-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ح-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ح-4.png",],
        examplePicId:"exampleL-H1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/ح-03-10-2.jpg",
        shortSoundId:"letterH1-1",
        longSoundPic:"/images/assetAlpha/cardAlpha/ح-long-2.jpg",
        longSoundId:"letterH1-2"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/خ-03-10-1.jpg",
        title:"حرف خ ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-خ-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-خ-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-خ-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-خ-4.png",],
        examplePicId:"exampleL-Kh1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/خ-03-10-2.jpg",
        shortSoundId:"letterKH-1",
        longSoundPic:"/images/assetAlpha/cardAlpha/خ-long-1.jpg",
        longSoundId:"letterKH-2"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/د-30-10-1.jpg",
        title:"حرف د ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-د-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-د-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-د-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-د-4.png",],
        examplePicId:"exampleL-D1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/05-10-24-د-1.jpg",
        shortSoundId:"letterD-1",
        longSoundPic:"/images/assetAlpha/cardAlpha/د-long-1.jpg",
        longSoundId:"letterD-2"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/05-10-24-ذ-2.jpg",
        title:"حرف ذ ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ذ-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ذ-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ذ-3.png"],
        examplePicId:"exampleL-Zal1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/05-10-24-ذ-1.jpg",
        shortSoundId:"letterZal-1",
        longSoundPic:"/images/assetAlpha/cardAlpha/ذ-long-1.jpg",
        longSoundId:"letterZal-2"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/05-10-24-ر-2.jpg",
        title:"حرف ر ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ر-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ر-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ر-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ر-4.png",],
        examplePicId:"exampleL-R1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/05-10-24-ر-1.jpg",
        shortSoundId:"letterR-1",
        longSoundPic:"/images/assetAlpha/cardAlpha/ر-long-1.jpg",
        longSoundId:"letterR-2"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/05-10-24-ز-2.jpg",
        title:"حرف ز ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ز-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ز-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ز-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ز-4.png",],
        examplePicId:"exampleL-ZZ1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/05-10-24-ز-1.jpg",
        shortSoundId:"letterZ1-1",
        longSoundPic:"/images/assetAlpha/cardAlpha/ز-long-1.jpg",
        longSoundId:"letterZ1-2"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-19-ژ-1.jpg",
        title:"حرف ژ ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ژ-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ژ-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ژ-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-ژ-4.png",],
        examplePicId:"exampleZh-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/1-05-13-ژ-Short.jpg",
        shortSoundId:"letterZh-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ژ-long.jpg",
        longSoundId:"letterZh-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/05-10-24-س-2.jpg",
        title:"حرف س ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/08-10-س-1.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-س-2.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-س-3.png","/images/assetAlpha/cardAlpha/exampleAlpha/08-10-س-4.png",],
        examplePicId:"exampleL-Sin1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/05-10-24-س-1.jpg",
        shortSoundId:"letterC1-1",
        longSoundPic:"/images/assetAlpha/cardAlpha/س-long-1.jpg",
        longSoundId:"letterC2-1"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-23-11-ش.jpg",
        title:"حرف ش ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/10-22-1-ش.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-22-2-ش.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-22-3-ش.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-22-4-ش.png",],
        examplePicId:"exampleL-Shin1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/10-23-1-ش.jpg",
        shortSoundId:"letterShin-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ش-long.jpg",
        longSoundId:"letterShin-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ص.jpg",
        title:"حرف ص ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/10-22-1-ص.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-22-2-ص.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-22-3-ص.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-22-4-ص.png",],
        examplePicId:"exampleSad-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/10-23-1-ص.jpg",
        shortSoundId:"letterSad-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ص-long.jpg",
        longSoundId:"letterSad-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ض.jpg",
        title:"حرف ض ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/10-23-1-ض.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-2-ض.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-3-ض.png",],
        examplePicId:"exampleZad-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/10-23-11-ض.jpg",
        shortSoundId:"letterZad-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ض-long.jpg",
        longSoundId:"letterZad-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ط.jpg",
        title:"حرف ط ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/10-23-1-ط.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-2-ط.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-3-ط.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-4-ط.png",],
        examplePicId:"exampleTaa-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/10-23-11-ط.jpg",
        shortSoundId:"letterTaa-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ط-long.jpg",
        longSoundId:"letterTaa-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ظ.jpg",
        title:"حرف ظ ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/10-23-1-ظ.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-2-ظ.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-3-ظ.png",],
        examplePicId:"exampleZaa-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/10-23-11-ظ.jpg",
        shortSoundId:"letterZaa-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ظ-long.jpg",
        longSoundId:"letterZaa-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ع.jpg",
        title:"حرف ع ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/10-23-1-ع.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-2-ع.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-3-ع.png","/images/assetAlpha/cardAlpha/exampleAlpha/10-23-4-ع.png","/images/assetAlpha/cardAlpha/3-04-25-ع.png"],
        examplePicId:"exampleAin-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/10-23-11-ع.jpg",
        shortSoundId:"letterAin-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ع-long.jpg",
        longSoundId:"letterAin-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-غ.jpg",
        title:"حرف غ ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-غ.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-غ.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-غ.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-غ.png",],
        examplePicId:"exampleGhain-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-1-1-غ.jpg",
        shortSoundId:"letterGhain-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-غ-long.jpg",
        longSoundId:"letterGhain-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ف.jpg",
        title:"حرف ف ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-ف.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-ف.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-ف.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-ف.png",],
        examplePicId:"exampleFa-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-2-ف-short.jpg",
        shortSoundId:"letterFa-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ف-long.jpg",
        longSoundId:"letterFa-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ق.jpg",
        title:"حرف ق ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-ق.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-ق.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-ق.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-ق.png",],
        examplePicId:"exampleGhaf-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-3-ق-short.jpg",
        shortSoundId:"letterGhaf-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ق-long.jpg",
        longSoundId:"letterGhaf-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ک.jpg",
        title:"حرف ک ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-ک.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-ک.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-ک.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-ک.png",],
        examplePicId:"exampleKaf-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-4-ک-short.jpg",
        shortSoundId:"letterKaf-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ک-long.jpg",
        longSoundId:"letterKaf-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/11-05-1-گ.jpg",
        title:"حرف گ ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-گ.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-گ.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-گ.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-گ.png",],
        examplePicId:"exampleGaf-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-5-گ-short.jpg",
        shortSoundId:"letterGaf-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-گ-long.jpg",
        longSoundId:"letterGaf-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ل.jpg",
        title:"حرف ل ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-ل.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-ل.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-ل.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-ل.png",],
        examplePicId:"exampleLam-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-6-ل-short.jpg",
        shortSoundId:"letterLam-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ل-long.jpg",
        longSoundId:"letterLam-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-م.jpg",
        title:"حرف م ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-م.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-م.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-م.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-م.png",],
        examplePicId:"exampleMim-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-7-م-short.jpg",
        shortSoundId:"letterMim-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-م-long.jpg",
        longSoundId:"letterMim-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ن.jpg",
        title:"حرف ن ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-ن.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-ن.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-ن.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-ن.png",],
        examplePicId:"exampleNoon-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-8-ن-short.jpg",
        shortSoundId:"letterNoon-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ن-long.jpg",
        longSoundId:"letterNoon-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ه.jpg",
        title:"حرف ه ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-ه.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-ه.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-ه.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-ه.png",],
        examplePicId:"exampleHaa-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-10-ه-short.jpg",
        shortSoundId:"letterHaa-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ه-long.jpg",
        longSoundId:"letterHaa-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-و.jpg",
        title:"حرف و ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-و.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-و.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-و.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-و.png",],
        examplePicId:"exampleWaw-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-9-و-short.jpg",
        shortSoundId:"letterWaw-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-و-long.jpg",
        longSoundId:"letterWaw-3"
    },
    {
        mainPic:"/images/assetAlpha/cardAlpha/10-14-24-ی.jpg",
        title:"حرف ی ",
        examplePic:["/images/assetAlpha/cardAlpha/exampleAlpha/11-1-1-ی.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-2-ی.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-3-ی.png","/images/assetAlpha/cardAlpha/exampleAlpha/11-1-4-ی.png",],
        examplePicId:"exampleYaa-1",
        shortSoundPic:"/images/assetAlpha/cardAlpha/11-05-11-ی-short.jpg",
        shortSoundId:"letterYaa-2",
        longSoundPic:"/images/assetAlpha/cardAlpha/10-19-ی-long.jpg",
        longSoundId:"letterYaa-3"
    },

]

export const CardAlphaCompo = () => {
    // console.log(infoCard[0].title);
    
  return (
    <>
        <section className='f-right mt-5' dir='rtl'>
            <div className="row" >
                {/* *** start Num 1 *** */}
                {
                    infoCard.map((letter,index)=>{
                        // console.log(index);
                        return(
                            <>
                                <div className="col mb-3" key={index+nanoid(4)}>
                                    <div className="card" style={{width:"18rem"}}>
                                        <img src={letter.mainPic} className="card-img-top" data-bs-toggle="modal" data-bs-target={`#${letter.examplePicId}`}  alt="حرف آ" />
                                        <div className="card-body">
                                            <h5 className="card-title">{letter.title}</h5>
                                            <p className="card-text">همراه با صداهای کوتاه و کشیده</p>
                                            <a href="#" className="btn btn-primary ms-1" data-bs-toggle="modal" data-bs-target={`#${letter.shortSoundId}`}>صداهای کوتاه</a>
                                            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${letter.longSoundId}`}>صداهای کشیده</a>
                                        </div>
                                    </div> 
                                    {/*  stsrt modal - Example Letter  */}
                                    <div className="modal fade" style={{backgroundColor:' rgba(0, 0, 0, 0.619)'}} id={letter.examplePicId}  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered border border-light" style={{width: '700px'}}>
                                        <div className="modal-content bg-danger"  style={{width: '700px', minHeight:'500px'}}>
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <div className="modal-title" style={{maxiWdth: '300px', maxWidth:' 100px'}} id="staticBackdropLabel">
                                                <img src="./images/assetAlpha/cardAlpha/short-sound.jpg" className="w-100 h-100" alt="short-sound" srcSet="" />
                                            </div>
                                            </div>
                                            <div className="modal-body">
                                                {
                                                    letter.examplePic.map((exaPic,index)=>{
                                                        return(
                                                            <>
                                                                <div style={{height: '400px'}} key={index+nanoid(4)} className="mb-3">
                                                                    <img src={exaPic} className="w-100 h-100" alt={exaPic} srcSet=""/>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understoodssss</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* end modal-- Example Letter  */}

                                    {/* <!-- stsrt modal - Short Sound --> */}
                                    <div className="modal fade" id={letter.shortSoundId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content" style={{width: '700px', height: '500px'}}>
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <div className="modal-title" style={{maxWidth: '300px', maxWidth: '100px'}} id="staticBackdropLabel">
                                                <img src="./images/assetAlpha/cardAlpha/short-sound.jpg" className="w-100 h-100" alt="short-sound" srcSet="" />
                                            </div>
                                            </div>
                                            <div className="modal-body">
                                            <div>
                                                <img src={letter.shortSoundPic} className="w-100 h-100" alt="" srcSet="" />  
                                            </div>    
                                            </div>
                                            <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* <!-- end modal --> */}
                                    {/* <!-- stsrt modal - Long Sound --> */}
                                    <div className="modal fade" id={letter.longSoundId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content" style={{width: '700px', height: '500px'}}>
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <div className="modal-title" style={{maxWidth: '300px', maxWidth: '100px'}} id="staticBackdropLabel">
                                                <img src="./images/assetAlpha/cardAlpha/longSound.jpg" className="w-100 h-100" alt="short-sound" srcSet="" />
                                            </div>
                                            </div>
                                            <div className="modal-body">
                                            <div>
                                                <img src={letter.longSoundPic} className="w-100 h-100" alt="" srcSet="" />  
                                            </div>    
                                            </div>
                                            <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* <!-- end modal long Sound--> */}

                                </div>
                            </>
                        )
                        
                    })
                }
            </div>
        </section>

    </>
  )
}
