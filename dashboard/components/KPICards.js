export function KPICards(data){
  return `
  <div class="cards">
    <div class="card"><h3>Atividades</h3><div class="value">${data.total}</div><div class="sub">Total planejado</div></div>
    <div class="card"><h3>Em andamento</h3><div class="value">${data.inprogress}</div><div class="sub">Execução atual</div></div>
    <div class="card"><h3>Concluídas</h3><div class="value">${data.done}</div><div class="sub">Finalizadas</div></div>
    <div class="card"><h3>Atrasadas</h3><div class="value">${data.late}</div><div class="sub">Exigem ação</div></div>
    <div class="card"><h3>Progresso</h3><div class="value">${data.progress}%</div><div class="sub">Andamento geral</div></div>
  </div>
  `
}
