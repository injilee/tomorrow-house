# 내일의 집

### 1. gnb

- 로그인 상태일 경우

  ```html
  <div class="gnb-btn-group">
    <button
      class="lg-hidden gnb-icon-btn is-search"
      type="button"
      aria-label="검색창 열기 버튼"
    >
      <i class="ic-search"></i>
    </button>

    <a
      class="sm-hidden gnb-icon-btn"
      href="/"
      aria-label="스크랩북 페이지로 이동 버튼"
    >
      <i class="ic-bookmark"></i>
    </a>
    <a
      class="sm-hidden gnb-icon-btn"
      href="/"
      aria-label="알림 페이지로 이동 버튼"
    >
      <i class="ic-bell"></i>
    </a>

    <a href="/" class="gnb-icon-btn" aria-label="장바구니 페이지로 이동 버튼">
      <i class="ic-cart is-cart"></i>
      <strong class="badge">5</strong>
    </a>

    <button
      class="sm-hidden gnb-avatar-btn"
      type="button"
      aria-label="마이메뉴 열기 버튼"
    >
      <div class="avartar-32">
        <img src="/assets/images/img-user-01.jpg" alt="사달라 아저씨" />
      </div>
    </button>
  </div>
  ```

- 비로그인 상태일 경우

  ```html
  <div class="gnb-btn-group">
    <button
      class="lg-hidden gnb-icon-btn is-search"
      type="button"
      aria-label="검색창 열기 버튼"
    >
      <i class="ic-search"></i>
    </button>

    <a href="/" class="gnb-icon-btn" aria-label="장바구니 페이지로 이동 버튼">
      <i class="ic-cart is-cart"></i>
    </a>

    <div class="gnb-auth sm-hidden">
      <a href="/" aria-label="로그인 페이지로 이동 버튼">로그인</a>
      <a href="/" aria-label="회원가입 페이지로 이동 버튼">회원가입</a>
    </div>
  </div>
  ```
