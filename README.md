# Tomorrow house

## 1. GNB

- 로그인을 안 했을 경우

```html
<div class="gnb-btn-group">
  <button
    class="gnb-icon-btn is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a class="gnb-icon-btn" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/" aria-label="로그인 페이지로 이동">로그인</a>
    <a href="/" aria-label="회원가입 페이지로 이동">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="gnb-btn-group">
  <button
    class="gnb-icon-btn is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    class="gnb-icon-btn sm-hidden"
    href="/"
    class="sm-hidden"
    aria-label="북마크 페이지로 이동"
  >
    <i class="ic-bookmark"></i
  ></a>

  <a
    class="gnb-icon-btn sm-hidden"
    href="/"
    class="sm-hidden"
    aria-label="알림설정 페이지로 이동"
  >
    <i class="ic-bell"></i>
    <strong class="badge" aria-label="읽지 않은 알림 개수">1</strong>
  </a>

  <a class="gnb-icon-btn" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge" aria-label="장바구니에 담긴 상품 개수">99</strong></a
  >

  <button
    class="gnb-avatar-btn sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="프로필 이미지" />
    </div>
  </button>
</div>
```
