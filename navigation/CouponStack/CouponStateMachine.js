import { createMachine } from "xstate";

const couponStackStateMachine = createMachine({
  id: "couponStateMachine",
  initial: "createCoupon",
  states: {
    createCoupon: {
      on: {
        CONFIRM_COUPON: { target: "confirmCoupon" },
        ACTIVATE_PAYMENT: { target: "activatePayment" },
      },
    },
    activatePayment: {
      invoke: {
        id: "navigateToPayment",
        src: "navigateToPayment",
        onDone: { target: "createCoupon" },
      },
    },
    confirmCoupon: {
      invoke: {
        id: "navigateToConfirmCoupon",
        src: "navigateToConfirmCoupon",
      },
      on: {
        CANCEL: { target: "cancelCouponCreation" },
        APPROVE_COUPON: { target: "approveCouponCreation" },
      },
    },
    cancelCouponCreation: {
      invoke: {
        id: "navigateToHome",
        src: "navigateToHome",
        onDone: { target: "createCoupon" },
      },
    },
    approveCouponCreation: {
      invoke: [
        { id: "callCreateCoupon", src: "callCreateCoupon" },
        {
          id: "navigateToSuccess",
          src: "navigateToSuccess",
          onDone: { target: "couponCreateSuccess" },
        },
      ],
    },
    /**
     * Creates a nested state for handling close of success in success page
     * We can create nested states for handling internal state changes in one state.
     */
    couponCreateSuccess: {
      id: "couponCreateSuccess",
      initial: "successView",
      states: {
        successView: {
          on: {
            CLOSE: { target: "successClosed" },
          },
        },
        successClosed: {
          invoke: {
            id: "navigateToHome2",
            src: "navigateToHome",
            onDone: { target: "#couponStateMachine.createCoupon" },
          },
        },
      },
    },
  },
});

export default couponStackStateMachine;
