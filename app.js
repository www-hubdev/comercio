const $=s=>document.querySelector(s),ini=n=>n.replace(/\(.*\)/,'').trim().split(' ').map(x=>x[0]).slice(0,2).join('');
const av=p=>`<div class="av">${p.foto?`<img src="${p.foto}" alt="${p.nome}" onerror="this.remove()">`:''}${p.foto?'':ini(p.nome)}</div>`;
const wa=(p,m)=>`https://wa.me/${p.whatsapp}?text=${encodeURIComponent(m||`Olá ${p.nome.replace(/\(.*\)/,'').trim()}, vi o seu perfil no Serviços Angola e preciso de um orçamento de ${p.categoria}.`)}`;
function layout(pg){
 const L=[['index.html','Início'],['profissionais.html','Profissionais'],['cadastro.html','Sou profissional'],['contactos.html','Contactos']];
 $('#hdr').innerHTML=`<header><div class="w"><a class="logo" href="index.html">Serviços<b>Angola</b></a><nav>${L.map(l=>`<a href="${l[0]}" class="${l[0]==pg?'on':''}">${l[1]}</a>`).join('')}</nav></div></header>`;
 $('#ftr').innerHTML=`<footer><div class="w"><div><h4>Serviços Angola</h4>Encontra profissionais de confiança perto de ti: canalizadores, electricistas, explicadores, freelancers e muito mais.</div>
 <div><h4>Páginas</h4>${L.map(l=>`<a href="${l[0]}">${l[1]}</a>`).join('')}<a href="privacidade.html">Política de privacidade</a><a href="termos.html">Termos de uso</a></div>
 <div><h4>Fala connosco</h4><a href="https://wa.me/${DONO.whatsapp}">WhatsApp: +244 944 576 596</a><a href="mailto:${DONO.email}">${DONO.email}</a></div></div>
 <p class="cp">© ${new Date().getFullYear()} Serviços Angola. Todos os direitos reservados.</p></footer>`}
function card(p){return `<article class="card"><div class="top">${av(p)}<div><h3>${p.nome}</h3><small>${p.categoria}</small></div></div>
<div class="bd"><p>📍 ${p.zona} · ${p.idade} anos · ${p.experiencia}</p><p>${p.servicos.slice(0,3).join(' • ')}</p></div>
<div class="ft"><button class="btn o" onclick="perfil(${p.id})">Ver perfil</button><a class="btn g" target="_blank" rel="noopener" href="${wa(p)}">WhatsApp</a></div></article>`}
function perfil(id){const p=PROFISSIONAIS.find(x=>x.id==id);if(!p)return;
 $('#modal').innerHTML=`<div class="mb"><div class="mh">${av(p)}<div><h2>${p.nome}</h2><span class="tag">${p.categoria}</span></div><button class="x" onclick="fechar()" aria-label="Fechar">×</button></div>
 <div class="mc"><p><b>Idade:</b> ${p.idade} anos · <b>Experiência:</b> ${p.experiencia}</p><p><b>Morada:</b> ${p.morada} (${p.zona})</p><p style="margin:10px 0">${p.descricao}</p>
 <b>Serviços:</b><ul>${p.servicos.map(s=>`<li>${s}</li>`).join('')}</ul>
 ${p.trabalhos&&p.trabalhos.length?`<b>Trabalhos realizados:</b><div class="gal">${p.trabalhos.map(t=>`<img src="${t}" alt="Trabalho de ${p.nome}" loading="lazy" onerror="this.remove()">`).join('')}</div>`:''}
 <div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn g" target="_blank" rel="noopener" href="${wa(p)}">Contactar no WhatsApp</a><a class="btn" href="tel:+${p.whatsapp}">Ligar agora</a></div></div></div>`;
 $('#modal').classList.add('on')}
function fechar(){$('#modal').classList.remove('on')}
document.addEventListener('keydown',e=>e.key=='Escape'&&fechar());
const opts=(sel)=>`<option value="">${sel}</option>`+['Serviços manuais','Ao domicílio','Freelancer'].map(g=>`<optgroup label="${g}">${CATEGORIAS.filter(c=>c.t==g).map(c=>`<option>${c.n}</option>`).join('')}</optgroup>`).join('');
