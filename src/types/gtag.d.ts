interface GtagEvent {
    action: string;
    category: string;
    label: string;
    value: number;
}

interface WindowWithGtag extends Window {
    gtag: (
        command: 'config' | 'event' | 'consent',
        targetId: string,
        config?: {
            [key: string]: any;
        }
    ) => void;
    dataLayer: any[];
}

declare global {
    interface Window extends WindowWithGtag { }
    function gtag(...args: any[]): void;
}

export { }; 