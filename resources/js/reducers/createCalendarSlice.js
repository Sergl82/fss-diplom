import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const today = new Date();
const initialState = {
    chosenDate: `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`,
    cinemaHalls: [],
    films: [],
};

export const getCalendar = createAsyncThunk("calendar/getCalendar", async (date) => {
    const response = await fetch(`/api/client/calendar/${date}`);
    return await response.json();
});

const createCalendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        chooseDate: (state, action) => {
            state.chosenDate = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCalendar.fulfilled, (state, action) => {
                const {cinemaHalls, sessions, films} = action.payload;
                state.cinemaHalls = cinemaHalls.map((cinemaHall) => {
                    return {
                        ...cinemaHall,
                        "sessions": sessions.filter((session) => +session.cinema_hall_id === cinemaHall.id)
                    }
                });
                state.films = films;
            });
    },
});

export const {chooseDate} = createCalendarSlice.actions;
export default createCalendarSlice.reducer;
