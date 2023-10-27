package com.world.alfs.service.product;


import com.world.alfs.domain.product.Product;
import com.world.alfs.domain.product.repository.ProductRepository;
import com.world.alfs.domain.product_img.ProductImg;
import com.world.alfs.domain.product_img.repostiory.ProductImgRepository;
import com.world.alfs.service.product.dto.AddProductDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductImgRepository productImgRepository;

    public Long addProduct(AddProductDto dto) {
        Product product = dto.toEntity();
        ProductImg productImg = dto.toImgEntity();
        Product savedProduct = productRepository.save(product);
        productImgRepository.save(productImg);
        return savedProduct.getId();
    }

    public Optional<Product> getProduct(Long id) {
        return productRepository.findById(id);
    }

    public Long setProduct(Long id, int price, int sale) {
        Optional<Product> product = productRepository.findById(id);
        product.get().setProduct(price,sale);
        return product.get().getId();
    }
}