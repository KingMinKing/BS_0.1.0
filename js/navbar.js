document.addEventListener("DOMContentLoaded", () => {
    // 네비게이션 바 동적 로드
    const navbarHTML = `
        <header class="navbar">
            <div class="nav-item nav-logo">
                <a href="index.html" aria-label="홈으로 이동">
                    <img src="assets/Logo.png" alt="보성케이블 로고">
                </a>
            </div>
            <nav>
                <div class="nav-item dropdown">
                    <button class="dropdown-toggle" aria-expanded="false">회사 소개</button>
                    <div class="dropdown-menu">
                        <a href="history.html" class="dropdown-item">이력</a>
                        <a href="location.html" class="dropdown-item">오시는 길</a>
                    </div>
                </div>
                <div class="nav-item">
                    <a href="process.html">유통 과정</a>
                </div>
            </nav>
        </header>
    `;
    document.getElementById("navbar-container").innerHTML = navbarHTML;

    // 푸터 동적 로드
    const footerHTML = `
        <footer class="footer">
            <p>본사: 경기도 평택시 오성면</p>
            <p>E-mail: <a href="mailto:abcd@gmail.com">abcd@gmail.com</a></p>
        </footer>
    `;
    document.getElementById("footer-container").innerHTML = footerHTML;

    // 드롭다운 메뉴 동작
    document.querySelectorAll(".dropdown-toggle").forEach((button) => {
        button.addEventListener("click", () => {
            const menu = button.nextElementSibling;
            menu.classList.toggle("active");
            button.setAttribute("aria-expanded", menu.classList.contains("active"));
        });
    });
});
