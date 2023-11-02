package com.world.alfs.service.manufacturing_allergy.dto;

import com.world.alfs.domain.manufacturing_allergy.ManufacturingAllergy;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class GetManuAllergyDto {

    private String memberIdentifier;
    private Long productId;

    @Builder
    public GetManuAllergyDto(String memberIdentifier, Long productId) {
        this.memberIdentifier = memberIdentifier;
        this.productId = productId;
    }
    
}
