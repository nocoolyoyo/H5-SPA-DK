//全局资源引入
// import "../../module/custom/flexible"

import renderPage from "../../module/custom/templates/H5-DK"    //模板引入


//静态资源对象
import Assets_imgBg from "./assets/images/bg.png";
import Assets_imgLogo from "./assets/images/logo.png";
import Assets_imgContentHead from "./assets/images/content-head.png";
import Assets_imgContentBody from "./assets/images/content-body.png";
import Assets_imgContentFoot from "./assets/images/content-foot.png";

//渲染页面
renderPage("body", {
    imgBg: Assets_imgBg,
    imgLogo: Assets_imgLogo,
    imgContentHead: Assets_imgContentHead,
    imgContentBody: Assets_imgContentBody,
    imgContentFoot: Assets_imgContentFoot,

    txtTitle: "مجد المملكة",
    txtWelcome: "لقد قمت بترقية القلعة الخاصة بي في لعبة أساطير العرب إلى مستوى %{lv}، هل أنت مستعد للتنافس معي؟",
    txtDownload: "DOWNLOAD",
    txtMore: "  لعالم الأساطير",
    txtMainTitle: " حول اللعبة",
    txtContent: "أفضل الألعاب الإستراتيجية الجماعية أون لاين بتقنية ثلاثي الأبعا",
    txtPolicy: "Terms Of Serivce / Privacy Policy",
    txtCopyright: "Copyright 2017 ONEMT Limited All right reserved"
});


