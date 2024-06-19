interface Resources {
  "translation": {
    "meta": {
      "languageName": "English",
      "shorthand": "en"
    },
    "common": {
      "title": "Welcome to PxWeb 2.0",
      "header": {
        "title": "PxWeb 2.0",
        "logo": "PxWeb 2.0"
      },
      "footer": {
        "contact": {
          "title": "Contact",
          "description": "Description text..."
        },
        "about": {
          "title": "About",
          "description": "Description text..."
        },
        "accessibility": {
          "title": "Accessibility",
          "description": "Description text..."
        },
        "version": {
          "title": "Version",
          "description": "Description text..."
        }
      },
      "generic_buttons": {
        "ok": "OK",
        "cancel": "Cancel",
        "save": "Save",
        "search": "Search",
        "close": "Close"
      },
      "generic_tags": {
        "mandatory": "Mandatory"
      }
    },
    "start_page": {
      "header": "Welcome to the app!",
      "welcome_trans_test": "Welcome to the <1>app</1> for PxWeb 2.0!"
    },
    "presentation_page": {
      "header": {
        "searchbutton": "Search",
        "languagebutton": "languages",
        "statistics": "Statistikkbanken"
      },
      "sidemenu": {
        "hide": "Hide",
        "selection": {
          "title": "Filter",
          "variablebox": {
            "search": {
              "placeholder": "Search in list",
              "label": "Search",
              "arialabelicontext": "Search icon",
              "ariallabelclearbuttontext": "Clear search icon"
            },
            "header": {
              "tag_selected": "{{selected}} of {{total}} selected",
              "tag_mandatory": "Mandatory",
              "alert_no_mandatory_values": "You must select something in the list for the table to be displayed"
            },
            "content": {
              "select": {
                "label": "Select grouping",
                "placeholder": "Make a selection"
              },
              "mixed_checkbox": {
                "select_all": "Select all",
                "deselect_all": "Deselect all"
              },
              "values_list": {
                "aria_label": "List of {{total}} values.",
                "aria_description": "The variable's list of {{total}} total values. To enter the list, press the arrow down key. The Tab key exits the list."
              }
            }
          }
        },
        "view": {
          "title": "Display",
          "table": {
            "title": "Table"
          },
          "graph": {
            "title": "Graph"
          }
        },
        "edit": {
          "title": "Edit",
          "customize": {
            "title": "Customize",
            "pivot": {
              "title": "Pivot"
            },
            "rearrange": {
              "title": "Rearrange table",
              "description": "Description text..."
            },
            "change_order": {
              "title": "Change order",
              "description": "Description text..."
            }
          },
          "calculate": {
            "title": "Calculate",
            "sum": {
              "title": "Sum",
              "description": "Description text..."
            }
          },
          "hide_display": {
            "title": "Hide/display"
          }
        },
        "save": {
          "title": "Save",
          "file": {
            "title": "Save as file",
            "excel": "Excel (xlsx)"
          },
          "imagefile": {
            "title": "Save as graph",
            "png": "Chart (png)"
          },
          "link": {
            "title": "Save as link",
            "description": "Description text..."
          },
          "api": {
            "title": "API",
            "description": "Description text..."
          }
        },
        "help": {
          "title": "Help"
        }
      },
      "main_content": {
        "last_updated": "Last updated",
        "show_details": "Show details",
        "table": {
          "warnings": {
            "missing_mandatory": {
              "title": "Missing mandatory selection",
              "description": "The table cannot be displayed. You must select something in the filter on the left."
            }
          }
        },
        "about_table": {
          "title": "About the table",
          "footnotes": {
            "title": "Notes",
            "show_all_footnotes": "Show all notes for table"
          },
          "information": {
            "title": "Information",
            "description": "The table is part of the statistics {{statistics}}"
          },
          "definition": {
            "title": "Definitions",
            "description": "Description text..."
          },
          "metadata": {
            "title": "Metadata",
            "description": "Description text..."
          }
        },
        "related": {
          "title": "Related",
          "description": "Description text..."
        }
      },
      "footer": {
        "description": "Statistics Sweden (SCB) and Statistics Norway (SSB) are building a new and more user-friendly interface for PxWeb. Follow the development of the new interface on the",
        "descriptionLink": "project page at Github.",
        "contact": "Contact",
        "projectLeader": "Project leader",
        "scrumMaster": "Scrum master",
        "copyright": "Copyright © 2024 Statistics Sweden and Statistics Norway"
      }
    },
    "date": {
      "simple_date": "{{value, datetime}}",
      "simple_date_with_time": "{{value, datetime(year: 'numeric'; month: 'numeric'; day: 'numeric'; hour: 'numeric'; minute: 'numeric')}}"
    },
    "number": {
      "simple_number": "{{value, pxNumber}}",
      "simple_number_with_zero_decimal": "{{value, pxNumber(minimumFractionDigits: 0; maximumFractionDigits: 0;)}}",
      "simple_number_with_one_decimal": "{{value, pxNumber(minimumFractionDigits: 1; maximumFractionDigits: 1;)}}",
      "simple_number_with_two_decimals": "{{value, pxNumber(minimumFractionDigits: 2; maximumFractionDigits: 2;)}}",
      "simple_number_with_three_decimals": "{{value, pxNumber(minimumFractionDigits: 3; maximumFractionDigits: 3;)}}",
      "simple_number_with_four_decimals": "{{value, pxNumber(minimumFractionDigits: 4; maximumFractionDigits: 4;)}}",
      "simple_number_with_five_decimals": "{{value, pxNumber(minimumFractionDigits: 5; maximumFractionDigits: 5;)}}",
      "simple_number_with_default_formatter": "{{value, number(minimumFractionDigits: 5; maximumFractionDigits: 5; roundingMode: 'halfExpand')}}"
    }
  }
}

export default Resources;
