// Mundo Mágico do Xadrez - lógica da página. Idealizador: Cleiton M N Silva
// Partes: imagens, tabuleiro, historinhas, quiz, jogo contra o computador e ajudante.
const IMG={"peao": "personagem-peao.webp", "rainha": "personagem-rainha.webp", "rei": "personagem-rei.webp", "bispo": "personagem-bispo.webp", "cavalo": "personagem-cavalo.webp", "torre": "personagem-torre.webp"};document.querySelectorAll("img[data-c]").forEach(i=>i.src=IMG[i.dataset.c]);
var SOM=true;
const VOZ={ia:[1.4,1],peao:[1.5,1],rainha:[1.4,1],rei:[.6,.9],bispo:[.9,1],cavalo:[1.25,1.15],torre:[.45,.9]};
const FALAS={peao:"Oi! Eu sou o Peão Valente! Ando devagarinho, mas chego bem longe!",rainha:"Olá! Eu sou a Rainha Estrela! Eu ando para todo lado!",rei:"Bem-vindos ao meu reino! Eu sou o Rei Sábio!",bispo:"Oi! Eu sou o Bispo Sorriso! Eu deslizo na diagonal!",cavalo:"Eu sou o Cavalo Faísca! Eu pulo em L! Pula, pula!",torre:"Eu sou a Torre Forte! Eu corro reto como um trem!"};
function falar(t,k){if(k!=="ia"||!SOM||!t||!window.speechSynthesis)return;try{const u=new SpeechSynthesisUtterance(String(t).replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]/gu,""));u.lang="pt-BR";const v=VOZ[k]||VOZ.rei;u.pitch=v[0];u.rate=v[1];speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
function Board(el,onClick){const sq=[],pc=Array(64).fill(null);el.innerHTML="";
for(let i=0;i<64;i++){const d=document.createElement("div"),r=i>>3,f=i&7;d.className=(r+f)%2?"d":"l";coord(d,r,f);if(onClick)d.onclick=()=>onClick(i);el.appendChild(d);sq.push(d)}
const lay=document.createElement("span");lay.className="pcl";el.appendChild(lay);
const pos=(i,e)=>{e.style.left=(i&7)*12.5+"%";e.style.top=(i>>3)*12.5+"%"};
const NOME_PECA={k:"rei",q:"rainha",r:"torre",b:"bispo",n:"cavalo",p:"peao"};
const ROTULO_PECA={k:"Rei",q:"Rainha",r:"Torre",b:"Bispo",n:"Cavalo",p:"Peão"};
const mk=(i,p)=>{
 const branca=p===p.toUpperCase(),cor=branca?"branca":"preta",nome=NOME_PECA[p.toLowerCase()];
 const e=document.createElement("img");
 e.src=`peca-${cor}-${nome}.svg`;
 e.alt=`Peça ${branca?"branca":"preta"}: ${ROTULO_PECA[p.toLowerCase()]}`;
 e.className=branca?"pw":"pb";
 e.dataset.p=p;
 pos(i,e);lay.appendChild(e);return e
};
return{set(b){lay.innerHTML="";for(let i=0;i<64;i++)pc[i]=b[i]?mk(i,b[i]):null},
move(f,t){const e=pc[f];if(!e)return;if(pc[t])pc[t].remove();pc[t]=e;pc[f]=null;e.style.zIndex=5;setTimeout(()=>{e.style.zIndex=""},360);pos(t,e)},
remove(i){if(pc[i]){pc[i].remove();pc[i]=null}},
sync(b){for(let i=0;i<64;i++){const p=b[i]||"",e=pc[i];if(!p){if(e){e.remove();pc[i]=null}}else if(!e||e.dataset.p!==p){if(e)e.remove();pc[i]=mk(i,p)}}},
mark(o){sq.forEach(d=>d.classList.remove("sel","mv","cp","last","hint","chk"));if(o.sel!=null)sq[o.sel].classList.add("sel");(o.mv||[]).forEach(m=>{sq[m.t].classList.add("mv");if(m.cap)sq[m.t].classList.add("cp")});[o.last,o.hint].forEach((a,j)=>{if(a)a.forEach(i=>sq[i].classList.add(j?"hint":"last"))});if(o.chk>=0)sq[o.chk].classList.add("chk")}}}
function coord(d,r,f){if(f===0){const b=document.createElement("b");b.className="co n";b.textContent=8-r;d.appendChild(b)}if(r===7){const b=document.createElement("b");b.className="co l";b.textContent="abcdefgh"[f];d.appendChild(b)}}
function slide(el,dx,dy){el.style.transition="none";el.style.transform="translate("+dx+"px,"+dy+"px)";requestAnimationFrame(()=>requestAnimationFrame(()=>{el.style.transition="transform .35s ease";el.style.transform="none"}))}

