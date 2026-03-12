export function statusHealth(late, total){
  if(total === 0) return "Sem dados"
  const percent = (late / total) * 100
  if(percent === 0) return "🟢 Saudável"
  if(percent <= 20) return "🟡 Atenção"
  return "🔴 Crítico"
}
