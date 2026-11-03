// courses.js
const aCourse = {
  code: "WDD131",
  name: "Javascript Language",
  sections: [
    { 
        sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'
    },
    { 
        sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'
    }
  ]
};

// const nameHeader = document.querySelector("#courseName").textContent = aCourse.name;
// const codeHeader = document.querySelector("#courseCode").textContent = aCourse.code;

function setHeader(course) {
    const nameHeadlineEl = document.querySelector("#courseName");
    const codeHeadlineEl = document.querySelector("#courseCode");
    nameHeadlineEl.textContent = course.name;
    codeHeadlineEl.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
          <td>${section.sectionNum}#</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        </tr>`
}

function setSections(sections) {
    const sectionsEl = document.querySelector("#sections");
    const html = sections.map(sectionTemplate)
    sectionsEl.innerHTML = html.join(""); //join("") makes sure there are empty space between them instead of commas or something 
}

setHeader(aCourse);
setSections(aCourse.sections);