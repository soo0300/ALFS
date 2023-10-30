package com.world.alfs.domain.member_allergy;

import com.world.alfs.domain.allergy.Allergy;
import com.world.alfs.domain.member.Member;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberAllergy {
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name="member_id")
    private Member member;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "allergy_id")
    private Allergy all;


    @Builder
    public MemberAllergy(Long id, Member member, Allergy all) {
        this.id = id;
        this.member = member;
        this.all = all;
    }
}
