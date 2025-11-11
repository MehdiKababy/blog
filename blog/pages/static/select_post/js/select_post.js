
const editButton = document.getElementById('toggle-edit-button');
const formWrapper = document.getElementById('edit-form-wrapper');

editButton.addEventListener('click', function() {
    if (formWrapper.style.display === 'none' || formWrapper.style.display === '') {
        formWrapper.style.display = 'block'; 
        editButton.textContent = 'لغو ویرایش'; 
        editButton.style.backgroundColor = '#dc3545';
    } else {
        formWrapper.style.display = 'none';
        editButton.textContent = 'ویرایش پست'; 
        editButton.style.backgroundColor = '#28a745';
    }
});