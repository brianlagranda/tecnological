/* -------------- BACK-END (API, database, servicio) -------------- */

/* -------------- NOTEBOOKS -------------- */
import dellXPS from "../assets/img/dellXPS.jpg";
import macbookPro from "../assets/img/macbookPro.jpg";
import thinkPadX1 from "../assets/img/thinkPadX1.jpg";
/* -------------- VIDEO CARDS -------------- */
import zotac3080Ti from "../assets/img/zotac3080Ti.jpg";
import radeon5700XT from "../assets/img/rogStrixRadeon5700XT.jpg";
import zotac3090 from "../assets/img/zotac3090.jpg";
/* -------------- PROCESSORS -------------- */
import ryzen5900X from "../assets/img/ryzen9-5900X.jpg";
import i910900k from "../assets/img/i9-10900k.jpg";
import i510600k from "../assets/img/i5-10600k.jpg";
/* -------------- MOTHERBOARDS -------------- */
import maximusXII from "../assets/img/maximusXII.jpg";
import tomahawkB450 from "../assets/img/tomahawkB450.jpg";
import aorusX570 from "../assets/img/aorusX570.jpg";
/* -------------- RAM -------------- */
import vengeanceLPX16GB from "../assets/img/vengeanceLPX16GB.jpg";
import vengeanceRGBPro16GB from "../assets/img/vengeanceRGBPro16GB.jpg";
import ripjawsV16GB from "../assets/img/ripjawsV16GB.jpg";
/* -------------- MONITORS -------------- */
import benq240 from "../assets/img/benq240.jpg";
import ultraSharpU2415 from "../assets/img/ultraSharpU2415.jpg";
import asusProArt from "../assets/img/asusProArt.jpg";
/* -------------- STORAGE -------------- */
import WD500GB from "../assets/img/WD500GB.jpg";
import sandiskUltra3D from "../assets/img/sandiskUltra3D.jpg";
import EVOPlus970 from "../assets/img/970EVOPlus.jpg";

