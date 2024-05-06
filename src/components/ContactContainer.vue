<template>
  <div class="container-fluid" id="contact">
    <div class="row contact-me-container">
      <div class="col-10 offset-1 offset-xxl-2 col-xxl-4 text-start">
        <div class="mb-3">
          <h3>CONTACT&nbsp;ME</h3>
        </div>
        <form @submit.prevent="sendEmail" novalidate>
          <div class="mb-3">
            <label for="name-input" class="form-label">Name:</label>
            <input
              id="name-input"
              type="text"
              class="form-control"
              v-model="formData.name"
              tabindex="0"
            />
            <div class="error-container">
              <span
                v-for="(error, index) in v$.name.$errors"
                :key="index"
                style="min-height: 24px"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label for="email-input" class="form-label">Email Address:</label>
            <input
              id="email-input"
              type="email"
              class="form-control"
              v-model="formData.email"
              tabindex="0"
            />
            <div class="error-container">
              <span
                v-for="(error, index) in v$.email.$errors"
                :key="index"
                style="min-height: 24px"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label for="message-input" class="form-label">Message:</label>
            <textarea
              id="message-input"
              type="text"
              class="form-control"
              v-model="formData.message"
              tabindex="0"
            />
            <div class="error-container">
              <span
                v-for="(error, index) in v$.message.$errors"
                :key="index"
                style="min-height: 24px"
              >
                {{ error.$message }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <button
              class="form-control btn btn-primary"
              type="submit"
              id="sendBtn"
              tabindex="0"
            >
              Send Message
            </button>
          </div>
        </form>
        <div class="mb-3" v-if="success">Message successfully sent.</div>
        <div class="mb-3" v-if="error">
          Message failed to send. {{ errorMsg }}
        </div>
      </div>
      <div class="col-10 offset-1 offset-xxl-0 col-xxl-5 p-0 mb-5">
        <div class="code-container row mx-auto text-start mb-3">
          <span
            ><span class="number">1.</span>&emsp;const
            <span class="highlight">button</span> =
            <span class="highlight">document.querySelector</span>(<span
              class="text"
              >"#sendBtn"</span
            >);</span
          >
          <span><span class="number">2.</span></span>
          <span
            ><span class="number">3.</span>&emsp;const
            <span class="highlight">message</span> = {</span
          >
          <span
            ><span class="number">4.</span>&emsp;&emsp;<span class="highlight"
              >name</span
            >: <span class="text">"Jon Doe"</span></span
          >
          <span
            ><span class="number">5.</span>&emsp;&emsp;<span class="highlight"
              >email</span
            >: <span class="text">""</span></span
          >
          <span
            ><span class="number">6.</span>&emsp;&emsp;<span class="highlight"
              >message</span
            >: <span class="text">""</span></span
          >
          <span
            ><span class="number">7.</span>&emsp;&emsp;<span class="highlight"
              >date</span
            >: <span class="text">"Thu 21 Apr"</span></span
          >
          <span><span class="number">8.</span>&emsp;};</span>
          <span><span class="number">9.</span></span>
          <span
            ><span class="number">10.</span>&emsp;<span class="highlight"
              >button.addEventListener</span
            >(<span class="text">"click"</span>, () => {</span
          >
          <span
            ><span class="number">11.</span>&emsp;&emsp;<span class="highlight"
              >form.send(message)</span
            >;</span
          >
          <span><span class="number">12.</span>&emsp;});</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, computed } from "vue";
import emailjs from "@emailjs/browser";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const success: Ref<boolean> = ref(false);
const error: Ref<boolean> = ref(false);
const errorMsg: Ref<string> = ref("");

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    message: { required },
  };
});
const v$ = useVuelidate(rules, formData);

async function sendEmail() {
  success.value = false;
  error.value = false;
  const result = await v$.value.$validate();
  if (result) {
    emailjs
      .send("service_6u53oyk", "template_1afiqxa", {
        to_name: "Neal",
        from_name: formData.value.name,
        from_email: formData.value.email,
        message: formData.value.message,
      })
      .then(
        (response) => {
          success.value = response.status === 200;
        },
        (error) => {
          success.value = false;
          error.value = true;
          errorMsg.value = JSON.stringify(error);
        }
      );
  }
}
</script>

<style lang="scss">
#contact {
  min-height: 100vh;
  background-color: #ffffff;
  align-content: center;
  .contact-me-container {
    h3 {
      color: $primary;
      font-family: "Open Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
    }
    form {
      max-width: 70%;
      input {
        max-width: 60%;
      }
      label {
        color: $primary;
        font-family: "Open Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
      }

      button.btn-primary {
        background-color: $primary;
        color: #ffffff;
        max-width: 13rem;
      }
      .error-container {
        color: red;
        min-height: 24px;
        text-align: left;
      }
    }
    .code-container {
      display: flex;
      flex-direction: column;
      overflow-x: scroll;
      span {
        font-family: Consolas;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
      span.number {
        text-align: right;
        font-family: Consolas;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
      span.highlight {
        color: #8540f5;
      }
      span.text {
        color: #d98a02;
      }
    }
    @include media-breakpoint-up(md) {
      .code-container {
        overflow-x: hidden;
      }
    }
  }
}
</style>
