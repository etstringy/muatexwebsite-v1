(async () => {
  document.getElementById("muatextag").innerHTML =
    "Error occured recieving Discord Tag";
  let text = document.getElementById("muatextag").innerHTML;

  await fetch("https://api.lanyard.rest/v1/users/530408906686726144").then(
    (res) => {
      if (!presence.success) return (text = "Muatex#0001");
      else {
        text = text.replace(
          "{{USERNAME}}",
          presence.data.discord_user.username
        );
        text = text.replace(
          "{{DISCRIMINATOR}}",
          presence.data.discord_user.discriminator
        );
      }
    }
  );
})();
