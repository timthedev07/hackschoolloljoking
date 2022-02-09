document.addEventListener("DOMContentLoaded", () => {
  alert("Hello world");
  document.querySelector("#page-content").innerHTML("Hello world this is just to test if javascript works on this webpage");
    fetch("discord.com").then(res => {
      alert(res.ok ? "ok" : "not ok");
    }).then(html => 
      alert(JSON.stringify(html));
    ).catch(err => {
      alert(JSON.stringify(err));
    });
});
