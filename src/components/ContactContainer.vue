<template>
  <div class="container-fluid" id="contact">
    <div class="row contact-me-container mb-5">
      <div class="col-10 offset-1 offset-xxl-2 col-xxl-4 text-start">
        <div class="mb-3">
          <h3>CONTACT&nbsp;ME</h3>
        </div>
        <form @submit.prevent="sendEmail">
          <div class="mb-3">
            <label for="name-input" class="form-label">Name:</label>
            <input
              id="name-input"
              type="text"
              class="form-control"
              v-ref="name"
              tabindex="0"
            />
          </div>
          <div class="mb-3">
            <label for="email-input" class="form-label">Email Address:</label>
            <input
              id="email-input"
              type="text"
              class="form-control"
              v-model="email"
              tabindex="0"
            />
          </div>
          <div class="mb-3">
            <label for="message-input" class="form-label">Message:</label>
            <textarea
              id="message-input"
              type="text"
              class="form-control"
              v-model="message"
              tabindex="0"
            />
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
      </div>
      <div class="col-10 offset-1 col-xxl-3">
        <div class="code-container row mx-auto text-start">
          <span
            ><span class="number">1.</span>const button =
            document.querySelector("#sendBtn");</span
          >
          <span><span class="number">2.</span></span>
          <span><span class="number">3.</span>const message = {</span>
          <span><span class="number">4.</span>&emsp;name: "Jon Doe"</span>
          <span><span class="number">5.</span>&emsp;email: ""</span>
          <span><span class="number">6.</span>&emsp;message: ""</span>
          <span><span class="number">7.</span>&emsp;date: "Thu 21 Apr"</span>
          <span><span class="number">8.</span>};</span>
          <span><span class="number">9.</span></span>
          <span
            ><span class="number">10.</span>button.addEventListener("click", ()
            => {</span
          >
          <span><span class="number">11.</span>&emsp;form.send(message);</span>
          <span><span class="number">12.</span>});</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import emailjs from "@emailjs/browser";

const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const message: Ref<string> = ref("");
function sendEmail() {
  emailjs
    .send("service_6u53oyk", "template_1afiqxa", {
      to_name: "Neal",
      from_name: name.value,
      from_email: email.value,
      message: message.value,
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
}
</script>

<style lang="scss">
#contact {
  min-height: 96vh;
  background-color: #ffffff;
  .contact-me-container {
    margin-top: 22rem;
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
    }
    .code-container {
      display: flex;
      flex-direction: column;
      span.number {
        text-align: right;
        font-family: Consolas;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }
}
</style>
