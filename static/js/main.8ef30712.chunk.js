(this.webpackJsonpClickygame=this.webpackJsonpClickygame||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"id":1,"name":"cleveland","image":"https://tse1.mm.bing.net/th?id=OIP.46rloZ2nINAtUfg4rAuwXwHaFj&pid=Api&P=0&w=160&h=120"},{"id":2,"name":"Dewit","image":"http://www.geocities.ws/gabrudos/pics/homerface.jpg"},{"id":3,"name":"simpson","image":"https://i.imgflip.com/2/qqs09.jpg"},{"id":4,"name":"Michael","image":"https://vignette.wikia.nocookie.net/theoffice/images/f/f1/Michael.jpg/revision/latest/scale-to-width-down/150?cb=20170724043334"},{"id":5,"name":"Moana","image":"https://i1.wp.com/drawcentral.com/wp-content/uploads/2018/12/How-To-Draw-Moana-Main.jpg?resize=150%2C150&ssl=1"},{"id":6,"name":"Peter","image":"https://vignette.wikia.nocookie.net/parody/images/1/1b/Peter_Griffin_in_Family_Guy.jpg/revision/latest/scale-to-width-down/162?cb=20151128224031"},{"id":7,"name":"Bart","image":"https://s-cdn.serienjunkies.de/TheSimpsons/bart-simpson.jpg"},{"id":8,"name":"Stewie","image":"https://vignette.wikia.nocookie.net/familyguy/images/0/00/Stewie-04.jpg/revision/latest/scale-to-width-down/181?cb=20170803145039&path-prefix=de"}]')},,,,,,,,,,,function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(4),r=i.n(c),s=i(5),a=i(6),o=i(8),d=i(7),h=(i(13),i(0)),l=function(e){return Object(h.jsx)("div",{className:"wrapper",children:e.children})},u=(i(15),function(e){return Object(h.jsxs)("ul",{className:"nav nav-fill",children:[Object(h.jsx)("li",{className:"nav-item nav-text text-left",children:"such game."}),Object(h.jsxs)("li",{className:"nav-item nav-text text-right",children:["score: ",e.currentScore," | high score: ",e.highScore]})]})}),m=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("h5",{className:"text-center",children:e.note})})},g=function(e){return Object(h.jsx)("div",{className:"container",children:e.children})},j=(i(16),function(e){return Object(h.jsx)("div",{className:"card mx-auto",children:Object(h.jsx)("a",{onClick:function(){return e.cardClick(e.id)},children:Object(h.jsx)("img",{alt:e.name,src:e.image})})})}),p=i(2),f=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={cards:p,guessedCards:p,currentScore:0,highScore:0,note:"Don't click the same photo twice or you lose."},e.sortCards=function(){p.sort((function(e,t){return.5-Math.random()}))},e.cardClick=function(t){if(console.log(e.state.cards),console.log(e.state.guessedCards),void 0===e.state.guessedCards.find((function(e){return e.id===t})))e.setState({guessedCards:p,highScore:e.state.currentScore>e.state.highScore?e.state.currentScore:e.state.highScore,currentScore:0,note:"nope!"});else{var i=e.state.guessedCards.filter((function(e){return e.id!==t}));e.setState({guessedCards:i,currentScore:e.state.currentScore+1,note:"Good guess."})}e.sortCards()},e}return Object(a.a)(i,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(l,{children:[Object(h.jsx)(u,{currentScore:this.state.currentScore,highScore:this.state.highScore}),Object(h.jsx)(m,{note:this.state.note}),Object(h.jsx)(g,{children:this.state.cards.map((function(t){return Object(h.jsx)(j,{cardClick:e.cardClick,id:t.id,name:t.name,image:t.image},t.id)}))})]})}}]),i}(n.Component);i(17);r.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8ef30712.chunk.js.map