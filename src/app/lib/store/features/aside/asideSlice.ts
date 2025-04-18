import { createAppSlice } from '../../createAppSlice'

export interface AsideSliceState {
  open: true | false
}

const initialState: AsideSliceState = {
  open: false
}

export const asideSlice = createAppSlice({
  name: 'aside',
  initialState,
  reducers: create => ({
    toggle: create.reducer(state => {
      state.open = !state.open
    })
  }),
  selectors: {
    selectOpen: aside => aside.open
  }
})

export const { toggle } = asideSlice.actions

export const { selectOpen } = asideSlice.selectors
