import{d as f,u as b,a as C,s as w,o as t,c as y,b as u,e as a,f as s,B as m,g as v,w as B,_ as S,r as d,h as l,i as g,j as k}from"./index.08652896.js";const V={class:"control-wrap"},x={class:"control-wrap"},I=f({__name:"CurrencyConverter",setup(h){const e=b(),n=C(),{baseValue:c,calculateValue:i}=w(e),o=p=>{e.setBaseValue(+p)};return(p,r)=>(t(),y("form",{onSubmit:r[1]||(r[1]=B(_=>o(s(c)),["prevent"])),class:"form"},[u("div",V,[a(m,{onInput:o,value:s(c),min:"0",placeholder:"0",type:"number",inputmode:"numeric"},null,8,["value"]),a(v,{value:s(e).from,options:s(n).currencyKeys,onChange:s(e).setFrom},null,8,["value","options","onChange"])]),u("button",{onClick:r[0]||(r[0]=(..._)=>s(e).switchCurrencies&&s(e).switchCurrencies(..._)),type:"button",class:"switch"}," \u21D4 "),u("div",x,[a(m,{onInput:o,value:s(i),disabled:"",type:"number",inputmode:"numeric"},null,8,["value"]),a(v,{value:s(e).to,options:s(n).currencyKeys,onChange:s(e).setTo},null,8,["value","options","onChange"])])],32))}}),$=S(I,[["__scopeId","data-v-4837c9a8"]]),K=f({__name:"ConverterView",setup(h){const e=d(!0),n=d(!1);return C().loadRates().catch(()=>{n.value=!0}).finally(()=>{e.value=!1}),(i,o)=>(t(),y("main",null,[e.value?(t(),l(g,{key:0})):n.value?(t(),l(k,{key:1})):(t(),l($,{key:2}))]))}});export{K as default};