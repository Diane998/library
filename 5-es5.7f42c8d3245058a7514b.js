function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{z6RY:function(e,t,n){"use strict";n.r(t),n.d(t,"MyBooksModule",(function(){return g}));var i=n("ofXK"),o=n("fXoL"),r=n("Z2Br");function c(e,t){if(1&e&&(o.Lb(0,"div",16),o.cc(1),o.Kb()),2&e){var n=o.Ub().$implicit;o.xb(1),o.ec("Status: ",n.status,"")}}function b(e,t){if(1&e){var n=o.Mb();o.Lb(0,"div",3),o.Hb(1,"img",4),o.Lb(2,"div",5),o.Lb(3,"div",6),o.cc(4),o.Kb(),o.Lb(5,"div",7),o.cc(6),o.Kb(),o.bc(7,c,2,1,"div",8),o.Kb(),o.Lb(8,"div",9),o.cc(9," Mark as: "),o.Lb(10,"div"),o.Lb(11,"div",10),o.Lb(12,"button",11),o.Sb("click",(function(e){o.Yb(n);var i=t.$implicit;return o.Ub(2).markAsUnread(e,i)})),o.cc(13," Unread "),o.Kb(),o.Hb(14,"div",12),o.Lb(15,"button",13),o.Sb("click",(function(e){o.Yb(n);var i=t.$implicit;return o.Ub(2).markAsRead(e,i)})),o.cc(16," Read "),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Lb(17,"div",14),o.Lb(18,"button",15),o.Sb("click",(function(e){o.Yb(n);var i=t.$implicit;return o.Ub(2).deleteBook(e,i)})),o.cc(19," Remove "),o.Kb(),o.Kb(),o.Kb()}if(2&e){var i=t.$implicit;o.xb(1),o.Vb("src",i.image,o.Zb),o.xb(3),o.dc(i.title),o.xb(2),o.ec("by ",i.author,""),o.xb(1),o.Vb("ngIf",i.status)}}function a(e,t){if(1&e&&(o.Jb(0),o.bc(1,b,20,4,"div",2),o.Ib()),2&e){var n=o.Ub();o.xb(1),o.Vb("ngForOf",n.books)}}function s(e,t){1&e&&(o.Lb(0,"div"),o.Lb(1,"h5"),o.cc(2,"There are no books"),o.Kb(),o.Kb())}var u,l,f,d=((u=function(){function e(t){_classCallCheck(this,e),this.firebaseService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.firebaseService.getBooks().subscribe((function(t){e.books=t}))}},{key:"deleteBook",value:function(e,t){this.firebaseService.deleteBook(t)}},{key:"markAsRead",value:function(e,t){this.firebaseService.markAsRead(t)}},{key:"markAsUnread",value:function(e,t){this.firebaseService.markAsUnread(t)}}]),e}()).\u0275fac=function(e){return new(e||u)(o.Gb(r.a))},u.\u0275cmp=o.Ab({type:u,selectors:[["app-books"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],["class","book",4,"ngFor","ngForOf"],[1,"book"],["alt","",3,"src"],[1,"book-info"],[1,"title"],[1,"author"],["class","status",4,"ngIf"],[1,"mark-as"],[1,"ui","buttons"],[1,"ui","button",3,"click"],[1,"or"],[1,"ui","positive","button",3,"click"],[1,"remove"],[1,"ui","secondary","button",3,"click"],[1,"status"]],template:function(e,t){1&e&&(o.Lb(0,"div",0),o.bc(1,a,2,1,"ng-container",1),o.bc(2,s,3,0,"div",1),o.Kb()),2&e&&(o.xb(1),o.Vb("ngIf",t.books),o.xb(1),o.Vb("ngIf",!t.books))},directives:[i.i,i.h],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,33%);grid-column-gap:.5em}.book[_ngcontent-%COMP%]{width:100%;height:auto;display:grid;grid-template-columns:38% 62%;grid-template-rows:45% 30% 25%}.title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;margin-right:.5em}.author[_ngcontent-%COMP%], .mark-as[_ngcontent-%COMP%]{grid-column:2/3}.mark-as[_ngcontent-%COMP%]{grid-row:2/3}.remove[_ngcontent-%COMP%]{grid-row:3/4;grid-column:2/3}"]}),u),v=n("tyNb"),k=[{path:"",component:d}],m=((f=function e(){_classCallCheck(this,e)}).\u0275mod=o.Eb({type:f}),f.\u0275inj=o.Db({factory:function(e){return new(e||f)},imports:[[v.d.forChild(k)],v.d]}),f),g=((l=function e(){_classCallCheck(this,e)}).\u0275mod=o.Eb({type:l}),l.\u0275inj=o.Db({factory:function(e){return new(e||l)},imports:[[i.b,m]]}),l)}}]);