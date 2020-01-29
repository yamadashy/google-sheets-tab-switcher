const TAB_MENU_CLASS = '.goog-menu.goog-menu-vertical.goog-menu-noaccel.docs-menu-hide-mnemonics';

class QuickTabSwitcher {
  waitRenderTabMenu() {
    return new Promise((resolve, reject) => {
      const loopStartTime = Date.now();

      const checkTabsLoop = () => {
        if (document.getElementById(TAB_MENU_CLASS)) {
          resolve();
          return;
        }

        // timeout 30 seconds
        if (Date.now() - loopStartTime > 1000 * 30) {
          resolve();
          return;
        }

        setTimeout(checkTabsLoop, 100);
      };

      checkTabsLoop();
    });
  }

  insertSearchInput() {
    // TODO: quick search input
  }
}

(async () => {
  const quickTabSwitcher = new QuickTabSwitcher();
  await quickTabSwitcher.waitRenderTabMenu();
  quickTabSwitcher.insertSearchInput();
})();
