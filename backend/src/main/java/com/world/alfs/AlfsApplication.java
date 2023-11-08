package com.world.alfs;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableBatchProcessing
@SpringBootApplication(
		exclude = {
			org.springframework.cloud.aws.autoconfigure.context.ContextInstanceDataAutoConfiguration.class,
			org.springframework.cloud.aws.autoconfigure.context.ContextStackAutoConfiguration.class,
			org.springframework.cloud.aws.autoconfigure.context.ContextRegionProviderAutoConfiguration.class
})
public class AlfsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlfsApplication.class, args);
//		System.exit(
//				SpringApplication.exit(
//						SpringApplication.run(AlfsApplication.class, args)
//				)
//		);
	}

}
