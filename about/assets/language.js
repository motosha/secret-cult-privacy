
(() => {
  const select=document.querySelector('#language');
  if(select) select.addEventListener('change',()=>location.assign(select.value));
  if(!document.body.hasAttribute('data-language-landing')) return;
  const codes=Array.from(select.options).map(o=>o.dataset.code);
  function resolve(tag){const s=String(tag||'').replaceAll('_','-').toLowerCase();
    if(s.startsWith('zh')) return s.includes('hk')?'zh-HK':s.includes('tw')||s.includes('hant')?'zh-TW':'zh-CN';
    if(s.startsWith('pt')) return s.includes('br')?'pt-BR':'pt-PT';
    if(s==='no'||s.startsWith('no-')||s.startsWith('nb')) return 'nb';
    const c=s.split('-')[0]; return codes.includes(c)?c:null;}
  const explicit=new URLSearchParams(location.search).get('lang');
  const chosen=resolve(explicit)||Array.from(navigator.languages||[navigator.language]).map(resolve).find(Boolean)||'en';
  if(codes.includes(chosen)) location.replace(chosen+'/');
})();
