/* =========================================================
   사내 도구 공통 설정 — 이 파일 하나만 고치면 모든 도구에 적용됩니다.
   ⚠ 이 파일은 공개됩니다. API 키나 접속 코드는 절대 여기에 적지 마세요.
   ========================================================= */
window.SPACE_TOOLS = {
  // Cloudflare Worker(중간 관리인) 주소로 바꿔주세요.
  // 예: "https://space-tools-proxy.roro.workers.dev"
  PROXY_URL: "https://morning-lake-5cb9space-lab-proxy.oh-roro-land.workers.dev",

  // 접속 코드를 브라우저에 저장할 때 쓰는 이름 (바꿀 필요 없음)
  STORAGE_KEY: "space_tools_access_code"
};
