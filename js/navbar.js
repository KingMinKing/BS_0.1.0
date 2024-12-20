document.querySelectorAll(".dropdown-toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const menu = button.nextElementSibling;
        menu.classList.toggle("active");
        button.setAttribute("aria-expanded", menu.classList.contains("active"));
    });
});

/*Motion 및 사라지는것*/
document.addEventListener("DOMContentLoaded", () => {
    // 
    // dropdown-toggle 클릭 시 dropdown-menu 토글
    //
    const dropdownButtons = document.querySelectorAll(".dropdown-toggle");
    dropdownButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.stopPropagation(); 
            // 
            // 다른 open 상태 메뉴들을 닫기 전에 현재 클릭한 메뉴를 제외한다.
            //
            closeAllDropdownsExcept(button);

            const menu = button.nextElementSibling;
            const isActive = menu.classList.toggle("active");
            button.setAttribute("aria-expanded", isActive);
        });
    });

    //
    // 허공이나 다른 영역 클릭 시 모든 dropdown-menu 닫기
    //
    document.addEventListener("click", (e) => {
        // dropdown 영역 밖을 클릭하면 모두 닫는다.
        closeAllDropdownsExcept(null);
    });

    //
    // 모든 dropdown-menu를 닫는 함수, 특정 버튼 제외 가능
    //
    function closeAllDropdownsExcept(exceptionButton) {
        dropdownButtons.forEach((btn) => {
            if (btn !== exceptionButton) {
                const menu = btn.nextElementSibling;
                if (menu.classList.contains("active")) {
                    menu.classList.remove("active");
                    btn.setAttribute("aria-expanded", "false");
                }
            }
        });
    }
});
