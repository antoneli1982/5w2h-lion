function getEmailConfig(){
  if(!db.emailConfig){
    db.emailConfig = {
      serviceId: '',
      templateId: '',
      publicKey: ''
    };
  }
  return db.emailConfig;
}

function salvarConfiguracaoEmailGlobal(){
  const serviceId = (document.getElementById('ep-service') || {}).value?.trim() || '';
  const templateId = (document.getElementById('ep-template') || {}).value?.trim() || '';
  const publicKey = (document.getElementById('ep-public') || {}).value?.trim() || '';

  db.emailConfig = {
    serviceId,
    templateId,
    publicKey
  };

  saveDB();
  showToast('✅ Configuração global de email salva!');
}

function carregarConfiguracaoEmailGlobal(){
  const cfg = getEmailConfig();

  if(document.getElementById('ep-service')){
    document.getElementById('ep-service').value = cfg.serviceId || '';
  }

  if(document.getElementById('ep-template')){
    document.getElementById('ep-template').value = cfg.templateId || '';
  }

  if(document.getElementById('ep-public')){
    document.getElementById('ep-public').value = cfg.publicKey || '';
  }
}
