import { ContactEmailInitialValues, ContactEmailInterface } from '@/models/contact-email.model';
import { ContactNameInitialValues, ContactNameInterface } from '@/models/contact-name.model';
import {
  ContactOptionsInitialValues,
  ContactOptionsInterface,
} from '@/models/contact-options.model';
import { ContactPhoneInitialValues, ContactPhoneInterface } from '@/models/contact-phone.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  slideIndex: number;
  verticalSlideIndex: number;
  contactEmailSlide: ContactEmailInterface;
  contactNameSlide: ContactNameInterface;
  contactPhoneSlide: ContactPhoneInterface;
  contactOptionSlide: ContactOptionsInterface;
}
const initialState: IInitialState = {
  slideIndex: 0,
  verticalSlideIndex: 0,
  contactEmailSlide: ContactEmailInitialValues,
  contactNameSlide: ContactNameInitialValues,
  contactPhoneSlide: ContactPhoneInitialValues,
  contactOptionSlide: ContactOptionsInitialValues,
};

const contactSlice = createSlice({
  name: 'signUpSlides',
  initialState,
  reducers: {
    setSlideIndex(state, action: PayloadAction<number>) {
      state.slideIndex += action.payload;
    },
    setVerticalSlideIndex(state, action: PayloadAction<number>) {
      state.verticalSlideIndex += action.payload;
    },
    setEmailSlide(state, action: PayloadAction<ContactEmailInterface>) {
      state.contactEmailSlide = action.payload;
    },
    setFullNameSlide(state, action: PayloadAction<ContactNameInterface>) {
      state.contactNameSlide = action.payload;
    },
    setPhoneSlide(state, action: PayloadAction<ContactPhoneInterface>) {
      state.contactPhoneSlide = action.payload;
    },
    setOptionSlide(state, action: PayloadAction<ContactOptionsInterface>) {
      state.contactOptionSlide = action.payload;
    },
    reset: () => initialState,
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
