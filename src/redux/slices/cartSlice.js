

import {createSlice} from "@reduxjs/toolkit";


// המצב ההתחלתי שלנו
const initialState = {

    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        // additem logic
        addItem:(state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );


            state.totalQuantity++

            if (!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else{
                existingItem.quantity ++
                existingItem.totalPrice = Number(existingItem.totalPrice) +
                    Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total,item) => total +
        Number(item.price) * Number(item.quantity) ,0
            );
        },

        // delete item logic
        deleteItem: (state,action) => {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id);

            if(existingItem){
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItems.reduce((total,item) => total +
                Number(item.price) * Number(item.quantity),0
            );
        },
    },
});



export const cartActions = cartSlice.actions

export default cartSlice.reducer




// slice - הוא אוסף של לוגיקה ופעולות מפחיתות Redux עבור תכונה בודדת באפליקציה שלך, המוגדרות בדרך כלל יחד בקובץ בודד.
// initialState - מדובר במצב ההתחלתי שלנו

// reducer -
// המפחיתים הם הפונקציות הטהורות שמכילות את ההגיון שמתבצע במצב
// פונקציות אלו מקבלות את המצב ההתחלתי של המצב בשימוש ואת סוג הפעולה
//updates the state and responds with the new state.
// payload - מאחסן את המידע הנוסף על מה שקרה

// line 19- 20 - אנחנו בודקים האם המוצר החדש שהוספנו כבר קיים
// line 25 - 32 - במידה והמוצר אינו קיים בסל שלנו אנחנו מוסיפים אותו למערך של המוצרים יחד עם כל הערכים שלו כלומר שם תמונה וכו
//line 36-40 - במידה והמוצר אכן כבר קיים במערך שלנו וסל , אנחנו נעלה את הכמות ואת המחיר בהתאם לכמות מוצרים ולמחיר
//line 40-42 - מחשב את כמות המוצרים שיש לנו והמחיר הכולל