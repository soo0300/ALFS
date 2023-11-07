package com.world.alfs.config.batch;

import com.world.alfs.domain.special.Special;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.test.JobLauncherTestUtils;
import org.springframework.batch.test.context.SpringBatchTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.ContextConfiguration;

import java.util.ArrayList;
import java.util.List;

@SpringBatchTest
@ContextConfiguration(classes = BatchJobConfiguration.class)
public class BatchJobConfigurationTest {

    @Autowired
    private JobLauncherTestUtils jobLauncherTestUtils;

    @Autowired
    private Job job;

    @Test
    public void testBatchJob() throws Exception {
        // give
        // when
        JobExecution jobExecution = this.jobLauncherTestUtils.launchJob();

        // then
        Assertions.assertEquals(ExitStatus.COMPLETED, jobExecution.getExitStatus());
        // 테스트를 위한 검증 로직 추가

        // 예를 들어, Job의 상태 검증
        BatchStatus batchStatus = jobExecution.getStatus();
        // 상태에 따른 검증 로직 추가

        // ItemWriter의 동작 검증
        // 아래에서는 MockItemWriter를 사용하여 ItemWriter의 동작을 검증
        MockItemWriter mockItemWriter = (MockItemWriter) job.getJobParametersValidator();
        List<Special> writtenItems = mockItemWriter.getWrittenItems();
        // writtenItems를 검증

        // 또는 실제 데이터베이스 또는 저장소에 쓰인 결과를 확인할 수도 있습니다.
    }

    @Bean
    @StepScope
    public ItemWriter<Special> customItemWriter() {
        return new MockItemWriter();
    }

    // MockItemWriter를 사용하여 ItemWriter의 동작을 검증
    public static class MockItemWriter implements ItemWriter<Special> {
        private List<Special> writtenItems = new ArrayList<>();

        @Override
        public void write(List<? extends Special> items) throws Exception {
            writtenItems.addAll(items);
        }

        public List<Special> getWrittenItems() {
            return writtenItems;
        }
    }
}