'use strict';
/* 正式文件提供後，在此填入資料。檔案使用相對網站根目錄的路徑。
   例：image: 'assets/images/certificates/registration.png'
       file: 'assets/documents/registration.pdf'
       officialUrl: 'https://發證單位的正式查證網址/'
   未提供的欄位保留 null；上傳文件不會自動標示「已驗證」。 */
window.CJG_CERTIFICATES = [
  {id:'registration', title:'公司登記文件', image:null, file:null, officialUrl:null, issuer:null, number:null, scope:null, issuedAt:null, expiresAt:null},
  {id:'business', title:'業務資格與許可文件', image:null, file:null, officialUrl:null, issuer:null, number:null, scope:null, issuedAt:null, expiresAt:null},
  {id:'security', title:'資訊安全與隱私文件', image:null, file:null, officialUrl:null, issuer:null, number:null, scope:null, issuedAt:null, expiresAt:null},
  {id:'additional', title:'其他認證與佐證資料', image:null, file:null, officialUrl:null, issuer:null, number:null, scope:null, issuedAt:null, expiresAt:null}
];
(() => {
  const gallery = document.querySelector('.certificate-gallery');
  if(!gallery) return;
  const dialog = document.querySelector('#certificate-dialog');
  const content = document.querySelector('#certificate-dialog-content');
  const heading = document.querySelector('#certificate-dialog-title');
  const original = document.querySelector('#certificate-dialog-original');
  const source = document.querySelector('#certificate-dialog-source');
  const close = document.querySelector('#certificate-dialog-close');
  const definitions = new Map(window.CJG_CERTIFICATES.map(x=>[x.id,x]));
  let opener;
  function safeUrl(value) { if(typeof value !== 'string' || !value.trim()) return null; try { const u = new URL(value, document.baseURI); return ['http:','https:','file:'].includes(u.protocol) ? u.href : null; } catch { return null; } }
  function notice(text) { const p=document.createElement('p');p.className='info-box';p.textContent=text;return p; }
  function bindLink(a,url) { a.hidden=!url; if(url) a.href=url; else a.removeAttribute('href'); }
  gallery.querySelectorAll('[data-certificate]').forEach(card=>{
    const data=definitions.get(card.dataset.certificate);if(!data)return;
    card.querySelectorAll('[data-certificate-field]').forEach(el=>{el.textContent=data[el.dataset.certificateField] || '待提供';});
    const image=safeUrl(data.image), file=safeUrl(data.file);
    if(image || file) card.querySelector('[data-certificate-status]').textContent='文件已提供';
    if(image) { const img=card.querySelector('[data-certificate-thumbnail]'), empty=card.querySelector('.certificate-empty');img.addEventListener('load',()=>{img.hidden=false;empty.hidden=true;});img.addEventListener('error',()=>{img.hidden=true;empty.hidden=false;empty.querySelector('span').textContent='原件暫時無法載入';});img.src=image; }
    else if(file) card.querySelector('.certificate-empty>span').textContent='開啟完整文件';
    bindLink(card.querySelector('[data-certificate-verify]'),safeUrl(data.officialUrl));
  });
  document.querySelectorAll('[data-certificate-open]').forEach(button=>button.addEventListener('click',()=>{
    const data=definitions.get(button.dataset.certificateOpen);if(!data || !dialog)return;
    opener=button;heading.textContent=data.title;content.replaceChildren();
    const image=safeUrl(data.image),file=safeUrl(data.file),official=safeUrl(data.officialUrl);
    bindLink(original,file || image);bindLink(source,official);
    if(image) { const img=document.createElement('img');img.alt=data.title+'完整原件';img.addEventListener('error',()=>content.replaceChildren(notice('原件暫時無法載入，請確認文件是否已上傳。若有原始文件連結，可從下方開啟。')),{once:true});img.src=image;content.append(img); }
    else content.append(notice(file ? '此文件提供原始檔案，請點擊下方「開啟文件原件」閱讀完整內容。' : '此類證書的原件、編號與查證連結尚待提供，正式資料補齊後會在此展示。'));
    if(typeof dialog.showModal==='function'){dialog.showModal();document.documentElement.classList.add('certificate-modal-open');}
    else {button.closest('.certificate-card').querySelector('[data-certificate-status]').textContent='請使用支援文件視窗的瀏覽器';}
  }));
  close?.addEventListener('click',()=>dialog.close());
  dialog?.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left || e.clientX>b.right || e.clientY<b.top || e.clientY>b.bottom)dialog.close();}});
  dialog?.addEventListener('close',()=>{document.documentElement.classList.remove('certificate-modal-open');opener?.focus({preventScroll:true});});
})();
