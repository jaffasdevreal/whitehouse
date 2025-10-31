interface AppConfig {
  containerId: string;
  title: string;
  message: string;
}

class WhiteHouseApp {
  private container: HTMLElement;
  private config: AppConfig;

  constructor(containerId: string, config?: Partial<AppConfig>) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with id "${containerId}" not found`);
    }
    
    this.container = container;
    this.config = {
      containerId,
      title: config?.title || "White House",
      message: config?.message || "Welcome to your Google Sites integration"
    };

    this.init();
  }

  private init(): void {
    this.render();
    this.attachEventListeners();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="wh-container">
        <h1 class="wh-title">${this.config.title}</h1>
        <p class="wh-message">${this.config.message}</p>
        <button class="wh-button" id="wh-button">Get Started</button>
      </div>
    `;
  }

  private attachEventListeners(): void {
    const button = document.getElementById('wh-button');
    if (button) {
      button.addEventListener('click', this.handleButtonClick.bind(this));
    }
  }

  private handleButtonClick(event: Event): void {
    event.preventDefault();
    console.log('Button clicked');
    // Add your custom logic here
    const button = event.target as HTMLButtonElement;
    button.textContent = 'Clicked!';
  }

  public updateConfig(config: Partial<AppConfig>): void {
    this.config = { ...this.config, ...config };
    this.render();
    this.attachEventListeners();
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initApp();
  });
} else {
  initApp();
}

function initApp(): void {
  try {
    new WhiteHouseApp('whitehouse-app');
  } catch (error) {
    console.error('Failed to initialize White House app:', error);
  }
}

// Export for external use
(window as any).WhiteHouseApp = WhiteHouseApp;
