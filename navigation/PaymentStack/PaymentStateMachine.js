import { createMachine } from "xstate";

const paymentStackStateMachine = createMachine({
  id: "paymentStackMachine",
  initial: "activatePayment",
  states: {
    activatePayment: {
      on: {
        CONFIRM_PAYMENT_ACTIVATION: { target: "confirmPayment" },
      },
    },
    confirmPayment: {
      invoke: {
        id: "navigateToConfirmPayment",
        src: "navigateToConfirmPayment",
      },
      initial: "confirmView",
      states: {
        confirmView: {
          on: {
            CONFIRM: { target: "paymentConfirmed" },
            DECLINE: { target: "paymentDeclined" },
          },
        },
        paymentConfirmed: {},
        paymentDeclined: {
          invoke: {
            id: "navigateToActivatePayment",
            src: "navigateToActivatePayment",
          },
        },
      },
    },
  },
});

export default paymentStackStateMachine;
