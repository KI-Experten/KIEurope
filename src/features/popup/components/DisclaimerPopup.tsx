// DisclaimerPopup.tsx
import { createSignal, createEffect, onMount, Show, splitProps } from 'solid-js';
import '../../../assets/index.css';

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
      <div class="popup-overlay">
        <div class="popup-content">
          <h2>Disclaimer</h2>
          <p>Stimmen Sie unserer Datenschutzerklärung zu?</p>
          <div class="popup-buttons">
            <button class="popup-button accept" onClick={handleAccept}>
              Ja
            </button>
            <button class="popup-button decline" onClick={handleDecline}>
              Nein
            </button>
          </div>
        </div>
      </div>
    </Show>
  );
};
