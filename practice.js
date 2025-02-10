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

const pirates = ["ルフィ","ボア・ハンコック","バーソロミュー・くま"]
let longestName = pirates[0];  // 最初は「ルフィ」を基準にする

for (let i = 1; i < pirates.length; i++) {
  if (pirates[i].length > longestName.length) {
    longestName = pirates[i];  // より長い名前を見つけたら更新
  }
}
console.log("一番長い名前を持つキャラクターは " + longestName + " です。");

// Q.6
// Q.7
// Q.8
// Q.9
// Q.10
// Q.11
// Q.12
// Q.13
// Q.14
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