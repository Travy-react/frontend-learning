// This is my first JavaScript file！  
console.log("Hello GitHub!");  
// Form validation logic
document.querySelector('.signup-form').addEventListener('submit', function(e) {  
  e.preventDefault(); // Prevent the form from submitting by default
  
  const usernameInput = document.getElementById('username');  
  const errorElement = document.getElementById('username-error');  
  const username = usernameInput.value.trim();  
  
  // Authentication rules: username length 3-10 characters
  if (username.length < 3 || username.length > 10) {  
    errorElement.textContent = '用户名需为3-10个字符';  
    usernameInput.classList.add('invalid');  
  } else {  
    errorElement.textContent = '';  
    usernameInput.classList.remove('invalid');  
    alert('提交成功！');  
  }  
});  
