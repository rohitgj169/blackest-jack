(this["webpackJsonpblackest-jack"]=this["webpackJsonpblackest-jack"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(21),r=c.n(s),l=(c(27),c(19)),u=(c(28),c(2)),i=c(18),j=c(7),o=(c(29),c(9)),b=(c(30),c(31),c(1));function d(e){var t=e.card;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h2",{className:"card-suit-top",children:t.suit}),Object(b.jsx)("h1",{className:"card-value",children:t.value}),Object(b.jsx)("h2",{className:"card-suit-bottom",children:t.suit})]})}function h(e){var t=e.playerDeck,c=e.playerTotal,a=e.playerBalance,n=e.betAmount;return Object(b.jsx)("div",{className:"Player",children:Object(b.jsxs)("div",{className:"card-bar",children:[Object(b.jsx)("ul",{className:"card-slots",children:t.length?t.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)(d,{card:e})},t)})):null}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Bet Amount: ",n]}),Object(b.jsxs)("p",{children:["Balance: ",a]}),Object(b.jsxs)("p",{children:["Total: ",c]})]})]})})}c(33);function O(e){var t=e.dealerDeck,c=e.computerBalance,a=e.currentPlayer;return Object(b.jsx)("div",{className:"Dealer",children:Object(b.jsxs)("div",{className:"card-bar",children:[Object(b.jsx)("ul",{className:"dealer-card-slots",children:t.length?t.map((function(e,t){return Object(b.jsx)("li",{className:1===a?"dealer-card-".concat(t):" ",children:Object(b.jsx)(d,{card:e})},t)})):null}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Balance: ",c]})})]})})}c(34);function f(e){e.deck;var t=e.drawCard,c=e.stand,a=(e.constructDeck,e.increaseBet),n=e.currentPlayer;return Object(b.jsxs)("div",{className:"Deck",children:[Object(b.jsxs)("div",{className:"deck-icon",onClick:function(){return t(n)},children:["\ud83c\udccf",Object(b.jsx)("p",{className:"deck-text",children:"Deal/Hit"})]}),Object(b.jsxs)("div",{className:"stand-icon",onClick:c,children:["\ud83e\udd1a",Object(b.jsx)("p",{className:"stand-text",children:"Stand"})]}),Object(b.jsxs)("div",{className:"bet-icon",onClick:a,children:["\ud83d\udcb8",Object(b.jsx)("p",{className:"bet-text",children:"Bet"})]})]})}c(35);function x(e){var t=e.gameStatus,c=e.outcome,a=e.constructDeck;return Object(b.jsx)("div",{children:1!==t?Object(b.jsxs)("div",{className:"game-outcome",children:[c,Object(b.jsx)("div",{onClick:a,className:"next-round",children:"Next Round"})]}):null})}var m=c(6),v=c.n(m);function k(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(j.a)(s,2),l=r[0],u=r[1],d=Object(a.useState)([]),m=Object(j.a)(d,2),k=m[0],p=m[1],N=Object(a.useState)(1),g=Object(j.a)(N,2),S=g[0],y=g[1],B=Object(a.useState)(1),C=Object(j.a)(B,2),D=C[0],w=C[1],E=Object(a.useState)(""),J=Object(j.a)(E,2),P=J[0],A=J[1],T=Object(a.useState)(0),K=Object(j.a)(T,2),W=K[0],H=K[1],I=Object(a.useState)(0),M=Object(j.a)(I,2),Q=M[0],R=M[1],L=Object(a.useState)(!1),Y=Object(j.a)(L,2),q=Y[0],z=Y[1],F=Object(a.useState)(10),G=Object(j.a)(F,2),U=G[0],V=G[1],X=Object(a.useState)(1e3),Z=Object(j.a)(X,2),$=Z[0],_=Z[1],ee=Object(a.useState)(1e3),te=Object(j.a)(ee,2),ce=te[0],ae=te[1],ne=function(e){if(52!==c.length){var t,a=v.a.draw(c);1===e&&u((function(e){return[].concat(Object(i.a)(e),[a])})),2===e&&p((function(e){return[].concat(Object(i.a)(e),[a])})),1===e&&(!0===(t=v.a.bustCheck(l,S)).bust&&w(0),t.total),2===e&&!0===(t=v.a.bustCheck(k,S)).bust&&w(2)}else re()},se=function(){if(!q){var e=v.a.deck(),t=v.a.shuffle(e);n(t),u([]),p([]),z(!0),w(1),y(1)}},re=function(){var e=v.a.deal(c);u(e[0]),p(e[1])};return Object(a.useEffect)((function(){se()}),[]),Object(a.useEffect)((function(){var e=v.a.bustCheck(l,S);1===S&&H(e.total)}),[l]),Object(a.useEffect)((function(){var e=v.a.bustCheck(l,S);2===S&&R(e.total)}),[k]),Object(a.useEffect)((function(){0===D&&(A("Dealer Wins"),ae(ce+U),_($-U)),2===D&&(A("You Win"),ae(ce-U),_($+U)),3===D&&A("Draw"),1===D&&A("In Progress")}),[q,D]),Object(a.useEffect)((function(){v.a.bustCheck(l,S).bust&&(w(0),z(!1))}),[W]),Object(a.useEffect)((function(){if(1!==S&&2===S){var e=v.a.bustCheck(k,S);if(Q!==e.total&&R(e.total),e.total>21&&(w(2),z(!1)),e.total>=17&&e.total<=21&&(Q===W&&(w(3),z(!1)),Q>W&&(w(0),z(!1)),Q<W&&(w(2),z(!1))),e.total<17)return void ne(2)}}),[c,S,k,Q]),Object(b.jsxs)("div",{className:"battle-container",children:[Object(b.jsx)(o.b,{className:"home-link",to:"/home",children:"Home"}),Object(b.jsx)(O,{dealerDeck:k,computerBalance:ce,currentPlayer:S}),Object(b.jsx)(f,{deck:c,drawCard:ne,stand:function(){1===S&&y(2)},constructDeck:se,increaseBet:function(){V((function(e){return e+10}))},currentPlayer:S}),Object(b.jsx)(h,{playerDeck:l,playerTotal:W,betAmount:U,playerBalance:$}),Object(b.jsx)(x,{className:"game-outcome",gameStatus:D,outcome:P,constructDeck:se})]})}c(44);function p(){return Object(b.jsxs)("div",{className:"landing-page-container",children:[Object(b.jsx)(o.b,{className:"battle-link",to:"/battle",children:"The Blackest Jack"}),Object(b.jsxs)("div",{className:"description",children:["Welcome to Blackest Jack, a blackjack game created by ",Object(b.jsx)("a",{href:"https://github.com/mattius9",children:"Matthew Krasucki"})," and ",Object(b.jsx)("a",{href:"http://rohitjacob.tech/",children:"Rohit Jacob"})]})]})}var N=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"/battle",render:function(e){return Object(b.jsx)(k,Object(l.a)({},e))}}),Object(b.jsx)(u.b,{path:"/home",render:function(e){return Object(b.jsx)(p,Object(l.a)({className:"LandingPage"},e))}}),Object(b.jsx)(u.a,{to:"/home"})]})})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(N,{})})}),document.getElementById("root"))},6:function(e,t,c){var a=c(36);function n(e,t){this.value=e,this.suit=t}function s(e){return e.pop()}e.exports={deck:function(){this.values=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],this.suits=["\u2663","\u2666","\u2665","\u2660"];for(var e=[],t=0;t<this.suits.length;t++)for(var c=0;c<this.values.length;c++)e.push(new n(this.values[c],this.suits[t]));return e},shuffle:function(e){return a(e)},draw:s,deal:function(e){var t=[],c=[];return t.push(s(e)),c.push(s(e)),t.push(s(e)),c.push(s(e)),[t,c]},bustCheck:function(e,t){var c=[],a=0;return e.forEach((function(e){"A"===e.value?(a+=1,c.push(11)):["K","Q","J"].indexOf(e.value)>=0?a+=10:a+=1*e.value})),a>21?{total:a,bust:!0}:a<12&&c.length>0?{total:a+=10,bust:!1}:{total:a,bust:!1}}}}},[[45,1,2]]]);
//# sourceMappingURL=main.96267a28.chunk.js.map