// H5-DK的页面模板组件
//引入页面模块的样式文件
import "./scss/style.scss";
import "./scss/style.scss";

const renderPage = function (el,opts) {




let template = `
<div id="page" style="background-image: url(${opts.imgBg})">
    <header class="banner">
        <img class="logo" src="${opts.imgLogo}">
        <h4 class="title">${opts.txtTitle}</h4>
        <p class="welcome">${opts.txtWelcome}</p>
    </header>
    <main class="content">
        <div class="content-head" style="background-image: url(${opts.imgContentHead})">
               <a class="download">${opts.txtDownload}</a>
        </div>
        <div class="content-body" style="background-image: url(${opts.imgContentBody})">
        
        </div>
        <div class="content-foot" style="background-image: url(${opts.imgContentFoot})">
        
        </div>
    </main>
</div>


`;

    document.querySelector(el).innerHTML = template;

};

export default renderPage;