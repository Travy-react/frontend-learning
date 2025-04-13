const { calculatePasswordStrength } = require('../box-model/script.js');  

test('密码强度计算逻辑', () => {  
  expect(calculatePasswordStrength('123')).toBe(1); 
  expect(calculatePasswordStrength('Abc123!')).toBe(3); 
});  
