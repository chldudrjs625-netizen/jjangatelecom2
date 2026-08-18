function submitConsult(event){
  event.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const model=document.getElementById('model').value.trim();
  const carrier=document.getElementById('carrier').value;
  const memo=document.getElementById('memo').value.trim();
  const text=`[짱아통신 상담신청]\n이름: ${name}\n연락처: ${phone}\n희망기종: ${model || '-'}\n현재통신사: ${carrier}\n상담내용: ${memo || '-'}`;
  navigator.clipboard?.writeText(text).catch(()=>{}).finally(()=>{ alert('상담 내용이 복사됐습니다. 카카오톡 채널로 이동합니다.'); window.location.href='https://pf.kakao.com/_HcASX'; });
  return false;
}