const somB=document.getElementById("som");somB.onclick=()=>{SOM=!SOM;somB.textContent=SOM?"🔊 Voz":"🔇 Mudo";if(!SOM&&window.speechSynthesis)speechSynthesis.cancel()};
const START="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
const S=[
{n:"🐑 Mate do Pastor",m:["e2e4","e7e5","f1c4","b8c6","d1h5","g8f6","h5f7"],
t:["Era uma vez um pastor esperto. Ele quer dar xeque-mate rapidinho!","Primeiro, o peão do rei corre para o centro.","O adversário copia: peão ao centro também.","O bispo aponta para a casa mais fraca do rei: f7.","O adversário move o cavalo, sem perceber o plano.","A rainha sai para ajudar o bispo. Dois contra uma casa!","O outro cavalo ataca a rainha, mas esqueceu de proteger o rei.","XEQUE-MATE! A rainha pega o peão f7 e o rei não tem como fugir. 🎉 Lição: proteja sempre o seu rei!"]},
{n:"🤪 Mate do Louco",m:["f2f3","e7e5","g2g4","d8h4"],
t:["Este é o xeque-mate mais rápido do mundo: só 2 jogadas!","Um peão branco anda… e abre uma janelinha perto do rei.","O preto avança o peão do centro.","Outro peão branco anda, abrindo ainda mais a janela do rei.","A rainha preta voa na diagonal: XEQUE-MATE! 🎉 Lição: não abra o caminho do seu rei."]},
{n:"🇮🇹 Abertura Italiana",m:["e2e4","e7e5","g1f3","b8c6","f1c4","f8c5"],
t:["Vamos abrir o jogo do jeito italiano!","O peão do rei vai ao centro.","O outro lado faz igual.","O cavalo sai para passear e protege o peão.","O cavalo preto também sai.","O bispo vai para a diagonal e olha de longe.","O outro bispo faz igual. Sem pressa! 🎉 Lição: tire logo cavalos e bispos."]},
{n:"🐴 O Pulo do Cavalo",m:["g1f3","f3e5","e5f7"],
t:["Olha o Cavalo Faísca! Ele vai pular pelo tabuleiro.","Pulo 1: duas casinhas para frente e uma de lado. É o “L”!","Pulo 2: outro “L”! Ele já está no meio do tabuleiro.","Pulo 3: o cavalo pegou um peão! 🎉 Lição: o cavalo pula em “L”."]},
{n:"🚂 A Corrida da Torre",m:["a2a4","a1a3","a3h3","h3h7"],
t:["A Torre Forte quer correr! Mas tem um peão na frente.","Primeiro, o peão sai do caminho.","A torre corre para frente, reto como um trenzinho!","Agora ela corre para o lado, bem longe!","Ela corre para cima e pega um peão! 🎉 Lição: a torre anda reto."]},
{n:"🏰 O Roque",m:["e2e4","e7e5","g1f3","b8c6","f1c4","g8f6","e1g1","h1f1"],
t:["O Roque é um pulo mágico: o rei e a torre se juntam!","O peão do rei vai ao centro.","O outro lado faz igual.","O cavalo sai para passear.","O cavalo preto também sai.","O bispo sai para a diagonal.","O outro cavalo sai também. Agora o caminho está livre!","Primeiro, o rei anda duas casinhas para o lado.","Depois, a torre pula por cima dele. Pronto! O rei está seguro. 🎉"]}
];
let si=0,st=0,pos={};
const bd=document.getElementById("board"),say=document.getElementById("say");
function load(){pos={};START.split("/").forEach((r,y)=>{let x=0;for(const c of r){if(+c)x+=+c;else pos["abcdefgh"[x++]+(8-y)]=c}})}
function sq(a){return"abcdefgh".indexOf(a[0])+(8-a[1])*8}
const SB=Board(document.getElementById("board"));
function sqi(a){return(8-a[1])*8+"abcdefgh".indexOf(a[0])}
function arr(){const a=Array(64).fill("");for(const k in pos)a[sqi(k)]=pos[k];return a}
function go(n){load();let hl=null;for(let i=0;i<n;i++){const m=S[si].m[i],f=m.slice(0,2),t=m.slice(2);pos[t]=pos[f];delete pos[f];hl=[f,t]}const fw=n===st+1;st=n;if(fw&&hl){SB.move(sqi(hl[0]),sqi(hl[1]));SB.sync(arr())}else SB.set(arr());SB.mark({last:hl?[sqi(hl[0]),sqi(hl[1])]:null});say.textContent=S[si].t[n];document.getElementById("next").textContent=n>=S[si].m.length?"↺ Ver de novo":"Próxima jogada ➡"}
function tabs(){const t=document.getElementById("tabs");t.innerHTML="";S.forEach((s,i)=>{const b=document.createElement("button");b.textContent=s.n;b.className=i===si?"on":"";b.onclick=()=>{si=i;tabs();go(0)};t.appendChild(b)})}
document.getElementById("next").onclick=()=>{go(st>=S[si].m.length?0:st+1)};
document.getElementById("prev").onclick=()=>{go(Math.max(st-1,0))};
tabs();go(0);

