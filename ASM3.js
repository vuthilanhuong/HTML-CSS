
// Phần 1: HÀM VALIDATE
// Tham số đầu vào: ID và độ dài nhỏ nhất
function check(identify,minlen) {
	var x = document.getElementById(identify);
	var m = x.parentNode.getElementsByTagName('span')[0]; 
	if (x.value.length==0) 
	{
		m.innerHTML = '*Must Input';
		m.style.color = "red";
	} 
	else 
	{
		if (x.value.length < minlen) 
		{
			m.innerHTML='*Too short';
			m.style.color = "red";
		}
		else 
		{
			m.innerHTML='OK';
			m.style.color = "green";
		}
	}
}


// Phần 2: Hàm Confirm password
function confirmpass() 
{
	var x = document.getElementById('asm-repass');
	var m = x.parentNode.getElementsByTagName('span')[0]; 
	if (x.value.length==0) 
	{
		m.innerHTML = '*Must Input';
		m.style.color = "red";
	} 
	else 
	{
		if (x.value.length < 7) 
		{
			m.innerHTML='*Too short';
			m.style.color = "red";
		}
		else 
		{
			if (x.value != document.getElementById('asm-password').value) {
				m.innerHTML='*Nhập sai password';
				m.style.color = "red";
			}
			else {
				m.innerHTML='OK';
				m.style.color = "green";
			}
		}
	}
}

// Phần 3: GỌI HÀM
document.getElementById('asm-username').onkeyup = function() {check('asm-username',7)};
document.getElementById('asm-fullname').onkeyup = function() {check('asm-fullname',7)};
document.getElementById('asm-password').onkeyup = function() {check('asm-password',7)};
document.getElementById('asm-repass').onkeyup = function() {confirmpass()};

