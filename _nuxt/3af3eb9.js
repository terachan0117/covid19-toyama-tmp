(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{360:function(t,e,n){"use strict";n.r(e);var r=n(1).default.extend({props:{iconPath:{type:String,required:!1,default:""}}}),o=(n(366),n(7)),d=n(34),l=n.n(d),c=n(349),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.iconPath?e("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[this._v("\n      "+this._s(this.iconPath)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"d5283664",null);e.default=component.exports;l()(component,{VIcon:c.a})},362:function(t,e,n){var content=n(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("b35a52c0",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";n(362)},367:function(t,e,n){(e=n(18)(!1)).push([t.i,".header[data-v-d5283664]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-d5283664]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.pageTitle[data-v-d5283664]{font-size:2rem}}",""]),t.exports=e},408:function(t,e,n){var content=n(463);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("8fc537ba",content,!0,{sourceMap:!1})},462:function(t,e,n){"use strict";n(408)},463:function(t,e,n){(e=n(18)(!1)).push([t.i,".Contacts-Card{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.Contacts-Card-Table{width:100%;border-collapse:collapse}.Contacts-Card-Table th{padding:1em 0;font-size:1.4rem!important}.Contacts-Card-Table td{padding:1em 16px;font-size:1.4rem}.Contacts-Card-Table .importantContact{font-weight:600;font-size:1.6rem!important}.Contacts-Card-Table .tel ul{list-style:none;padding:0}.Contacts-Card-Table .tel li{margin:8px 0}@media screen and (min-width:769px){.Contacts-Card-Table th.tel{width:35%}.Contacts-Card-Table th,.Contacts-Card-Table tr:not(:last-child){border:none;border-bottom:thin solid rgba(0,0,0,.12)}.Contacts-Card-Table tr:last-child{border:none}}@media screen and (max-width:768px){.Contacts-Card-Table thead{display:none}.Contacts-Card-Table tbody tr{height:auto}.Contacts-Card-Table tbody tr .content{font-weight:600;border-bottom:none!important;padding-top:12px;padding-bottom:8px}.Contacts-Card-Table tbody tr .bureau{border-bottom:none!important}.Contacts-Card-Table tbody tr .tel{padding-bottom:12px}.Contacts-Card-Table tbody tr:not(:last-child){border-bottom:thin solid rgba(0,0,0,.12)}.Contacts-Card-Table td{display:block}}.Contacts-Card-Table p.caution{margin:0;font-size:1.2rem}",""]),t.exports=e},617:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(360),d=n(48),l=r.default.extend({components:{PageHeader:o.default,AppLink:d.default},data:function(){return{pc:!0}},computed:{tableAttrs:function(){return this.pc?{}:{role:"presentation"}},headingAttrs:function(){return this.pc?{}:{role:"heading","aria-level":"3"}}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.pc=window.innerWidth>768}},head:function(){return{title:this.$t("お問い合わせ先一覧")}}}),c=(n(462),n(7)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Contacts",attrs:{"aria-labelledby":"pageHeader","aria-describedby":"contactsCardTable"}},[n("page-header",{staticClass:"mb-3",attrs:{id:"pageHeader"}},[t._v("\n    "+t._s(t.$t("お問い合わせ先一覧"))+"\n  ")]),t._v(" "),n("div",{staticClass:"Contacts-Card"},[n("table",t._b({staticClass:"Contacts-Card-Table",attrs:{id:"contactsCardTable","aria-describedby":"pageHeader"}},"table",t.tableAttrs,!1),[n("thead",[n("tr",[n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("お問い合わせ内容"))+"\n          ")]),t._v(" "),n("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v(t._s(t.$t("担当")))]),t._v(" "),n("th",{staticClass:"text-center tel",attrs:{scope:"col"}},[t._v(t._s(t.$t("お問い合わせ先")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",t._b({staticClass:"content importantContact"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("新型コロナウイルス感染症の予防・検査・医療に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau importantContact"},[t._v("\n            "+t._s(t.$t("富山県 厚生部 健康課 新型コロナウイルス対策班"))+"\n          ")]),t._v(" "),n("td",{staticClass:"tel"},[n("a",{staticClass:"importantContact",attrs:{href:"tel:076-444-2176"}},[t._v("076-444-2176")]),n("br"),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n              "+t._s(t.$t("午前8時30分から午後17時15分（土日祝：午前10時から午後4時）"))+"\n            ")]),t._v(" "),n("p",{staticClass:"caution"},[t._v("\n              "+t._s(t.$t("電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。"))+"\n            ")])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content importantContact"},"td",t.headingAttrs,!1),[t._v("\n            ("+t._s(t.$t("外国人の方向け"))+") "+t._s(t.$t("新型コロナウイルス感染症の予防・検査・医療に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau importantContact"}),t._v(" "),n("td",{staticClass:"tel"},[n("a",{staticClass:"importantContact",attrs:{href:"http://www.pref.toyama.jp/cms_sec/1018/kj00021433.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("新型コロナウイルス感染症に関する相談窓口・各種情報等"))+" ("+t._s(t.$t("富山県公式ホームページ"))+")")])])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("本サイトの管理・運営に関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("寺田 一世")))]),t._v(" "),n("td",{staticClass:"tel"},[n("a",{attrs:{href:"mailto:contact&#64;tera-chan.com?subject=富山県コロナ対策サイトについて"}},[t._v("contact[at]tera-chan.com")]),n("br"),t._v(t._s(t.$t("クリックでメールソフトが起動します。直接アドレスを入力される際は、[at]を@に置換してください。")))])]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("オープンデータに関すること"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"},[t._v(t._s(t.$t("富山県 経営管理部 情報政策課 IT推進係")))]),t._v(" "),t._m(0)]),t._v(" "),n("tr",[n("td",t._b({staticClass:"content"},"td",t.headingAttrs,!1),[t._v("\n            "+t._s(t.$t("その他"))+"\n          ")]),t._v(" "),n("td",{staticClass:"bureau"}),t._v(" "),n("td",{staticClass:"tel"},[n("a",{attrs:{href:"http://www.pref.toyama.jp/sections/1118/virus/soudan.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("相談窓口一覧"))+" ("+t._s(t.$t("富山県公式ホームページ"))+")")])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"tel"},[e("a",{attrs:{href:"tel:076-444-3116"}},[this._v("076-444-3116")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:n(360).default})}}]);