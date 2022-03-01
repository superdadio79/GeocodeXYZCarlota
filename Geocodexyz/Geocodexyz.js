async function fetchCity(){
  const res = await fetch(`https://geocode.xyz/manila?json=1`);

  const data = await res.json();
  console.log(data.latt, data.longt);
}

fetchCity();
