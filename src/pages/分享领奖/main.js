//全局资源引入
// import "../../module/custom/flexible"

import render from "../../module/custom/templates/H5-DK"    //模板引入

import languagePkg from "./language"    //语言包引入

//静态资源对象
import Assets_imgBg from "./assets/images/bg.png";
// import Assets_imgCover from "./assets/images/cover.png";
// import Assets_imgLogo from "./assets/images/logo.png";
// import Assets_imgContentHead from "./assets/images/content-head.png";
// import Assets_imgContentBody from "./assets/images/content-body.png";
// import Assets_imgContentFoot from "./assets/images/content-foot.png";
let language = navigator.language.toLowerCase();    //语言
    language = 'ar';    //暂时固定是阿语的
//渲染页面
render("body", {
    //配置类模板
    style: 'white-blue',
    language: language,
    languagePkg: languagePkg,
    //资源类模板
    assetsTemp: {
        imgBg: Assets_imgBg,
        // imgLogo: Assets_imgLogo,
        // imgContentHead: Assets_imgContentHead,
        // imgContentBody: Assets_imgContentBody,
        // imgContentFoot: Assets_imgContentFoot,
        // imgArticleCover: Assets_imgCover,
    },
    //文字类模板（以下可能语言包中有，可不添加）
    txtTemp: {
        welcome: languagePkg[language].content,
        policy: "Terms Of Serivce / Privacy Policy",
        copyright: "Copyright 2017 ONEMT Limited All right reserved",
        articleTitle: " حول اللعبة",
        articleContent: `<p>أفضل الألعاب الإستراتيجية الجماعية أون لاين بتقنية ثلاثي الأبعاد فى عام 2017</p>
                           <p>أساطير العرب" هي اللعبة الأقوى والأفضل فى التصميم من بين ألعاب الهاتف حالياً!</p>
                            <p>هيّا سارع بإثبات قوتك ومهاراتك فى اللعبة التى تجمع بين تقنية تنافس لاعب ضد اللاعب عن طريق مبني إمبراطورية خاصة به بإستراتيجية فريدة وإدارة الموارد بها.
إرشادات هامة: </p>                              
                                <p>قم بترقية مستوى الإمبراطورية ودافع عنها من الأعداء فى عالم ساحر بميزة شاشة ثلاثي الأبعاد التى تشعرك وكأنك فى الواقع. </p>
                                <p>شارك فى المعارك مع الملايين من اللاعبين من مختلف أنحاء العالم.</p>
                                <p>أتحد مع الأصدقاء الذين ستعرفهم من خلال الدردشة مع كل اللاعبين أون لاين واتخذ من البعض الآخر أعداء لك تقاتلهم وتسيطر عليهم.</p>
                                <p>بالاتحاد.
قم بتدريب الجنود فى أكثر من 60 وحدة مختلفة من أنواع الجنود.
</p><p>قم ببناء قلعتك الخاصة بك وأحرص على تقويتها.</p>
<p>حرص على إنهاء المهام فى اللعبة لكي تحصل على جوائز ثمينة تساعدك على بناء قلعة قوية. 
وسائل الاتصال بنا:</p>`
    },

    //数据类模板
    dataTemp: {
        download: {
            title: 'DOWNLOAD',
            href:"https://www.facebook.com/slateen",
        },
        moreLink: {
            title: "  لعالم الأساطير",
            href:"https://www.facebook.com/slateen",
        },

        link1: {
            title: "الصفحة الرئيسية",
            href:"http://www.asateeralarab.com",
        },
        link2: {
            title: "صفحة الفيسبوك",
            href:"https://www.facebook.com/asateer.alarab",
        },
        link3: {
            title: "تويتر",
            href:"https://twitter.com/asateer_alarab",
        }


    }

});


