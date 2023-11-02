package com.world.alfs.controller.speical;

import com.world.alfs.service.speical.SpecialService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/special")
@Slf4j
public class SpecialController {

    private final SpecialService specialService;

    @PostMapping()
    public Long addSpecial(@RequestBody AddSpecialRequest reqest){

    }
}