const QALL=[
{q:"Qual peça pula em forma de “L”?",o:["Torre","Cavalo","Bispo"],a:1},
{q:"O que acontece quando o rei não tem como escapar?",o:["Empate","Xeque-mate","Recomeça o jogo"],a:1},
{q:"De onde vem o xadrez?",o:["Índia","Brasil","Lua"],a:0},
{q:"Qual peça anda de lado, como escorregador?",o:["Torre","Peão","Bispo"],a:2},
{q:"Quando o peão chega ao outro lado, ele vira…",o:["Cavalo","Rainha","Rei"],a:1},
{q:"Qual é a peça mais importante?",o:["Peão","Bispo","Rei"],a:2},
{q:"Onde é bom começar o jogo?",o:["No centro","Fora do tabuleiro","Só na quina"],a:0},
{q:"Qual peça corre reto, como um trenzinho?",o:["Cavalo","Torre","Rei"],a:1},
{q:"Quantas casinhas o rei anda?",o:["Quantas quiser","Nenhuma","Uma"],a:2},
{q:"Qual peça usa coroa e anda uma casinha?",o:["Rainha","Rei","Torre"],a:1},
{q:"Qual peça anda bem longe para todo lado?",o:["Rainha","Peão","Cavalo"],a:0},
{q:"O que a Torre Forte faz?",o:["Pula em L","Corre reto","Anda na diagonal"],a:1},
{q:"Quem pula por cima dos outros?",o:["Bispo","Rei","Cavalo"],a:2},
{q:"Com o que a gente brinca no xadrez?",o:["Bola","Corda","Tabuleiro"],a:2}
];
function sorteia(){return QALL.slice().sort(()=>Math.random()-.5).slice(0,5)}
let Q=sorteia();
let qi=0,pts=0;
const qq=document.getElementById("qq"),qo=document.getElementById("qo"),qn=document.getElementById("qn"),qs=document.getElementById("qscore");
function ask(){qn.hidden=true;if(qi>=Q.length){qq.textContent="🏆 Você fez "+pts+" de "+Q.length+" estrelas!";qo.innerHTML="";qn.hidden=false;qn.textContent="Jogar de novo";qi=-1;return}
const c=Q[qi];qq.textContent=c.q;qo.innerHTML="";c.o.forEach((t,i)=>{const b=document.createElement("button");b.className="opt";b.textContent=t;b.onclick=()=>{if(qn.hidden===false)return;const ok=i===c.a;b.classList.add(ok?"ok":"no");if(ok){pts++;qs.textContent="⭐ ".repeat(pts)}qo.children[c.a].classList.add("ok");qn.hidden=false;qn.textContent="Próxima ➡"};qo.appendChild(b)})}
qn.onclick=()=>{if(qi===-1){Q=sorteia();qi=0;pts=0;qs.textContent="Responda e ganhe estrelas!"}else qi++;ask()};
ask();

