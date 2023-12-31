package com.world.alfs.controller.member_allergy.request;

import com.world.alfs.service.member_allergy.dto.AddMemberAllergyDto;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AddMemberAllergyRequest {
    private Long memberId;

    private Long allergyId;

    public AddMemberAllergyDto toDto() {
        return AddMemberAllergyDto.builder()
                .member_id(this.memberId)
                .allergy_id(this.memberId)
                .build();
    }
}
