var apikey = "dda0eda93d0635b02cb0bc914caf0674";
var city = "bhopal";

document.querySelector("button").addEventListener("click", async function () {
  city = document.querySelector(".input").value;
  document.querySelector(".text").textContent = city;
  var details = await getData();
  console.log(details);
  // console.log(details.main.temp-273);
  document.querySelector("#temp-value").innerHTML = `<span>${(
    details.main.temp - 273
  ).toPrecision(2)}&#8451</span>`;
  document.querySelector("#temp-value").style.opacity = "1";
  document.querySelector(".climate p").textContent = details.weather[0].main;
  var temp = details.weather[0].main;
  document.querySelector(".climate p").textContent = temp;

  switch (temp) {
    case "Clouds":
      document.querySelector(
        ".icon"
      ).innerHTML = `<i class="ri-cloud-fill"></i>`;
      break;
    case "Sun":
      document.querySelector(".icon").innerHTML = `<i class="ri-sun-fill"></i>`;
      break;
    case "Rain":
      document.querySelector(
        ".icon"
      ).innerHTML = `<i class="ri-rainy-fill"></i>`;
      break;
    case "Haze":
      document.querySelector(
        ".icon"
      ).innerHTML = `<i class="ri-haze-fill"></i>`;
      break;
    case "Mist":
      document.querySelector(
        ".icon"
      ).innerHTML = `<i class="ri-mist-line"></i>`;
      break;
  }
});
const getData = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  );

  return await response.json();
};

// console.log("Hello1");
// console.log("Hello2");
// setTimeout(()=>{
// console.log("Hello3")
// },3000)
// console.log("Hello4")
//  jabhi serverr se data aane mai time hoga usse phele saari cheeze run kar jaynege aur who cheeze baad mai run hogi isse Syncronous bolte hai

//asynchrous ulta hoga aur koi bhi cheez ko asyncronuse banane ke liye async and await bolte hai agr koi function ko asyncroous banana hai function aage async likhna hai jis line mai time lagega uske aage await likhna hai
