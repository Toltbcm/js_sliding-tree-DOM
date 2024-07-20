document.querySelectorAll("li").forEach(function(e){if(e.querySelector("ul")){var t=document.createElement("span");t.classList.add("tree__headline"),t.append(e.firstChild),e.prepend(t)}}),document.querySelector(".tree").addEventListener("click",function(e){var t=e.target.closest(".tree__headline");t&&(t.nextSibling.hidden=!t.nextSibling.hidden)});
//# sourceMappingURL=index.9ad889cf.js.map
