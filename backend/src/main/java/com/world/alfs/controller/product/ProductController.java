package com.world.alfs.controller.product;

import com.world.alfs.controller.ApiResponse;
import com.world.alfs.controller.product.request.AddProductRequest;
import com.world.alfs.controller.product.response.ProductResponse;
import com.world.alfs.domain.product.Product;
import com.world.alfs.service.product.ProductService;
import com.world.alfs.service.product.dto.AddProductDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
@Slf4j
public class ProductController {

    private final ProductService productService;

    @PostMapping()
    public Long addProduct(@RequestBody AddProductRequest request){
        AddProductDto dto = request.toDto();
        return productService.addProduct(dto);

    }

    @GetMapping()
    public ApiResponse<ProductResponse>getProduct(@PathVariable Long id){
        ProductResponse productResponse = null;
        Optional<Product> savedProduct = productService.getProduct(id);
//        toResponse();
        return ApiResponse.ok(productResponse);
    }
    @GetMapping("/hello")
    public Long getProduct(){
        return 1L;
    }

}
