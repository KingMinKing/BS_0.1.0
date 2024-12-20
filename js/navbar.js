// navbar.js (정적 방식으로 변경한 예)
document.addEventListener("DOMContentLoaded", () => {
    // 동적 삽입 관련 코드는 삭제
    // document.getElementById("navbar-container").innerHTML = navbarHTML; 같은 부분 제거
    // document.getElementById("footer-container").innerHTML = footerHTML; 같은 부분 제거

    // 드롭다운 메뉴 동작만 남김
    document.querySelectorAll(".dropdown-toggle").forEach((button) => {
        button.addEventListener("click", () => {
            const menu = button.nextElementSibling;
            menu.classList.toggle("active");
            button.setAttribute("aria-expanded", menu.classList.contains("active"));
        });
    });
});
//드롭다운 메뉴 끝
