// This is my first JavaScript file！  
console.log("Hello GitHub!");  
// Form verification logic  
// Form verification logic  
      // Password strength verification logic  
      const passwordInput = document.getElementById('password');  
      const strengthBar = document.querySelector('.strength-bar');  
      const strengthText = document.querySelector('.strength-text');  
      
      passwordInput.addEventListener('input', function() {  
        const password = this.value;  
        let strength = 0;  
      
        // Rules: Length ≥8 + with numbers + with special symbols  
        if (password.length >= 8) strength += 1;  
        if (/\d/.test(password)) strength += 1;  
        if (/[!@#$%^&*]/.test(password)) strength += 1;  
      
        // Update ui  
        strengthBar.style.width = strength * 33 + '%';  
        strengthText.textContent = ['弱', '中', '强'][strength - 1] || '';  
        strengthBar.style.backgroundColor = ['#ff4444', '#ffc107', '#28a745'][strength - 1] || '#ddd';  
      });  
document.querySelector('.signup-form').addEventListener('submit', function(e) {  
    e.preventDefault(); // Block form submission by default  
    
    const usernameInput = document.getElementById('username');  
    const errorElement = document.getElementById('username-error');  
    const username = usernameInput.value.trim();  
    
// Verification rules: Username length 3 10 characters  
    if (username.length < 3 || username.length > 10) {  
      errorElement.textContent = '用户名需为3-10个字符';  
      usernameInput.classList.add('invalid');  
    } else {  
      errorElement.textContent = '';  
      usernameInput.classList.remove('invalid');  
      alert('提交成功！');  
    }  
  });  
