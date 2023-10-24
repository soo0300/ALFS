package com.world.alfs.domain.special.repository;

import com.world.alfs.domain.special.Speical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecialRepository extends JpaRepository<Speical, Long> {
}
