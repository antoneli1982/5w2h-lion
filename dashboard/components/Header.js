export function Header(projectName, owner, status) {
  return `
    <header class="page-header">
      <div>
        <div class="eyebrow">PROJETO EM EXECUÇÃO</div>
        <h1>${projectName}</h1>
        <p class="header-text">Painel executivo com foco no cronograma e acompanhamento operacional.</p>
      </div>

      <div class="header-actions">
        <div class="pill">${status}</div>
        <div class="pill outline">Responsável: ${owner}</div>
      </div>
    </header>
  `;
}
