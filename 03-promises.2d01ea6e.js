function e(e,o){const t=new Promise(((l,n)=>{const s=Math.random()>.3;setTimeout((()=>{s?l({position:e,delay:o}):n({position:e,delay:o})})),console.log(t)}),o);return t}document.querySelector("form").addEventListener("submit",(function(o){o.preventDefault();const t=o.target.elements;console.log(t);const l={delay:Number(t.delay.value),step:Number(t.step.value),amount:Number(t.amount.value)};console.log(l);for(let o=1;o<=l.amount;o+=1)e(o,l.delay).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),l.delay+=l.step,console.log("delay",l.delay)}));
//# sourceMappingURL=03-promises.2d01ea6e.js.map