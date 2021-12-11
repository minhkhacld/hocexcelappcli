import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
    name: "hocexcel",
    initialState: {
        data: [],
        searchDropdownVisible: false,
        listItemHeaderBarName: "",
        itemDetailHeaderBar: "",
    },
    reducers: {
        setData: (state, actions) => {
            state.data = actions.payload
        },
        setSearchValue: (state, actions) => {
            state.searchDropdownVisible = true;
        },
        setListItemHeaderBarName: (state, actions) => {
            state.listItemHeaderBarName = actions.payload;
        },
        setItemDetailHeaderBar: (state, actions) => {
            state.itemDetailHeaderBar = actions.payload;
        },
        closeSearchDropDown: (state) => {
            state.searchDropdownVisible = false;
        }
    },
})

export const { setData, setSearchValue, setListItemHeaderBarName, setItemDetailHeaderBar, closeSearchDropDown } = Reducer.actions;
export default Reducer.reducer