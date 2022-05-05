type InitSubscriptionType = {
  left: () => void;
  right: () => void;
  up: () => void;
  down: () => void;
  enter: () => void;
};

export const initKeySubscription = ({
  left,
  right,
  up,
  down,
  enter,
}: InitSubscriptionType) => {
  window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 37:
        return left();
      case 38:
        return up();
      case 39:
        return right();
      case 40:
        return down();
      case 13:
        return enter();
    }
  });
};
