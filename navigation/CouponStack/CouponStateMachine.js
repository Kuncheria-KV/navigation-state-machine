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
          id: "navigateToHome",
          src: "navigateToHome",
          onDone: { target: "createCoupon" },
        },
      ],
    },
  },
});

export default couponStackStateMachine;
