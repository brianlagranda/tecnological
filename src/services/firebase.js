import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  orderBy,
} from "firebase/firestore";

// import Toast from "toastify-js";

const firebaseConfig = {
  apiKey: "AIzaSyD5o9puaCbkQBB3FaNqf3h71vZjZldl7h8",
  authDomain: "tecnological.firebaseapp.com",
  projectId: "tecnological",
  storageBucket: "tecnological.appspot.com",
  messagingSenderId: "58913846818",
  appId: "1:58913846818:web:06ea02314fa13c0c787c7b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getSingleItem(id) {
  try {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);
    const docData = snapshot.data();
    docData.id = snapshot.id;
    return docData;
  } catch (error) {
    //Toast.error(`Error getting item`);
    throw error;
  }
}

export async function getItems() {
  try {
    const productsCollection = collection(db, "products");

    const q = query(productsCollection, orderBy("price"));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    //Toast.error(`Error getting items`);
  }
}

export async function getItemsByCategory(idCat) {
  try {
    const productsCollectionRef = collection(db, "products");
    const querySnapshot = await getDocs(
      query(productsCollectionRef, where("category", "==", idCat))
    );
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    //Toast.error(`Error getting items`);
  }
}

export async function createOrder(order) {
  const ordersCollection = collection(db, "orders");

  const orderDoc = await addDoc(ordersCollection, order);
  return orderDoc.id;
}