(function(){
const $=id=>document.getElementById(id),fab=$("pf"),box=$("pb"),log=$("pl"),inp=$("pi"),snd=$("ps"),mic=$("pm"),chips=$("pc");
const FAQ={"Como o cavalo anda?":"O Cavalo Faísca pula em “L”: duas casinhas reto e uma de lado! Ele pula por cima de todo mundo! 🐴","O que é xeque-mate?":"É quando o rei não tem mais para onde fugir. Aí o jogo acaba e quem deu o xeque-mate ganha! 🎉","Como o peão vira rainha?":"O peão anda para frente, devagarinho. Se ele chegar ao outro lado do tabuleiro, vira rainha! 👸","Qual peça é a mais forte?":"A Rainha Estrela! Ela anda bem longe, para todo lado. 💪","Como o bispo anda?":"O Bispo Sorriso desliza de lado, na diagonal, como um escorregador! 🛝","Por onde começo o jogo?":"Pelo meio do tabuleiro! Mexa os peões do centro e depois tire os cavalos e bispos para passear. ♟","O que é o roque?":"É um pulo mágico: o rei anda duas casinhas e a torre pula por cima dele. Os dois ficam seguros! 🏰","Quem começa o jogo?":"As peças brancas! Depois cada um mexe uma peça de cada vez. ⚪⚫","O que é comer uma peça?":"É quando sua peça vai para a casa da peça do amigo, e ela sai do tabuleiro. 😊"};
const SYS="Você é o Peão Valente, um peãozinho simpático que ajuda crianças de 4 a 6 anos a aprender xadrez. Responda em português do Brasil, com no máximo 3 frases curtas e palavras bem simples, de forma animada e com 1 emoji. Fale só de xadrez e do Mundo Mágico do Xadrez (Rei Sábio, Rainha Estrela, Bispo Sorriso, Cavalo Faísca, Torre Forte). Se o assunto for outro, convide a criança de volta ao xadrez com carinho. Nunca peça nome, endereço ou dados pessoais. Se a criança falar de algo triste ou perigoso, diga com carinho para contar a um adulto de confiança.";
let okA=false,hist=[],busy=false,smp=null,tried=false,dic=null;
function add(t,w){const d=document.createElement("div");d.className="m "+w;d.textContent=t;log.appendChild(d);log.scrollTop=log.scrollHeight;return d}
async function getS(){if(!tried){tried=true;try{smp=window.claude?await claude.use("sample"):null}catch(e){smp=null}}return smp}
async function pergunta(q){q=q.trim();if(!okA||busy||!q)return;add(q,"u");inp.value="";busy=true;snd.disabled=true;const el=add("…","b");
 const s=await getS();
 if(!s){el.textContent="Eu só consigo conversar quando esta página está aberta no Claude. Toque em uma pergunta pronta! ♟";busy=false;snd.disabled=false;return}
 hist.push({role:"user",content:q});
 const m=hist.slice(-5).map((x,i)=>i===0?{role:"user",content:SYS+"\n\nCriança: "+x.content}:x);
 try{const r=await s(m,{modelTier:"quick",cache:false,onText:({text})=>{el.textContent=text}});el.textContent=r.text;falar(r.text,"ia");hist.push({role:"assistant",content:r.text})}
 catch(e){hist.pop();el.textContent=e&&e.code==="not_granted"?"Preciso da sua permissão para responder. Peça para um adulto ajudar!":"Ops, não consegui agora. Tente uma pergunta pronta!"}
 busy=false;snd.disabled=false}
fab.onclick=()=>{box.hidden=!box.hidden;if(!box.hidden&&!log.children.length)add("Oi! Eu sou o Peão Valente! Toque em uma pergunta ou escreva a sua. ♟","b")};
Object.keys(FAQ).forEach(q=>{const b=document.createElement("button");b.textContent=q;b.onclick=()=>{add(q,"u");add(FAQ[q],"b");falar(FAQ[q],"ia")};chips.appendChild(b)});
snd.onclick=()=>pergunta(inp.value);inp.onkeydown=e=>{if(e.key==="Enter")pergunta(inp.value)};
if(window.claude)claude.use("dictation").then(d=>{if(!d)return;dic=d;mic.hidden=false;d.onPartial(({text})=>{inp.value=text});d.onFinal(({text})=>{pergunta(text)});d.onState(({state})=>mic.classList.toggle("on",state==="listening"))}).catch(()=>{});
mic.onclick=()=>{if(dic)dic.start().catch(()=>{})};
$("pok").onclick=()=>{okA=true;$("pa").hidden=true;$("pr").hidden=false};
function offer(txt,yes,no){box.hidden=false;const d=add(txt,"b"),w=document.createElement("div");w.style.cssText="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap";
[["Sim!",yes],["Agora não",no]].forEach(([l,fn])=>{const b=document.createElement("button");b.className="btn s";b.textContent=l;b.onclick=()=>{w.remove();fn()};w.appendChild(b)});d.appendChild(w);falar(txt,"ia")}
function dizer(t,fecha){add(t,"b");falar(t,"ia");if(fecha)setTimeout(()=>{box.hidden=true},3000)}
let idleT,naoMais=false,oferta=false;
function resetIdle(){clearTimeout(idleT);if(naoMais)return;idleT=setTimeout(()=>{if(oferta)return;oferta=true;offer("Ainda está aí? Quer continuar brincando?",()=>{oferta=false;dizer("Que legal! Se precisar de ajuda, é só me chamar!",true);resetIdle()},()=>{oferta=false;naoMais=true;dizer("Tudo bem! Até a próxima!",true)})},30000)}
["pointerdown","keydown","scroll","touchstart"].forEach(e=>addEventListener(e,resetIdle,{passive:true}));resetIdle();
setTimeout(()=>{if(box.hidden&&!log.children.length)offer("Oi! Eu sou o Peão Valente! Quer que eu explique como se joga?",()=>dizer("Escolha um amigo e toque na peça branca. Depois toque na casa para onde quer ir! Pode me perguntar o que quiser."),()=>{box.hidden=true})},5000);
})();

