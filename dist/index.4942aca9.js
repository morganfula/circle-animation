!function(){const e=document.querySelector(".circle__container__inner");let c=[...document.querySelectorAll(".circle")];c.shift(),console.log(c);let r={circleOne:{x:0,y:0},circleTwo:{x:0,y:0},circleThree:{x:0,y:0},circleFour:{x:0,y:0}},l=window.innerWidth,i=window.innerHeight,t=0,n=0;const o=(e,c,r)=>e*(1-r)+c*r;e.addEventListener("mousemove",(e=>{t=e.clientX,n=e.clientY}));const a=()=>{r.circleOne.x=o(r.circleOne.x,.2*(t-l/2),.1),r.circleOne.y=o(r.circleOne.y,.2*(n-i/2),.1),r.circleTwo.x=o(r.circleTwo.x,.2*(l/2-t),.1),r.circleTwo.y=o(r.circleTwo.y,.2*(n-i/2),.1),r.circleThree.x=o(r.circleThree.x,.2*(t-l/2),.1),r.circleThree.y=o(r.circleThree.y,.2*(i/2-n),.1),r.circleFour.x=o(r.circleFour.x,.2*(l/2-t),.1),r.circleFour.y=o(r.circleFour.y,.2*(i/2-n),.1),c[0].style.transform=`translate(-50%, -50%) translate3d(${r.circleOne.x}px, ${r.circleOne.y}px, 0)`,c[1].style.transform=`translate(-50%, -50%) translate3d(${r.circleTwo.x}px, ${r.circleTwo.y}px, 0)`,c[2].style.transform=`translate(-50%, -50%) translate3d(${r.circleThree.x}px, ${r.circleThree.y}px, 0)`,c[3].style.transform=`translate(-50%, -50%) translate3d(${r.circleFour.x}px, ${r.circleFour.y}px, 0)`,requestAnimationFrame(a)};a()}();
//# sourceMappingURL=index.4942aca9.js.map