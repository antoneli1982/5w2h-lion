export function renderGantt(tasks){
  let html = `<div class="panel panel-main">
    <div class="panel-head">
      <div class="panel-title">Cronograma em destaque</div>
      <div class="badge badge-health">Painel operacional</div>
    </div>
    <div class="gantt-wrap">`

  tasks.forEach(task => {
    html += `
      <div class="gantt-row">
        <div class="gantt-task">
          <div class="task-name">${task.name}</div>
          <div class="task-meta">${task.owner || "Responsável"} • ${task.start || "-"} até ${task.end || "-"}</div>
        </div>
        <div class="gantt-track">
          <div class="gantt-bar" style="width:${task.progress}%">${task.progress}%</div>
        </div>
      </div>
    `
  })

  html += `</div></div>`
  return html
}
