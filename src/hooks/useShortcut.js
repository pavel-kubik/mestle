import { useCallback, useEffect } from "react";

export const SHORTCUTS_LIST = {
  moveOptionUp: { event: "keydown", key: "ArrowUp" },
  moveOptionDown: { event: "keydown", key: "ArrowDown" },
  selectOption: { event: "keypress", key: "Enter" },
};

const useShortcut = (shortcut, handler) => {
  const shortcutSettings = SHORTCUTS_LIST[shortcut];

  const shortcutHandler = useCallback(
    (event) => {
      if (shortcutSettings.key && shortcutSettings.key !== event.key) {
        return;
      }

      handler();
    },
    [shortcutSettings, handler]
  );

  useEffect(() => {
    if (!shortcutSettings || !shortcutHandler) {
      console.error("Using shortcut without proper settings");
      return;
    }

    document.addEventListener(shortcutSettings.event, shortcutHandler);

    return () =>
      document.removeEventListener(shortcutSettings.event, shortcutHandler);
  }, [shortcutSettings, shortcutHandler]);
};

export default useShortcut;
