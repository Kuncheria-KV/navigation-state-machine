import { createMachine } from "xstate";

const deliveryStackStateMachine = createMachine({
  id: "deliveryStateMachine",
  initial: "enableDeliveryMethod",
  states: {
    enableDeliveryMethod: {
      on: {
        CONFIRM_DELIVERY_OPTION: { target: "confirmDeliveryOption" },
        ACTIVATE_PAYMENT: { target: "activatePayment" },
      },
    },
    activatePayment: {
      invoke: {
        id: "navigateToPayment",
        src: "navigateToPayment",
        onDone: { target: "enableDeliveryMethod" },
      },
    },
    confirmDeliveryOption: {
      invoke: {
        id: "navigateToConfirmDeliveryOption",
        src: "navigateToConfirmDeliveryOption",
      },
      on: {
        CANCEL: { target: "cancelDeliveryOption" },
        APPROVE_DELIVERY_OPTION: { target: "approveDeliveryOption" },
      },
    },
    cancelDeliveryOption: {
      invoke: {
        id: "navigateToHome",
        src: "navigateToHome",
        onDone: { target: "enableDeliveryMethod" },
      },
    },
    approveDeliveryOption: {
      invoke: [
        { id: "callEnableDeliveryOption", src: "callEnableDeliveryOption" },
        {
          id: "navigateToHome",
          src: "navigateToHome",
          onDone: { target: "enableDeliveryMethod" },
        },
      ],
    },
  },
});

export default deliveryStackStateMachine;
