// ラーメンの提案オブジェクト
const ramenSuggestions = {
   曇り: {
       春: "塩ラーメン 🌸",
       夏: "冷やしラーメン ❄️",
       秋: "味噌ラーメン 🍂",
       冬: "豚骨ラーメン 🍜"
   },
   晴れ: {
       春: "醤油ラーメン 🌷",
       夏: "冷やし中華 🍋",
       秋: "塩バターラーメン 🧈",
       冬: "スパイシーラーメン 🌶️"
   },
   雨: {
       春: "担々麺 🌱",
       夏: "濃厚つけ麺 🍤",
       秋: "鶏白湯ラーメン 🐔",
       冬: "味噌バターコーンラーメン 🌽"
   },
   快晴: {
       春: "ゆず塩ラーメン 🍋",
       夏: "野菜たっぷりラーメン 🥕",
       秋: "焦がし醤油ラーメン 🔥",
       冬: "特製チャーシューメン 🍖"
   }
};
// ラーメン提案を確認する関数
function checkFortune() {
   console.log("checkFortune 関数が呼び出されました");
   // 選択された天気と季節を取得
   const weather = document.getElementById("weather-select").value;
   const season = document.getElementById("season-select").value;
   // ラーメン提案を取得
   const suggestion = ramenSuggestions[weather]?.[season];
   // 結果表示エリアを更新
   const resultOutput = document.getElementById("result-output");
   if (suggestion) {
       resultOutput.textContent = `あなたにおすすめのラーメンは「${suggestion}」です！`;
   } else {
       resultOutput.textContent = "選択に対応するラーメンが見つかりません。";
   }
};
