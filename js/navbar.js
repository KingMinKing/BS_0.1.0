// navbar.js (정적 방식으로 변경한 예)
document.addEventListener("DOMContentLoaded", () => {
    // 동적 삽입 관련 코드는 삭제
    // document.getElementById("navbar-container").innerHTML = navbarHTML; 같은 부분 제거
    // document.getElementById("footer-container").innerHTML = footerHTML; 같은 부분 제거

//드롭다운 메뉴 끝
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
