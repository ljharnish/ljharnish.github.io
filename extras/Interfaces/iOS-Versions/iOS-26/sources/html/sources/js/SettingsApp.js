const settingsTable = {
    categories: [
        [
            {  
                name: "Airplane Mode",
                id: "airplaneMode",
                data: {
                    enabled: false
                },
                icon: {
                    color: 'orange',
                    glyph: 'airplane'
                },
                right: {
                    type: 'switch',
                    //? Toggle the data[toggleData] value if a boolean
                    toggleData: 'enabled'
                }
            },
            {  
                name: "Wi-Fi",
                description: "Connect to Wi-Fi, view available networks, and manage settings for joining networks and nearby hotspots. <a>Learn More...</a>",
                id: "wifi",
                icon: {
                    color: 'blue',
                    glyph: 'wifi'
                },
                right: {
                    text: "GeniusBar-Guest",
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {  
                                name: "Wi-Fi",
                                id: "wifi_setting",
                                data: {
                                    enabled: false,
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {  
                                name: "GeniusBar-Guest",
                            }
                        ],
                        [
                            {  
                                name: "Ask to Join Networks",
                                id: "wifi_setting_asktojoin",
                                right: {
                                    text: "Notify",
                                    type: 'arrow'
                                },
                                innerSettings: {
                                    categories: [
                                        [
                                            {
                                                name: 'Off',
                                                type: 'radio',
                                            },
                                            {
                                                name: 'Notify',
                                                type: 'radio',
                                                checked: true
                                            },
                                            {
                                                name: 'Ask',
                                                type: 'radio',

                                            },
                                            {
                                                subtitle: 'Known networks will be joined automatically. If no known networks are available, you will be notified of available networks.'
                                            }
                                        ]
                                    ]
                                }
                            },
                            {
                                subtitle: 'Known netowrks will be joined automatically. If no known networks are available, you will be notified of available networks.'
                            }
                        ],
                        [
                            {  
                                name: "Auto-Join Hotspot",
                                id: "wifi_setting_joinhotspot",
                                right: {
                                    text: "Automatic",
                                    type: 'arrow'
                                },
                                innerSettings: {
                                    categories: [
                                        [
                                            {
                                                name: 'Never',
                                                type: 'radio',
                                            },
                                            {
                                                name: 'Ask to Join',
                                                type: 'radio',
                                            },
                                            {
                                                name: 'Automatic',
                                                type: 'radio',
                                                checked: true
                                            }
                                        ]
                                    ]
                                }
                            },
                            {
                                subtitle: 'Allow this device to automatically discover nearby personal hotspots when no Wi-Fi netowrk is available.'
                            }
                        ]
                    ]
                }
            },
            {  
                name: "Bluetooth",
                description: "Connect to accessories you can use for activities such as streaming music, making phone calls, and gaming. <a>Learn More...</a>",
                id: "bluetooth",
                data: {
                    enabled: false,
                },
                icon: {
                    color: 'blue',
                    glyph: 'bluetooth'
                },
                right: {
                    text: "Off",
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {  
                                name: "Bluetooth",
                                id: "bluetooth_setting",
                                data: {
                                    enabled: false,
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            }
                        ]
                    ]
                }
            },
            {  
                name: "Cellular",
                id: "cellular",
                data: {
                    enabled: false,
                    connected: false,
                    carrier: ''
                },
                icon: {
                    color: 'green',
                    glyph: 'antenna.radiowaves.left.and.right'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Personal Hotspot", 
                id: "hotspot",
                data: {
                    enabled: false,
                    ssid: ''
                },
                icon: {
                    fixedHeight: '75',
                    color: 'green',
                    glyph: 'personalhotspot'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Battery",
                id: "battery",
                icon: {
                    fixedHeight: '75',
                    color: 'green',
                    glyph: 'battery.100'
                },
                right: {
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {  
                                name: "Battery Percentage",
                                id: "battery_percentage",
                                data: {
                                    enabled: false
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {  
                                name: "Low Power Mode",
                                id: "battery_lpm",
                                data: {
                                    enabled: false
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {
                                subtitle: "Low Power Mode temporarily reduces background activity like downloads and mail fetch until you can fully charge your iPhone.",
                            }
                        ]
                    ]
                }
            },
            {  
                name: "VPN", 
                id: "vpn",
                data: {
                    connected: false,
                    name: ''
                },
                icon: {
                    color: 'blue',
                    glyph: 'globe'
                },
                right: {
                    text: 'Not Connected',
                    type: 'arrow'
                }
            }
        ],
        [
            {  
                name: "General",
                description: "Manage your overall setup and preferences for iPhone, such as software updates, device language, CarPlay, AirDrop, and more.",
                id: "general",
                icon: {
                    color: 'grey',
                    glyph: 'gear'
                },
                right: {
                    type: 'arrow'
                },
                categoryHeader: {
                    icon: {
                        color: 'grey',
                        glyph: 'gear'
                    }
                },
                innerSettings: {
                    categories: [
                        [
                            {  
                                name: "About",
                                id: "general_about",
                                icon: {
                                    color: 'grey',
                                    glyph: 'info.circle'
                                },
                                right: {
                                    type: 'arrow'
                                },
                                innerSettings: {
                                    categories: [
                                        [
                                            {  
                                                name: "Name",
                                                id: "general_about_name",
                                                right: {
                                                    text: "ljharnish's iPhone",
                                                    type: 'arrow'
                                                },
                                                innerSettings: {
                                                    categories: [
                                                        [
                                                            {
                                                                name: "ljharnish's iPhone (unchangable yet)",
                                                            }
                                                        ]
                                                    ]
                                                }
                                            },
                                            {  
                                                name: "iOS Version",
                                                id: "general_about_version",
                                                right: {
                                                    text: "26.0",
                                                    type: 'arrow'
                                                },
                                                innerSettings: {
                                                    categories: [
                                                        [
                                                            {
                                                                title: "iOS Version"
                                                            },
                                                            {
                                                                id: "general_about_version_big",
                                                                type: 'iosVersionBig'
                                                            }
                                                        ]
                                                    ]
                                                }
                                            },
                                            {  
                                                name: "Model Name",
                                                id: "general_about_model_name",
                                                right: {
                                                    text: "iPhone 16 Pro Max",
                                                },
                                            },
                                            {  
                                                name: "Model Number",
                                                id: "general_about_model_number",
                                                right: {
                                                    text: "A3084",
                                                },
                                            },
                                            {  
                                                name: "Serial Number",
                                                id: "general_about_serial",
                                                right: {
                                                    text: "1234567890"
                                                },
                                            }
                                        ],
                                        [
                                            {  
                                                name: "Songs",
                                                id: "general_about_songs",
                                                right: {
                                                    text: "0"
                                                },
                                            },
                                            {  
                                                name: "Videos",
                                                id: "general_about_videos",
                                                right: {
                                                    text: "0"
                                                },
                                            },
                                            {  
                                                name: "Photos",
                                                id: "general_about_photos",
                                                right: {
                                                    text: "0"
                                                },
                                            },
                                            {  
                                                name: "Applications",
                                                id: "general_about_apps",
                                                right: {
                                                    text: "19"
                                                },
                                            },
                                            {  
                                                name: "Capacity",
                                                id: "general_about_capacity",
                                                right: {
                                                    text: "1 TB"
                                                },
                                            },
                                            {  
                                                name: "Available",
                                                id: "general_about_capacity_free",
                                                right: {
                                                    text: "869.01 GB"
                                                },
                                            }
                                        ],
                                        [
                                            {  
                                                name: "Wi-Fi Address",
                                                id: "general_about_wifi_mac",
                                                right: {
                                                    text: "01:23:45:67:89:10"
                                                },
                                            },
                                            {  
                                                name: "Bluetooth",
                                                id: "general_about_bluetooth_mac",
                                                right: {
                                                    text: "01:23:45:67:89:10"
                                                },
                                            },
                                            {  
                                                name: "SEID",
                                                id: "general_about_seid",
                                                right: {
                                                    type: 'arrow'
                                                },
                                                innerSettings: {
                                                    categories: [
                                                        [
                                                            {
                                                                name: "000000000000000000000000000000000000000000000000",
                                                                id: "general_about_seid_number",
                                                            }
                                                        ]
                                                    ]
                                                }
                                            }
                                        ],
                                        [
                                            {  
                                                name: "Cerificate Trust Settings",
                                                id: "general_about_certificate_trust",
                                                right: {
                                                    type: 'arrow'
                                                },
                                                innerSettings: {
                                                    categories: [
                                                        [
                                                            {  
                                                                name: "Trust Store Version",
                                                                id: "general_about_certificate_trust_store_version",
                                                                right: {
                                                                    text: "2025041600"
                                                                },
                                                            },
                                                            {  
                                                                name: "Trust Asset Version",
                                                                id: "general_about_certificate_trust_store_version",
                                                                right: {
                                                                    text: "1006"
                                                                },
                                                            },
                                                            {  
                                                                subtitle: '<a href="https://support.apple.com/en-us/103272" target="_blank">Learn more about trusted certificates</a>'
                                                            },
                                                        ]
                                                    ]
                                                }
                                            }
                                        ]
                                    ]
                                }
                            },
                            {  
                                name: "Software Update",
                                id: "general_software_update",
                                icon: {
                                    color: 'grey',
                                    glyph: 'software.update'
                                },
                                right: {
                                    type: 'arrow'
                                },
                                innerSettings: {
                                    categories: [
                                        [
                                            {  
                                                name: "Automatic Updates",
                                                id: "general_about_update_automatic",
                                                right: {
                                                    text: "On",
                                                    type: 'arrow'
                                                },
                                                innerSettings: {
                                                    categories: [
                                                        [
                                                            {
                                                                name: "Automatically Install",
                                                                id: "general_about_update_automatic_enabled",
                                                                data: {
                                                                    enabled: false,
                                                                },
                                                                right: {
                                                                    type: 'switch',
                                                                    toggleData: 'enabled'
                                                                }
                                                            },
                                                            {
                                                                subtitle: 'Automatically download and install iOS software updates and system files when this iPhone is connected to Wi-Fi, charging, and locked.'
                                                            }
                                                        ]
                                                    ]
                                                }
                                            },
                                            {  
                                                name: "Beta Updates",
                                                id: "general_about_update_beta",
                                                right: {
                                                    text: "iOS 26 Developer Beta",
                                                    type: 'arrow'
                                                },
                                                innerSettings: {
                                                    categories: [
                                                        [
                                                            {
                                                                name: "Off",
                                                                type: 'radio',
                                                            },
                                                            {
                                                                name: "iOS 26 Developer Beta",
                                                                type: 'radio',
                                                                checked: true
                                                            },
                                                            {
                                                                subtitle: 'Recieve beta updates to this iPhone to test-drive pre-release versions of iOS and provide feedback to help make Apple software even better.<br><a href="https://beta.apple.com" target="_blank">Learn More...</a>'
                                                            }
                                                        ]
                                                    ]
                                                }
                                            },
                                            {
                                                title: "iOS is up to date."
                                            },
                                            {
                                                subtitle: "iOS 26.0"
                                            }
                                        ]
                                    ]
                                }
                            },
                            {  
                                name: "iPhone Storage",
                                id: "general_iphone_storage",
                                icon: {
                                    color: 'grey',
                                    glyph: 'storage.fill'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {  
                                name: "AppleCare & Warranty",
                                id: "general_applecare",
                                icon: {
                                    color: 'white',
                                    glyph: 'apple.logo',
                                    filter: 'invert(1) invert(11%) sepia(72%) saturate(6147%) hue-rotate(8deg) brightness(100%) contrast(123%)'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {  
                                name: "AirDrop",
                                id: "general_airdrop",
                                icon: {
                                    color: 'white',
                                    glyph: 'airdrop',
                                    filter: 'invert(1) invert(40%) sepia(94%) saturate(3539%) hue-rotate(196deg) brightness(103%) contrast(102%)'
                                },
                                right: {
                                    type: 'arrow'
                                },
                                innerSettings: {
                                    categories: [
                                        [
                                            {
                                                name: "Recieving Off",
                                                type: 'radio',
                                            },
                                            {
                                                name: "Contacts Only",
                                                type: 'radio',
                                                checked: true
                                            },
                                            {
                                                name: "Everyone for 10 Minutes",
                                                type: 'radio',
                                            },
                                            {
                                                subtitle: 'AirDrop lets you share instantly with people nearby. You can be discoverable in AirDrop to recieve from everyone or only people in your contacts. <a href="https://www.apple.com/privacy" target="_blank">About AirDrop & Privacy...</a>'
                                            }
                                        ]
                                    ]
                                }
                            },
                            {  
                                name: "AirPlay & Continuity",
                                id: "general_airplay_continuity",
                                icon: {
                                    color: 'blue',
                                    glyph: 'airplayvideo',
                                },
                                right: {
                                    type: 'arrow'
                                },
                                innerSettings: {
                                    categories: [
                                        [
                                            {
                                                name: 'Automatically AirPlay',
                                                right: {
                                                    text: 'Automatic',
                                                    type: 'arrow'
                                                },
                                                innerSettings: {
                                                    categories: [
                                                        [
                                                            {
                                                                name: "Never",
                                                                type: 'radio',
                                                            },
                                                            {
                                                                name: "Ask",
                                                                type: 'radio',
                                                            },
                                                            {
                                                                name: "Automatic",
                                                                type: 'radio',
                                                                checked: true
                                                            },
                                                            {
                                                                subtitle: 'iPhone can speak to AirPlay, or when able to Automatically AirPlay, connect to nearby speakers and TVs when plying content from apps you regularly use with AirPlay.'
                                                            }
                                                        ]
                                                    ]
                                                }
                                            }
                                        ]
                                    ]
                                }
                            },
                            {  
                                name: "Picture in Picture",
                                id: "general_picture_in_picture",
                                icon: {
                                    color: 'black',
                                    glyph: 'rectangle.on.rectangle',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "CarPlay",
                                id: "general_carplay",
                                icon: {
                                    color: 'green',
                                    glyph: 'carplay',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {  
                                name: "AutoFill & Passwords",
                                id: "general_autofill_passwords",
                                icon: {
                                    color: 'grey',
                                    glyph: 'lock.fill',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Background App Refresh",
                                id: "general_background_app_refresh",
                                icon: {
                                    color: 'grey',
                                    glyph: 'background.app.refresh',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Date & Time",
                                id: "general_date_time",
                                icon: {
                                    color: 'blue',
                                    glyph: 'calendar',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Dictionary",
                                id: "general_dictionary",
                                icon: {
                                    color: 'blue',
                                    glyph: 'book.fill',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Fonts",
                                id: "general_fonts",
                                icon: {
                                    color: 'grey',
                                    glyph: 'textformat',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Game Controller",
                                id: "general_game_controller",
                                icon: {
                                    color: 'grey',
                                    glyph: 'gamecontroller.fill',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Keyboard",
                                id: "general_keyboard",
                                icon: {
                                    color: 'grey',
                                    glyph: 'keyboard.fill',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Language & Region",
                                id: "general_language_region",
                                icon: {
                                    color: 'blue',
                                    glyph: 'globe',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {
                                name: "TV Provider",
                                id: "general_tv_provider",
                                icon: {
                                    color: 'black',
                                    glyph: 'tv',
                                },
                                right: {
                                    type: 'arrow'
                                },
                                innerSettings: {
                                    categories: [
                                        [
                                            {
                                                title: 'Watch TV shows and movies from apps included in your TV subscription. Select your TV provider to get started.'
                                            },
                                            {
                                                name: 'AT&T U-verse'
                                            },
                                            {
                                                name: 'CenturyLink Prism'
                                            },
                                            {
                                                name: 'Cox'
                                            },
                                            {
                                                name: 'DIRECTV'
                                            },
                                            {
                                                name: 'DIRECTV STREAM'
                                            },
                                            {
                                                name: 'DISH'
                                            },
                                            {
                                                name: 'Frontier'
                                            },
                                            {
                                                name: 'Hulu'
                                            },
                                            {
                                                name: 'Mediacom'
                                            },
                                            {
                                                name: 'Optimum'
                                            },
                                            {
                                                name: 'Optimum TV'
                                            },
                                            {
                                                name: 'Sling TV'
                                            },
                                            {
                                                name: 'Spectrum'
                                            },
                                            {
                                                name: 'Verizon Fios'
                                            },
                                            {
                                                name: 'Xfinity'
                                            }
                                        ],
                                        [
                                            { subtitle: 'ill add more here soon' }
                                        ],
                                        [
                                            {
                                                name: 'Other TV Provider Regions...'
                                            },
                                            {
                                                subtitle: "If you don't see your TV provider, sign in directly from the app you want to use."
                                            }
                                        ]
                                    ]
                                }
                            }
                        ],
                        [
                            {  
                                name: "VPN & Device Management",
                                id: "general_vpn_device_management",
                                icon: {
                                    color: 'grey',
                                    glyph: 'gear',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {  
                                name: "Legal & Regulatory",
                                id: "general_legal_regulatory",
                                icon: {
                                    color: 'grey',
                                    glyph: 'lock.shield',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {  
                                name: "Transfer or Reset iPhone",
                                id: "general_transfer_reset_iphone",
                                icon: {
                                    color: 'red',
                                    glyph: 'return',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {  
                                name: "Shut Down",
                                id: "general_shut_down",
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ]
                    ]
                }
            },
            {  
                name: "Accessibility", 
                description: "Personalize iPhone in ways that work best for you with accessibility features for vision, mobility, hearing, speech, and cognition. <a>Learn More...</a>",
                id: "accessibility",
                icon: {
                    color: 'blue',
                    glyph: 'person.circle'
                },
                right: {
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {
                                title: "Vision"
                            },
                            {  
                                name: "VoiceOver",
                                id: "accessibility_voiceover",
                                icon: {
                                    color: 'black',
                                    glyph: 'voiceover'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Zoom",
                                id: "accessibility_zoom",
                                icon: {
                                    color: 'black',
                                    glyph: 'plus.magnifyingglass'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Hover Text",
                                id: "accessibility_hover_text",
                                icon: {
                                    color: 'blue',
                                    glyph: 'hover.text'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Display & Text Size",
                                id: "accessibility_display_text_size",
                                icon: {
                                    color: 'blue',
                                    glyph: 'textformat.size'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Motion",
                                id: "accessibility_motion",
                                icon: {
                                    color: 'green',
                                    glyph: 'motion'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Spoken Content",
                                id: "accessibility_spoken_content",
                                icon: {
                                    color: 'black',
                                    glyph: 'rectangle.3.offgrid.bubble'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Audio Descriptions",
                                id: "accessibility_audio_descriptions",
                                icon: {
                                    color: 'blue',
                                    glyph: 'quote.bubble.fill'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {
                                title: "Physical and Motor"
                            },
                            {  
                                name: "Touch",
                                id: "accessibility_touch",
                                icon: {
                                    color: 'blue',
                                    glyph: 'hand.point.top.left.fill'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Switch Control",
                                id: "accessibility_switch_control",
                                icon: {
                                    color: 'black',
                                    glyph: 'square.grid.2x2'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Voice Control",
                                id: "accessibility_voice_control",
                                icon: {
                                    color: 'blue',
                                    glyph: 'waveform'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {
                                title: "Hearing"
                            },
                            {  
                                name: "Hearing Devices",
                                id: "accessibility_hearing_devices",
                                icon: {
                                    color: 'blue',
                                    glyph: 'ear'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Hearing Control Center",
                                id: "accessibility_hearing_control_center",
                                icon: {
                                    color: 'grey',
                                    glyph: 'control.center'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Sound Recognition",
                                id: "accessibility_sound_recognition",
                                icon: {
                                    color: 'pink',
                                    glyph: 'waveform'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "RTT",
                                id: "accessibility_rtt",
                                icon: {
                                    color: 'green',
                                    glyph: 'phone.down.fill.1'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Audio & Visual",
                                id: "accessibility_audio_visual",
                                icon: {
                                    color: 'blue',
                                    glyph: 'audio.visual'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Subtitles & Captioning",
                                id: "accessibility_subtitles_captioning",
                                icon: {
                                    color: 'blue',
                                    glyph: 'captions.bubble.fill'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Live Captions",
                                id: "accessibility_live_captions",
                                icon: {
                                    color: 'blue',
                                    glyph: 'bubble.voice'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {
                                title: "Speech"
                            },
                            {  
                                name: "Live Speech",
                                id: "accessibility_live_speech",
                                icon: {
                                    color: 'black',
                                    glyph: 'keyboard.voice.fill'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Vocal Shortcuts",
                                id: "accessibility_vocal_shortcuts",
                                icon: {
                                    color: 'black',
                                    glyph: 'waveform.arrow'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {
                                title: "Accessories"
                            },
                            {  
                                name: "Keyboards & Typing",
                                id: "accessibility_keyboards_typing",
                                icon: {
                                    color: 'grey',
                                    glyph: 'keyboard.fill'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Apple TV Remote",
                                id: "accessibility_apple_tv_remote",
                                icon: {
                                    color: 'grey',
                                    glyph: 'apple.tv.remote'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {
                                title: "General"
                            },
                            {  
                                name: "Guided Access",
                                id: "accessibility_guided_access",
                                icon: {
                                    color: 'black',
                                    glyph: 'lock.dotted.box'
                                },
                                right: {
                                    text: "Off",
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Assistive Access",
                                id: "accessibility_assistive_access",
                                icon: {
                                    color: 'grey',
                                    glyph: 'square.grid.2x3.fill'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                name: "Siri", 
                                icon: {
                                    image: '../image/Siri-Square.jpg',
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Accessibility Shortcut",
                                id: "accessibility_shortcut",
                                icon: {
                                    color: 'blue',
                                    glyph: 'person.circle'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            },,
                            {  
                                name: "Per-App Settings",
                                id: "accessibility_per_app_settings",
                                icon: {
                                    color: 'blue',
                                    glyph: 'app.check'
                                },
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ]
                    ]
                }
            },
            {
                name: 'Action Button',
                id: 'actionButtonFunction',
                icon: {
                    color: 'blue',
                    glyph: 'actionButton'
                },
                right: {
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {
                                title: 'THESE ARE NOT FINAL.'
                            }
                        ],
                        [
                            {
                                name: 'Open Developer Panel',
                                type: 'radio',
                                checked: true
                            },
                            {
                                name: 'Toggle Dark Mode',
                                type: 'radio',
                            },
                            {
                                name: 'Cycle Home Screen Icons',
                                type: 'radio',
                            },
                            {
                                name: 'Toggle Performance Mode',
                                type: 'radio',
                            },
                            {
                                name: 'Toggle Super Performance Mode',
                                type: 'radio',
                            },
                            {
                                name: 'Toggle Control Center',
                                type: 'radio',
                            }
                        ]
                    ]
                }
            },
            {  
                name: "Camera", 
                id: 'camera',
                icon: {
                    color: 'grey',
                    glyph: 'camera.fill'
                },
                right: {
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {  
                                name: "Record Video",
                                id: 'camera_record_video',
                                right: {
                                    text: "1080p at 30fps",
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Formats",
                                id: 'camera_formats',
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {  
                                name: "Scan QR Codes",
                                id: 'camera_scan_qr_codes',
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: "enabled"
                                }
                            },
                            {  
                                name: "Show Detected Text",
                                id: 'camera_show_detected_text',
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: "enabled"
                                }
                            },
                            {  
                                name: "Preserve Settings",
                                id: 'camera_preserve_settings',
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {
                                title: "Composition"
                            },
                            {  
                                name: "Grid",
                                id: 'camera_comp_grid',
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: "enabled"
                                }
                            },
                            {  
                                name: "Level",
                                id: 'camera_comp_level',
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: "enabled"
                                }
                            },
                            {  
                                name: "Mirror Front Camera",
                                id: 'camera_comp_mirror_front',
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: "enabled"
                                }
                            }
                        ], 
                        [
                            {
                                title: 'Photo Capture'
                            },
                            {  
                                name: "Lens Correction",
                                id: 'camera_capture_lens_correction',
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: "enabled"
                                }
                            },
                            {
                                subtitle: 'Correct lens distortion on the front camera.'
                            }
                        ]
                    ]
                }
            },
            {  
                name: "Control Center", 
                icon: {
                    color: 'grey',
                    glyph: 'control.center'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Display & Brightness", 
                id: 'display_brightness',
                icon: {
                    color: 'blue',
                    glyph: 'sun.max.fill'
                },
                right: {
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {
                                title: 'Appearance'
                            },
                            {
                                id: 'display_brightness_appearance',
                                type: 'appearance_selector'
                            },
                            {
                                name: "Automatic",
                                id: "display_appear_auto",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {
                                name: "Options",
                                id: "display_appear_options",
                                right: {
                                    text: "Sunset to Sunrise",
                                    type: 'arrow'
                                }
                            }
                        ],
                        [
                            {
                                name: "Text Size",
                                id: "display_text_size",
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                name: "Bold Text",
                                id: "display_bold_text",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            }
                        ],
                        [
                            {
                                title: "Brightness"
                            },
                            {
                                id: "display_brightness_slider",
                                type: 'slider'
                            },
                            {
                                name: "True Tone",
                                id: "display_true_tone",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {
                                subtitle: "Automatically adapt iPhone diplay based on ambient lighting conditions to make colors appear consisten in different environments"
                            }
                        ]
                    ]
                }
            },
            {  
                name: "Home Screen & App Library", 
                icon: {
                    color: 'blue',
                    glyph: 'app.badge.fill'
                },
                right: {
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {
                                title: 'Home Screen'
                            },
                            {
                                name: 'Use Large App Icons',
                                id: "homescreen_large_icons",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            }
                        ],
                        [
                            {
                                title: 'Newly Downloaded Apps'
                            },
                            {
                                name: 'Add to Home Screen',
                            },
                            {
                                name: 'App Library Only',
                            }
                        ],
                        [
                            {
                                title: 'Notification Badges'
                            },
                            {
                                name: 'Show in App Library',
                                id: "homescreen_noti_show_in_library",
                                data: {
                                    enabled: false
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            }
                        ]
                    ]
                }
            },
            {  
                name: "Search", 
                icon: {
                    color: 'grey',
                    glyph: 'magnifyingglass'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Siri",
                description: "Siri is an intelligent assistant that helps you find information and get things done.",
                icon: {
                    image: '../image/Siri-Square.jpg',
                },
                right: {
                    type: 'arrow'
                },
                innerSettings: {
                    categories: [
                        [
                            {
                                title: 'Siri Requests'
                            },
                            {
                                name: 'Language',
                                right: {
                                    text: 'English (United States)',
                                    type: 'arrow'
                                }
                            },
                            {
                                name: 'Talk to Siri',
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                name: 'Allow Siri When Locked',
                                id: "allow_locked_siri",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {
                                name: 'Voice',
                                right: {
                                    text: 'American (Voice 1)',
                                    type: 'arrow'
                                }
                            },
                            {
                                name: 'Siri Responses',
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                name: 'Announce Calls',
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                name: 'Announce Notifications',
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                name: 'Messaging with Siri',
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                name: 'Siri & Dictation History',
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                name: 'My Information',
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                subtitle: 'Voice input is processed on iPhone, but transcripts of your requests are sent to Apple.'
                            }
                        ],
                        [
                            {
                                title: "Suggestions"
                            },
                            {
                                name: 'Suggest Apps Before Searching',
                                id: "siri_suggest_apps",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {
                                name: 'Allow Notifications',
                                id: "siri_allow_notifs",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {
                                name: 'Show in App Library',
                                id: "siri_app_library",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {
                                name: 'Show When Sharing',
                                id: "siri_show_sharing",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {
                                name: 'Show Listening Suggestions',
                                id: "siri_suggest_listen",
                                data: {
                                    enabled: true
                                },
                                right: {
                                    type: 'switch',
                                    toggleData: 'enabled'
                                }
                            },
                            {
                                subtitle: 'Apple can make suggestions in Search, on Home Screen and Lock Screen, when sharing, or when you may want to listen to media.'
                            }
                        ],
                        [
                            {
                                title: 'Siri App Access'
                            },
                            {
                                name: 'App Clips',
                                right: {
                                    type: 'arrow'
                                }
                            },
                            {
                                name: 'Apps',
                                right: {
                                    type: 'arrow'
                                }
                            }
                        ]
                    ]
                }
            },
            {
                name: "Wallpaper",
                icon: {
                    color: 'light-blue',
                    glyph: 'wand.and.rays.inverse'
                },
                right: {
                    type: 'arrow'
                }
            }
        ],
        [
            {  
                name: "Notifications",

                icon: {
                    color: 'red',
                    glyph: 'bell.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Sounds & Haptics",

                icon: {
                    fixedHeight: '75',
                    color: 'pink',
                    glyph: 'speaker.3.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Focus",

                icon: {
                    color: 'purple',
                    glyph: 'moon.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Screen Time",

                icon: {
                    color: 'purple',
                    glyph: 'hourglass'
                },
                right: {
                    type: 'arrow'
                }
            }
        ],
        [
            {  
                name: "Face ID & Passcode",

                icon: {
                    color: 'green',
                    glyph: 'faceid'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Emergency SOS",

                icon: {
                    color: 'red',
                    glyph: 'staroflife.fill'
                },
                right: {
                    type: 'arrow'
                }
            },
            {  
                name: "Privacy & Security",

                icon: {
                    color: 'blue',
                    glyph: 'hand.raised.fill'
                },
                right: {
                    type: 'arrow'
                }
            }
        ]
    ]
};


function appSpecificFunction() {
    for (const [key, value] of Object.entries(CONNECTIONVARIABLES.settings)) {
        console.log(key)
        try {
            if(value.enabled) {
                console.log(key)
                let checkbox = document.getElementById(key + '-switch');
                let slider = checkbox.parentElement.querySelector('.appleSlider');

                checkbox.checked = value.enabled;

                if(slider && checkbox.checked) {
                    slider.classList.add("active");
                }
            }

            if(key == 'display_brightness_appearance') {
                if(value == 'light') {
                    try {
                        document.querySelectorAll('.settingsCheckCircle')[0].classList.add('checked');
                        document.querySelectorAll('.settingsCheckCircle')[1].classList.remove('checked');
                    } catch(e){}
                    document.body.classList.remove('dark');
                } else {
                    try {
                        document.querySelectorAll('.settingsCheckCircle')[1].classList.add('checked');
                        document.querySelectorAll('.settingsCheckCircle')[0].classList.remove('checked');
                    } catch(e){}
                    document.body.classList.add('dark');
                }
            }
        } catch (error) {
        }
    }
}

const settingsHolder = document.getElementById("settingsHolder");

loadSettings(settingsTable, settingsHolder);

function loadSettings(table, outputdiv, mainSetting) {

    table.categories.forEach(category => {
        if(category.length == 0) return; // Skip empty categories

        const categoryDiv = document.createElement("div");
        categoryDiv.className = "settingsCategory";
        
        category.forEach(setting => {
            if(setting.subtitle) {
                const subtitle = document.createElement('p');
                subtitle.className = 'subtitle';
                subtitle.innerHTML = setting.subtitle;
                categoryDiv.appendChild(subtitle);
                return;
            }

            if(setting.title) {
                const title = document.createElement('p');
                title.className = 'title';
                title.innerText = setting.title;
                categoryDiv.appendChild(title);
                return;
            }

            const settingDiv = document.createElement("div");
            settingDiv.className = "setting";
            settingDiv.id = setting.id;
            
            const iconSide = document.createElement("div");
            iconSide.className = "iconSide";

            const categoryInner = document.createElement('div');

            //! Special Types

            if(setting.type == 'appearance_selector') {
                settingDiv.classList.add('display_appearance');

                const themeCheckbox = document.createElement('input');
                themeCheckbox.id = setting.id + '-switch';
                themeCheckbox.type = 'checkbox';

                const appearanceSelector = document.createElement('div');
                appearanceSelector.classList.add('appearanceSelector');

                const lightChoice = document.createElement('div');
                lightChoice.classList.add('appearanceChoice');

                const lightImage = document.createElement('img');
                lightImage.src = '../image/UI_Elements/Settings/Appearance_Light.png';
                lightImage.alt = 'Light Appearance';

                const lightText = document.createElement('p');
                lightText.innerText = 'Light';

                const lightCheckCircle = document.createElement('div');
                lightCheckCircle.classList.add('settingsCheckCircle')
                //! yayy!
                lightCheckCircle.classList.add('checked');
                lightCheckCircle.innerHTML = `<sf-symbol glyph="circle"></sf-symbol>
                                    <div class="settingsCheckedCircle">
                                        <sf-symbol glyph="checkmark.circle.fill"></sf-symbol>
                                    </div>`;

                lightChoice.appendChild(lightImage);
                lightChoice.appendChild(lightText);
                lightChoice.appendChild(lightCheckCircle);

                const darkChoice = document.createElement('div');
                darkChoice.classList.add('appearanceChoice');

                const darkImage = document.createElement('img');
                darkImage.src = '../image/UI_Elements/Settings/Appearance_Dark.png';
                darkImage.alt = 'Dark Appearance';

                const darkText = document.createElement('p');
                darkText.innerText = 'Dark';

                const darkCheckCircle = document.createElement('div');
                darkCheckCircle.classList.add('settingsCheckCircle');
                darkCheckCircle.innerHTML = `<sf-symbol glyph="circle"></sf-symbol>
                                    <div class="settingsCheckedCircle">
                                        <sf-symbol glyph="checkmark.circle.fill"></sf-symbol>
                                    </div>`;
                
                darkChoice.appendChild(darkImage);
                darkChoice.appendChild(darkText);
                darkChoice.appendChild(darkCheckCircle);

                lightChoice.addEventListener('click', () => {
                    document.querySelectorAll('.settingsCheckCircle')[0].classList.add('checked');
                    document.querySelectorAll('.settingsCheckCircle')[1].classList.remove('checked');
                    window.CONNECTIONVARIABLES.settings[setting.id] = 'light';
                    document.body.classList.remove('dark');
                });

                darkChoice.addEventListener('click', () => {
                    document.querySelectorAll('.settingsCheckCircle')[1].classList.add('checked');
                    document.querySelectorAll('.settingsCheckCircle')[0].classList.remove('checked');
                    window.CONNECTIONVARIABLES.settings[setting.id] = 'dark';
                    document.body.classList.add('dark');
                });

                appearanceSelector.appendChild(lightChoice);
                appearanceSelector.appendChild(darkChoice);

                settingDiv.appendChild(appearanceSelector);

                categoryDiv.appendChild(settingDiv);
                return;
            } else if(setting.type == 'slider') {
                const slider = document.createElement('div');
                slider.classList.add('slider');
                slider.innerHTML = '<div class="bar"></div>';

                const sliderFill = document.createElement('div');
                sliderFill.classList.add('barFill');
                slider.children[0].appendChild(sliderFill);


                const circle = document.createElement('div');
                circle.classList.add('circle');

                settingDiv.style.position = 'relative';
                settingDiv.appendChild(slider);
                settingDiv.appendChild(circle);

                const debugInput = document.createElement('input');
                debugInput.type = 'range';
                debugInput.style.display = 'none';

                let callback = () => {};

                categoryDiv.appendChild(settingDiv);
                settingDiv.appendChild(debugInput);
                
                dragElement(circle, sliderFill, debugInput, callback, setting.id, settingDiv.offsetWidth);

                return;
            } else if(setting.type == 'wallpaper_customization') {

                return;
            } else if(setting.type == 'iosVersionBig') {
                const iosVersion = document.createElement('div');
                iosVersion.classList.add('iosVersion');

                iosVersion.innerHTML = '<strong>iOS 26.0 (23A5260n)</strong><br><p>iOS beta gives you an early preview of upcoming apps, features, and technologies. Please back up your iPhone before you install the beta.<br><br>For more information, please visit one of the following programs:<br><ul><li>Apple Beta Software Program at <a href="https://beta.apple.com" target="_blank">beta.apple.com</a></li><li>Apple Developer Program at <a href="https://developer.apple.com" target="_blank">beta.apple.com</a></li></ul>'

                settingDiv.appendChild(iosVersion);
                categoryDiv.appendChild(settingDiv);

                return;
            } else if(setting.type == 'radio') {
                settingDiv.onclick = () => { 
                    window.CONNECTIONVARIABLES.settings[mainSetting.id] = category.indexOf(setting);

                    Array.from(settingDiv.parentElement.children).forEach((e) => {
                        if(e.classList.contains('setting') && e.querySelector('div.rightSide')) e.querySelector('div.rightSide').remove();
                    });

                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const textArrow = document.createElement("div");
                    textArrow.className = "textArrow";
                    const arrowIcon = document.createElement("sf-symbol");
                    arrowIcon.setAttribute("glyph", "checkmark");
                    arrowIcon.style.filter = 'invert(45%) sepia(90%) saturate(5221%) hue-rotate(199deg) brightness(101%) contrast(108%)';
                    textArrow.appendChild(arrowIcon);
                    rightDiv.appendChild(textArrow);
                    textAndMore.appendChild(rightDiv);
                };

                const textAndMore = document.createElement("div");
                textAndMore.className = "textAndMore";
                textAndMore.innerHTML = `<p>${setting.name}</p>`;

                let set = (typeof window.CONNECTIONVARIABLES.settings[mainSetting.id] == "number");

                console.log(set);

                if(window.CONNECTIONVARIABLES.settings[mainSetting.id] == category.indexOf(setting) || (!set && setting.checked)) {
                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const textArrow = document.createElement("div");
                    textArrow.className = "textArrow";
                    const arrowIcon = document.createElement("sf-symbol");
                    arrowIcon.setAttribute("glyph", "checkmark");
                    arrowIcon.style.filter = 'invert(45%) sepia(90%) saturate(5221%) hue-rotate(199deg) brightness(101%) contrast(108%)';
                    textArrow.appendChild(arrowIcon);
                    rightDiv.appendChild(textArrow);
                    textAndMore.appendChild(rightDiv);
                }

                settingDiv.appendChild(textAndMore);
                categoryDiv.appendChild(settingDiv);

                return;
            }
            
            if(setting.icon) {
                const iconInner = document.createElement("div");
                iconInner.className = "icon " + setting.icon.color + "-icon";

                if(!setting.icon.image) { 

                    const iconSymbol = document.createElement("sf-symbol");
                    //if(setting.icon.fixedHeight) iconSymbol.style.height = setting.icon.fixedHeight + "%";
                    iconSymbol.setAttribute("glyph", setting.icon.glyph);
                    iconSymbol.setAttribute("color", "white");

                    if(setting.icon.filter) {
                        iconSymbol.style.filter = setting.icon.filter;
                    }

                    iconInner.appendChild(iconSymbol);

                } else {
                    iconInner.style.backgroundImage = `url(${setting.icon.image})`;
                }

                iconSide.appendChild(iconInner);
            }

            settingDiv.appendChild(iconSide);

            const textAndMore = document.createElement("div");
            textAndMore.className = "textAndMore";
            textAndMore.innerHTML = `<p>${setting.name}</p>`;

            if(setting.right) {
                if (setting.right.type === "switch") {
                    const appleSlider = document.createElement("div");
                    appleSlider.className = "appleSlider";
                    appleSlider.addEventListener('click', () => settingToggle(appleSlider, setting, setting.right.toggleData));

                    const appleSliderInner = document.createElement("div");
                    appleSliderInner.className = "appleSliderInner";

                    const appleSliderValue = document.createElement("div");
                    appleSliderValue.className = "appleSliderValue";

                    appleSliderInner.appendChild(appleSliderValue);
                    appleSlider.appendChild(appleSliderInner);
                    textAndMore.appendChild(appleSlider);

                    const switchInput = document.createElement("input");
                    switchInput.type = "checkbox";
                    switchInput.id = setting.id + "-switch";
                    textAndMore.appendChild(switchInput);

                    if(setting.disabled) {
                        appleSlider.style.pointerEvents = 'none';
                    }

                } else if (setting.right.type === "arrow") {
                    
                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const textArrow = document.createElement("div");
                    textArrow.className = "textArrow";
                    if(setting.right.text) textArrow.innerHTML = `<p>${setting.right.text}</p>`;
                    const arrowIcon = document.createElement("sf-symbol");
                    arrowIcon.setAttribute("glyph", "chevron.right");
                    arrowIcon.setAttribute("color", "white");
                    textArrow.appendChild(arrowIcon);
                    rightDiv.appendChild(textArrow);
                    textAndMore.appendChild(rightDiv);

                    settingDiv.addEventListener('click', () => {
                        if(setting.innerSettings) {
                            handleNewCategory(setting, categoryInner);
                        }
                    });

                    if(!setting.innerSettings) {
                        settingDiv.classList.add('unfinished');
                    }
                    
                } else if (setting.right.type === 'button') {
                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const buttonDiv = document.createElement('div');
                    buttonDiv.classList.add('rightButtonDiv');

                    const button = document.createElement("button");
                    button.setAttribute('onclick', setting.right.onclick);
                    button.className = "settingButton";
                    if(setting.right.text) button.innerText = `${setting.right.text}`;

                    buttonDiv.appendChild(button);
                    rightDiv.appendChild(buttonDiv);
                    textAndMore.appendChild(rightDiv);

                    settingDiv.addEventListener('click', () => {
                        categoryInner.classList.add('open');
                    });
                } else if(!setting.right.type && setting.right.text) {
                    const rightDiv = document.createElement("div");
                    rightDiv.className = "rightSide";

                    const text = document.createElement("div");
                    text.className = "textArrow";
                    if(setting.right.text) text.innerHTML = `<p>${setting.right.text}</p>`;

                    rightDiv.appendChild(text);
                    textAndMore.appendChild(rightDiv);
                }
            }

            if(setting.disabled) {
                settingDiv.style.opacity = '0.5';
                settingDiv.style.cursor = 'not-allowed';
            }

            settingDiv.appendChild(textAndMore);

            categoryDiv.appendChild(settingDiv);
        });

        outputdiv.appendChild(categoryDiv);
    });
}

function setSlider(slider, set, toggleData) {
    console.log(slider)
    console.log(set)
    console.log(toggleData)

    slider.parentElement.querySelector("input").checked = set[toggleData];
    console.log(set[toggleData])
    
    if(slider.parentElement.querySelector("input").checked) {
        slider.classList.add("active");
        return;
    }

    slider.classList.remove("active");
}

function settingToggle(slider, setting, toggleData) {
    console.log("Toggling setting: " + setting.id + " to " + !slider.parentElement.querySelector("input").checked);

    slider.parentElement.querySelector("input").checked = !slider.parentElement.querySelector("input").checked;

    setting.data[toggleData] = slider.parentElement.querySelector("input").checked;
    window.CONNECTIONVARIABLES.settings[setting.id] = setting.data;

    if(slider.parentElement.querySelector("input").checked) {
        slider.classList.add("active");
        return;
    }

    slider.classList.remove("active");
}

function handleNewCategory(setting, categoryInner) {
    categoryInner.classList.add('categoryInner');
    categoryInner.id = 'category-' + setting.id;

    categoryInner.replaceChildren(); //? Bug fix for closing and opening categories.

    const titleBar = document.createElement('div');
    titleBar.classList.add('scrollTitleCategory');

    const backButton = document.createElement('div');
    backButton.classList.add('backButton');

    const backButtonButton = document.createElement('button');
    backButtonButton.addEventListener('click', () => {
        categoryInner.classList.remove('open');
        setTimeout(() => { categoryInner.remove(); }, 500);
    });
    backButtonButton.innerHTML = `<sf-symbol glyph='chevron.left'></sf-symbol>`;

    backButton.appendChild(backButtonButton);
    titleBar.appendChild(backButton);

    const titleText = document.createElement('div');
    titleText.innerHTML = `<p>${setting.name}</p>`;
    titleBar.appendChild(titleText);

    const titleSpace = document.createElement('div');
    titleSpace.classList.add('spacer');
    titleBar.appendChild(titleSpace);
    categoryInner.appendChild(titleBar);

    const innerElements = document.createElement('div');
    innerElements.classList.add('categoryInnerElements');
    categoryInner.appendChild(innerElements);

    if(setting.description) {
        const categoryHeader = document.createElement('div');
        categoryHeader.classList.add('categoryHeader');
        let categoryHeaderIcon = '';

        if(setting.icon.image) {
            categoryHeaderIcon = document.createElement('img');
            categoryHeaderIcon.classList.add('icon');
            categoryHeaderIcon.src = setting.icon.image;
        } else {
            categoryHeaderIcon = document.createElement('div');
            categoryHeaderIcon.classList.add('icon');
            categoryHeaderIcon.classList.add(setting.icon.color + '-icon');
            categoryHeaderIcon.innerHTML = `<sf-symbol glyph="${setting.icon.glyph}" color="white"></sf-symbol>`
        }

        const headerTitle = document.createElement('h1');
        headerTitle.innerText = setting.name;

        const headerDesc = document.createElement('p');
        headerDesc.innerHTML = setting.description;

        categoryHeader.appendChild(categoryHeaderIcon);
        categoryHeader.appendChild(headerTitle);
        categoryHeader.appendChild(headerDesc);

        innerElements.appendChild(categoryHeader);
    }

    console.log(setting.innerSettings);

    loadSettings(setting.innerSettings, innerElements, setting);
    categoryInner.appendChild(innerElements);
    document.body.appendChild(categoryInner);
    appSpecificFunction();
    setTimeout(() => { categoryInner.classList.add('open'); }, 200);
}


function dragElement(elmnt, barFill, sliderInput, callback, id, sliderLimit) {
    var pos1 = 0,
        pos3 = 0;
    elmnt.onmousedown = dragMouseDown;
    elmnt.onpointerdown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        //e.preventDefault();
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        document.onpointerup = closeDragElement;
        document.onmousemove = elementDrag;
        document.onpointermove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        if(parseInt(elmnt.style.left.split('px')[0]) <= 15) elmnt.style.left = '15px';
        if(parseInt(elmnt.style.left.split('px')[0]) >= (sliderLimit-60)) elmnt.style.left = `${(sliderLimit - 60)}px`;
        
        let percentage = ((parseInt(elmnt.style.left.split('px')[0])-15)/(sliderLimit-75))*100;
        
        if(id == 'battery_level_slider') {
            if(Math.round(percentage) <= 10) {
                barFill.style.background = '#eb3137';
            } else if(Math.round(percentage) <= 20) {
                barFill.style.background = '#fecd0b';
            } else {
                barFill.style.background = '#27cd41';
            }
        }

        barFill.style.width = `${percentage}%`;
        sliderInput.value = Math.round(percentage);
        callback(percentage);
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onpointerup = null;
        document.onmousemove = null;
        document.onpointermove = null;
    }
}