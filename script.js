navigator.geolocation.getCurrentPosition((p) => {
  let lat = p.coords.latitude;
  let long = p.coords.longitude;

  try {
    fetch(
      // Access kay added
      `https://api.weatherstack.com/current?access_key=925d29745b4c94d22cf8ac315a168e1f&query=${lat},${long}`
    )
      .then(async (responce) => {
        let data = await responce.json();
        let date = new Date();
        document.getElementById(
          "card"
        ).innerHTML = `<div class="flex items-center justify-between"> <div>
        <h3 class="text-xl font-semibold">${data.current.weather_descriptions}</h3>
        <p class="text-4xl font-bold mt-2">${data.current.temperature}°C</p>
        <p class="text-sm mt-2">${date.toDateString()}</p>
        <p class="text-sm">${data.location.name}</p>
      </div>
      <div>
        <!-- Rain Icon -->
        <img
          src="${data.current.weather_icons[0]}"
          alt="${data.current.weather_descriptions}"
          class="w-20 h-20"
        />
      </div></div>
          <div class="bg-sky-300 w-full rounded-lg mt-3 grid grid-cols-2 gap-3 p-5">
        <div
          class="flex justify-between border border-x-0 border-t-0 h-fit mt-4"
        >
          <p>UV INDEX</p>
          <p>12</p>
        </div>
        <div
          class="flex justify-between border border-x-0 border-t-0 h-fit mt-4"
        >
          <p>WIND SPEED</p>
          <p>12</p>
        </div>
        <div
          class="flex justify-between border border-x-0 border-t-0 h-fit mt-4"
        >
          <p>Humidity</p>
          <p>12</p>
        </div>
        <div
          class="flex justify-between border border-x-0 border-t-0 h-fit mt-4"
        >
          <p>Pressure</p>
          <p>12</p>
        </div>
        <div
          class="flex justify-between border border-x-0 border-t-0 h-fit mt-4"
        >
          <p>Cloud Cover</p>
          <p>12</p>
        </div>
        <div
          class="flex justify-between border border-x-0 border-t-0 h-fit mt-4"><p>Visibility</p><p>12</p> </div></div>`;
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
});