(function(){
const NM=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]],KM=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],DM=[[-1,-1],[-1,1],[1,-1],[1,1]],RM=[[-1,0],[1,0],[0,-1],[0,1]];
const isW=p=>p<"a";
function att(b,sq,byW){const r=sq>>3,f=sq&7,pr=byW?r+1:r-1;
if(pr>=0&&pr<8)for(const df of[-1,1]){const nf=f+df;if(nf>=0&&nf<8&&b[pr*8+nf]===(byW?"P":"p"))return true}
for(const[dr,df]of NM){const nr=r+dr,nf=f+df;if(nr>=0&&nr<8&&nf>=0&&nf<8&&b[nr*8+nf]===(byW?"N":"n"))return true}
for(const[dr,df]of KM){const nr=r+dr,nf=f+df;if(nr>=0&&nr<8&&nf>=0&&nf<8&&b[nr*8+nf]===(byW?"K":"k"))return true}
for(const[dr,df]of DM){let nr=r+dr,nf=f+df;while(nr>=0&&nr<8&&nf>=0&&nf<8){const p=b[nr*8+nf];if(p){if(p===(byW?"B":"b")||p===(byW?"Q":"q"))return true;break}nr+=dr;nf+=df}}
for(const[dr,df]of RM){let nr=r+dr,nf=f+df;while(nr>=0&&nr<8&&nf>=0&&nf<8){const p=b[nr*8+nf];if(p){if(p===(byW?"R":"r")||p===(byW?"Q":"q"))return true;break}nr+=dr;nf+=df}}
return false}
function pseudo(s){const b=s.b,w=s.t==="w",m=[],add=(f,t,x)=>m.push({f,t,x});
for(let i=0;i<64;i++){const p=b[i];if(!p||isW(p)!==w)continue;const r=i>>3,f=i&7,q=p.toLowerCase();
if(q==="p"){const d=w?-1:1,r1=r+d;if(r1>=0&&r1<8){if(!b[r1*8+f]){add(i,r1*8+f);if(r===(w?6:1)&&!b[(r+2*d)*8+f])add(i,(r+2*d)*8+f,"d")}
for(const df of[-1,1]){const nf=f+df;if(nf<0||nf>7)continue;const t=r1*8+nf,x=b[t];if(x&&isW(x)!==w)add(i,t);else if(!x&&t===s.e)add(i,t,"e")}}}
else if(q==="n"||q==="k"){for(const[dr,df]of q==="n"?NM:KM){const nr=r+dr,nf=f+df;if(nr<0||nr>7||nf<0||nf>7)continue;const t=nr*8+nf,x=b[t];if(!x||isW(x)!==w)add(i,t)}
if(q==="k"&&i===(w?60:4)){const o=!w,z=w?56:0,c=s.c;
if(c.includes(w?"K":"k")&&!b[z+5]&&!b[z+6]&&b[z+7]===(w?"R":"r")&&!att(b,z+4,o)&&!att(b,z+5,o)&&!att(b,z+6,o))add(i,z+6,"c");
if(c.includes(w?"Q":"q")&&!b[z+1]&&!b[z+2]&&!b[z+3]&&b[z]===(w?"R":"r")&&!att(b,z+4,o)&&!att(b,z+3,o)&&!att(b,z+2,o))add(i,z+2,"c")}}
else{for(const[dr,df]of q==="b"?DM:q==="r"?RM:DM.concat(RM)){let nr=r+dr,nf=f+df;while(nr>=0&&nr<8&&nf>=0&&nf<8){const t=nr*8+nf,x=b[t];if(!x)add(i,t);else{if(isW(x)!==w)add(i,t);break}nr+=dr;nf+=df}}}}
return m}
function make(s,m){const b=s.b.slice(),p=b[m.f],w=isW(p),q=p.toLowerCase();let c=s.c,e=-1,h=s.h+1;
if(b[m.t]||q==="p")h=0;
if(m.x==="e")b[m.t+(w?8:-8)]="";
b[m.t]=p;b[m.f]="";
if(q==="p"&&((m.t>>3)===0||(m.t>>3)===7))b[m.t]=w?"Q":"q";
if(m.x==="d")e=(m.f+m.t)>>1;
if(m.x==="c"){const z=w?56:0;if(m.t===z+6){b[z+5]=b[z+7];b[z+7]=""}else{b[z+3]=b[z];b[z]=""}}
if(q==="k")c=c.replace(w?/[KQ]/g:/[kq]/g,"");
for(const[sq,ch]of[[56,"Q"],[63,"K"],[0,"q"],[7,"k"]])if(m.f===sq||m.t===sq)c=c.replace(ch,"");
return{b,t:s.t==="w"?"b":"w",c,e,h}}
function inCheck(s){return att(s.b,s.b.indexOf(s.t==="w"?"K":"k"),s.t!=="w")}
function legal(s){const w=s.t==="w",k=w?"K":"k";return pseudo(s).filter(m=>{const n=make(s,m);return!att(n.b,n.b.indexOf(k),!w)})}
function status(s){const ms=legal(s);if(!ms.length)return inCheck(s)?"mate":"stale";if(s.h>=100)return"draw";
const o=s.b.filter(p=>p&&p.toLowerCase()!=="k");if(!o.length||(o.length===1&&/[nb]/i.test(o[0])))return"draw";return null}
const VAL={p:100,n:320,b:330,r:500,q:900,k:0};
function evalS(s){let v=0;for(let i=0;i<64;i++){const p=s.b[i];if(!p)continue;const q=p.toLowerCase(),w=isW(p),r=i>>3,f=i&7;let x=VAL[q];const cen=3.5-Math.max(Math.abs(r-3.5),Math.abs(f-3.5));
if(q==="n"||q==="b")x+=cen*6;if(q==="p")x+=cen*3+(w?6-r:r-1)*5;if(q==="k"){x+=(w?r-7:0-r)*0}
v+=w?x:-x}return v}
function order(s,ms){return ms.map(m=>({m,v:(s.b[m.t]?VAL[s.b[m.t].toLowerCase()]*10-VAL[s.b[m.f].toLowerCase()]:0)})).sort((a,b)=>b.v-a.v).map(o=>o.m)}
function search(s,d,a,b){const ms=legal(s);if(!ms.length)return inCheck(s)?-99000-d:0;if(d===0)return(s.t==="w"?1:-1)*evalS(s);
let best=-Infinity;for(const m of order(s,ms)){const v=-search(make(s,m),d-1,-b,-a);if(v>best)best=v;if(best>a)a=best;if(a>=b)break}return best}
function choose(s,lv){const ms=legal(s);if(!ms.length)return null;if(lv===0)return ms[Math.floor(Math.random()*ms.length)];
const dep=[0,1,2,4][lv],noise=[0,25,8,2][lv];let bv=-Infinity,bm=ms[0],al=-Infinity;
for(const m of order(s,ms)){const v=-search(make(s,m),dep-1,-Infinity,dep>=3?-al:Infinity)+Math.random()*noise;if(v>bv){bv=v;bm=m}if(dep>=3&&v>al)al=v}return bm}
function initial(){return{b:"rnbqkbnrpppppppp".split("").concat(Array(32).fill(""),"PPPPPPPPRNBQKBNR".split("")),t:"w",c:"KQkq",e:-1,h:0}}


