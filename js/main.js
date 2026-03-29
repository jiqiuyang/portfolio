// 功能1：深色/浅色模式切换
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// 读取本地存储的主题
if(localStorage.getItem('dark-theme') === 'true') {
  body.classList.add('dark-theme');
  themeBtn.textContent = '切换浅色模式';
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  // 保存主题到本地
  localStorage.setItem('dark-theme', body.classList.contains('dark-theme'));
  
  if(body.classList.contains('dark-theme')) {
    themeBtn.textContent = '切换浅色模式';
  } else {
    themeBtn.textContent = '切换深色模式';
  }
});

// 功能2：表单验证（给联系页面用）
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('message').value;
  
  if(!name || !email || !msg) {
    alert('请填写所有必填项！');
    return false;
  }
  alert('提交成功！');
  return true;
}