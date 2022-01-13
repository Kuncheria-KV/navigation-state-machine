import { createMachine } from "xstate";

const homeStackStateMachine = createMachine({
  id: "rootStateMachine",
  initial: "home",
  states: {
    home: {
      on: {
        CREATE_COUPON: { target: "coupon" },
        ENABLE_DELIVERY: {
          target: "delivery",
        },
      },
    },
    coupon: {
      invoke: {
        id: "navigateToCoupons",
        src: "navigateToCoupons",
        onDone: { target: "home" },
      },
    },
    delivery: {
      invoke: {
        id: "navigateToDelivery",
        src: "navigateToDelivery",
        onDone: { target: "home" },
      },
    },
  },
});

export default homeStackStateMachine;
