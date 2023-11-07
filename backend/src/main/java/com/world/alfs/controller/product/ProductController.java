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

        for (int i = 0; i < product_list.size(); i++) {
            //step 1. product_id로 product_ingredient 로 [ingredient] 를 조회하여 ingredient_id를 반환한다.
            List<String> compare_ingredient = new ArrayList<>();
            List<Ingredient> product_ingredient_list = productIngredientService.getAllIngredientId(product_list.get(i));
            System.out.println("step1 pass " + product_ingredient_list.size());
            for (int a = 0; a < product_ingredient_list.size(); a++) {
                compare_ingredient.add(product_ingredient_list.get(a).getName());
                System.out.print(product_ingredient_list.get(a).getId() + " ");
            }
            System.out.println();

            //step 2. [ingredient] 로 [ingredient_allergy]의 allergy_id를 조회한다.

//            List<Long> allergy_list = new ArrayList<>();
//            System.out.println("step2 pass ");
//            for(int a=0; a<ingredient_list.size(); a++){
//                ingredientAllergyService.getAllAllergyId(allergy_list, ingredient_list.get(a));
//            }
//            for(int a=0; a<allergy_list.size(); a++){
//                System.out.print(allergy_list.get(a)+" ");
//            }
//            System.out.println();

            //step 3. allergy_id와 동일하고 member_id가 같은 컬럼을 [member_allergy]에서 조회한다.
            //member_allergy_list 에 아무것도 저장안된!!!!!!
            List<Long> memberAllergy_allergy_id_list = memberAllergyService.getFilteredAllergyId(memberId);
            System.out.println("step3 pass " + memberAllergy_allergy_id_list.size());

            for (int a = 0; a < memberAllergy_allergy_id_list.size(); a++) {
//                compare_allergy.add(allergyService.getAllergyName(memberAllergy_allergy_id_list.get(a)));
                System.out.print(memberAllergy_allergy_id_list.get(a) + " ");
            }
            System.out.println();

            List<Integer> FilterCode = new ArrayList<>();


            for (int a = 0; a < memberAllergy_allergy_id_list.size(); a++) {
                Allergy allergy = allergyService.getAllergy(memberAllergy_allergy_id_list.get(a));
                for (int b = 0; b < compare_ingredient.size(); b++) {
                    if (compare_ingredient.get(b).equals(allergy.getAllergyName())) {
                        System.out.println(compare_ingredient.get(b) + " ");
                        FilterCode.add(allergy.getAllergyType());
                    }
                }
            }

            // allergy 테이블에서 member_allergy_list 에 해당하는 allergy_name과
            // ingredient 테이블에서 product_ingredient_list 에 해당하는 name와 일치한다면,
            // allergy 테이블에서 allergy_id를 저장한 후, allergy_type 를 가졍한다.

            //step 3. 여기서 조회된(필터된) allergy_id를 가지고 [allergy]의 allergy_type 을 반환한다.
//            System.out.println("step4 pass");
//            for(int a=0; a<member_allergy_list.size(); a++){
//                System.out.print(member_allergy_list.get(a));
//            }
//            System.out.println();

            //step 4. response 에 allergy_type 을 세팅한다.
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
