(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(4),s=n.n(c),r=n(17),i=n(15),l=n(16),u=n(19),d=n(18),m=n(0),h=function(e){var t=e.onSubmit;return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})},b=function(e){var t=e.imagesItem;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{id:e.largeImageURL,src:e.webformatURL,alt:e.name,className:"ImageGalleryItem-image"},e.id)})}))})},j=function(e){var t=e.children,n=e.modal;return Object(m.jsx)("ul",{className:"ImageGallery",id:"ImageGallery",onClick:n,children:t})},g=function(e){var t=e.src,n=e.alt,a=e.closeModal;return Object(m.jsx)("div",{className:"Overlay isHidden",onClick:a,children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{src:t,alt:n})})})},f=n(6),v=n.n(f),p=function(e){var t=e.btnfoto;return Object(m.jsx)("button",{className:"Button",type:"button",onClick:t,children:"\u0415\u0449\u0435"})},y=n(45).default,O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={valueSeach:"",images:[],numPages:1,srcImg:"",isLoading:!0},e.btnHidden=function(){!0===e.state.isLoading?s.a.render(Object(m.jsx)("button",{className:"Button",type:"button",onClick:e.btnfoto,children:"\u0415\u0449\u0435"}),document.querySelector(".Buttoncon")):s.a.render(Object(m.jsx)(v.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:1e4}),document.querySelector(".Buttoncon"))},e.onSubmit=function(t){e.state.valueSeach===t.target.children[1].value||""===t.target.children[1].value?t.preventDefault():(t.preventDefault(),e.setState({images:[],numPages:1}),e.setState({valueSeach:t.target.children[1].value}),setTimeout((function(){e.renderElem()}),300))},e.renderElem=function(){var t=e.fetchImg();setTimeout((function(){s.a.render(Object(m.jsx)(b,{imagesItem:t}),document.getElementById("ImageGallery"))}),700)},e.btnfoto=function(){e.renderElem(),setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1500)},e.fetchImg=function(){e.setState({isLoading:!1});var t="https://pixabay.com/api/?q=".concat(e.state.valueSeach,"&page=").concat(e.state.numPages,"&key=22641251-454133ad8981e71bbc25a7aae&image_type=photo&orientation=horizontal&per_page=12");return y.get(t).then((function(t){var n;(n=e.state.images).push.apply(n,Object(r.a)(t.data.hits))})).then((function(){e.setState({numPages:e.state.numPages+1})})).finally((function(){return e.setState({isLoading:!0})})),e.state.images},e.modal=function(t){if("IMG"===t.target.nodeName){var n=document.querySelector(".Overlay");n.classList.contains&&(n.classList.remove("isHidden"),e.setState({srcImg:t.target.id}))}},e.closeModal=function(e){if("Overlay"===e.target.className){var t=document.querySelector(".Overlay");t.classList.contains&&t.classList.add("isHidden")}},e.closeModalEsc=function(e){if("Escape"===e.code){var t=document.querySelector(".Overlay");t.classList.contains&&t.classList.add("isHidden")}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.closeModalEsc.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.closeModalEsc.bind(this)),console.log("unmounted")}},{key:"shouldComponentUpdate",value:function(e,t){return s.a.render(Object(m.jsx)(m.Fragment,{children:!1!==t.isLoading?Object(m.jsx)(p,{btnfoto:this.btnfoto}):Object(m.jsx)(v.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})}),document.getElementById("Buttoncon")),s.a.render(Object(m.jsx)(g,{src:t.srcImg,alt:"\u041f\u043e\u0442\u043e\u043c",closeModal:this.closeModal}),document.getElementById("root2"))}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{onSubmit:this.onSubmit}),Object(m.jsx)(j,{modal:this.modal}),Object(m.jsxs)("div",{id:"root2",children:["  ",Object(m.jsx)(g,{alt:"\u041f\u043e\u0442\u043e\u043c",closeModal:this.closeModal,closeModalEsc:this.closeModal})]}),Object(m.jsx)("div",{className:"Buttoncon",id:"Buttoncon"})]})}}]),n}(o.a.Component);n(64);s.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.71b270e7.chunk.js.map