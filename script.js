const gpuRank={Low:0,Mid:1,High:2};
function renderGames(){
 const q=document.getElementById('gameSearch').value.toLowerCase(),genre=document.getElementById('genre').value,style=document.getElementById('style').value,ram=+document.getElementById('ram').value,gpu=document.getElementById('gpu').value;
 const out=GAMES.map(g=>{let score=0;if(q&&g[0].toLowerCase().includes(q))score+=5;if(genre!='All'&&(g[1]==genre||g[2].includes(genre)))score+=4;if(style!='All'&&g[2].includes(style))score+=3;if(ram>=+g[3])score+=2;if(gpuRank[gpu]>=gpuRank[g[4]])score+=2;return [score,g]}).filter(x=>(!q||x[1][0].toLowerCase().includes(q))&&x[0]>1).sort((a,b)=>b[0]-a[0]).slice(0,9);
 document.getElementById('gameResults').innerHTML=out.length?'<div class="results">'+out.map(x=>`<article class="result"><small>${x[1][1]}</small><h3>${x[1][0]}</h3><p>${x[1][5]}</p><small>Match ${x[0]}</small></article>`).join('')+'</div>':'<div class="result">No matches. Try broader filters.</div>';
}
document.getElementById('findGames').onclick=renderGames;document.getElementById('gameSearch').oninput=renderGames;

document.getElementById('findBuild').onclick=()=>{const b=BUILDS.find(x=>x[0]===document.getElementById('budget').value);const names=['CPU','GPU','RAM','Motherboard','Storage','PSU'];document.getElementById('buildResult').innerHTML=`<article class="build"><h3>${b[1]} • ${document.getElementById('resolution').value}</h3><div class="parts">${b.slice(2).map((v,i)=>`<div class="part"><b>${names[i]}</b>${v}</div>`).join('')}</div><p>Use this as a starting point. Verify live Indian pricing, stock, motherboard BIOS support and PSU quality before purchasing.</p></article>`};

const options=HARDWARE.filter(x=>x[1]=='CPU'||x[1]=='GPU');['partA','partB'].forEach(id=>document.getElementById(id).innerHTML=options.map(x=>`<option>${x[0]}</option>`).join(''));
document.getElementById('compareBtn').onclick=()=>{const a=HARDWARE.find(x=>x[0]===document.getElementById('partA').value),b=HARDWARE.find(x=>x[0]===document.getElementById('partB').value);document.getElementById('compareResult').innerHTML=`<article class="comparison"><div class="parts"><div class="part"><b>${a[0]}</b>${a[2]}<p>${a[3]}</p></div><div class="part"><b>${b[0]}</b>${b[2]}<p>${b[3]}</p></div></div><p>Compare the actual price, game benchmarks, power draw and features for your workload before buying. NOXGAMES does not treat a single generic score as a substitute for benchmarks.</p></article>`};

function showUpgrade(){let gpu=document.getElementById('upGpu').value,cpu=document.getElementById('upCpu').value,ram=document.getElementById('upRam').value,target=document.getElementById('target').value,msg='';if(ram==='8GB')msg='Upgrade RAM to 16GB first.';else if(target==='4K'||target==='1440p')msg='Prioritize the GPU if your current GPU is the main FPS limit.';else msg='For high-FPS 1080p, check CPU limits before replacing the GPU.';document.getElementById('upgradeResult').innerHTML=`<article class="upgrade"><div class="score">PLAN</div><h3>${msg}</h3><p>Current setup: ${cpu} + ${gpu} + ${ram}. Target: ${target}. This is guidance, not a benchmark guarantee.</p></article>`}
document.getElementById('upgradeBtn').onclick=showUpgrade;

document.getElementById('hardwareSearch').oninput=()=>{const q=document.getElementById('hardwareSearch').value.toLowerCase();const arr=HARDWARE.filter(x=>x.join(' ').toLowerCase().includes(q)).slice(0,20);document.getElementById('hardwareResults').innerHTML=arr.map(x=>`<article class="hardware-card"><span>${x[1]}</span><b>${x[0]}</b><p>${x[2]}<br>${x[3]}</p></article>`).join('')};
document.getElementById('hardwareSearch').dispatchEvent(new Event('input'));

document.getElementById('menu').onclick=()=>{const n=document.getElementById('nav');n.style.display='flex';n.style.position='absolute';n.style.top='64px';n.style.left='0';n.style.right='0';n.style.padding='18px 5%';n.style.background='#080b0f';n.style.flexDirection='column'};
