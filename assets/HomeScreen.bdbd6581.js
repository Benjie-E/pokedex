import{r as o,u,j as s,a as e,P as I,g as p}from"./index.883552f1.js";const m=()=>{const[t,l]=o.exports.useState(""),[r,i]=o.exports.useState("I"),{data:n}=u(["pokemon"],()=>p(),{select:a=>a.filter(c=>c.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())),staleTime:1/0});return s("div",{className:"App",children:[e("input",{type:"text",value:t,onChange:a=>l(a.currentTarget.value)}),s("select",{name:"generation",onChange:a=>i(a.target.value),children:[e("option",{value:"I",children:"I"}),e("option",{value:"II",children:"II"}),e("option",{value:"III",children:"III"}),e("option",{value:"IV",children:"IV"}),e("option",{value:"V",children:"V"}),e("option",{value:"VI",children:"VI"})]}),e("div",{className:"mx-4 space-y-4 flex flex-col",children:n==null?void 0:n.map(a=>e(I,{pokemon:a,generation:r},`${a.id}`))})]})};export{m as default};