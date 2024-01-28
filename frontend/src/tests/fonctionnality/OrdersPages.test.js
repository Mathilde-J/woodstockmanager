import { expect, describe, it } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { createApp } from 'vue'
import { useAuthenticationStore } from "@/stores/authenticationStore";
import { useOrdersStore } from "@/stores/ordersStore";
import OrdersView from "../../views/OrdersView.vue";

describe("Test authentication store", async () => {
  let authenticationStore;
  let orderStore;
  const app = createApp({})
  beforeEach(() => {
    const pinia = createPinia()
    app.use(pinia)
    setActivePinia(pinia)
    authenticationStore = useAuthenticationStore();
    orderStore = useOrdersStore();
  })

  describe('After login in, orders route is push', () => {
      it('login user and redierct to orders page', async () => {
      authenticationStore.setEmailValue('firstName.lastName@test.com');
      expect(authenticationStore.email).toStrictEqual('firstName.lastName@test.com')
      authenticationStore.setPasswordValue('e5D}-[fZB`7txWSqa,w@');
      expect(authenticationStore.password).toStrictEqual('e5D}-[fZB`7txWSqa,w@')

      await authenticationStore.loginAction();
      const getLoggedIn = localStorage.getItem('loggedIn');
      const connectedUserId = localStorage.getItem('connectedUserId');
      expect(getLoggedIn).toBeDefined();
      expect(getLoggedIn).toStrictEqual(true);
      expect(connectedUserId).toBeDefined();

      const currentRoute = router.currentRoute.value;
      expect(currentRoute.name).toBe("commandes");
      expect(orderStore.getOrdersAction()).toBeCalled();

      const wrapper = mount(OrdersView);
      expect(wrapper.exists()).toBe(true);
    })

  })

})