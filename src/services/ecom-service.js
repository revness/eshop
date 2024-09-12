import { db } from '../config/firestore.js'
import { collection, addDoc, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { getSessionId } from './session-utils.js';

export const getAllProducts = async () => {
  const collectionRef = collection(db, "products");
  const snapshot = await getDocs(collectionRef);
  const cleanData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return cleanData;
};

export const getCart = async (uuid) => {
  const docRef = doc(db, "carts", uuid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return { items: [] };
  }
}

export const saveCart = async (cart) => {
  const uuid = getSessionId();
  await setDoc(doc(db, "carts", uuid), cart);
};

export const addToCart = async (product) => {
  const uuid = getSessionId();
  const currentCart = await getCart(uuid);
  if (!currentCart.items) {
    currentCart.items = [];
  }
  console.log(product, "product")
  const existingItemIndex = currentCart.items.findIndex(item => item.id === product);

  if (existingItemIndex !== -1) {
    currentCart.items[existingItemIndex].quantity += 1;
  } else {
    currentCart.items.push({ id: product, quantity: 1 });
  }

  await saveCart(currentCart);
  return currentCart;
};





