package com.world.alfs.AwsS3;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/file")
public class AwsS3Controller {

    private final AwsS3Service awsS3Service;

    @PostMapping("/uploadFile")
    public ResponseEntity<?> updateUserImage(@RequestParam("images") MultipartFile multipartFile) {
        Map<String, Object> resultMap = new HashMap<>();
        String imgUrl = null;
        try {
            imgUrl = awsS3Service.uploadFiles(multipartFile, "static");
            resultMap.put("img",imgUrl);
            if(imgUrl == null || imgUrl.isEmpty()){
                return new ResponseEntity<>(resultMap, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(resultMap, HttpStatus.OK);
        } catch (Exception e) {
            log.debug("updateUserImage exception msg", e);
            resultMap.put("error",e.getMessage());
            return new ResponseEntity<>(resultMap, HttpStatus.BAD_REQUEST);
        }
    }
}