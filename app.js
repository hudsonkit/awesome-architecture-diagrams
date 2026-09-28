const search=document.querySelector('#search');
const buttons=[...document.querySelectorAll('[data-filter]')];
const reset=document.querySelector('#reset');
let category='all';
const params=new URLSearchParams(location.search);
if(buttons.some(b=>b.dataset.filter===params.get('category')))category=params.get('category');
search.value=params.get('q')||'';
function update(){
 const query=search.value.trim().toLowerCase();let count=0;
 document.querySelectorAll('.category').forEach(section=>{
  let matches=0;
  section.querySelectorAll('.entry').forEach(entry=>{const visible=(category==='all'||section.dataset.category===category)&&query.split(/\s+/).every(term=>entry.dataset.search.includes(term));entry.hidden=!visible;if(visible)matches++});
  section.hidden=matches===0;count+=matches;
 });
 buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));
 document.querySelector('#results').textContent=`${count} ${count===1?'resource':'resources'}`;
 document.querySelector('#empty').hidden=count>0;
 reset.hidden=!query&&category==='all';
 const url=new URL(location.href);url.searchParams.delete('q');url.searchParams.delete('category');if(query)url.searchParams.set('q',search.value.trim());if(category!=='all')url.searchParams.set('category',category);history.replaceState(null,'',url);
}
search.addEventListener('input',update);buttons.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;update()}));reset.addEventListener('click',()=>{category='all';search.value='';update();search.focus()});update();