const $=id=>document.getElementById(id);
const OPP=[
{k:"peao",n:"Peão Valente",l:"Bem fácil",hi:"Oi! Eu sou o Peão Valente. Vamos jogar? Eu jogo bem devagarinho!",win:"Eu ganhei! Mas você jogou muito bem. Vamos de novo?",lose:"Você ganhou! Que jogada incrível! 🎉"},
{k:"bispo",n:"Bispo Sorriso",l:"Fácil",hi:"Oi! Eu sou o Bispo Sorriso. Vamos jogar juntos?",win:"Ganhei desta vez! Foi um jogo bem legal. Tente de novo!",lose:"Você ganhou! Parabéns, campeão! 🎉"},
{k:"cavalo",n:"Cavalo Faísca",l:"Médio",hi:"Opa! Sou o Cavalo Faísca. Prepare-se para pular!",win:"Eu ganhei, mas foi difícil! Quer a revanche?",lose:"Você me venceu! Que pulo bonito! 🎉"},
{k:"rainha",n:"Rainha Estrela",l:"Difícil",hi:"Olá! Sou a Rainha Estrela. Vamos fazer uma bela partida!",win:"Eu ganhei, mas você é muito corajoso! Vamos de novo?",lose:"Você ganhou da Rainha Estrela! Incrível! 🎉"}];
let st,hist,oi=0,sel=null,mv=[],last=null,hint=null,over=false,think=false,run=false,lastT=0,clk={w:0,b:0},tm=0,gid=0;
const B=Board($("pg"),click);
function fmt(x){x=Math.max(0,Math.ceil(x));return String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0")}
function clocks(){$("clkW").style.visibility=$("clkB").style.visibility=tm?"visible":"hidden";$("clkW").textContent="⚪ Você  "+fmt(clk.w);$("clkB").textContent="⚫ "+OPP[oi].n+"  "+fmt(clk.b)}
function say(t){$("psay").textContent=t}
function marks(){B.mark({sel,mv:mv.map(m=>({t:m.t,cap:!!st.b[m.t]||m.x==="e"})),last,hint,chk:inCheck(st)?st.b.indexOf(st.t==="w"?"K":"k"):-1})}
function apply(m,old){const w=isW(old.b[m.f]);B.move(m.f,m.t);if(m.x==="e")B.remove(m.t+(w?8:-8));if(m.x==="c"){const z=w?56:0;if(m.t===z+6)B.move(z+7,z+5);else B.move(z,z+3)}B.sync(st.b)}
function click(i){if(over||think||st.t!=="w")return;hint=null;const m=mv.find(x=>x.t===i);
if(sel!==null&&m){go(m);return}
const p=st.b[i];if(p&&isW(p)){sel=i;mv=legal(st).filter(x=>x.f===i)}else{sel=null;mv=[]}marks()}
function go(m){const old=st;hist.push(old);st=make(old,m);last=[m.f,m.t];sel=null;mv=[];hint=null;if(tm&&!run){run=true;lastT=Date.now()}apply(m,old);marks();after()}
function after(){const r=status(st);if(r){finish(r);return}
if(st.t==="b"){const g=gid;think=true;say(["Hmm… estou pensando 🤔","Boa jogada! Agora é a minha vez…","Deixa eu pensar…"][Math.floor(Math.random()*3)]);setTimeout(()=>{if(g!==gid)return;const m=choose(st,oi);think=false;if(over||!m)return;const old=st;st=make(old,m);last=[m.f,m.t];apply(m,old);marks();const r2=status(st);if(r2)finish(r2);else say(inCheck(st)?"Xeque! Proteja o seu rei! 👑":"Sua vez!")},450)}}
function finish(r,w){over=true;run=false;think=false;let t;
if(r==="mate")t=st.t==="b"?OPP[oi].lose:OPP[oi].win;else if(r==="time")t=w==="w"?"O seu tempo acabou! Mas você jogou bem. Vamos de novo?":"O meu tempo acabou! Você ganhou! 🎉";else t="Empatamos! Foi um jogo bem legal.";
$("ptxt").textContent=t;$("pimg").src=IMG[OPP[oi].k];$("pend").hidden=false;say(t)}
function start(){gid++;st=initial();hist=[];sel=null;mv=[];last=null;hint=null;over=false;think=false;run=false;tm=+$("ptime").value;clk={w:tm,b:tm};$("pend").hidden=true;
B.set(st.b);marks();clocks();say(OPP[oi].hi);$("pav").src=IMG[OPP[oi].k];$("pav").alt=OPP[oi].n;document.querySelectorAll(".ob").forEach((b,i)=>b.classList.toggle("on",i===oi))}
OPP.forEach((o,i)=>{const b=document.createElement("button");b.className="ob";b.innerHTML="<img alt=''><b></b><small></small>";b.querySelector("img").src=IMG[o.k];b.querySelector("b").textContent=o.n;b.querySelector("small").textContent=o.l;b.onclick=()=>{oi=i;start()};$("opp").appendChild(b)});
$("pnew").onclick=()=>start();$("pagain").onclick=()=>start();$("ptime").onchange=()=>start();
$("phint").onclick=()=>{if(over||think||st.t!=="w")return;const m=choose(st,2);if(!m)return;hint=[m.f,m.t];sel=null;mv=[];marks();say("Dica: olhe as casas laranja! 💡");setTimeout(()=>{hint=null;marks()},3000)};
$("pundo").onclick=()=>{if(over||think||!hist.length)return;st=hist.pop();sel=null;mv=[];last=null;hint=null;B.set(st.b);marks();say("Pode jogar de novo! 😊")};
setInterval(()=>{if(!tm||!run||over)return;const n=Date.now(),c=st.t;clk[c]-=(n-lastT)/1000;lastT=n;clocks();if(clk[c]<=0){clk[c]=0;clocks();finish("time",c)}},250);
start();
})();
