const pokemon = [
  {
    id: 1,
    num: "001",
    title: "ASM",
    subtitle: "Your path to success through faith and knowledge",
    img: "../assets/img/ASM.png",
    type: ["Onesta", "Amicalita"],
    traits: [
      {
        name: "Onesta",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.8,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 2,
    num: "002",
    title: "Alpine",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "../assets/img/alpine.png",
    type: ["Emotivita", "Amicalita"],
    traits: [
      {
        name: "Emotivita",
        weight: 0.5,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.6,
        positive: true,
      },
    ],
  },
  {
    id: 3,
    num: "003",
    title: "Automation Engineering Association",
    subtitle: "Eat sleep control & repeat!",
    img: "../assets/img/AEA.png",
    type: ["Apertura", "Coscienziosita"],
    traits: [
      {
        name: "Apertura",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Estroversione",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 4,
    num: "004",
    title: "BEA ",
    subtitle: "From students to students",
    img: "../assets/img/BEA.png",
    type: ["Amicalita"],
    traits: [
      {
        name: "Amicalita",
        weight: 0.9,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.6,
        positive: true,
      },
    ],
  },
  {
    id: 5,
    num: "005",
    title: "B.E.S.T.",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "../assets/img/BEST.png",
    type: ["Coscienziosita"],
    traits: [
      {
        name: "Coscienziosita",
        weight: 0.5,
        positive: true,
      },
      {
        name: "Estroversione",
        weight: 0.4,
        positive: false,
      },
    ],
  },
  {
    id: 6,
    num: "006",
    title: "ESN ",
    subtitle: "Students helping students",
    img: "../assets/img/ESN.png",
    type: ["Amicalita", "Estroversione"],
    traits: [
      {
        name: "Amicalita",
        weight: 0.8,
        positive: true,
      },
      {
        name: "Estroversione",
        weight: 0.7,
        positive: true,
      },
    ],
  },
  {
    id: 7,
    num: "007",
    title: "Enactus ",
    subtitle: "Be the change",
    img: "../assets/img/Enactus.png",
    type: ["Apertura", "Onesta"],
    traits: [
      {
        name: "Apertura",
        weight: 0.9,
        positive: true,
      },
      {
        name: "Onesta",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 8,
    num: "008",
    title: "Entrepreneurship Club",
    subtitle: "Learn Network Build",
    img: "../assets/img/EClub.png",
    type: ["Apertura", "Estroversione"],
    traits: [
      {
        name: "Estroversione",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 9,
    num: "009",
    title: "FLy-Mi",
    subtitle: '"Only those who dare may fly"',
    img: "../assets/img/FlyMi.png",
    type: ["Estroversione"],
    traits: [
      {
        name: "Estroversione",
        weight: 0.9,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.6,
        positive: true,
      },
    ],
  },
  {
    id: 10,
    num: "010",
    title: "Jemp",
    subtitle: "Junior Enterprise Milano Politecnico",
    img: "../assets/img/Jemp.png",
    type: ["Coscienziosita", "Onesta"],
    traits: [
      {
        name: "Coscienziosita",
        weight: 0.8,
        positive: true,
      },
      {
        name: "Onesta",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Estroversione",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 11,
    num: "011",
    title: "MESA",
    subtitle: "Share the Knowledge",
    img: "../assets/img/MESA.png",
    type: ["Apertura", "Amicalita"],
    traits: [
      {
        name: "Apertura",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.5,
        positive: false,
      },
    ],
  },
  {
    id: 12,
    num: "012",
    title: "NINE",
    subtitle: "The small world of great things",
    img: "../assets/img/NINE.png",
    type: ["Apertura", "Amicalita"],
    traits: [
      {
        name: "Apertura",
        weight: 0.8,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Emotivita",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 13,
    num: "013",
    title: "Passion Lab ",
    subtitle: "Subtitle",
    img: "../assets/img/Lab.png",
    type: ["Estroversione", "Amicalita"],
    traits: [
      {
        name: "Estroversione",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 14,
    num: "014",
    title: "POuL - Politecnico Open unix Labs",
    subtitle: "Come hack with us",
    img: "../assets/img/POuL.png",
    type: ["Apertura"],
    traits: [
      {
        name: "Apertura",
        weight: 0.9,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.6,
        positive: true,
      },
    ],
  },
  {
    id: 15,
    num: "015",
    title: "POLI.RADIO",
    subtitle: "Not AM not FM",
    img: "../assets/img/POLIRADIO.png",
    type: ["Estroversione", "Amicalita"],
    traits: [
      {
        name: "Estroversione",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.5,
        positive: true,
      },
      {
        name: "Emotivita",
        weight: 0.4,
        positive: false,
      },
    ],
  },
  {
    id: 16,
    num: "016",
    title: "PoliSpace",
    subtitle: "Alatis Garve Nihil",
    img: "../assets/img/PoliSpace.png",
    type: ["Coscienziosita", "Apertura"],
    traits: [
      {
        name: "Coscienziosita",
        weight: 0.8,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Estroversione",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 17,
    num: "017",
    title: "Poliedro",
    subtitle: "Studentз LGBTI+ del Politecnico di Milano",
    img: "../assets/img/Poliedro.png",
    type: ["Amicalita", "Apertura"],
    traits: [
      {
        name: "Amicalita",
        weight: 0.8,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.4,
        positive: false,
      },
    ],
  },
  {
    id: 18,
    num: "018",
    title: "Polifonia",
    subtitle: "We can’t wait to share our passion for music with you.",
    img: "../assets/img/Polifonia.png",
    type: ["Estroversione", "Amicalita"],
    traits: [
      {
        name: "Estroversione",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 19,
    num: "019",
    title: " Data Scientists",
    subtitle: "The Data Science Association of ",
    img: "../assets/img/DS.png",
    type: ["Apertura", "Coscienziosita"],
    traits: [
      {
        name: "Apertura",
        weight: 0.9,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Estroversione",
        weight: 0.4,
        positive: false,
      },
    ],
  },
  {
    id: 20,
    num: "020",
    title: "POLI.MOVIES",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "../assets/img/POLIMOVIES.png",
    type: ["Estroversione", "Apertura"],
    traits: [
      {
        name: "Estroversione",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 21,
    num: "021",
    title: "Resilient G.A.P.",
    subtitle: "Glocal Action Project",
    img: "../assets/img/Resilient.png",
    type: ["Amicalita", "Coscienziosita"],
    traits: [
      {
        name: "Amicalita",
        weight: 0.8,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.4,
        positive: false,
      },
    ],
  },
  {
    id: 22,
    num: "022",
    title: "SIT ",
    subtitle: "Social Innovation Teams",
    img: "../assets/img/SIT.png",
    type: ["Amicalita", "Apertura"],
    traits: [
      {
        name: "Amicalita",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Estroversione",
        weight: 0.5,
        positive: false,
      },
    ],
  },
  {
    id: 23,
    num: "023",
    title: "Scacchi ",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "../assets/img/Scacchi.png",
    type: ["Emotivita", "Coscienziosita"],
    traits: [
      {
        name: "Emotivita",
        weight: 0.5,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.5,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.4,
        positive: false,
      },
    ],
  },
  {
    id: 24,
    num: "024",
    title: "Skyward",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "../assets/img/Skyward.png",
    type: ["Apertura", "Estroversione"],
    traits: [
      {
        name: "Apertura",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Estroversione",
        weight: 0.5,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.4,
        positive: false,
      },
    ],
  },
  {
    id: 25,
    num: "025",
    title: "Starting Finance Club ",
    subtitle: "Learning Finance, Sharing Experience",
    img: "../assets/img/StartingFinance.png",
    type: ["Estroversione", "Coscienziosita"],
    traits: [
      {
        name: "Estroversione",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Coscienziosita",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 26,
    num: "026",
    title: "Teatro delle biglie",
    subtitle:
      '"Il cinema vi renderà famosi, la televisione vi renderà ricchi, ma il teatro vi farà bene." - Terrence Mann',
    img: "../assets/img/TdB.png",
    type: ["Emotivita", "Apertura"],
    traits: [
      {
        name: "Emotivita",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Apertura",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.5,
        positive: true,
      },
    ],
  },
  {
    id: 27,
    num: "027",
    title: "WoShou",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "../assets/img/WoShou.png",
    type: ["Estroversione", "Amicalita"],
    traits: [
      {
        name: "Estroversione",
        weight: 0.7,
        positive: true,
      },
      {
        name: "Amicalita",
        weight: 0.6,
        positive: true,
      },
      {
        name: "Onesta",
        weight: 0.5,
        positive: true,
      },
    ],
  },
];

export default pokemon;
