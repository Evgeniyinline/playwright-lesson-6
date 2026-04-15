import { ChallengerServices, ChallengesServices } from "@/services/index.js";

// фасад API
export class Api {
  constructor(request) {
    this.request = request;
    this.challenger = new ChallengerServices(request);
    this.challenges = new ChallengesServices(request);
  }
}
