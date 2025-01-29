$(document).ready(function () {
  date = new Date();
  $("#date").text(date.toDateString());

    const appLinks = [
    { name: "App 1", url: "https://timcharlier6.github.io/plantdiapo/" },
    { name: "App 2", url: "https://timcharlier6.github.io/plants_orthographe/" }, 
    { name: "App 3", url: "https://timcharlier6.github.io/letters-marder.github.io/" },
  ];

  const buttonContainer = $("#button-container"); 

  appLinks.forEach(app => {
    const button = $("<button>", {
      class: "bg-yellow-200 hover:bg-yellow-300 text-sky-900 lg:text-4xl font-bold py-2 px-4 rounded-full",
    });

    const link = $("<a>", {
      class: "button", 
      href: app.url,
      text: app.name
    });

    button.append(link);
    buttonContainer.append(button);
  });
});
