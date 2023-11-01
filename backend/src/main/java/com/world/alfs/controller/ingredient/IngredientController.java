package com.world.alfs.controller.ingredient;

import com.world.alfs.controller.ApiResponse;
import com.world.alfs.service.ingredient.IngredientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ingredient")
@Slf4j
public class IngredientController {

    private final IngredientService ingredientService;

    @GetMapping
    public ApiResponse<Long> checkIngredient(@PathVariable Long productId,
                                             @PathVariable List<String>productList) {
        ingredientService.checkIngredient(productId, productList);
        return ApiResponse.ok(1L);


    }

}
