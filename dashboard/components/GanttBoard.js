export function GanttBoard(tasks) {
  return `
    <section class="panel">
      <div class="panel-head">
        <div>
          <div class="panel-title">Visão Gantt simplificada</div>
          <div class="panel-sub">Leitura rápida do andamento das principais frentes.</div>
        </div>
      </div>

      <div class="gantt-list">
        ${tasks.map(task => `
          <div class="gantt-row">
            <div class="gantt-meta">
              <div class="gantt-name">${task.name}</div>
              <div class="gantt-sub">${task.owner} • ${task.start} até ${task.end}</div>
            </div>
            <div class="gantt-track">
              <div class="gantt-fill" style="width:${task.progress}%">${task.progress}%</div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}
