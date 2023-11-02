package com.world.alfs.controller.manufacturing_allergy.request;

import com.world.alfs.service.manufacturing_allergy.dto.GetManuAllergyDto;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class GetManuAllergyRequest {

    private String memberIdentifier;
    private Long productId;

    @Builder
    public GetManuAllergyRequest(String memberIdentifier, Long productId) {
        this.memberIdentifier = memberIdentifier;
        this.productId = productId;
    }

    public GetManuAllergyDto toDto() {
        return GetManuAllergyDto.builder()
                .memberIdentifier(memberIdentifier)
                .productId(productId)
                .build();
    }

}
