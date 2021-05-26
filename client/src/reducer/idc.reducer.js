import swal from "sweetalert";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  IdcSignInAction,
  IdcTotalCreditnAction,
  IdcCountriesAction,
  IdcConvertCurrencyAction,
  IdcChangePasswordAction,
  IdcVaritiesAction,
  IdcProfileAction,
  IdcCountryCode,
  IdcSignleOrderAction,
} from "../actions/idc_action";

const IDC_INITIAL_STATE = {
  user: null,
  state: null,
  message: null,
  errors: null,
  isIdcAuthenticated: false,
  first_name: "",
  accessToken: null,
  idToken: null,
  refreshToken: null,
  countries: [],
  idcCredits: null,
  expiresIn: null,
  idcProduct: [],
  status: null,
  points: "",
  success: false,
  denomination: "",
  gift_cart_variety_id: "",
  signupSuccess: false,
  reset: false,
  country_code: 71,
  order_response: [],
};

export const IDC_FEATURE_KEY = "idc_signin";
export const idcAdapter = createEntityAdapter();
export const initialIdcState = idcAdapter.getInitialState(IDC_INITIAL_STATE);

export const idcSlice = createSlice({
  name: IDC_FEATURE_KEY,
  initialState: IDC_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(IdcSignInAction.pending, (state, action) => {
        state.errors = null;
        state.user = null;
      })

      .addCase(IdcSignInAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.user = response.data.user;
          state.accessToken = response.data.user.access_token;
          state.isIdcAuthenticated = true;
          state.message = response.message;
          state.first_name = response.data.user.first_name;
          localStorage.setItem(
            "idc_access_token",
            response.data.user.access_token
          );
        }
        if (response.code === 400) {
          state.user = null;
          state.isIdcAuthenticated = false;
          state.errors = [response.message || response.detail || ""];
        } else if (response.code === 401) {
          state.user = null;
          state.errors = [response.message || response.detail || ""];
        }
      })
      .addCase(IdcSignInAction.rejected, (state, action) => {
        state.isIdcAuthenticated = false;
        state.errors = [action.error.message || ""];
      })

      .addCase(IdcCountriesAction.pending, (state, action) => {
        state.countries = [];
      })
      .addCase(IdcCountriesAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.countries = response.data.countries;
        } else {
          state.countries = [];
        }
      })
      .addCase(IdcCountriesAction.rejected, (state, action) => {
        state.countries = [];
        state.errros = [action.error.message || ""];
      })

      .addCase(IdcTotalCreditnAction.pending, (state, action) => {
        state.idcCredits = 0.0;
        state.points = null;
        state.errors = null;
      })
      .addCase(IdcTotalCreditnAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.points = null;
          state.idcCredits = response.data.credits;
          // state.errors = null;
        }
      })
      .addCase(IdcTotalCreditnAction.rejected, (state, action) => {
        state.idcCredits = null;
        state.errors = null;
      })
      .addCase(IdcVaritiesAction.pending, (state, action) => {
        state.idcCredits = null;
        state.errors = null;
      })
      .addCase(IdcVaritiesAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.idcProduct = response.data;
        }

        state.errors = null;
      })
      .addCase(IdcVaritiesAction.rejected, (state, action) => {
        state.idcCredits = null;
        state.errros = [action.error.message || ""];
      })
      .addCase(IdcProfileAction.pending, (state, action) => {
        state.errors = null;
      })
      .addCase(IdcProfileAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.first_name = response.data.profile.first_name;
          state.last_name = response.data.profile.last_name;
          state.email = response.data.profile.email;
        }

        state.errors = null;
      })
      .addCase(IdcProfileAction.rejected, (state, action) => {
        state.errros = [action.error.message || ""];
      })
      .addCase(IdcCountryCode.pending, (state, action) => {
        state.errors = null;
      })
      .addCase(IdcCountryCode.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.country_code = response.data.country_code;
        }
      })
      .addCase(IdcCountryCode.rejected, (state, action) => {
        state.errros = [action.error.message || ""];
      })

      .addCase(IdcSignleOrderAction.pending, (state, action) => {
        state.errors = null;
        state.user = null;
      })
      .addCase(IdcSignleOrderAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.order_response = response;
          swal({
            title: "",
            icon: "success",
            text: "We've successfully received your details. The giftcard will be sent to the user soon.",
            type: "",
            button: {
              text: "Go Back To Homepage",
            },
            allowEscapeKey: false,
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonColor: "#00AF9A",
          }).then(function () {
            window.location.reload();
          });
          // localStorage.setItem("first_name", response.data.user.first_name);
        } else if (response.code === 400) {
          state.errors = [response.message];
        } else if (response.code === 401) {
          state.errors = [response.message || response.detail || ""];
        }
      })
      .addCase(IdcSignleOrderAction.rejected, (state, action) => {
        state.isIdcAuthenticated = false;
        state.errors = [action.error.message || ""];
      })

      .addCase(IdcConvertCurrencyAction.pending, (state, action) => {
        state.errors = null;

        state.points = null;
      })
      .addCase(IdcConvertCurrencyAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          state.points = response.data.converted_amount;
          // localStorage.setItem("first_name", response.data.user.first_name);
        }
        // if (response.code === 400) {
        //   state.user = null;
        //   state.isIdcAuthenticated = false;
        //   state.errors = [response.message];
        // } else if (response.code === 401) {
        //   state.user = null;
        //   state.errors = [response.message || response.detail || ""];
        // }
      })
      .addCase(IdcConvertCurrencyAction.rejected, (state, action) => {
        state.points = null;
        // state.isIdcAuthenticated = false;
        state.errros = [action.error.message || ""];
      })

      .addCase(IdcChangePasswordAction.pending, (state, action) => {
        state.errors = null;
        state.user = null;
      })

      .addCase(IdcChangePasswordAction.fulfilled, (state, action) => {
        const response = action.payload;
        if (response.code === 200) {
          swal({
            title: "",
            icon: "success",
            text: "Password updated successfully",
            type: "",
            allowEscapeKey: false,
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonColor: "#00AF9A",
          });
          // localStorage.setItem("first_name", response.data.user.first_name);
        }
        if (response.code === 400) {
          // state.user = null;
          // state.isIdcAuthenticated = false;
          // state.errors = [response.message];
        } else if (response.code === 401) {
          // state.user = null;
          // state.errors = [response.message || response.detail || ""];
        }
      })
      .addCase(IdcChangePasswordAction.rejected, (state, action) => {
        // state.isIdcAuthenticated = false;
        state.errros = [action.error.message || ""];
      });
  },
});

export const idcReducer = idcSlice.reducer;
export const idcActions = idcSlice.actions;
export const { selectAll, selectEntities } = idcAdapter.getSelectors();
export const getIdcState = (rootState) => rootState[IDC_FEATURE_KEY];
export const selectAllAuth = createSelector(getIdcState, selectAll);
export const selectIdcEntities = createSelector(getIdcState, selectEntities);
