import { projectData } from "../data/sample-data.js";
import { Sidebar } from "../components/Sidebar.js";
import { Header } from "../components/Header.js";
import { KPICards } from "../components/KPICards.js";
import { CronogramaBoard } from "../components/CronogramaBoard.js";
import { GanttBoard } from "../components/GanttBoard.js";
import { FiveW2HBoard } from "../components/FiveW2HBoard.js";
import { ExecutiveSummary } from "../components/ExecutiveSummary.js";

const app = document.getElementById("app");

app.innerHTML = `
  <div class="layout">
    ${Sidebar()}
    <main class="content">
      ${Header(projectData.projectName, projectData.owner, projectData.status)}
      ${KPICards(projectData)}
      ${ExecutiveSummary(projectData)}
      ${CronogramaBoard(projectData)}
      ${GanttBoard(projectData.tasks)}
      ${FiveW2HBoard(projectData.fivew2h)}
    </main>
  </div>
`;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
