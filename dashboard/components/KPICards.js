export function KPICards(data) {
  const cards = [
    ["Atividades", data.total, "Total planejado"],
    ["Concluídas", data.done, "Entregas finalizadas"],
    ["Em andamento", data.inProgress, "Execução atual"],
    ["Atrasadas", data.late, "Necessitam ação"],
    ["Progresso", `${data.progress}%`, "Andamento geral"],
  ];

  return `
    <section class="kpi-grid">
      ${cards.map(([title, value, sub]) => `
        <article class="kpi-card">
          <div class="kpi-title">${title}</div>
          <div class="kpi-value">${value}</div>
          <div class="kpi-sub">${sub}</div>
        </article>
      `).join("")}
    </section>
  `;
}
