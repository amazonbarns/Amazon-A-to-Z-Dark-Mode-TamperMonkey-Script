# Amazon A-to-Z Dark Mode TamperMonkey Script

This repository contains a TamperMonkey userscript that applies a high-contrast dark mode to the Amazon A-to-Z internal tool (atoz.amazon.work).

## Features

- Forces a dark theme on all pages within atoz.amazon.work
- High-contrast colors for better readability
- Automatically adjusts dynamically loaded content
- Nuclear approach to override all styles for maximum compatibility

## Installation Instructions

### Step 1: Install TamperMonkey Extension

TamperMonkey is a userscript manager that allows you to run custom scripts on websites.

- **For Google Chrome/Chromium:**
  - Visit the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
  - Click "Add to Chrome" and follow the prompts

- **For Mozilla Firefox:**
  - Visit the [Firefox Add-ons site](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
  - Click "Add to Firefox" and follow the prompts

- **For other browsers:**
  - Search for "TamperMonkey" in your browser's extension store or visit the official site at https://www.tampermonkey.net/

### Step 2: Install the Dark Mode Script

1. Open your browser and ensure TamperMonkey is installed and enabled.

2. Navigate to this GitHub repository: https://github.com/amazonbarns/Amazon-A-to-Z-Dark-Mode-TamperMonkey-Script

3. Click on the file named `atoz_dark_mode.user.js`

4. Click the "Raw" button (usually located near the top-right of the file view)

5. TamperMonkey should automatically detect the userscript and display an installation prompt.

6. Click "Install" in the TamperMonkey popup to add the script.

Alternatively, you can:
- Copy the entire content of `atoz_dark_mode.user.js`
- Open TamperMonkey's dashboard (click the TamperMonkey icon in your browser toolbar)
- Click "Add a new script"
- Paste the script content and save

### Step 3: Verify Installation

1. Visit https://atoz.amazon.work (or any subdomain)
2. The page should now display in dark mode automatically
3. If the script doesn't activate, check that TamperMonkey is enabled and the script is turned on in the TamperMonkey dashboard

## Troubleshooting

- **Script not working:** Ensure you're on a atoz.amazon.work domain. The script only activates on matching URLs.
- **TamperMonkey not detecting script:** Try refreshing the Raw page or manually copying/pasting the script.
- **Conflicts with other extensions:** Disable other theme-related extensions temporarily to test.

## Contributing

If you find issues or want to improve the script, feel free to open an issue or submit a pull request.

## License

This script is provided as-is for internal Amazon use. Please ensure compliance with company policies.