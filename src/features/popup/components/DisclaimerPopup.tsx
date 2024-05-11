// DisclaimerPopup.tsx
import { createSignal, createEffect, onMount, Show, splitProps } from 'solid-js';

export type DisclaimerPopupProps = {
  isOpen?: boolean;
  onAccept?: () => void;
  onDecline?: () => void;
};

export const DisclaimerPopup = (props: DisclaimerPopupProps) => {
  const [popupProps] = splitProps(props, ['onAccept', 'onDecline', 'isOpen']);

  const handleAccept = () => {
    props.onAccept?.();
  };

  const handleDecline = () => {
    props.onDecline?.();
  };

  return (
    <Show when={popupProps.isOpen}>
      <div>
        <div>
          <h2>Disclaimer</h2>
          <p>This is your disclaimer content.</p>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      </div>
    </Show>
  );
};
