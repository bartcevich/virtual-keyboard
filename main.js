/*const KEYS_EN = {
    0: [["~", "`"],["!", "1"],["@", "2"],["#", "3"],["$", "4"],["%", "5"],["^", "6"],
    ["&", "7"],["*", "8"],["(", "9"],[")", "0"],["_", "-"],["+", "="],"Backspace",],
    1: ["Tab","q","w","e","r","t","y","u","i","o","p",["{", "["],["}", "]"],["|", "\\"],"DEL"]}*/
    const jsonText1=[
      {"name": "code-192",
        "english": "<sup><small>~ </small></sup> `",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-49",
        "english": "<sup><small>! </small></sup> 1",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-50",
        "english": "<sup><small>@ </small></sup> 2",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-51",
        "english": "<sup><small># </small></sup> 3",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-53",
        "english": "<sup><small>$ </small></sup> 4",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-54",
        "english": "<sup><small>% </small></sup> 5",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-55",
        "english": "<sup><small>^ </small></sup> 6",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-56",
        "english": "<sup><small>& </small></sup> 7",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-57",
        "english": "<sup><small>* </small></sup> 8",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-48",
        "english": "<sup><small>( </small></sup> 9",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-189",
        "english": "<sup><small>) </small></sup> 0",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-187",
        "english": "<sup><small> -</small></sup>_ ",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-8",
        "english": "<sup><small>+ </small></sup> =",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-52",
        "english": "Backspace",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      }   
    ];
    const jsonText2=[
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      },
      {"name": "code-192",
        "english": "",
        "russian": "Dog",
        "breed": "Dog - Labrador"
      }      
    ];

const BODY = document.querySelector("body");
BODY.classList.add("wrapper");
const itemsTemplate = `
  <div id="line1" class="line"></div>
  <div id="line2" class="line"></div>
  <div id="line3" class="line"></div>
  <div id="line4" class="line"></div>
  <div id="line5" class="line"></div>`
let text4 = `<p id="pop_text4"><b>Масса: </b> test </p>`;
BODY.insertAdjacentHTML("afterbegin", itemsTemplate);

function addButton() {
  jsonText1.forEach(obj => {
    text4 = `<button id="${obj.name}" class="button ${obj.name}">${obj.english}</button>`;
    //BODY.insertAdjacentHTML("afterbegin", text4);
    line1.insertAdjacentHTML("beforeend", text4);
  });
  jsonText2.forEach(obj => {
    text4 = `<button id="${obj.name}" class="button ${obj.name}">${obj.english}</button>`;
    line1.insertAdjacentHTML("beforeend", text4);
  });
  jsonText3.forEach(obj => {
    text4 = `<button id="${obj.name}" class="button ${obj.name}">${obj.english}</button>`;
    line1.insertAdjacentHTML("beforeend", text4);
  });
  jsonText4.forEach(obj => {
    text4 = `<button id="${obj.name}" class="button ${obj.name}">${obj.english}</button>`;
    line1.insertAdjacentHTML("beforeend", text4);
  });
  jsonText5.forEach(obj => {
    text4 = `<button id="${obj.name}" class="button ${obj.name}">${obj.english}</button>`;
    line1.insertAdjacentHTML("beforeend", text4);
  });
}
addButton();
document.addEventListener("keydown", function (event) {
  const _keyCode = event.keyCode;
  console.log(_keyCode);
  //let btn = document.querySelector(_keyCode);
  //console.log(btn);
  //if (btn) {
    //btn.classList.toggle("btn-active");
  //}
});
document.addEventListener("keyup", function (event){

});