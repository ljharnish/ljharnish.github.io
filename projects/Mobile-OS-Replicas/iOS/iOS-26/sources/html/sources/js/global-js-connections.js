window.CONNECTIONVARIABLES = {
    debug: {
        performanceMode: {
            enabled: false
        },
        superPerformanceMode: {
            enabled: false
        },
        showDebug: {
            enabled: false
        },
        showInvalidIcons: {
            enabled: false
        },
        showIconLabels: {
            enabled: false
        },
        debug_actionButton: 0,
        iconTintOpacity: 0.2
    },

    battery: {
        charging: false,
        level: 100,
        health: 'Good',
        voltage: 0,
        temperature: 0,
        technology: 'Li-ion',
        status: 'Discharging',
    },

    settings: {
        airplaneMode: { 
            enabled: false
        },
        battery_lpm: {
            enabled: false
        },
        battery_percentage: {
            enabled: false
        },
        bluetooth_setting: {
            enabled: false,
        },
        cellular: {
            enabled: false,
            connected: false,
            carrier: ''
        },
        hotspot: {
            enabled: false,
            ssid: ''
        },
        vpn: {
            connected: false,
            name: ''
        },
        wifi_setting: {
            enabled: true,
        },
    },

    media: {
        audio: {
            playing: false
        },
        video: {
            playing: false
        }
    }
}

if(localStorage.getItem('savedVars')) window.CONNECTIONVARIABLES = JSON.parse(localStorage.getItem('savedVars'));

// Helper function to sync variables back to parent (works even when nested in iframes)
function syncToParent() {
    // Try postMessage (works across iframe boundaries)
    if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'SyncVariables', variables: window.CONNECTIONVARIABLES }, '*');
    }
    // Also try custom event (works when contentDocument is accessible)
    document.dispatchEvent(new CustomEvent('SyncVariables', { detail: window.CONNECTIONVARIABLES }));
}

// Auto-sync on clicks
document.addEventListener('click', syncToParent);
document.addEventListener('load', syncToParent);

// Helper to trigger debug alert via postMessage
function triggerDebugAlert(alertType) {
    if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'DebugAlert', alertType: alertType }, '*');
    }
    document.dispatchEvent(new CustomEvent('DebugAlert', { detail: { type: alertType } }));
}

// Helper to reload parent page
function reloadParentPage() {
    if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'ReloadPage' }, '*');
    }
    document.dispatchEvent(new CustomEvent('ReloadPage'));
}