const databaseItems = [
  {
    id: 1,
    brand: "Dell",
    category: "notebooks",
    detail: "Dell Xps 9520 I7-12700h | 16gb | Rtx3050ti | 500gbssd",
    imgurl: dellXPS,
    model: "XPS 15",
    price: 2000,
    stock: 10,
  },
  {
    id: 2,
    brand: "Apple",
    category: "notebooks",
    detail: "Macbook Pro 13,3'' M1 Chip 8-core 256gb",
    imgurl: macbookPro,
    model: "Macbook Pro 13,3'' 256GB",
    price: 3000,
    stock: 15,
  },
  {
    id: 3,
    brand: "Lenovo",
    category: "notebooks",
    detail: "Lenovo Thinkpad X1 Carbon Gen9 I7-1165g7 16gb 512gb Ssd",
    imgurl: thinkPadX1,
    model: "ThinkPad X1 Carbon",
    price: 1500,
    stock: 12,
  },
  {
    id: 4,
    brand: "NVIDIA",
    category: "videoCards",
    detail:
      "Nvidia Zotac Gaming GeForce RTX 30 Series RTX 3080 Ti ZT-A30810D-10P 12GB",
    imgurl: zotac3080Ti,
    model: "Zotac GeForce RTX 3080Ti",
    price: 700,
    stock: 5,
  },
  {
    id: 5,
    brand: "AMD",
    category: "videoCards",
    detail: "Amd Asus Rog Strix Rx 5700xt Gaming Edition 8gb",
    imgurl: radeon5700XT,
    model: "Radeon Rog Strix RX 5700 XT",
    price: 300,
    stock: 0,
  },
  {
    id: 6,
    brand: "NVIDIA",
    category: "videoCards",
    detail:
      "Nvidia Zotac Gaming GeForce RTX 30 Series RTX 3090 ZT-A30900D-10P 24GB",
    imgurl: zotac3090,
    model: "Zotac GeForce RTX 3090",
    price: 900,
    stock: 2,
  },
  {
    id: 7,
    brand: "Intel",
    category: "processors",
    detail:
      "Intel Core i9-10900K BX8070110900K de 10 núcleos y 5.3GHz de frecuencia con gráfica integrada",
    imgurl: i910900k,
    model: "Core i9-10900K",
    price: 400,
    stock: 12,
  },
  {
    id: 8,
    brand: "AMD",
    category: "processors",
    detail: "Amd Ryzen 9 5900x 4.8ghz",
    imgurl: ryzen5900X,
    model: "Ryzen 9 5900X",
    price: 500,
    stock: 15,
  },
  {
    id: 9,
    brand: "Intel",
    category: "processors",
    detail:
      "Intel Core i5-10600K BX8070110600K de 6 núcleos y 4.8GHz de frecuencia con gráfica integrada",
    imgurl: i510600k,
    model: "Core i5-10600K",
    price: 300,
    stock: 20,
  },
  {
    id: 10,
    brand: "ASUS",
    category: "motherboards",
    detail: "Asus Rog Maximus Xii Hero Z490 Socket Lga1200",
    imgurl: maximusXII,
    model: "ROG Maximus XII",
    price: 400,
    stock: 12,
  },
  {
    id: 11,
    brand: "Gigabyte",
    category: "motherboards",
    detail: "Aorus Pro Wifi Amd Ryzen 3000/x570/mini",
    imgurl: aorusX570,
    model: "AORUS X570",
    price: 300,
    stock: 15,
  },
  {
    id: 12,
    brand: "MSI",
    category: "motherboards",
    detail: "Msi B450 Tomahawk Max Socket Am4",
    imgurl: tomahawkB450,
    model: "B450 TOMAHAWK",
    price: 150,
    stock: 14,
  },
  {
    id: 13,
    brand: "Corsair",
    category: "ram",
    detail:
      "Vengeance RGB Pro gamer color negro 16GB 2 Corsair CMW16GX4M2C3200C16",
    imgurl: vengeanceRGBPro16GB,
    model: "Vengeance RGB Pro 2x8GB 3200MHz",
    price: 100,
    stock: 12,
  },
  {
    id: 14,
    brand: "G.Skill",
    category: "ram",
    detail: "Serie V 16gb (2 X 8gb) 288-pin Ddr4 Sdram Dd",
    imgurl: ripjawsV16GB,
    model: "Ripjaws V 2x8GB 3200MHz",
    price: 80,
    stock: 7,
  },
  {
    id: 15,
    brand: "Corsair",
    category: "ram",
    detail: "Vengeance LPX gamer color negro 16GB 2 Corsair CMK16GX4M2B3200C16",
    imgurl: vengeanceLPX16GB,
    model: "Vengeance LPX 2x8GB 3200MHz",
    price: 50,
    stock: 0,
  },
  {
    id: 16,
    brand: "Dell",
    category: "monitors",
    detail: "UltraSharp U2718Q led 27'' 4K 60HZ negro y plata 100V/240V",
    imgurl: ultraSharpU2415,
    model: "UltraSharp U2415 27''",
    price: 300,
    stock: 1,
  },
  {
    id: 17,
    brand: "BenQ",
    category: "monitors",
    detail: "BenQ XL Series XL2740 LCD 27'' 240HZ Full HD negro 100V/240V",
    imgurl: benq240,
    model: "XL2740 27''",
    price: 400,
    stock: 4,
  },
  {
    id: 18,
    brand: "Asus",
    category: "monitors",
    detail: "Asus Proart Pa248q 24 Ips Led 1920x1200",
    imgurl: asusProArt,
    model: "ProArt PA248Q 24''",
    price: 500,
    stock: 2,
  },
  {
    id: 19,
    brand: "Samsung",
    category: "storage",
    detail: "Disco Solido Interno Ssd Samsung 870 Evo 250gb Sata 3 2.5",
    imgurl: EVOPlus970,
    model: "970 EVO Plus 250GB",
    price: 100,
    stock: 25,
  },
  {
    id: 20,
    brand: "WD",
    category: "storage",
    detail: "Disco sólido interno Western Digital WDS500G2B0C 500GB blue",
    imgurl: WD500GB,
    model: "WDS500G2B0C 500GB Blue",
    price: 80,
    stock: 30,
  },
  {
    id: 21,
    brand: "Sandisk",
    category: "storage",
    model: "Ultra 3D 500GB",
    price: 50,
    imgurl: sandiskUltra3D,
    detail: "Disco sólido interno SanDisk Ultra 3D SDSSDH3-500G-G25 500GB",
    stock: 10,
  },
];

export function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(databaseItems);
    }, 500);
  });
}

export function getSingleItem(itemid) {
  let itemReq = databaseItems.find((item) => {
    return item.id == itemid;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemReq !== undefined) resolve(itemReq);
      else reject("Item no encontrado en la base de datos.");
    }, 200);
  });
}

export function getItemsByCategory(categoryid) {
  let itemsCategory = databaseItems.filter(
    (item) => item.category === categoryid
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemsCategory !== undefined) resolve(itemsCategory);
      else reject("No existe la categoria");
    }, 200);
  });
}

export default getItems;
