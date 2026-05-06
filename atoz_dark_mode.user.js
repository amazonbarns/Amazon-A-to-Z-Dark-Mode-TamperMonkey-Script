// ==UserScript==
// @name         AtoZ Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  High-contrast dark mode for atoz.amazon.work — nuclear approach
// @author       Quick
// @match        https://atoz.amazon.work/*
// @match        https://*.atoz.amazon.work/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    document.documentElement.setAttribute('data-stencil-prefers-color-scheme', 'dark');

    var css = `
    /* ===== NUCLEAR RESET: Force ALL text white ===== */
    /* This uses the highest-specificity trick: repeating the selector */
    *:not(svg):not(svg *) {
        color: #f0f0f0 !important;
    }

    /* ===== ROOT VARIABLE OVERRIDES ===== */
    :root,
    html,
    html[data-stencil-prefers-color-scheme] {
        --st-dt-color-bg-primary: #0d0d0d !important;
        --st-dt-color-bg-secondary: #1a1a1a !important;
        --st-dt-color-bg-tertiary: #262626 !important;
        --st-dt-color-text-primary: #f0f0f0 !important;
        --st-dt-color-text-secondary: #e0e0e0 !important;
        --st-dt-color-text-tertiary: #cccccc !important;
        --st-dt-color-border-primary: #444444 !important;
        --st-dt-color-input-border-disabled: #444444 !important;
        --st-dt-color-action-utility-bg-default: #111111 !important;
        --st-dt-color-action-utility-bg-hover: #222222 !important;
        --st-dt-color-link: #6cb4ff !important;
        color-scheme: dark !important;
    }

    /* ===== BACKGROUNDS ===== */
    html, body {
        background-color: #0d0d0d !important;
    }

    header, [data-test-component="StencilReactPageHeader"],
    nav, [role="banner"], [role="navigation"] {
        background-color: #111111 !important;
        border-color: #444444 !important;
    }

    main, section, article, aside, footer {
        background-color: #0d0d0d !important;
    }

    /* ===== CARDS ===== */
    [class*="card"], [class*="Card"],
    [class*="tile"], [class*="Tile"],
    [data-test-component*="Card"] {
        background-color: #1a1a1a !important;
        border: 1px solid #444444 !important;
    }

    /* ===== LINKS — always blue ===== */
    a[href], [role="link"],
    a[href] *, [role="link"] * {
        color: #6cb4ff !important;
    }
    a[href]:hover, a[href]:hover * {
        color: #99ccff !important;
    }

    /* ===== SELECTED / ACTIVE ITEMS ===== */
    [aria-selected="true"], [aria-selected="true"] *,
    [aria-current="true"], [aria-current="true"] *,
    [class*="selected"], [class*="selected"] *,
    [class*="Selected"], [class*="Selected"] *,
    [class*="active"]:not(button), [class*="active"]:not(button) *,
    [class*="Active"]:not(button), [class*="Active"]:not(button) *,
    [class*="highlight"], [class*="highlight"] *,
    [class*="Highlight"], [class*="Highlight"] * {
        background-color: #1e3a5f !important;
        color: #ffffff !important;
    }

    /* ===== INPUTS ===== */
    input, textarea, select {
        background-color: #1a1a1a !important;
        color: #f0f0f0 !important;
        border-color: #555555 !important;
    }
    input::placeholder, textarea::placeholder {
        color: #999999 !important;
    }
    input:focus, textarea:focus, select:focus {
        border-color: #6cb4ff !important;
    }

    /* ===== BUTTONS ===== */
    button, [role="button"] {
        color: #f0f0f0 !important;
        opacity: 1 !important;
        visibility: visible !important;
    }
    button:hover, [role="button"]:hover {
        background-color: #333333 !important;
    }

    /* ===== MODALS, MENUS, DROPDOWNS ===== */
    [role="dialog"], [role="menu"], [role="listbox"],
    [class*="modal"], [class*="Modal"],
    [class*="overlay"], [class*="Overlay"],
    [class*="popup"], [class*="Popup"],
    [class*="menu"], [class*="Menu"],
    [class*="dropdown"], [class*="Dropdown"] {
        background-color: #1a1a1a !important;
    }
    [role="menuitem"]:hover, [role="option"]:hover {
        background-color: #333333 !important;
    }

    /* ===== TABLES ===== */
    table, th, td, tr {
        background-color: #1a1a1a !important;
        border-color: #444444 !important;
    }
    tr:nth-child(even) { background-color: #222222 !important; }
    th { background-color: #262626 !important; color: #ffffff !important; }

    /* ===== PROGRESS BAR ===== */
    [role="progressbar"], [class*="progress"], [class*="Progress"] {
        background-color: #333333 !important;
    }
    [role="progressbar"] > *, [class*="progress"] > *:first-child {
        background-color: #00a4b4 !important;
    }

    /* ===== CHECKMARKS ===== */
    [class*="complete"] svg, [class*="Complete"] svg,
    [class*="check"] svg, [class*="Check"] svg {
        fill: #4caf50 !important;
        color: #4caf50 !important;
    }

    /* ===== TAB NAV ===== */
    [role="tab"] { color: #cccccc !important; }
    [role="tab"][aria-selected="true"] {
        color: #ffffff !important;
        border-bottom-color: #6cb4ff !important;
    }

    /* ===== SVG ICONS ===== */
    svg { color: #f0f0f0 !important; }
    svg path, svg circle, svg rect, svg polygon {
        fill: currentColor !important;
    }
    img { filter: none !important; }

    /* ===== BORDERS ===== */
    hr, div[class] { border-color: #444444 !important; }

    /* ===== SCROLLBARS ===== */
    ::-webkit-scrollbar { width: 10px; background: #0d0d0d; }
    ::-webkit-scrollbar-thumb { background: #444444; border-radius: 5px; }
    ::-webkit-scrollbar-thumb:hover { background: #555555; }
    * { scrollbar-color: #444444 #0d0d0d; }

    /* ===== INLINE STYLE OVERRIDES ===== */
    [style*="color: rgb(0, 0, 0)"],
    [style*="color:rgb(0,0,0)"],
    [style*="color:rgb(0, 0, 0)"],
    [style*="color: black"],
    [style*="color:#000"],
    [style*="color: #000"] {
        color: #f0f0f0 !important;
    }
    [style*="background-color: rgb(255, 255, 255)"],
    [style*="background-color:rgb(255,255,255)"],
    [style*="background-color: white"],
    [style*="background:#fff"],
    [style*="background: #fff"],
    [style*="background-color:#fff"],
    [style*="background-color: #fff"],
    [style*="background: white"] {
        background-color: #0d0d0d !important;
    }
    [style*="background-color: rgb(245"],
    [style*="background-color: rgb(240"],
    [style*="background-color: rgb(250"],
    [style*="background-color: rgb(248"],
    [style*="background-color: rgb(244"],
    [style*="background-color: rgb(249"],
    [style*="background-color: rgb(246"],
    [style*="background-color: rgb(247"] {
        background-color: #1a1a1a !important;
    }
    `;

    // Inject CSS immediately
    var style = document.createElement('style');
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css);
    }

    // =========================================================================
    // JAVASCRIPT FORCE-FIX: Scan and fix invisible text after page loads
    // =========================================================================
    // This is the nuclear backup. CSS alone can't always win against the site's
    // dynamic styles. This JS scans all elements and forces visibility on any
    // text that would be invisible (dark on dark or light on light).
    function forceFixColors() {
        var allElements = document.querySelectorAll('*');
        allElements.forEach(function(el) {
            if (el.tagName === 'SVG' || el.closest('svg')) return; // skip SVGs
            if (el.tagName === 'IMG') return; // skip images
            if (el.tagName === 'VIDEO') return; // skip video

            var computed = window.getComputedStyle(el);
            var color = computed.color;
            var bg = computed.backgroundColor;

            // Parse RGB from computed values
            var colorMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            var bgMatch = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

            if (colorMatch) {
                var r = parseInt(colorMatch[1]);
                var g = parseInt(colorMatch[2]);
                var b = parseInt(colorMatch[3]);
                var luminance = (r * 0.299 + g * 0.587 + b * 0.114);

                // If text is too dark (luminance < 100), force it white
                if (luminance < 100) {
                    el.style.setProperty('color', '#f0f0f0', 'important');
                }
            }

            // If element has a light background, darken it
            if (bgMatch) {
                var bgR = parseInt(bgMatch[1]);
                var bgG = parseInt(bgMatch[2]);
                var bgB = parseInt(bgMatch[3]);
                var bgLuminance = (bgR * 0.299 + bgG * 0.587 + bgB * 0.114);

                if (bgLuminance > 200) {
                    el.style.setProperty('background-color', '#0d0d0d', 'important');
                } else if (bgLuminance > 150) {
                    el.style.setProperty('background-color', '#1a1a1a', 'important');
                }
            }
        });
    }

    // Run the fix after page loads and after dynamic content changes
    function init() {
        // Initial fix
        forceFixColors();

        // Watch for new content being added (AtoZ loads stuff dynamically)
        var contentObserver = new MutationObserver(function(mutations) {
            // Debounce — don't run on every tiny change
            clearTimeout(contentObserver._timer);
            contentObserver._timer = setTimeout(forceFixColors, 300);
        });

        contentObserver.observe(document.body, {
            childList: true,    // watch for new elements being added
            subtree: true,      // watch entire tree, not just direct children
            attributes: true,   // watch for style/class changes
            attributeFilter: ['style', 'class'] // only these attributes
        });
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also run 1 second after load as a safety net (for lazy-loaded content)
    window.addEventListener('load', function() {
        setTimeout(forceFixColors, 1000);
        setTimeout(forceFixColors, 3000);
    });

    // Attribute observer to prevent light mode revert
    var schemeObserver = new MutationObserver(function() {
        if (document.documentElement.getAttribute('data-stencil-prefers-color-scheme') !== 'dark') {
            document.documentElement.setAttribute('data-stencil-prefers-color-scheme', 'dark');
        }
    });

    function startObserving() {
        if (document.body) {
            schemeObserver.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-stencil-prefers-color-scheme']
            });
        } else {
            requestAnimationFrame(startObserving);
        }
    }
    startObserving();
})();