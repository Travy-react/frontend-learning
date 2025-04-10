// 这是我的第一个 JavaScript 文件
console.log("Hello GitHub!");  
// 表单验证逻辑  
document.querySelector('.signup-form').addEventListener('submit', function(e) {  
    e.preventDefault(); // 阻止表单默认提交  
    
    const usernameInput = document.getElementById('username');  
    const errorElement = document.getElementById('username-error');  
    const username = usernameInput.value.trim();  
    
    // 验证规则：用户名长度3-10字符  
    if (username.length < 3 || username.length > 10) {  
      errorElement.textContent = '用户名需为3-10个字符';  
      usernameInput.classList.add('invalid');  
    } else {  
      errorElement.textContent = '';  
      usernameInput.classList.remove('invalid');  
      alert('提交成功！');  
    }  
  });  
