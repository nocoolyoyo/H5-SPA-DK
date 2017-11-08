// H5-DK的页面模板组件
//引入页面模块的样式文件
import "./scss/style.scss";
import IMAGE_TITLE_QUTOS_LEFT from "./image/title-qutos-left.png";
import IMAGE_TITLE_QUTOS_RIGHT from "./image/title-qutos-right.png";


import Assets_imgLogo from "./image/logo.png";
import Assets_imgArticleCover from "./image/cover.png";
import Assets_imgContentHead from "./image/content-head.png";
import Assets_imgContentBody from "./image/content-body.png";
import Assets_imgContentFoot from "./image/content-foot.png";

const render = function (el,opts) {
    let dirSet = '';
    //添加页面模板对语言阅读方向的处理
    if( opts.language === 'ar'){
        dirSet = 'dir="rtl"'
    }

let template = `
<div id="page" class="${opts.imgBg}" style="background-image: url(${opts.assetsTemp.imgBg})">
    <header class="banner">
        <img class="logo" src="${opts.assetsTemp.imgLogo||Assets_imgLogo}">
        <h4 class="title" ${dirSet}>${opts.languagePkg[opts.language].title}</h4>
        <p class="welcome" ${dirSet}>${opts.languagePkg[opts.language].welcome}</p>
    </header>
    <main class="content">
        <div class="content-head" style="background-image: url(${opts.assetsTemp.imgContentHead||
                                                                 Assets_imgContentHead})">
           <a class="download" href="${opts.dataTemp.download.href}">${ opts.dataTemp.download.title ||
                                                                        opts.languagePkg[opts.language].download}</a>
           <a class="more" href="${opts.dataTemp.moreLink.href}">${opts.dataTemp.moreLink.title}▶</a>
           <h1 class="title">
                <img src="${IMAGE_TITLE_QUTOS_LEFT}">
                <span>${opts.txtTemp.articleTitle}</span>
                <img src="${IMAGE_TITLE_QUTOS_RIGHT}">
            </h1>
        </div>
        <div class="content-body" style="background-image: url(${opts.assetsTemp.imgContentBody||
                                                                 Assets_imgContentBody})">
              <article ${dirSet}>
                <img class="cover" src="${opts.assetsTemp.imgArticleCover||Assets_imgArticleCover}">
                 ${opts.txtTemp.articleContent}
 
                <p t-if="${opts.dataTemp.link1}">
                    <span>${opts.dataTemp.link1.title}: </span>
                     <a href="${opts.dataTemp.link1.href}">${opts.dataTemp.link1.href}</a>
                </p>
                <p t-if="${opts.dataTemp.link2}">
                    <span>${opts.dataTemp.link2.title}: </span>
                     <a href="${opts.dataTemp.link2.href}">${opts.dataTemp.link2.href}</a>
                </p>
                <p t-if="${opts.dataTemp.link3}">
                    <span>${opts.dataTemp.link3.title}: </span>
                     <a href="${opts.dataTemp.link3.href}">${opts.dataTemp.link3.href}</a>
                </p>      
              </article>
        </div>
        <div class="content-foot" style="background-image: url(${opts.assetsTemp.imgContentFoot||
                                                                 Assets_imgContentFoot})">
               <div class="copyright">
                    <div>Terms Of Serivce / Privacy Policy</div>
                    <div>Copyright 2017 ONEMT Limited All right reserved</div>
               </div>
        </div>
    </main>
</div>


`;

    document.querySelector(el).innerHTML = template;

};

export default render;