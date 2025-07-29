document.addEventListener('DOMContentLoaded', function(){
    const currentYear = new Date().getFullYear()
    document.getElementById('dynamicYear').textContent = currentYear + 10

    document.getElementById('toggleMenu').addEventListener('click', toggleMenu)
    function toggleMenu(){
        const navList =  document.getElementById('nav-list');
        navList.classList.toggle('show')
    }
})
