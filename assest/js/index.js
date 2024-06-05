
const dashboardToggle = () => {
    document.getElementsByClassName('custom-col')[0].classList.toggle('side-bar-dashboard')
    document.getElementsByClassName('custom-col-2')[0].classList.toggle('side-dashboard-home')
    const icon = document.getElementsByClassName('side-bar-icon')[0]
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-close');
    } else {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-close');
    }
}