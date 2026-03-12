export function Sidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">L</div>
        <div>
          <div class="brand-title">5W2H LION</div>
          <div class="brand-sub">Plataforma interna</div>
        </div>
      </div>

      <nav class="menu">
        <a class="menu-item active" href="#">Dashboard</a>
        <a class="menu-item" href="#">Projetos</a>
        <a class="menu-item" href="#">Cronograma</a>
        <a class="menu-item" href="#">5W2H</a>
        <a class="menu-item" href="#">Indicadores</a>
      </nav>

      <div class="sidebar-footer">
        <div class="footer-card">
          <div class="footer-label">Status</div>
          <div class="footer-value">Operacional</div>
        </div>
      </div>
    </aside>
  `;
}
