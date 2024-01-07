let skill = document.querySelector('.skill-part .cnt-part')

let skillInfo = [
    {
        name: "HTML",
        value: 85,
        maxValue: 100
    },

    {
        name: "CSS",
        value: 90,
        maxValue: 100
    },

    {
        name: "JS",
        value: 70,
        maxValue: 100
    },

    {
        name: "Bootstrap",
        value: 80,
        maxValue: 100
    },

    {
        name: "React JS",
        value: 70,
        maxValue: 100
    },

    {
        name: "Node JS",
        value: 50,
        maxValue: 100
    }
];

const skillDisplay = () => {
    skillInfo.forEach((elem, ind) => {
        skill.innerHTML += `<div id="${ind}" class="mySkill">
                                <div class="info">
                                    <p>${elem.name}</p>
                                    <p>${elem.value} %</p>
                                </div>
                                <div class="progress-bar">
                                    <progress value="${elem.value}" max="${elem.maxValue}"></progress>
                                </div>
                            </div>`
    })
}

skillDisplay();