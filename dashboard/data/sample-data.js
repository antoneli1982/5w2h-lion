export const projectData = {
  projectName: "PROJETO TESTE",
  owner: "Antoneli",
  status: "Operacional",
  total: 12,
  done: 4,
  inProgress: 5,
  late: 3,
  dueSoon: 2,
  progress: 42,
  tasks: [
    { id: 1, name: "Mapear escopo do projeto", week: "S1", start: "01/03/2026", end: "03/03/2026", status: "Concluído", owner: "Antoneli", note: "Escopo aprovado", progress: 100 },
    { id: 2, name: "Definir responsáveis", week: "S1", start: "04/03/2026", end: "05/03/2026", status: "Concluído", owner: "RH", note: "Times definidos", progress: 100 },
    { id: 3, name: "Planejar cronograma mestre", week: "S2", start: "06/03/2026", end: "10/03/2026", status: "Em andamento", owner: "PCP", note: "Revisão semanal", progress: 70 },
    { id: 4, name: "Estruturar 5W2H macro", week: "S2", start: "08/03/2026", end: "11/03/2026", status: "Em andamento", owner: "Qualidade", note: "Ajustar custos", progress: 55 },
    { id: 5, name: "Executar piloto", week: "S3", start: "12/03/2026", end: "18/03/2026", status: "Em andamento", owner: "Operação", note: "Validar fluxo", progress: 40 },
    { id: 6, name: "Treinar equipe", week: "S3", start: "14/03/2026", end: "16/03/2026", status: "Atrasado", owner: "Liderança", note: "Reprogramar turma", progress: 20 }
  ],
  fivew2h: [
    {
      what: "Implantar gestão integrada do projeto",
      why: "Aumentar controle visual, prazo e responsabilidade",
      who: "Times internos",
      when: "Março/2026",
      where: "Operação e apoio",
      how: "Rituais semanais, cronograma e acompanhamento gerencial",
      howMuch: "Recursos internos"
    }
  ]
};