export async function exportData() {
  const productsCollectionRef = collection(db, "products");

  const items = [
    {
      id: 1,
      brand: "Dell",
      category: "notebooks",
      detail: "Dell Xps 9520 I7-12700h | 16gb | Rtx3050ti | 500gbssd",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1zylYB86YlYkcBLT6AyW_07O3socSKwRX",
      model: "XPS 15",
      price: 2000,
      stock: 10,
    },
    {
      id: 2,
      brand: "Apple",
      category: "notebooks",
      detail: "Macbook Pro 13,3'' M1 Chip 8-core 256gb",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1H46gRiHXHI3KFK5VtFl_PAIdFxiCbu2x",
      model: "Macbook Pro 13,3'' 256GB",
      price: 3000,
      stock: 15,
    },
    {
      id: 3,
      brand: "Lenovo",
      category: "notebooks",
      detail: "Lenovo Thinkpad X1 Carbon Gen9 I7-1165g7 16gb 512gb Ssd",
      imgurl:
        "https://drive.google.com/uc?export=view&id=195Lf1KjVhZLbfJUl6yGiBGRao8LEtMGU",
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
      imgurl:
        "https://drive.google.com/uc?export=view&id=1g5RQI6GVm2qs-wV6Dh9AiKTq1J_08H5O",
      model: "Zotac GeForce RTX 3080Ti",
      price: 700,
      stock: 5,
    },
    {
      id: 5,
      brand: "AMD",
      category: "videoCards",
      detail: "Amd Asus Rog Strix Rx 5700xt Gaming Edition 8gb",
      imgurl:
        "https://drive.google.com/uc?export=view&id=18cMMk9sGC810lx4JhZJaj0yLD40Bx2sX",
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
      imgurl:
        "https://drive.google.com/uc?export=view&id=1b1f4bLPj4Ucqa72lUdtneQy3_j4HYecZ",
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
      imgurl:
        "https://drive.google.com/uc?export=view&id=1_wW2gVB7msNVO3Ztz8-4M_BZHgJu5KiS",
      model: "Core i9-10900K",
      price: 400,
      stock: 12,
    },
    {
      id: 8,
      brand: "AMD",
      category: "processors",
      detail: "Amd Ryzen 9 5900x 4.8ghz",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1l8D9mwlq7uo6h0Wx4o2HaKzaqRyJQ2iG",
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
      imgurl:
        "https://drive.google.com/uc?export=view&id=1NvJTUfGLpHoiH197dlVIM8LC4tbKIlo3",
      model: "Core i5-10600K",
      price: 300,
      stock: 20,
    },
    {
      id: 10,
      brand: "ASUS",
      category: "motherboards",
      detail: "Asus Rog Maximus Xii Hero Z490 Socket Lga1200",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1yIUsKzhCyvPXY2dIkaEMf9M_0K30WtVX",
      model: "ROG Maximus XII",
      price: 400,
      stock: 12,
    },
    {
      id: 11,
      brand: "Gigabyte",
      category: "motherboards",
      detail: "Aorus Pro Wifi Amd Ryzen 3000/x570/mini",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1M-4Lkly1N5IVLN5yRbQALZY6nXoEZDw3",
      model: "AORUS X570",
      price: 300,
      stock: 15,
    },
    {
      id: 12,
      brand: "MSI",
      category: "motherboards",
      detail: "Msi B450 Tomahawk Max Socket Am4",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1GHG40NXGDvF_JTkbWLtskHwaTT31iFP1",
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
      imgurl:
        "https://drive.google.com/uc?export=view&id=1gd87LMHxB3DqikEiWDrqcxSagkhfS2rP",
      model: "Vengeance RGB Pro 2x8GB 3200MHz",
      price: 100,
      stock: 12,
    },
    {
      id: 14,
      brand: "G.Skill",
      category: "ram",
      detail: "Serie V 16gb (2 X 8gb) 288-pin Ddr4 Sdram Dd",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1Ao44_h35aImCRp-9aM_CjpDBbCRxwwpE",
      model: "Ripjaws V 2x8GB 3200MHz",
      price: 80,
      stock: 7,
    },
    {
      id: 15,
      brand: "Corsair",
      category: "ram",
      detail:
        "Vengeance LPX gamer color negro 16GB 2 Corsair CMK16GX4M2B3200C16",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1BW2rQOpz41tXzu__7l4RRstEMpcQhT19",
      model: "Vengeance LPX 2x8GB 3200MHz",
      price: 50,
      stock: 0,
    },
    {
      id: 16,
      brand: "Dell",
      category: "monitors",
      detail: "UltraSharp U2718Q led 27'' 4K 60HZ negro y plata 100V/240V",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1eoxywsGzUQ39nYfkiE3JtNkICStq1_Jg",
      model: "UltraSharp U2415 27''",
      price: 300,
      stock: 1,
    },
    {
      id: 17,
      brand: "BenQ",
      category: "monitors",
      detail: "BenQ XL Series XL2740 LCD 27'' 240HZ Full HD negro 100V/240V",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1Bsepj_whRiVfFHXEuXtaVVGClVo37l2t",
      model: "XL2740 27''",
      price: 400,
      stock: 4,
    },
    {
      id: 18,
      brand: "Asus",
      category: "monitors",
      detail: "Asus Proart Pa248q 24 Ips Led 1920x1200",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1cPR6xoD5iFm3NFGOdZCaNAueQ4KcyFW9",
      model: "ProArt PA248Q 24''",
      price: 500,
      stock: 2,
    },
    {
      id: 19,
      brand: "Samsung",
      category: "storage",
      detail: "Disco Solido Interno Ssd Samsung 870 Evo 250gb Sata 3 2.5",
      imgurl:
        "https://drive.google.com/uc?export=view&id=14K9kSGHm655NUods9k7d27Cvhp2A5VNj",
      model: "970 EVO Plus 250GB",
      price: 100,
      stock: 25,
    },
    {
      id: 20,
      brand: "WD",
      category: "storage",
      detail: "Disco sólido interno Western Digital WDS500G2B0C 500GB blue",
      imgurl:
        "https://drive.google.com/uc?export=view&id=1vw-sl8GLhI7_fhItTPFAezy8RTwDCCiO",
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
      imgurl:
        "https://drive.google.com/uc?export=view&id=1yDuX1XnPOxHjIJB0ncSN9XySTcgggrG4",
      detail: "Disco sólido interno SanDisk Ultra 3D SDSSDH3-500G-G25 500GB",
      stock: 10,
    },
  ];

  for (let item of items) {
    item.order = item.id;
    delete item.id;
    addDoc(productsCollectionRef, item).then();
  }
}
