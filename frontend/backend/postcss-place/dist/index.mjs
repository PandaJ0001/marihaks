import e from"postcss-value-parser";var r={preserve:!0};const t=/^place-(content|items|self)/,s=s=>("preserve"in Object(s)&&(r.preserve=Boolean(s.preserve)),{postcssPlugin:"postcss-place",Declaration:(s,{result:o})=>{t.test(s.prop.toLowerCase())&&((s,{result:o})=>{const a=s.prop.toLowerCase().match(t)[1];let l;try{l=e(s.value)}catch(e){s.warn(o,`Failed to parse value '${s.value}'. Leaving the original value intact.`)}if(void 0===l)return;let p=[];p=l.nodes.length?l.nodes.filter((e=>"word"===e.type||"function"===e.type)).map((r=>e.stringify(r))):[e.stringify(l)],s.cloneBefore({prop:`align-${a}`,value:p[0]}),s.cloneBefore({prop:`justify-${a}`,value:p[1]||p[0]}),r.preserve||s.remove()})(s,{result:o})}});s.postcss=!0;export{s as default};