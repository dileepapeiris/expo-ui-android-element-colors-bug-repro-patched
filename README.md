# Expo UI Android elementColors rgb() repro (patched)

This repository demonstrates the Android crash described in [expo/expo#43960](https://github.com/expo/expo/issues/43960) and demonstrates the fix by patching `expo-modules-core` color parsing.

### Before / After Comparison

### Before / After screenshots
| Before (crash) | After (works) |
|---|---|
| <img width="318" height="668" alt="image" src="https://github.com/user-attachments/assets/43d26069-c31f-446a-9193-71687d4410a8" />| <img width="316" height="681" alt="image" src="https://github.com/user-attachments/assets/5d3ee1a9-eb31-4ce2-aad6-f89d276e7ee6" /> |

## Prerequisites

- **Node** + **Yarn**
- **Android SDK** + Emulator or physical device

## Installation

1. **Clone and install dependencies:**
   ```bash
   yarn install
   ```

2. **Apply the fix (via patch-package):**
   This repo uses `patch-package` to apply the fix to `expo-modules-core` inside `node_modules` without requiring a custom build of the entire Expo monorepo.
   ```bash
   yarn postinstall
   ```

## Running the Repro

To start the app on Android:
```bash
npx expo run:android
```

## What to Look For

In this example, the `DateTimePicker` (or any `@expo/ui` component that accepts `elementColors`) is configured with CSS-style RGB strings:

```javascript
elementColors={{ 
  containerColor: "rgb(0,0,0)" 
}}
```

### Expected Results

*   **Before applying the patch:** Android throws `IllegalArgumentException: Unknown color` and the app crashes.
*   **After applying the patch:** The application runs smoothly, and the picker renders normally with the specified color.

## Links

- **Main Issue:** [expo/expo#43960](https://github.com/expo/expo/issues/43960)
- **Original Upstream Repro:** [MariooC14/expo-ui-android-element-colors-bug-repro](https://github.com/MariooC14/expo-ui-android-element-colors-bug-repro)
```
