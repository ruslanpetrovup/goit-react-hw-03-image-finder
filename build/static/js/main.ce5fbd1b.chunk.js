(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(3),r=a.n(s),o=a(15),l=a(13),i=a(14),m=a(17),u=a(16),d=a(0),h=function(e){var t=e.onSubmit;return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})},g=function(e){var t=e.imagesItem;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{id:e.largeImageURL,src:e.webformatURL,alt:e.name,className:"ImageGalleryItem-image"},e.id)})}))})},j=function(e){var t=e.children,a=e.modal;return Object(d.jsx)("ul",{className:"ImageGallery",id:"ImageGallery",onClick:a,children:t})},b=function(e){var t=e.src,a=e.alt,n=e.closeModal;return Object(d.jsx)("div",{className:"Overlay isHidden",onClick:n,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:t,alt:a})})})},f=a(23).default,p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={valueSeach:"",images:[],numPages:1,srcImg:""},e.onSubmit=function(t){console.log(""===e.state.valueSeach),e.state.valueSeach===t.target.children[1].value||""===t.target.children[1].value?t.preventDefault():(t.preventDefault(),e.setState({images:[],numPages:1}),e.setState({valueSeach:t.target.children[1].value}),setTimeout((function(){e.renderElem()}),300))},e.renderElem=function(){var t=e.fetchImg();setTimeout((function(){r.a.render(Object(d.jsx)(g,{imagesItem:t}),document.getElementById("ImageGallery"))}),700)},e.btnfoto=function(){e.renderElem(),setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1500)},e.fetchImg=function(){var t="https://pixabay.com/api/?q=".concat(e.state.valueSeach,"&page=").concat(e.state.numPages,"&key=22641251-454133ad8981e71bbc25a7aae&image_type=photo&orientation=horizontal&per_page=12");return f.get(t).then((function(t){var a;(a=e.state.images).push.apply(a,Object(o.a)(t.data.hits))})).then((function(){e.setState({numPages:e.state.numPages+1})})),e.state.images},e.modal=function(t){if("IMG"===t.target.nodeName){var a=document.querySelector(".Overlay");a.classList.contains&&(a.classList.remove("isHidden"),e.setState({srcImg:t.target.id}))}},e.closeModal=function(e){if("Overlay"===e.target.className){var t=document.querySelector(".Overlay");t.classList.contains&&t.classList.add("isHidden")}},e}return Object(i.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return r.a.render(Object(d.jsx)(b,{src:t.srcImg,alt:"\u041f\u043e\u0442\u043e\u043c",closeModal:this.closeModal}),document.getElementById("root2"))}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{onSubmit:this.onSubmit}),Object(d.jsx)(j,{modal:this.modal}),Object(d.jsxs)("div",{id:"root2",children:["  ",Object(d.jsx)(b,{alt:"\u041f\u043e\u0442\u043e\u043c",closeModal:this.closeModal})]}),Object(d.jsx)("div",{className:"Buttoncon",children:this.state.images.length?Object(d.jsx)("button",{className:"Button",type:"button",onClick:this.btnfoto,children:"\u0415\u0449\u0435"}):Object(d.jsx)("p",{})})]})}}]),a}(c.a.Component);a(42);r.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ce5fbd1b.chunk.js.map