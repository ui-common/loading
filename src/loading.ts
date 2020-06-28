export class LoadingUtil {
  private static sysLoading = null;
  static showLoading = (isFirstTime?: boolean) => {
    try {
      if (!LoadingUtil.sysLoading) {
        LoadingUtil.sysLoading = (window as any).sysLoading;
      }
      if (LoadingUtil.sysLoading) {
        LoadingUtil.sysLoading.style.display = 'block';
        if (isFirstTime) {
          LoadingUtil.sysLoading.classList.add('dark');
        } else {
          LoadingUtil.sysLoading.classList.remove('dark');
        }
      }
    } catch (er) {
      console.log(er);
    }
  }

  static hideLoading = () => {
    try {
      if (!LoadingUtil.sysLoading) {
        LoadingUtil.sysLoading = (window as any).sysLoading;
      }
      if (LoadingUtil.sysLoading) {
        LoadingUtil.sysLoading.style.display = 'none';
      }
    } catch (er) {
      console.log(er);
    }
  }
}

export interface LoadingService {
  showLoading(firstTime?: boolean): void;
  hideLoading(): void;
}

class DefaultLoadingService {
  showLoading(firstTime?: boolean): void {
    LoadingUtil.showLoading(firstTime);
  }
  hideLoading(): void {
    LoadingUtil.hideLoading();
  }
}

export const loading = new DefaultLoadingService();
