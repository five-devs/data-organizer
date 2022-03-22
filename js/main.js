const clsCardTemplate = document.querySelector("[data-cls-template]")
const clsCardContainer = document.querySelector("[data-cls-cards-container]")
const searchInput = document.querySelector("[data-search]")

let classes = []


// search working / filtering

searchInput.addEventListener("input", search => {
  const value = search.target.value.toLowerCase();
  classes.forEach(cls => {
    const isVisible =
      cls.title.toLowerCase().includes(value) ||
      cls.due.toLowerCase().includes(value)
    cls.element.classList.toggle("hide", !isVisible);
  })
})

fetch("../js/classes.json")
  .then(res => res.json())
  .then(data => {
    classes = data.map(cls => {
      const card = clsCardTemplate.content.cloneNode(true).children[0]
      const vod = card.querySelector("iframe");
      const title = card.querySelector("[data-title]");
      const due = card.querySelector("[data-due]");
      const todo1 = card.querySelector("[data-todo1]");
      const todo2 = card.querySelector("[data-todo2]");
      const todo3 = card.querySelector("[data-todo3]");
      const todo4 = card.querySelector("[data-todo4]");
      const todo5 = card.querySelector("[data-todo5]");
      const todo6 = card.querySelector("[data-todo6]");
      const desc1 = card.querySelector("[data-desc1]");
      const desc2 = card.querySelector("[data-desc2]");
      const desc3 = card.querySelector("[data-desc3]");
      const desc4 = card.querySelector("[data-desc4]");
      const desc5 = card.querySelector("[data-desc5]");
      const desc6 = card.querySelector("[data-desc6]");
      const parent1 = card.querySelector(".parent1");
      const parent2 = card.querySelector(".parent2");
      const parent3 = card.querySelector(".parent3");
      const parent4 = card.querySelector(".parent4");
      const parent5 = card.querySelector(".parent5");
      const parent6 = card.querySelector(".parent6");
      vod.src = cls.vod;
      title.innerHTML = cls.title;
      due.innerHTML = cls.due;
      todo1.innerHTML = cls.todo1;
      todo2.innerHTML = cls.todo2;
      todo3.innerHTML = cls.todo3;
      todo4.innerHTML = cls.todo4; 
      todo5.innerHTML = cls.todo5;
      todo6.innerHTML = cls.todo6;
      desc1.innerHTML = cls.desc1;
      desc2.innerHTML = cls.desc2;
      desc3.innerHTML = cls.desc3;
      desc4.innerHTML = cls.desc4;
      desc5.innerHTML = cls.desc5;
      desc6.innerHTML = cls.desc6;
    // need to set parent Li to add class "hide" if child is falsey
      clsCardContainer.append(card)
      return { title: cls.title, due: cls.due, element: card }
    })
  })