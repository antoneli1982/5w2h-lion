import "../styles/dashboard.css"
import { KPICards } from "../components/KPICards.js"
import { renderGantt } from "../components/Gantt.js"
import { statusHealth } from "../components/StatusHealth.js"

const data = {
  total: 12,
  inprogress: 5,
  done: 4,
  late: 3,
  progress: 42
}

const tasks = [
  { name: "Planejamento", progress: 100, owner: "Antoneli", start: "01/03", end: "03/03" },
  { name: "Definir escopo", progress: 80, owner: "Engenharia", start: "04/03", end: "06/03" },
  { name: "Execução", progress: 40, owner: "Operação", start: "07/03", end: "12/03" },
  { name: "Entrega", progress: 10, owner: "Coordenação", start: "13/03", end: "15/03" }
]

const app = document.createElement("div")
app.className = "dashboard"

app.innerHTML = `
  <section class="hero">
    <div>
      <div class="eyebrow">PROJETO TESTE</div>
      <h1>Dashboard Profissional do Projeto</h1>
      <p>Cronograma em destaque na abertura e 5W2H em segundo plano para apoio estratégico.</p>
    </div>
    <div class="hero-side">
      <div class="health">${statusHealth(data.late, data.total)}</div>
      <div class="small-kpi">Prazo sob controle visual</div>
    </div>
  </section>

  ${KPICards(data)}

  ${renderGantt(tasks)}

  <section class="panel panel-secondary">
    <div class="panel-head">
      <div class="panel-title">5W2H em segundo plano</div>
      <div class="badge">Apoio estratégico</div>
    </div>
    <table class="fivew2h">
      <thead>
        <tr>
          <th>What</th>
          <th>Why</th>
          <th>Who</th>
          <th>When</th>
          <th>How</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Executar projeto</td>
          <td>Melhoria do processo</td>
          <td>Equipe interna</td>
          <td>2026</td>
          <td>Plano controlado e revisões semanais</td>
        </tr>
      </tbody>
    </table>
  </section>
`

document.body.appendChild(app)
