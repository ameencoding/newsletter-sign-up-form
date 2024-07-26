"use strict";

const btnSubmit = document.querySelector(".btn-submit");
const btnDismiss = document.querySelector(".btn-dismiss");

const success = document.querySelector(".success");
const wrapper = document.querySelector(".wrapper");

const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector(".error");

const msg = success.querySelector("blockquote strong");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!input.value === "" || input.value.includes("@")) {
    msg.textContent = input.value;

    setTimeout(() => {
      wrapper.style.display = "none";
      success.style.display = "block";
    }, 400);
  } else {
    error.style.display = "block";
    input.classList.add("error-input");
  }
});

btnDismiss.addEventListener("click", () => {
  setTimeout(() => {
    location.reload();
  }, 400);
});
