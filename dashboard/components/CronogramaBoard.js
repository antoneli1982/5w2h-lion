import { HealthBadge } from "./HealthBadge.js";

export function CronogramaBoard(data) {
  return `
    <section class="panel panel-primary">
      <div class="panel-head">
        <div>
          <div class="panel-title">Cronograma em destaque</div>
          <div class="panel-sub">Execução, prazos, responsáveis e progresso em um único quadro.</div>
        </div>
        <div class="panel-right">
          ${HealthBadge(data.late, data.total)}
        </div>
      </div>

      <div class="progress-wrap">
        <div class="progress-label">
          <span>Progresso geral</span>
          <strong>${data.progress}%</strong>
        </div>
        <div class="progress-track">
          <div class="progress-bar" style="width:${data.progress}%"></div>
        </div>
      </div>

      <div class="table-wrap">
        <table class="main-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Atividade</th>
              <th>Semana</th>
              <th>Prazo inicial</th>
              <th>Prazo final</th>
              <th>Status</th>
              <th>Responsável</th>
              <th>Observação</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            ${data.tasks.map(task => `
              <tr>
                <td>${task.id}</td>
                <td>${task.name}</td>
                <td>${task.week}</td>
                <td>${task.start}</td>
                <td>${task.end}</td>
                <td><span class="table-status ${task.status === "Concluído" ? "done" : task.status === "Em andamento" ? "progress" : "late"}">${task.status}</span></td>
                <td>${task.owner}</td>
                <td>${task.note}</td>
                <td>${task.progress}%</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}
