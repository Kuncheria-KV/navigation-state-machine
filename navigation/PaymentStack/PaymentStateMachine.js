import { assign, createMachine } from "xstate";

const paymentStackStateMachine = createMachine(
  {
    id: "paymentStackMachine",
    initial: "activatePayment",
    context: {
      source: "",
      params: {},
    },
    states: {
      activatePayment: {
        on: {
          SET_SOURCE: {
            actions: ["setSource"],
          },
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
          paymentConfirmed: {
            type: "final",
            invoke: {
              id: "navigateBackToSource",
              src: "navigateBackToSource",
            },
          },
          paymentDeclined: {
            invoke: {
              id: "navigateToActivatePayment",
              src: "navigateToActivatePayment",
              onDone: { target: "#paymentStackMachine.activatePayment" },
            },
          },
        },
      },
    },
  },
  {
    actions: {
      setSource: assign({
        source: (context, event) => event.data.source,
        params: (context, event) => event.data.params,
      }),
    },
  }
);

export default paymentStackStateMachine;
