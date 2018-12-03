import {REQUEST_POST,RECEIVE_POST, RECEIVE_ERROR, RECEIVE_LOADMORE} from '../Actions/Posts'


const initState = {
  loading: false,
  error:false,
  loadmore: false,
  posts: [{
  "id": 1,
  "owner": "Silvio Edgington",
  "postAt": "7/27/2018",
  "content": "울란바토르",
  "actions": {
    "comment": 29,
    "share": 1,
    "like": 75
  }
}, {
  "id": 2,
  "owner": "Roseline Rentz",
  "postAt": "3/27/2018",
  "content": "パーティーへ行かないか",
  "actions": {
    "comment": 5,
    "share": 40,
    "like": 73
  }
}, {
  "id": 3,
  "owner": "Leesa Dorgan",
  "postAt": "7/25/2018",
  "content": " ",
  "actions": {
    "comment": 40,
    "share": 5,
    "like": 99
  }
}, {
  "id": 4,
  "owner": "Sophronia Schubart",
  "postAt": "12/22/2017",
  "content": "사회과학원 어학연구소",
  "actions": {
    "comment": 43,
    "share": 58,
    "like": 64
  }
}, {
  "id": 5,
  "owner": "Sadella Leppington",
  "postAt": "6/7/2018",
  "content": "'\"'",
  "actions": {
    "comment": 65,
    "share": 90,
    "like": 55
  }
}, {
  "id": 6,
  "owner": "Rachel Chadwick",
  "postAt": "6/20/2018",
  "content": "❤️ 💔 💌 💕 💞 💓 💗 💖 💘 💝 💟 💜 💛 💚 💙",
  "actions": {
    "comment": 35,
    "share": 28,
    "like": 100
  }
}, {
  "id": 7,
  "owner": "Marty Attoc",
  "postAt": "9/12/2018",
  "content": "1",
  "actions": {
    "comment": 2,
    "share": 32,
    "like": 82
  }
}, {
  "id": 8,
  "owner": "Juana Pickerin",
  "postAt": "10/5/2018",
  "content": "␢",
  "actions": {
    "comment": 34,
    "share": 10,
    "like": 9
  }
}, {
  "id": 9,
  "owner": "Marnie Mutton",
  "postAt": "12/26/2017",
  "content": "0/0",
  "actions": {
    "comment": 93,
    "share": 23,
    "like": 19
  }
}, {
  "id": 10,
  "owner": "Steward Kershaw",
  "postAt": "5/20/2018",
  "content": "␣",
  "actions": {
    "comment": 67,
    "share": 6,
    "like": 46
  }
}, {
  "id": 11,
  "owner": "Sinclair Jeacop",
  "postAt": "5/2/2018",
  "content": "1.00",
  "actions": {
    "comment": 37,
    "share": 14,
    "like": 26
  }
}, {
  "id": 12,
  "owner": "Lorette Ortet",
  "postAt": "10/7/2018",
  "content": "｀ｨ(´∀｀∩",
  "actions": {
    "comment": 65,
    "share": 84,
    "like": 60
  }
}, {
  "id": 13,
  "owner": "Elva Cockney",
  "postAt": "9/22/2018",
  "content": "הָיְתָהtestالصفحات التّحول",
  "actions": {
    "comment": 71,
    "share": 64,
    "like": 75
  }
}, {
  "id": 14,
  "owner": "Zenia Swaite",
  "postAt": "11/18/2018",
  "content": "1E2",
  "actions": {
    "comment": 29,
    "share": 99,
    "like": 81
  }
}, {
  "id": 15,
  "owner": "Taffy Mowsdale",
  "postAt": "2/7/2018",
  "content": "␡",
  "actions": {
    "comment": 65,
    "share": 73,
    "like": 70
  }
}, {
  "id": 16,
  "owner": "Leodora Jakovijevic",
  "postAt": "12/26/2017",
  "content": "(｡◕ ∀ ◕｡)",
  "actions": {
    "comment": 71,
    "share": 34,
    "like": 46
  }
}, {
  "id": 17,
  "owner": "Catharina Checcuzzi",
  "postAt": "11/3/2018",
  "content": "𠜎𠜱𠝹𠱓𠱸𠲖𠳏",
  "actions": {
    "comment": 88,
    "share": 33,
    "like": 74
  }
}, {
  "id": 18,
  "owner": "Bailie Compford",
  "postAt": "9/2/2018",
  "content": " ",
  "actions": {
    "comment": 81,
    "share": 47,
    "like": 84
  }
}, {
  "id": 19,
  "owner": "Pieter Belch",
  "postAt": "1/31/2018",
  "content": "<svg><script>0<1>alert('XSS')</script>",
  "actions": {
    "comment": 81,
    "share": 21,
    "like": 36
  }
}, {
  "id": 20,
  "owner": "Morena Tussaine",
  "postAt": "9/3/2018",
  "content": "1.00",
  "actions": {
    "comment": 27,
    "share": 15,
    "like": 73
  }
}, {
  "id": 21,
  "owner": "Hettie Lernihan",
  "postAt": "2/6/2018",
  "content": ",./;'[]\\-=",
  "actions": {
    "comment": 8,
    "share": 89,
    "like": 35
  }
}, {
  "id": 22,
  "owner": "Rory Woodford",
  "postAt": "12/25/2017",
  "content": "1",
  "actions": {
    "comment": 47,
    "share": 38,
    "like": 84
  }
}, {
  "id": 23,
  "owner": "Lorrie Doddemeede",
  "postAt": "2/18/2018",
  "content": "-1/2",
  "actions": {
    "comment": 91,
    "share": 80,
    "like": 15
  }
}, {
  "id": 24,
  "owner": "Vince Nossent",
  "postAt": "1/10/2018",
  "content": "1",
  "actions": {
    "comment": 91,
    "share": 9,
    "like": 9
  }
}, {
  "id": 25,
  "owner": "Wynny Rate",
  "postAt": "8/23/2018",
  "content": "1;DROP TABLE users",
  "actions": {
    "comment": 13,
    "share": 99,
    "like": 52
  }
}, {
  "id": 26,
  "owner": "Robenia Stoke",
  "postAt": "9/22/2018",
  "content": "¸˛Ç◊ı˜Â¯˘¿",
  "actions": {
    "comment": 63,
    "share": 60,
    "like": 31
  }
}, {
  "id": 27,
  "owner": "Melany Yukhnevich",
  "postAt": "7/4/2018",
  "content": "ÅÍÎÏ˝ÓÔÒÚÆ☃",
  "actions": {
    "comment": 42,
    "share": 84,
    "like": 3
  }
}, {
  "id": 28,
  "owner": "Odille Kaas",
  "postAt": "3/20/2018",
  "content": "᠎",
  "actions": {
    "comment": 21,
    "share": 62,
    "like": 53
  }
}, {
  "id": 29,
  "owner": "Krystle Murrhardt",
  "postAt": "10/22/2018",
  "content": "1;DROP TABLE users",
  "actions": {
    "comment": 55,
    "share": 51,
    "like": 72
  }
}, {
  "id": 30,
  "owner": "Roselin Greiswood",
  "postAt": "3/4/2018",
  "content": "../../../../../../../../../../../etc/hosts",
  "actions": {
    "comment": 41,
    "share": 28,
    "like": 31
  }
}]
}

export default (state = initState, action) => {
  switch(action.type){
    default:
    return state;
  }
}
