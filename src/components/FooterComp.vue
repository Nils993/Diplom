<template>
  <footer class="footer center">
    <div class="footer-wrap">
      <div class="contact">
        <a class="footer__logo" href="/">
          <svg
            width="78"
            height="88"
            viewBox="0 0 78 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_102_110)">
              <path
                d="M57.9511 44.0059L47.4076 19.8545L45.1086 18.2608L42.4133 17.4026L38.7667 16.4219L34.4858 18.2608L31.632 19.8545L42.4133 44.0059H57.9511Z"
                fill="url(#paint0_linear_102_110)"
              />
            </g>
            <g filter="url(#filter1_d_102_110)">
              <path
                d="M20.1133 35.9295L30.6568 60.1374L32.9558 61.7349L35.6511 62.5951L39.2978 63.5781L43.5786 61.7349L46.4325 60.1374L35.6511 35.9295H20.1133Z"
                fill="url(#paint1_linear_102_110)"
              />
            </g>
            <path
              d="M31.0682 20.17L14.6998 43.8298L31.0682 44.0052L42.9005 20.17C43.7312 17.7316 46.3306 19.154 47.5264 20.17C42.4158 10.8066 34.4248 16.2686 31.0682 20.17Z"
              fill="white"
            />
            <path
              d="M46.9318 59.83L63.3002 36.1702L46.9318 35.9948L35.0995 59.83C34.2688 62.2684 31.6694 60.846 30.4736 59.83C35.5842 69.1934 43.5752 63.7314 46.9318 59.83Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d_102_110"
                x="11.632"
                y="0.421875"
                width="66.3192"
                height="67.584"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_102_110"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_102_110"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_102_110"
                x="0.113342"
                y="19.9297"
                width="66.3192"
                height="67.6484"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_102_110"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_102_110"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_102_110"
                x1="55.2244"
                y1="44.0059"
                x2="42.7202"
                y2="20.6131"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.494792" stop-color="white" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_102_110"
                x1="22.8401"
                y1="35.9295"
                x2="35.3898"
                y2="59.3526"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0C0C0C" />
                <stop offset="0.494792" stop-color="white" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <p class="footer__text">+380 (68) 443-94-26</p>
        <p class="footer__text">
          1678 S. Pioneer Road Salt Lake City UT&nbsp;84104
        </p>
      </div>
      <ul class="nav">
        <li @click="closeMenu">
          <a class="nav__item" href="#about">About us</a>
        </li>
        <li @click="closeMenu">
          <a class="nav__item" href="#catalog">Catalog</a>
        </li>
        <li @click="closeMenu"><a class="nav__item" href="#sale">Sale</a></li>
      </ul>
      <div class="icon">
        <a href="https://www.facebook.com" target="_blank">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="9.5"
              stroke="white"
              stroke-opacity="0.1"
            />
            <g opacity="0.8">
              <path
                d="M25.08 12.0602C25.29 12.0602 25.5 12.0602 25.92 12.0602V15.2102C25.71 15.2102 25.29 15.2102 24.87 15.2102C24.45 15.2102 24.03 15.2102 23.82 15.4202C23.61 15.6302 23.61 15.8402 23.61 16.3302C23.61 16.7502 23.61 17.0302 23.61 17.4502H25.92V20.1102H23.61V31.6602H20.04V20.0402H18.15V17.3802H20.04V16.4702C20.04 14.9302 20.25 13.8102 20.67 13.3202C21.3 12.4102 22.56 11.9902 24.45 11.9902C24.66 12.0602 24.87 12.0602 25.08 12.0602Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
        <a href="https://www.instagram.com " target="_blank">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="9.5"
              stroke="white"
              stroke-opacity="0.1"
            />
            <g opacity="0.8">
              <path
                d="M33.1278 17.4113C33.1142 16.4712 32.94 15.5386 32.6067 14.6594C32.0233 13.158 30.8354 11.9708 29.3315 11.3897C28.462 11.0631 27.5428 10.888 26.6123 10.8681C25.4157 10.8147 25.0363 10.7998 21.9987 10.7998C18.9612 10.7998 18.5718 10.7998 17.3839 10.8681C16.4547 10.888 15.5355 11.0631 14.666 11.3897C13.1621 11.9708 11.973 13.158 11.3908 14.6594C11.0637 15.5274 10.8871 16.4451 10.8696 17.3728C10.8162 18.5687 10.8 18.9474 10.8 21.9799C10.8 25.0125 10.8 25.3999 10.8696 26.5871C10.8883 27.516 11.0637 28.4325 11.3908 29.303C11.9742 30.8031 13.1621 31.9903 14.6672 32.5714C15.533 32.9092 16.4522 33.1005 17.3852 33.1303C18.583 33.1837 18.9624 33.1998 22 33.1998C25.0376 33.1998 25.4269 33.1998 26.6148 33.1303C27.544 33.1116 28.4632 32.9365 29.334 32.6099C30.8378 32.0275 32.0258 30.8403 32.6091 29.3402C32.9363 28.4709 33.1117 27.5545 33.1303 26.6244C33.1838 25.4297 33.2 25.051 33.2 22.0172C33.1975 18.9847 33.1975 18.5997 33.1278 17.4113ZM21.9913 27.7147C18.8144 27.7147 16.2408 25.1453 16.2408 21.9737C16.2408 18.8021 18.8144 16.2328 21.9913 16.2328C25.1657 16.2328 27.7418 18.8021 27.7418 21.9737C27.7418 25.1453 25.1657 27.7147 21.9913 27.7147ZM27.9707 17.3591C27.2281 17.3591 26.6298 16.7606 26.6298 16.0204C26.6298 15.2803 27.2281 14.6817 27.9707 14.6817C28.7108 14.6817 29.3103 15.2803 29.3103 16.0204C29.3103 16.7606 28.7108 17.3591 27.9707 17.3591Z"
                fill="white"
              />
              <path
                d="M21.9931 25.4792C23.928 25.4792 25.4966 23.9106 25.4966 21.9757C25.4966 20.0407 23.928 18.4722 21.9931 18.4722C20.0581 18.4722 18.4896 20.0407 18.4896 21.9757C18.4896 23.9106 20.0581 25.4792 21.9931 25.4792Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="9.5"
              stroke="white"
              stroke-opacity="0.1"
            />
            <g opacity="0.8">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.21 13.2499C28.02 13.1799 25.57 13.1099 21.86 13.1099H21.37C17.8 13.1099 15.4201 13.1799 14.2301 13.3199C12.6201 13.4599 11.5 13.8799 10.87 14.4399C10.31 14.9299 9.89005 15.8399 9.75005 17.0299C9.68005 17.7999 9.61005 19.4099 9.61005 21.8599V22.2099C9.61005 24.5199 9.68004 26.1299 9.82004 26.8999C10.03 28.0199 10.3801 28.8599 11.0801 29.3499C11.7801 29.9099 12.9701 30.2599 14.6501 30.3999C15.8401 30.4699 18.2901 30.5399 22.0001 30.5399H22.4901C26.0601 30.5399 28.4401 30.4699 29.6301 30.3299C31.2401 30.1899 32.3601 29.7699 32.9901 29.2099C33.5501 28.7199 33.97 27.8099 34.11 26.6199C34.18 25.8499 34.2501 24.2399 34.2501 21.7899V21.4399C34.2501 19.1299 34.1801 17.5199 34.0401 16.7499C33.8301 15.6299 33.4801 14.7899 32.7801 14.2999C32.0801 13.7399 30.89 13.3899 29.21 13.2499ZM26.4801 21.8599L18.7801 26.4799V17.2399L26.4801 21.8599Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-bottom__copyright">
        ©2022 The Watch Spot. All rights reserved.
      </p>
      <div class="footer-bottom__links">
        <a class="footer-bottom__link" href="#">Privacy Policy</a>
        <a class="footer-bottom__link" href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerComp",
  components: {},
};
</script>

<style lang="scss" scoped>
.footer {
  max-width: 100%;
  background: var(--darkGreen);
  padding-top: 100px;
  padding-bottom: 32px;
  &-wrap {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
  }
  &__text {
    max-width: 180px;
    color: var(--white);
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
}
.contact {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: none;
  &__item {
    color: var(--white);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
  }
}
.icon {
  display: flex;
  gap: 16px;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 170px;
  color: rgb(198, 205, 209);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  &__links {
    display: flex;
    gap: 18px;
  }
  &__link {
    color: rgb(198, 205, 209);
  }
}
</style>
