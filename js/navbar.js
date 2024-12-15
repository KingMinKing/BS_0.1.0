// 드롭다운 메뉴 초기화 함수
const initDropdownMenus = () => {
    // 모든 드롭다운 요소를 찾고, 각각에 대해 이벤트 리스너를 추가
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu'); // 해당 드롭다운의 하위 메뉴

        // 드롭다운을 클릭했을 때 이벤트 처리
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation(); // 이벤트 버블링 방지 (부모 요소로 전달되지 않도록)

            // 다른 활성화된 드롭다운 메뉴 닫기
            document.querySelectorAll('.dropdown-menu.active').forEach(activeMenu => {
                if (activeMenu !== menu) { // 현재 메뉴와 다른 경우
                    activeMenu.classList.remove('active');
                    activeMenu.style.height = '0'; // 메뉴 높이를 0으로 설정 (닫힘)
                }
            });

            // 현재 드롭다운 메뉴 열기/닫기
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                menu.style.height = '0'; // 닫을 때 높이 0으로 설정
            } else {
                menu.classList.add('active');
                menu.style.height = `${menu.scrollHeight}px`; // 열릴 때 메뉴의 콘텐츠 높이로 설정
            }
        });
    });

    // 허공 클릭 시 모든 활성화된 메뉴 닫기
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
            menu.style.height = '0'; // 닫을 때 높이 0으로 설정
        });
    });
};

// DOMContentLoaded 이벤트가 발생하면 드롭다운 초기화 함수 실행
document.addEventListener('DOMContentLoaded', () => {
    initDropdownMenus();
});
