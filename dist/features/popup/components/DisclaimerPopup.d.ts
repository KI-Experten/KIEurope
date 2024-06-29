import '../../../assets/index.css';
export type DisclaimerPopupProps = {
    isOpen?: boolean;
    onAccept?: () => void;
    onDecline?: () => void;
    title?: string;
    message?: string;
    acceptButtonText?: string;
    declineButtonText?: string;
    linkUrl?: string;
    linkText?: string;
};
export declare const DisclaimerPopup: (props: DisclaimerPopupProps) => import("solid-js").JSX.Element;
//# sourceMappingURL=DisclaimerPopup.d.ts.map