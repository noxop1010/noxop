const gpuRank={Low:0,Mid:1,High:2};
function games(){
 const q=document.getElementById('gameSearch').value.toLowerCase(),genre=document.getElementById('genre').value,style=document.getElementById('style').value,ram=+document.getElementById('ram').value,gpu=document.getElementById('gpu').value;
 let out=GAMES.map(g=>{let s=0;if(q&&g[0].toLowerCase().includes(q))s+=5;if(genre!='All'&&g[1]==genre)s+=4;if(style!='All'&&g[2].includes(style))s+=3;if(ram>=+g[3])s+=2;if(gpuRank[gpu]>=gpuRank[g[4]])s+=2;return[s,g]}).filter(x=>(!q||x[1][0].toLowerCase().includes(q))&&x[0]>1).sort((a,b)=>b[0]-a[0]).slice(0,9);
 document.getElementById('gameResults').innerHTML=out.map((x,i)=>`<article class="game-card"><span class="num">0${i+1}</span><span class="match">${x[0]} match</span><div class="tag">${x[1][1]}</div><h3>${x[1][0]}</h3><p>${x[1][5]}</p></article>`).join('')||'<div class="game-card">No matches. Try broader filters.</div>';
}
document.getElementById('findGames').onclick=games;document.getElementById('gameSearch').oninput=games;
document.getElementById('findBuild').onclick=()=>{let b=BUILDS.find(x=>x[0]==document.getElementById('budget').value),names=['CPU','GPU','RAM','Motherboard','Storage','PSU'];document.getElementById('buildResult').innerHTML=`<h3>${b[1]} / ${document.getElementById('resolution').value}</h3><div class="parts">${b.slice(2).map((v,i)=>`<div class="part"><b>${names[i]}</b><span>${v}</span></div>`).join('')}</div><div class="build-note">Starting point only. Verify current Indian pricing, stock, compatibility and PSU quality before buying.</div>`};
function hardware(){let q=document.getElementById('hardwareSearch').value.toLowerCase();document.getElementById('hardwareResults').innerHTML=HARDWARE.filter(x=>x.join(' ').toLowerCase().includes(q)).slice(0,12).map(x=>`<article class="hardware-card"><div class="type">${x[1]}</div><b>${x[0]}</b><p>${x[2]}<br>${x[3]}</p></article>`).join('')}
document.getElementById('hardwareSearch').oninput=hardware;hardware();
let opts=HARDWARE.filter(x=>x[1]=='CPU'||x[1]=='GPU');['partA','partB'].forEach(id=>document.getElementById(id).innerHTML=opts.map(x=>`<option>${x[0]}</option>`).join(''));
document.getElementById('compareBtn').onclick=()=>{let a=HARDWARE.find(x=>x[0]==partA.value),b=HARDWARE.find(x=>x[0]==partB.value);document.getElementById('compareResult').innerHTML=`<div class="comparison"><div class="compare-cols"><div><b>${a[0]}</b><p>${a[2]}<br>${a[3]}</p></div><div><b>${b[0]}</b><p>${b[2]}<br>${b[3]}</p></div></div></div>`};
document.getElementById('menu').onclick=()=>{let n=document.getElementById('nav');n.style.display='flex';n.style.position='absolute';n.style.top='68px';n.style.left='0';n.style.right='0';n.style.padding='22px';n.style.background='#07090c';n.style.flexDirection='column'};
games();
