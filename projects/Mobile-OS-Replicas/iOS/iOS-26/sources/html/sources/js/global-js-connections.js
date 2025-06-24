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