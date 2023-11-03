package com.world.alfs.service.speical;

import com.world.alfs.domain.product.Product;
import com.world.alfs.domain.product.repository.ProductRepository;
import com.world.alfs.domain.special.repository.SpecialRepository;
import com.world.alfs.domain.supervisor.Supervisor;
import com.world.alfs.domain.supervisor.repository.SupervisorRepository;
import com.world.alfs.service.speical.dto.AddSpecialDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class SpecialService {

    private final SpecialRepository specialRepository;
    private final ProductRepository productRepository;
    private final SupervisorRepository supervisorRepository;

    public Long addSpecial(AddSpecialDto dto) {
        Optional<Product> product = productRepository.findById(dto.getProductId());
        Optional<Supervisor> supervisor = supervisorRepository.findById(dto.getSupervisorId());

//        AddSpecialDto

        return null;
    }

//    public List<> getAllProduct(){
//
//    }
//
//    public Long getProduct(Long id){
//
//    }
//
//    public Long setProduct(Long id, AddSpecialDto dto){
//
//    }
//
//    public Long deleteProduct(Long id){
//
//    }


}