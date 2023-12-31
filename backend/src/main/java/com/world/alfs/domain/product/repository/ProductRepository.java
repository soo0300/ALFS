package com.world.alfs.domain.product.repository;

import com.world.alfs.domain.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByIdBetween(Long startId, Long endId);

    void deleteById(Long id);

    Product findByTitle(String title);

    List<Product> findByCategory(int category);

    List<Product> findByNameContains(String word);

    Page<Product> findAllByOrderBySaleDescIdAsc(PageRequest pageRequest);

    Page<Product> findAllByOrderBySaleAscIdAsc(PageRequest pageRequest);
}
