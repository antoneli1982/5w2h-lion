function montarMensagemProjeto(p){
  if(!p) return '';
  const total = (p.rows || []).length;
  const concluidas = (p.rows || []).filter(r => Number(r.status) === 100).length;
  const progresso = total ? Math.round((concluidas / total) * 100) : 0;

  return `Projeto: ${p.name}
Status geral: ${progresso}%
Ações concluídas: ${concluidas}/${total}
Acesse o LION 5W2H para acompanhar os detalhes.`;
}

function abrirContatoEmail(pid){
  const p = db.projects.find(x => x.id === pid);
  if(!p){ showToast('❌ Projeto não encontrado!'); return; }
  if(!p.contatoEmail){
    showToast('⚠️ Este projeto não possui e-mail cadastrado.');
    return;
  }

  const assunto = encodeURIComponent('Atualização do projeto - ' + p.name);
  const corpo = encodeURIComponent(montarMensagemProjeto(p));
  window.open(`mailto:${p.contatoEmail}?subject=${assunto}&body=${corpo}`, '_blank');
}

function abrirContatoWhatsapp(pid){
  const p = db.projects.find(x => x.id === pid);
  if(!p){ showToast('❌ Projeto não encontrado!'); return; }
  if(!p.contatoWhatsapp){
    showToast('⚠️ Este projeto não possui WhatsApp cadastrado.');
    return;
  }

  const numero = String(p.contatoWhatsapp).replace(/\D/g,'');
  const texto = encodeURIComponent(montarMensagemProjeto(p));
  window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
}

function copiarMensagemProjeto(pid){
  const p = db.projects.find(x => x.id === pid);
  if(!p){ showToast('❌ Projeto não encontrado!'); return; }

  const texto = montarMensagemProjeto(p);

  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(texto)
      .then(() => showToast('✅ Mensagem copiada!'))
      .catch(() => {
        prompt('Copie a mensagem abaixo:', texto);
      });
  } else {
    prompt('Copie a mensagem abaixo:', texto);
  }
}
