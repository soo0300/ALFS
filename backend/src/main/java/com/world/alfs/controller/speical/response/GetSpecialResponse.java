package com.world.alfs.controller.speical.response;

import com.world.alfs.domain.product.Product;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class GetSpecialResponse {

    private int status;
    private int count;
    private int salePrice;
    private LocalDateTime start;
    private LocalDateTime end;
    private Product product;
    private Long supervisorId;

    @Builder
    public GetSpecialResponse(int status, int count, int salePrice, LocalDateTime start, LocalDateTime end, Product product, Long supervisorId) {
        this.status = status;
        this.count = count;
        this.salePrice = salePrice;
        this.start = start;
        this.end = end;
        this.product = product;
        this.supervisorId = supervisorId;
    }
}
