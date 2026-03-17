
let userLang = (navigator.language || (navigator).userLanguage || 'en');
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "69b9324d9e728433f0f956f5",
  "uuid": "d8a0b64c-0da9-4c87-bac5-8cf872c59356",
  "domain": "http://localhost/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "https://www.starhealth.in/lp/health-insurance/nonbrand",
  "cookieExpiresAfterDays": 365,
  "default": false,
  "mustConsent": true,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": false,
  "disablePoweredBy": false,
  "translations": {
    "en": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {
        "others": {
          "description": "<p>NA</p>"
        },
        "functional": {
          "description": "<p>NA</p>"
        },
        "marketing": {
          "description": "<p>NA</p>"
        },
        "analytics": {
          "description": "<p>NA</p>"
        }
      },
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Reject All",
          "title": "Reject All"
        }
      },
      "purposeItem": {
        "services": "services"
      }
    }
  },
  "styling": {
    "theme": [
      "light",
      "custom"
    ]
  },
  "htmlTexts": true,
  "embedded": false,
  "declarative": false,
  "groupByPurpose": true,
  "hideToggleAll": false,
  "appName": "sasas",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "sasas",
  "companyAddress": " ",
  "services": [
    {
      "name": "_dyjsession",
      "title": "_dyjsession",
      "purposes": [
        "Functional"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_dyjsession"
      ]
    },
    {
      "name": "_dy_soct",
      "title": "_dy_soct",
      "purposes": [
        "Functional"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_dy_soct"
      ]
    },
    {
      "name": "bm_sz",
      "title": "bm_sz",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "bm_sz"
      ]
    },
    {
      "name": "__Host-next-auth.csrf-token",
      "title": "__Host-next-auth.csrf-token",
      "purposes": [
        "Functional"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "__Host-next-auth.csrf-token"
      ]
    },
    {
      "name": "__Secure-next-auth.callback-url",
      "title": "__Secure-next-auth.callback-url",
      "purposes": [
        "Functional"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "__Secure-next-auth.callback-url"
      ]
    },
    {
      "name": "bm_sv",
      "title": "bm_sv",
      "purposes": [
        "Functional"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "bm_sv"
      ]
    },
    {
      "name": "_gcl_au",
      "title": "_gcl_au",
      "purposes": [
        "Marketing"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_gcl_au"
      ]
    },
    {
      "name": "_dyid",
      "title": "_dyid",
      "purposes": [
        "Functional"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_dyid"
      ]
    },
    {
      "name": "ak_bmsc",
      "title": "ak_bmsc",
      "purposes": [
        "Functional"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "ak_bmsc"
      ]
    },
    {
      "name": "_ga",
      "title": "_ga",
      "purposes": [
        "Analytics"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga"
      ]
    },
    {
      "name": "CLID",
      "title": "CLID",
      "purposes": [
        "Analytics"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "CLID"
      ]
    },
    {
      "name": "_clck",
      "title": "_clck",
      "purposes": [
        "Analytics"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_clck"
      ]
    },
    {
      "name": "neo_sc",
      "title": "neo_sc",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "neo_sc"
      ]
    },
    {
      "name": "nt_user_id",
      "title": "nt_user_id",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "nt_user_id"
      ]
    },
    {
      "name": "nt_trait",
      "title": "nt_trait",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "nt_trait"
      ]
    },
    {
      "name": "nt_group_id",
      "title": "nt_group_id",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "nt_group_id"
      ]
    },
    {
      "name": "nt_group_trait",
      "title": "nt_group_trait",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "nt_group_trait"
      ]
    },
    {
      "name": "nt_anonymous_id",
      "title": "nt_anonymous_id",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "nt_anonymous_id"
      ]
    },
    {
      "name": "nt_page_init_referrer",
      "title": "nt_page_init_referrer",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "nt_page_init_referrer"
      ]
    },
    {
      "name": "nt_page_init_referring_domain",
      "title": "nt_page_init_referring_domain",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "nt_page_init_referring_domain"
      ]
    },
    {
      "name": "neo_session",
      "title": "neo_session",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "neo_session"
      ]
    },
    {
      "name": "_clsk",
      "title": "_clsk",
      "purposes": [
        "Analytics"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_clsk"
      ]
    },
    {
      "name": "_abck",
      "title": "_abck",
      "purposes": [
        "Functional"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_abck"
      ]
    },
    {
      "name": "_uetsid",
      "title": "_uetsid",
      "purposes": [
        "Marketing"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_uetsid"
      ]
    },
    {
      "name": "_uetvid",
      "title": "_uetvid",
      "purposes": [
        "Marketing"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_uetvid"
      ]
    },
    {
      "name": "MUID",
      "title": "MUID",
      "purposes": [
        "Marketing"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "MUID"
      ]
    },
    {
      "name": "MR",
      "title": "MR",
      "purposes": [
        "Marketing"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "MR"
      ]
    },
    {
      "name": "SRM_B",
      "title": "SRM_B",
      "purposes": [
        "Functional"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "SRM_B"
      ]
    },
    {
      "name": "SM",
      "title": "SM",
      "purposes": [
        "Analytics"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "SM"
      ]
    },
    {
      "name": "ANONCHK",
      "title": "ANONCHK",
      "purposes": [
        "Marketing"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "ANONCHK"
      ]
    },
    {
      "name": "_ga_J59EYF8C12",
      "title": "_ga_J59EYF8C12",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga_J59EYF8C12"
      ]
    }
  ]
};
showCookie();