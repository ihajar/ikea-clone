export const initialState = {
    basket: [
        {
            id:"123587",
            title:"FJÄLLBERGET",
            price:169,
            rating:3,
            image:"https://www.ikea.com/nl/en/images/products/fjaellberget-conference-chair-with-castors-white-stained-oak-veneer-gunnared-beige__0815078_PE772749_S5.JPG?f=xxs"
        },
        {
            id:"123587",
            title:"FJÄLLBERGET",
            price:169,
            rating:3,
            image:"https://www.ikea.com/nl/en/images/products/fjaellberget-conference-chair-with-castors-white-stained-oak-veneer-gunnared-beige__0815078_PE772749_S5.JPG?f=xxs"
        },
    ],
    user: null,
};


const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };

           
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket
            
            // we cloned the basket
            let newBasket = [...state.basket];

            // we found the index of the item to remove 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                // item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket`
                );
            }

            return { 
                ...state, 
                basket: newBasket 
            };
           
        default:
            return state;
    }
}

export default reducer;