import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  termBrand,
  descriptionBrand,
  featured_brands,
  brands_by_category,
  allBrand,
} from "../services/brands.service";

export const termBrandAction = createAsyncThunk(
  "brands/listtermBrand",
  async (payload, thunkAPI) => {
    const request = {
      id: payload.id,
      currency: payload.currency,
    };
    const response = await termBrand(request);
    return response;
  }
);

export const descriptionBrandAction = createAsyncThunk(
  "brands",
  async (payload, thunkAPI) => {
    const request = {
      id: payload.id,
      image_size: payload.image_size,
      image_type: payload.image_type,
      currency: payload.currency,
      program_id: payload.program_id,
    };
    const response = await descriptionBrand(request);
    return response;
  }
);

// export const productDescriptionAction = createAsyncThunk('brands/listProductDescription', async(payload, thunkAPI) => {
//     const request = {
//         brand_id:payload.brand_id,
//         currency:payload.currency,
//         program_id:payload.program_id
//     }
//     const response = await product_description(request);
//     return response;
// });

export const featureBrandsAction = createAsyncThunk(
  "brands/listfeatureBrands",
  async (payload, thunkAPI) => {
    const request = {
      program_id: payload.program_id,
      currency: payload.currency,
    };
    const response = await featured_brands(request);
    return response;
  }
);

export const brandsByCategoryAction = createAsyncThunk(
  "brands/listbrandsCategory",
  async (payload, thunkAPI) => {
    const request = {
      program_id: payload.program_id,
      currency: payload.currency,
      category_id: payload.category_id,
    };
    const resposne = await brands_by_category(request);
    return resposne;
  }
);

export const allBrandAction = createAsyncThunk(
  "barnds/listallBrands",
  async (payload, thunkAPI) => {
    const request = {
      currency: payload.currency,
      image_size: payload.image_size,
      image_type: payload.image_type,
      list_type: payload.list_type,
      program_id: payload.program_id,
    };
    const response = await allBrand(request);
    return response;
  }
);
