import { Module } from '@nestjs/common';
import { SimulationController } from './controllers/simulation.controller';
import { GitService } from './services/git.service';
import { FileLogger } from './services/logger';
import { SimulationExecutorService } from './services/simulation-executor.service';
import { SimulationRepositoryService } from './services/simulation-repository.service';
import { SimulationRunnerService } from './services/simulation-runner.service';

@Module({
  controllers: [SimulationController],
  providers: [SimulationExecutorService, SimulationRepositoryService, 
    SimulationRunnerService, GitService, FileLogger],
  exports: [SimulationExecutorService, SimulationRepositoryService, 
    SimulationRunnerService, GitService, FileLogger]
})
export class SimulationModule {}
