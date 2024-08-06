import { db } from '../config/firestore.js'
import { collection, addDoc, getDocs, getDoc } from "firebase/firestore";


export const getAllProducts = async () => {
    const collectionRef = collection(db, "products");
    const snapshot = await getDocs(collectionRef);
    console.log(snapshot);
    const cleanData = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    console.log(cleanData);
    return cleanData;
};

// export const addToCart = async (item, uuid) => {
//     const docRef = doc(db, "carts", uuid);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//       } else {
//         // docSnap.data() will be undefined in this case
//         console.log("No such document!");
//       }
// }




// const itemCollection = []
// const interestedCollections = ["mens-shirts", "mens-shoes", "mens-watches", "fragrances", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]

// const itemCollectionPromises = interestedCollections.map(el => {
//     return fetch(`https://dummyjson.com/products/category/${el}`)
//         .then(res => res.json()).then(data => {
//             console.log(data.products)
//             return data.products

//         }

//         )
// })
// Promise.all(itemCollectionPromises).then(results => {
//     itemCollection.push(results.flat())
// }).catch(console.log).finally(async () => {
//     console.log(itemCollection[0])
//     const collectionRef = collection(db, "products")

//     for (const el of itemCollection[0]) {
//         try {
//             const docRef = await addDoc(collectionRef, el)
//             console.log("Document written with ID: ", docRef.id);

//         }
//         catch (e) {
//             console.log(e)
//         }

//     }
// })




// import data from '../data/products.json'


//runs to add dummy data to firebase.

// export const addCollectionData = async () => {
//     const collectionRef = collection(db, "products")

//     for (const el of data) {
//         try {
//             const docRef = await addDoc(collectionRef, el)
//             console.log("Document written with ID: ", docRef.id);

//         }
//         catch (e) {
//             console.log(e)
//         }

//     }
// }

