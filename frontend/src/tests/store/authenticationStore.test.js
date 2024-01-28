import { expect, describe, it } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { createApp } from 'vue'
import { useAuthenticationStore } from "@/stores/authenticationStore";

describe("Test authentication store", async () => {
  let authenticationStore;
  const app = createApp({})
  beforeEach(() => {
    const pinia = createPinia()
    app.use(pinia)
    setActivePinia(pinia)
    authenticationStore = useAuthenticationStore();
  })

  it("AuthenticationStore should contain properties email", async () => {
    expect(authenticationStore).toHaveProperty("email");
  });

  it("AuthenticationStore should contain properties email", async () => {
    expect(authenticationStore.email).toEqual("")
  });

  it("AuthenticationStore should contain properties password", async () => {
    expect(authenticationStore).toHaveProperty("password");
  });

  it("AuthenticationStore should contain properties email", async () => {
    expect(authenticationStore.password).toBe("")
  });

  it("AuthenticationStore should contain properties isLoggedIn", async () => {
    expect(authenticationStore).toHaveProperty("isLoggedIn");
  });

  it("AuthenticationStore should contain properties isLoggedIn", async () => {
    expect(authenticationStore.isLoggedIn).toBe(false);
  });

  it('should update email value', () => {
    authenticationStore.setEmailValue('newEmail');
    expect(authenticationStore.email).toStrictEqual('newEmail')
  });

  it('should update password value', () => {
    authenticationStore.setPasswordValue('newPassword');
    expect(authenticationStore.password).toStrictEqual('newPassword')
  });

  it('should return password value', () => {
    authenticationStore.password = "password";
    expect(authenticationStore.getPasswordValue).toStrictEqual('password')
  });

  it('should return email value', () => {
    authenticationStore.email = "email";
    expect(authenticationStore.getEmailValue).toStrictEqual('email')
  });

})