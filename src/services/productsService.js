import services from './services';

export const getAllProductsSer = async () => {
  try {
    const { data, status } = await services.getAllProducts();
    if (status === 200) {
      return {
        success: true,
        message: 'Items fetched successfully!',
        data,
      };
    }
    return {
      success: false,
      message: 'Cannot fetch items!',
      data: data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: 'Unexpected error!',
      data: [],
    };
  }
};

export const getCategoriesSer = async () => {
  try {
    const { data, status } = await services.getAllCategories();
    if (status === 200) {
      return {
        success: true,
        message: 'Categories fetched successfully!',
        data,
      };
    }
    return {
      success: false,
      message: 'Cannot fetch categories!',
      data: data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: 'Unexpected error!',
      data: [],
    };
  }
};

export const getProductsByCategorySer = async ({ value }) => {
  try {
    const { data, status } = await services.getProductsByCategory({ value });
    if (status === 200) {
      return {
        success: true,
        message: 'Products fetched successfully!',
        data,
      };
    }
    return {
      success: false,
      message: 'Cannot fetch Products!',
      data: data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: 'Unexpected error!',
      data: [],
    };
  }
};
