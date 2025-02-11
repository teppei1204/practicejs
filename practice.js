// 練習問題1000本ノック

// Q.1    麦わらの一味の名前を配列に格納し、配列の最初と最後のメンバーを表示するコードを書いてください。

// const pirates = ["ルフィ","ゾロ","サンジ"]
// console.log(pirates[0]);
// console.log(pirates.length - 1);

// Q.2    ONE PIECEの島々の名前を配列に格納し、その配列に「エニエス・ロビー」を追加してください。

// const island = ["スリラーバーク", "ドレスローザ", "空島"];
// island.push("エニエス・ロビー");
// console.log(island);

// Q.3    ルフィと仲間たちの強さを数値で表す配列を作り、ゾロの強さだけを変更して強さを表示してください。

// let crewStrength = [100, 80, 60, 50, 70, 30, 60, 90, 40, 110];  // 強さを表す配列（ルフィ, ゾロ, ナミ, ウソップ, サンジ, チョッパー, ロビン, フランキー, ブルック, ジンベエ）
// crewStrength[1] = 85;
// console.log(crewStrength);

// Q.4    「悪魔の実」を持っているキャラクター名を配列に格納し、その配列に「ゴムゴムの実」を持つルフィが入っているかチェックしてください。

// const devilFruit = ["ルフィ","エース","サボ"]
// if (devilFruit.includes("ルフィ")) {
//   console.log("ルフィはゴムゴムの実を持っています");
// } else {
//   console.log("ルフィはゴムゴムの実を持っていません");
// }

// Q.5    麦わらの一味の中で一番長い名前を持っているキャラクターの名前を表示するコードを書いてください。

// const pirates = ["ルフィ","ボア・ハンコック","バーソロミュー・くま"]
// let longestName = pirates[0];  // 最初は「ルフィ」を基準にする

// for (let i = 1; i < pirates.length; i++) {
//   if (pirates[i].length > longestName.length) {
//     longestName = pirates[i];  // より長い名前を見つけたら更新
//   }
// }
// console.log("一番長い名前を持つキャラクターは " + longestName + " です。");

// Q.6    ルフィの仲間たちが持っている「海賊旗」のデザインを配列に格納し、その配列の中に「麦わらの旗」が含まれているかを確認するコードを書いてください。

// const flags = ["黒ひげ", "白ひげ", "麦わらの旗"];
// if (flags.includes("麦わらの旗")) {
//   console.log("麦わらの旗が含まれている");
// } else {
//   console.log("麦わらの旗が含まれていない");
// }

// Q.7    「ワンピース」のキャラクター名を配列に格納し、その中で「エース」と「サボ」の名前が連続しているかをチェックするコードを書いてください。

// const characters = ["ルフィ", "エース", "サボ", "ゾロ", "ナミ"];

// const aceIndex = characters.indexOf("エース");  // "エース"のインデックスを取得
// const saboIndex = characters.indexOf("サボ");  // "サボ"のインデックスを取得

// if (aceIndex !== -1 && saboIndex !== -1 && Math.abs(aceIndex - saboIndex) === 1) {
//   console.log("エースとサボが連続している");
// } else {
//   console.log("エースとサボが連続していない");
// }
// array.indexOf(searchElement, fromIndex);
// searchElement: 配列内で検索したい要素（値）です。
// fromIndex（省略可能）: 検索を開始するインデックスの位置。省略した場合は 0 から検索が始まります。
// Math.abs() は、数の絶対値を返すメソッド

// Q.8    麦わらの一味のメンバーを配列に格納し、配列の中で「ゾロ」を含むインデックス番号を表示するコードを書いてください。

// const pirates = ["ルフィ", "ゾロ", "ナミ", "サンジ", "チョッパー"];
// const piratesIndex = pirates.indexOf("ゾロ");
// console.log(piratesIndex);

// Q.9    ゾロの剣の数を配列に格納し、剣の数を増やしてからその数を表示するコードを書いてください。

// let swords = [1,1,1];
// swords.push = (1);
// console.log("ゾロの剣の数は" + swords.length + "本です");

// Q.10    「悪魔の実」を食べたキャラクター名とその能力を配列のオブジェクトとして格納し、「エース」の能力が何かを表示するコードを書いてください。

// const devilFruits = [
//   { name: "エース", ability: "メラメラの実" },
//   { name: "ルフィ", ability: "ゴムゴムの実" },
//   { name: "サボ", ability: "メラメラの実" }
// ];

// // エースの能力を検索して表示する
// for (let i = 0; i < devilFruits.length; i++) {
//   if (devilFruits[i].name === "エース") {
//     console.log("エースの能力は：" + devilFruits[i].ability);  // 結果: エースの能力は：メラメラの実
//   }
// }
// console.log("エース",ability[0]);

// Q.11   以下の配列 pirates に、麦わらの一味のメンバーを格納しています。for 文を使って、この配列の各メンバーを順番に表示するコードを書いてください。

const pirates = ["ルフィ", "ゾロ", "ナミ", "サンジ", "チョッパー"];
for (let i = 0; i < pirates.length; i++) {
    console.log(pirates[i]);
}

// Q.12   以下の配列 members に、ワンピースの他のキャラクター名が格納されています。for 文を使って、この配列の各メンバーを順番に表示するコードを書いてください。

const members = ["エース", "サボ", "クロコダイル", "バギー", "ミホーク"];
  for (let i = 0; i < members.length; i++) {
    console.log(members[i]);
  }

// Q.13   以下の配列 villains に、ワンピースの悪役キャラクター名が格納されています。for 文を使って、この配列の各キャラクターを順番に表示するコードを書いてください。

const villains = ["ドフラミンゴ", "カタクリ", "シャンクス", "クザン", "ロビン"];
for (let i = 0; i < villains.length; i++) {
  console.log(villains[i]);
}

// Q.14   以下の配列 fruits に、いくつかのフルーツが格納されています。この配列の中で、最初に「リンゴ」が出現するインデックス番号を表示するコードを書いてください。

const fruits = ["バナナ", "リンゴ", "オレンジ", "リンゴ", "ブドウ"];
for (let i = 1; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Q.15
// Q.16
// Q.17
// Q.18
// Q.19
// Q.20
// Q.21
// Q.22
// Q.23
// Q.24
// Q.25
// Q.26
// Q.27
// Q.28
// Q.29
// Q.30
// Q.31
// Q.32
// Q.33
// Q.34
// Q.35