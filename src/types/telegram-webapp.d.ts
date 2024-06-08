declare namespace Telegram {
  interface WebApp {
    initData: string;
    initDataUnsafe: any;
    version: string;
    platform: string;
    colorScheme: 'light' | 'dark';
    themeParams: any;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    backButton: {
      isVisible: boolean;
      onClick: () => void;
      show: () => void;
      hide: () => void;
    };
    MainButton: {
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isProgressVisible: boolean;
      isActive: boolean;
      setText: (text: string) => WebApp.MainButton;
      onClick: (callback: () => void) => void;
      show: () => WebApp.MainButton;
      hide: () => WebApp.MainButton;
      enable: () => WebApp.MainButton;
      disable: () => WebApp.MainButton;
      showProgress: (leaveActive?: boolean) => WebApp.MainButton;
      hideProgress: () => WebApp.MainButton;
    };
    HapticFeedback: {
      impactOccurred: (style: 'light' | 'medium' | 'heavy') => void;
      notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
      selectionChanged: () => void;
    };
    ready: () => void;
    close: () => void;
  }
}

interface Window {
  Telegram: {
    WebApp: Telegram.WebApp;
  };
}
