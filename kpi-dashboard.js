
function upgradeKPIs(){
  const container = document.querySelector('.cron-hero');
  if(!container) return;

  const labels=["Atividades","Concluídas","Em andamento","Atrasadas","Vencendo","Progresso"];
  const colors=["","kpi-green","kpi-blue","kpi-red","kpi-yellow","kpi-purple"];

  const numbers=[];
  const nodes=container.querySelectorAll("*");

  nodes.forEach(n=>{
    if(!isNaN(parseInt(n.innerText)) || n.innerText.includes("%")){
      numbers.push(n.innerText.trim());
    }
  });

  if(numbers.length<6) return;

  const wrapper=document.createElement("div");
  wrapper.className="cron-kpis";

  labels.forEach((label,i)=>{
    const card=document.createElement("div");
    card.className="cron-kpi-card "+colors[i];
    card.innerHTML=`
      <div class="kpi-label">${label}</div>
      <div class="kpi-value">${numbers[i]}</div>
      <div class="kpi-sub">Indicador</div>
    `;
    wrapper.appendChild(card);
  });

  const heroText=container.querySelector("p");
  if(heroText) heroText.after(wrapper);
}

window.addEventListener("load",upgradeKPIs);
