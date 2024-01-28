import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { createApp } from 'vue'
import { expect, describe, it } from 'vitest';
import LoginFormCpt from '../../components/forms/LoginFormCpt.vue';
import LoginView from "../../views/LoginView.vue";

const app = createApp({})
beforeEach(() => {
  const pinia = createPinia()
  app.use(pinia)
  setActivePinia(pinia)
})

describe("MyComponent", async () => {
  it("renders correctly", () => {
    const wrapper = mount(LoginView);
    expect(wrapper.exists()).toBe(true);
  });

  it("LoginView has specific componnets", async () => {
    const wrapperLoginView = mount(LoginView);
    expect(wrapperLoginView.find('loginformcpt').exists()).toBeTruthy();
  });

  it("Display specific text for LoginFormCpt", () => {
    const wrapperForm = mount(LoginFormCpt);
    expect(wrapperForm.find('form').exists()).toBeTruthy()
  });

});