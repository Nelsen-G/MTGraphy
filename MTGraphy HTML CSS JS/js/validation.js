//Get elements from the form in html
const form = document.getElementById('form');
const data_name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const country = document.getElementById('country');

//Listen to Events, akan berjalan kalo tombol submit dipencet
form.addEventListener('submit', e => {
	e.preventDefault();

	//Validate data input
	//General Logic
	//Trim untuk hapus space kalo ada dari input
	//Kalo kosong/salah format: panggil function setError biar class diganti, sekaligus replace small tag
	//Selain itu, set pass karena udah benar

	//Name
	if(data_name.value.trim() == '') { //harus ada isi
		setError(data_name, 'Fill in Name'); 
	} else {
		setPass(data_name);
	}

	//Email
	if(email.value.trim() == '') { //harus ada isi
		setError(email, 'Fill in Email');
	} else if(email.value.trim().includes('@') == false || email.value.trim().includes('.') == false){ //harus ada @ dan .
		setError(email, 'Email Format Incorrect');
	} else {
		setPass(email);
	}

	//Phone Number
	if(phone.value.trim() == '') { //harus ada isi
		setError(phone, 'Fill in Phone Number');
	} else if (phone.value.trim().length < 10) { //harus 10 digits atau lebih
		setError(phone, 'Phone Number must be 10 digits or more');
	} else {
		setPass(phone);
	}

	//Select Country
	if(country.value.trim() == ''){ //harus dipilih
		setError(country, 'Choose a Country');
	} else {
		setPass(country);
	}

	//Check Terms and Condition
	if(document.getElementById('check').checked == false){ //harus kecentang
		setCheckError(check);
	} else {
		setCheckPass(check);
	}
});

//Set Error and Pass 
function setError(input, errorMessage) {
	const modifier = input.parentElement; //set to parent's div
	modifier.className = 'data-input error'; //set parent's div jadi error

	const small = modifier.querySelector('small'); //modify small dengan text di atas, yang sesuai dengan tipe input
	small.innerText = errorMessage; //small tag ditunjukkin di css dengan error message dari atas
}

function setPass(input) {
	const modifier = input.parentElement; //set to parent's div di html
    
	modifier.className = 'data-input pass'; //set parent's div jadi pass di html
}
	
function setCheckError(input) {
	const first = input.parentElement;
	const modifier = first.parentElement; //set to grandparent's div di html
	modifier.className = 'terms-condition error'; //set to error, small tag ditunjukkin di css, small tag ini udah ada di html
}

function setCheckPass(input) {
	const first = input.parentElement;
	const modifier = first.parentElement; //set to grandparent's div di html
	modifier.className = 'terms-condition pass'; //set to pass, small tag is hidden di css
}
