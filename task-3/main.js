let Masin = [
  {
    marka: "Hyundai",
    rəng: "Boz",
    anacaqNövü: "Benzin",
    sürətlərQutusu: "Avtomat",
    banNövü: "Sedan",
    qiymət: 13000,
  },
  {
    marka: "Hyundai",
    rəng: "Qara",
    anacaqNövü: "Dizel",
    sürətlərQutusu: "Mexanika",
    banNövü: "Kupe",
    qiymət: 43000,
  },
  {
    marka: "Toyota",
    rəng: "Qirmizi",
    anacaqNövü: "Benzin",
    sürətlərQutusu: "Avtomat",
    banNövü: "Sedan",
    qiymət: 24000,
  },
  {
    marka: "Subaru",
    rəng: "Qara",
    anacaqNövü: "Elektrik",
    sürətlərQutusu: "Avtomat",
    banNövü: "Sedan",
    qiymət: 20000,
  },
  {
    marka: "Kia",
    rəng: "Ağ",
    anacaqNövü: "Benzin",
    sürətlərQutusu: "Mexanika",
    banNövü: "Hetçbek",
    qiymət: 19000,
  },
  {
    marka: "Hyundai",
    rəng: "Qara",
    anacaqNövü: "Dizel",
    sürətlərQutusu: "Avtomat",
    banNövü: "Sedan",
    qiymət: 33000,
  },
  {
    marka: "BMW",
    rəng: "Göy",
    anacaqNövü: "Benzin",
    sürətlərQutusu: "Mexanika",
    banNövü: "Hetçbek",
    qiymət: 16000,
  },
];
let count;
let say = 0;
let arr = ["Avtomat", "Benzin", "Sedan"];
for (el of Masin) {
  count = 0;
  for (key in el) {
    if (arr.includes(el[key]) || el[key] < 30000) {
      count++;
    }
    if (count == 3) {
      say++;
    }
  }
}
console.log(say);
