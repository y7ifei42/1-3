const ramenSuggestions = {
   曇り: {
       春: "塩ラーメン 🌸";
       夏: "冷やしラーメン ❄️";
       秋: "味噌ラーメン 🍂";
       冬: "豚骨ラーメン 🍜";
   };
   晴れ: {
       春: "醤油ラーメン 🌷";
       夏: "冷やし中華 🍋";
       秋: "塩バターラーメン 🧈";
       冬: "スパイシーラーメン 🌶️";
   };
   雨: {
       春: "担々麺 🌱";
       夏: "濃厚つけ麺 🍤";
       秋: "鶏白湯ラーメン 🐔";
       冬: "味噌バターコーンラーメン 🌽";
   };
   快晴: {
       春: "ゆず塩ラーメン 🍋";
       夏: "野菜たっぷりラーメン 🥕";
       秋: "焦がし醤油ラーメン 🔥";
       冬: "特製チャーシューメン 🍖";
};

function checkFortune() {
   
   const weather = document.getElementById("weather-select").value;
   const season = document.getElementById("season-select").value;
   
   const suggestion = ramenSuggestions(weather)(season);
   
   const resultOutput = document.getElementById("result-output");
   resultOutput.textContent = `あなたにおすすめのラーメンは「${suggestion}」です！`;
}
