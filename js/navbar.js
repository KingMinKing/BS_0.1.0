// Add click functionality for dropdown menus
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            const isActive = menu.classList.contains('active');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown-menu.active').forEach(activeMenu => {
                activeMenu.classList.remove('active');
            });

            // Toggle the clicked dropdown
            if (!isActive) {
                menu.classList.add('active');
            } else {
                menu.classList.remove('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.active').forEach(activeMenu => {
                activeMenu.classList.remove('active');
            });
        }
    });
});
