export const responses: any = [
    {
      id: 1,
      available_forms: ["Tablet", "Injection"],
      salt_forms_json: {
        Tablet: {
          "10mg": {
            "10Tablets": {
              101: null,
              102: null,
              "2863": [
                {
                  pharmacy_id: 1,
                  selling_price: 50,
                },
                {
                  pharmacy_id: 2,
                  selling_price: 24,
                },
              ],
              "2864": [
                {
                  pharmacy_id: 3,
                  selling_price: 11,
                },
                {
                  pharmacy_id: 4,
                  selling_price: 44,
                },
              ],
              103: null,
              104: null,
            },
            "20Tablets": {
              105: null,
              106: null,
              107: null,
              "28644": [
                {
                  pharmacy_id: 1,
                  selling_price: 110,
                },
                {
                  pharmacy_id: 2,
                  selling_price: 120,
                },
              ],
              "2869": [
                {
                  pharmacy_id: 3,
                  selling_price: 30,
                },
                {
                  pharmacy_id: 4,
                  selling_price: 140,
                },
              ],
              108: null,
            },
          },
          "20mg": { "30Tablets": { 1245: null }, "40Tablets": { 1245: null } },
        },
        Injection: {
          "30ml": { "5ml": { 12435: null,
            "2863": [
              {
                pharmacy_id: 1,
                selling_price: 50,
              },
              {
                pharmacy_id: 2,
                selling_price: 18,
              },
            ],
            "2864": [
              {
                pharmacy_id: 3,
                selling_price: 9,
              },
              {
                pharmacy_id: 4,
                selling_price: 44,
              },
            ],
           }, "6ml": { 145245: null, "2863": [
            {
              pharmacy_id: 1,
              selling_price: 50,
            },
            {
              pharmacy_id: 2,
              selling_price: 24,
            },
          ],
          "2864": [
            {
              pharmacy_id: 3,
              selling_price: 15,
            },
            {
              pharmacy_id: 4,
              selling_price: 44,
            },
          ],  } },
          "40ml": { "7ml": { 12245: null,
            "2863": [
              {
                pharmacy_id: 1,
                selling_price: 50,
              },
              {
                pharmacy_id: 2,
                selling_price: 24,
              },
            ],
            "2864": [
              {
                pharmacy_id: 3,
                selling_price: 13,
              },
              {
                pharmacy_id: 4,
                selling_price: 44,
              },
            ],
           }, "8ml": { 124565: null } },
        },
      },
    },
    {
      id: 2,
      available_forms: ["Capsule", "Tablet"],
      salt_forms_json: {
        Capsule: {
          "30mg": {
            "50Tablets": { 128: null },
            "60Tablets": {
              125: null,
              "2879": [
                {
                  pharmacy_id: 10,
                  selling_price: 60,
                },
                {
                  pharmacy_id: 14,
                  selling_price: 50,
                },
              ],
            },
          },
          "40mg": { "70Tablets": { 118: null }, "80Tablets": { 147: null } },
        },
        Tablet: {
          "50mg": { "90Tablets": { 148: null }, "100Tablets": { 158: null } },
          "60mg": { "120Tablets": { 178: null }, "140Tablets": { 178: null } },
        },
      },
    },
  ];
  