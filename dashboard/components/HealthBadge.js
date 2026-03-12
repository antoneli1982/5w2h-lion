export function healthLabel(late, total) {
  if (!total) return "Sem dados";
  const pct = (late / total) * 100;
  if (pct === 0) return "Saudável";
  if (pct <= 20) return "Atenção";
  return "Crítico";
}

export function HealthBadge(late, total) {
  const label = healthLabel(late, total);
  const tone = label === "Saudável" ? "success" : label === "Atenção" ? "warning" : "danger";
  return `<span class="status-badge ${tone}">${label}</span>`;
}
