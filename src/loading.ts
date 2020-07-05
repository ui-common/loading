// tslint:disable-next-line:class-name
export class resource {
  static loading = null;
}

export function showLoading(isFirstTime?: boolean) {
  try {
    if (!resource.loading) {
      resource.loading = (window as any).sysLoading;
    }
    if (resource.loading) {
      resource.loading.style.display = 'block';
      if (isFirstTime) {
        resource.loading.classList.add('dark');
      } else {
        resource.loading.classList.remove('dark');
      }
    }
  } catch (er) {
    console.log(er);
  }
}

export function hideLoading() {
  try {
    if (!resource.loading) {
      resource.loading = (window as any).sysLoading;
    }
    if (resource.loading) {
      resource.loading.style.display = 'none';
    }
  } catch (er) {
    console.log(er);
  }
}

export interface LoadingService {
  showLoading(firstTime?: boolean): void;
  hideLoading(): void;
}

class DefaultLoadingService {
  showLoading(firstTime?: boolean): void {
    showLoading(firstTime);
  }
  hideLoading(): void {
    hideLoading();
  }
}

export const loading = new DefaultLoadingService();
