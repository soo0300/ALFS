package com.world.alfs.controller.product;

import com.world.alfs.controller.ApiResponse;
import com.world.alfs.controller.product.request.AddProductRequest;
import com.world.alfs.controller.product.response.GetProductListResponse;
import com.world.alfs.controller.product.response.ProductResponse;
import com.world.alfs.domain.allergy.Allergy;
import com.world.alfs.domain.ingredient.Ingredient;
import com.world.alfs.service.Ingredient_allergy.IngredientAllergyService;
import com.world.alfs.service.allergy.AllergyService;
import com.world.alfs.service.ingredient.IngredientService;
import com.world.alfs.service.member_allergy.MemberAllergyService;
import com.world.alfs.service.product.ProductService;
import com.world.alfs.service.product.dto.AddProductDto;
import com.world.alfs.service.product_ingredient.ProductIngredientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
@Slf4j
public class ProductController {

    private final ProductService productService;
    private final ProductIngredientService productIngredientService;
    private final IngredientAllergyService ingredientAllergyService;
    private final MemberAllergyService memberAllergyService;
    private final AllergyService allergyService;

    @PostMapping()
    public Long addProduct(@RequestBody AddProductRequest request) {
        AddProductDto dto = request.toDto();
        return productService.addProduct(dto);
    }

    @GetMapping("/{id}")
    public ApiResponse<Optional<ProductResponse>> getProduct(@PathVariable Long id) {
        Optional<ProductResponse> savedProduct = productService.getProduct(id);
        return ApiResponse.ok(savedProduct);
    }

    @GetMapping("/all/{memberId}")
    public ApiResponse<List<GetProductListResponse>> getAllProduct(@PathVariable Long memberId) {
        List<Long> product_list = productService.getAllProductId();
        List<String> ingredientName = new ArrayList<>();
        List<GetProductListResponse> response = productService.getAllProduct();

        // allergy 테이블에서 member_allergy_list 에 해당하는 allergy_name과
        // ingredient 테이블에서 product_ingredient_list 에 해당하는 name와 일치한다면,
        // allergy 테이블에서 allergy_id를 저장한 후, allergy_type 를 가졍한다.
        // 여기서 조회된(필터된) allergy_id를 가지고 [allergy]의 allergy_type 을 반환한다.

        for (int i = 0; i < product_list.size(); i++) {
            //step 1. product_id로 product_ingredient 로 [ingredient] 를 조회하여 ingredient_id를 반환한다.
            List<String> compare_ingredient = new ArrayList<>();
            List<Ingredient> product_ingredient_list = productIngredientService.getAllIngredientId(product_list.get(i));
            System.out.println("step1 pass ");
            for (int a = 0; a < product_ingredient_list.size(); a++) {
                compare_ingredient.add(product_ingredient_list.get(a).getName());
                System.out.print(product_ingredient_list.get(a).getId() + " ");
            }
            System.out.println();

            List<Long> memberAllergy_allergy_id_list = memberAllergyService.getFilteredAllergyId(memberId);
            System.out.println("step2 pass ");
            for (int a = 0; a < memberAllergy_allergy_id_list.size(); a++) {
                System.out.print(memberAllergy_allergy_id_list.get(a) + " ");
            }
            System.out.println();

            List<Integer> FilterCode = new ArrayList<>();

            System.out.println("step3 pass ");
            for (int a = 0; a < memberAllergy_allergy_id_list.size(); a++) {
                Allergy allergy = allergyService.getAllergy(memberAllergy_allergy_id_list.get(a));
                for (int b = 0; b < compare_ingredient.size(); b++) {
                    if (compare_ingredient.get(b).equals(allergy.getAllergyName())) {
                        System.out.print(compare_ingredient.get(b) + " ");
                        FilterCode.add(allergy.getAllergyType());
                    }
                }
            }
            response.get(i).setCode(FilterCode);
        }


        return ApiResponse.ok(response);
    }

    @PatchMapping()
    public ApiResponse<Long> setProduct(@RequestBody AddProductRequest request) {
        AddProductDto dto = request.toDto();
        Long savedId = productService.setProduct(dto);
        return ApiResponse.ok(savedId);

    }

    @DeleteMapping("/{id}")
    public ApiResponse<Long> deleteProduct(@PathVariable Long id) {
        Long savedId = productService.deleteProduct(id);
        return ApiResponse.ok(savedId);
    }
}
