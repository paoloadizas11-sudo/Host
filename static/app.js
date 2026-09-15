async function botAction(id, action){
  const r = await fetch(`/bot/${id}/${action}`, {method:"POST"});
  const d = await r.json();
  alert(d.message || d.error || "Done");
  location.reload();
}
async function deleteBot(id){
  if(!confirm("Delete this bot and its files?")) return;
  const r = await fetch(`/bot/${id}/delete`, {method:"POST"});
  const d = await r.json();
  if(d.ok) location.href="/dashboard"; else alert(d.error || "Delete failed");
}
