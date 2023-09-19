package com.drogeria.backend.service;


import com.drogeria.backend.dto.CategoryDTO;

import java.io.IOException;

public interface CategoryService {
    CategoryDTO saveCategory(CategoryDTO medication)throws IOException;
}
