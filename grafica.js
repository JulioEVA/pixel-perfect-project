const winter = {
  country: {
    0: "Rusia",
    1: "Suecia",
    2: "Finlandia",
    3: "Estados Unidos",
    4: "Canadá",
    5: "Chequia",
    7: "Noruega",
    10: "Austria",
    11: "Suiza",
    16: "Alemania",
  },
  gold: {
    0: "318",
    1: "112",
    2: "43",
    3: "142",
    4: "246",
    5: "30",
    7: "126",
    10: "66",
    11: "54",
    16: "206",
  },
  silver: {
    0: "182",
    1: "97",
    2: "119",
    3: "235",
    4: "187",
    5: "75",
    7: "138",
    10: "80",
    11: "56",
    16: "195",
  },
  bronze: {
    0: "166",
    1: "135",
    2: "208",
    3: "135",
    4: "81",
    5: "110",
    7: "97",
    10: "89",
    11: "92",
    16: "170",
  },
  total: {
    0: "666",
    1: "344",
    2: "370",
    3: "512",
    4: "514",
    5: "215",
    7: "361",
    10: "235",
    11: "202",
    16: "571",
  },
};
const summer = {
  country: {
    0: "Reino Unido",
    1: "Estados Unidos",
    2: "Rusia",
    4: "Australia",
    5: "Japón",
    9: "Hungría",
    10: "Italia",
    11: "Francia",
    53: "Alemania",
    67: "China",
  },
  gold: {
    0: "192",
    1: "1413",
    2: "973",
    4: "269",
    5: "187",
    9: "238",
    10: "224",
    11: "199",
    53: "754",
    67: "289",
  },
  silver: {
    0: "231",
    1: "866",
    2: "757",
    4: "369",
    5: "219",
    9: "201",
    10: "242",
    11: "169",
    53: "642",
    67: "296",
  },
  bronze: {
    0: "273",
    1: "732",
    2: "801",
    4: "421",
    5: "282",
    9: "238",
    10: "283",
    11: "254",
    53: "704",
    67: "225",
  },
  total: {
    0: "696",
    1: "3011",
    2: "2531",
    4: "1059",
    5: "688",
    9: "677",
    10: "749",
    11: "622",
    53: "2100",
    67: "810",
  },
};
const gdp = {
  country: {
    14: "Brasil",
    18: "Canadá",
    20: "China",
    37: "Francia",
    40: "Alemania",
    49: "India",
    55: "Italia",
    57: "Japón",
    121: "Reino Unido",
    122: "Estados Unidos",
  },
  gdp: {
    14: "1.77",
    18: "1.55",
    20: "11.01",
    37: "2.42",
    40: "3.36",
    49: "2.1",
    55: "1.82",
    57: "4.12",
    121: "2.86",
    122: "18.04",
  },
  medal: {
    14: "408",
    18: "909",
    20: "892",
    37: "751",
    40: "2671",
    49: "84",
    55: "930",
    57: "750",
    121: "729",
    122: "3523",
  },
};
const ctx = document.getElementById("total-medals__winter");
const ctx2 = document.getElementById("gold-medals__winter");
const ctx3 = document.getElementById("silver-medals__winter");
const ctx4 = document.getElementById("bronze-medals__winter");
const ctx5 = document.getElementById("total-medals__summer");
const ctx6 = document.getElementById("gold-medals__summer");
const ctx7 = document.getElementById("silver-medals__summer");
const ctx8 = document.getElementById("bronze-medals__summer");
const ctx9 = document.getElementById("correlation__graph_gdp");

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: Object.values(winter.country),
    datasets: [
      {
        label: "Medallas totales en invierno",
        data: Object.values(winter.total),
        backgroundColor: [
          "rgba(206, 232, 230)",
          "rgba(235, 221, 255)",
          "rgba(255, 221, 221)",
          "rgba(247, 241, 210)",
          "rgba(219, 234, 237)",
          "rgba(239, 229, 204)",
          "rgba(255, 229, 196)",
          "rgba(226, 233, 255)",
          "rgba(231, 223, 235)",
          "rgba(255, 223, 223)",
          "rgba(255, 249, 196)",
          "rgba(225, 244, 221)",
          "rgba(237, 226, 221)",
          "rgba(255, 226, 226)",
          "rgba(222, 243, 255)",
          "rgba(235, 222, 244)",
          "rgba(255, 235, 235)",
          "rgba(255, 246, 196)",
          "rgba(209, 237, 216)",
          "rgba(231, 216, 206)",
          "rgba(255, 216, 216)",
          "rgba(196, 235, 255)",
          "rgba(214, 206, 232)",
          "rgba(255, 214, 255)",
          "rgba(255, 238, 196)",
          "rgba(184, 226, 201)",
          "rgba(209, 201, 189)",
          "rgba(255, 201, 201)",
          "rgba(174, 214, 255)",
          "rgba(191, 186, 216)",
          "rgba(255, 191, 255)",
          "rgba(255, 230, 169)",
          "rgba(151, 214, 164)",
          "rgba(182, 164, 142)",
          "rgba(255, 164, 164)",
          "rgba(123, 201, 255)",
          "rgba(159, 139, 191)",
          "rgba(255, 139, 255)",
          "rgba(255, 216, 125)",
        ],
        borderColor: [
          "rgb(44, 153, 139)",
          "rgb(169, 55, 247)",
          "rgb(247, 55, 55)",
          "rgb(226, 191, 0)",
          "rgb(33, 129, 151)",
          "rgb(209, 129, 42)",
          "rgb(247, 129, 0)",
          "rgb(42, 160, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 42, 42)",
          "rgb(247, 211, 0)",
          "rgb(42, 189, 96)",
          "rgb(198, 96, 42)",
          "rgb(247, 96, 96)",
          "rgb(42, 176, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 129, 247)",
          "rgb(247, 232, 0)",
          "rgb(12, 160, 44)",
          "rgb(184, 44, 12)",
          "rgb(247, 44, 44)",
          "rgb(33, 153, 247)",
          "rgb(129, 33, 189)",
          "rgb(247, 33, 247)",
          "rgb(247, 202, 0)",
          "rgb(44, 171, 0)",
          "rgb(129, 0, 33)",
          "rgb(247, 0, 0)",
          "rgb(0, 120, 189)",
          "rgb(109, 0, 189)",
          "rgb(247, 0, 247)",
          "rgb(247, 174, 0)",
          "rgb(12, 153, 0)",
          "rgb(96, 0, 55)",
          "rgb(247, 0, 96)",
          "rgb(0, 96, 153)",
          "rgb(55, 0, 129)",
          "rgb(206, 0, 206)",
          "rgb(206, 147, 0)",
        ],

        borderWidth: 1.5,
      },
    ],
  },
});
const myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: Object.values(winter.country),
    datasets: [
      {
        label: "Medallas de oro en invierno",
        data: Object.values(winter.gold),
        backgroundColor: [
          "rgba(206, 232, 230)",
          "rgba(235, 221, 255)",
          "rgba(255, 221, 221)",
          "rgba(247, 241, 210)",
          "rgba(219, 234, 237)",
          "rgba(239, 229, 204)",
          "rgba(255, 229, 196)",
          "rgba(226, 233, 255)",
          "rgba(231, 223, 235)",
          "rgba(255, 223, 223)",
          "rgba(255, 249, 196)",
          "rgba(225, 244, 221)",
          "rgba(237, 226, 221)",
          "rgba(255, 226, 226)",
          "rgba(222, 243, 255)",
          "rgba(235, 222, 244)",
          "rgba(255, 235, 235)",
          "rgba(255, 246, 196)",
          "rgba(209, 237, 216)",
          "rgba(231, 216, 206)",
          "rgba(255, 216, 216)",
          "rgba(196, 235, 255)",
          "rgba(214, 206, 232)",
          "rgba(255, 214, 255)",
          "rgba(255, 238, 196)",
          "rgba(184, 226, 201)",
          "rgba(209, 201, 189)",
          "rgba(255, 201, 201)",
          "rgba(174, 214, 255)",
          "rgba(191, 186, 216)",
          "rgba(255, 191, 255)",
          "rgba(255, 230, 169)",
          "rgba(151, 214, 164)",
          "rgba(182, 164, 142)",
          "rgba(255, 164, 164)",
          "rgba(123, 201, 255)",
          "rgba(159, 139, 191)",
          "rgba(255, 139, 255)",
          "rgba(255, 216, 125)",
        ],
        borderColor: [
          "rgb(44, 153, 139)",
          "rgb(169, 55, 247)",
          "rgb(247, 55, 55)",
          "rgb(226, 191, 0)",
          "rgb(33, 129, 151)",
          "rgb(209, 129, 42)",
          "rgb(247, 129, 0)",
          "rgb(42, 160, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 42, 42)",
          "rgb(247, 211, 0)",
          "rgb(42, 189, 96)",
          "rgb(198, 96, 42)",
          "rgb(247, 96, 96)",
          "rgb(42, 176, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 129, 247)",
          "rgb(247, 232, 0)",
          "rgb(12, 160, 44)",
          "rgb(184, 44, 12)",
          "rgb(247, 44, 44)",
          "rgb(33, 153, 247)",
          "rgb(129, 33, 189)",
          "rgb(247, 33, 247)",
          "rgb(247, 202, 0)",
          "rgb(44, 171, 0)",
          "rgb(129, 0, 33)",
          "rgb(247, 0, 0)",
          "rgb(0, 120, 189)",
          "rgb(109, 0, 189)",
          "rgb(247, 0, 247)",
          "rgb(247, 174, 0)",
          "rgb(12, 153, 0)",
          "rgb(96, 0, 55)",
          "rgb(247, 0, 96)",
          "rgb(0, 96, 153)",
          "rgb(55, 0, 129)",
          "rgb(206, 0, 206)",
          "rgb(206, 147, 0)",
        ],

        borderWidth: 3,
      },
    ],
  },
});
const myChart3 = new Chart(ctx3, {
  type: "polarArea",
  data: {
    labels: Object.values(winter.country),
    datasets: [
      {
        label: "Medallas de plata en invierno",
        data: Object.values(winter.silver),
        backgroundColor: [
          "rgba(206, 232, 230)",
          "rgba(235, 221, 255)",
          "rgba(255, 221, 221)",
          "rgba(247, 241, 210)",
          "rgba(219, 234, 237)",
          "rgba(239, 229, 204)",
          "rgba(255, 229, 196)",
          "rgba(226, 233, 255)",
          "rgba(231, 223, 235)",
          "rgba(255, 223, 223)",
          "rgba(255, 249, 196)",
          "rgba(225, 244, 221)",
          "rgba(237, 226, 221)",
          "rgba(255, 226, 226)",
          "rgba(222, 243, 255)",
          "rgba(235, 222, 244)",
          "rgba(255, 235, 235)",
          "rgba(255, 246, 196)",
          "rgba(209, 237, 216)",
          "rgba(231, 216, 206)",
          "rgba(255, 216, 216)",
          "rgba(196, 235, 255)",
          "rgba(214, 206, 232)",
          "rgba(255, 214, 255)",
          "rgba(255, 238, 196)",
          "rgba(184, 226, 201)",
          "rgba(209, 201, 189)",
          "rgba(255, 201, 201)",
          "rgba(174, 214, 255)",
          "rgba(191, 186, 216)",
          "rgba(255, 191, 255)",
          "rgba(255, 230, 169)",
          "rgba(151, 214, 164)",
          "rgba(182, 164, 142)",
          "rgba(255, 164, 164)",
          "rgba(123, 201, 255)",
          "rgba(159, 139, 191)",
          "rgba(255, 139, 255)",
          "rgba(255, 216, 125)",
        ],
        borderColor: [
          "rgb(44, 153, 139)",
          "rgb(169, 55, 247)",
          "rgb(247, 55, 55)",
          "rgb(226, 191, 0)",
          "rgb(33, 129, 151)",
          "rgb(209, 129, 42)",
          "rgb(247, 129, 0)",
          "rgb(42, 160, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 42, 42)",
          "rgb(247, 211, 0)",
          "rgb(42, 189, 96)",
          "rgb(198, 96, 42)",
          "rgb(247, 96, 96)",
          "rgb(42, 176, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 129, 247)",
          "rgb(247, 232, 0)",
          "rgb(12, 160, 44)",
          "rgb(184, 44, 12)",
          "rgb(247, 44, 44)",
          "rgb(33, 153, 247)",
          "rgb(129, 33, 189)",
          "rgb(247, 33, 247)",
          "rgb(247, 202, 0)",
          "rgb(44, 171, 0)",
          "rgb(129, 0, 33)",
          "rgb(247, 0, 0)",
          "rgb(0, 120, 189)",
          "rgb(109, 0, 189)",
          "rgb(247, 0, 247)",
          "rgb(247, 174, 0)",
          "rgb(12, 153, 0)",
          "rgb(96, 0, 55)",
          "rgb(247, 0, 96)",
          "rgb(0, 96, 153)",
          "rgb(55, 0, 129)",
          "rgb(206, 0, 206)",
          "rgb(206, 147, 0)",
        ],

        borderWidth: 3,
      },
    ],
  },
});
const myChart4 = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: Object.values(winter.country),
    datasets: [
      {
        label: "Medallas de bronce en invierno",
        data: Object.values(winter.bronze),
        backgroundColor: [
          "rgba(206, 232, 230)",
          "rgba(235, 221, 255)",
          "rgba(255, 221, 221)",
          "rgba(247, 241, 210)",
          "rgba(219, 234, 237)",
          "rgba(239, 229, 204)",
          "rgba(255, 229, 196)",
          "rgba(226, 233, 255)",
          "rgba(231, 223, 235)",
          "rgba(255, 223, 223)",
          "rgba(255, 249, 196)",
          "rgba(225, 244, 221)",
          "rgba(237, 226, 221)",
          "rgba(255, 226, 226)",
          "rgba(222, 243, 255)",
          "rgba(235, 222, 244)",
          "rgba(255, 235, 235)",
          "rgba(255, 246, 196)",
          "rgba(209, 237, 216)",
          "rgba(231, 216, 206)",
          "rgba(255, 216, 216)",
          "rgba(196, 235, 255)",
          "rgba(214, 206, 232)",
          "rgba(255, 214, 255)",
          "rgba(255, 238, 196)",
          "rgba(184, 226, 201)",
          "rgba(209, 201, 189)",
          "rgba(255, 201, 201)",
          "rgba(174, 214, 255)",
          "rgba(191, 186, 216)",
          "rgba(255, 191, 255)",
          "rgba(255, 230, 169)",
          "rgba(151, 214, 164)",
          "rgba(182, 164, 142)",
          "rgba(255, 164, 164)",
          "rgba(123, 201, 255)",
          "rgba(159, 139, 191)",
          "rgba(255, 139, 255)",
          "rgba(255, 216, 125)",
        ],
        borderColor: [
          "rgb(44, 153, 139)",
          "rgb(169, 55, 247)",
          "rgb(247, 55, 55)",
          "rgb(226, 191, 0)",
          "rgb(33, 129, 151)",
          "rgb(209, 129, 42)",
          "rgb(247, 129, 0)",
          "rgb(42, 160, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 42, 42)",
          "rgb(247, 211, 0)",
          "rgb(42, 189, 96)",
          "rgb(198, 96, 42)",
          "rgb(247, 96, 96)",
          "rgb(42, 176, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 129, 247)",
          "rgb(247, 232, 0)",
          "rgb(12, 160, 44)",
          "rgb(184, 44, 12)",
          "rgb(247, 44, 44)",
          "rgb(33, 153, 247)",
          "rgb(129, 33, 189)",
          "rgb(247, 33, 247)",
          "rgb(247, 202, 0)",
          "rgb(44, 171, 0)",
          "rgb(129, 0, 33)",
          "rgb(247, 0, 0)",
          "rgb(0, 120, 189)",
          "rgb(109, 0, 189)",
          "rgb(247, 0, 247)",
          "rgb(247, 174, 0)",
          "rgb(12, 153, 0)",
          "rgb(96, 0, 55)",
          "rgb(247, 0, 96)",
          "rgb(0, 96, 153)",
          "rgb(55, 0, 129)",
          "rgb(206, 0, 206)",
          "rgb(206, 147, 0)",
        ],

        borderWidth: 3,
      },
    ],
  },
});
const myChart5 = new Chart(ctx5, {
  type: "bar",
  data: {
    labels: Object.values(summer.country),
    datasets: [
      {
        label: "Medallas totales en verano",
        data: Object.values(summer.total),
        backgroundColor: [
          "rgba(206, 232, 230)",
          "rgba(235, 221, 255)",
          "rgba(255, 221, 221)",
          "rgba(247, 241, 210)",
          "rgba(219, 234, 237)",
          "rgba(239, 229, 204)",
          "rgba(255, 229, 196)",
          "rgba(226, 233, 255)",
          "rgba(231, 223, 235)",
          "rgba(255, 223, 223)",
          "rgba(255, 249, 196)",
          "rgba(225, 244, 221)",
          "rgba(237, 226, 221)",
          "rgba(255, 226, 226)",
          "rgba(222, 243, 255)",
          "rgba(235, 222, 244)",
          "rgba(255, 235, 235)",
          "rgba(255, 246, 196)",
          "rgba(209, 237, 216)",
          "rgba(231, 216, 206)",
          "rgba(255, 216, 216)",
          "rgba(196, 235, 255)",
          "rgba(214, 206, 232)",
          "rgba(255, 214, 255)",
          "rgba(255, 238, 196)",
          "rgba(184, 226, 201)",
          "rgba(209, 201, 189)",
          "rgba(255, 201, 201)",
          "rgba(174, 214, 255)",
          "rgba(191, 186, 216)",
          "rgba(255, 191, 255)",
          "rgba(255, 230, 169)",
          "rgba(151, 214, 164)",
          "rgba(182, 164, 142)",
          "rgba(255, 164, 164)",
          "rgba(123, 201, 255)",
          "rgba(159, 139, 191)",
          "rgba(255, 139, 255)",
          "rgba(255, 216, 125)",
        ],
        borderColor: [
          "rgb(44, 153, 139)",
          "rgb(169, 55, 247)",
          "rgb(247, 55, 55)",
          "rgb(226, 191, 0)",
          "rgb(33, 129, 151)",
          "rgb(209, 129, 42)",
          "rgb(247, 129, 0)",
          "rgb(42, 160, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 42, 42)",
          "rgb(247, 211, 0)",
          "rgb(42, 189, 96)",
          "rgb(198, 96, 42)",
          "rgb(247, 96, 96)",
          "rgb(42, 176, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 129, 247)",
          "rgb(247, 232, 0)",
          "rgb(12, 160, 44)",
          "rgb(184, 44, 12)",
          "rgb(247, 44, 44)",
          "rgb(33, 153, 247)",
          "rgb(129, 33, 189)",
          "rgb(247, 33, 247)",
          "rgb(247, 202, 0)",
          "rgb(44, 171, 0)",
          "rgb(129, 0, 33)",
          "rgb(247, 0, 0)",
          "rgb(0, 120, 189)",
          "rgb(109, 0, 189)",
          "rgb(247, 0, 247)",
          "rgb(247, 174, 0)",
          "rgb(12, 153, 0)",
          "rgb(96, 0, 55)",
          "rgb(247, 0, 96)",
          "rgb(0, 96, 153)",
          "rgb(55, 0, 129)",
          "rgb(206, 0, 206)",
          "rgb(206, 147, 0)",
        ],

        borderWidth: 3,
      },
    ],
  },
});
const myChart6 = new Chart(ctx6, {
  type: "doughnut",
  data: {
    labels: Object.values(summer.country),
    datasets: [
      {
        label: "Medallas de oro en verano",
        data: Object.values(summer.gold),
        backgroundColor: [
          "rgba(206, 232, 230)",
          "rgba(235, 221, 255)",
          "rgba(255, 221, 221)",
          "rgba(247, 241, 210)",
          "rgba(219, 234, 237)",
          "rgba(239, 229, 204)",
          "rgba(255, 229, 196)",
          "rgba(226, 233, 255)",
          "rgba(231, 223, 235)",
          "rgba(255, 223, 223)",
          "rgba(255, 249, 196)",
          "rgba(225, 244, 221)",
          "rgba(237, 226, 221)",
          "rgba(255, 226, 226)",
          "rgba(222, 243, 255)",
          "rgba(235, 222, 244)",
          "rgba(255, 235, 235)",
          "rgba(255, 246, 196)",
          "rgba(209, 237, 216)",
          "rgba(231, 216, 206)",
          "rgba(255, 216, 216)",
          "rgba(196, 235, 255)",
          "rgba(214, 206, 232)",
          "rgba(255, 214, 255)",
          "rgba(255, 238, 196)",
          "rgba(184, 226, 201)",
          "rgba(209, 201, 189)",
          "rgba(255, 201, 201)",
          "rgba(174, 214, 255)",
          "rgba(191, 186, 216)",
          "rgba(255, 191, 255)",
          "rgba(255, 230, 169)",
          "rgba(151, 214, 164)",
          "rgba(182, 164, 142)",
          "rgba(255, 164, 164)",
          "rgba(123, 201, 255)",
          "rgba(159, 139, 191)",
          "rgba(255, 139, 255)",
          "rgba(255, 216, 125)",
        ],
        borderColor: [
          "rgb(44, 153, 139)",
          "rgb(169, 55, 247)",
          "rgb(247, 55, 55)",
          "rgb(226, 191, 0)",
          "rgb(33, 129, 151)",
          "rgb(209, 129, 42)",
          "rgb(247, 129, 0)",
          "rgb(42, 160, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 42, 42)",
          "rgb(247, 211, 0)",
          "rgb(42, 189, 96)",
          "rgb(198, 96, 42)",
          "rgb(247, 96, 96)",
          "rgb(42, 176, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 129, 247)",
          "rgb(247, 232, 0)",
          "rgb(12, 160, 44)",
          "rgb(184, 44, 12)",
          "rgb(247, 44, 44)",
          "rgb(33, 153, 247)",
          "rgb(129, 33, 189)",
          "rgb(247, 33, 247)",
          "rgb(247, 202, 0)",
          "rgb(44, 171, 0)",
          "rgb(129, 0, 33)",
          "rgb(247, 0, 0)",
          "rgb(0, 120, 189)",
          "rgb(109, 0, 189)",
          "rgb(247, 0, 247)",
          "rgb(247, 174, 0)",
          "rgb(12, 153, 0)",
          "rgb(96, 0, 55)",
          "rgb(247, 0, 96)",
          "rgb(0, 96, 153)",
          "rgb(55, 0, 129)",
          "rgb(206, 0, 206)",
          "rgb(206, 147, 0)",
        ],

        borderWidth: 3,
      },
    ],
  },
});
const myChart7 = new Chart(ctx7, {
  type: "polarArea",
  data: {
    labels: Object.values(summer.country),
    datasets: [
      {
        label: "Medallas de plata en verano",
        data: Object.values(summer.silver),
        backgroundColor: [
          "rgba(206, 232, 230)",
          "rgba(235, 221, 255)",
          "rgba(255, 221, 221)",
          "rgba(247, 241, 210)",
          "rgba(219, 234, 237)",
          "rgba(239, 229, 204)",
          "rgba(255, 229, 196)",
          "rgba(226, 233, 255)",
          "rgba(231, 223, 235)",
          "rgba(255, 223, 223)",
          "rgba(255, 249, 196)",
          "rgba(225, 244, 221)",
          "rgba(237, 226, 221)",
          "rgba(255, 226, 226)",
          "rgba(222, 243, 255)",
          "rgba(235, 222, 244)",
          "rgba(255, 235, 235)",
          "rgba(255, 246, 196)",
          "rgba(209, 237, 216)",
          "rgba(231, 216, 206)",
          "rgba(255, 216, 216)",
          "rgba(196, 235, 255)",
          "rgba(214, 206, 232)",
          "rgba(255, 214, 255)",
          "rgba(255, 238, 196)",
          "rgba(184, 226, 201)",
          "rgba(209, 201, 189)",
          "rgba(255, 201, 201)",
          "rgba(174, 214, 255)",
          "rgba(191, 186, 216)",
          "rgba(255, 191, 255)",
          "rgba(255, 230, 169)",
          "rgba(151, 214, 164)",
          "rgba(182, 164, 142)",
          "rgba(255, 164, 164)",
          "rgba(123, 201, 255)",
          "rgba(159, 139, 191)",
          "rgba(255, 139, 255)",
          "rgba(255, 216, 125)",
        ],
        borderColor: [
          "rgb(44, 153, 139)",
          "rgb(169, 55, 247)",
          "rgb(247, 55, 55)",
          "rgb(226, 191, 0)",
          "rgb(33, 129, 151)",
          "rgb(209, 129, 42)",
          "rgb(247, 129, 0)",
          "rgb(42, 160, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 42, 42)",
          "rgb(247, 211, 0)",
          "rgb(42, 189, 96)",
          "rgb(198, 96, 42)",
          "rgb(247, 96, 96)",
          "rgb(42, 176, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 129, 247)",
          "rgb(247, 232, 0)",
          "rgb(12, 160, 44)",
          "rgb(184, 44, 12)",
          "rgb(247, 44, 44)",
          "rgb(33, 153, 247)",
          "rgb(129, 33, 189)",
          "rgb(247, 33, 247)",
          "rgb(247, 202, 0)",
          "rgb(44, 171, 0)",
          "rgb(129, 0, 33)",
          "rgb(247, 0, 0)",
          "rgb(0, 120, 189)",
          "rgb(109, 0, 189)",
          "rgb(247, 0, 247)",
          "rgb(247, 174, 0)",
          "rgb(12, 153, 0)",
          "rgb(96, 0, 55)",
          "rgb(247, 0, 96)",
          "rgb(0, 96, 153)",
          "rgb(55, 0, 129)",
          "rgb(206, 0, 206)",
          "rgb(206, 147, 0)",
        ],

        borderWidth: 3,
      },
    ],
  },
});
const myChart8 = new Chart(ctx8, {
  type: "bar",
  data: {
    labels: Object.values(summer.country),
    datasets: [
      {
        label: "Medallas de bronce en verano",
        data: Object.values(summer.bronze),
        backgroundColor: [
          "rgba(206, 232, 230)",
          "rgba(235, 221, 255)",
          "rgba(255, 221, 221)",
          "rgba(247, 241, 210)",
          "rgba(219, 234, 237)",
          "rgba(239, 229, 204)",
          "rgba(255, 229, 196)",
          "rgba(226, 233, 255)",
          "rgba(231, 223, 235)",
          "rgba(255, 223, 223)",
          "rgba(255, 249, 196)",
          "rgba(225, 244, 221)",
          "rgba(237, 226, 221)",
          "rgba(255, 226, 226)",
          "rgba(222, 243, 255)",
          "rgba(235, 222, 244)",
          "rgba(255, 235, 235)",
          "rgba(255, 246, 196)",
          "rgba(209, 237, 216)",
          "rgba(231, 216, 206)",
          "rgba(255, 216, 216)",
          "rgba(196, 235, 255)",
          "rgba(214, 206, 232)",
          "rgba(255, 214, 255)",
          "rgba(255, 238, 196)",
          "rgba(184, 226, 201)",
          "rgba(209, 201, 189)",
          "rgba(255, 201, 201)",
          "rgba(174, 214, 255)",
          "rgba(191, 186, 216)",
          "rgba(255, 191, 255)",
          "rgba(255, 230, 169)",
          "rgba(151, 214, 164)",
          "rgba(182, 164, 142)",
          "rgba(255, 164, 164)",
          "rgba(123, 201, 255)",
          "rgba(159, 139, 191)",
          "rgba(255, 139, 255)",
          "rgba(255, 216, 125)",
        ],
        borderColor: [
          "rgb(44, 153, 139)",
          "rgb(169, 55, 247)",
          "rgb(247, 55, 55)",
          "rgb(226, 191, 0)",
          "rgb(33, 129, 151)",
          "rgb(209, 129, 42)",
          "rgb(247, 129, 0)",
          "rgb(42, 160, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 42, 42)",
          "rgb(247, 211, 0)",
          "rgb(42, 189, 96)",
          "rgb(198, 96, 42)",
          "rgb(247, 96, 96)",
          "rgb(42, 176, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 129, 247)",
          "rgb(247, 232, 0)",
          "rgb(12, 160, 44)",
          "rgb(184, 44, 12)",
          "rgb(247, 44, 44)",
          "rgb(33, 153, 247)",
          "rgb(129, 33, 189)",
          "rgb(247, 33, 247)",
          "rgb(247, 202, 0)",
          "rgb(44, 171, 0)",
          "rgb(129, 0, 33)",
          "rgb(247, 0, 0)",
          "rgb(0, 120, 189)",
          "rgb(109, 0, 189)",
          "rgb(247, 0, 247)",
          "rgb(247, 174, 0)",
          "rgb(12, 153, 0)",
          "rgb(96, 0, 55)",
          "rgb(247, 0, 96)",
          "rgb(0, 96, 153)",
          "rgb(55, 0, 129)",
          "rgb(206, 0, 206)",
          "rgb(206, 147, 0)",
        ],

        borderWidth: 3,
      },
    ],
  },
});
const myChart9 = new Chart(ctx9, {
  type: "bar",
  data: {
    labels: Object.values(gdp.country),
    datasets: [
      {
        label: "Distribucion de medallas respecto al GDP(Trillones)",
        data: Object.values(gdp.gdp),
        backgroundColor: [
          "rgb(173, 232, 230)",
          "rgb(235, 194, 255)",
          "rgb(255, 189, 189)",
          "rgb(247, 226, 210)",
          "rgb(209, 234, 237)",
          "rgb(239, 219, 204)",
          "rgb(255, 210, 196)",
          "rgb(201, 233, 255)",
          "rgb(215, 209, 235)",
          "rgb(255, 206, 206)",
          "rgb(255, 241, 196)",
          "rgb(218, 241, 221)",
          "rgb(233, 212, 221)",
          "rgb(255, 205, 205)",
          "rgb(206, 243, 255)",
          "rgb(221, 204, 244)",
          "rgb(255, 214, 235)",
          "rgb(255, 233, 196)",
          "rgb(180, 237, 216)",
          "rgb(221, 186, 206)",
          "rgb(255, 186, 186)",
          "rgb(156, 235, 255)",
          "rgb(185, 168, 232)",
          "rgb(255, 175, 255)",
          "rgb(255, 222, 169)",
          "rgb(132, 214, 164)",
          "rgb(197, 164, 142)",
          "rgb(255, 164, 164)",
          "rgb(98, 201, 255)",
          "rgb(142, 139, 191)",
          "rgb(255, 129, 255)",
          "rgb(255, 202, 125)",
          "rgb(97, 185, 154)",
          "rgb(199, 142, 116)",
          "rgb(255, 125, 125)",
          "rgb(59, 176, 231)",
          "rgb(126, 107, 166)",
          "rgb(255, 97, 255)",
          "rgb(255, 186, 69)",
        ],
        borderColor: [
          "rgb(44, 153, 139)",
          "rgb(169, 55, 247)",
          "rgb(247, 55, 55)",
          "rgb(226, 191, 0)",
          "rgb(33, 129, 151)",
          "rgb(209, 129, 42)",
          "rgb(247, 129, 0)",
          "rgb(42, 160, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 42, 42)",
          "rgb(247, 211, 0)",
          "rgb(42, 189, 96)",
          "rgb(198, 96, 42)",
          "rgb(247, 96, 96)",
          "rgb(42, 176, 247)",
          "rgb(129, 42, 206)",
          "rgb(247, 129, 247)",
          "rgb(247, 232, 0)",
          "rgb(12, 160, 44)",
          "rgb(184, 44, 12)",
          "rgb(247, 44, 44)",
          "rgb(33, 153, 247)",
          "rgb(129, 33, 189)",
          "rgb(247, 33, 247)",
          "rgb(247, 202, 0)",
          "rgb(44, 171, 0)",
          "rgb(129, 0, 33)",
          "rgb(247, 0, 0)",
          "rgb(0, 120, 189)",
          "rgb(109, 0, 189)",
          "rgb(247, 0, 247)",
          "rgb(247, 174, 0)",
          "rgb(12, 153, 0)",
          "rgb(96, 0, 55)",
          "rgb(247, 0, 96)",
          "rgb(0, 96, 153)",
          "rgb(55, 0, 129)",
          "rgb(206, 0, 206)",
          "rgb(206, 147, 0)",
        ],

        borderWidth: 3,
      },
    ],
  },
});
