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
let arr = ["Avtomat", "Benzin", "Sedan", 30000];
for (el of Masin) {
  for (key in el) {
    if (arr.includes(el[key]) || el[key] < arr[3]) {
      count++;
    }
    if (count >= 3 ) {
      say++;
      
    }
  }
  count = 0;
}
console.log(say);
