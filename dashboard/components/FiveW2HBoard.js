export function FiveW2HBoard(items) {
  return `
    <section class="panel panel-secondary">
      <div class="panel-head">
        <div>
          <div class="panel-title">5W2H em segundo plano</div>
          <div class="panel-sub">Quadro estratégico de apoio, abaixo da operação.</div>
        </div>
        <div class="panel-tag">Suporte estratégico</div>
      </div>

      <div class="table-wrap">
        <table class="main-table secondary-table">
          <thead>
            <tr>
              <th>What</th>
              <th>Why</th>
              <th>Who</th>
              <th>When</th>
              <th>Where</th>
              <th>How</th>
              <th>How Much</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr>
                <td>${item.what}</td>
                <td>${item.why}</td>
                <td>${item.who}</td>
                <td>${item.when}</td>
                <td>${item.where}</td>
                <td>${item.how}</td>
                <td>${item.howMuch}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}
