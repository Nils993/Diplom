<template>
  <div class="buy-wrap">
    <div class="buy center" v-if="selectedWatch">
      <div class="catalog-item">
        <img :src="selectedWatch.src" alt="" />
        <h3 class="catalog-item__name">{{ selectedWatch.name }}</h3>
        <p class="catalog-item__price">{{ selectedWatch.price }}</p>
      </div>
      <form class="form" action="/">
        <button class="close-button" @click="closeForm">
          <svg
            width="24.000000"
            height="24.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip61_117">
                <rect
                  id="x"
                  width="24.000000"
                  height="24.000000"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="x"
              width="24.000000"
              height="24.000000"
              fill="#FFFFFF"
              fill-opacity="0"
            />
            <g clip-path="url(#clip61_117)">
              <path
                id="Vector"
                d="M18 6L6 18"
                stroke="#141414"
                stroke-opacity="1.000000"
                stroke-width="1.300000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M6 6L18 18"
                stroke="#141414"
                stroke-opacity="1.000000"
                stroke-width="1.300000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </button>
        <label class="form__label"
          >Full name
          <input
            required
            class="form__input"
            type="text"
            placeholder="Enter your full name"
          />
        </label>
        <label class="form__label"
          >Email
          <input
            required
            class="form__input"
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label class="form__label"
          >Card number
          <input
            required
            class="form__input"
            type="text"
            placeholder="Enter card"
            inputmode="numeric"
            @keypress="onlyNumber"
            minlength="16"
            maxlength="16"
          />
        </label>

        <label class="form__label"
          >Comments
          <textarea
            class="form__input"
            cols="40"
            rows="10"
            placeholder="Enter your text"
          ></textarea>
        </label>
        <button class="form__but">submit</button>
        <p class="form__agree">
          By clicking on “Submit” button, you agree to our
          <a href="#">Privacy Policy</a> ,<br />
          and allow Promodo to use this information for marketing purposes.
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedWatch: {
      type: Object,
    },
  },
  data() {
    return {
      fullName: "",
      email: "",
      cardNumber: "",
      comments: "",
    };
  },
  methods: {
    closeForm() {
      this.$emit("closeForm");
    },
    onlyNumber(event) {
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.buy-wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background: white;
}
.buy {
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
}
.close-button {
  position: absolute;
  top: -12px;
  right: -25px;
  background: none;
  border: none;
}
.catalog {
  &-item {
    padding-top: 30px;
    max-width: 100%;
    width: 276px;
    text-align: center;
    &__name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(20, 20, 20);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-top: 38px;
      margin-bottom: 4px;
    }
    &__price {
      color: rgba(20, 20, 20, 0.5);
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
    }
  }
}
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 508px;
  &__label {
    display: flex;
    flex-direction: column;
    color: var(--colorText);
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
  &__input {
    appearance: none;
    padding: 12px 16px 12px 16px;
    border: 1px solid rgba(20, 20, 20, 0.5);
    border-radius: 8px;
    margin-top: 12px;
    margin-bottom: 24px;
    &::placeholder {
      color: var(--colorText);
      opacity: 0.5;
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
    }
  }
  &__but {
    padding: 18px;
    border-radius: 8px;
    background-color: var(--darkGreen);
    color: var(--white);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 16px;
    margin-bottom: 12px;
    width: 100%;
  }
  &__agree {
    color: rgba(20, 20, 20, 0.4);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    & a {
      color: rgba(20, 20, 20, 0.4);
      text-decoration: underline;
    }
  }
}
@media (max-width: 750px) {
  .buy {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
