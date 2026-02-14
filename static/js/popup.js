function setCookie(name, value, hours) {
  const d = new Date();
  d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
  document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
}

function closePopup() {
  if (document.getElementById('todayClose').checked) {
    setCookie("hidePopup", "true", 24);
  }
  document.getElementById('eventPopup').style.display = 'none';
}

window.onload = function () {
  if (!getCookie("hidePopup")) {
    document.getElementById('eventPopup').style.display = 'flex';
  }
};
