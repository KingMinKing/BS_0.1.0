//const loadComponent = async (selector, file, callback) => {
//    try {
        // 절대 경로를 사용하거나 상대 경로 조정
//        const basePath = window.location.origin; // 절대 경로로 변환
//        const response = await fetch(`${basePath}/${file}`);
//        if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
//        const content = await response.text();
//        document.querySelector(selector).innerHTML = content;

//        if (callback) callback();
//    } catch (error) {
//        console.error(error);
//    }
//};

const loadComponent = async (selector, file, callback) => {
    try {
        const response = await fetch(file); // basePath 제거, 상대 경로 사용
        if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
        const content = await response.text();
        document.querySelector(selector).innerHTML = content;

        if (callback) callback();
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('.navbar-container', 'navbar.html', () => {
        const script = document.createElement('script');
        script.src = 'js/navbar.js';
        script.defer = true;
        document.body.appendChild(script);
        initDropdownMenus(); // 드롭다운 초기화
    });

    loadComponent('.footer-container', 'footer.html');
});

//document.addEventListener('DOMContentLoaded', () => {
    // 네비게이션 바 로드/
//    loadComponent('.navbar-container', 'nav.html', () => {
//        const script = document.createElement('script');
 //       script.src = 'js/navbar.js';
//        script.defer = true;
//        script.onload = () => {
//            // 네비게이션 초기화 보장
//            if (typeof initDropdownMenus === 'function') {
 //               initDropdownMenus();
//            }
//        };
//        document.body.appendChild(script);
//    });
//});

